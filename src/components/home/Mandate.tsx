"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { CoastArt, VillaArt } from "@/components/art/SceneArt";

const { mandate } = home;

/** One word of the statement; brightens as the reader scrolls past it. */
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

function PhotoCard({ which, className }: { which: "left" | "right"; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-float ${className ?? ""}`}>
      <Media
        src={which === "left" ? images.mandateLeft : images.mandateRight}
        alt={which === "left" ? "Aerial view of a coastal master-planned community" : "Modern white villa"}
        fallback={which === "left" ? <CoastArt id="mandate-coast" /> : <VillaArt id="mandate-villa" />}
        className="h-full w-full"
        sizes="220px"
      />
    </div>
  );
}

export function Mandate() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const { scrollYProgress: textProgress } = useScroll({ target: textRef, offset: ["start 85%", "end 45%"] });
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-40, 70]);
  const words = mandate.statement.split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="mandate-title">
      <motion.div style={{ y: leftY }} className="pointer-events-none absolute left-[3%] top-[28%] hidden lg:block xl:left-[6%]">
        <PhotoCard which="left" className="h-60 w-48 -rotate-[9deg]" />
      </motion.div>
      <motion.div style={{ y: rightY }} className="pointer-events-none absolute right-[3%] top-[18%] hidden lg:block xl:right-[6%]">
        <PhotoCard which="right" className="h-56 w-52 rotate-[10deg]" />
      </motion.div>

      <div className="container-x relative text-center">
        <p className="eyebrow">{mandate.eyebrow}</p>
        <h2
          id="mandate-title"
          ref={textRef}
          className="mx-auto mt-5 max-w-[34ch] text-[clamp(1.35rem,2.6vw,2.15rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-ink"
        >
          {words.map((w, i) => (
            <Word key={i} progress={textProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </h2>
        <div className="mt-9 flex justify-center">
          <Button href={mandate.cta.href} variant="accent">
            {mandate.cta.label}
          </Button>
        </div>

        <div className="mt-12 flex justify-center gap-5 lg:hidden">
          <PhotoCard which="left" className="h-40 w-32 -rotate-6 sm:h-48 sm:w-40" />
          <PhotoCard which="right" className="mt-6 h-36 w-36 rotate-6 sm:h-44 sm:w-44" />
        </div>
      </div>
    </section>
  );
}
