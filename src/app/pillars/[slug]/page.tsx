import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPillarPage, pillarPages, slugOf } from "@/content/pillars";
import { PillarTemplate } from "@/components/pages/PillarTemplate";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pillarPages.map((p) => ({ slug: slugOf(p.href) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getPillarPage(slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: page.href },
    openGraph: { title: page.meta.title, description: page.meta.description, url: page.href },
  };
}

export default async function PillarPage({ params }: Params) {
  const { slug } = await params;
  const page = getPillarPage(slug);
  if (!page) notFound();
  return <PillarTemplate data={page} />;
}
