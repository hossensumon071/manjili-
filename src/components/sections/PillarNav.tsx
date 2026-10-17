import Link from "next/link";
import { pillars, routes } from "@/content/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

type Props = { current: string; eyebrow: string; ctaLabel: string };

/** Previous / next pillar cards + link back to the full infrastructure overview. */
export function PillarNav({ current, eyebrow, ctaLabel }: Props) {
  const i = pillars.findIndex((p) => p.href === current);
  const prev = i > 0 ? pillars[i - 1] : null;
  const next = i < pillars.length - 1 ? pillars[i + 1] : null;

  const card = (dir: "prev" | "next", title: string, href: string, sub: string) => (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col justify-between gap-6 rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-float sm:p-7",
        dir === "next" && "md:items-end md:text-right",
      )}
    >
      <span className="flex items-center gap-2 text-sm font-semibold text-muted">
        {dir === "prev" && <Icon name="arrowRight" size={16} className="rotate-180 transition-transform group-hover:-translate-x-1" />}
        {sub}
        {dir === "next" && <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />}
      </span>
      <span className="text-h3 font-semibold text-ink transition-colors group-hover:text-brand">{title}</span>
    </Link>
  );

  return (
    <section className="pb-24 sm:pb-32" aria-label="Infrastructure navigation">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {prev ? card("prev", `Pillar ${prev.index}: ${prev.title}`, prev.href, "Previous pillar") : card("prev", "The 6-Pillar Infrastructure Overview", routes.solutions, "Back to overview")}
            {next ? card("next", `Pillar ${next.index}: ${next.title}`, next.href, "Next pillar") : card("next", "The 6-Pillar Infrastructure Overview", routes.solutions, "Infrastructure complete")}
          </div>
          <Link
            href={routes.solutions}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            {ctaLabel}
            <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
