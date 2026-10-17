"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Status = "available" | "reserved" | "sold";

const statusFill: Record<Status, string> = {
  available: "#10B981",
  reserved: "#FF7A00",
  sold: "#94A3B8",
};

// Masterplan plots laid out on a 10×6 grid with a central boulevard.
const PLOTS = Array.from({ length: 48 }, (_, i) => {
  const col = i % 12;
  const row = Math.floor(i / 12);
  const x = 18 + col * 30 + (col >= 6 ? 26 : 0);
  const y = 26 + row * 44 + (row >= 2 ? 22 : 0);
  const seed = (i * 37) % 10;
  const status: Status = seed < 5 ? "available" : seed < 7 ? "reserved" : "sold";
  return { id: `C-${String(i + 1).padStart(2, "0")}`, x, y, status };
});

const SELECTED = 17;

/**
 * Live-looking product shot of the Connected Sales Environment:
 * masterplan inventory on the left, unit + financing panel on the right.
 * Unit statuses quietly change to show real-time ERP sync.
 */
export function CseMockup() {
  const [plots, setPlots] = useState(PLOTS);
  const [lastSync, setLastSync] = useState(412);
  const [down, setDown] = useState(20);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setPlots((prev) => {
        const next = [...prev];
        const i = Math.floor(Math.random() * next.length);
        if (i === SELECTED) return prev;
        const order: Status[] = ["available", "reserved", "sold"];
        const cur = order.indexOf(next[i].status);
        next[i] = { ...next[i], status: order[Math.min(cur + 1, 2)] };
        return next;
      });
      setLastSync(380 + Math.floor(Math.random() * 110));
      setDown((d) => (d >= 30 ? 20 : d + 5));
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const price = 2_450_000;
  const deposit = Math.round((price * down) / 100);
  const available = plots.filter((p) => p.status === "available").length;

  return (
    <div className="absolute inset-0 flex flex-col bg-[linear-gradient(160deg,#0E1526_0%,#0A1A3A_100%)] p-3 sm:p-4">
      {/* window chrome */}
      <div className="flex items-center justify-between pb-3">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ms-3 truncate text-xs font-semibold text-white/70">CSE · Masterplan Phase 2</span>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-status/15 px-2.5 py-1 text-[11px] font-semibold text-status">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-status" />
            <span className="relative size-1.5 rounded-full bg-status" />
          </span>
          Live · {lastSync}ms
        </span>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 sm:grid-cols-[1.5fr_1fr]">
        {/* Masterplan */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B2246]">
          <svg viewBox="0 0 410 250" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
            <rect x="0" y="108" width="410" height="16" fill="#123565" />
            <rect x="196" y="0" width="16" height="250" fill="#123565" />
            <circle cx="204" cy="116" r="22" fill="#0F2D57" stroke="#2E5E9E" />
            <circle cx="204" cy="116" r="10" fill="#1E6FD6" opacity="0.5" />
            {plots.map((p, i) => (
              <g key={p.id}>
                <motion.rect
                  x={p.x}
                  y={p.y}
                  width="24"
                  height="34"
                  rx="3"
                  initial={false}
                  animate={{ fill: statusFill[p.status] }}
                  transition={{ duration: 0.6 }}
                  opacity={i === SELECTED ? 1 : 0.8}
                />
                {i === SELECTED && (
                  <>
                    <rect x={p.x - 3} y={p.y - 3} width="30" height="40" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
                    <motion.rect
                      x={p.x - 3}
                      y={p.y - 3}
                      width="30"
                      height="40"
                      rx="5"
                      fill="none"
                      stroke="#fff"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      style={{ transformOrigin: `${p.x + 12}px ${p.y + 17}px` }}
                    />
                  </>
                )}
              </g>
            ))}
          </svg>
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 rounded-lg bg-night/70 px-2 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur">
            {(Object.keys(statusFill) as Status[]).map((s) => (
              <span key={s} className="flex items-center gap-1 capitalize">
                <span className="size-2 rounded-sm" style={{ background: statusFill[s] }} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Unit panel */}
        <div className="hidden min-w-0 flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white sm:flex">
          <div>
            <p className="text-[10px] font-semibold text-white/50">Selected unit</p>
            <p className="text-sm font-bold leading-tight">Villa C-18 · 412 m²</p>
            <p className="text-[11px] text-white/60">4 bed · South-facing · Sea view</p>
          </div>
          <div className="rounded-lg bg-white/[0.06] p-2">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] text-white/50">Down payment</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={down}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  className="text-[11px] font-bold"
                >
                  {down}%
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-accent" animate={{ width: `${(down / 40) * 100}%` }} transition={{ duration: 0.6 }} />
            </div>
            <p className="mt-1.5 text-[11px] text-white/70">
              SAR {deposit.toLocaleString("en-US")} <span className="text-white/40">of {price.toLocaleString("en-US")}</span>
            </p>
          </div>
          <ul className="space-y-1 text-[10px] text-white/60">
            {[
              ["On reservation", "10%"],
              ["Structure complete", "40%"],
              ["Handover", "50%"],
            ].map(([label, pct]) => (
              <li key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="font-semibold text-white/85">{pct}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/60">
            <span>Available now</span>
            <span className="font-semibold text-status">{available} units</span>
          </div>
          <div className="mt-auto flex items-center justify-center gap-1.5 rounded-lg bg-brand py-2 text-[11px] font-bold">
            <Icon name="fingerprint" size={13} />
            Reserve with Nafath
          </div>
        </div>
      </div>
    </div>
  );
}
