import { notFound } from "next/navigation";
import { pillars } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PillarView } from "@/components/views/PillarView";

type Params = { params: Promise<{ slug: string }> };
const slugs = pillars.map((p) => p.href.split("/").pop()!);

export const dynamicParams = false;
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return pageMetadata("en", `/pillars/${slug}`);
}
export default async function PillarPage({ params }: Params) {
  const { slug } = await params;
  const i = slugs.indexOf(slug);
  if (i < 0) notFound();
  return <PillarView locale="en" n={(i + 1) as 1 | 2 | 3 | 4 | 5 | 6} />;
}
