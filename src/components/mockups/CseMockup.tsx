"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/useLocale";
import { Icon } from "@/components/ui/Icon";

type Status = "available" | "reserved" | "sold";

const STATUS_FILL: Record<Status, string> = {
  available: "#069AD7",
  reserved: "#F28E21",
  sold: "#CFCFCF",
};
/** AA-contrast text versions of the status colours */
const STATUS_TEXT: Record<Status, string> = { available: "#0474A1", reserved: "#9D5C15", sold: "#6B6969" };
/** Mock-up strings: English kept as approved; Arabic from the copy file (Homepage §05 build note). */
const T = {
  en: {
    status: { available: "Available", reserved: "Reserved", sold: "Sold" } as Record<Status, string>,
    sync: "Inventory sync · Sub-500 ms",
    selected: "Selected unit",
    previewing: "Previewing",
    down: "Down payment",
    stages: ["On reservation", "Structure complete", "Handover"],
    availableNow: "Available now",
    units: (n: number) => `${n} ${n === 1 ? "unit" : "units"}`,
    reserve: "Reserve with Nafath",
  },
  ar: {
    status: { available: "متاحة", reserved: "محجوزة", sold: "مباعة" } as Record<Status, string>,
    sync: "مزامنة المخزون · أقل من 500 ملّي ثانية",
    selected: "الوحدة المختارة",
    previewing: "الوحدة المختارة",
    down: "الدفعة الأولى",
    stages: ["عند الحجز", "اكتمال الهيكل", "التسليم"],
    availableNow: "متاح الآن",
    units: (n: number) => (n === 1 ? "وحدة واحدة" : n === 2 ? "وحدتان" : n <= 10 ? `${n} وحدات` : `${n} وحدة`),
    reserve: "احجز عبر نفاذ",
  },
};

type Plot = { id: string; x: number; y: number; status: Status; area: number; beds: number; price: number };

const INITIAL: Plot[] = Array.from({ length: 48 }, (_, i) => {
  const col = i % 12;
  const row = Math.floor(i / 12);
  const seed = (i * 37) % 10;
  return {
    id: `C-${String(i + 1).padStart(2, "0")}`,
    x: 18 + col * 30 + (col >= 6 ? 26 : 0),
    y: 26 + row * 44 + (row >= 2 ? 22 : 0),
    status: seed < 5 ? "available" : seed < 7 ? "reserved" : "sold",
    area: 320 + ((i * 53) % 9) * 12,
    beds: 3 + (i % 3),
    price: 1_950_000 + ((i * 97) % 11) * 55_000,
  };
});

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * Interactive product shot of the Connected Sales Environment.
 * Hover/click plots to select a unit, drag the down-payment slider,
 * and "Reserve with Nafath" to lock it — inventory keeps syncing live.
 */
