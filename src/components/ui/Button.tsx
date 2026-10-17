import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant = "light" | "outline" | "accent" | "primary";

const styles: Record<Variant, { root: string; dot: string }> = {
  light: {
    root: "bg-white text-ink hover:bg-white/95 shadow-[0_10px_30px_-12px_rgba(0,30,90,0.5)]",
    dot: "bg-brand text-white",
  },
  outline: {
    root: "border border-white/45 text-white hover:border-white hover:bg-white/10",
    dot: "bg-white text-brand",
  },
  accent: {
    root: "bg-gradient-to-r from-accent to-accent-soft text-white shadow-glow-orange hover:from-accent-hover hover:to-accent",
    dot: "bg-white text-accent",
  },
  primary: {
    root: "bg-brand text-white hover:bg-brand-dark",
    dot: "bg-white text-brand",
  },
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
  /** Hide the trailing arrow disc (used for phone/text style buttons). */
  plain?: boolean;
  leadingIcon?: IconName;
  external?: boolean;
};

/**
 * Pill button from the design: label + round arrow disc on the right.
 * On hover the disc grows and the arrow slides through it.
 */
export function Button({
  href,
  children,
  variant = "light",
  icon = "arrowRight",
  className,
  plain,
  leadingIcon,
  external,
}: ButtonProps) {
  const s = styles[variant];
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  const content = (
    <>
      {leadingIcon && <Icon name={leadingIcon} size={17} className="shrink-0" />}
      <span className="text-left leading-tight sm:whitespace-nowrap">{children}</span>
      {!plain && (
        <span
          className={cn(
            "relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110",
            s.dot,
          )}
        >
          <Icon
            name={icon}
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-6"
          />
          <Icon
            name={icon}
            size={16}
            className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0"
          />
        </span>
      )}
    </>
  );

  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full text-[15px] font-semibold leading-none transition-all duration-300",
    plain ? "min-h-12 px-5 py-2" : "min-h-12 py-2 pe-2 ps-5",
    s.root,
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Text link with arrow micro-interaction ("Explore … →"). */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-1.5 text-sm font-semibold", className)}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
