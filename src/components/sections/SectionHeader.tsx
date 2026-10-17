import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  tone?: "light" | "dark";
  /** "split" puts the lead to the right of the title on desktop. */
  layout?: "stack" | "split";
  className?: string;
};

export function SectionHeader({ eyebrow, title, lead, id, tone = "light", layout = "split", className }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "grid grid-cols-1 gap-5",
        layout === "split" && lead && "lg:grid-cols-[1fr_minmax(0,440px)] lg:items-end lg:gap-12",
        className,
      )}
    >
      <div>
        {eyebrow && <p className={cn("text-eyebrow font-semibold", dark ? "text-white/75" : "text-accent")}>{eyebrow}</p>}
        <h2 id={id} className={cn("mt-4 max-w-[22ch] font-display text-h2 font-bold", dark ? "text-white" : "text-ink")}>
          {title}
        </h2>
      </div>
      {lead && <p className={cn("max-w-[62ch]", dark ? "text-white/80" : "text-body")}>{lead}</p>}
    </Reveal>
  );
}
