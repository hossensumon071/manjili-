"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { home } from "@/content/home";
import { cn, EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

const { faq } = home;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-24 sm:py-32" aria-labelledby="faq-title">
      <div className="container-x">
        <p className="eyebrow">{faq.eyebrow}</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="stage surface-blue rounded-3xl p-7 sm:rounded-3xl">
              <Sheen className="opacity-70" />
              <h2 id="faq-title" className="text-h3 font-semibold text-white">
                {faq.headline}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">{faq.description}</p>
              <Button href={faq.cta.href} variant="light" className="mt-7 w-full justify-between">
                {faq.cta.label}
              </Button>
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className={cn("text-h4 font-semibold transition-colors", isOpen ? "text-brand" : "text-ink group-hover:text-brand")}>
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                          isOpen ? "rotate-180 bg-brand text-white" : "bg-white text-body shadow-sm ring-1 ring-line",
                        )}
                      >
                        <Icon name="arrowDown" size={16} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[70ch] pb-6 pe-12 text-[15px] leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
