"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { EASE } from "@/lib/utils";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { CoastArt } from "@/components/art/SceneArt";
import { IngestionOverlay, InventoryMockup, RuntimeMockup } from "@/components/mockups/StepMockups";

const { process } = home;

const visuals: ReactNode[] = [
  <>
    <Media
      src={images.processIngestion}
      alt="Coastal master development being ingested from engineering data"
      fallback={<CoastArt id="process-coast" />}
      className="h-full w-full"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
    <IngestionOverlay />
  </>,
  <RuntimeMockup key="runtime" />,
  <InventoryMockup key="inventory" />,
];

export function Process() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="process-title">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-end">
          <div>
            <p className="eyebrow">{process.eyebrow}</p>
            <h2 id="process-title" className="h-section mt-4 max-w-[16ch]">
              {process.headline}
            </h2>
          </div>
          <p>{process.subheader}</p>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-semibold leading-none text-ink/15 transition-colors duration-500 group-hover:text-brand sm:text-6xl">
                  {step.index}
                </span>
                {i < process.steps.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE, delay: 0.4 + i * 0.2 }}
                    className="hidden h-px flex-1 origin-left bg-gradient-to-r from-brand/40 to-transparent md:block"
                  />
                )}
              </div>
              <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-2xl ring-1 ring-ink/5 transition-transform duration-500 group-hover:-translate-y-1">
                {visuals[i]}
              </div>
              <h3 className="mt-5 text-h4 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
