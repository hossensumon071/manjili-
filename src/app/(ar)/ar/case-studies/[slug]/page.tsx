import { notFound } from "next/navigation";
import { caseSlugs } from "@/content/caseScenes";
import { pageMetadata } from "@/lib/seo";
import { CaseStudyView } from "@/components/views/CaseViews";

type Params = { params: Promise<{ slug: string }> };

// Unknown slugs reach the page and call notFound(), so the 404 renders inside this
// language's root layout (correct lang/dir) instead of Next.js's generic 404.
export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  if (!caseSlugs.includes(slug)) return {};
  return pageMetadata("ar", `/case-studies/${slug}`);
}
export default async function CaseStudyPageAr({ params }: Params) {
  const { slug } = await params;
  if (!caseSlugs.includes(slug)) notFound();
  return <CaseStudyView locale="ar" slug={slug} />;
}
