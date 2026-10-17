import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MediaProps = {
  src?: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
};

/**
 * Shows a real photo when `src` is set, otherwise the built-in illustration.
 * See src/content/images.ts.
 */
export function Media({ src, alt, fallback, className, sizes = "100vw", priority, imgClassName }: MediaProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0">
          {fallback}
        </div>
      )}
    </div>
  );
}
