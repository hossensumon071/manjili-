import type { IconName } from "@/components/ui/Icon";
import { pillars, routes } from "@/content/site";

// Source: 02_Page_02_Solutions_Hub.md
export const solutions = {
  meta: {
    title: "Solutions — Full-Lifecycle Off-Plan Sales",
    description:
      "Integrated execution across the 6-Pillar Sales Infrastructure: single-point accountability from pre-launch marketing to 100% sell-out under one Master Service Agreement.",
  },
  hero: {
    eyebrow: "Full-Lifecycle Sales Partner",
    title: "Accelerate Full-Lifecycle Off-Plan Sales",
    subheader:
      "Software, renders, and physical displays do not sell off-plan developments on their own. Integrated execution across the entire sales lifecycle drives rapid absorption. We deliver direct, single-point accountability from pre-launch marketing to 100% sell-out.",
    primary: { label: "Deploy Sales Engine", href: routes.contact },
    secondary: { label: "Explore 6 Pillars", href: "#pillars" },
    status: ["Single Counterparty SLA", "100% Sell-Out Accountability"],
  },
  thesis: {
    eyebrow: "Single Accountability",
    title: "Unified Counterparty Integrity Until Total Sell-Out",
    body: "Multi-vendor procurement divides accountability between 3D software studios, AV hardware integrators, and sales trainers. Manzili unifies software, showroom hardware, and frontline negotiation SOPs under one Master Service Agreement, guaranteeing zero commercial risk for the CCO.",
    metric: "100% Project Sell-Out",
    metricContext:
      "Single counterparty accountability from initial commercial launch through final unit handover.",
    // Visual comparison: what the CCO manages before vs. with Manzili
    before: ["3D software studio", "AV hardware integrator", "Sales training firm", "Launch event contractor"],
    after: "Manzili · one Master Service Agreement",
  },
  pillars: {
    eyebrow: "The 6-Pillar Infrastructure",
    title: "The Integrated Off-Plan Sales Infrastructure",
    items: [
      {
        title: "Digital Twin & WebGL Launch",
        body: "Real-time 3D web runtimes engineered for digital portals and sales galleries, ready for immediate commercial deployment the moment a project is Wafi-approved to sell.",
        metric: "Immediate Launch Ready",
        cta: "Explore Digital Twin Engine",
      },
      {
        title: "CRM & Inventory Integration",
        body: "Direct two-way integration with Salesforce, Yardi, and SAP to track real-time inventory allocation, buyer intent signals, and pipeline velocity.",
        metric: "Real-Time Inventory Sync",
        cta: "Explore Inventory Sync",
      },
      {
        title: "Sales Center Hardware",
        body: "Turnkey procurement and staging of touch tables, LED walls, immersive rooms, and hologram displays under one Master Service Agreement.",
        metric: "Turnkey Showroom Staging",
        cta: "Explore Showroom Hardware",
      },
      {
        title: "Saudi-Led Sales Enablement",
        body: "In-person and online coaching partnering with sales directors on showroom hardware mastery, remote showcase SOPs, and structured project storytelling.",
        metric: "Saudi National Trainers",
        cta: "Explore Sales Enablement",
      },
      {
        title: "VIP Launch Command",
        body: "On-site technical engineering during Cityscape, Restatex, and private developer galas to guarantee zero system downtime and flawless execution.",
        metric: "Zero System Downtime",
        cta: "Explore Launch Command",
      },
      {
        title: "Full Lifecycle Support",
        body: "Supporting developers from concept modeling to Matterport 3D virtual tours of model units and ready-built assets, integrated into your central web platform.",
        metric: "Pre-Launch to Handover",
        cta: "Explore Lifecycle Support",
      },
    ].map((item, i) => ({ ...item, index: pillars[i].index, href: pillars[i].href, icon: pillars[i].icon as IconName })),
  },
  comparison: {
    eyebrow: "Commercial Structure",
    title: "Fragmented Vendors vs. Full-Lifecycle Accountability",
    columns: ["Operational Parameter", "Legacy Fragmented Vendors", "Manzili Full-Lifecycle Execution"],
    rows: [
      ["Vendor Count", "3 to 5 isolated vendors (3D studio, AV integrator, training firm)", "Single counterparty under one Master Service Agreement"],
      ["Floor Accountability", "Cross-vendor blame between software code and GPU hardware", "Total single-point accountability for software and hardware"],
      ["Sales Readiness", "Software delivered without staff behavioral conditioning", "Frontline spatial negotiation SOPs trained by Saudi nationals"],
      ["Launch Events", "Remote email ticket support during Cityscape/Restatex", "Dedicated on-site technical command team with 100% uptime SLA"],
      ["Lifecycle Horizon", "Contract ends at render delivery / sign-off", "Dedicated partnership through 100% project sell-out"],
    ],
  },
  faq: {
    eyebrow: "Operational FAQ",
    headline: "Frequently Answered Governance Questions",
    items: [
      {
        q: "At what development stage does Manzili deploy with developers?",
        a: "We integrate with developer teams once a project is Wafi-approved to sell. From that milestone through to complete project sell-out, we take direct, single-point accountability for software runtimes, showroom hardware, and agent enablement.",
      },
      {
        q: "Who manages sales gallery hardware staging and maintenance?",
        a: "Manzili takes full technical and operational responsibility for sales center hardware. We specify, procure, install, and manage all displays and kiosks under a single SLA with guaranteed 4-hour on-site dispatch in Riyadh.",
      },
      {
        q: "How does on-site launch support operate during Cityscape?",
        a: "Our VIP Launch Command deploys senior systems engineers directly to your exhibition pavilion or launch venue. We monitor network load, run redundant hardware failovers, and guarantee zero presentation crashes during VIP walkthroughs.",
      },
      {
        q: "Can Manzili connect with our existing CRM and ERP systems?",
        a: "Yes. Our platform connects via direct API with Salesforce, Yardi, Microsoft Dynamics, and SAP. Inventory status, reservations, and lead interactions update in real time across digital twin viewports and sales agent tablets.",
      },
    ],
  },
  conversion: {
    headline: "Deploy Your Full-Lifecycle Sales Infrastructure",
    body: "Eliminate vendor fragmentation and secure deterministic off-plan absorption across your master development portfolio.",
    primary: { label: "Book Executive Briefing", href: routes.contact },
    trust: ["KSA Master Development SLAs", "Riyadh On-Site Support"],
  },
};
