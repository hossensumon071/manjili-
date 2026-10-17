import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SceneVariant } from "@/components/art/IsoScene";
import { SceneFrame } from "@/components/art/IsoScene";
import { Icon } from "@/components/ui/Icon";

export type CaseCardData = {
  href: string;
  badge: string;
  client: string;
  project: string;
  location: string;
  headline?: string;
  summary: string;
  metrics: string[];
  scene: { variant: SceneVariant; seed: number };
};

/** Case study card used on the hub, home page and "more case studies". */
export function CaseCard({ data, featured = false, className }: { data: CaseCardData; featured?: boolean; className?: string }) {
  return (
    <Link
      href={data.href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-float",
        featured && "lg:grid lg:grid-cols-[1.15fr_1fr]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/11] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10]")}>
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
          <SceneFrame variant={data.scene.variant} seed={data.scene.seed} density={featured ? "full" : "card"} className="h-full w-full" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-ink shadow-[0_6px_16px_-6px_rgba(11,19,43,0.45)] ring-1 ring-ink/5">
          {data.badge}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <p className="text-xs font-semibold text-accent">{data.client}</p>
        <h3 className={cn("mt-2 font-semibold text-ink", featured ? "text-h2 font-bold" : "text-h3")}>{data.headline ?? data.project}</h3>
        {data.headline && <p className="mt-1 text-sm font-semibold text-body">{data.project}</p>}
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
          <Icon name="mapPin" size={15} />
          {data.location}
        </p>
        <p className={cn("mt-4 text-[15px] leading-relaxed", !featured && "line-clamp-3")}>{data.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {data.metrics.map((m) => (
            <li key={m} className="rounded-full bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-dark">
              {m}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
          View Full Case Study
          <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
