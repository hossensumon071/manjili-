import { cn } from "@/lib/utils";

/**
 * Stylised low-angle render of a modern villa cantilever against a clear
 * Saudi sky — stands in for the hero photograph until real renders arrive.
 */
export function HeroArt({ className, clouds = false, id = "hero" }: { className?: string; clouds?: boolean; id?: string }) {
  const g = (n: string) => `${id}-${n}`;
  const mullions = Array.from({ length: 10 }, (_, i) => 440 + i * 80);
  const slats = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={g("sky")} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#0B5BD8" />
          <stop offset="0.55" stopColor="#2B85EE" />
          <stop offset="1" stopColor="#1567DE" />
        </linearGradient>
        <radialGradient id={g("sun")} cx="0.72" cy="0.12" r="0.55">
          <stop offset="0" stopColor="#CFE6FF" stopOpacity="0.75" />
          <stop offset="1" stopColor="#CFE6FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={g("fasciaL")} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#C9DBF2" />
          <stop offset="0.6" stopColor="#F4F8FD" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id={g("fasciaR")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E8F0FA" />
          <stop offset="1" stopColor="#AFC6E6" />
        </linearGradient>
        <linearGradient id={g("wood")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6B4426" />
          <stop offset="0.5" stopColor="#A06A3E" />
          <stop offset="1" stopColor="#C68D57" />
        </linearGradient>
        <linearGradient id={g("glass")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E2F66" />
          <stop offset="0.45" stopColor="#1D4F95" />
          <stop offset="1" stopColor="#3C7CCB" />
        </linearGradient>
        <linearGradient id={g("reflect")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#BFE0FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={g("rail")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D8ECFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8EC0F5" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={g("slab")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B9D0EE" />
          <stop offset="1" stopColor="#F2F7FD" />
        </linearGradient>
        <linearGradient id={g("haze")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B5CD6" stopOpacity="0" />
          <stop offset="1" stopColor="#0B5CD6" stopOpacity="0.45" />
        </linearGradient>
        <filter id={g("soft")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <clipPath id={g("glassClip")}>
          <path d="M370 900 L370 400 L1010 165 L1190 418 L1190 900 Z" />
        </clipPath>
      </defs>

      <rect width="1440" height="900" fill={`url(#${g("sky")})`} />
      <rect width="1440" height="900" fill={`url(#${g("sun")})`} />

      {clouds && (
        <g fill="#fff" filter={`url(#${g("soft")})`} opacity="0.85">
          <ellipse cx="300" cy="150" rx="120" ry="34" />
          <ellipse cx="380" cy="130" rx="80" ry="30" />
          <ellipse cx="1290" cy="300" rx="150" ry="30" opacity="0.8" />
          <ellipse cx="1210" cy="520" rx="200" ry="36" opacity="0.7" />
          <ellipse cx="1340" cy="640" rx="160" ry="40" opacity="0.75" />
        </g>
      )}

      {/* Left wing: flat roof + glazing */}
      <path d="M0 312 L380 268 L380 292 L0 338 Z" fill="#F7FAFE" />
      <path d="M0 338 L380 292 L380 342 L0 396 Z" fill={`url(#${g("slab")})`} />
      <path d="M150 300 L330 279 L330 252 L150 270 Z" fill="#EAF2FC" />
      <path d="M0 396 L380 342 L380 900 L0 900 Z" fill={`url(#${g("glass")})`} />
      {[60, 140, 220, 300].map((x) => (
        <line key={x} x1={x} y1={396 - x * 0.142} x2={x} y2="900" stroke="#9CC4F0" strokeOpacity="0.35" strokeWidth="3" />
      ))}

      {/* Main glazed volume */}
      <path d="M370 900 L370 400 L1010 165 L1190 418 L1190 900 Z" fill={`url(#${g("glass")})`} />
      <g clipPath={`url(#${g("glassClip")})`}>
        <path d="M440 900 L800 60 L920 60 L560 900 Z" fill={`url(#${g("reflect")})`} opacity="0.7" />
        <path d="M880 900 L1110 60 L1160 60 L930 900 Z" fill={`url(#${g("reflect")})`} opacity="0.45" />
        {mullions.map((x) => (
          <line key={x} x1={x} y1="200" x2={x} y2="900" stroke="#CFE4FB" strokeOpacity="0.45" strokeWidth="3" />
        ))}
      </g>

      {/* Main roof: wood soffit under right arm */}
      <path d="M1008 168 L1440 486 L1440 548 L870 252 Z" fill={`url(#${g("wood")})`} />
      <g stroke="#3E2614" strokeOpacity="0.35" strokeWidth="2">
        {slats.map((i) => {
          const t = i / slats.length;
          const x1 = 1008 - 138 * t;
          const y1 = 168 + 84 * t;
          return <line key={i} x1={x1} y1={y1} x2={1440} y2={486 + 62 * t} />;
        })}
      </g>
      {/* downlights */}
      {[0.25, 0.45, 0.65, 0.85].map((t) => (
        <circle key={t} cx={1000 + 380 * t} cy={240 + 250 * t} r="4" fill="#FFE8C2" opacity="0.9" />
      ))}

      {/* Main roof fascias */}
      <path d="M296 352 L1010 96 L1046 94 L344 338 Z" fill="#FFFFFF" />
      <path d="M296 352 L1010 96 L1010 168 L316 420 Z" fill={`url(#${g("fasciaL")})`} />
      <path d="M1010 96 L1440 404 L1440 486 L1010 168 Z" fill={`url(#${g("fasciaR")})`} />
      <path d="M1010 96 L1046 94 L1440 372 L1440 404 Z" fill="#FFFFFF" opacity="0.95" />

      {/* Balcony slab + glass balustrade */}
      <path d="M600 640 L1440 520 L1440 470 L600 570 Z" fill={`url(#${g("rail")})`} stroke="#E6F3FF" strokeOpacity="0.7" strokeWidth="2" />
      <path d="M580 642 L1440 520 L1440 548 L590 676 Z" fill="#F3F8FE" />
      <path d="M590 676 L1440 548 L1440 610 L606 742 Z" fill={`url(#${g("fasciaR")})`} />

      {/* Atmospheric haze at the base so text sits cleanly on top */}
      <rect y="420" width="1440" height="480" fill={`url(#${g("haze")})`} />
    </svg>
  );
}
