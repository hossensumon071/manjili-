"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "./i18n";

/** Current page language for client components (from the URL: /ar → Arabic). */
export function useLocale(): Locale {
  return localeFromPath(usePathname() || "/");
}
