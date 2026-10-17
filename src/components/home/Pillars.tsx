"use client";

import type { MouseEvent } from "react";
import { pillars, type Pillar } from "@/content/site";
import { home } from "@/content/home";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

/** Glass card with a light that follows the pointer. */
function PillarCard({ pillar }: { pillar: Pillar }) {
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
        <span className="grid size-10 place-items-center rounded-full bg-white text-accent shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon name={pillar.icon} size={18} />
        </span>
        <span className="font-display text-sm font-semibold text-white/55">Pillar {pillar.index}</span>
      </div>
      <h3 className="mt-auto pt-10 text-h3 font-semibold text-white">{pillar.title}</h3>
      <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-white/80">{pillar.body}</p>
      <ArrowLink href={pillar.href} className="mt-5 text-white/90 hover:text-white">
        {pillar.linkLabel}
      </ArrowLink>
    </article>
  );
}

export function Pillars() {
  const copy = home.pillars;
  return (
    <section id="pillars" className="scroll-mt-24 px-2 sm:px-3" aria-labelledby="pillars-title">
      <div className="stage surface-blue">
        <Sheen className="opacity-80" />
        <Sheen flip className="translate-y-1/3 opacity-60" />
        <div className="container-x py-20 sm:py-24 lg:py-28">
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-end">
            <div>
              <p className="text-eyebrow font-semibold text-white/80">{copy.eyebrow}</p>
              <h2 id="pillars-title" className="mt-4 max-w-[14ch] font-display text-h2 font-bold text-white">
                {copy.headline}
              </h2>
            </div>
            <p className="text-white/85">{copy.lead}</p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.href} delay={(i % 2) * 0.1}>
                <PillarCard pillar={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