export function CseMockup() {
  const locale = useLocale();
  const t = T[locale];
  const reduce = useReducedMotion();
  const [plots, setPlots] = useState(INITIAL);
  const [selected, setSelected] = useState(19); // an available unit
  const [hover, setHover] = useState<number | null>(null);
  const [down, setDown] = useState(20);
  const [latency, setLatency] = useState(412);
  const [flash, setFlash] = useState<number | null>(null);
  const [reserving, setReserving] = useState<"idle" | "verifying" | "done">("idle");

  // Live inventory sync
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      const i = Math.floor(Math.random() * INITIAL.length);
      if (i !== selected) {
        setPlots((prev) => (prev[i].status === "available" ? prev.map((p, j) => (j === i ? { ...p, status: "reserved" } : p)) : prev));
        setFlash(i);
      }
      setLatency(380 + Math.floor(Math.random() * 110));
    }, 3200);
    return () => clearInterval(t);
  }, [reduce, selected]);

  useEffect(() => {
    if (flash === null) return;
    const t = setTimeout(() => setFlash(null), 1400);
    return () => clearTimeout(t);
  }, [flash]);

  const unit = plots[selected];
  const deposit = Math.round((unit.price * down) / 100);
  const available = useMemo(() => plots.filter((p) => p.status === "available").length, [plots]);
  const shown = hover ?? selected;

  const select = (i: number) => {
    if (plots[i].status === "sold") return;
    setSelected(i);
    setReserving("idle");
  };

  const reserve = () => {
    if (unit.status !== "available" || reserving !== "idle") return;
    setReserving("verifying");
    setTimeout(() => {
      setPlots((prev) => prev.map((p, i) => (i === selected ? { ...p, status: "reserved" } : p)));
      setReserving("done");
    }, 1300);
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-white p-3 sm:p-4">
      {/* window chrome */}
      <div className="flex items-center justify-between gap-3 pb-3">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-xs font-bold text-ink">CSE · Masterplan Phase 2</span>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-status/10 px-2.5 py-1 text-[11px] font-bold text-brand-deep">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-status" />
            <span className="relative size-1.5 rounded-full bg-status" />
          </span>
          {t.sync}
        </span>
      </div>

      <div className="grid grid-cols-1 min-h-0 flex-1 gap-3 sm:grid-cols-[1.5fr_1fr]">
        {/* Masterplan */}
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(160deg,#F2FAFD_0%,#DCF1FA_100%)] ring-1 ring-brand/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "linear-gradient(rgba(6,154,215,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,154,215,.07) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <svg viewBox="0 0 410 250" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
            <rect x="0" y="107" width="410" height="18" fill="#FFFFFF" />
            <rect x="195" y="0" width="18" height="250" fill="#FFFFFF" />
            <path d="M0 116 H410 M204 0 V250" stroke="#C7E7F5" strokeDasharray="6 6" />
            <circle cx="204" cy="116" r="24" fill="#FFFFFF" stroke="#C7E7F5" />
            <circle cx="204" cy="116" r="14" fill="#CDEBD8" />
            {plots.map((p, i) => {
              const isSel = i === selected;
              const isHover = i === hover;
              return (
                <g
                  key={p.id}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => select(i)}
                  style={{ cursor: p.status === "sold" ? "not-allowed" : "pointer" }}
                >
                  <motion.rect
                    x={p.x}
                    y={p.y}
                    width="24"
                    height="34"
                    rx="4"
                    initial={false}
                    animate={{ fill: STATUS_FILL[p.status], scale: isHover && !isSel ? 1.12 : 1 }}
                    transition={{ duration: 0.35 }}
                    style={{ transformOrigin: `${p.x + 12}px ${p.y + 17}px` }}
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                  {flash === i && (
                    <motion.rect
                      x={p.x - 3}
                      y={p.y - 3}
                      width="30"
                      height="40"
                      rx="6"
                      fill="none"
                      stroke="#F28E21"
                      strokeWidth="2"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 1.2 }}
                      style={{ transformOrigin: `${p.x + 12}px ${p.y + 17}px` }}
                    />
                  )}
                  {isSel && (
                    <>
                      <rect x={p.x - 3} y={p.y - 3} width="30" height="40" rx="6" fill="none" stroke="#373535" strokeWidth="2.5" />
                      {!reduce && (
                        <motion.rect
                          x={p.x - 3}
                          y={p.y - 3}
                          width="30"
                          height="40"
                          rx="6"
                          fill="none"
                          stroke="#373535"
                          initial={{ opacity: 0.7, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.5 }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                          style={{ transformOrigin: `${p.x + 12}px ${p.y + 17}px` }}
                        />
                      )}
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* hover tooltip */}
          <AnimatePresence>
            {hover !== null && hover !== selected && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute right-2 top-2 rounded-lg bg-white px-2.5 py-1.5 text-[11px] font-semibold text-ink shadow-card ring-1 ring-ink/5"
              >
                Villa {plots[hover].id} ·{" "}
                <span style={{ color: STATUS_TEXT[plots[hover].status] }}>
                  {t.status[plots[hover].status]}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 rounded-lg bg-white/90 px-2 py-1.5 text-[10px] font-semibold text-body shadow-sm backdrop-blur">
            {(Object.keys(STATUS_FILL) as Status[]).map((s) => (
              <span key={s} className="flex items-center gap-1">
                <span className="size-2 rounded-sm" style={{ background: STATUS_FILL[s] }} />
                {t.status[s]}
              </span>
            ))}
          </div>
        </div>

        {/* Unit panel */}
        <div className="hidden min-w-0 flex-col gap-2 rounded-xl bg-page p-3 ring-1 ring-ink/5 sm:flex">
          <AnimatePresence mode="wait">
            <motion.div key={plots[shown].id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }}>
              <p className="text-[10px] font-semibold text-muted">{hover !== null && hover !== selected ? t.previewing : t.selected}</p>
              <p className="text-sm font-bold leading-tight text-ink">
                Villa {plots[shown].id} · {plots[shown].area} m²
              </p>
              <p className="text-[11px] text-body">
                {plots[shown].beds} bed ·{" "}
                <span className="font-semibold" style={{ color: STATUS_TEXT[plots[shown].status] }}>
                  {t.status[plots[shown].status]}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="rounded-lg bg-white p-2.5 ring-1 ring-ink/5">
            <div className="flex items-baseline justify-between">
              <label htmlFor="cse-down" className="text-[10px] font-semibold text-muted">
                {t.down}
              </label>
              <span className="text-[11px] font-bold text-ink">{down}%</span>
            </div>
            <input
              id="cse-down"
              type="range"
              min={10}
              max={40}
              step={5}
              value={down}
              onChange={(e) => setDown(Number(e.target.value))}
              className="cse-range mt-1.5 w-full"
              style={{ "--fill": `${((down - 10) / 30) * 100}%` } as CSSProperties}
            />
            <p className="mt-1 text-[11px] text-body">
              <span className="font-bold text-ink">SAR {fmt(deposit)}</span> of {fmt(unit.price)}
            </p>
          </div>

          <ul className="space-y-1 text-[10px] text-body">
            {(
              [
                [t.stages[0], down],
                [t.stages[1], 50 - down],
                [t.stages[2], 50],
              ] as const
            ).map(([label, pct]) => (
              <li key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="font-bold text-ink">{pct}%</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t border-line pt-2 text-[10px] text-body">
            <span>{t.availableNow}</span>
            <motion.span key={available} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="font-bold text-status">
              {t.units(available)}
            </motion.span>
          </div>

          <button
            type="button"
            onClick={reserve}
            disabled={unit.status !== "available"}
            className={cn(
              "group relative mt-auto flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-lg px-2 py-2 text-[11px] font-bold transition-colors",
              reserving === "done" ? "bg-status text-white" : unit.status === "available" ? "bg-brand-dark text-white hover:bg-brand-deep" : "bg-line text-muted",
            )}
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            {reserving === "verifying" ? (
              <>
                <span className="size-3 animate-spin rounded-full border-2 border-white border-t-transparent" /> Verifying Nafath…
              </>
            ) : reserving === "done" ? (
              <>
                <Icon name="check" size={13} strokeWidth={3} /> Unit locked · SPA generated
              </>
            ) : unit.status === "available" ? (
              <>
                <Icon name="fingerprint" size={13} /> {t.reserve}
              </>
            ) : (
              <>{locale === "ar" ? t.status[unit.status] : `Unit ${t.status[unit.status].toLowerCase()}`}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
