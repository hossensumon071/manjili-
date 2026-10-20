import type { StatusPanelProps } from "@/components/sections/StatusPanel";
import type { Locale } from "@/lib/i18n";

/**
 * Pillar hero mock-ups (decorative). English = the approved mock-ups with the
 * copy file's listed string changes; Arabic = the copy file's "Arabic mockup strings".
 */
const en: StatusPanelProps[] = [
  {
    title: "Core 3D Master Model · Build pipeline",
    live: "Synced",
    items: [
      { icon: "layers", label: "Core 3D master model", meta: "Revit · CAD · IFC ingested", state: "ok" },
      { icon: "monitor", label: "Unreal Engine 5 application", meta: "Offline · 4K · 60 FPS", state: "active" },
      { icon: "globe", label: "WebGL web platform", meta: "Safari · Chrome · Edge · under 3 s load", state: "active" },
      { icon: "presentation", label: "Touch tables & LED walls", meta: "Gallery hardware calibrated", state: "ok" },
    ],
    footer: "Both versions rebuild from one model after every design change",
  },
  {
    title: "Inventory sync · Pre-built connectors",
    live: "Sub-500 ms",
    items: [
      { icon: "database", label: "Salesforce", meta: "Bidirectional event stream · Sub-500 ms", state: "active" },
      { icon: "database", label: "Yardi Voyager", meta: "Real-time webhook pipeline · Sub-500 ms", state: "active" },
      { icon: "database", label: "SAP RE-FX", meta: "OData / RFC middleware · Sub-500 ms", state: "active" },
      { icon: "database", label: "HubSpot", meta: "Bidirectional REST API · Sub-500 ms", state: "ok" },
    ],
    footer: "In-Kingdom hosting under Saudi PDPL",
  },
  {
    title: "Sales gallery · Hardware floor",
    live: "All systems",
    items: [
      { icon: "presentation", label: "86″ PCAP touch tables", meta: "4K UHD · 40-point multi-touch", state: "ok" },
      { icon: "monitor", label: "Direct-view micro-LED wall", meta: "1.2 mm pitch · 1,200 nits · 120 Hz", state: "active" },
      { icon: "globe", label: "270° immersive room", meta: "Blended projection · calibrated", state: "ok" },
      { icon: "cube", label: "Volumetric hologram display", meta: "VIP architectural centerpiece", state: "ok" },
      { icon: "database", label: "Offline GPU workstations", meta: "Dual RTX 6000 Ada · hot-swap ready", state: "active" },
    ],
    footer: "2-hour dispatch on launch days · 4-hour standard support SLA",
  },
  {
    title: "Enablement program · Coaching tracks",
    live: "In session",
    items: [
      { icon: "presentation", label: "Showroom Hardware Mastery", meta: "In-person showroom sessions", state: "active" },
      { icon: "globe", label: "Remote Showcase Playbook", meta: "Online interactive workshops", state: "ok" },
      { icon: "map", label: "Masterplan Storytelling", meta: "In-person & hybrid drills", state: "ok" },
      { icon: "users", label: "Sales Leadership Alignment", meta: "Executive strategy sessions", state: "ok" },
    ],
    footer: "Delivered by bilingual Saudi trainers",
  },
  {
    title: "Launch war room · on site",
    live: "On site",
    items: [
      { icon: "building", label: "Cityscape Global · Riyadh", meta: "LED stage · touch table network · private LAN", state: "active" },
      { icon: "building", label: "RestateX Riyadh & Jeddah", meta: "VIP negotiation suites staged", state: "ok" },
      { icon: "presentation", label: "Flagship sales gallery", meta: "Technician coverage all launch day", state: "active" },
      { icon: "activity", label: "Allocation concurrency watch", meta: "Sub-500 ms unit lock · dual 5G failover", state: "ok" },
    ],
    footer: "2-hour dispatch on launch days · Kingdom-wide deployment",
  },
  {
    title: "Project lifecycle · Asset continuity",
    live: "Continuous",
    items: [
      { icon: "layers", label: "Architectural concept", meta: "CAD · BIM · GIS ingestion", state: "ok" },
      { icon: "cube", label: "Off-plan digital twin", meta: "UE5 gallery app + WebGL portal", state: "ok" },
      { icon: "eye", label: "Matterport model unit tours", meta: "Pro3 LiDAR capture · embedded", state: "active" },
      { icon: "building", label: "Ready-built portfolio", meta: "Leasing & secondary sales tours", state: "idle" },
    ],
    footer: "Every 3D asset feeds one web platform",
  },
];

