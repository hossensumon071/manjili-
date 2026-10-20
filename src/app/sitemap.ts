import type { MetadataRoute } from "next";
import { routes } from "@/content/site";
import { pillars } from "@/content/site";
import { caseHref, caseSlugs } from "@/content/caseScenes";
import { lp } from "@/lib/i18n";
import { arReady } from "@/lib/arRoutes";
import { PRODUCTION_ORIGIN } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    routes.home,
    routes.cse,
    ...pillars.map((p) => p.href),
    routes.caseStudies,
    ...caseSlugs.map(caseHref),
    routes.contact,
    routes.privacy,
    routes.terms,
  ];
  const abs = (p: string) => PRODUCTION_ORIGIN + (p === "/" ? "/" : p);
  return paths.flatMap((path) => {
    const hasAr = arReady(path);
    const entry = (url: string) => ({
      url,
      lastModified: now,
      ...(hasAr && { alternates: { languages: { en: abs(path), ar: PRODUCTION_ORIGIN + lp("ar", path) } } }),
    });
    return hasAr ? [entry(abs(path)), entry(PRODUCTION_ORIGIN + lp("ar", path))] : [entry(abs(path))];
  });
}
