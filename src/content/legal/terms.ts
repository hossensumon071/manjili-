import type { LegalDoc } from "./types";

// Source: 14_Legal_02_Terms_of_Service.md — supports **bold** and [label](href)
export const terms: LegalDoc = {
  slug: "terms",
  meta: {
    title: "Terms of Enterprise Service",
    description: "Terms governing institutional access to Manzili’s spatial sales engines, digital twins, Connected Sales Environment and enterprise web platforms.",
  },
  eyebrow: "Legal • Enterprise Terms",
  title: "Terms of Enterprise Service & Rights Disclaimer",
  intro:
    "The terms governing institutional access to our spatial sales engines, digital twins, Connected Sales Environment, hardware integrations and enterprise web platforms.",
  facts: [
    { label: "Effective Date", value: "January 1, 2026" },
    { label: "Operating Entity", value: "IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)" },
    { label: "Corporate Office", value: "AlRayyan District, Riyadh 14212, Kingdom of Saudi Arabia" },
    { label: "Regulatory Alignment", value: "REGA, Wafi Off-Plan Sales Regulations, Saudi PDPL" },
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Enterprise Authority & Legal Acceptance",
      blocks: [
        { p: "These Terms of Enterprise Service (\"Terms\") govern institutional access to, and utilization of, the proprietary spatial sales engines, digital twin frameworks, Connected Sales Environment (CSE), interactive 360 masterplans, sales center hardware software integrations, and enterprise web platforms owned and operated by **IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)** (\"Manzili\", \"we\", \"us\", or \"our\")." },
        { p: "By accessing this website, submitting an enterprise RFP, accessing our connected sales environments, or licensing our spatial visualization platforms, you (\"Enterprise Client\", \"Developer\", \"Authorized Counterparty\", or \"User\") agree unconditionally to be bound by these Terms and all applicable laws and regulations of the Kingdom of Saudi Arabia." },
        { p: "If you represent an institutional real estate developer, asset management firm, or commercial enterprise, you warrant that you possess the requisite corporate authority to bind your organization to these Terms." },
      ],
    },
    {
      id: "scope",
      title: "2. Scope of Enterprise Services & Platform Boundaries",
      blocks: [
        { p: "Manzili provides enterprise sales enablement, digital twin visualization, hardware-software integration, and transactional workflow infrastructure tailored specifically for off-plan and completed real estate portfolios within Saudi Arabia." },
        {
          ol: [
            "**Enterprise Infrastructure Partner:** Manzili operates as an enterprise technology and implementation counterparty. Unless expressly stipulated under a separate bilateral joint-venture agreement, Manzili does not act as a licensed real estate brokerage, financial escrow agent, or off-plan underwriting entity.",
            "**Deterministic Architecture:** Manzili provides WebGL digital twins, synchronized CRM middleware, AV showroom integrations, VIP launch command execution, and Matterport lifecycle capture. All deployments are subject to formal statements of work (SOW) and enterprise service level agreements (SLAs).",
          ],
        },
      ],
    },
    {
      id: "ip",
      title: "3. Proprietary Intellectual Property & Protected Assets",
      blocks: [
        {
          ol: [
            "**Ownership of Core IP:** Manzili retains exclusive ownership, title, copyright, and global intellectual property rights in and to all proprietary codebases, WebGL rendering pipelines, spatial telemetry algorithms, hardware controller interfaces, UI/UX frameworks, graphics, trademarks, logos, and original documentation displayed on this platform.",
            "**Protected Trademarks:** \"Manzili\", \"Manzili CSE\", \"Connected Sales Environment\", the Manzili logomark, and associated system designations are legally protected trademarks of IT Home Solutions Company (CR# 1010797640). No entity or individual may display, replicate, adapt, or utilize these identifiers without prior written corporate authorization.",
            "**Client Asset Ownership:** Enterprise Developers retain full title and intellectual property rights over their respective architectural CAD/BIM files, masterplan engineering drafts, brand assets, and proprietary unit pricing matrices provided to Manzili for digital twin ingestion.",
          ],
        },
      ],
    },
    {
      id: "disclaimer",
      title: "4. Off-Plan Visualization & Architectural Disclaimer",
      blocks: [
        {
          ol: [
            "**Representational Fidelity:** The 3D digital twins, interactive masterplans, lighting simulations, and virtual tours engineered by Manzili are high-fidelity architectural visualizations designed to communicate spatial layout, unit orientation, and masterplan scale.",
            "**Engineering & Construction Tolerances:** While Manzili models directly from verified BIM/CAD files, physical construction is subject to civil engineering tolerances, municipal approvals, materials substitution, and contractor execution. Final unit dimensions, finishes, and spatial configurations are governed strictly by the developer's registered Wafi Off-Plan Sales and Purchase Agreement (SPA).",
            "**Non-Endorsement of Non-Original Content:** Any third-party market data, infrastructure timelines, or external municipal plans referenced on this platform are provided for contextual dissemination only. Manzili disclaims liability for inaccuracies in developer-supplied data or government infrastructure planning adjustments.",
          ],
        },
      ],
    },
    {
      id: "transactions",
      title: "5. Enterprise Transactions & REGA / Wafi Compliance",
      blocks: [
        {
          ol: [
            "**Regulatory Alignment:** When deployed within the Manzili Connected Sales Environment (CSE), digital reservation workflows, Nafath identity verification, milestone payment schedules, and SPA auto-generation are engineered to align with REGA directives and Wafi off-plan regulatory requirements.",
            "**Developer Commercial Responsibility:** The developer remains exclusively responsible for the legal validity of its Wafi off-plan license, the accuracy of its project bank escrow accounts (pursuant to Royal Decree No. M/36), and the commercial fulfillment of customer reservations locked through the platform.",
          ],
        },
      ],
    },
    {
      id: "rfp",
      title: "6. Corporate Pre-Qualification & RFP Submission Rules",
      blocks: [
        {
          ol: [
            "**Corporate Domain Requirement:** Submissions made via the Enterprise RFP and Portfolio Scoping portal require verifiable corporate email credentials. Manzili reserves the right to reject submissions originated from free, consumer webmail domains (@gmail, @yahoo, @hotmail) without notice.",
            "**Confidentiality of RFPs:** All architectural briefs, unit inventories, and commercial timelines submitted through our enterprise intake firewall are treated as strictly confidential and safeguarded under Saudi PDPL data handling standards.",
          ],
        },
      ],
    },
    {
      id: "liability",
      title: "7. Limitation of Enterprise Liability",
      blocks: [
        {
          ol: [
            "To the maximum extent permitted under Saudi law, Manzili shall not be liable for any indirect, incidental, consequential, or special damages—including loss of commercial revenue, anticipated sales absorption velocity, or event interruption—arising from the use or inability to use our platform or exhibition hardware.",
            "Hardware deployed under Pillar 03 (Commercial Sales Center AV) and Pillar 05 (VIP Launch Command) operates under dedicated enterprise SLAs. Liability for exhibition network latency or hardware downtime caused by third-party event telecom congestion or force majeure events is expressly limited to the terms of the applicable commercial contract.",
          ],
        },
      ],
    },
    {
      id: "infringement",
      title: "8. Infringement Notification & Notice Procedure",
      blocks: [
        { p: "If any intellectual property rights holder believes that content published on this website infringes upon their protected legal rights, a formal notice must be submitted to our corporate desk containing:" },
        {
          ul: [
            "Verifiable proof of ownership and legal authorization.",
            "Precise location (URL) and identification of the protected work.",
            "Full corporate contact details of the legal claimant.",
          ],
        },
        { p: "Notices must be directed in writing to: **[support@manzili.sa](mailto:support@manzili.sa)** or dispatched to our Riyadh corporate headquarters." },
      ],
    },
    {
      id: "law",
      title: "9. Governing Law & Dispute Resolution",
      blocks: [
        { p: "These Terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the **laws and commercial regulations of the Kingdom of Saudi Arabia**." },
        { p: "Any dispute, controversy, or claim arising out of or relating to these Terms shall be referred to and resolved by the competent **Commercial Courts in Riyadh, Kingdom of Saudi Arabia**." },
      ],
    },
    {
      id: "contact",
      title: "10. Corporate Legal Contact",
      blocks: [
        { p: "**IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)**" },
        {
          ul: [
            "**Corporate Office:** AlRayyan District, Riyadh 14212, Kingdom of Saudi Arabia",
            "**Enterprise Support & Legal Desk:** [support@manzili.sa](mailto:support@manzili.sa)",
            "**Commercial Partnerships:** [sales@manzili.sa](mailto:sales@manzili.sa)",
            "**Mobile / Direct Contact:** [+966 53-484-4986](tel:+966534844986)",
          ],
        },
      ],
    },
  ],
};
