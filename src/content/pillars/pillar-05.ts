import type { PillarPageData } from "./types";

// Source: 08_Pillar_05_VIP_Launch.md
export const pillar05: PillarPageData = {
  href: "/pillars/vip-launch-command",
  meta: {
    title: "Pillar 05: VIP Launch Command",
    description:
      "A Riyadh-based technical command team deploying Kingdom-wide across Cityscape, Restatex, sales galleries and boardrooms for zero launch-day downtime.",
  },
  hero: {
    crumb: "Pillar 05: VIP Launch Command",
    eyebrow: "Pillar 05 • Launch Command",
    title: "Protect High-Stakes Launch Day Revenue",
    subheader:
      "Stationed in Riyadh, our technical command team deploys Kingdom-wide—managing real-time inventory allocation, failover infrastructure, and VIP presentations at major property exhibitions, corporate offices, and flagship sales centers.",
    primary: { label: "Deploy Launch Command", href: "/contact" },
    secondary: { label: "Inspect Event Operations", href: "#architecture" },
    status: ["Riyadh Command Team", "Cityscape Global", "Restatex", "Sales Centers Across KSA"],
    panel: {
      title: "Launch war room · Riyadh command",
      live: "On site",
      items: [
        { icon: "building", label: "Cityscape Global · Riyadh", meta: "LED stage · touch table network · private LAN", state: "active" },
        { icon: "building", label: "Restatex Riyadh & Jeddah", meta: "VIP negotiation suites staged", state: "ok" },
        { icon: "presentation", label: "Flagship sales gallery", meta: "Technician coverage all launch day", state: "active" },
        { icon: "activity", label: "Allocation concurrency watch", meta: "< 500ms unit lock · dual 5G failover", state: "ok" },
      ],
      footer: "2-hour Riyadh dispatch · Kingdom-wide deployment",
    },
  },
  architecture: {
    eyebrow: "Field Operations",
    title: "Kingdom-Wide Launch Execution From Our Riyadh Headquarters",
    lead: "Day-one off-plan launches compress months of marketing into hours of intense VIP demand. Manzili embeds on-site command engineers across your sales footprint—eliminating system downtime, managing unit allocation surges, and supporting high-value negotiations.",
    features: [
      {
        tag: "Real Estate Expos",
        title: "Major Property Exhibition Operations",
        body: "Turnkey on-site deployment at premier exhibitions including Cityscape Global in Riyadh, Restatex Riyadh, Restatex Jeddah, and Cityscape Jeddah. Our Riyadh team stages multi-screen LED walls, touch table networks, private VIP negotiation suites, and dedicated private networks within crowded exhibition halls.",
        bullets: [
          { title: "Cityscape & Restatex Staging", body: "Proven execution at KSA’s largest expos" },
          { title: "Private VIP Negotiation Suites", body: "Dedicated hardware for high-value contracts" },
          { title: "Independent Network Failover", body: "Zero reliance on public event Wi-Fi" },
        ],
      },
      {
        tag: "Permanent Venues",
        title: "Headquarters & Sales Center Staging",
        body: "On-site technical management inside developer executive boardrooms, corporate headquarters, and flagship sales galleries. Our specialists supervise operations side-by-side with commercial leadership, ensuring uninterrupted touch table uptime and live synchronization between headquarters suites and regional sales floors.",
        bullets: [
          { title: "Boardroom VIP Previews", body: "Executive presentations for institutional investors" },
          { title: "Flagship Gallery Supervision", body: "Real-time technician coverage throughout launch day" },
          { title: "Calibrated Multi-Zone Displays", body: "Synchronized content across presentation zones" },
        ],
      },
      {
        tag: "Surge Governance",
        title: "Real-Time Launch War Room",
        body: "Dedicated technical war room monitoring live unit allocation concurrency, sub-500ms database sync, and sales floor traffic telemetry. Equipped with hot-standby hardware rigs and dual-carrier cellular backup, the command team preempts technical bottlenecks instantly before they reach the negotiation table.",
        bullets: [
          { title: "Live Concurrency Watch", body: "Prevents reservation collisions during traffic spikes" },
          { title: "Dual-Carrier Auto-Failover", body: "Satellite and 5G backup guarantee connectivity" },
          { title: "On-Site Rapid Spares", body: "Immediate component swap within minutes" },
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Commercial Proof",
    title: "How On-Site Launch Command Protects Off-Plan Velocity",
    items: [
      {
        metric: "100% Floor Availability",
        title: "Zero Launch-Day Downtime",
        body: "Dual-redundant hardware staging and dedicated on-site technicians ensure presentation screens, touch tables, and reservation systems operate without a single second of interruption.",
      },
      {
        metric: "<500ms Allocation Lock",
        title: "Instant Surge Absorption",
        body: "High-throughput concurrency architecture processes simultaneous VIP reservation commitments effortlessly, eliminating unit double-booking across exhibition booths and remote channels.",
      },
      {
        metric: "2-Hour Riyadh Dispatch",
        title: "Rapid Mobilization SLA",
        body: "Headquartered in the AlRayyan District in Riyadh (14212), our engineering specialists mobilize across Riyadh within 2 hours and deploy Kingdom-wide across Jeddah, Khobar, and holy city developments.",
      },
    ],
  },
  matrix: {
    eyebrow: "Deployment Matrix",
    title: "Kingdom-Wide Event And Venue Command Footprint",
    lead: "Our Riyadh operations center coordinates full technical logistics, hardware staging, and war room monitoring across every major real estate venue in the Kingdom.",
    columns: ["Deployment Environment", "Target Venues & Events", "Technical Command Footprint", "Operational Output"],
    rows: [
      ["Major Property Expos", "Cityscape Global (Riyadh), Restatex Riyadh & Jeddah", "Multi-touch tables, fine-pitch LED stages, isolated Wi-Fi", "High-density public surge management"],
      ["Flagship Sales Centers", "Permanent Developer Galleries across KSA", "Showroom touch tables, local GPU workstations, live CRM link", "Uninterrupted daily launch execution"],
      ["Developer Headquarters", "Executive Boardrooms & Private Suites", "Rec.709 OLED displays, low-latency co-browsing rigs", "Institutional & UHNW negotiations"],
      ["VIP Pop-Up Pavilions", "Luxury Hotel Galas (Ritz-Carlton, Four Seasons)", "Rapid-deploy mobile presentation stages, LTE/5G dual uplinks", "Exclusive single-evening sell-outs"],
    ],
  },
  faq: {
    eyebrow: "Command FAQ",
    headline: "VIP Launch Command Operational Questions",
    items: [
      {
        q: "Where is the Manzili launch command team stationed?",
        a: "Our technical command headquarters is based in the AlRayyan District in Riyadh (14212). From this central hub, our bilingual Saudi engineers and field technicians deploy Kingdom-wide, providing rapid dispatch across Riyadh, Jeddah, Makkah, Madinah, and the Eastern Province.",
      },
      {
        q: "What real estate exhibitions does Manzili support in KSA?",
        a: "We manage technical execution at all leading Saudi property events, including Cityscape Global at Riyadh Exhibition & Convention Center, Restatex Riyadh, Restatex Jeddah, and Cityscape Jeddah, as well as private developer launch galas at premier venues.",
      },
      {
        q: "How do you protect connectivity during congested public exhibitions?",
        a: "We never rely on public exhibition Wi-Fi networks. Manzili deploys private local area networks with dual-bonded 5G uplinks and localized offline Unreal Engine 5 workstations, ensuring presentations and unit reservations proceed uninterrupted even during severe hall-wide network outages.",
      },
    ],
  },
  nav: { eyebrow: "Infrastructure Navigation", ctaLabel: "View Full 6-Pillar Infrastructure" },
  conversion: {
    headline: "Secure Your Next Off-Plan Launch Event",
    body: "Deploy our Riyadh-based command team across Saudi exhibitions, sales galleries, and corporate headquarters for zero-risk launch execution.",
    primary: { label: "Reserve Launch Command", href: "/contact" },
    trust: ["Riyadh Headquartered", "Cityscape & Restatex Proven"],
  },
};
