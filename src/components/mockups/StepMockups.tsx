"use client";

import { useLocale } from "@/lib/useLocale";
import { Icon } from "@/components/ui/Icon";

/** Mock-up labels: English kept as approved; Arabic from the copy file (Homepage §07 build note). */
const AR: Record<string, string> = {
  "Engineering data · NDA vault": "البيانات الهندسية · خزنة سرية",
  "Runtime targets": "منصات التشغيل",
  "UE5 offline app": "تطبيق UE5 دون إنترنت",
  "WebGL mobile": "منصة الجوال",
  "Touch table": "طاولة اللمس",
  "Live": "مباشر",
  "Queued": "في الانتظار",
  "Deploy": "نشر",
  "Preview": "معاينة",
  "Build logs": "سجل الإصدارات",
  "Build 2.14 ready": "الإصدار 2.14 جاهز",
  "Project": "المشروع",
  "Units": "الوحدات",
  "Sync": "المزامنة",
  "Al Nakheel Residences": "مساكن النخيل",
  "Riyadh Avenue Towers": "أبراج جادة الرياض",
  "Wadi Villas Phase 2": "فلل الوادي · المرحلة 2",
  "Yardi · Salesforce connected": "Yardi · Salesforce متصلان",
};
function useTr() {
  const ar = useLocale() === "ar";
  return (s: string) => (ar ? (AR[s] ?? s) : s);
}


/** Step 01 overlay: model files being ingested (sits on top of the coast art). */
export function IngestionOverlay() {
  const tr = useTr();
  const files = [
    { name: "Masterplan.rvt", pct: 100 },
    { name: "Towers_A-C.ifc", pct: 100 },
    { name: "Site_GIS.shp", pct: 72 },
  ];
  return (
    <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/60 bg-white/85 p-3 shadow-card backdrop-blur-md sm:right-auto sm:w-60">
      <p className="mb-2 text-[11px] font-semibold text-muted">{tr("Engineering data · NDA vault")}</p>
      <ul className="space-y-1.5">
        {files.map((f) => (
          <li key={f.name} className="flex items-center gap-2 text-[11px] font-semibold text-ink">
            <span className={`grid size-4 place-items-center rounded-full ${f.pct === 100 ? "bg-status text-white" : "bg-brand-light text-brand-dark"}`}>
              {f.pct === 100 ? <Icon name="check" size={10} strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-brand" />}
            </span>
            <span className="min-w-0 flex-1 break-words leading-tight">{f.name}</span>
            <span className="text-muted">{f.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Step 02: dual-runtime build console. */
export function RuntimeMockup() {
  const tr = useTr();
  return (
    <div className="absolute inset-0 grid grid-cols-[1.6fr_1fr] gap-3 bg-[#EEF6F9] p-4">
      <div className="rounded-xl bg-white p-3 shadow-card">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold text-ink">
          <span className="size-3 rounded bg-brand" />
          {tr("Runtime targets")}
        </div>
        {[
          { label: tr("UE5 offline app"), meta: "4K", on: true },
          { label: tr("WebGL mobile"), meta: tr("Live"), on: true },
          { label: tr("Touch table"), meta: tr("Queued"), on: false },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2 border-t border-line py-2 first:border-t-0">
            <span className={`grid size-4 place-items-center rounded ${r.on ? "bg-accent text-white" : "border border-line"}`}>
              {r.on && <Icon name="check" size={10} strokeWidth={3} />}
            </span>
            <span className="min-w-0 flex-1 text-[11px] font-semibold leading-tight text-ink">{r.label}</span>
            <span className="text-[10px] text-muted">{r.meta}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-white p-3 shadow-card">
        <span className="rounded-md bg-ink py-2 text-center text-[11px] font-bold text-white">{tr("Deploy")}</span>
        <span className="rounded-md border border-line py-2 text-center text-[11px] font-semibold text-ink">{tr("Preview")}</span>
        <span className="rounded-md border border-line py-2 text-center text-[11px] font-semibold text-ink">{tr("Build logs")}</span>
        <p className="mt-auto text-center text-[10px] text-muted">{tr("Build 2.14 ready")}</p>
      </div>
    </div>
  );
}

/** Step 03: live inventory sync table. */
export function InventoryMockup() {
  const tr = useTr();
  const rows = [
    { name: tr("Al Nakheel Residences"), units: "312", sync: 96 },
    { name: tr("Riyadh Avenue Towers"), units: "1,428", sync: 88 },
    { name: tr("Wadi Villas Phase 2"), units: "184", sync: 74 },
  ];
  return (
    <div className="absolute inset-0 bg-[#EEF6F9] p-4">
      <div className="h-full rounded-xl bg-white p-3 shadow-card">
        <div className="grid grid-cols-[1fr_auto_64px] gap-3 border-b border-line pb-2 text-[10px] font-semibold text-muted">
          <span>{tr("Project")}</span>
          <span>{tr("Units")}</span>
          <span>{tr("Sync")}</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[1fr_auto_64px] items-center gap-3 border-b border-line py-2.5 last:border-0">
            <span className="flex min-w-0 items-center gap-2 text-[11px] font-semibold text-ink">
              <span className="size-5 shrink-0 rounded bg-gradient-to-br from-brand-sky to-brand-deep" />
              <span className="leading-tight">{r.name}</span>
            </span>
            <span className="text-[11px] text-body">{r.units}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-brand-light">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${r.sync}%` }} />
            </span>
          </div>
        ))}
        <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-status">
          <span className="size-1.5 rounded-full bg-status" /> {tr("Yardi · Salesforce connected")}
        </p>
      </div>
    </div>
  );
}
