import Link from "next/link";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { ResidenceArt, TowersArt } from "@/components/art/SceneArt";

const { caseStudies } = home;

export function CaseStudies() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cases-title">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-center">{caseStudies.eyebrow}</p>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="cases-title" className="h-section max-w-[24ch]">
              {caseStudies.headline}
            </h2>
            <Button href={caseStudies.cta.href} variant="accent" className="w-fit shrink-0">
              {caseStudies.cta.label}
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {caseStudies.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.12}>
              <Link
                href={item.href}
                className="group block h-full overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-float"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Media
                    src={item.art === "towers" ? images.caseMasarMaab : images.caseDyariSignature}
                    alt={`${item.name} — ${item.type}`}
                    fallback={item.art === "towers" ? <TowersArt id={`case-${i}`} /> : <ResidenceArt id={`case-${i}`} />}
                    className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1.5 text-xs font-semibold text-ink backdrop-blur">
                    <Icon name="building" size={14} />
                    {item.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-h3 font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="mapPin" size={15} />
                    {item.location} · {item.type}
                  </p>
                  <p className="mt-3 text-[15px]">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View Case Study
                    <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
