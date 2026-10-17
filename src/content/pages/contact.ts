// Source: 12_Page_06_Contact_Tender.md
export const contactPage = {
  meta: {
    title: "Enterprise Partnership & RFP Scoping",
    description:
      "Qualification intake for institutional Saudi developers and large-scale masterplans. Submissions are reviewed by our Riyadh commercial partnership directors.",
  },
  hero: {
    eyebrow: "Enterprise Qualification Gateway",
    title: "Request Enterprise Partnership & RFP Scoping",
    subheader:
      "Manzili deploys dedicated enterprise sales engines exclusively for institutional Saudi developers and large-scale masterplans. Complete the qualification intake below to evaluate portfolio alignment and initiate technical scoping.",
    criteria: [
      "300+ Residential Units or >50,000 sqm Commercial GFA",
      "Wafi-Approved or In-Progress",
      "Direct Developer Entity",
    ],
  },
  form: {
    title: "Masterplan Portfolio Qualification Intake",
    description:
      "All submissions are reviewed directly by our commercial partnership directors in Riyadh. Inquiries with verified project scopes receive a formal technical scoping memorandum within 2 operational business days.",
    submit: "Submit Enterprise RFP",
    trust: ["Direct Executive Review", "Verified Domains Only"],
    roles: [
      "CCO / Chief Commercial Officer",
      "CDO / Chief Development Officer",
      "CEO / Managing Director",
      "Head of Sales & Marketing",
      "VP / Director of Procurement",
      "Development Director",
    ],
    locations: [
      "Riyadh Province",
      "Makkah Province (Jeddah / Holy Cities)",
      "Eastern Province (Khobar / Dammam)",
      "Madinah Province",
      "Red Sea Coast / Western Region",
      "Other Regional KSA Hub",
    ],
    scales: [
      "Tier 1: Master Planned Community (>2,500 Units / Multi-Phase)",
      "Tier 2: Large-Scale Masterplan (1,000 – 2,500 Units)",
      "Tier 3: Medium-Scale Development (300 – 1,000 Units)",
      "Commercial / Mixed-Use High-Rise (>50,000 sqm GFA)",
      "Single-Asset Boutique Luxury (<300 Units) [Requires Executive Review]",
    ],
    typologies: [
      "Off-Plan Residential Villas",
      "Luxury Apartments / Branded Residences",
      "Commercial Office Towers",
      "Retail & Entertainment Districts",
      "Mixed-Use Masterplan",
    ],
    wafi: [
      "Wafi License Fully Approved (Ready for Market Launch)",
      "Wafi License Application Under Review (Expected within 90 Days)",
      "Architectural / BIM Design Phase (Targeting Wafi in >90 Days)",
      "Ready-Built / Handover Phase (Completed Assets Only)",
    ],
    launch: [
      "Immediate Launch (Next 30–60 Days)",
      "Upcoming Exhibition (Cityscape Global / Restatex Launch)",
      "Q1/Q2 Upcoming Fiscal Year",
      "Mid-to-Long Term Planning (>6 Months)",
    ],
    staging: [
      "Permanent Sales Gallery Under Construction",
      "Operational Sales Center (Seeking Hardware & Software Upgrade)",
      "Mobile Exhibition Pavilions Only",
      "Purely Digital / Remote Sales Channels",
    ],
    pillars: [
      "Pillar 01: Digital Twin & WebGL Platform (Offline UE5 + Mobile Web)",
      "Pillar 02: CRM & Inventory Integration (Yardi, Salesforce, SAP)",
      "Pillar 03: Sales Center Hardware Procurement (Touch Tables, LED Walls)",
      "Pillar 04: Saudi Sales Team Enablement (In-Person SOP Coaching)",
      "Pillar 05: VIP Launch Command (On-Site Event & War Room Ops)",
      "Pillar 06: Full Lifecycle Support (Matterport Model Unit 3D Scans)",
      "Flagship Product: Connected Sales Environment (CSE Digital Transactions)",
    ],
  },
  protocols: {
    eyebrow: "Engagement Protocols",
    title: "Our Counterparty Engagement Process",
    steps: [
      { title: "Portfolio & Domain Audit", body: "Submissions are validated against Saudi real estate commercial registries and corporate domain credentials to confirm legitimate developer authority." },
      { title: "Technical Scoping Session", body: "Qualified developers receive a structured 45-minute technical briefing with our Riyadh solutions director to inspect BIM files and establish hardware requirements." },
      { title: "Enterprise Scope & MSA SLA", body: "We draft a comprehensive commercial proposal and Master Service Agreement establishing single-source accountability for hardware, runtimes, and launch command." },
    ],
  },
  office: {
    eyebrow: "Riyadh Headquarters",
    title: "In-Person Executive Consultations In Riyadh",
    hours: "Sunday – Thursday, 09:00 – 18:00 (Arabia Standard Time)",
    dispatch:
      "Central Riyadh Hub with 2-hour field dispatch across Riyadh sales galleries and Kingdom-wide event deployment.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=AlRayyan+District+Riyadh+14212",
  },
};

/** Free webmail domains rejected by the intake (shared by client + server validation). */
export const BLOCKED_EMAIL_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
  "yandex.com",
];
