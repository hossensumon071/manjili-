import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "./SectionHeader";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  columns: string[];
  rows: string[][];
  /** Column index rendered as the Manzili column (blue highlight). */
  highlight?: number;
};

/**
 * Executive comparison / specification matrix.
 * Desktop: real table. Mobile: one card per row so nothing scrolls sideways.
 */
export function DataTable({ id, eyebrow, title, lead, columns, rows, highlight }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} id={id ? `${id}-title` : undefined} />

        <Reveal className="mt-12 hidden overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5 md:block">
          <table className="w-full table-fixed border-collapse text-left text-[15px]">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr>
                {columns.map((c, ci) => (
                  <th
                    key={c}
                    scope="col"
                    className={cn(
                      "px-6 py-5 text-sm font-bold",
                      ci === 0 && "w-[22%]",
                      ci === highlight ? "bg-brand text-white" : "bg-page text-ink",
                    )}
                  >
                    {ci === highlight ? (
                      <span className="flex items-center gap-2">
                        <span className="grid grid-cols-1 size-5 place-items-center rounded-full bg-white text-brand">
                          <Icon name="check" size={12} strokeWidth={3} />
                        </span>
                        {c}
                      </span>
                    ) : (
                      c
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-t border-line transition-colors hover:bg-page/60">
                  {row.map((cell, ci) =>
                    ci === 0 ? (
                      <th key={ci} scope="row" className="px-6 py-5 align-top font-semibold text-ink">
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={ci}
                        className={cn(
                          "px-6 py-5 align-top leading-relaxed",
                          ci === highlight ? "bg-brand-light/60 font-semibold text-ink" : "text-body",
                        )}
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {rows.map((row, ri) => (
            <Reveal key={ri}>
              <article className="overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5">
                <h3 className="bg-page px-5 py-4 text-[15px] font-bold text-ink">{row[0]}</h3>
                <dl className="divide-y divide-line">
                  {row.slice(1).map((cell, ci) => {
                    const col = ci + 1;
                    return (
                      <div key={ci} className={cn("px-5 py-4", col === highlight && "bg-brand-light/60")}>
                        <dt className={cn("text-xs font-semibold", col === highlight ? "text-brand" : "text-muted")}>
                          {columns[col]}
                        </dt>
                        <dd className={cn("mt-1 text-sm leading-relaxed", col === highlight ? "font-semibold text-ink" : "text-body")}>
                          {cell}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
