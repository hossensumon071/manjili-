export type LegalBlock =
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { h3: string };

export type LegalDoc = {
  slug: "privacy" | "terms";
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  facts: { label: string; value: string }[];
  sections: { id: string; title: string; blocks: LegalBlock[] }[];
};
