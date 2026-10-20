import { globalCopy, lp, type Locale } from "@/lib/i18n";
import { ConversionCta } from "./ConversionCta";

/**
 * Shared CTA Banner (copy file Part 1) — used on /platform-cse, /case-studies and every
 * case study. No phone button (the phone lives in the footer). On /case-studies the
 * secondary button points to the CSE platform instead of the page itself.
 */
export function SharedCtaBanner({ locale = "en", onCaseStudiesIndex = false }: { locale?: Locale; onCaseStudiesIndex?: boolean }) {
  const t = globalCopy(locale).ctaBanner;
  return (
    <ConversionCta
      badge={[t.eyebrow]}
      headline={t.title}
      body={t.body}
      primary={{ label: t.primary, href: lp(locale, "/contact-us") }}
      secondary={
        onCaseStudiesIndex
          ? { label: t.secondaryOnCases, href: lp(locale, "/platform-cse") }
          : { label: t.secondary, href: lp(locale, "/case-studies") }
      }
    />
  );
}
