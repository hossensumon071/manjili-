"use client";

import type { MouseEvent } from "react";
import { pillars } from "@/content/site";
import type { Head } from "@/content/copy";
import type { IconName } from "@/components/ui/Icon";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

/** Glass card with a light that follows the pointer. */
type CardCopy = { label: string; title: string; body: string; link: { label: string; href: string } };

function PillarCard({ card, icon }: { card: CardCopy; icon: IconName }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <article
      onMouseMove={onMove}
      className="glass group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-card p-6 transition-colors duration-500 hover:border-white/40 sm:min-h-[270px] sm:p-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(380px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="flex items-start justify-between">
        <span className="grid grid-cols-1 size-10 place-items-center rounded-full bg-white text-accent-dark shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon name={icon} size={18} />
        </span>
        <span className="font-display text-sm font-semibold text-white/95">{card.label}</span>
      </div>
      <h3 className="mt-auto pt-10 text-h3 font-semibold text-white">{card.title}</h3>
      <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-white/95">{card.body}</p>
      <ArrowLink href={card.link.href} className="mt-5 text-white/95 hover:text-white">
        {card.link.label}
      </ArrowLink>
    </article>
  );
}

export function Pillars({ c }: { c: Head & { cards: CardCopy[] } }) {
  const copy = c;
  return (
    <section id="pillars" className="scroll-mt-32 px-2 sm:px-3" aria-labelledby="pillars-title">
      <div className="stage surface-blue">
        <Sheen className="opacity-80" />
        <Sheen flip className="translate-y-1/3 opacity-60" />
        <div className="container-x py-20 sm:py-24 lg:py-28">
          <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-on-dark">{copy.eyebrow}</p>
              <h2 id="pillars-title" className="mt-4 max-w-[14ch] font-display text-h2 font-bold text-white">
                {copy.title}
              </h2>
            </div>
            <p className="text-white/95">{copy.body}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {copy.cards.map((card, i) => (
              <Reveal key={card.link.href} delay={(i % 2) * 0.1}>
                <PillarCard card={card} icon={pillars[i].icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
