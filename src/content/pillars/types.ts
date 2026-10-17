import type { Feature } from "@/components/sections/FeatureRows";
import type { Proof } from "@/components/sections/ProofCards";
import type { StatusPanelProps } from "@/components/sections/StatusPanel";
import type { FaqItem } from "@/components/sections/FaqSection";
import type { Tour } from "@/components/sections/ToursShowcase";

type Cta = { label: string; href: string };

export type PillarPageData = {
  href: string;
  meta: { title: string; description: string };
  hero: {
    crumb: string;
    eyebrow: string;
    title: string;
    subheader: string;
    primary: Cta;
    secondary: Cta;
    status: string[];
    panel: StatusPanelProps;
  };
  architecture: { eyebrow: string; title: string; lead: string; features: Feature[] };
  /** Pillar 06 only — shown before the proof band. */
  tours?: { eyebrow: string; title: string; lead: string; tours: Tour[] };
  proof: { eyebrow: string; title: string; items: Proof[] };
  /** Pillar 01 only — shown after the proof band. */
  pipeline?: { eyebrow: string; title: string; steps: { title: string; body: string }[] };
  matrix?: { eyebrow: string; title: string; lead: string; columns: string[]; rows: string[][] };
  faq: { eyebrow: string; headline: string; items: FaqItem[] };
  nav: { eyebrow: string; ctaLabel: string };
  conversion: { headline: string; body: string; primary: Cta; trust: string[] };
};
