import type {
  FullSlug,
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { simplifySlug } from "@quartz-community/utils";

interface RelatedComponentOptions {
  title?: string;
}

const RelatedComponent: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
}: QuartzComponentProps) => {
  const related = ((fileData as Record<string, unknown>).related as string[] | undefined) ?? [];
  if (related.length === 0) return null;

  const pages = related.map((slug) => {
    const found = allFiles?.find(
      (f) => simplifySlug((f.slug as FullSlug | undefined) ?? ("" as FullSlug)) === slug,
    );
    const title =
      ((found?.frontmatter as Record<string, unknown> | undefined)?.title as string | undefined) ??
      slug.split("/").pop() ??
      slug;
    return { slug, title };
  });

  return (
    <div class={`related ${displayClass ?? ""}`}>
      <h3>Related</h3>
      <ul>
        {pages.map(({ slug, title }) => (
          <li key={slug}>
            <a href={`/${slug}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Related: QuartzComponentConstructor<RelatedComponentOptions> = (_opts) => RelatedComponent;
export default Related;
