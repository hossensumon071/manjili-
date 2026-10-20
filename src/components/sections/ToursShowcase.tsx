import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "./SectionHeader";

export type Tour = { title: string; type: string; description: string; embedUrl?: string; previewLabel?: string };

type Props = { id?: string; eyebrow: string; title: string; lead: string; tours: Tour[] };

/** Stylised dollhouse cut-away shown until a Matterport embed URL is set. */
function DollhouseArt({ variant }: { variant: number }) {
  const rooms = variant === 0
    ? [
        { x: 60, y: 120, w: 150, h: 90, c: "#E8F2F7" },
        { x: 210, y: 120, w: 130, h: 90, c: "#F4E9DB" },
        { x: 60, y: 210, w: 110, h: 80, c: "#F4E9DB" },
        { x: 170, y: 210, w: 170, h: 80, c: "#E8F2F7" },
      ]
    : [
        { x: 50, y: 100, w: 120, h: 70, c: "#E8F2F7" },
        { x: 170, y: 100, w: 180, h: 70, c: "#F4E9DB" },
        { x: 50, y: 170, w: 200, h: 70, c: "#F4E9DB" },
        { x: 250, y: 170, w: 100, h: 70, c: "#E8F2F7" },
        { x: 50, y: 240, w: 300, h: 50, c: "#E8F2F7" },
      ];
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`tour-bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3DB2E3" />
          <stop offset="1" stopColor="#045A86" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill={`url(#tour-bg-${variant})`} />
      <g transform="translate(200 40) skewY(8) translate(-200 -40)">
        {rooms.map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={r.c} stroke="#373535" strokeOpacity="0.25" />
            <rect x={r.x + 10} y={r.y + r.h - 22} width={r.w * 0.35} height="14" rx="3" fill="#373535" opacity="0.12" />
          </g>
        ))}
        <rect x={rooms[0].x} y={rooms[0].y - 14} width="300" height="14" fill="#fff" opacity="0.9" />
      </g>
      <g stroke="#FFFFFF" strokeOpacity="0.5" strokeDasharray="4 6" fill="none">
        <circle cx="200" cy="180" r="120" />
      </g>
    </svg>
  );
}

export function ToursShowcase({ id, eyebrow, title, lead, tours }: Props) {
  return (
    <section id={id} className="scroll-mt-32 pb-24 sm:pb-32" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} id={id ? `${id}-title` : undefined} />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {tours.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5">
                <div className="relative aspect-[16/11] overflow-hidden">
                  {t.embedUrl ? (
                    <iframe
                      src={t.embedUrl}
                      title={t.title}
                      className="absolute inset-0 h-full w-full"
                      allow="xr-spatial-tracking; fullscreen"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-105">
                        <DollhouseArt variant={i} />
                      </div>
                      <span className="absolute inset-0 grid grid-cols-1 place-items-center">
                        <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-semibold text-ink shadow-float backdrop-blur transition-transform duration-300 group-hover:scale-105">
                          <Icon name="cube" size={17} className="text-brand-dark" />
                          {t.previewLabel ?? "3D tour preview"}
                        </span>
                      </span>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-accent-dark">{t.type}</p>
                  <h3 className="mt-2 text-h3 font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{t.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
