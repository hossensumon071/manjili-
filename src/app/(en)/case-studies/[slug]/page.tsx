import { notFound } from "next/navigation";
import { caseSlugs } from "@/content/caseScenes";
import { pageMetadata } from "@/lib/seo";
import { CaseStudyView } from "@/components/views/CaseViews";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return pageMetadata("en", `/case-studies/${slug}`);
}
export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  if (!caseSlugs.includes(slug)) notFound();
  return <CaseStudyView locale="en" slug={slug} />;
}
