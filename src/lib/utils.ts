export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Shared easing curve so every motion on the site feels like one system. */
export const EASE = [0.22, 1, 0.36, 1] as const;
