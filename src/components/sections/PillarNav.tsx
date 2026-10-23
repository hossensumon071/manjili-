import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

type NavLink = { kicker?: string; label: string; href: string };
type Props = { previous?: NavLink; next?: NavLink; overview?: NavLink };

/** Pillar navigation: previous / next pillar cards + "View All 6 Pillars". */
export function PillarNav({ previous, next, overview }: Props) {
  const card = (dir: "prev" | "next", l: NavLink) => (
    <Link
      href={l.href}
      className={cn(
        "group flex h-full flex-col justify-between gap-6 rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-float sm:p-7",
        dir === "next" && "md:items-end md:text-end",
      )}
    >
      {l.kicker && (
        <span className="flex items-center gap-2 text-sm font-semibold text-muted">
          {dir === "prev" && <Icon name="arrowRight" size={16} mirror={false} className="rotate-180 rtl:rotate-0" />}
          {l.kicker}
          {dir === "next" && <Icon name="arrowRight" size={16} />}
        </span>
      )}
      <span className="text-h3 font-semibold text-ink transition-colors group-hover:text-brand-dark">{l.label}</span>
    </Link>
  );
  // Pillar 01's "previous" slot is the overview link (no kicker) — show it as the text link instead
  const prevCard = previous?.kicker ? previous : undefined;
  const nextCard = next?.kicker ? next : undefined;
  const textLink = overview ?? (!previous?.kicker ? previous : undefined) ?? (!next?.kicker ? next : undefined);

  return (
    <section className="pb-24 sm:pb-32" aria-label={textLink?.label}>
      <div className="container-x">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {prevCard ? card("prev", prevCard) : <span className="hidden md:block" />}
            {nextCard && card("next", nextCard)}
          </div>
          {textLink && (
            <Link href={textLink.href} className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-deep">
              {textLink.label}
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
