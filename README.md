# tech-iconify

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/tech-iconify.svg)](https://www.npmjs.com/package/tech-iconify)
[![npm download](https://img.shields.io/npm/dt/tech-iconify.svg)](https://www.npmjs.com/package/tech-iconify)

A lightweight React component that maps **Shiki / VS Code language IDs** to beautiful [Material Icon Theme](https://github.com/material-extensions/vscode-material-icon-theme) SVG icons — powered by [`@iconify/react`](https://www.npmjs.com/package/@iconify/react) with the full icon set bundled offline (zero API calls).

## Installation

```bash
npm install tech-iconify
```

```bash
# or using pnpm / bun
pnpm add tech-iconify
bun add tech-iconify
```

### Peer dependencies

`react` ≥ 19 is required as a peer dependency.

## Usage

### 1. Basic icon rendering

Pass any Shiki language ID, VS Code language ID, or common alias. Lookup is **case-insensitive**.

```tsx
import TechIconify from "tech-iconify";

export default function TechBadges() {
  return (
    <div className="flex items-center gap-3">
      <TechIconify keyword="typescript" size={24} />
      <TechIconify keyword="python" size={24} />
      <TechIconify keyword="dockerfile" size={24} />
      <TechIconify keyword="yml" size={24} />
      {/* Case-insensitive */}
      <TechIconify keyword="Rust" size={24} />
    </div>
  );
}
```

### 2. Providing a fallback with `children`

If no icon can be resolved for a keyword, `TechIconify` renders its `children`. If no `children` are provided, nothing is rendered.

```tsx
import TechIconify from "tech-iconify";
import { FileCode } from "lucide-react";

export default function LanguageIcon({ lang }: { lang: string }) {
  return (
    <TechIconify keyword={lang} size={20}>
      <FileCode size={20} className="text-gray-400" />
    </TechIconify>
  );
}
```

### 3. Programmatic lookup with `getTechIcon`

`getTechIcon` returns the matching **Icon component** directly, or `undefined` if no match is found.

```tsx
import { getTechIcon } from "tech-iconify";

const PythonIcon = getTechIcon("python");

export default function CustomIcon() {
  if (!PythonIcon) return <span>No icon</span>;
  return <PythonIcon size={24} className="text-blue-500" />;
}
```

### 4. Integration with code block headers

Pairs naturally with syntax highlighters like Shiki or Prism:

```tsx
import TechIconify from "tech-iconify";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b">
        <TechIconify keyword={language} size={16} />
        <span className="text-xs font-mono font-medium text-gray-600 dark:text-gray-300">
          {language}
        </span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
```

## API

### `<TechIconify />` (default export)

Renders the matching Material Icon Theme SVG icon, or renders `children` as a fallback.

| Prop        | Type               | Default      | Description                                                                                       |
| ----------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------------- |
| `keyword`   | `string`           | **required** | Shiki / VS Code language ID or alias (e.g. `"ts"`, `"python"`, `"dockerfile"`). Case-insensitive. |
| `children`  | `ReactNode`        | `undefined`  | Fallback content rendered when no icon matches `keyword`.                                         |
| `size`      | `number \| string` | `24`         | Icon size in pixels.                                                                              |
| `color`     | `string`           | —            | CSS color to tint the icon.                                                                       |
| `opacity`   | `number`           | `1`          | Opacity between `0` and `1`.                                                                      |
| `className` | `string`           | —            | Additional CSS class name.                                                                        |
| `style`     | `CSSProperties`    | —            | Inline CSS styles.                                                                                |
| `onClick`   | `(event) => void`  | —            | Click handler.                                                                                    |

> All additional props supported by [`@iconify/react`](https://iconify.design/docs/icon-components/react/) are forwarded to the underlying `<Icon />` component.

### `getTechIcon(keyword)` (named export)

Resolves a keyword to its icon **React component**. Returns `undefined` if no match is found.

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| `keyword` | `string` | Language ID or alias (case-insensitive). |

**Returns** `ComponentType<IconProps> | undefined` — a React component you can render directly with any Iconify props.

### `icons` (named export)

The full lookup table — an array of `{ keywords: string[], icon: ComponentType }` entries. Useful for building search UIs or listing all supported languages.

## Supported languages

<details>
<summary>Click to expand full list (~130 languages)</summary>

| Category                  | Keywords                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Web**                   | `javascript`, `js`, `mjs`, `cjs`, `typescript`, `ts`, `mts`, `cts`, `jsx`, `tsx`, `html`, `css`, `sass`, `scss`, `less`, `stylus`, `postcss`, `vue`, `svelte`, `astro`, `angular-ts`, `blade`, `pug`, `handlebars`, `haml`, `liquid`, `twig`, `jinja`, `razor`, `edge`, `marko`, `gjs`, `gts`, `graphql`, `prisma`, `wasm`, `http`, `hurl`                                                                                                                                                                                                                                                                                                                       |
| **Data / Config**         | `json`, `jsonc`, `json5`, `jsonl`, `hjson`, `yaml`, `yml`, `toml`, `xml`, `ini`, `dotenv`, `csv`, `tsv`, `proto`, `pkl`, `cue`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Docs**                  | `markdown`, `md`, `mdx`, `asciidoc`, `tex`, `latex`, `bibtex`, `typst`, `mermaid`, `log`, `diff`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Shell / Tooling**       | `bash`, `sh`, `shell`, `zsh`, `fish`, `bat`, `cmd`, `powershell`, `ps1`, `ahk`, `docker`, `dockerfile`, `terraform`, `hcl`, `nginx`, `nix`, `vim`, `make`, `cmake`, `just`, `systemd`, `puppet`, `nextflow`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **General-purpose**       | `python`, `py`, `java`, `kotlin`, `kt`, `scala`, `groovy`, `swift`, `objc`, `dart`, `go`, `rust`, `rs`, `c`, `cpp`, `c++`, `csharp`, `c#`, `cs`, `fsharp`, `f#`, `ruby`, `rb`, `php`, `hack`, `perl`, `raku`, `lua`, `luau`, `julia`, `r`, `matlab`, `wolfram`, `elixir`, `erlang`, `elm`, `haskell`, `ocaml`, `clojure`, `lisp`, `scheme`, `racket`, `prolog`, `purescript`, `coffeescript`, `actionscript`, `haxe`, `crystal`, `d`, `nim`, `zig`, `vala`, `v`, `odin`, `mojo`, `gleam`, `pascal`, `ada`, `fortran`, `cobol`, `abap`, `apex`, `sas`, `tcl`, `asm`, `applescript`, `ballerina`, `bicep`, `cairo`, `gdscript`, `gnuplot`, `imba`, `lean`, `templ` |
| **Contracts / GPU / HDL** | `solidity`, `glsl`, `hlsl`, `wgsl`, `gdshader`, `verilog`, `system-verilog`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

</details>

## How it works

1. The full [Material Icon Theme](https://github.com/material-extensions/vscode-material-icon-theme) icon set is bundled via `@iconify-json/material-icon-theme` and registered with `@iconify/react` at import time — **no network requests**.
2. A curated mapping table links each Shiki / VS Code language ID to the appropriate icon name.
3. `<TechIconify>` performs a case-insensitive lookup and renders the SVG icon inline, or falls back to `children`.
