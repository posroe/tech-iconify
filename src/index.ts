import { createElement, Fragment } from "react";
import type { ComponentProps, ComponentType, ReactElement, ReactNode } from "react";
import { Icon as IconifyIcon, addCollection } from "@iconify/react";
import { icons as materialIcons } from "@iconify-json/material-icon-theme";

// โหลด collection แบบ offline (ไม่ต้องยิง API ของ Iconify)
addCollection(materialIcons);

type IconProps = Omit<ComponentProps<typeof IconifyIcon>, "icon">;
type IconComponent = ComponentType<IconProps>;

interface TechIconEntry {
    keywords: string[];
    icon: IconComponent;
}

const PREFIX = materialIcons.prefix; // "material-icon-theme"

const entry = (name: string, keywords: string[]): TechIconEntry => {
    const Icon = (props: IconProps) =>
        createElement(IconifyIcon, { ssr: true, ...props, icon: `${PREFIX}:${name}` });
    Icon.displayName = `TechIcon(${name})`;
    return { keywords, icon: Icon };
};

export const icons: TechIconEntry[] = [
    // Web
    entry("javascript", ["javascript", "js", "mjs", "cjs"]),
    entry("typescript", ["typescript", "ts", "mts", "cts"]),
    entry("react", ["jsx"]),
    entry("react-ts", ["tsx"]),
    entry("html", ["html", "html-derivative"]),
    entry("css", ["css"]),
    entry("sass", ["sass", "scss"]),
    entry("less", ["less"]),
    entry("stylus", ["stylus", "styl"]),
    entry("postcss", ["postcss"]),
    entry("vue", ["vue", "vue-html", "vue-vine"]),
    entry("svelte", ["svelte"]),
    entry("astro", ["astro"]),
    entry("angular", ["angular-ts", "angular-html"]),
    entry("laravel", ["blade"]),
    entry("pug", ["pug", "jade"]),
    entry("handlebars", ["handlebars", "hbs"]),
    entry("haml", ["haml"]),
    entry("liquid", ["liquid"]),
    entry("twig", ["twig"]),
    entry("jinja", ["jinja"]),
    entry("razor", ["razor"]),
    entry("edge", ["edge"]),
    entry("markojs", ["marko"]),
    entry("ember", ["gjs", "gts", "glimmer-js", "glimmer-ts"]),
    entry("graphql", ["graphql", "gql"]),
    entry("prisma", ["prisma"]),
    entry("webassembly", ["wasm"]),
    entry("http", ["http"]),
    entry("hurl", ["hurl"]),

    // Data / config / docs
    entry("json", ["json", "jsonc", "json5", "jsonl"]),
    entry("hjson", ["hjson"]),
    entry("yaml", ["yaml", "yml"]),
    entry("toml", ["toml"]),
    entry("xml", ["xml", "xsl"]),
    entry("settings", ["ini", "properties"]),
    entry("tune", ["dotenv"]),
    entry("table", ["csv", "tsv"]),
    entry("proto", ["proto", "protobuf"]),
    entry("pkl", ["pkl"]),
    entry("cue", ["cue"]),
    entry("markdown", ["markdown", "md", "mdc"]),
    entry("mdx", ["mdx"]),
    entry("asciidoc", ["asciidoc", "adoc"]),
    entry("tex", ["tex", "latex"]),
    entry("bibliography", ["bibtex"]),
    entry("typst", ["typst", "typ"]),
    entry("mermaid", ["mermaid", "mmd"]),
    entry("log", ["log"]),
    entry("diff", ["diff"]),
    entry("codeowners", ["codeowners"]),
    entry("database", ["sql", "plsql"]),
    entry("kusto", ["kusto", "kql"]),
    entry("regedit", ["reg"]),
    entry("powerpoint", ["potx"]),

    // Shell / tooling
    entry("console", ["bash", "sh", "shell", "shellscript", "shellsession", "console", "zsh", "fish", "bat", "batch", "cmd"]),
    entry("powershell", ["powershell", "ps1", "pwsh", "ps"]),
    entry("autohotkey", ["ahk", "ahk1", "ahk2"]),
    entry("docker", ["docker", "dockerfile"]),
    entry("terraform", ["terraform", "tf", "tfvars"]),
    entry("hcl", ["hcl"]),
    entry("nginx", ["nginx"]),
    entry("nix", ["nix"]),
    entry("git", ["git-commit", "git-rebase"]),
    entry("vim", ["vim", "viml", "vimscript"]),
    entry("makefile", ["make", "makefile"]),
    entry("cmake", ["cmake"]),
    entry("just", ["just", "justfile"]),
    entry("systemd", ["systemd"]),
    entry("puppet", ["puppet"]),
    entry("nextflow", ["nextflow", "nf", "nextflow-groovy"]),

    // General-purpose languages
    entry("python", ["python", "py"]),
    entry("java", ["java"]),
    entry("kotlin", ["kotlin", "kt", "kts"]),
    entry("scala", ["scala"]),
    entry("groovy", ["groovy"]),
    entry("swift", ["swift"]),
    entry("objective-c", ["objc", "objective-c"]),
    entry("objective-cpp", ["objective-cpp"]),
    entry("dart", ["dart"]),
    entry("go", ["go"]),
    entry("rust", ["rust", "rs"]),
    entry("c", ["c"]),
    entry("cpp", ["c++", "cpp"]),
    entry("csharp", ["c#", "csharp", "cs"]),
    entry("fsharp", ["f#", "fs", "fsharp"]),
    entry("ruby", ["ruby", "rb", "erb", "rbs", "ruby-signature"]),
    entry("php-elephant", ["php"]),
    entry("hack", ["hack"]),
    entry("perl", ["perl", "perl6", "raku"]),
    entry("lua", ["lua"]),
    entry("luau", ["luau"]),
    entry("julia", ["julia", "jl"]),
    entry("r", ["r"]),
    entry("matlab", ["matlab"]),
    entry("wolframlanguage", ["wolfram", "wl"]),
    entry("elixir", ["elixir"]),
    entry("erlang", ["erlang", "erl"]),
    entry("elm", ["elm"]),
    entry("haskell", ["haskell", "hs"]),
    entry("ocaml", ["ocaml"]),
    entry("clojure", ["clojure", "clj"]),
    entry("lisp", ["lisp", "common-lisp", "elisp", "emacs-lisp"]),
    entry("scheme", ["scheme"]),
    entry("racket", ["racket"]),
    entry("prolog", ["prolog"]),
    entry("purescript", ["purescript"]),
    entry("coffee", ["coffee", "coffeescript"]),
    entry("actionscript", ["actionscript", "actionscript-3", "as3"]),
    entry("haxe", ["haxe", "hxml"]),
    entry("crystal", ["crystal"]),
    entry("d", ["d"]),
    entry("nim", ["nim"]),
    entry("zig", ["zig"]),
    entry("vala", ["vala"]),
    entry("vlang", ["v"]),
    entry("odin", ["odin"]),
    entry("mojo", ["mojo"]),
    entry("gleam", ["gleam"]),
    entry("pascal", ["pascal"]),
    entry("ada", ["ada"]),
    entry("fortran", ["fortran-fixed-form", "fortran-free-form", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18"]),
    entry("cobol", ["cobol"]),
    entry("abap", ["abap"]),
    entry("salesforce", ["apex"]),
    entry("sas", ["sas"]),
    entry("tcl", ["tcl"]),
    entry("assembly", ["asm", "mips", "mipsasm", "riscv"]),
    entry("applescript", ["applescript"]),
    entry("ballerina", ["ballerina"]),
    entry("beancount", ["beancount"]),
    entry("bicep", ["bicep"]),
    entry("c3", ["c3"]),
    entry("cadence", ["cadence", "cdc"]),
    entry("cairo", ["cairo"]),
    entry("freemarker", ["ftl"]),
    entry("cucumber", ["gherkin"]),
    entry("godot", ["gd", "gdscript", "gdresource", "tres", "tscn"]),
    entry("gnuplot", ["gnuplot"]),
    entry("imba", ["imba"]),
    entry("lean", ["lean", "lean4"]),
    entry("templ", ["templ"]),

    // Smart contracts / graphics / hardware
    entry("solidity", ["solidity"]),
    entry("shader", ["glsl", "hlsl", "wgsl", "gdshader", "shader", "shaderlab"]),
    entry("verilog", ["verilog", "system-verilog"]),
];

const iconMap = new Map<string, IconComponent>();
for (const { keywords, icon } of icons) {
    for (const keyword of keywords) iconMap.set(keyword, icon);
}

/** Look up an icon by a Shiki language id / alias (case-insensitive). */
export function getTechIcon(keyword: string): IconComponent | undefined {
    return iconMap.get(keyword.toLowerCase());
}

export interface TechIconifyProps extends IconProps {
    /** Shiki language id / alias, e.g. "ts", "python", "dockerfile" */
    keyword: string;
    /** Rendered when no icon matches `keyword` */
    children?: ReactNode;
}

/**
 * <TechIconify keyword="ts" className="size-5">{fallback}</TechIconify>
 * Renders the matching tech icon, or `children` if there is none.
 */
export default function TechIconify({
    keyword,
    children,
    ...props
}: TechIconifyProps): ReactElement {
    const Icon = getTechIcon(keyword);
    if (!Icon) return createElement(Fragment, null, children);
    return createElement(Icon, props);
}