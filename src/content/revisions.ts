import type { Locale } from "@/lib/i18n";

/**
 * Strings from Buddy's "Manzili Website Revision List" (Oct 21, 2026) that add new UI
 * rather than change existing copy (existing copy changes were applied to /copy/*.md).
 */
export const revisions = {
  // Item 1 — Lifecycle page: Next card to the CSE page
  lifecycleNext: {
    en: { kicker: "Next", label: "Explore the CSE Platform", href: "/platform-cse" },
    ar: { kicker: "التالي", label: "استكشفوا المنصة (CSE)", href: "/ar/platform-cse" },
  },
  // Item 10 — screen-reader names for the homepage "Learn more" links
  learnMore: {
    en: (service: string) => `Learn more about ${service}`,
    ar: (service: string) => `اعرفوا المزيد عن ${service}`,
  },
} satisfies Record<string, Record<Locale, unknown>>;
