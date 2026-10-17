import type { LegalDoc } from "@/content/legal/types";
import { routes } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { LegalDocument } from "./LegalDocument";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: doc.title }]}
        eyebrow={doc.eyebrow}
        title={doc.title}
        subheader={doc.intro}
        status={["Saudi PDPL Aligned", "In-Kingdom Hosting", "NCA ECC Controls"]}
        visual={
          <dl className="glass divide-y divide-white/15 rounded-[22px] p-2">
            {doc.facts.map((f) => (
              <div key={f.label} className="px-4 py-4">
                <dt className="text-xs font-semibold text-white/65">{f.label}</dt>
                <dd className="mt-1 text-[15px] font-semibold text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        }
      />
      <LegalDocument doc={doc} />
    </>
  );
}
