import { RAW } from "./raw";
import type { Locale } from "@/lib/i18n";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Sec = Record<string, any>;
const arr = (v: unknown): string[] => (v === undefined || v === null ? [] : Array.isArray(v) ? (v as string[]) : [v as string]);
const one = (v: unknown): string => (Array.isArray(v) ? (v[0] as string) : ((v as string) ?? ""));
const n2 = (n: number) => String(n).padStart(2, "0");
const pairs = (v: unknown) => {
  const a = arr(v);
  const out: { title: string; body: string }[] = [];
  for (let i = 0; i < a.length; i += 2) out.push({ title: a[i], body: a[i + 1] });
  return out;
};
const page = (locale: Locale, name: keyof (typeof RAW)["en"]) => (RAW[locale] as any)[name] as Record<string, Sec>;

export type Cta = { label: string; href: string };
const cta = (s: Sec, key: string): Cta | undefined => (s[key] ? { label: one(s[key]), href: one(s[key + "Href"]) } : undefined);

export type Crumb = { label: string; href?: string | null };
export type Hero = { crumbs: Crumb[]; breadcrumb?: Cta; eyebrow: string; title: string; body: string; primary?: Cta; secondary?: Cta; chips: string[] };
const hero = (s: Sec): Hero => ({
  crumbs: (s.crumbs as Crumb[]) ?? [],
  breadcrumb: cta(s, "breadcrumb"),
  eyebrow: one(s.eyebrow),
  title: one(s.h1),
  body: one(s.subheadingBodyCopy),
  primary: cta(s, "primaryCta"),
  secondary: cta(s, "secondaryCta"),
  chips: arr(s.specStrip),
});
export type Head = { eyebrow: string; title: string; body?: string };
const head = (s: Sec): Head => ({ eyebrow: one(s.eyebrow), title: one(s.h2), body: s.subheadingBodyCopy ? one(s.subheadingBodyCopy) : undefined });
const cards = (s: Sec, prefix: string, fields: string[]) => {
  const out: Record<string, string>[] = [];
  for (let i = 1; s[`${prefix}${n2(i)}${cap(fields[0])}`] !== undefined || s[`${prefix}${n2(i)}`] !== undefined; i++) {
    const o: Record<string, string> = {};
    for (const f of fields) o[f] = one(s[`${prefix}${n2(i)}${cap(f)}`]);
    out.push(o);
  }
  return out;
};
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const faqItems = (s: Sec) => {
  const out: { q: string; a: string }[] = [];
  for (let i = 1; i < 12; i++) if (s[`q${i}`]) out.push({ q: one(s[`q${i}`]), a: one(s[`a${i}`]) });
  return out;
};
const table = (s: Sec) => {
  const rows: string[][] = [];
  for (let i = 1; s[`row${i}`]; i++) rows.push(arr(s[`row${i}`]));
  return { ...head(s), columns: arr(s.headerRow), rows };
};
const blocks = (s: Sec) => {
  const out: { index: string; tag: string; title: string; subtitle?: string; body: string; bullets: { title: string; body: string }[] }[] = [];
  for (let i = 1; s[`block${n2(i)}Title`]; i++) {
    const nl = arr(s[`block${n2(i)}NumberLabel`]);
    out.push({
      index: nl[0] ?? n2(i),
      tag: nl[1] ?? "",
      title: one(s[`block${n2(i)}Title`]),
      subtitle: s[`block${n2(i)}Subtitle`] ? one(s[`block${n2(i)}Subtitle`]) : undefined,
      body: one(s[`block${n2(i)}Body`]),
      bullets: pairs(s[`block${n2(i)}Features`]),
    });
  }
  return out;
};
const banner = (s: Sec) => ({ ...head(s), primary: cta(s, "primaryCta")!, secondary: cta(s, "secondaryCta") });

