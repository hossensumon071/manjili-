import type { SceneVariant } from "@/components/art/IsoScene";

/** Case-study slugs (display order follows the Case Studies index copy) and their 3D scene settings. */
export const caseScenes: Record<string, { variant: SceneVariant; seed: number }> = {
  "nhc-alwareef": { variant: "suburb", seed: 9 },
  "thee-erth": { variant: "masterplan", seed: 3 },
  "nhc-al-mukiman": { variant: "suburb", seed: 4 },
  "nhc-tabuk-hills": { variant: "suburb", seed: 13 },
  "masar-maab": { variant: "towers", seed: 6 },
  "nhc-malfa-al-assalah": { variant: "villas", seed: 5 },
  "raffles-residences-jeddah": { variant: "waterfront", seed: 8 },
  "mohammed-al-habib": { variant: "villas", seed: 12 },
  "dyari-signature": { variant: "grid36", seed: 7 },
  "al-basateen-offices": { variant: "campus", seed: 10 },
};
export const caseSlugs = Object.keys(caseScenes);
export const caseHref = (slug: string) => `/case-studies/${slug}`;
