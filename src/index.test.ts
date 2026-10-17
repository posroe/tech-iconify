import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import TechIconify, { getTechIcon, icons } from ".";

const allKeywords = icons.flatMap((entry) => entry.keywords);

const render = (props: Parameters<typeof TechIconify>[0], fallback?: string) =>
    renderToStaticMarkup(
        fallback === undefined
            ? createElement(TechIconify, props)
            : createElement(
                TechIconify,
                props,
                createElement("span", { "data-fallback": "" }, fallback),
            ),
    );

describe("icons table", () => {
    it("has at least one entry", () => {
        expect(icons.length).toBeGreaterThan(0);
    });

    it("every entry has at least one keyword and a component", () => {
        for (const entry of icons) {
            expect(entry.keywords.length).toBeGreaterThan(0);
            expect(typeof entry.icon).toBe("function");
        }
    });

    it("keywords are non-empty, trimmed and lowercase", () => {
        for (const keyword of allKeywords) {
            expect(keyword.length).toBeGreaterThan(0);
            expect(keyword).toBe(keyword.trim());
            expect(keyword).toBe(keyword.toLowerCase());
        }
    });

    it("has no duplicate keywords across entries", () => {
        const seen = new Map<string, number>();
        for (const keyword of allKeywords) {
            seen.set(keyword, (seen.get(keyword) ?? 0) + 1);
        }
        const duplicates = [...seen.entries()]
            .filter(([, count]) => count > 1)
            .map(([keyword]) => keyword);
        expect(duplicates).toEqual([]);
    });
});

describe("getTechIcon", () => {
    it("resolves every declared keyword", () => {
        for (const keyword of allKeywords) {
            expect(getTechIcon(keyword), `keyword "${keyword}"`).toBeDefined();
        }
    });

    it("is case-insensitive", () => {
        expect(getTechIcon("TypeScript")).toBe(getTechIcon("typescript"));
        expect(getTechIcon("PY")).toBe(getTechIcon("python"));
    });

    it("maps aliases to the same icon", () => {
        expect(getTechIcon("ts")).toBe(getTechIcon("typescript"));
        expect(getTechIcon("js")).toBe(getTechIcon("javascript"));
        expect(getTechIcon("sh")).toBe(getTechIcon("bash"));
        expect(getTechIcon("yml")).toBe(getTechIcon("yaml"));
        expect(getTechIcon("rs")).toBe(getTechIcon("rust"));
        expect(getTechIcon("c#")).toBe(getTechIcon("csharp"));
        expect(getTechIcon("cpp")).toBe(getTechIcon("c++"));
        expect(getTechIcon("mts")).toBe(getTechIcon("typescript"));
    });

    it("maps ps to powershell (not Photoshop)", () => {
        expect(getTechIcon("ps")).toBe(getTechIcon("powershell"));
        expect(getTechIcon("ps1")).toBe(getTechIcon("powershell"));
    });

    it("returns undefined for unknown keywords and languages without an icon", () => {
        expect(getTechIcon("definitely-not-a-language")).toBeUndefined();
        expect(getTechIcon("")).toBeUndefined();
        expect(getTechIcon("unknown-language")).toBeUndefined();
        expect(getTechIcon("foo-bar")).toBeUndefined();
    });
});

describe("<TechIconify />", () => {
    it("renders an svg when the icon exists", () => {
        expect(render({ keyword: "typescript" })).toContain("<svg");
    });

    it("is case-insensitive on name", () => {
        expect(render({ keyword: "TypeScript" })).toContain("<svg");
    });

    it("forwards props such as className", () => {
        expect(render({ keyword: "python", className: "size-5" })).toContain(
            "size-5",
        );
    });

    it("does not render children when the icon exists", () => {
        const html = render({ keyword: "go" }, "fallback");
        expect(html).toContain("<svg");
        expect(html).not.toContain("data-fallback");
        expect(html).not.toContain("fallback");
    });

    it("renders children as fallback when there is no icon", () => {
        const html = render({ keyword: "non-existent-lang" }, "fallback");
        expect(html).toContain("data-fallback");
        expect(html).toContain("fallback");
        expect(html).not.toContain("<svg");
    });

    it("renders nothing when there is no icon and no children", () => {
        expect(render({ keyword: "non-existent-lang" })).toBe("");
        expect(render({ keyword: "" })).toBe("");
    });

    it("renders every mapped keyword without throwing", () => {
        for (const keyword of allKeywords) {
            expect(() => render({ keyword: keyword })).not.toThrow();
        }
    });
});