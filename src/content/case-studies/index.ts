import { theeErth } from "./thee-erth";
import { masarMaab } from "./masar-maab";
import { dyariSignature } from "./dyari-signature";
import { rafflesJeddah } from "./raffles-residences-jeddah";
import { nhcAlwareef } from "./nhc-alwareef";
import { nhcAlMukiman } from "./nhc-al-mukiman";
import { nhcMalfa } from "./nhc-malfa-al-assalah";
import { nhcTabukHills } from "./nhc-tabuk-hills";
import { mohammedAlHabib } from "./mohammed-al-habib";
import { alBasateen } from "./al-basateen-offices";

/** Order here = order on the Case Studies hub. */
export const caseStudies = [
  theeErth,
  masarMaab,
  dyariSignature,
  rafflesJeddah,
  nhcAlwareef,
  nhcAlMukiman,
  nhcMalfa,
  nhcTabukHills,
  mohammedAlHabib,
  alBasateen,
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const caseHref = (slug: string) => `/case-studies/${slug}`;

export { caseCategories } from "./types";
export type { CaseStudy, CaseCategory, CaseMetric } from "./types";
