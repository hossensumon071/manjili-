import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseHref, caseStudies, getCaseStudy } from "@/content/case-studies";
import { CaseStudyTemplate } from "@/components/case-studies/CaseStudyTemplate";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.meta.title,
    description: cs.meta.description,
    alternates: { canonical: caseHref(cs.slug) },
    openGraph: { type: "article", title: cs.meta.title, description: cs.meta.description, url: caseHref(cs.slug) },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.hero.title,
    description: cs.meta.description,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyTemplate cs={cs} />
    </>
  );
}
