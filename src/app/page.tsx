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
import { home } from "@/content/home";
import { images } from "@/content/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mandate />
      <TrustBand />
      <ExecutionGap />
      <CseSection />
      <Pillars />
      <Process />
      <CaseStudies />
      <ConversionCta
        badge={home.finalCta.badge}
        headline={home.finalCta.headline}
        body={home.finalCta.body}
        primary={home.finalCta.primary}
        image={images.finalCta}
      />
      <FaqSection {...home.faq} />
    </>
  );
}
