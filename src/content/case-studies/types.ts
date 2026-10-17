import type { SceneVariant } from "@/components/art/IsoScene";

export type CaseCategory = "masterplans" | "luxury" | "exhibition" | "lifecycle";

export const caseCategories: { id: CaseCategory | "all"; label: string }[] = [
  { id: "all", label: "All Deployments" },
  { id: "masterplans", label: "Mixed-Use Masterplans" },
  { id: "luxury", label: "Luxury Towers & Branded Residences" },
  { id: "exhibition", label: "Exhibition & Launch Command" },
  { id: "lifecycle", label: "Full-Lifecycle & Matterport" },
];

export type CaseMetric = { value: string; label: string; title?: string; body: string; outcome?: string };

export type CaseStudy = {
  slug: string;
  meta: { title: string; description: string };
  card: {
    client: string;
    project: string;
    location: string;
    badge: string;
    categories: CaseCategory[];
    summary: string;
    metrics: string[];
  };
  scene: { variant: SceneVariant; seed: number; label: string; chips: string[] };
  hero: { crumb: string; eyebrow: string; title: string; subheader: string; status: string[] };
  metadata: { label: string; value: string }[];
  challenge: {
    eyebrow: string;
    title: string;
    lead: string;
    risks?: { title: string; category: string; body: string }[];
    friction?: string[][];
  };
  solution: {
    eyebrow: string;
    title: string;
    lead: string;
    features?: { tag: string; title: string; body: string; bullets: { title: string; body: string }[] }[];
    cards?: { title: string; points: string[] }[];
  };
  enablement?: { eyebrow: string; title: string; lead: string; steps: { title: string; body: string }[] };
  impact: { eyebrow: string; title: string; lead?: string; metrics: CaseMetric[] };
  governance: { eyebrow: string; title: string; rows: string[][] };
  quote?: { text: string; name: string; role: string; context: string };
  conversion: { headline: string; body: string; primary: string; secondary?: string; trust: string[] };
};
