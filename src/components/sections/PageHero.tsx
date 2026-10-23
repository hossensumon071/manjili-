"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Sheen } from "@/components/ui/Sheen";

export type Crumb = { label: string; href?: string | null };
export type Cta = { label: string; href: string };

type Props = {
  breadcrumb: Crumb[];
  eyebrow: string;
  title: string;
  subheader: string;
  primary?: Cta;
  secondary?: Cta;
  status: string[];
  visual: ReactNode;
};

/**
 * Inner-page hero: split layout per the brief — value stack on the left,
 * live product viewport on the right, operational status strip below.
 */
export function PageHero({ breadcrumb, eyebrow, title, subheader, primary, secondary, status, visual }: Props) {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3" aria-labelledby="page-title">
      <div className="stage surface-blue">
        <Sheen />
        {/* faint engineering grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.12] [mask-image:radial-gradient(70%_70%_at_70%_40%,#000,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-x pb-12 pt-28 sm:pb-16 lg:pb-20 lg:pt-36">
          <motion.nav {...fade(0.1)} aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/95">
              {breadcrumb.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <Icon name="chevronDown" size={13} className="-rotate-90 opacity-60 rtl:rotate-90" />}
                  {c.href ? (
                    <Link href={c.href} className="inline-flex min-h-6 items-center py-1 transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <motion.span
                {...fade(0.2)}
                className="glass inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
              >
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
                  <span className="relative size-2 rounded-full bg-accent" />
                </span>
                {eyebrow}
              </motion.span>
              <motion.h1
                id="page-title"
                {...fade(0.3)}
                className="mt-6 max-w-[20ch] font-display text-[clamp(2.375rem,4.6vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white"
              >
                {title}
              </motion.h1>
              <motion.p {...fade(0.45)} className="mt-5 max-w-[56ch] text-lead font-medium text-white/95">
                {subheader}
              </motion.p>
              {(primary || secondary) && (
                <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap gap-3">
                  {primary && (
                    <Button href={primary.href} variant="light">
                      {primary.label}
                    </Button>
                  )}
                  {secondary && (
                    <Button href={secondary.href} variant="outline" icon="arrowDown">
                      {secondary.label}
                    </Button>
                  )}
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.4 }}
              className="relative"
            >
              {visual}
            </motion.div>
          </div>

          <motion.ul
            {...fade(0.8)}
           
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-6 text-xs font-medium text-white/95"
          >
            {status.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                {i === 0 ? (
                  <span className="size-1.5 rounded-full bg-status" aria-hidden="true" />
                ) : (
                  <span className="size-1 rounded-full bg-white/40" aria-hidden="true" />
                )}
                {s}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
