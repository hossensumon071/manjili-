import { cn } from "@/lib/utils";

/* Deterministic pseudo-random so server and client render identical SVG. */
function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type ArtProps = { className?: string; id?: string };

/** Aerial coastline resort — Enterprise Mandate & ingestion step. */
export function CoastArt({ className, id = "coast" }: ArtProps) {
  const g = (n: string) => `${id}-${n}`;
  const r = rand(7);
  const trees = Array.from({ length: 70 }, () => ({ x: 120 + r() * 300, y: 150 + r() * 170, s: 3 + r() * 5 }));
  const blocks = [
    { x: 250, y: 95, w: 46, h: 22 },
    { x: 300, y: 70, w: 52, h: 24 },
    { x: 215, y: 140, w: 40, h: 20 },
    { x: 290, y: 130, w: 60, h: 26 },
    { x: 345, y: 108, w: 44, h: 22 },
    { x: 260, y: 190, w: 54, h: 24 },
    { x: 330, y: 170, w: 48, h: 22 },
    { x: 360, y: 220, w: 40, h: 20 },
  ];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id={g("sea")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A6FB8" />
          <stop offset="0.55" stopColor="#14A3D0" />
          <stop offset="1" stopColor="#45D1E3" />
        </linearGradient>
        <linearGradient id={g("land")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9E2CF" />
          <stop offset="1" stopColor="#D8D2BF" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${g("sea")})`} />
      {/* wave lines */}
      <g stroke="#fff" strokeOpacity="0.25" fill="none">
        <path d="M0 120 C60 100 120 70 220 20" />
        <path d="M0 150 C70 128 140 92 250 30" />
      </g>
      <path d="M0 190 C80 160 170 110 260 40 C300 10 340 0 400 -10 L400 300 L0 300 Z" fill="#F4E6C6" />
      <path d="M0 206 C86 176 178 128 268 58 C306 28 348 14 400 6 L400 300 L0 300 Z" fill={`url(#${g("land")})`} />
      {trees.map((t, i) => (
        <circle key={i} cx={t.x} cy={t.y} r={t.s} fill={i % 3 ? "#3F8F55" : "#2F7344"} opacity="0.9" />
      ))}
      {blocks.map((b, i) => (
        <g key={i} transform={`rotate(-28 ${b.x} ${b.y})`}>
          <rect x={b.x + 4} y={b.y + 5} width={b.w} height={b.h} fill="#0B132B" opacity="0.18" rx="2" />
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#FFFFFF" rx="2" />
          <rect x={b.x + 3} y={b.y + b.h - 7} width={b.w - 6} height="4" fill="#C9D9EC" />
          {i % 2 === 0 && <rect x={b.x + 6} y={b.y + b.h + 4} width={b.w * 0.55} height="8" rx="2" fill="#5ED6F2" />}
        </g>
      ))}
    </svg>
  );
}

/** White modern villa on blue sky — Enterprise Mandate right card. */
export function VillaArt({ className, id = "villa" }: ArtProps) {
  const g = (n: string) => `${id}-${n}`;
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2F8BEF" />
          <stop offset="1" stopColor="#A9D2FA" />
        </linearGradient>
        <linearGradient id={g("win")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C3F73" />
          <stop offset="1" stopColor="#4D86C8" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${g("sky")})`} />
      {/* upper volume */}
      <path d="M40 120 L210 92 L290 112 L290 160 L210 140 L40 168 Z" fill="#FFFFFF" />
      <path d="M210 92 L290 112 L290 160 L210 140 Z" fill="#E1EBF7" />
      <path d="M60 132 L195 110 L195 135 L60 157 Z" fill={`url(#${g("win")})`} />
      <path d="M222 112 L280 127 L280 150 L222 136 Z" fill={`url(#${g("win")})`} opacity="0.85" />
      {/* lower volume */}
      <path d="M10 190 L190 165 L300 188 L300 250 L190 228 L10 255 Z" fill="#F7FAFE" />
      <path d="M190 165 L300 188 L300 250 L190 228 Z" fill="#D7E4F4" />
      <path d="M30 200 L175 180 L175 222 L30 243 Z" fill={`url(#${g("win")})`} />
      <path d="M95 190 L95 236 M135 184 L135 230" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
      <rect x="0" y="262" width="300" height="38" fill="#EAF3FD" />
      <path d="M0 262 L300 262" stroke="#C7DAF0" strokeWidth="2" />
    </svg>
  );
}

/** Tower cluster at dusk — Masar Ma'ab case study. */
export function TowersArt({ className, id = "towers" }: ArtProps) {
  const g = (n: string) => `${id}-${n}`;
  const r = rand(21);
  const towers = [
    { x: 40, w: 46, h: 190 },
    { x: 95, w: 40, h: 230 },
    { x: 145, w: 52, h: 270 },
    { x: 205, w: 44, h: 215 },
    { x: 262, w: 58, h: 300 },
    { x: 330, w: 46, h: 250 },
    { x: 386, w: 52, h: 285 },
    { x: 448, w: 42, h: 220 },
    { x: 500, w: 56, h: 260 },
  ];
  const ground = 320;
  return (
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A3D8F" />
          <stop offset="0.7" stopColor="#1E73D6" />
          <stop offset="1" stopColor="#7FB8F2" />
        </linearGradient>
        <linearGradient id={g("tower")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0C2347" />
          <stop offset="0.5" stopColor="#1A3D70" />
          <stop offset="1" stopColor="#0E2A55" />
        </linearGradient>
        <linearGradient id={g("water")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E3B7A" />
          <stop offset="1" stopColor="#061B3D" />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={`url(#${g("sky")})`} />
      {towers.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={ground - t.h} width={t.w} height={t.h} fill={`url(#${g("tower")})`} />
          <rect x={t.x + t.w * 0.2} y={ground - t.h - 12} width={t.w * 0.6} height="12" fill="#14325F" />
          {Array.from({ length: Math.floor(t.h / 14) }, (_, row) =>
            Array.from({ length: Math.floor(t.w / 9) }, (_, col) => {
              const on = r() > 0.55;
              return on ? (
                <rect
                  key={`${row}-${col}`}
                  x={t.x + 4 + col * 9}
                  y={ground - t.h + 8 + row * 14}
                  width="4"
                  height="6"
                  fill={r() > 0.3 ? "#FFD9A0" : "#BFE0FF"}
                  opacity={0.55 + r() * 0.45}
                />
              ) : null;
            }),
          )}
        </g>
      ))}
      <rect y={ground} width="600" height={380 - ground} fill={`url(#${g("water")})`} />
      <g opacity="0.35">
        {towers.map((t, i) => (
          <rect key={i} x={t.x} y={ground + 2} width={t.w} height={50} fill="#FFD9A0" opacity={0.15 + (i % 3) * 0.1} />
        ))}
      </g>
      <rect y={ground - 4} width="600" height="6" fill="#FFCF87" opacity="0.5" />
    </svg>
  );
}

/** Terraced residential block with pool — Dyari Signature case study. */
export function ResidenceArt({ className, id = "residence" }: ArtProps) {
  const g = (n: string) => `${id}-${n}`;
  const floors = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F62DA" />
          <stop offset="1" stopColor="#5AA6F2" />
        </linearGradient>
        <linearGradient id={g("glass")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#163C73" />
          <stop offset="1" stopColor="#3E7BC4" />
        </linearGradient>
        <linearGradient id={g("pool")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2FB7E8" />
          <stop offset="1" stopColor="#0E7CC4" />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={`url(#${g("sky")})`} />
      {/* background block */}
      <g opacity="0.85">
        <rect x="70" y="200" width="200" height="120" fill="#DCE8F6" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="78" y={210 + i * 28} width="184" height="12" fill={`url(#${g("glass")})`} opacity="0.7" />
        ))}
      </g>
      {/* main terraced block */}
      {floors.map((i) => {
        const y = 60 + i * 38;
        const inset = Math.max(0, 6 - i) * 10;
        return (
          <g key={i}>
            <rect x={300 + inset} y={y + 8} width={290 - inset} height="26" fill={`url(#${g("glass")})`} />
            <rect x={300 + inset} y={y + 8} width={290 - inset} height="26" fill="#fff" opacity="0.08" />
            <rect x={292 + inset} y={y + 32} width={308 - inset} height="9" fill="#FFFFFF" />
            <rect x={292 + inset} y={y + 22} width={308 - inset} height="10" fill="#DFF0FF" opacity="0.35" />
          </g>
        );
      })}
      <rect x="300" y="40" width="300" height="20" fill="#FFFFFF" />
      <rect x="286" y="40" width="16" height="292" fill="#F2F7FD" />
      {/* pool deck */}
      <rect y="328" width="600" height="52" fill="#EEF4FB" />
      <rect x="0" y="338" width="560" height="30" fill={`url(#${g("pool")})`} />
      <g stroke="#fff" strokeOpacity="0.5">
        <path d="M20 348 h80 M140 356 h120 M300 346 h90 M420 358 h100" />
      </g>
    </svg>
  );
}