const ar: StatusPanelProps[] = [
  {
    title: "النموذج الرئيسي ثلاثي الأبعاد · مسار الإصدار",
    live: "متزامن",
    items: [
      { icon: "layers", label: "النموذج الرئيسي ثلاثي الأبعاد", meta: "استلام ملفات Revit · CAD · IFC", state: "ok" },
      { icon: "monitor", label: "تطبيق Unreal Engine 5", meta: "دون إنترنت · 4K · 60 إطارًا في الثانية", state: "active" },
      { icon: "globe", label: "منصة WebGL", meta: "Safari · Chrome · Edge · تحميل في أقل من 3 ثوانٍ", state: "active" },
      { icon: "presentation", label: "طاولات اللمس وشاشات LED", meta: "تجهيزات الصالة معايَرة", state: "ok" },
    ],
    footer: "النسختان تُحدَّثان من نموذج واحد بعد كل تعديل في التصميم",
  },
  {
    title: "مزامنة المخزون · ربط جاهز",
    live: "أقل من 500 ملّي ثانية",
    items: [
      { icon: "database", label: "Salesforce", meta: "تدفق أحداث ثنائي الاتجاه · أقل من 500 ملّي ثانية", state: "active" },
      { icon: "database", label: "Yardi Voyager", meta: "مسار Webhook لحظي · أقل من 500 ملّي ثانية", state: "active" },
      { icon: "database", label: "SAP RE-FX", meta: "وسيط OData / RFC · أقل من 500 ملّي ثانية", state: "active" },
      { icon: "database", label: "HubSpot", meta: "REST API ثنائي الاتجاه · أقل من 500 ملّي ثانية", state: "ok" },
    ],
    footer: "استضافة داخل المملكة وفق نظام حماية البيانات الشخصية",
  },
  {
    title: "صالة المبيعات · التجهيزات",
    live: "جميع الأنظمة",
    items: [
      { icon: "presentation", label: "طاولات لمس PCAP مقاس 86 بوصة", meta: "4K UHD · لمس متعدد 40 نقطة", state: "ok" },
      { icon: "monitor", label: "شاشة Micro-LED مباشرة", meta: "1.2 مم · 1,200 شمعة/م² · 120 هرتز", state: "active" },
      { icon: "globe", label: "غرفة غامرة 270°", meta: "إسقاط مدمج ومعايَر", state: "ok" },
      { icon: "cube", label: "شاشة هولوغرام حجمية", meta: "محور العرض لكبار العملاء", state: "ok" },
      { icon: "database", label: "محطات رسومية دون إنترنت", meta: "Dual RTX 6000 Ada · قابلة للاستبدال الفوري", state: "active" },
    ],
    footer: "وصول الفريق خلال ساعتين في أيام الإطلاق · دعم قياسي خلال 4 ساعات",
  },
  {
    title: "برنامج التمكين · مسارات التدريب",
    live: "الجلسة جارية",
    items: [
      { icon: "presentation", label: "إتقان تجهيزات صالة العرض", state: "active" },
      { icon: "globe", label: "دليل العروض عن بُعد", state: "ok" },
      { icon: "map", label: "سرد قصة المخطط العام", state: "ok" },
      { icon: "users", label: "مواءمة قيادة المبيعات", state: "ok" },
    ],
    footer: "يقدّمه مدربون سعوديون بالعربية والإنجليزية",
  },
  {
    title: "غرفة عمليات الإطلاق · في الموقع",
    live: "في الموقع",
    items: [
      { icon: "building", label: "سيتي سكيب العالمي · الرياض", meta: "منصة LED · شبكة طاولات لمس · شبكة محلية خاصة", state: "active" },
      { icon: "building", label: "ريستاتكس الرياض وجدة", meta: "أجنحة تفاوض كبار العملاء جاهزة", state: "ok" },
      { icon: "presentation", label: "صالة المبيعات الرئيسية", meta: "تغطية فنية طوال يوم الإطلاق", state: "active" },
      { icon: "activity", label: "مراقبة التخصيص المتزامن", meta: "حجز الوحدة في أقل من 500 ملّي ثانية · احتياط 5G مزدوج", state: "ok" },
    ],
    footer: "وصول الفريق خلال ساعتين في أيام الإطلاق · انتشار في أنحاء المملكة",
  },
  {
    title: "دورة حياة المشروع · استمرارية الأصول",
    live: "مستمر",
    items: [
      { icon: "layers", label: "التصميم المبدئي", meta: "استقبال CAD · BIM · GIS", state: "ok" },
      { icon: "cube", label: "التوأم الرقمي على الخارطة", meta: "تطبيق UE5 للصالة + منصة WebGL", state: "ok" },
      { icon: "eye", label: "جولات Matterport للوحدات النموذجية", meta: "مسح Pro3 LiDAR · مدمج", state: "active" },
      { icon: "building", label: "المشاريع المكتملة", meta: "جولات للتأجير وإعادة البيع", state: "idle" },
    ],
    footer: "كل أصل ثلاثي الأبعاد يغذي منصة إلكترونية واحدة",
  },
];

/** Status labels (Arabic per copy file: جاهز · مباشر · احتياطي). */
export const panelStateLabels = {
  en: { ok: "Ready", active: "Live", idle: "Standby" },
  ar: { ok: "جاهز", active: "مباشر", idle: "احتياطي" },
};

export const pillarPanel = (locale: Locale, n: number) => (locale === "ar" ? ar : en)[n - 1];
