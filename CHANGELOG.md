# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-11-08

### Changed

- `getTechIcon` and `<TechIconify />` `keyword` now accept `undefined` and return/render fallback when no keyword is provided.

## [0.0.1] - 2026-10-18

### Added

- Initial release of **`tech-iconify`**.
- `<TechIconify />` component:
  - Maps Shiki & VS Code language IDs and file extensions/aliases to Material Icon Theme icons.
  - Case-insensitive lookup (e.g., `TypeScript`, `ts`, `typescript`).
  - Fallback content rendering via `children` when no matching icon is found.
  - Full prop-forwarding support to underlying `@iconify/react` `<Icon />` (supports `size`, `color`, `className`, `style`, `onClick`, etc.).
- Offline bundle powered by `@iconify-json/material-icon-theme` and `@iconify/react` (no network or API calls at runtime).
- `getTechIcon(keyword)` programmatic helper returning the icon React component directly or `undefined`.
- `icons` exported metadata list containing all mapped entries and keywords.
- Support for over 130+ tech languages and formats across categories:
  - **Web**: JavaScript, TypeScript, React (JSX/TSX), Vue, Svelte, Astro, HTML, CSS, SCSS, Tailwind, GraphQL, Prisma, WASM, and templating engines.
  - **Data & Config**: JSON, YAML, TOML, XML, CSV, INI, Protobuf, Cue, Pkl, and dotenv.
  - **Docs & Markup**: Markdown, MDX, LaTeX, Typst, Mermaid, AsciiDoc, and diffs.
  - **Shell & Tooling**: Bash, Zsh, PowerShell, Docker, Terraform, Nginx, Nix, Make, CMake, Just, and Git.
  - **General-purpose**: Python, Go, Rust, Java, Kotlin, Swift, C/C++, C#, Ruby, PHP, Dart, Lua, Zig, Elixir, Haskell, and more.
  - **Smart Contracts, GPU & Hardware**: Solidity, GLSL, HLSL, WGSL, and Verilog.
- TypeScript definitions and ESM builds powered by `tsup`.
- Comprehensive test coverage using `vitest`.
