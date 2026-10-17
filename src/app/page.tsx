import { Hero } from "@/components/home/Hero";
import { Mandate } from "@/components/home/Mandate";
import { TrustBand } from "@/components/home/TrustBand";
import { ExecutionGap } from "@/components/home/ExecutionGap";
import { CseSection } from "@/components/home/CseSection";
import { Pillars } from "@/components/home/Pillars";
import { Process } from "@/components/home/Process";
import { CaseStudies } from "@/components/home/CaseStudies";
import { FinalCta } from "@/components/home/FinalCta";
import { Faq } from "@/components/home/Faq";

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
      <FinalCta />
      <Faq />
    </>
  );
}
