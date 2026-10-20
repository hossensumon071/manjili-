import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Official Manzili logo (brand kit SVGs in /public/brand).
 * tone="light" → white version for blue surfaces; tone="dark" → full-colour version.
 */
export function Logo({
  tone = "light",
  href = "/",
  label = "Manzili home",
  className,
}: {
  tone?: "light" | "dark";
  href?: string;
  label?: string;
  className?: string;
}) {
  const src = tone === "light" ? "/brand/manzili-logo-white.svg" : "/brand/manzili-logo.svg";
  return (
    <Link href={href} aria-label={label} className={cn("inline-flex shrink-0 items-center", className)}>
      <Image src={src} alt="" width={643} height={189} priority unoptimized className="h-9 w-auto sm:h-10" />
    </Link>
  );
}
