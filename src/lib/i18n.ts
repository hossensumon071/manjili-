import enGlobal from "@/content/copy/en/global.json";
import arGlobal from "@/content/copy/ar/global.json";

/** Copy for every page comes from Buddy's final files (src/content/copy/{en,ar}). */
export type Locale = "en" | "ar";
export const locales: Locale[] = ["en", "ar"];

export const isArabicPath = (pathname: string) => pathname === "/ar" || pathname.startsWith("/ar/") || pathname.startsWith("/ar#");

/** Locale-prefixed internal path: lp("ar", "/platform-cse") → "/ar/platform-cse", lp("ar", "/#pillars") → "/ar#pillars". */
export function lp(locale: Locale, path: string) {
  if (locale === "en") return path;
  if (path === "/") return "/ar";
  if (path.startsWith("/#")) return "/ar" + path.slice(1);
  return "/ar" + path;
}

/** The same page in the other language. */
export function alternatePath(pathname: string) {
  if (isArabicPath(pathname)) return pathname.replace(/^\/ar/, "") || "/";
  return lp("ar", pathname);
}

export function localeFromPath(pathname: string): Locale {
  return isArabicPath(pathname) ? "ar" : "en";
}

export type GlobalCopy = typeof enGlobal;
export function globalCopy(locale: Locale): GlobalCopy {
  return (locale === "ar" ? arGlobal : enGlobal) as GlobalCopy;
}
