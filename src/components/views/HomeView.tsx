import { getHome } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { Mandate } from "@/components/home/Mandate";
import { TrustBand } from "@/components/home/TrustBand";
import { ExecutionGap } from "@/components/home/ExecutionGap";
import { CseSection } from "@/components/home/CseSection";
import { Pillars } from "@/components/home/Pillars";
import { Process } from "@/components/home/Process";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { FaqSection } from "@/components/sections/FaqSection";

export function HomeView({ locale }: { locale: Locale }) {
  const c = getHome(locale);
  return (
    <>
      <Hero c={c.hero} />
      <Mandate c={c.mandate} />
      <TrustBand c={c.trust} />
      <ExecutionGap c={c.problem} />
      <CseSection c={c.cse} />
      <Pillars c={c.pillars} />
      <Process c={c.process} />
      <CaseStudies c={c.cases} />
      <ConversionCta
        badge={[c.finalCta.eyebrow]}
        headline={c.finalCta.title}
        body={c.finalCta.body ?? ""}
        primary={c.finalCta.primary}
        secondary={c.finalCta.secondary}
        secondaryIcon="phone"
      />
      <FaqSection locale={locale} items={c.faq} />
    </>
  );
}
