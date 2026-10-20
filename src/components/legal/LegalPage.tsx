import { getLegal } from "@/content/copy";
import { lp, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { LegalDocument } from "./LegalDocument";

/** Privacy Policy / Terms of Service — full text from the copy files (Part 5). */
export function LegalPage({ locale, which }: { locale: Locale; which: "privacy" | "terms" }) {
  const d = getLegal(locale, which);
  const h = d.head;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: locale === "ar" ? "الرئيسية" : "Home", href: lp(locale, "/") }, { label: h.crumb }]}
        eyebrow={h.eyebrow}
        title={h.title}
        subheader={h.intro}
        status={h.chips}
        visual={
          <dl className="glass divide-y divide-white/15 rounded-[22px] p-2">
            {(h.facts as { label: string; value: string }[]).map((f) => (
              <div key={f.label} className="px-4 py-4">
                <dt className="text-xs font-semibold text-white">{f.label}</dt>
                <dd className="mt-1 text-[15px] font-semibold text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        }
      />
      <LegalDocument doc={d} tocLabel={locale === "ar" ? "في هذه الصفحة" : "On this page"} />
    </>
  );
}
