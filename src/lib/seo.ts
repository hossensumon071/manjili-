import type { Metadata } from "next";
import enMeta from "@/content/copy/en/meta.json";
import arMeta from "@/content/copy/ar/meta.json";
import { lp, type Locale } from "./i18n";

/** Production origin for canonical / og:url (Buddy: https://manzili.sa/[slug]). */
export const PRODUCTION_ORIGIN = "https://manzili.sa";

const SHARE_IMAGE = "/og/manzili-share.png";
const SHARE_ALT = { en: "Manzili logo on a 3D masterplan render", ar: "شعار منزلي على مخطط عام ثلاثي الأبعاد" };

type MetaRow = { title: string; description: string };

/**
 * Per-page metadata from the copy files' Sitewide Metadata table.
 * `slug` is the English path, e.g. "/", "/platform-cse", "/case-studies/thee-erth".
 */
export function pageMetadata(locale: Locale, slug: string, opts: { noindex?: boolean } = {}): Metadata {
  const table = (locale === "ar" ? arMeta : enMeta) as Record<string, MetaRow>;
  const key = slug === "*404*" ? "*404*" : lp(locale, slug);
  const row = table[key];
  if (!row) throw new Error(`Missing meta row for ${locale} ${slug}`);
  const enPath = slug;
  const arPath = lp("ar", slug);
  const canonical = PRODUCTION_ORIGIN + (locale === "ar" ? arPath : enPath === "/" ? "/" : enPath);

  return {
    title: { absolute: row.title },
    description: row.description,
    ...(slug !== "*404*" && {
      alternates: {
        canonical,
        languages: {
          en: PRODUCTION_ORIGIN + (enPath === "/" ? "/" : enPath),
          ar: PRODUCTION_ORIGIN + arPath,
          "x-default": PRODUCTION_ORIGIN + (enPath === "/" ? "/" : enPath),
        },
      },
    }),
    openGraph: {
      type: "website",
      siteName: locale === "ar" ? "منزلي" : "Manzili",
      title: row.title,
      description: row.description,
      ...(slug !== "*404*" && { url: canonical }),
      locale: locale === "ar" ? "ar_SA" : "en_US",
      images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: SHARE_ALT[locale] }],
    },
    twitter: { card: "summary_large_image", title: row.title, description: row.description, images: [SHARE_IMAGE] },
    ...(opts.noindex && { robots: { index: false, follow: false } }),
  };
}
