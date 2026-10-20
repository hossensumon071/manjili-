import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

/**
 * QA B6 — one primary and one secondary style site-wide, 48px tall, 15px labels.
 *
 *   primary   — brand orange #F28E21 with a white label, as in the approved design
 *               (QA B1 keeps the orange CTAs orange; buttons are not in the C1 list).
 *   secondary — outline: brand blue on light surfaces ("secondary"),
 *               white on blue surfaces ("outline").
 *
 * "light" and "accent" are kept as aliases of "primary" for older call sites.
 */
type Variant = "primary" | "secondary" | "light" | "outline" | "accent";
type Style = "primary" | "secondary" | "outline";

const resolve = (v: Variant): Style => (v === "secondary" || v === "outline" ? v : "primary");

const styles: Record<Style, { root: string; dot: string }> = {
  primary: {
    root: "bg-accent font-bold text-white hover:bg-accent-hover shadow-[0_10px_24px_-12px_rgba(242,142,33,0.65)]",
    dot: "bg-white text-accent-dark",
  },
  secondary: {
    root: "border-2 border-brand-dark text-brand-dark hover:bg-brand-light",
    dot: "bg-brand-dark text-white",
  },
  outline: {
    root: "border-2 border-white/80 text-white hover:border-white hover:bg-white/10",
    dot: "bg-white text-brand-dark",
  },
};

export const buttonBase =
  "group inline-flex min-h-12 items-center gap-3 rounded-full text-[15px] font-semibold leading-none transition-all duration-300 disabled:opacity-60";

export function buttonClasses(variant: Variant = "primary", plain = false) {
  const s = styles[resolve(variant)];
  return cn(buttonBase, plain ? "px-5 py-2" : "py-1.5 pe-1.5 ps-5", s.root);
}

export function ButtonDisc({ variant = "primary", icon = "arrowRight" }: { variant?: Variant; icon?: IconName }) {
  const s = styles[resolve(variant)];
  return (
    <span className={cn("relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105", s.dot)}>
      <Icon name={icon} size={16} className="transition-transform duration-300 group-hover:translate-x-6 rtl:group-hover:-translate-x-6" />
      <Icon name={icon} size={16} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0 rtl:translate-x-6" />
    </span>
  );
}

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

export function Button({ href, children, variant = "primary", icon = "arrowRight", className, plain, leadingIcon, external }: ButtonProps) {
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  const content = (
    <>
      {leadingIcon && <Icon name={leadingIcon} size={17} className="shrink-0" />}
      <span className="text-left leading-tight sm:whitespace-nowrap">{children}</span>
      {!plain && <ButtonDisc variant={variant} icon={icon} />}
    </>
  );
  const classes = cn(buttonClasses(variant, plain), className);

  return isExternal ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Text link with arrow micro-interaction ("Explore … →"). */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5 text-sm font-semibold", className)}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}
