import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SceneVariant } from "@/components/art/IsoScene";
import { SceneFrame } from "@/components/art/IsoScene";
import { Icon } from "@/components/ui/Icon";

export type CaseCardData = {
  href: string;
  tag: string;
  client: string;
  title: string;
  location: string;
  body: string;
  linkLabel: string;
  scene: { variant: SceneVariant; seed: number };
};

/** Case card (copy file Part 4): Tag · Client · Project (H3) · Location · one-sentence outcome · link. */
export function CaseCard({ data, className }: { data: CaseCardData; className?: string }) {
  return (
    <Link
      href={data.href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-float",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
          <SceneFrame variant={data.scene.variant} seed={data.scene.seed} density="card" className="h-full w-full" />
        </div>
        <span className="absolute start-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-[0_6px_16px_-6px_rgba(55,53,53,0.45)] ring-1 ring-ink/5">
          {data.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-accent-dark">{data.client}</p>
        <h3 className="mt-2 text-h3 font-semibold text-ink">{data.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <Icon name="mapPin" size={15} />
          {data.location}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed">{data.body}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-dark">
          {data.linkLabel}
          <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
