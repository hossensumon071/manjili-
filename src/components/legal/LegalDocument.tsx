"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { LegalBlock, LegalDoc } from "@/content/legal/types";
import { cn } from "@/lib/utils";

/** Renders **bold** and [label](href) inside legal copy. */
function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={k++} className="font-semibold text-ink"><Rich text={m[1]} /></strong>);
    else out.push(<a key={k++} href={m[3]} className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand">{m[2]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

function Block({ b }: { b: LegalBlock }) {
  if ("h3" in b) return <h3 className="mt-8 text-h4 font-semibold text-ink">{b.h3}</h3>;
  if ("p" in b) return <p className="mt-4 leading-[1.75]"><Rich text={b.p} /></p>;
  const Tag = "ol" in b ? "ol" : "ul";
  const items = "ol" in b ? b.ol : b.ul;
  return (
    <Tag className="mt-4 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-[1.7]">
          {Tag === "ol" ? (
            <span className="mt-0.5 grid grid-cols-1 size-6 shrink-0 place-items-center rounded-full bg-brand-light text-xs font-bold text-brand">{i + 1}</span>
          ) : (
            <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
          )}
          <span><Rich text={it} /></span>
        </li>
      ))}
    </Tag>
  );
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const [active, setActive] = useState(doc.sections[0]?.id);

  useEffect(() => {
    const els = doc.sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [doc.sections]);

  return (
    <section className="py-16 sm:py-24">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold text-muted">On this page</p>
          <ol className="mt-4 space-y-1 border-l border-line">
            {doc.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                    active === s.id ? "border-brand font-semibold text-brand" : "border-transparent text-body hover:text-ink",
                  )}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="max-w-[760px] rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10 lg:p-12">
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className={cn("scroll-mt-28", i > 0 && "mt-12 border-t border-line pt-12")}>
              <h2 className="text-h3 font-bold text-ink">{s.title}</h2>
              {s.blocks.map((b, j) => (
                <Block key={j} b={b} />
              ))}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
