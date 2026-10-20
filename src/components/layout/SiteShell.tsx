import type { ReactNode } from "react";
import { globalCopy, type Locale } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Providers } from "./Providers";

/** Everything inside <body>, shared by the English and Arabic root layouts. */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const g = globalCopy(locale);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {g.ui.skip}
      </a>
      <Providers>
        <Navbar locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </Providers>
    </>
  );
}
