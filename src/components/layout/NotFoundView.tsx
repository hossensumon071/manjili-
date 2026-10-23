import enMeta from "@/content/copy/en/meta.json";
import arMeta from "@/content/copy/ar/meta.json";
import { globalCopy, lp, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Sheen } from "@/components/ui/Sheen";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = globalCopy(locale).notFound;
  const title = ((locale === "ar" ? arMeta : enMeta) as Record<string, { title: string }>)["*404*"].title;
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      {/* Revision item 8: rendered in the component so the tab title survives hydration (React 19 hoists it to <head>) */}
      <title>{title}</title>
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x flex min-h-[70vh] flex-col items-start justify-end pb-16 pt-36">
          <p className="eyebrow eyebrow-on-dark">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-h2 font-bold text-white">{t.title}</h1>
          <p className="mt-4 max-w-[52ch] text-white/95">{t.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={lp(locale, "/")} variant="primary">
              {t.primary}
            </Button>
            <Button href={lp(locale, "/contact-us")} variant="outline">
              {t.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