/* ---------------- Homepage ---------------- */
export function getHome(locale: Locale) {
  const p = page(locale, "home");
  const s6 = p.s06;
  return {
    hero: hero(p.s01),
    mandate: { ...head(p.s02), cta: cta(p.s02, "primaryCta")! },
    trust: { ...head(p.s03), segments: arr(p.s03.segmentTags), assurances: arr(p.s03.assuranceTags), cta: cta(p.s03, "primaryCta")! },
    problem: { ...head(p.s04), cards: cards(p.s04, "card", ["number", "title", "body"]) },
    cse: { ...head(p.s05), cards: cards(p.s05, "card", ["title", "body"]), cta: cta(p.s05, "primaryCta")! },
    pillars: {
      ...head(s6),
      cards: [1, 2, 3, 4, 5, 6].map((i) => ({
        label: one(s6[`card${n2(i)}Label`]),
        title: one(s6[`card${n2(i)}Title`]),
        body: one(s6[`card${n2(i)}Body`]),
        link: { label: one(s6[`card${n2(i)}Link`]), href: one(s6[`card${n2(i)}LinkHref`]) },
      })),
    },
    process: { ...head(p.s07), steps: cards(p.s07, "step", ["number", "title", "body"]) },
    cases: {
      ...head(p.s08),
      cta: cta(p.s08, "primaryCta")!,
      cards: [1, 2, 3].map((i) => {
        const k = (f: string) => one(p.s08[`card${n2(i)}${f}`]);
        return { tag: k("Tag"), client: k("Client"), title: k("Title"), location: k("Location"), body: k("Body"), badge: k("Badge"), link: { label: k("Link"), href: k("LinkHref") } };
      }),
    },
    finalCta: { ...head(p.s09), primary: cta(p.s09, "primaryCta")!, secondary: cta(p.s09, "secondaryCta")! },
    faq: faqItems(p.s10),
  };
}

/* ---------------- Platform (CSE) ---------------- */
export function getPlatform(locale: Locale) {
  const p = page(locale, "platform");
  return {
    hero: hero(p.s01),
    capabilities: { ...head(p.s02), blocks: blocks(p.s02) },
    telemetry: { ...head(p.s03), cards: cards(p.s03, "card", ["chip", "title", "body"]) },
    comparison: table(p.s04),
    extraFaq: faqItems(p.s05),
    powered: {
      ...head(p.s06),
      cta: cta(p.s06, "primaryCta")!,
      tiles: [1, 2, 3, 4, 5, 6].map((i) => ({ label: arr(p.s06[`tile${n2(i)}`])[0], title: arr(p.s06[`tile${n2(i)}`])[1], href: one(p.s06[`tile${n2(i)}Href`]) })),
    },
  };
}

/* ---------------- Pillar pages ---------------- */
export function getPillar(locale: Locale, n: 1 | 2 | 3 | 4 | 5 | 6) {
  const p = page(locale, `pillar-0${n}` as "pillar-01");
  const s = (k: string) => p[k];
  const isLifecycle = n === 6;
  const proofSec = isLifecycle ? s("s04") : s("s03");
  const nav = s("s06");
  const navLink = (key: string) => {
    const v = arr(nav[key]);
    if (!v.length) return undefined;
    return { kicker: v.length > 1 ? v[0] : undefined, label: v.length > 1 ? v[1] : v[0], href: one(nav[key + "Href"]) };
  };
  return {
    hero: hero(s("s01")),
    architecture: { ...head(s("s02")), blocks: blocks(s("s02")) },
    proof: { ...head(proofSec), cards: cards(proofSec, "card", ["chip", "title", "body"]) },
    steps: n === 1 ? { ...head(s("s04")), steps: [1, 2, 3].map((i) => arr(s("s04")[`step${n2(i)}`])).map(([index, title, body]) => ({ index, title, body })) } : undefined,
    matrix: n !== 1 && !isLifecycle ? table(s("s04")) : undefined,
    tours: isLifecycle
      ? { ...head(s("s03")), cards: cards(s("s03"), "card", ["label", "tag", "title", "body"]) }
      : undefined,
    faq: faqItems(s("s05")),
    nav: { previous: navLink("previousLink"), next: navLink("nextLink"), overview: navLink("overviewLink") },
    banner: banner(s("s07")),
  };
}

/* ---------------- Case studies ---------------- */
export type CaseCopy = any;
export const getCaseIndex = (locale: Locale) => (RAW[locale] as any)["case-index"] as any;
export const getCaseTemplate = (locale: Locale) => (RAW[locale] as any)["case-template"] as any;
export const getCase = (locale: Locale, slug: string) => (RAW[locale] as any).cases[slug] as CaseCopy;

/* ---------------- Contact & legal ---------------- */
export const getContact = (locale: Locale) => (RAW[locale] as any).contact as any;
export const getLegal = (locale: Locale, which: "privacy" | "terms") => (RAW[locale] as any)[which] as any;
