import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "Manzili",
  legalName: "Manzili Technologies Co.",
  description:
    "Manzili equips Saudi master developers and commercial sales leadership with high-performance digital twins, integrated showroom hardware, and the REGA-compliant Connected Sales Environment (CSE).",
  url: "https://manzili.sa",
  email: { sales: "sales@manzili.sa", support: "support@manzili.sa" },
  phone: "+966 53-484-4986",
  phoneHref: "tel:+966534844986",
  address: "AlRayyan District, Riyadh 14212, Kingdom of Saudi Arabia",
  socials: [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  ] satisfies { label: string; href: string; icon: IconName }[],
};

export const routes = {
  home: "/",
  solutions: "/solutions",
  cse: "/products/connected-sales-environment",
  caseStudies: "/case-studies",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

export type Pillar = {
  index: string;
  title: string;
  menuTitle: string;
  footerTitle: string;
  body: string;
  linkLabel: string;
  href: string;
  icon: IconName;
};

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Digital Twin & Web Platform",
    menuTitle: "Interactive Digital Twins & WebGL",
    footerTitle: "Interactive Digital Twin (UE 5.4)",
    body: "Offline and online Unreal Engine 5 application for high-stakes presentations, with lightweight mobile WebGL derived from the core 3D model.",
    linkLabel: "Explore Digital Twin Engine",
    href: "/pillars/digital-twin-webgl",
    icon: "cube",
  },
  {
    index: "02",
    title: "CRM & Inventory Integration",
    menuTitle: "CRM & Real-Time Inventory Sync",
    footerTitle: "Real-Time CRM & Inventory Sync",
    body: "Direct two-way sync with Salesforce, Yardi, and SAP to track real-time unit availability, prevent collisions, and record buyer telemetry.",
    linkLabel: "Explore Inventory Sync",
    href: "/pillars/crm-inventory-integration",
    icon: "database",
  },
  {
    index: "03",
    title: "Sales Center Hardware",
    menuTitle: "Showroom Hardware & Interactive Tables",
    footerTitle: "Sales Center AV Hardware",
    body: "Turnkey procurement and staging of touch tables, micro-LED walls, immersive rooms, and hologram displays (for sale only, not for rent).",
    linkLabel: "Explore Showroom Hardware",
    href: "/pillars/sales-center-hardware",
    icon: "monitor",
  },
  {
    index: "04",
    title: "Saudi-Led Sales Enablement",
    menuTitle: "Saudi Commercial Sales Enablement",
    footerTitle: "Frontline Saudi Sales Enablement",
    body: "In-person and online coaching partnering with sales directors on hardware mastery, remote showcase SOPs, and project storytelling.",
    linkLabel: "Explore Sales Enablement",
    href: "/pillars/saudi-sales-enablement",
    icon: "presentation",
  },
  {
    index: "05",
    title: "VIP Launch Command",
    menuTitle: "VIP Launch Command & Demand Surges",
    footerTitle: "VIP Launch Command Operations",
    body: "Riyadh-based command team deploying Kingdom-wide across Cityscape Global, Restatex, corporate boardrooms, and sales centers for zero downtime.",
    linkLabel: "Explore Launch Command",
    href: "/pillars/vip-launch-command",
    icon: "rocket",
  },
  {
    index: "06",
    title: "Full Lifecycle Support",
    menuTitle: "Full-Lifecycle Support & Handover",
    footerTitle: "Multi-Year Lifecycle & Matterport",
    body: "Supporting developers from concept modeling to Matterport 3D virtual tours of model units and ready-built completed assets.",
    linkLabel: "Explore Lifecycle Support",
    href: "/pillars/full-lifecycle-support",
    icon: "lifebuoy",
  },
];

export type NavItem = { label: string; href: string; pillarsMenu?: boolean };

export const nav: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "6-Pillar Architecture", href: routes.solutions, pillarsMenu: true },
  { label: "Platform (CSE)", href: routes.cse },
  { label: "Case Studies", href: routes.caseStudies },
  { label: "Tender & RFP Scoping", href: routes.contact },
];

export const footer = {
  blurb:
    "Integrated enterprise sales engine driving deterministic off-plan absorption for KSA master developers.",
  sovereignty:
    "Saudi PDPL Compliant • In-Kingdom Cloud Hosting • Single Master Service Agreement (MSA)",
  procurement: [
    { label: "Connected Sales Environment (CSE)", href: routes.cse },
    { label: "Single-Source Counterparty SLAs", href: routes.solutions },
    { label: "Case Studies & Absorption Metrics", href: routes.caseStudies },
    { label: "PDPL & In-Kingdom Sovereignty", href: routes.privacy },
    { label: "Tender & RFP Qualification Intake", href: routes.contact },
  ],
};
