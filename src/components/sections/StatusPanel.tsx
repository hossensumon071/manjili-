"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn, EASE } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

export type StatusItem = {
  icon: IconName;
  label: string;
  meta: string;
  state?: "ok" | "active" | "idle";
};

export type StatusPanelProps = {
  title: string;
  live?: string;
  items: StatusItem[];
  footer?: string;
};

const stateStyle = {
  ok: { dot: "bg-status", text: "text-status", label: "Ready" },
  active: { dot: "bg-accent", text: "text-accent", label: "Live" },
  idle: { dot: "bg-muted", text: "text-muted", label: "Standby" },
};

/**
 * Light "operations console" used as the hero viewport on inner pages.
 * A scan highlight cycles through the rows (live system feel); hovering a
 * row takes over the highlight.
 */
export function StatusPanel({ title, live = "Live", items, footer }: StatusPanelProps) {
  const reduce = useReducedMotion();
  const [scan, setScan] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setScan((s) => (s + 1) % items.length), 2200);
    return () => clearInterval(t);
  }, [reduce, items.length]);

  const active = hover ?? scan;

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-white/95 p-4 shadow-[0_40px_80px_-30px_rgba(0,30,90,0.6)] ring-1 ring-white/60 backdrop-blur-xl sm:p-5">
      <div className="flex items-center justify-between gap-3 pb-4">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="size-2.5 shrink-0 rounded-full bg-[#FF5F57]/80" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#FEBC2E]/80" />
          <span className="size-2.5 shrink-0 rounded-full bg-[#28C840]/80" />
          <span className="ms-3 truncate text-xs font-bold text-ink">{title}</span>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-status/10 px-2.5 py-1 text-[11px] font-bold text-status">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-status" />
            <span className="relative size-1.5 rounded-full bg-status" />
          </span>
          {live}
        </span>
      </div>

      <ul className="space-y-2" onMouseLeave={() => setHover(null)}>
        {items.map((item, i) => {
          const s = stateStyle[item.state ?? "ok"];
          const on = i === active;
          return (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.7 + i * 0.08 }}
              onMouseEnter={() => setHover(i)}
              className={cn(
                "relative flex cursor-default items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 transition-all duration-500",
                on ? "bg-brand-light ring-1 ring-brand/20" : "bg-page ring-1 ring-transparent",
              )}
            >
              {on && !reduce && (
                <motion.span
                  layoutId={`scan-${title}`}
                  className="absolute inset-y-0 left-0 w-1 rounded-full bg-brand"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span
                className={cn(
                  "grid grid-cols-1 size-9 shrink-0 place-items-center rounded-lg transition-colors duration-500",
                  on ? "bg-brand text-white" : "bg-white text-brand ring-1 ring-ink/5",
                )}
              >
                <Icon name={item.icon} size={17} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-bold text-ink">{item.label}</span>
                <span className="block truncate text-[11px] text-body">{item.meta}</span>
              </span>
              <span className={cn("flex shrink-0 items-center gap-1.5 text-[11px] font-bold", s.text)}>
                <span className={cn("size-1.5 rounded-full", s.dot, on && "animate-pulse")} />
                {s.label}
              </span>
            </motion.li>
          );
        })}
      </ul>

      {footer && (
        <p className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-[11px] font-semibold text-body">
          <Icon name="shield" size={14} className="text-status" />
          {footer}
        </p>
      )}
    </div>
  );
}
