"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { HeroArt } from "@/components/art/HeroArt";

type Props = {
  badge: string[];
  headline: string;
  body: string;
  primary: { label: string; href: string };
  /** Replaces the phone button when set. */
  secondary?: { label: string; href: string };
  /** Leading icon for the secondary button (e.g. phone on the homepage CTA). */
  secondaryIcon?: "phone";
  image?: string;
};

/** Closing conversion band used at the bottom of every page. */
export function ConversionCta({ badge, headline, body, primary, secondary, secondaryIcon, image }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="px-2 sm:px-3" aria-labelledby="cta-title">
      <div className="stage bg-brand-deep">
        <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0 -z-10">
          <Media src={image} alt="Modern villa against the sky" fallback={<HeroArt id="cta-art" clouds />} className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0477AB] via-[#0479AE]/85 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0479AE]/80 to-transparent" />

        <div className="container-x py-20 sm:py-28 lg:py-32">
          <Reveal className="max-w-2xl">
            <span className="glass inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              {badge.join(" · ")}
            </span>
            <h2 id="cta-title" className="mt-6 max-w-[18ch] font-display text-h2 font-bold text-white">
              {headline}
            </h2>
            <p className="mt-5 max-w-[52ch] text-lead font-medium text-white/95">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href} variant="primary">
                {primary.label}
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="outline" plain={!!secondaryIcon} leadingIcon={secondaryIcon}>
                  {secondaryIcon ? <bdi dir="ltr">{secondary.label}</bdi> : secondary.label}
                </Button>
              ) : (
                <Button href={site.phoneHref} variant="outline" plain leadingIcon="phone">
                  {site.phone}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
