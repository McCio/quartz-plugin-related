# @quartz-community/related

A transformer plugin for [Quartz v5](https://quartz.jzhao.xyz/) that reads a `related` frontmatter key from your notes and renders a "Related" sidebar component linking to those pages.

## Installation

```bash
npx quartz plugin add github:McCio/quartz-plugin-related --name related
```

This installs the plugin under the canonical name `related`. Quartz writes the object source form to `quartz.config.yaml` so that both the repository URL and the canonical name are recorded.

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source:
      repo: github:McCio/quartz-plugin-related
      name: related
    enabled: true
    options:
      keys:
        - related
    layout:
      position: right
      priority: 40
```

Add a `related` key to any note's frontmatter to link to related pages:

```yaml
---
related:
  - path/to/other/note
  - another/note
---
```

Quartz resolves each path to its page title at build time and renders them as a "Related" panel in the sidebar.

For advanced use cases, you can override options in TypeScript:

```ts title="quartz.ts (override)"
import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.Related({
  keys: ["related"],
});
```

## Configuration

| Option | Type       | Default       | Description                                                                        |
| ------ | ---------- | ------------- | ---------------------------------------------------------------------------------- |
| `keys` | `string[]` | `["related"]` | Frontmatter keys to read for related page links. Paths are resolved at build time. |

## Layout

The plugin registers a sidebar component. Use the `layout` block in `quartz.config.yaml` to control its placement:

| Field      | Type     | Default | Description                                                      |
| ---------- | -------- | ------- | ---------------------------------------------------------------- |
| `position` | `string` | `right` | Sidebar position. One of `left` or `right`.                      |
| `priority` | `number` | `40`    | Render order within the sidebar. Lower numbers appear higher up. |

## License

MIT
