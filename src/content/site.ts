import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "Manzili",
  legalName: "IT Home Solutions Company d.b.a. Manzili",
  crNumber: "1010797640",
  url: "https://manzili.sa",
  /**
   * Indexing is OFF unless NEXT_PUBLIC_ALLOW_INDEXING=true (QA F3: staging must be noindex).
   * Set it only on the final production domain.
   */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  email: { sales: "sales@manzili.sa", support: "support@manzili.sa" },
  phone: "+966 53 484 4986",
  phoneHref: "tel:+966534844986",
  address: "Al Rayyan District, Riyadh 14212, Saudi Arabia",
  mapsUrl: "https://share.google/dmisMPh9YQR4xVIoT",
  whatsapp: "https://wa.me/966534844986",
};

/** Absolute base URL: NEXT_PUBLIC_SITE_URL › Vercel production URL › brand domain. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : site.url);

export const routes = {
  home: "/",
  pillars: "/#pillars",
  cse: "/platform-cse",
  caseStudies: "/case-studies",
  contact: "/contact-us",
  privacy: "/privacy",
  terms: "/terms",
};

/** Pillar routes + icons. All pillar names/copy come from src/content/copy. */
export type Pillar = { index: string; href: string; icon: IconName };

export const pillars: Pillar[] = [
  { index: "01", href: "/pillars/digital-twin-webgl", icon: "cube" },
  { index: "02", href: "/pillars/crm-inventory-integration", icon: "database" },
  { index: "03", href: "/pillars/sales-center-hardware", icon: "monitor" },
  { index: "04", href: "/pillars/saudi-sales-enablement", icon: "presentation" },
  { index: "05", href: "/pillars/vip-launch-command", icon: "rocket" },
  { index: "06", href: "/pillars/full-lifecycle-support", icon: "lifebuoy" },
];
