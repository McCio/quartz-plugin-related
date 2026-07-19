import type { PluggableList } from "unified";
import type { VFile } from "vfile";
import type { FullSlug, QuartzTransformerPlugin } from "@quartz-community/types";
import { simplifySlug } from "@quartz-community/utils";
import type { RelatedOptions } from "./types";

// Strip [[...]] wikilink syntax and return the inner path (before any | alias separator)
function stripWikilink(value: string): string {
  const match = value.match(/^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return match ? match[1]!.trim() : value.trim();
}

export const RelatedTransformer: QuartzTransformerPlugin<RelatedOptions> = (opts) => {
  const keys = opts?.keys ?? ["related"];

  return {
    name: "RelatedTransformer",
    markdownPlugins(): PluggableList {
      return [
        () => (_tree, file: VFile) => {
          const fm = (file.data as Record<string, unknown>).frontmatter as
            | Record<string, unknown>
            | undefined;
          if (!fm) return;

          const related: string[] = [];
          for (const key of keys) {
            const val = fm[key];
            if (!val) continue;
            const items = Array.isArray(val) ? val : [val];
            for (const item of items) {
              if (typeof item === "string" && item.trim()) {
                related.push(simplifySlug(stripWikilink(item) as FullSlug));
              }
            }
          }

          if (related.length > 0) {
            (file.data as Record<string, unknown>).related = related;
          }
        },
      ];
    },
    htmlPlugins(): PluggableList {
      return [
        () => (_tree, file: VFile) => {
          const data = file.data as Record<string, unknown>;
          const related = data.related as string[] | undefined;
          if (!related || related.length === 0) return;
          // Append related slugs to the outgoing links array so graph and backlinks pick them up
          const existing = (data.links as string[] | undefined) ?? [];
          const merged = Array.from(new Set([...existing, ...related]));
          data.links = merged;
        },
      ];
    },
  };
};
