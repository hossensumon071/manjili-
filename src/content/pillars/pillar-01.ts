import type { PillarPageData } from "./types";

// Source: 04_Pillar_01_Digital_Twin.md
export const pillar01: PillarPageData = {
  href: "/pillars/digital-twin-webgl",
  meta: {
    title: "Pillar 01: Digital Twin & Web Platform",
    description:
      "Dual sales runtimes from one core 3D master model: an offline Unreal Engine 5 application for sales galleries and a lightweight mobile WebGL platform.",
  },
  hero: {
    crumb: "Pillar 01: Digital Twin & Web Platform",
    eyebrow: "Pillar 01 • Dual Runtimes",
    title: "Eliminate Off-Plan Spatial Hesitation",
    subheader:
      "From a single core 3D master model, Manzili deploys dual sales runtimes: a high-performance Unreal Engine 5 application for offline sales gallery presentations, and a lightweight web platform engineered for instant mobile contract execution.",
    primary: { label: "Deploy Dual Runtimes", href: "/contact" },
    secondary: { label: "Inspect Dual Architecture", href: "#architecture" },
    status: ["Single 3D Master Model", "Offline UE5 App", "Mobile Web Platform"],
    panel: {
      title: "Core 3D Master Model · Build pipeline",
      live: "Synced",
      items: [
        { icon: "layers", label: "Core 3D master model", meta: "Revit · CAD · IFC ingested", state: "ok" },
        { icon: "monitor", label: "Unreal Engine 5 application", meta: "Offline · 4K · 60 FPS", state: "active" },
        { icon: "globe", label: "WebGL web platform", meta: "Safari · Chrome · Edge · < 3s load", state: "active" },
        { icon: "presentation", label: "Touch tables & LED walls", meta: "Gallery hardware calibrated", state: "ok" },
      ],
      footer: "Both runtimes recompile from one source on every architectural revision",
    },
  },
  architecture: {
    eyebrow: "Runtime Architecture",
    title: "One Core 3D Model. Two Specialized Sales Runtimes.",
    lead: "Master developers waste capital managing fragmented visual files across agencies. Manzili builds one core 3D spatial model from your architectural BIM/CAD, then derives two dedicated deployment engines to cover the entire buyer journey.",
    features: [
      {
        tag: "Sales Gallery & VIP Suites",
        title: "Enterprise Unreal Engine 5 Application",
        subtitle: "Native Offline & Online Local Staging",
        body: "Engineered specifically for sales gallery touch tables, high-resolution LED walls, and VIP negotiation suites. The app runs completely offline, eliminating internet failure risk during high-stakes presentations. Powered by Unreal Engine 5, it renders native 4K resolution at 60 FPS with uncompressed architectural fidelity and precise dynamic solar angles.",
        bullets: [
          { title: "Zero Network Risk", body: "Fully functional offline local workstation execution" },
          { title: "Maximum Spatial Rigor", body: "Lumen daylight calculation and Nanite geometry" },
          { title: "Frontline Hardware Staging", body: "Calibrated for touch tables and LED walls" },
        ],
      },
      {
        tag: "Mobile & Remote Contract Execution",
        title: "Lightweight WebGL Web Platform",
        subtitle: "Mobile-Optimized Browser Runtime",
        body: "Derived directly from the core 3D model through automated geometry compression, our web platform delivers instant 3D exploration directly in standard mobile and desktop browsers. Prospective buyers explore masterplans and select units over standard 4G/5G connections without app downloads or software installation.",
        bullets: [
          { title: "Zero App Friction", body: "Runs instantly inside Safari, Chrome, and Edge" },
          { title: "Mobile-First Optimization", body: "Sub-3-second load over standard mobile networks" },
          { title: "Global VIP Reach", body: "Enables remote co-browsing and unit reservations" },
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Developer Advantage",
    title: "How Dual Runtimes Protect Master Developer Margins",
    items: [
      {
        metric: "100% Floor Uptime",
        title: "Zero Sales Presentation Crashes",
        body: "Running the offline UE5 application directly on local showroom hardware guarantees that showroom Wi-Fi dropouts or network throttling will never stall a VIP negotiation meeting.",
      },
      {
        metric: "Zero Asset Duplication",
        title: "Single-Source Asset Truth",
        body: "Because both engines derive from one core 3D model, unit typologies, pricing changes, and architectural updates stay unified across showroom displays and mobile web portals.",
      },
      {
        metric: "40% Shorter Cycles",
        title: "Omnichannel Capital Capture",
        body: "Capture high-intent leads remotely via mobile WebGL, then transition purchasers into the gallery UE5 spatial presentation environment to secure reservation deposits.",
      },
    ],
  },
  pipeline: {
    eyebrow: "The Build Pipeline",
    title: "Deriving Dual Runtimes from Core Architectural BIM",
    steps: [
      {
        title: "Core 3D Master Build",
        body: "We ingest developer Revit, CAD, and IFC files, constructing a unified high-precision 3D master model with exact structural hierarchies and coordinate spatial data.",
      },
      {
        title: "Offline UE5 App Packaging",
        body: "The master model compiles into a dedicated Unreal Engine 5 executable configured for local showroom touch tables, LED walls, and VIP sales presentation machines.",
      },
      {
        title: "WebGL Mobile Optimization",
        body: "Automated LOD pipelines compress geometry and compile custom shaders for instant browser streaming, deploying once the development is Wafi-approved to sell.",
      },
    ],
  },
  faq: {
    eyebrow: "Technical FAQ",
    headline: "Dual Deployment Technical Questions",
    items: [
      {
        q: "Why deploy both an offline UE5 app and web platform?",
        a: "High-stakes sales gallery negotiations require maximum graphical power and zero reliance on internet connectivity, which the offline UE5 application delivers. Conversely, broad buyer outreach and remote mobile exploration require zero-install web access. Combining both provides total commercial coverage.",
      },
      {
        q: "What happens to the offline UE5 app if showroom Wi-Fi disconnects?",
        a: "The UE5 presentation application operates entirely standalone on local workstation hardware. Presentations, touch controls, and 4K navigation continue uninterrupted. Live inventory updates queue locally and synchronize immediately once connectivity resumes.",
      },
      {
        q: "How is the web version kept consistent with the UE5 model?",
        a: "Both outputs originate from the singular core 3D master model. When architectural revisions or phase releases occur, our automated pipeline updates the core asset and simultaneously recompiles both the UE5 application and the WebGL runtime.",
      },
    ],
  },
  nav: { eyebrow: "Next Pillar", ctaLabel: "Return to 6-Pillar Overview" },
  conversion: {
    headline: "Deploy Dual Spatial Runtimes For Your Launch",
    body: "Equip your sales center with offline UE5 presentation resilience and engage global buyers with lightweight mobile WebGL.",
    primary: { label: "Request Dual Demo", href: "/contact" },
    trust: ["Single Master 3D Model", "Zero Presentation Failure"],
  },
};
