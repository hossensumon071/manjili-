# Manzili Website — English Copy

**Site:** staging `https://manjili-sa.vercel.app/` → production `https://manzili.sa`
**Covers:** sitewide components + 23 pages (Home, Platform, 6 pillars, Case Studies index, 10 case studies, Contact, Privacy, Terms, 404)
**Arabic copy:** `Manzili_Website_Copy_AR.md`, with the same pages and section numbers under `/ar`

## How to Use This File

- Every string in `code format` is final copy. Replace the matching text on staging with it, exactly as written.
- **Build note** = an implementation instruction for that section.
- `→` shows a link target. `#anchor` means a scroll link on the same page.
- The navbar, footer, CTA banner, FAQ module and UI strings are built once (Part 1) and reused on the pages that list them.

## Before Launch: Build Checklist

1. **Routes:** rename `/products/connected-sales-environment` → `/platform-cse` and `/contact` → `/contact-us`, with 301 redirects. 301-redirect `/solutions` → `/#pillars` and remove the page.
2. **Canonical tags:** set `https://manzili.sa/[slug]` on every page, plus a matching `og:url`. Remove every `manzili360.com` reference.
3. **Open Graph:** set `og:title`/`og:description` and `twitter:title`/`twitter:description` from each page's meta. Add a 1200×630 share image.
4. **Anchors:** keep `#pillars`, `#solution`, `#architecture`, `#matrix`, `#telemetry`, `#tours` and `#intake`. Add `#case-studies` on the homepage.
5. **Components:** build the Shared CTA Banner and Shared FAQ Module once and reuse them. Each pillar page gets its own banner copy.
6. **Mobile:** add the six pillars to the mobile menu. Mobile table/card versions must use the same strings as the desktop tables.
7. **Footer:** show Manzili only. Remove Facebook, "Single-Source Counterparty SLAs" and the second trust strip. Render the year dynamically.
8. **Case studies:** remove the two extra Thee Erth cards (10 cards total) and the Thee Erth testimonial block.
9. **Contact form:** the 11 fields, 12 messages and 6 states are in Part 5. Keep the hidden spam-trap field hidden.
10. **Legal:** Privacy Policy and Terms of Service carry the effective date `October 19, 2026`. Replace the full text of both pages with Part 5.
11. **Arabic:** build the `/ar` pages from the Arabic copy file, then switch on the `العربية` toggle in the navbar (Part 1).
12. **Final check:** search the site and CMS for the strings in Part 1, "Old Wording to Remove". None of them should remain.

## Sitewide Rules

- **Pillar names (nav, cards, footer, dropdowns):** the names are fixed. The number prefix renders as `01 Digital Twin` (nav, footer) or `01 · Digital Twin` (cards, eyebrows, tiles), with no period after the number: `01 Digital Twin` · `02 CRM & Inventory Sync` · `03 Showroom Hardware` · `04 Sales Enablement` · `05 Launch Command` · `06 Lifecycle & Matterport`. Outcome H1s appear only on each pillar page (Part 3).
- **Umbrella name:** `Services` everywhere.
- **Primary CTA:** `Book Technical Scoping` → `/contact-us` on every page, except:
  - `Request a CSE Demo` (Platform hero)
  - `Plan a Similar Launch` (Case Studies hero + case-study heroes)
  - `Request Technical Scoping` (Contact H1 + submit button)
- **Routes:** `/platform-cse` and `/contact-us`. Homepage pillar anchor: `/#pillars`.
- **Standard claims (same wording wherever they appear, including mockups):** `Built for REGA and Wafi off-plan workflows` / `REGA-aligned workflows` · `timed unit holds linked to the project's Wafi escrow process` / `Timed unit hold` · `99.9% Presentation Uptime SLA` · `Sub-500 ms` / `under 500 ms` · `2-hour dispatch on launch days · 4-hour standard support SLA`
- **Contact formats:**
  - `sales@manzili.sa` → `mailto:sales@manzili.sa`
  - `support@manzili.sa` → `mailto:support@manzili.sa`
  - `+966 53 484 4986` → `tel:+966534844986`
  - `https://wa.me/966534844986`
  - `Al Rayyan District, Riyadh 14212, Saudi Arabia` → `https://share.google/dmisMPh9YQR4xVIoT`
- **Separators:** ` · ` (middle dot) in chips, strips and titles. Replace `•` and `|`.

---

# PART 1 — Sitewide Components

## COMPONENT: Sitewide Metadata

- **Location / Component:** `<head>` of every route
- **Build note:**
  - Set `og:title` and `twitter:title` = Meta Title, and `og:description` and `twitter:description` = Meta Description, on every page. Today the Open Graph tags repeat the old homepage H1.
  - Add a 1200×630 `og:image` and `twitter:image` (Manzili logo on brand background, or a hero render). `og:image:alt`: `Manzili logo on a 3D masterplan render`
  - Canonical: `https://manzili.sa/[slug]` on every page (homepage: `https://manzili.sa/`). Set `og:url` to the same value. Replace every `manzili360.com` reference.
  - Separator in titles is ` · ` (space, middle dot, space). The brand always comes last.
  - The `/solutions` route is being removed: 301-redirect `/solutions` → `/#pillars`.

| Page | Target URL Slug | Meta Title | Meta Description |
|---|---|---|---|
| Homepage | `/` | `Off-Plan Sales Infrastructure for Saudi Developers · Manzili` | `Digital twins, showroom hardware and the Connected Sales Environment, delivered and run by one Riyadh team for Saudi master developers.` |
| Platform (CSE) | `/platform-cse` | `Connected Sales Environment (CSE) · Manzili` | `One platform from 3D masterplan to Nafath verification and a generated SPA, with live inventory, payment plans, timed unit holds and buyer intent data.` |
| Pillar 01 | `/pillars/digital-twin-webgl` | `Digital Twin & Web Platform · Manzili` | `One master 3D model runs the offline Unreal Engine 5 showroom app and a mobile web platform, so buyers see the exact view before they reserve.` |
| Pillar 02 | `/pillars/crm-inventory-integration` | `Real-Time CRM & Inventory Sync · Manzili` | `Pre-built connectors for Salesforce, Yardi Voyager, SAP RE-FX and HubSpot. Unit locks in under 500 ms across every connected screen and session.` |
| Pillar 03 | `/pillars/sales-center-hardware` | `Showroom Hardware for Sales Centers · Manzili` | `Touch tables, LED walls, immersive rooms and GPU workstations under one contract. 2-hour dispatch on launch days · 4-hour standard support SLA.` |
| Pillar 04 | `/pillars/saudi-sales-enablement` | `Sales Enablement & Team Training · Manzili` | `In-person and online coaching that trains your sales team to present masterplans in 3D, run remote showcases and answer buyer questions with confidence.` |
| Pillar 05 | `/pillars/vip-launch-command` | `Launch Command for Exhibitions & Events · Manzili` | `A Riyadh-based technical team on site at Cityscape Global, RestateX, sales galleries and VIP events, with 2-hour dispatch on launch days.` |
| Pillar 06 | `/pillars/full-lifecycle-support` | `Lifecycle Support & Matterport Tours · Manzili` | `One master model updated through every phase, from concept to handover, plus Matterport tours of model units and completed projects on the same platform.` |
| Case Studies | `/case-studies` | `Case Studies · Manzili` | `How Saudi master developers used Manzili digital twins, showroom hardware and the CSE to launch off-plan projects.` |
| Thee Erth | `/case-studies/thee-erth` | `Thee Erth Case Study · Manzili` | `Erth Real Estate Development launched its 8-tower Riyadh masterplan at Cityscape Global with a Manzili 360 platform, offline failover and sales training.` |
| Masar Ma’ab | `/case-studies/masar-maab` | `Masar Ma’ab Case Study · Manzili` | `Manzili built the 3D twin, sales gallery hardware and sales training for Erth Real Estate Development's three-tower project in Makkah's Masar Destination.` |
| Dyari Signature | `/case-studies/dyari-signature` | `Dyari Signature Case Study · Manzili` | `Dyari Real Estate Development presented its 406-unit Riyadh community at RestateX with a Manzili multi-building twin, exhibition hardware and sales training.` |
| Raffles Residences Jeddah | `/case-studies/raffles-residences-jeddah` | `Raffles Residences Jeddah Case Study · Manzili` | `Remote buyers tour the built show residence at Erth Real Estate Development's 48-floor Raffles Residences on the Jeddah Corniche in interactive 3D.` |
| Alwareef | `/case-studies/nhc-alwareef` | `Alwareef Case Study · Manzili` | `Alwareef, a 12,000-unit NHC community in Southeast Jeddah, launched at RestateX with a Manzili WebGL twin, exhibition hardware and on-site support.` |
| Al-Mukiman | `/case-studies/nhc-al-mukiman` | `Al-Mukiman Case Study · Manzili` | `Families buying at Al-Mukiman, a 6,000-unit community in Madinah, explore their future homes on a Manzili 3D twin and showroom touch tables.` |
| Malfa Al-Assalah | `/case-studies/nhc-malfa-al-assalah` | `Malfa Al-Assalah Case Study · Manzili` | `Buyers at Malfa Al-Assalah in Southwest Riyadh explore each of its 633 villas plot by plot, on a Manzili 3D twin and showroom touch tables.` |
| Tabuk Hills | `/case-studies/nhc-tabuk-hills` | `Tabuk Hills Case Study · Manzili` | `Manzili had the Tabuk Hills sales center running in 48 hours, with a WebGL twin of the 2.2M+ m² masterplan and sales playbooks for 4,600+ units.` |
| Mohammed Al Habib | `/case-studies/mohammed-al-habib` | `Mohammed Al Habib Show Villas Case Study · Manzili` | `Buyers in Riyadh and Jeddah tour Mohammed Al Habib Real Estate's built show villas in 3D, without traveling between the two cities.` |
| Al Basateen Offices | `/case-studies/al-basateen-offices` | `Al Basateen Offices Case Study · Manzili` | `Interactive 3D tours of the offices, lobbies and amenities at Al Basateen Offices help leasing teams sign tenants for the 39,387 m² GLA Diriyah campus.` |
| Contact / RFP Intake | `/contact-us` | `Request Technical Scoping · Manzili` | `Tell us about your off-plan launch. A solutions lead replies within 24 hours, Sunday–Thursday. Best fit: 300+ units or 50,000+ m² commercial GFA.` |
| Privacy Policy | `/privacy` | `Privacy Policy · Manzili` | `How Manzili collects, uses, hosts and protects personal data under the Saudi Personal Data Protection Law (PDPL), and how to exercise your rights.` |
| Terms of Service | `/terms` | `Terms of Service · Manzili` | `The terms that govern use of the Manzili website, digital twins, web platforms and the Connected Sales Environment.` |
| 404 | *(any unknown route)* | `Page Not Found · Manzili` | `The page you're looking for has moved or no longer exists.` · `robots: noindex` (already set) |

---

## COMPONENT: Global Navbar

### SECTION [01]: Desktop Bar
- **Location / Component:** Sticky header, every page
- **Build note:** Remove "Overview" and "Tender & RFP Scoping", then order the items as listed. Logo `aria-label`: `Manzili home`. Keep the existing "Skip to content" link as the first focusable element.
- **Logo:** `منزلي MANZILI` → `/`
- **Nav Item 1:** `Platform (CSE)` → `/platform-cse`
- **Nav Item 2 (dropdown button):** `Services` → opens dropdown (Section 02)
- **Nav Item 3:** `Case Studies` → `/case-studies`
- **Language Toggle:** `EN` (active) · `العربية` → the matching `/ar` page
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`

### SECTION [02]: 6-Pillar Infrastructure Dropdown
- **Location / Component:** Mega-menu panel under Nav Item 2
- **Build note:**
  - Replace the current dropdown names ("Interactive Digital Twins & WebGL", "VIP Launch Command & Demand Surges", etc.).
  - Number format is `01` with no period.
  - The descriptor is a single line in smaller text under each name.
  - Replace "All solutions → /solutions" with the footer link below, since `/solutions` is being removed.
- **Cards / Sub-Elements:**
  - **Item 01:** `01 Digital Twin` · descriptor `One 3D model for showroom and web` → `/pillars/digital-twin-webgl`
  - **Item 02:** `02 CRM & Inventory Sync` · descriptor `Live unit status on every screen` → `/pillars/crm-inventory-integration`
  - **Item 03:** `03 Showroom Hardware` · descriptor `Touch tables, LED walls and workstations` → `/pillars/sales-center-hardware`
  - **Item 04:** `04 Sales Enablement` · descriptor `Train your team to sell in 3D` → `/pillars/saudi-sales-enablement`
  - **Item 05:** `05 Launch Command` · descriptor `On-site support for launch events` → `/pillars/vip-launch-command`
  - **Item 06:** `06 Lifecycle & Matterport` · descriptor `From concept design to handover` → `/pillars/full-lifecycle-support`
  - **Panel footer link:** `View All Services` → `/#pillars`

### SECTION [03]: Mobile Menu
- **Location / Component:** Full-screen menu behind the hamburger (≤ 1024 px)
- **Build note:**
  - Add the six pillars. They're missing from the mobile menu today.
  - Use an accordion for "6-Pillar Infrastructure", collapsed by default.
  - Keep the CTA pinned at the bottom of the panel.
- **Menu button `aria-label`:** `Open menu` / `Close menu` (current, keep)
- **Item 1:** `Platform (CSE)` → `/platform-cse`
- **Item 2 (accordion):** `Services` → expands to the 6 items in Section 02 (names only, no descriptors) + `View All Services` → `/#pillars`
- **Item 3:** `Case Studies` → `/case-studies`
- **Language Toggle:** `EN` · `العربية` → the matching `/ar` page
- **Primary CTA (full-width button):** `Book Technical Scoping` → `/contact-us`

---

## COMPONENT: Global Footer

### SECTION [01]: Brand Block
- **Location / Component:** Footer, left column
- **Build note:** Remove the current "IT Home Solutions Company d.b.a. Manzili (CR# 1010797640) — Integrated enterprise sales engine…" paragraph. The footer shows the brand as Manzili only, with no legal-entity line.
- **Logo:** `منزلي MANZILI` → `/`
- **Tagline (`<p>`):** `One accountable partner for off-plan sales: digital twins, showroom hardware, sales enablement and launch operations across KSA.`
- **Trust line (small caps or chips):** `Built for REGA and Wafi off-plan workflows` · `In-Kingdom hosting under Saudi PDPL` · `One Master Service Agreement`

### SECTION [02]: Column — 6-Pillar Infrastructure
- **Location / Component:** Footer, column 2
- **Column Header (`<p>` styled as label; not a heading tag):** `Services`
- **Links:**
  - `01 Digital Twin` → `/pillars/digital-twin-webgl`
  - `02 CRM & Inventory Sync` → `/pillars/crm-inventory-integration`
  - `03 Showroom Hardware` → `/pillars/sales-center-hardware`
  - `04 Sales Enablement` → `/pillars/saudi-sales-enablement`
  - `05 Launch Command` → `/pillars/vip-launch-command`
  - `06 Lifecycle & Matterport` → `/pillars/full-lifecycle-support`

### SECTION [03]: Column — For Procurement Teams
- **Location / Component:** Footer, column 3
- **Build note:** Delete `Single-Source Counterparty SLAs` → `/solutions`. Keep the old `404` link removed.
- **Column Header:** `For Procurement Teams`
- **Links:**
  - `Connected Sales Environment (CSE)` → `/platform-cse`
  - `Case Studies` → `/case-studies`
  - `Data Protection (PDPL)` → `/privacy`
  - `Technical Scoping & RFP Intake` → `/contact-us`

### SECTION [04]: Column — Contact
- **Location / Component:** Footer, column 4
- **Build note:**
  - The phone display currently uses hyphens. Change to spaces.
  - Address opens in a new tab: `target="_blank" rel="noopener"`.
  - The Riyadh office is administrative only (meetings happen at the developer's offices), so the address links to the Google Business Profile, not a street pin.
  - Use the same URL for the map button on `/contact-us`, which today runs a generic Maps search.
- **Column Header:** `Contact`
- **Links:**
  - `sales@manzili.sa` → `mailto:sales@manzili.sa`
  - `support@manzili.sa` → `mailto:support@manzili.sa`
  - `+966 53 484 4986` → `tel:+966534844986`
  - `WhatsApp: +966 53 484 4986` → `https://wa.me/966534844986`
  - `Al Rayyan District, Riyadh 14212, Saudi Arabia` → `https://share.google/dmisMPh9YQR4xVIoT`
- **Office hours (small text, `<p>`):** `Sunday–Thursday, 9:00–18:00 (Riyadh time)`

### SECTION [05]: Social Icons
- **Location / Component:** Footer, under the brand block
- **Build note:**
  - Remove Facebook.
  - Each icon gets an `aria-label` (listed below) and opens in a new tab with `target="_blank" rel="noopener"`.
  - Use these URLs exactly as written.
- **Cards / Sub-Elements:**
  - **LinkedIn:** `aria-label="Manzili on LinkedIn"` → `https://www.linkedin.com/company/manzili`
  - **X:** `aria-label="Manzili on X"` → `https://twitter.com/ManziliKSA`
  - **Instagram:** `aria-label="Manzili on Instagram"` → `https://www.instagram.com/manzili.sa/`
  - **YouTube:** `aria-label="Manzili on YouTube"` → `https://www.youtube.com/@manziliKSA`
  - **TikTok:** `aria-label="Manzili on TikTok"` → `https://www.tiktok.com/@manzili.sa`
  - **WhatsApp:** `aria-label="Chat with Manzili on WhatsApp"` → `https://wa.me/966534844986`

### SECTION [06]: Bottom Bar
- **Location / Component:** Footer, bottom strip
- **Build note:**
  - Delete the second trust strip ("Saudi PDPL Aligned · KSA Off-Plan Ready Architecture · Class-A Enterprise SLAs").
  - Render the year dynamically so it updates each January. The 2026 output is `© 2026 Manzili`.
- **Legal line:** `© 2026 Manzili`
- **Links:** `Privacy Policy` → `/privacy` · `Terms of Service` → `/terms`

---

## COMPONENT: Shared CTA Banner

- **Location / Component:** Full-width banner directly above the footer
- **Used on:**
  - `/platform-cse`
  - `/case-studies`
  - All 10 `/case-studies/[slug]` pages
- **Not used on:**
  - Homepage: its own final CTA (Part 2)
  - Pillar pages: each gets its own banner (Part 3)
  - Contact, Privacy, Terms
- **Build note:**
  - Build this as one component and replace the 11 one-off banners now on those pages ("Engineer Velocity For Your Masterplan", "Scale Sales Velocity For Your Next Community", etc.).
  - Remove the phone-number button from the banner. The phone stays in the footer.
  - **On `/case-studies` only,** the secondary button would point at the page the visitor is already on. There, swap it for `Explore the CSE Platform` → `/platform-cse`.
  - The banner art is inline SVG and already `aria-hidden="true"`. Keep it that way. If it's ever swapped for a project render, use alt `Aerial render of [Project] masterplan, [City]`.
- **Eyebrow:** `Built for REGA and Wafi off-plan workflows`
- **H2:** `Turn Your BIM into a Launch-Ready Sales Twin`
- **Subheading / Body Copy (`<p>`):** `Share your Revit, IFC or CAD files under NDA. We scope the twin, showroom hardware and launch support, and deliver a launch-ready twin within 14 working days of data freeze.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies` *(on `/case-studies`: `Explore the CSE Platform` → `/platform-cse`)*

---

## COMPONENT: Shared FAQ Module

### SECTION [01]: Module Shell (all FAQ instances)
- **Location / Component:** Two-column FAQ block. The left column is the side card; the right column is the accordion.
- **Used on:**
  - Homepage
  - `/platform-cse`
  - All 6 pillar pages
  - All 10 case-study pages (new)
- **Build note:**
  - Replace the 9 page-specific H2s and eyebrows ("De-Risking Your Sales Staging", "Inventory Integration Technical Questions", "Command FAQ", etc.) with the shell below.
  - Remove the sub-line "Speak directly with our Riyadh engineering team…" and the "Contact Us" button. The side card replaces both.
  - The question text stays sentence case with a question mark. It's the accordion trigger, not a section heading.
  - First item open on load, as today.
- **Eyebrow:** `FAQ`
- **H2:** `Questions From Procurement Teams`
- **Side Card Title (`<p>`, bold):** `Not sure which services your launch needs?`
- **Side Card Body (`<p>`):** `A solutions engineer will map your masterplan to the right scope.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`

### SECTION [02]: Shared Question Set (Platform + case-study pages)
- **Location / Component:** Accordion items in the FAQ module
- **Used on:**
  - `/platform-cse`
  - All 10 `/case-studies/[slug]` pages
- **Build note:**
  - Case-study pages have no FAQ module today. Add it between "Explore Further Case Studies" and the shared CTA banner.
  - "Can our existing BIM/Revit data be used?" appears once only. Remove the duplicate.
- **Q1 (H3):** `Do buyers need to download an app?`
  - **A1:** `No. Buyers open the web platform in Chrome, Safari or Edge on any phone or desktop. The Unreal Engine 5 app runs only on the showroom hardware we supply.`
- **Q2 (H3):** `Can Manzili connect with our existing CRM and inventory system?`
  - **A2:** `Yes. We deploy pre-built, two-way connectors for Salesforce, Yardi Voyager, SAP RE-FX and HubSpot, and unit status syncs in under 500 ms. Other systems are scoped during Technical Scoping.`
- **Q3 (H3):** `Can buyers select and reserve individual units?`
  - **A3:** `Yes, once the project is Wafi-approved to sell. Buyers choose a unit, verify their identity with Nafath and place a timed unit hold linked to the project's Wafi escrow process. The unit then shows as held on every connected screen.`
- **Q4 (H3):** `Can our existing BIM or Revit data be used?`
  - **A4:** `Yes. We ingest Revit, IFC, CAD and GIS files under NDA and build one master model. A launch-ready twin follows within 14 working days of data freeze.`

---

## COMPONENT: Old Wording to Remove

- **Location / Component:** search list for the CMS and code. These strings are on staging today. The copy in this file already replaces them; after the update, search for each one and replace any leftovers.

| Found on staging (examples) | Pages | Replace with |
|---|---|---|
| "REGA Compliant", "REGA-compliant platform…", "REGA-Compliant Digital Transactions", "comply fully with REGA legal mandates" | Home, Platform, Terms | Badge or chip: `Built for REGA and Wafi off-plan workflows` · inline: `REGA-aligned workflows` |
| "on-platform escrow unit locking", "Binding deposit lock into escrow", "legally binding escrow deposits", "binding escrow reservation commitments" | Home, Platform, Al-Mukiman | Inline: `timed unit holds linked to the project's Wafi escrow process` · chip: `Timed unit hold` |
| "100% Floor Uptime" | Pillar 01 | `99.9% Presentation Uptime SLA` |
| "100% Launch Uptime", "100% Launch Uptime SLA" | Case Studies index + 6 case studies | Promise → `99.9% Presentation Uptime SLA`. Reported result on a case study → keep as `100%` with an "Uptime Across…" label (see Part 4) |
| "<350ms", "<400ms", "<450ms", "<500ms", "< 500ms", "Sub-500ms" | Home, Platform, Pillars 02, 05 | `Sub-500 ms` / `unit locks in under 500 ms` (always a space before "ms") |
| "<800ms Unit Reservation Lock" | Case Studies index, Alwareef + 4 related-case cards | `Sub-500 ms` |
| "2-Hour Riyadh Dispatch", "4-Hour Technician SLA", "4-hour local Riyadh support", "2-hour field dispatch across Riyadh…" | Pillars 03, 05, Contact, Malfa | `2-hour dispatch on launch days · 4-hour standard support SLA` |
| "Saudi PDPL Compliant", "Saudi PDPL Aligned" | Footer | `In-Kingdom hosting under Saudi PDPL` |
| "6-Pillar Architecture", "6-Pillar Sales Infrastructure" | Nav, footer, cards | `Services` |
| "deterministic", "Spatial Core", "spatial hesitation", "Commercial Counterparty", "air-gapped", "Audited Performance" | Various | The new copy for that section in this file |
| `manzili360.com` | Meta tags, links | `manzili.sa` |
| Links to `/solutions` | Nav, footer, buttons | `/#pillars` (301-redirect `/solutions` → `/#pillars`) |
| "Arabic version coming soon" | Navbar, mobile menu | Remove. The `العربية` toggle links to the matching `/ar` page |

---

## COMPONENT: Shared UI Strings

### SECTION [01]: Accessibility & Utility Strings
- **Location / Component:** Global
- **Skip link:** `Skip to content` → `#main` (current, keep)
- **Logo `aria-label`:** `Manzili home`
- **Menu button `aria-label`:** `Open menu` / `Close menu`
- **Dropdown button:** `Services` (`aria-expanded` toggles)
- **Image alt rule (future rasters):** describe the subject, e.g. `Aerial render of [Project] masterplan, [City]`. Decorative art: `alt=""` or `aria-hidden="true"`. Never "Cta Image" or a stock description.

### SECTION [02]: 404 Page
- **Target URL Slug:** any unknown route
- **Meta Title:** `Page Not Found · Manzili`
- **Meta Description:** `The page you're looking for has moved or no longer exists.`
- **Build note:** Replace the current 404 copy. Keep `noindex`.
- **Eyebrow:** `Error 404`
- **H1:** `We Can't Find That Page`
- **Subheading / Body Copy:** `The link may be out of date, or the page has moved. Head back to the homepage, or book a technical scoping session with our team.`
- **Primary CTA:** `Back to Home` → `/`
- **Secondary CTA:** `Book Technical Scoping` → `/contact-us`

---

# PART 2 — Homepage & Platform

## PAGE: Homepage
- **Target URL Slug:** `/`
- **Meta Title:** `Off-Plan Sales Infrastructure for Saudi Developers · Manzili`
- **Meta Description:** `Digital twins, showroom hardware and the Connected Sales Environment, delivered and run by one Riyadh team for Saudi master developers.`

---

### SECTION [01]: Hero
- **Location / Component:** Top of page, full-bleed illustrated hero
- **Build note:** The H1 uses a word-by-word animation. Keep a real space between each word span, as staging does now, so screen readers and Google read whole words.
- **Eyebrow:** `Off-Plan Sales Infrastructure for KSA`
- **H1:** `Sell Off-Plan Units Faster, From 3D Masterplan to Signed SPA`
- **Subheading / Body Copy:** `Digital twins, showroom hardware and the Connected Sales Environment, delivered and run by one Riyadh team for Saudi master developers.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `Explore Our Services` → `#pillars`
- **Spec Strip (chips):** `Unreal Engine 5` · `4K at 60 FPS` · `REGA-aligned workflows` · `Hosted in KSA`
- **Image Alt Text:** Decorative inline SVG: keep `aria-hidden="true"`. If it's replaced with a render: `Aerial render of [Project] masterplan, [City]`.

### SECTION [02]: Our Mandate
- **Location / Component:** Section 2, centered statement
- **Build note:** The H2 now has 9 words, down from 33. The rest of the old H2 becomes the `<p>` below it. If the word-split animation is kept, it runs on the H2 only.
- **Eyebrow:** `Our Mandate`
- **H2:** `We Turn Spatial Certainty into Signed Off-Plan Contracts`
- **Subheading / Body Copy:** `We build BIM-accurate digital twins of Saudi master developments and connect them to the Connected Sales Environment, so buyers can check views, layouts and payment plans before they reserve.`
- **Primary CTA:** `Explore the CSE Platform` → `/platform-cse`

### SECTION [03]: Segments & Trust
- **Location / Component:** Section 3, headline left, tag cloud right
- **Build note:** Split the 8 tags into two rows: **Segments** (5 tags) and **Assurances** (3 tags). Today they're one list, so "Enterprise SLA Counterparties" reads like a type of development.
- **Eyebrow:** `Built for Saudi Master Developments`
- **H2:** `Deployed Across Communities, Towers, Galleries and Expos`
- **Subheading / Body Copy:** `From master-planned communities to flagship sales centers and exhibition stands, one Manzili team delivers the twin, the hardware and the launch support.`
- **Cards / Sub-Elements:**
  - **Segment tags:** `Master-Planned Communities` · `Mixed-Use Towers` · `Luxury Villa Enclaves` · `Flagship Sales Centers` · `Real Estate Expos`
  - **Assurance tags:** `One Master Service Agreement` · `In-Kingdom hosting under Saudi PDPL` · `Built for REGA and Wafi off-plan workflows`
- **Primary CTA:** `Discuss Your Project` → `/contact-us`

### SECTION [04]: The Execution Gap (Problem Cards)
- **Location / Component:** Section 4, three numbered cards
- **Eyebrow:** `The Execution Gap`
- **H2:** `Where Off-Plan Sales Stall Today`
- **Cards / Sub-Elements:**
  - **Card 01 Number:** `01`
  - **Card 01 Title (H3):** `Showroom Shelfware Trap`
  - **Card 01 Body:** `When a VIP buyer is in the room, sales teams who haven't been trained on the 3D tools fall back on paper brochures. Deals take longer and the showroom investment sits unused.`
  - **Card 02 Number:** `02`
  - **Card 02 Title (H3):** `Multi-Vendor Fragmentation Tax`
  - **Card 02 Body:** `Splitting the work between a 3D studio and an AV integrator leaves no one accountable. When hardware fails at a launch, the vendors blame each other and the developer loses sales days.`
  - **Card 03 Number:** `03`
  - **Card 03 Title (H3):** `Buyer Verification Gap`
  - **Card 03 Body:** `Buyers who cannot verify views and orientation delay their reservations. Without proof of the balcony view or the sun path, they wait for the next phase or the next project.`

### SECTION [05]: Connected Sales Environment (Flagship Product)
- **Location / Component:** Section 5, copy left + interactive CSE mockup right, 4 feature cards below
- **Build note:** Hard-coded strings in the mockup:
  - `ERP sync · 454ms` → `Inventory sync · Sub-500 ms`.
  - `1 units` → `1 unit`. Fix the plural logic: 1 unit / 2 units.
  - Keep `Reserve with Nafath`, `Available`, `Reserved`, `Sold`, `On reservation`, `Structure complete` and `Handover` as they are.
- **Eyebrow:** `Flagship Product`
- **H2:** `Manzili Connected Sales Environment (CSE)`
- **Subheading / Body Copy:** `One platform that takes buyers from the 3D masterplan into unit tours, payment plans and Nafath verification. It's built for REGA and Wafi off-plan workflows.`
- **Cards / Sub-Elements:**
  - **Card 01 Title (H3):** `Masterplan-to-Unit 3D Navigation`
  - **Card 01 Body:** `Buyers move from the community masterplan straight into unit tours, with accurate balcony views and sun-path simulation.`
  - **Card 02 Title (H3):** `Live Inventory & Dynamic Financing`
  - **Card 02 Body:** `Sub-500 ms CRM and ERP sync with Salesforce, Yardi and SAP, paired with interactive floor plans and milestone payment calculators.`
  - **Card 03 Title (H3):** `Nafath-Verified Digital Reservations`
  - **Card 03 Body:** `Nafath identity verification, automated SPA generation and timed unit holds linked to the project's Wafi escrow process.`
  - **Card 04 Title (H3):** `Measured Buyer Intent`
  - **Card 04 Body:** `Tracks dwell time on each unit type, down-payment changes and funnel drop-offs, so your team calls the buyers who are ready.`
- **Primary CTA:** `See How the CSE Works` → `/platform-cse`

### SECTION [06]: 6-Pillar Infrastructure
- **Location / Component:** Section 6, `id="pillars"` (keep), 6-card grid
- **Build note:**
  - Use the fixed pillar names as the H3s.
  - Use one link-label pattern on every card, at every breakpoint.
  - Keep `id="pillars"`. The nav and hero link to it.
- **Eyebrow:** `How We Deliver`
- **H2:** `Six Services, One Team`
- **Subheading / Body Copy:** `Developers usually hire a different vendor for each of these six services. Manzili delivers all six under one Master Service Agreement.`
- **Cards / Sub-Elements:**
  - **Card 01 Label:** `01` · **Title (H3):** `Digital Twin`
  - **Card 01 Body:** `One master 3D model powers an offline Unreal Engine 5 app for showroom presentations and a lightweight web platform buyers open on any phone.`
  - **Card 01 Link:** `Learn more` → `/pillars/digital-twin-webgl`
  - **Card 02 Label:** `02` · **Title (H3):** `CRM & Inventory Sync`
  - **Card 02 Body:** `Pre-built, two-way connectors for Salesforce, Yardi, SAP and HubSpot keep unit status live on every screen and stop double-bookings.`
  - **Card 02 Link:** `Learn more` → `/pillars/crm-inventory-integration`
  - **Card 03 Label:** `03` · **Title (H3):** `Showroom Hardware`
  - **Card 03 Body:** `Touch tables, LED video walls, immersive rooms and hologram displays, staged and maintained by Manzili. Supplied as owned assets with manufacturer warranty management.`
  - **Card 03 Link:** `Learn more` → `/pillars/sales-center-hardware`
  - **Card 04 Label:** `04` · **Title (H3):** `Sales Enablement`
  - **Card 04 Body:** `Saudi trainers coach your sales team in person and online, working with your sales director on hardware skills, remote showcase routines and masterplan storytelling.`
  - **Card 04 Link:** `Learn more` → `/pillars/saudi-sales-enablement`
  - **Card 05 Label:** `05` · **Title (H3):** `Launch Command`
  - **Card 05 Body:** `A Riyadh-based technical team on site at Cityscape Global, RestateX, sales galleries and boardroom presentations, with 2-hour dispatch on launch days.`
  - **Card 05 Link:** `Learn more` → `/pillars/vip-launch-command`
  - **Card 06 Label:** `06` · **Title (H3):** `Lifecycle & Matterport`
  - **Card 06 Body:** `From concept modeling to Matterport tours of model units and completed projects, all on the same web platform.`
  - **Card 06 Link:** `Learn more` → `/pillars/full-lifecycle-support`

### SECTION [07]: Deployment in 3 Steps
- **Location / Component:** Section 7, three step cards with UI mockups
- **Build note:**
  - Mockup strings can stay: `Engineering data · NDA vault`, file names, `Runtime targets`, `UE5 offline app`, `WebGL mobile`, `Touch table`, `Build 2.14 ready`, `Yardi · Salesforce connected`.
  - Replace the sample project "Marina Bay Residences". It's a well-known Singapore name. Use `Al Nakheel Residences`.
- **Eyebrow:** `Deployment in 3 Steps`
- **H2:** `From BIM to Contract Execution`
- **Subheading / Body Copy:** `Launch-ready digital twins within 14 working days of engineering data freeze.`
- **Cards / Sub-Elements:**
  - **Step 01 Number:** `01` · **Title (H3):** `Data Ingestion & Optimization`
  - **Step 01 Body:** `We convert Revit, IFC and GIS files into optimized 3D geometry that keeps architectural tolerances, all under NDA.`
  - **Step 02 Number:** `02` · **Title (H3):** `Unreal Engine 5 & Web Deployment`
  - **Step 02 Body:** `We build two versions from the same model: an Unreal Engine 5 app for the showroom and a lightweight web platform for buyers' phones.`
  - **Step 03 Number:** `03` · **Title (H3):** `Sales Floor & CSE Activation`
  - **Step 03 Body:** `We train your sales team, connect live inventory to your CRM and switch on the CSE for digital reservations.`

### SECTION [08]: Case Studies Preview
- **Location / Component:** Section 8, `id="case-studies"` (add), heading row + project cards
- **Build note:**
  - Add `id="case-studies"`.
  - All cards use one pattern: Tag · Client · Project (H3) · Location · one-sentence outcome · one numeric badge · link. Today's cards carry the full 35-word meta description as the body, plus two badges.
  - Change the tag separator from `•` to `·`.
  - **Selection rule:** the homepage features flagship-scale projects only. Dyari Signature (a smaller apartment project) is replaced by Alwareef Jeddah. If a card is ever swapped, pick a large masterplan or giga-scale launch, never a single-building project.
- **Eyebrow:** `Case Studies`
- **H2:** `Launches We've Powered Across KSA`
- **Primary CTA:** `View All 10 Case Studies` → `/case-studies`
- **Cards / Sub-Elements:**
  - **Card 01 Tag:** `NHC Masterplan · 12,000+ Units`
  - **Card 01 Client:** `Institutional Residential Developer`
  - **Card 01 Title (H3):** `Alwareef`
  - **Card 01 Location:** `Southeast Jeddah`
  - **Card 01 Body:** `WebGL digital twin, exhibition hardware and on-site launch support for a 12,000-unit community at RestateX.`
  - **Card 01 Badge:** `12,000+ units modeled`
  - **Card 01 Link:** `View Case Study` → `/case-studies/nhc-alwareef`
  - **Card 02 Tag:** `Mixed-Use Masterplan · 8 Towers`
  - **Card 02 Client:** `Erth Real Estate Development`
  - **Card 02 Title (H3):** `Thee Erth`
  - **Card 02 Location:** `King Fahad Road, Riyadh`
  - **Card 02 Body:** `Interactive 360 platform, offline failover and on-site sales training for an 8-tower masterplan at Cityscape Global.`
  - **Card 02 Badge:** `8 towers visualized`
  - **Card 02 Link:** `View Case Study` → `/case-studies/thee-erth`
  - **Card 03 Tag:** `Luxury Towers · SAR 2B+`
  - **Card 03 Client:** `Erth Real Estate Development`
  - **Card 03 Title (H3):** `Masar Ma’ab`
  - **Card 03 Location:** `Masar Destination, Makkah`
  - **Card 03 Body:** `Browser-based 3D twin, sales gallery hardware and team training for a three-tower development.`
  - **Card 03 Badge:** `3 towers modeled`
  - **Card 03 Link:** `View Case Study` → `/case-studies/masar-maab`

### SECTION [09]: Final CTA
- **Location / Component:** Section 9, full-width banner above the FAQ
- **Build note:**
  - Keep the subhead as a `<p>`.
  - Phone display uses spaces, not hyphens.
- **Eyebrow:** `99.9% Presentation Uptime SLA · Built for REGA and Wafi off-plan workflows`
- **H2:** `Accelerate Your Next Masterplan Launch`
- **Subheading / Body Copy:** `One team for the digital twin, showroom hardware, sales training and launch support, from the first scoping session to the signed SPA.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `+966 53 484 4986` → `tel:+966534844986`

### SECTION [10]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1): eyebrow `FAQ`, H2 `Questions From Procurement Teams`, side card + `Book Technical Scoping` → `/contact-us`
- **Build note:** These replace the 4 homepage answers on staging.
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `What is the Connected Sales Environment (CSE)?`
  - **A1:** `The CSE is Manzili's digital sales platform. It combines 3D masterplan navigation, live inventory synced with your CRM, payment-plan calculators and Nafath identity verification, so buyers can go from browsing to a timed unit hold and a generated SPA online. It's built for REGA and Wafi off-plan workflows.`
  - **Q2 (H3):** `How does Manzili replace multiple vendors?`
  - **A2:** `One Master Service Agreement covers the software, hardware, training, launch operations and support, so one team is accountable for uptime.`
  - **Q3 (H3):** `At what stage does Manzili deploy with master developers?`
  - **A3:** `From concept modeling onward. We can build and present your project at any stage, including before Wafi approval. Securing the Wafi license to sell remains the developer's responsibility.`
  - **Q4 (H3):** `Where is project data hosted, and how is IP protected?`
  - **A4:** `Project data is hosted in in-Kingdom cloud regions under the Saudi PDPL. Your source files remain your property and are handled under NDA. Manzili owns the 3D models and digital twins it builds, unless your contract states otherwise.`

---

## PAGE: Platform (CSE)
- **Target URL Slug:** `/platform-cse` (301 from `/products/connected-sales-environment`)
- **Meta Title:** `Connected Sales Environment (CSE) · Manzili`
- **Meta Description:** `One platform from 3D masterplan to Nafath verification and a generated SPA, with live inventory, payment plans, timed unit holds and buyer intent data.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + CSE mockup right
- **Build note:**
  - **Breadcrumb:** "Products" isn't a page. Remove that crumb.
  - **Mockup string:** `ERP sync · 426ms` → `Inventory sync · Sub-500 ms`.
- **Breadcrumb:** `Home` → `/` · `Platform (CSE)` (current page)
- **Eyebrow:** `Flagship Platform`
- **H1:** `The Connected Sales Environment for Off-Plan Real Estate`
- **Subheading / Body Copy:** `A platform built for REGA and Wafi off-plan workflows that takes buyers from masterplan to Nafath verification and a generated SPA, with no paper handoffs.`
- **Primary CTA:** `Request a CSE Demo` → `/contact-us`
- **Secondary CTA:** `See Buyer Intent Data` → `#telemetry`
- **Spec Strip (chips):** `Built for REGA and Wafi off-plan workflows` · `Nafath Verification` · `Milestone Payment Plans` · `Live Buyer Intent Data`

### SECTION [02]: Platform Capabilities
- **Location / Component:** `id="capabilities"`, intro + 3 large feature blocks, each with 3 sub-features
- **Eyebrow:** `Platform Capabilities`
- **H2:** `Turn Off-Plan Browsing into Digital Reservations`
- **Subheading / Body Copy:** `Off-plan buyers drop out between static brochures and paper handoffs. The CSE connects 3D exploration, live inventory and digital reservation in one continuous flow.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Exploration`
  - **Block 01 Title (H3):** `Masterplan-to-Unit 3D Navigation`
  - **Block 01 Body:** `Buyers move from the community masterplan into unit-level tours, checking local infrastructure, sunlight and the actual balcony view before they open the floor plan.`
  - **Block 01 Features:**
    - `Masterplan-to-Unit Navigation` / `One continuous journey without reloading`
    - `Calibrated Balcony Views` / `Real-world elevation and angle simulation`
    - `Sun-Path Modeling` / `Accurate sunlight across every season`
  - **Block 02 Number + Label:** `02` · `Inventory & Payment Plans`
  - **Block 02 Title (H3):** `Live Inventory & Dynamic Financing`
  - **Block 02 Body:** `Shows live unit availability synced with your CRM and ERP, alongside interactive floor plans and milestone payment calculators. Buyers adjust the down payment and construction-linked schedule to fit their budget.`
  - **Block 02 Features:**
    - `Real-Time Availability` / `Sub-500 ms sync prevents double-bookings`
    - `Milestone Payment Calculators` / `Construction-linked payment schedules`
    - `Interactive Floor Plans` / `Dimensioned layouts and elevation filters`
  - **Block 03 Number + Label:** `03` · `Digital Reservation`
  - **Block 03 Title (H3):** `Nafath-Verified Digital Reservations`
  - **Block 03 Body:** `Buyers verify their identity through Nafath, the platform generates the Sales and Purchase Agreement (SPA), and a timed unit hold linked to the project's Wafi escrow process reserves the unit, all without paper handoffs.`
  - **Block 03 Features:**
    - `Nafath Identity Verification` / `National identity check in seconds`
    - `Automated SPA Generation` / `Contract drafted without manual paperwork`
    - `Timed Unit Hold` / `Linked to the project's Wafi escrow process`

### SECTION [03]: Buyer Intent Telemetry
- **Location / Component:** `id="telemetry"` (keep, the hero links here), funnel visual + 3 cards
- **Build note:**
  - Funnel hint text: `Hover a stage to inspect it` doesn't work on phones. Use `Tap or hover a stage to see it. Drop-offs are flagged to sales directors in real time.`
  - Funnel stage labels stay as they are: `1. Masterplan exploration` … `5. SPA generated`.
- **Eyebrow:** `Buyer Intent`
- **H2:** `Replace Agent Notes with Measured Buyer Intent`
- **Subheading / Body Copy:** `Off-plan sales still run on agent notes and website pageviews. The CSE records every buyer interaction, so sales leaders can see who is ready to buy and why.`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `Second-by-Second Dwell Tracking`
  - **Card 01 Title (H3):** `Engagement by Unit and View`
  - **Card 01 Body:** `Measures second-by-second dwell time on each unit type, corner layout and view orientation, so you can see which features draw serious interest.`
  - **Card 02 Chip:** `Indicated Budget Range`
  - **Card 02 Title (H3):** `Financial Intent Signals`
  - **Card 02 Body:** `Shows how buyers adjust down-payment sliders and milestone schedules, so your team has an indicated budget range before the first call.`
  - **Card 03 Chip:** `Zero Pipeline Blind Spots`
  - **Card 03 Title (H3):** `Funnel Bottleneck Detection`
  - **Card 03 Body:** `Pinpoints where buyers drop off, from masterplan exploration to Nafath verification and SPA generation, so your team follows up with deal-ready buyers first.`

### SECTION [04]: Comparison Table
- **Location / Component:** `id="comparison"`, 3-column table on desktop; stacked cards on mobile
- **Build note:**
  - The mobile card version repeats the table in `<h3>`/`<dl>`. It must use the same strings as the table, and only one version should be visible at each breakpoint.
  - The table `<caption>` = H2 text.
- **Eyebrow:** `Side by Side`
- **H2:** `Static Showroom Sales vs. Connected Sales Environment`
- **Subheading / Body Copy:** `How the CSE replaces manual off-plan sales steps with one connected, measurable workflow.`
- **Cards / Sub-Elements (table):**
  - **Header row:** `Capability` · `Legacy Off-Plan Sales` · `Manzili CSE`
  - **Row 1:** `Buyer Exploration` · `Printed brochures and static PDF floor plans` · `3D masterplan navigation and unit virtual tours`
  - **Row 2:** `Inventory Status` · `Spreadsheets reconciled by hand, with frequent double-bookings` · `Sub-500 ms inventory sync with timed unit holds`
  - **Row 3:** `Payment Schedules` · `One-size-fits-all payment sheets` · `Milestone calculator buyers adjust themselves`
  - **Row 4:** `Buyer Authentication` · `In-person ID scans and paper photocopies` · `Digital identity verification through Nafath`
  - **Row 5:** `Contract Execution` · `Days of manual SPA drafting, couriers and wet signatures` · `SPA generated on the platform`
  - **Row 6:** `Buyer Intent` · `Anecdotal notes` · `Dwell time, financing and drop-off telemetry`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module (Part 1 shell + Shared Question Set)
- **Cards / Sub-Elements:**
  - **Q1–Q4:** the Shared Question Set (Part 1, Shared FAQ Module).
  - **Q5 (H3, Platform only):** `How does Nafath verification work in the CSE?`
  - **A5:** `Before placing a timed unit hold, buyers confirm their identity through Nafath, the national single sign-on.`

### SECTION [06]: Powered by the 6-Pillar Infrastructure
- **Location / Component:** Ecosystem strip, 6 linked tiles
- **Eyebrow:** `Behind the Platform`
- **H2:** `Six Services That Power the Platform`
- **Primary CTA:** `View All Services` → `/#pillars`
- **Cards / Sub-Elements:**
  - **Tile 01:** `01` · `Digital Twin` → `/pillars/digital-twin-webgl`
  - **Tile 02:** `02` · `CRM & Inventory Sync` → `/pillars/crm-inventory-integration`
  - **Tile 03:** `03` · `Showroom Hardware` → `/pillars/sales-center-hardware`
  - **Tile 04:** `04` · `Sales Enablement` → `/pillars/saudi-sales-enablement`
  - **Tile 05:** `05` · `Launch Command` → `/pillars/vip-launch-command`
  - **Tile 06:** `06` · `Lifecycle & Matterport` → `/pillars/full-lifecycle-support`

### SECTION [07]: CTA Banner
- **Location / Component:** **Shared CTA Banner** (Part 1)
- **Build note:** Replace the current one-off banner ("Deploy The Connected Sales Environment" / "Request Platform Access" / "REGA Compliant • Nafath Integrated • In-Kingdom Hosting") with the shared component.
- **Eyebrow:** `Built for REGA and Wafi off-plan workflows`
- **H2:** `Turn Your BIM into a Launch-Ready Sales Twin`
- **Subheading / Body Copy:** `Share your Revit, IFC or CAD files under NDA. We scope the twin, showroom hardware and launch support, and deliver a launch-ready twin within 14 working days of data freeze.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

# PART 3 — Pillar Pages 01–06

## Pillar Page Template Rules (all six pages)
- Navbar, Footer and the FAQ module shell (eyebrow `FAQ`, H2 `Questions From Procurement Teams`, side card) are as specified in Part 1. Meta titles and descriptions are in Part 1, Sitewide Metadata.
- **Hero CTAs:** every pillar hero uses `Book Technical Scoping` → `/contact-us` as the primary CTA, plus one secondary CTA that scrolls to an on-page anchor.
- **Bottom banner:** every pillar gets its **own** banner H2, using the same component as the shared banner. Remove the phone button.
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `[Pillar name]`. "Solutions" → `/solutions` is retired.
- **Pillar navigation strip:** the previous and next links use the fixed names. "Back to overview", "Return to 6-Pillar Overview" and "View Full 6-Pillar Infrastructure" → `/solutions` all become `View All Services` → `/#pillars`.
- **Mockups:** every hard-coded latency in a mockup reads `Sub-500 ms`, with a space before "ms".
- **Mobile tables:** the mobile card versions of the matrix tables (`<h3>`/`<dl>`) must use exactly the strings in the table here.

---

## PAGE: Pillar 01 — Digital Twin
- **Target URL Slug:** `/pillars/digital-twin-webgl`
- **Meta Title:** `Digital Twin & Web Platform · Manzili`
- **Meta Description:** `One master 3D model runs the offline Unreal Engine 5 showroom app and a mobile web platform, so buyers see the exact view before they reserve.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + build-pipeline mockup right
- **Build note:** Mockup strings to update:
  - `Safari · Chrome · Edge · < 3s load` → `Safari · Chrome · Edge · under 3 s load`
  - Footer line → `Both versions rebuild from one model after every design change`
  - Keep `Core 3D master model`, `Revit · CAD · IFC ingested`, `Unreal Engine 5 application`, `Offline · 4K · 60 FPS`, `WebGL web platform`, `Touch tables & LED walls` and `Gallery hardware calibrated`.
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `Digital Twin` (current page)
- **Eyebrow:** `01 · Digital Twin`
- **H1:** `Let Buyers See the Exact View Before They Reserve`
- **Subheading / Body Copy:** `From one master 3D model, Manzili builds an Unreal Engine 5 app that runs offline on your showroom hardware and a lightweight web platform buyers open on any phone.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `See How It Works` → `#architecture`
- **Spec Strip (chips):** `One Master 3D Model` · `Offline Unreal Engine 5 App` · `Mobile Web Platform`

### SECTION [02]: Runtime Architecture
- **Location / Component:** `id="architecture"`, intro + 2 large blocks with 3 features each
- **Eyebrow:** `How It Works`
- **H2:** `One Master Model, Two Ways to Sell`
- **Subheading / Body Copy:** `Many developers work with visual files from several different agencies. Manzili builds one master 3D model from your BIM and CAD files, then makes two versions of it that cover the whole buyer journey.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Sales Gallery & VIP Suites`
  - **Block 01 Title (H3):** `Enterprise Unreal Engine 5 Application`
  - **Block 01 Subtitle:** `Runs Offline in Your Sales Gallery`
  - **Block 01 Body:** `Built for sales gallery touch tables, LED walls and VIP suites. The app runs fully offline, so a dropped connection can't interrupt a presentation. Unreal Engine 5 renders native 4K at 60 FPS with full architectural detail and accurate sun angles.`
  - **Block 01 Features:**
    - `No Network Dependency` / `Runs fully offline on local workstations`
    - `Architectural Accuracy` / `Lumen daylight and Nanite geometry`
    - `Calibrated for Your Hardware` / `Tuned for touch tables and LED walls`
  - **Block 02 Number + Label:** `02` · `Mobile & Remote Buyers`
  - **Block 02 Title (H3):** `Lightweight WebGL Web Platform`
  - **Block 02 Subtitle:** `Runs in Any Mobile Browser`
  - **Block 02 Body:** `The web platform is a lighter version of the same master model. It opens 3D masterplans in normal phone and desktop browsers, and buyers explore and choose units over 4G or 5G with nothing to download.`
  - **Block 02 Features:**
    - `No App Download` / `Opens in Safari, Chrome and Edge`
    - `Mobile-First` / `Loads in under 3 seconds on mobile networks`
    - `Remote Buyer Reach` / `Co-browsing and remote unit reservations`

### SECTION [03]: Developer Advantage
- **Location / Component:** 3 stat cards (chip + H3 + body)
- **Eyebrow:** `Developer Advantage`
- **H2:** `How One Model Protects Your Launch`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `99.9% Presentation Uptime SLA`
  - **Card 01 Title (H3):** `Presentations That Don't Depend on Wi-Fi`
  - **Card 01 Body:** `The Unreal Engine 5 app runs on local showroom hardware, so a Wi-Fi dropout or slow network doesn't stall a VIP meeting.`
  - **Card 02 Chip:** `One Source of Truth`
  - **Card 02 Title (H3):** `Every Screen Shows the Same Plans`
  - **Card 02 Body:** `Both versions come from one master model, so unit types, prices and design updates match across showroom displays and the web platform.`
  - **Card 03 Chip:** `Online to Showroom`
  - **Card 03 Title (H3):** `Start Online, Finish in the Showroom`
  - **Card 03 Body:** `Reach serious buyers online through the web platform, then welcome them to the showroom to choose their unit and reserve.`

### SECTION [04]: The Build Pipeline
- **Location / Component:** 3 numbered steps
- **Eyebrow:** `The Build Pipeline`
- **H2:** `From BIM Files to Two Sales Tools`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `Core 3D Master Build` · **Body** `We take your Revit, CAD and IFC files and build one high-precision master model with accurate structure and coordinates.`
  - **Step 02:** `02` · **H3** `Offline UE5 App Setup` · **Body** `We turn the master model into an Unreal Engine 5 app set up for your showroom touch tables, LED walls and presentation screens.`
  - **Step 03:** `03` · **H3** `Web Platform Optimization` · **Body** `We compress the model automatically so it loads fast in a browser, ready to publish when you are.`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `Why do we need both an offline UE5 app and a web platform?`
  - **A1:** `Showroom presentations need full graphics power and no dependence on the internet, which the offline Unreal Engine 5 app delivers. Remote buyers need instant access with nothing to install, which the web platform delivers.`
  - **Q2 (H3):** `What happens to the offline UE5 app if showroom Wi-Fi disconnects?`
  - **A2:** `The buyer won't notice anything. The app runs entirely on local hardware, so presentations, touch controls and 4K navigation carry on. Inventory updates queue locally and sync as soon as the connection returns.`
  - **Q3 (H3):** `What happens when architectural designs or phase layouts change?`
  - **A3:** `Changes go into the single master model and publish to the showroom app and web platform together, so both always show the same plans.`

### SECTION [06]: Pillar Navigation
- **Location / Component:** Previous / next strip above the banner
- **Previous link:** `View All Services` → `/#pillars`
- **Next link:** `Next service` · `02 · CRM & Inventory Sync` → `/pillars/crm-inventory-integration`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Location / Component:** Full-width banner above the footer
- **Eyebrow:** `One master model · Unreal Engine 5 + web`
- **H2:** `Build One Twin for Your Showroom and Every Buyer's Phone`
- **Subheading / Body Copy:** `Send your BIM or CAD files under NDA, and we'll scope the showroom app and web platform for your launch.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

## PAGE: Pillar 02 — CRM & Inventory Sync
- **Target URL Slug:** `/pillars/crm-inventory-integration`
- **Meta Title:** `Real-Time CRM & Inventory Sync · Manzili`
- **Meta Description:** `Pre-built connectors for Salesforce, Yardi Voyager, SAP RE-FX and HubSpot. Unit locks in under 500 ms across every connected screen and session.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + connector mockup right
- **Build note:**
  - Mockup header: `Inventory sync · Pre-built connectors`. The badge `< 500ms` → `Sub-500 ms`.
  - Mockup connector rows:
    - `Salesforce` / `Bidirectional event stream · Sub-500 ms`
    - `Yardi Voyager` / `Real-time webhook pipeline · Sub-500 ms`
    - `SAP RE-FX` / `OData / RFC middleware · Sub-500 ms`
    - `HubSpot` / `Bidirectional REST API · Sub-500 ms`
  - Mockup footer: `PDPL compliant · In-Kingdom data residency` → `In-Kingdom hosting under Saudi PDPL`
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `CRM & Inventory Sync` (current page)
- **Eyebrow:** `02 · CRM & Inventory Sync`
- **H1:** `Stop Double-Booked Units Across Every Sales Channel`
- **Subheading / Body Copy:** `Manzili connects your 3D showroom and web platform to your CRM and ERP, so unit status updates in under 500 ms and buyer activity flows straight to your sales team.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `See the Connectors` → `#matrix`
- **Spec Strip (chips):** `Sub-500 ms Two-Way Sync` · `Salesforce` · `Yardi Voyager` · `SAP RE-FX` · `HubSpot`

### SECTION [02]: System Architecture
- **Location / Component:** `id="architecture"`, intro + 3 blocks with 3 features each
- **Eyebrow:** `System Architecture`
- **H2:** `Sub-500 ms Two-Way Inventory Sync Across Every Device`
- **Subheading / Body Copy:** `Launches go wrong when one screen still shows a unit as available after it's been reserved. Manzili links your 3D models directly to your inventory system, so touch tables, LED walls and web sessions all show the same unit status.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Double-Booking Protection`
  - **Block 01 Title (H3):** `Timed Unit Holds Across Every Screen`
  - **Block 01 Body:** `The moment an agent starts a reservation, Manzili places a timed unit hold and broadcasts it across every connected screen and session. Other tables and web sessions show the unit as Pending straight away, so two buyers can't reserve the same unit.`
  - **Block 01 Features:**
    - `Concurrency Guard` / `Blocks a second reservation in under 500 ms`
    - `Configurable Hold Windows` / `Releases expired holds automatically`
    - `Audit-Ready Logs` / `Records agent, timestamp and buyer ID`
  - **Block 02 Number + Label:** `02` · `Connectors`
  - **Block 02 Title (H3):** `Pre-Built CRM & ERP Connectors`
  - **Block 02 Body:** `Pre-built connectors for Salesforce, Yardi Voyager, SAP RE-FX and HubSpot. Price changes, phase releases and payment-plan updates show in the 3D twin without engineering work or manual re-entry.`
  - **Block 02 Features:**
    - `Pre-Built Adapters` / `Ready for Salesforce, Yardi Voyager, SAP RE-FX and HubSpot`
    - `Instant Price Updates` / `Revised payment terms appear immediately`
    - `Automated Phase Releases` / `Opens new blocks without manual re-entry`
  - **Block 03 Number + Label:** `03` · `Buyer Intent`
  - **Block 03 Title (H3):** `Buyer Intent Data in Your CRM`
  - **Block 03 Body:** `Every 3D interaction is recorded: dwell time by unit type, views checked, sun studies run and floor plans compared. It lands in the buyer's CRM record before they reach the negotiation table.`
  - **Block 03 Features:**
    - `Demand Heatmaps` / `Shows the most-viewed layouts and views`
    - `Richer Lead Profiles` / `Gives agents each buyer's exact preferences`
    - `Lead Scoring` / `Ranks leads by depth of interaction`

### SECTION [03]: Why It Matters
- **Location / Component:** 3 stat cards
- **Eyebrow:** `Why It Matters`
- **H2:** `How Inventory Sync Protects Launch Momentum`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `No Double-Bookings`
  - **Card 01 Title (H3):** `One Unit, One Buyer`
  - **Card 01 Body:** `Timed unit holds stop your team selling the same unit twice, even on the busiest launch day.`
  - **Card 02 Chip:** `Sub-500 ms Unit Locks`
  - **Card 02 Title (H3):** `Real-Time Launch Visibility`
  - **Card 02 Body:** `CCOs and sales directors see reservations, revenue and remaining inventory across galleries and digital channels on one console.`
  - **Card 03 Chip:** `Faster Reservations`
  - **Card 03 Title (H3):** `Faster Path to Reservation`
  - **Card 03 Body:** `Buyers go straight from choosing a unit in 3D to the CRM reservation form while their intent is high.`

### SECTION [04]: Connector Matrix
- **Location / Component:** `id="matrix"`, 4-column table
- **Eyebrow:** `Connector Matrix`
- **H2:** `Pre-Built Connectors for Saudi Master Developers`
- **Subheading / Body Copy:** `Every connector links your project inventory to the Manzili platform for sales and leasing. Connectors are pre-tested and hosted in-Kingdom under the Saudi PDPL.`
- **Cards / Sub-Elements (table):**
  - **Header row:** `Platform` · `Sync Mode` · `Unit Lock` · `What Syncs`
  - **Row 1:** `Salesforce` · `Bidirectional event stream` · `Sub-500 ms` · `Unit inventory and reservations, plus leads and buyer activity`
  - **Row 2:** `Yardi Voyager` · `Real-time webhook pipeline` · `Sub-500 ms` · `Unit inventory, pricing and holds for sales and leasing`
  - **Row 3:** `SAP RE-FX` · `OData / RFC middleware` · `Sub-500 ms` · `Unit inventory, pricing and contract status`
  - **Row 4:** `HubSpot` · `Bidirectional REST API` · `Sub-500 ms` · `Unit availability, plus leads and buyer intent events`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `What happens if two agents try to reserve the same unit?`
  - **A1:** `The first timed unit hold locks the unit everywhere in under 500 ms. The second agent sees it as Pending and can pick another unit.`
  - **Q2 (H3):** `What happens to inventory sync if showroom internet drops?`
  - **A2:** `The showroom app keeps running locally and shows the last confirmed inventory. New timed unit holds wait until the local network reconnects, so no unit is allocated without confirmation.`
  - **Q3 (H3):** `How does buyer intent data reach our CRM?`
  - **A3:** `Interaction events, such as views checked, floor plans toggled and sun studies run, are sent by webhook to each buyer's CRM timeline, so your team sees their intent before the first call.`

### SECTION [06]: Pillar Navigation
- **Previous link:** `Previous service` · `01 · Digital Twin` → `/pillars/digital-twin-webgl`
- **Next link:** `Next service` · `03 · Showroom Hardware` → `/pillars/sales-center-hardware`
- **Overview link:** `View All Services` → `/#pillars`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Eyebrow:** `Sub-500 ms unit locks · Pre-built connectors`
- **H2:** `Stop Double-Bookings Before Your Next Launch`
- **Subheading / Body Copy:** `Tell us which CRM and ERP you run, and we'll map the connectors and hold rules for your launch.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

## PAGE: Pillar 03 — Showroom Hardware
- **Target URL Slug:** `/pillars/sales-center-hardware`
- **Meta Title:** `Showroom Hardware for Sales Centers · Manzili`
- **Meta Description:** `Touch tables, LED walls, immersive rooms and GPU workstations under one contract. 2-hour dispatch on launch days · 4-hour standard support SLA.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + hardware-floor mockup right
- **Build note:**
  - Mockup spec line → `1.2 mm pitch · 1,200 nits · 120 Hz`. Add the unit spaces.
  - Mockup footer: `4-hour Riyadh technician SLA · one Master Service Agreement` → `2-hour dispatch on launch days · 4-hour standard support SLA`
  - Keep the other mockup rows.
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `Showroom Hardware` (current page)
- **Eyebrow:** `03 · Showroom Hardware`
- **H1:** `One Contract for Every Screen in Your Sales Gallery`
- **Subheading / Body Copy:** `Manzili specifies, installs, calibrates and maintains your touch tables, LED walls, immersive rooms and hologram displays under one Master Service Agreement.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `See Hardware Specs` → `#matrix`
- **Spec Strip (chips):** `One Master Service Agreement` · `Touch Tables` · `LED Walls` · `Immersive Rooms` · `Hologram Displays`

### SECTION [02]: What We Supply
- **Location / Component:** `id="architecture"`, intro + 4 blocks with 3 features each
- **Eyebrow:** `What We Supply`
- **H2:** `One Supplier for Every Showroom Screen`
- **Subheading / Body Copy:** `When a gallery display freezes at a VIP launch, the AV integrator blames the software and the 3D studio blames the hardware. Manzili removes the finger-pointing by procuring, stress-testing and warranting the whole presentation setup under one contract.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Interactive Surfaces`
  - **Block 01 Title (H3):** `Commercial 4K Touch Tables`
  - **Block 01 Body:** `55- to 86-inch anti-glare capacitive touch tables, calibrated for several buyers exploring the masterplan at once. Built for all-day showroom use, with under 15 ms touch response, scratch-resistant glass and built-in thermal management.`
  - **Block 01 Features:**
    - `Anti-Glare Glass` / `Resists showroom lighting reflections`
    - `Multi-Touch Precision` / `Several buyers can explore at once`
    - `Thermal Protection` / `Built for continuous commercial use`
  - **Block 02 Number + Label:** `02` · `Video Walls`
  - **Block 02 Title (H3):** `Fine-Pitch Direct-View LED Walls`
  - **Block 02 Body:** `Bezel-free LED video walls with pixel pitch down to 1.2 mm, calibrated for true architectural color, bright showroom daylight and a 120 Hz refresh rate, so the image stays sharp from every viewing distance.`
  - **Block 02 Features:**
    - `1.2 mm Pixel Pitch` / `Sharp at close range`
    - `Daylight-Rated Brightness` / `Holds contrast next to showroom windows`
    - `Micro-LED Reliability` / `100,000-hour rated lifespan`
  - **Block 03 Number + Label:** `03` · `Showroom Centerpieces`
  - **Block 03 Title (H3):** `Immersive Rooms & Hologram Displays`
  - **Block 03 Body:** `270° and 360° immersive rooms and volumetric hologram displays, built as permanent showroom centerpieces. Supplied as owned assets with manufacturer warranty management, plus dedicated optical calibration and permanent installation.`
  - **Block 03 Features:**
    - `Immersive Rooms` / `270° and 360° multi-surface spaces`
    - `Hologram Displays` / `Floating 3D masterplans and unit types`
    - `Turnkey Calibration` / `Optical and acoustic setup included`
  - **Block 04 Number + Label:** `04` · `Local Workstations`
  - **Block 04 Title (H3):** `Offline Graphics Workstations`
  - **Block 04 Body:** `Workstations with RTX 6000 Ada GPUs, installed in your sales gallery, run the Unreal Engine 5 app fully offline at a locked 60 FPS in 4K, with no network lag.`
  - **Block 04 Features:**
    - `Dedicated GPU Rigs` / `Locked 60 FPS in 4K`
    - `Runs Offline, Syncs When Connected` / `Presentations don't depend on outside networks`
    - `Hot-Swap Backups` / `Automatic failover protects uptime`

### SECTION [03]: Why It Matters
- **Location / Component:** 3 stat cards
- **Eyebrow:** `Why It Matters`
- **H2:** `How Turnkey Hardware Protects Your Launch`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `One Master Service Agreement`
  - **Card 01 Title (H3):** `No Vendor Finger-Pointing`
  - **Card 01 Body:** `One contract covers display hardware, workstations, software and maintenance, so your CCO has one accountable partner.`
  - **Card 02 Chip:** `99.9% Presentation Uptime SLA`
  - **Card 02 Title (H3):** `Presentation Uptime in the Contract`
  - **Card 02 Body:** `Commercial-grade components, redundant workstations and local power backup keep presentations running through busy launch weekends.`
  - **Card 03 Chip:** `2-hour dispatch on launch days · 4-hour standard support SLA`
  - **Card 03 Title (H3):** `Rapid On-Site Support`
  - **Card 03 Body:** `Riyadh-based technicians handle fast dispatch, routine preventive maintenance and on-the-spot spare-part swaps.`

### SECTION [04]: Hardware Matrix
- **Location / Component:** `id="matrix"`, 4-column table
- **Eyebrow:** `Hardware Matrix`
- **H2:** `Specifications for Sales Gallery Deployments`
- **Subheading / Body Copy:** `Every component is selected, tested and integrated for stable performance in Saudi showroom conditions, including high heat and bright daylight.`
- **Cards / Sub-Elements (table):**
  - **Header row:** `Hardware Tier` · `Core Component` · `Specification` · `Gallery Use`
  - **Row 1:** `Interactive Surfaces` · `55″–86″ PCAP touch tables` · `4K UHD, 40-point multi-touch, anti-glare` · `Masterplan and unit exploration`
  - **Row 2:** `Video Walls` · `Direct-view micro-LED` · `1.2 mm pixel pitch, 1,200 nits, 120 Hz` · `Main showroom presentation`
  - **Row 3:** `Immersive Rooms` · `270° / 360° enclosure` · `Multi-projector blending or fine-pitch LED` · `Full-scale walkthroughs`
  - **Row 4:** `Hologram Displays` · `Volumetric 3D optics` · `High-lumen holographic rig` · `VIP centerpiece`
  - **Row 5:** `Local Workstations` · `Rack-mounted GPU workstations` · `Dual RTX 6000 Ada, 128 GB ECC RAM` · `Offline Unreal Engine 5 app`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `Why contract showroom hardware through Manzili instead of separate AV vendors?`
  - **A1:** `So one partner is accountable for the whole setup. Under our Master Service Agreement, Manzili handles specification, installation, calibration and support, so a display failure at a VIP event doesn't turn into a dispute between vendors.`
  - **Q2 (H3):** `What happens if a showroom touch table fails during a launch?`
  - **A2:** `Backup units and dual-configured presentation machines on site take over straight away, so sales carry on. Our technicians then replace the faulty unit under our support terms: 2-hour dispatch on launch days · 4-hour standard support SLA.`
  - **Q3 (H3):** `Who maintains the hardware after launch?`
  - **A3:** `Manzili does, under the same MSA, with 2-hour dispatch on launch days · 4-hour standard support SLA. Our team installs, calibrates and maintains hardware across Riyadh, Jeddah and the Eastern Province.`

### SECTION [06]: Pillar Navigation
- **Previous link:** `Previous service` · `02 · CRM & Inventory Sync` → `/pillars/crm-inventory-integration`
- **Next link:** `Next service` · `04 · Sales Enablement` → `/pillars/saudi-sales-enablement`
- **Overview link:** `View All Services` → `/#pillars`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Eyebrow:** `One Master Service Agreement · 99.9% Presentation Uptime SLA`
- **H2:** `Equip Your Sales Gallery Under One Contract`
- **Subheading / Body Copy:** `Share your gallery layout and launch date, and we'll specify the screens, workstations and support plan.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

## PAGE: Pillar 04 — Sales Enablement
- **Target URL Slug:** `/pillars/saudi-sales-enablement`
- **Meta Title:** `Sales Enablement & Team Training · Manzili`
- **Meta Description:** `In-person and online coaching that trains your sales team to present masterplans in 3D, run remote showcases and answer buyer questions with confidence.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + coaching-tracks mockup right
- **Build note:**
  - Mockup track names → `Showroom Hardware Mastery` · `Remote Showcase Playbook` · `Masterplan Storytelling` · `Sales Leadership Alignment`
  - Mockup footer: `Delivered by bilingual Saudi directors` → `Delivered by bilingual Saudi trainers`
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `Sales Enablement` (current page)
- **Eyebrow:** `04 · Sales Enablement`
- **H1:** `Train Your Sales Team to Sell in 3D, Not Brochures`
- **Subheading / Body Copy:** `Saudi trainers coach your sales team in person and online, working with your sales director on showroom hardware, remote showcases and masterplan storytelling.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `See the Training Modules` → `#matrix`
- **Spec Strip (chips):** `In-Person & Online Coaching` · `Hardware Mastery` · `Remote Showcases` · `Masterplan Storytelling`

### SECTION [02]: Training Tracks
- **Location / Component:** `id="architecture"`, intro + 3 blocks with 3 features each
- **Eyebrow:** `Training Tracks`
- **H2:** `In-Person and Online Coaching for Frontline Sales Teams`
- **Subheading / Body Copy:** `Sales teams stop using 3D tools they haven't been trained on. Manzili works with your sales director to run hands-on workshops and online certification that turn sales consultants into confident project storytellers.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Showroom Track`
  - **Block 01 Title (H3):** `Showroom Hardware Mastery`
  - **Block 01 Body:** `Hands-on coaching on your actual showroom equipment. Consultants learn to navigate touch tables, run LED wall presentations and pace a walkthrough, so they stay confident and keep eye contact in high-stakes VIP meetings.`
  - **Block 01 Features:**
    - `Touch-Table Fluency` / `Multi-user navigation without hesitation`
    - `LED Wall Presentations` / `High-impact showroom sequences`
    - `VIP Gallery Etiquette` / `Consultative posture and rapport`
  - **Block 02 Number + Label:** `02` · `Remote Track`
  - **Block 02 Title (H3):** `Remote Showcase Playbook`
  - **Block 02 Body:** `A structured playbook for presenting to out-of-town and international buyers over video calls. Consultants learn co-browsing, how to orient buyers in the virtual masterplan, and fast digital follow-up that qualifies intent at a distance.`
  - **Block 02 Features:**
    - `Co-Browsing` / `Guide remote buyers through the 3D web platform`
    - `Objection Handling on Video` / `Answer layout and view questions on calls`
    - `Fast Follow-Up` / `Send tailored unit links straight after the call`
  - **Block 03 Number + Label:** `03` · `Storytelling Track`
  - **Block 03 Title (H3):** `Masterplan Storytelling & Walkthroughs`
  - **Block 03 Body:** `A presentation structure that starts with Vision 2030 and regional connectivity, moves through neighborhood amenities and ends with the unit's views, privacy and long-term value.`
  - **Block 03 Features:**
    - `Narrative Sequencing` / `Links the big picture to unit value`
    - `Balcony View Proof` / `Shows views and privacy live`
    - `Bilingual Saudi Delivery` / `Arabic and English, tuned for Saudi buyers`

### SECTION [03]: Why It Matters
- **Location / Component:** 3 stat cards
- **Eyebrow:** `Why It Matters`
- **H2:** `How Sales Enablement Speeds Up Off-Plan Sales`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `3D as the Default`
  - **Card 01 Title (H3):** `Full Floor Adoption`
  - **Card 01 Body:** `Consultants use the 3D tools as their main presentation instrument, replacing paper brochures and WhatsApp PDFs.`
  - **Card 02 Chip:** `Remote Buyers`
  - **Card 02 Title (H3):** `GCC and International Reach`
  - **Card 02 Body:** `A standard remote showcase routine lets your team present masterplans and secure reservations from buyers across the GCC and beyond.`
  - **Card 03 Chip:** `Price Defense`
  - **Card 03 Title (H3):** `Defended Price Premiums`
  - **Card 03 Body:** `Structured storytelling anchors buyers in the masterplan's lifestyle value, so consultants can hold their price per square meter and sell premium unit types.`

### SECTION [04]: Training Matrix
- **Location / Component:** `id="matrix"`, 4-column table
- **Eyebrow:** `Training Matrix`
- **H2:** `In-Person and Online Coaching Modules`
- **Subheading / Body Copy:** `Built with your sales leadership, the modules train in-house consultants and external broker networks to sell the same way.`
- **Cards / Sub-Elements (table):**
  - **Header row:** `Track` · `Delivery` · `Core Skill` · `Result`
  - **Row 1:** `Showroom Hardware Mastery` · `In-person showroom sessions` · `Touch table and LED wall presentation` · `Confident use of tech in VIP meetings`
  - **Row 2:** `Remote Showcase Playbook` · `Online interactive workshops` · `Co-browsing and remote negotiation` · `Reach GCC and international buyers`
  - **Row 3:** `Masterplan Storytelling` · `In-person and hybrid drills` · `Big-picture-to-unit sequencing` · `Buyers who can verify views and layout`
  - **Row 4:** `Sales Leadership Alignment` · `Executive strategy sessions` · `Adoption KPIs and floor governance` · `Protects your 3D and hardware investment`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `How are the sales enablement programs delivered?`
  - **A1:** `Through in-person workshops in your sales center and structured online coaching, led by Saudi trainers. Showroom consultants, remote sales reps and external brokers all train to the same standard.`
  - **Q2 (H3):** `How do you work with our sales director and commercial team?`
  - **A2:** `From pre-launch planning onward. We align coaching with your sales targets, phased pricing and CRM workflow, and give your sales director floor-adoption data and consultant benchmarks.`
  - **Q3 (H3):** `What does the storytelling curriculum cover?`
  - **A3:** `How to sequence a masterplan presentation: from Vision 2030 and regional infrastructure, to neighborhood amenities, to the unit's views, privacy setbacks and long-term value.`

### SECTION [06]: Pillar Navigation
- **Previous link:** `Previous service` · `03 · Showroom Hardware` → `/pillars/sales-center-hardware`
- **Next link:** `Next service` · `05 · Launch Command` → `/pillars/vip-launch-command`
- **Overview link:** `View All Services` → `/#pillars`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Eyebrow:** `In person and online · Saudi trainers`
- **H2:** `Get Your Sales Team Selling in 3D Before Launch`
- **Subheading / Body Copy:** `Tell us your team size and launch date, and we'll plan the coaching tracks for your gallery.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

## PAGE: Pillar 05 — Launch Command
- **Target URL Slug:** `/pillars/vip-launch-command`
- **Meta Title:** `Launch Command for Exhibitions & Events · Manzili`
- **Meta Description:** `A Riyadh-based technical team on site at Cityscape Global, RestateX, sales galleries and VIP events, with 2-hour dispatch on launch days.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + war-room mockup right
- **Build note:**
  - Mockup header: `Launch war room · Riyadh command` → `Launch war room · on site`
  - `Restatex Riyadh & Jeddah` → `RestateX Riyadh & Jeddah`
  - `< 500ms unit lock · dual 5G failover` → `Sub-500 ms unit lock · dual 5G failover`
  - Mockup footer → `2-hour dispatch on launch days · Kingdom-wide deployment`
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `Launch Command` (current page)
- **Eyebrow:** `05 · Launch Command`
- **H1:** `Protect High-Stakes Launch-Day Revenue`
- **Subheading / Body Copy:** `Our Riyadh-based technical team works on site across the Kingdom, running live unit allocation, failover systems and VIP presentations at property exhibitions, developer offices and flagship sales centers.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `See Launch Operations` → `#architecture`
- **Spec Strip (chips):** `Riyadh-Based Team` · `Cityscape Global` · `RestateX` · `Sales Centers Across KSA`

### SECTION [02]: Field Operations
- **Location / Component:** `id="architecture"`, intro + 3 blocks with 3 features each
- **Eyebrow:** `Field Operations`
- **H2:** `Kingdom-Wide Launch Support From a Riyadh-Based Team`
- **Subheading / Body Copy:** `On launch day, most VIP demand arrives within a few hours. Manzili puts command engineers on site across your sales footprint to keep systems running, manage allocation surges and support high-value negotiations.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Real Estate Expos`
  - **Block 01 Title (H3):** `Major Property Exhibition Operations`
  - **Block 01 Body:** `Turnkey on-site setup at Cityscape Global in Riyadh, RestateX Riyadh, RestateX Jeddah and Cityscape Jeddah. We stage LED walls, touch table networks, private VIP negotiation suites and dedicated networks inside crowded exhibition halls.`
  - **Block 01 Features:**
    - `Cityscape & RestateX Staging` / `Proven at KSA's largest expos`
    - `Private VIP Suites` / `Dedicated hardware for high-value deals`
    - `Independent Network Failover` / `No reliance on public event Wi-Fi`
  - **Block 02 Number + Label:** `02` · `Developer Venues`
  - **Block 02 Title (H3):** `Boardroom & Sales Center Staging`
  - **Block 02 Body:** `On-site technical management in your boardrooms, offices and flagship sales galleries. Our specialists work alongside your commercial team, keeping touch tables running and headquarters suites in sync with regional sales floors.`
  - **Block 02 Features:**
    - `Boardroom VIP Previews` / `Executive presentations for institutional investors`
    - `Gallery Supervision` / `Technician coverage all launch day`
    - `Multi-Zone Displays` / `Synchronized content across presentation zones`
  - **Block 03 Number + Label:** `03` · `Surge Management`
  - **Block 03 Title (H3):** `Real-Time Launch War Room`
  - **Block 03 Body:** `A dedicated war room monitors unit allocation, Sub-500 ms inventory sync and floor traffic in real time. With hot-standby rigs and dual-carrier cellular backup, the team fixes technical issues before they reach the negotiation table.`
  - **Block 03 Features:**
    - `Live Allocation Watch` / `Prevents double-bookings during traffic spikes`
    - `Dual-Carrier Failover` / `Satellite and 5G backup links`
    - `On-Site Spares` / `Component swaps in minutes`

### SECTION [03]: Why It Matters
- **Location / Component:** 3 stat cards
- **Eyebrow:** `Why It Matters`
- **H2:** `How On-Site Launch Command Protects Your Sales`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `99.9% Presentation Uptime SLA`
  - **Card 01 Title (H3):** `Launch Day Without Interruptions`
  - **Card 01 Body:** `Redundant hardware and dedicated on-site technicians keep screens, touch tables and reservation systems running through the event.`
  - **Card 02 Chip:** `Sub-500 ms Unit Locks`
  - **Card 02 Title (H3):** `Handles Reservation Surges`
  - **Card 02 Body:** `The platform handles simultaneous VIP reservations, placing timed unit holds so units aren't double-booked across exhibition booths and remote channels.`
  - **Card 03 Chip:** `2-hour dispatch on launch days · 4-hour standard support SLA`
  - **Card 03 Title (H3):** `Rapid Mobilization SLA`
  - **Card 03 Body:** `Our Riyadh-based specialists reach Riyadh venues within 2 hours on launch days and deploy Kingdom-wide to Jeddah, Khobar, Makkah and Madinah.`

### SECTION [04]: Deployment Matrix
- **Location / Component:** `id="matrix"`, 4-column table
- **Eyebrow:** `Deployment Matrix`
- **H2:** `Kingdom-Wide Event and Venue Coverage`
- **Subheading / Body Copy:** `Our Riyadh team coordinates logistics, hardware staging and war room monitoring at every major real estate venue in the Kingdom.`
- **Cards / Sub-Elements (table):**
  - **Header row:** `Environment` · `Venues & Events` · `Technical Setup` · `What It Delivers`
  - **Row 1:** `Major Property Expos` · `Cityscape Global (Riyadh), RestateX Riyadh & Jeddah` · `Multi-touch tables, fine-pitch LED stages, isolated Wi-Fi` · `High-density public surge management`
  - **Row 2:** `Flagship Sales Centers` · `Permanent developer galleries across KSA` · `Touch tables, local GPU workstations, live CRM link` · `Stable daily sales operations`
  - **Row 3:** `Developer Headquarters` · `Executive boardrooms and private suites` · `Rec.709 OLED displays, low-latency co-browsing rigs` · `Institutional and UHNW negotiations`
  - **Row 4:** `VIP Pop-Up Pavilions` · `Luxury hotel venues` · `Rapid-deploy presentation stages, LTE/5G dual uplinks` · `Single-evening VIP allocation events`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `Where is the Manzili launch team based?`
  - **A1:** `In Riyadh. Our bilingual Saudi engineers and field technicians work on site at your venue and deploy Kingdom-wide, covering Riyadh, Jeddah, Makkah, Madinah and the Eastern Province.`
  - **Q2 (H3):** `Which real estate exhibitions does Manzili support in KSA?`
  - **A2:** `The major ones, including Cityscape Global at the Riyadh Exhibition & Convention Center, RestateX Riyadh, RestateX Jeddah and Cityscape Jeddah, as well as private developer launch events.`
  - **Q3 (H3):** `How do you protect connectivity at crowded exhibitions?`
  - **A3:** `We never rely on public exhibition Wi-Fi. We set up a private local network with dual-bonded 5G uplinks and run the Unreal Engine 5 app offline on local workstations, so presentations and reservations continue even if the hall network goes down.`

### SECTION [06]: Pillar Navigation
- **Previous link:** `Previous service` · `04 · Sales Enablement` → `/pillars/saudi-sales-enablement`
- **Next link:** `Next service` · `06 · Lifecycle & Matterport` → `/pillars/full-lifecycle-support`
- **Overview link:** `View All Services` → `/#pillars`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Eyebrow:** `2-hour dispatch on launch days · Riyadh-based team`
- **H2:** `Staff Your Next Cityscape Launch`
- **Subheading / Body Copy:** `Share your event dates and booth plan, and we'll scope the hardware, network and on-site team.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

## PAGE: Pillar 06 — Lifecycle & Matterport
- **Target URL Slug:** `/pillars/full-lifecycle-support`
- **Meta Title:** `Lifecycle Support & Matterport Tours · Manzili`
- **Meta Description:** `One master model updated through every phase, from concept to handover, plus Matterport tours of model units and completed projects on the same platform.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + lifecycle mockup right
- **Build note:** Mockup footer: `Every spatial asset feeds one central web platform` → `Every 3D asset feeds one web platform`. Keep the other mockup rows.
- **Breadcrumb:** `Home` → `/` · `Services` → `/#pillars` · `Lifecycle & Matterport` (current page)
- **Eyebrow:** `06 · Lifecycle & Matterport`
- **H1:** `Sell Every Phase From One Model, Concept to Handover`
- **Subheading / Body Copy:** `We support developers at every project stage: turning concepts into off-plan digital twins, capturing Matterport tours of model units, and bringing every 3D asset into one web platform for unbuilt and completed stock.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Virtual Tours` → `#tours`
- **Spec Strip (chips):** `Concept Design` · `Digital Twin` · `Matterport Tours` · `Completed Projects`

### SECTION [02]: Three Stages, One Platform
- **Location / Component:** `id="architecture"`, intro + 3 stage blocks with 3 features each
- **Eyebrow:** `Three Stages, One Platform`
- **H2:** `Keep Sales Moving Through Every Development Stage`
- **Subheading / Body Copy:** `Master developments roll out over years of phases. Manzili keeps your 3D assets in use the whole way, from off-plan digital twins to model-unit scans and completed-stock sales.`
- **Cards / Sub-Elements:**
  - **Block 01 Number + Label:** `01` · `Stage 01 · Off-Plan`
  - **Block 01 Title (H3):** `Concept Modeling & Digital Twins`
  - **Block 01 Body:** `We turn CAD, BIM and GIS data into interactive Unreal Engine 5 environments from the concept stage onward. Developers present high-fidelity masterplans on gallery touch tables and share lightweight web versions with buyers anywhere.`
  - **Block 01 Features:**
    - `CAD & BIM Ingestion` / `Accurate geometry from engineering files`
    - `Ready From Concept Stage` / `Build and present before launch`
    - `Multi-Platform Deployment` / `Showroom hardware and mobile web in sync`
  - **Block 02 Number + Label:** `02` · `Stage 02 · Model Units`
  - **Block 02 Title (H3):** `Matterport 3D Model Unit Tours`
  - **Block 02 Body:** `As show villas and mock-up units are completed, our technicians scan them with Matterport Pro3 cameras. The tours sit inside the web platform, so remote buyers can inspect real finishes and layouts next to the off-plan twin.`
  - **Block 02 Features:**
    - `Matterport Pro3 LiDAR Capture` / `Accurate, true-to-scale interiors`
    - `Built-In Web Viewer` / `Co-browse inside the project platform`
    - `Finish & Material Checks` / `Buyers see the real materials`
  - **Block 03 Number + Label:** `03` · `Stage 03 · Completion`
  - **Block 03 Title (H3):** `Completed Project Virtual Tours`
  - **Block 03 Body:** `Support continues past handover into secondary inventory and completed commercial assets. We capture Matterport tours of finished towers, offices and retail districts, so asset teams can sign tenants and buyers faster.`
  - **Block 03 Features:**
    - `Ready-Stock Sales` / `Leasing and secondary sales`
    - `Portfolio-Wide View` / `One dashboard across completed developments`
    - `Long-Term Archive` / `Accurate digital record for facility handover`

### SECTION [03]: Sample Tours
- **Location / Component:** `id="tours"` (keep, the hero links here), 2 tour preview cards
- **Eyebrow:** `Sample Tours`
- **H2:** `Interactive Matterport 3D Virtual Tours`
- **Subheading / Body Copy:** `See how Matterport scans sit inside the developer web platform, so remote buyers can inspect model units and completed properties in accurate 3D.`
- **Cards / Sub-Elements:**
  - **Card 01 Label:** `3D tour preview` · **Tag:** `Model Unit · Off-Plan`
  - **Card 01 Title (H3):** `Luxury Show Villa Model Unit`
  - **Card 01 Body:** `LiDAR scan capturing proportions, bespoke joinery and natural courtyard light.`
  - **Card 02 Label:** `3D tour preview` · **Tag:** `Completed Unit · Ready to Move In`
  - **Card 02 Title (H3):** `Completed Residential Tower Penthouse`
  - **Card 02 Body:** `Full interior and terrace scan, with panoramic city orientation and accurate floor layouts.`

### SECTION [04]: Why It Matters
- **Location / Component:** 3 stat cards
- **Eyebrow:** `Why It Matters`
- **H2:** `Value Across the Full Development Cycle`
- **Cards / Sub-Elements:**
  - **Card 01 Chip:** `One Model, Every Phase`
  - **Card 01 Title (H3):** `No Rebuilds Between Phases`
  - **Card 01 Body:** `The master model is updated as plans change, so you avoid costly re-renders and your gallery always matches construction progress.`
  - **Card 02 Chip:** `Remote Tour Reach`
  - **Card 02 Title (H3):** `Faster Model Unit Payback`
  - **Card 02 Body:** `Matterport tours put your show villas in front of GCC and international buyers online, so you get more return on the cost of building them.`
  - **Card 03 Chip:** `Single Web Dashboard`
  - **Card 03 Title (H3):** `One Platform for Your Portfolio`
  - **Card 03 Body:** `Manage off-plan towers, model units and completed stock from one web interface.`

### SECTION [05]: FAQ
- **Location / Component:** Shared FAQ module shell (Part 1)
- **Cards / Sub-Elements:**
  - **Q1 (H3):** `How do Matterport tours integrate into the web platform?`
  - **A1:** `The scans are embedded in your project's web platform. From the interactive floor plan, buyers and consultants switch between the off-plan 3D model and the scan of the built model unit.`
  - **Q2 (H3):** `Can Manzili capture 3D tours for ready-built completed projects?`
  - **A2:** `Yes. Our technicians scan completed units with Matterport Pro3 cameras, and the tours sit in the same web platform as the off-plan twin.`
  - **Q3 (H3):** `What happens when architectural designs or phase layouts change?`
  - **A3:** `Changes go into the single master model and publish to the showroom app and web platform together, so both always show the same plans.`

### SECTION [06]: Pillar Navigation
- **Previous link:** `Previous service` · `05 · Launch Command` → `/pillars/vip-launch-command`
- **Next link:** `Explore the CSE Platform` → `/platform-cse`
- **Overview link:** `View All Services` → `/#pillars`

### SECTION [07]: CTA Banner (Pillar-Specific)
- **Eyebrow:** `Concept to handover · Matterport Pro3 tours`
- **H2:** `Keep Your 3D Assets Selling After Launch`
- **Subheading / Body Copy:** `Tell us your phasing plan, and we'll scope model-unit scans and twin updates for each stage.`
- **Primary CTA:** `Book Technical Scoping` → `/contact-us`
- **Secondary CTA:** `View Case Studies` → `/case-studies`

---

# PART 4 — Case Studies

## Case-Study Template Rules (all 10 detail pages)

- **Hero:**
  - Breadcrumb: `Home` → `/` · `Case Studies` → `/case-studies` · `[Project]`
  - Primary CTA: `Plan a Similar Launch` → `/contact-us`
  - Secondary CTA: `See the Technical Scope` → `#solution`
- **Sidebar:** exactly four labels, in this order: `Client` · `Project` · `Location` · `Scope`.
  - Remove "Pillars Represented" / "Primary Strategic Pillars".
  - Location is the project city only. Never Manzili's office.
- **Section eyebrows (fixed):**
  - `The Challenge`
  - `Our Solution` (keeps `id="solution"`)
  - `Sales Team Enablement` (template B pages; Al Basateen uses `Leasing Team Enablement`, because it's a leasing project)
  - `Reported Performance`
  - `Quality & Compliance`
- **Results section:**
  - H2 is always `Delivery Outcomes`. The eyebrow is `Reported Performance` (Thee Erth: `Reported Performance Across Cityscape Global`).
  - Every stat value is a number.
  - On template B pages, each card's second line is prefixed `Outcome:`. Today the label renders after the text.
- **Standards table:**
  - H2 `Delivery Standards`.
  - Header row `Standard` · `What We Deployed` · `Why It Matters`.
- **Related cards:**
  - Eyebrow `More Case Studies`, H2 `More Launches We've Powered`.
  - Show 3 cards, using the Index card copy below. Never show the page's own card.
- **FAQ:** add the Shared FAQ module + Shared Question Set (Part 1) between the related cards and the CTA banner.
- **CTA banner:** use the Shared CTA Banner (Part 1). This replaces the 10 one-off banners and the "Schedule Enterprise Consultation" / "Explore Core Pillars" → `/solutions` buttons.
- **Mobile tables:** mobile `<h3>`/`<dl>` versions use the same strings as the desktop tables.
- **NHC projects (Alwareef, Al-Mukiman, Malfa Al-Assalah, Tabuk Hills):** the client is always `Institutional Residential Developer`. The developer is not named, for NDA reasons. NHC appears only as the masterplan owner (`NHC Masterplan` chip, Project field), never as the client. The `nhc-` slugs stay.
- **Templates:**
  - **A:** Thee Erth, Alwareef, Al-Mukiman, Malfa Al-Assalah, Tabuk Hills. Three risk cards + solution blocks with 3 features each.
  - **B:** Masar Ma'ab, Dyari Signature, Raffles, Mohammed Al Habib, Al Basateen. Challenge table + 4 solution blocks with 2 bullets + 3 enablement steps.

---

## PAGE: Case Studies Index
- **Target URL Slug:** `/case-studies`
- **Meta Title:** `Case Studies · Manzili`
- **Meta Description:** `How Saudi master developers used Manzili digital twins, showroom hardware and the CSE to launch off-plan projects.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + illustration right
- **Breadcrumb:** `Home` → `/` · `Case Studies` (current page)
- **Eyebrow:** `Case Studies`
- **H1:** `Off-Plan Launches We've Powered Across KSA`
- **Subheading / Body Copy:** `How Saudi master developers use Manzili digital twins, showroom hardware, sales enablement and launch support to present, launch and sell off-plan projects.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Spec Strip (chips):** `Cityscape Global` · `RestateX Riyadh & Jeddah` · `Riyadh · Jeddah · Makkah · Madinah · Tabuk`

### SECTION [02]: Filters & Project Grid
- **Location / Component:** Filter tabs + card grid
- **Build note:**
  - Remove the two extra Thee Erth cards ("Synchronizing Masterplan Sightlines…" and "Raffles & Sofitel Residences at Thee Erth"). Both link to `/case-studies/thee-erth#solution`, which makes 12 cards for 10 projects.
  - Counter: `10 case studies` (dynamic: `[n] case studies`).
  - Cards can carry more than one filter tag.
  - Card pattern: Tag (Type · one numeric badge) / Client / Project H3 / Location / one-sentence outcome / `View Case Study`.
- **Filter Tabs:** `All` · `Digital Twins` · `Virtual Tours` · `Commercial Leasing` · `Launch Operations`
- **Cards / Sub-Elements** (in display order, largest first):
  - **Card 01:** Tag `NHC Masterplan · 12,000+ Units` · Client `Institutional Residential Developer` · H3 `Alwareef` · Location `Southeast Jeddah` · Body `WebGL digital twin, exhibition hardware and on-site launch support for a 12,000-unit community at RestateX.` · Filters `Digital Twins`, `Launch Operations` → `/case-studies/nhc-alwareef`
  - **Card 02:** Tag `Mixed-Use Masterplan · 8 Towers` · Client `Erth Real Estate Development` · H3 `Thee Erth` · Location `King Fahad Road, Riyadh` · Body `Interactive 360 platform, offline failover and on-site sales training for an 8-tower masterplan at Cityscape Global.` · Filters `Digital Twins`, `Launch Operations` → `/case-studies/thee-erth`
  - **Card 03:** Tag `NHC Masterplan · 6,000+ Units` · Client `Institutional Residential Developer` · H3 `Al-Mukiman` · Location `Central Madinah` · Body `Browser-based 3D twin, showroom touch tables and sales playbooks for a 6,000-unit family community.` · Filters `Digital Twins` → `/case-studies/nhc-al-mukiman`
  - **Card 04:** Tag `NHC Masterplan · 4,600+ Units` · Client `Institutional Residential Developer` · H3 `Tabuk Hills` · Location `Tabuk` · Body `WebGL twin of a 2.2M+ m² masterplan and a turnkey sales center commissioned in 48 hours.` · Filters `Digital Twins` → `/case-studies/nhc-tabuk-hills`
  - **Card 05:** Tag `Luxury Towers · SAR 2B+` · Client `Erth Real Estate Development` · H3 `Masar Ma’ab` · Location `Masar Destination, Makkah` · Body `Browser-based 3D twin, sales gallery hardware and team training for a three-tower development.` · Filters `Digital Twins` → `/case-studies/masar-maab`
  - **Card 06:** Tag `NHC Villa Community · 633 Villas` · Client `Institutional Residential Developer` · H3 `Malfa Al-Assalah` · Location `Southwest Riyadh` · Body `Plot-level 3D twin, showroom touch tables and sales playbooks for 633 family villas.` · Filters `Digital Twins` → `/case-studies/nhc-malfa-al-assalah`
  - **Card 07:** Tag `Branded Residences · 48 Floors` · Client `Erth Real Estate Development` · H3 `Raffles Residences Jeddah` · Location `Jeddah Corniche` · Body `Built show residence captured as an interactive 3D tour for remote luxury buyers.` · Filters `Virtual Tours` → `/case-studies/raffles-residences-jeddah`
  - **Card 08:** Tag `Show Villa Tours · 2 Cities` · Client `Mohammed Al Habib Real Estate` · H3 `Eyal Al Fursan & Eyal Sadayem` · Location `Riyadh & Jeddah` · Body `Built show villas captured as 3D tours and shared across sales galleries in both cities.` · Filters `Virtual Tours` → `/case-studies/mohammed-al-habib`
  - **Card 09:** Tag `Residential Community · 406 Units` · Client `Dyari Real Estate Development` · H3 `Dyari Signature` · Location `Al Mounsiya, Riyadh` · Body `Multi-building digital twin, exhibition hardware and sales training for a RestateX launch.` · Filters `Digital Twins`, `Launch Operations` → `/case-studies/dyari-signature`
  - **Card 10:** Tag `Grade-A Office Campus · 39,387 m² GLA` · Client `Al Basateen Real Estate Company` · H3 `Al Basateen Offices` · Location `King Khalid Road, Diriyah` · Body `3D tours of lobbies, office floors and courtyards that help leasing teams sign corporate tenants.` · Filters `Virtual Tours`, `Commercial Leasing` → `/case-studies/al-basateen-offices`
  - **Card link label (all):** `View Case Study`

### SECTION [03]: How Every Deployment Is Delivered
- **Location / Component:** Standards strip, 3 statements
- **Eyebrow:** `Quality & Compliance`
- **H2:** `How Every Deployment Is Delivered`
- **Cards / Sub-Elements:**
  - `One Master Service Agreement covering 3D assets, showroom hardware and sales coaching.`
  - `On-site launch support, with hot-standby engineers at your sales gallery.`
  - `In-Kingdom hosting under Saudi PDPL, built for REGA and Wafi off-plan workflows.`

### SECTION [04]: CTA Banner
- **Location / Component:** **Shared CTA Banner** (Part 1). On this page the secondary CTA is `Explore the CSE Platform` → `/platform-cse`.
- **Build note:** Replaces "Qualified Inquiries Only / Scope Your Masterplan Deployment / Book Technical Scoping Session" and the phone button.

---

## PAGE: Thee Erth (Template A)
- **Target URL Slug:** `/case-studies/thee-erth`
- **Meta Title:** `Thee Erth Case Study · Manzili`
- **Meta Description:** `Erth Real Estate Development launched its 8-tower Riyadh masterplan at Cityscape Global with a Manzili 360 platform, offline failover and sales training.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Cityscape Global`
- **H1:** `An 8-Tower Masterplan Launch at Cityscape Global`
- **Subheading / Body Copy:** `Erth Real Estate Development launched its 8-tower Riyadh masterplan at Cityscape Global with a Manzili 360 platform, offline failover and on-site sales training.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Erth Real Estate Development` · `8-Tower Masterplan` · `King Fahad Road, Riyadh` · `Cityscape Global`
- **Mockup chips:** `Live twin` · `8 towers` · `Cityscape Global` (keep)

### SECTION [02]: Project Sidebar
- **Client:** `Erth Real Estate Development`
- **Project:** `Thee Erth · 8-tower mixed-use masterplan with Raffles Hotel & Residences, Sofitel serviced apartments, Grade-A offices and a luxury retail mall`
- **Location:** `King Fahad Road, Riyadh`
- **Scope:** `Browser-based 360 web platform · Interactive 3D tours · In-person sales training · Cityscape Global launch support`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Launching 8 Towers on a Fixed Exhibition Date`
- **Subheading / Body Copy:** `Erth needed a digital sales platform that could present the scale, views and finishes of an 8-tower masterplan to investors and off-plan buyers at Cityscape Global in Riyadh.`
- **Cards / Sub-Elements:**
  - **Card 01:** `01` · Label `Schedule Risk` · **H3** `A Fixed Opening-Day Deadline` · **Body** `Delivery was tied to the opening morning of Cityscape Global, leaving no margin for schedule slippage or build errors.`
  - **Card 02:** `02` · Label `Network Risk` · **H3** `Overloaded Exhibition Wi-Fi` · **Body** `Crowded convention halls overload event Wi-Fi, risking lag, dropped frames or crashes during VIP buyer meetings.`
  - **Card 03:** `03` · Label `Team Readiness` · **H3** `Sales Teams Under Pressure` · **Body** `Without hands-on training, sales teams under exhibition pressure fall back on paper brochures.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`, 4 blocks with 3 features each
- **Eyebrow:** `Our Solution`
- **H2:** `One Connected Setup for Web, Showroom and Exhibition Floor`
- **Subheading / Body Copy:** `Manzili combined browser-based 360 navigation, showroom hardware, local network failover and in-person sales coaching.`
- **Cards / Sub-Elements:**
  - **Block 01:** `01` · Label `No Plugins` · **H3** `Browser-Based 360 Web Platform`
    - **Body:** `A lightweight WebGL model of all 8 towers, podium streetscapes and unit-level view corridors, loading in under 3 seconds on buyers' phones and sales iPads with nothing to download.`
    - **Features:** `8-Tower Navigation` / `Full masterplan coverage` · `Unit View Corridors` / `Sightline and daylight simulation` · `Instant Mobile Access` / `Opens over standard 4G and 5G`
  - **Block 02:** `02` · Label `3D Tours` · **H3** `Interactive 3D Environments`
    - **Body:** `Walkthroughs of Raffles Residences, Sofitel apartments and Grade-A office floors let buyers check layouts, ceiling heights and finishes before they reserve.`
    - **Features:** `Hospitality-Grade Tours` / `Detailed luxury residence inspection` · `Office Floor Plates` / `Column-free space for corporate tenants` · `Unit-Type Selectors` / `Fast layout filtering across 8 towers`
  - **Block 03:** `03` · Label `Failover` · **H3** `Exhibition-Ready Failover Setup`
    - **Body:** `Progressive loading and local edge caching kept presentations running independently of public exhibition Wi-Fi.`
    - **Features:** `Local Edge Caching` / `Protection against venue network dropouts` · `Dual-Carrier Failover` / `5G backup for live data sync` · `Hardware Swap Kits` / `Standby spares on site`
  - **Block 04:** `04` · Label `Sales Coaching` · **H3** `In-Person Sales Team Training`
    - **Body:** `On-site coaching certified Erth's sales consultants on interactive presentations, answering layout and view questions, and digital reservations before the doors opened.`
    - **Features:** `Touch Table Mastery` / `Confident use under pressure` · `Presentation Pacing` / `Walkthroughs from masterplan to unit` · `Digital Reservations` / `From interest to timed unit hold`

### SECTION [05]: Delivery Outcomes
- **Eyebrow:** `Reported Performance Across Cityscape Global`
- **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** Value `100%` · Label `Uptime Across Cityscape Global` · **H3** `No Event Downtime` · **Body** `No downtime or frame-rate drops were recorded on touch tables or displays across the multi-day exhibition.`
  - **Stat 02:** Value `<3 s` · Label `Load Time` · **H3** `Instant Access` · **Body** `Under 3 seconds to load on showroom touch tables, sales iPads and buyer smartphones, even at peak hall traffic.`
  - **Stat 03:** Value `0` · Label `Plugins or Downloads Needed` · **H3** `Open on Any Device` · **Body** `Buyers and consultants opened the platform in a standard browser, with no plugins or app installs.`
  - **Stat 04:** Value `8` · Label `Towers Visualized` · **H3** `Physical Scale Model Replaced` · **Body** `One digital asset replaced costly physical scale models and is reused in permanent sales centers and web campaigns.`

### SECTION [06]: Delivery Standards
- **Eyebrow:** `Quality & Compliance`
- **H2:** `Delivery Standards`
- **Cards / Sub-Elements (table):**
  - **Header:** `Standard` · `What We Deployed` · `Why It Matters`
  - **Row 1:** `Open Web Architecture` · `Standard WebGL / HTML5 core` · `No third-party plugins and no firewall exceptions for buyers or IT teams`
  - **Row 2:** `Data & Asset Protection` · `Encrypted asset streaming` · `Architectural CAD and BIM geometry protected against unauthorized extraction`
  - **Row 3:** `On-Time Delivery` · `Every milestone delivered on schedule` · `On-site engineers on the exhibition floor for the full event`

### SECTION [07]: Client Testimonial — REMOVE
- **Build note:** Delete the quote block ("Deploying an 8-tower masterplan at Cityscape…", Commercial Leadership, Erth Real Estate Development).

### SECTION [08]: Related, FAQ & CTA
- Per the template rules: `More Launches We've Powered` (3 cards), Shared FAQ, Shared CTA Banner.

---

## PAGE: Masar Ma’ab (Template B)
- **Target URL Slug:** `/case-studies/masar-maab`
- **Meta Title:** `Masar Ma’ab Case Study · Manzili`
- **Meta Description:** `Manzili built the 3D twin, sales gallery hardware and sales training for Erth Real Estate Development's three-tower project in Makkah's Masar Destination.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Masar Destination`
- **H1:** `Holy Mosque Views, Verified Floor by Floor`
- **Subheading / Body Copy:** `Manzili built the browser-based 3D twin, sales gallery hardware and sales training for Erth Real Estate Development's SAR 2B+ three-tower development in Makkah's Masar Destination.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Erth Real Estate Development` · `3 Luxury Towers` · `SAR 2B+ Value` · `Masar Destination, Makkah`
- **Mockup chips:** `Live twin` · `3 towers` · `850 m to the Holy Mosque`

### SECTION [02]: Project Sidebar
- **Client:** `Erth Real Estate Development`
- **Project:** `Masar Ma’ab · 3 luxury residential and hospitality towers, up to 31 floors · 81,000+ m² built-up living area · over SAR 2 billion`
- **Location:** `Masar Destination, Makkah`
- **Scope:** `WebGL digital twin · Sales gallery touch tables · Sales team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Selling Holy City Residences Off-Plan`
- **Subheading / Body Copy:** `Selling luxury residences 850 meters from the Holy Mosque means proving floor heights, orientation toward the Haram and links to the pedestrian concourse. Static brochures and 2D plans couldn't justify floor-by-floor premiums to private and institutional investors.`
- **Cards / Sub-Elements (table):**
  - **Header:** `Sales Friction` · `The Commercial Risk` · `What Manzili Delivered`
  - **Row 1:** `Unclear Views by Floor` · `Buyers question high-floor premiums without verified views.` · `Verified view analysis: 3D elevations show the exact Holy Mosque and concourse sightlines from every floor.`
  - **Row 2:** `Complex Masterplan Context` · `Static maps can't show how Masar's central boulevard connects to the towers.` · `Masterplan-to-unit navigation: buyers explore district access, parking and pedestrian concourses in 3D.`
  - **Row 3:** `Long Decision Cycles` · `GCC and international buyers want to verify remotely before they commit.` · `No-install web access: the WebGL twin streams to remote buyers through a secure link.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`, 4 blocks with 2 bullets each
- **Eyebrow:** `Our Solution`
- **H2:** `An Interactive 3D Twin with Holy Mosque Sightlines`
- **Subheading / Body Copy:** `One twin runs on the showroom touch tables and streams to buyers' browsers. It models all three towers with architectural precision, sun orientation and direct pedestrian concourse links.`
- **Cards / Sub-Elements:**
  - **Block 01:** **H3** `View & Sightline Verification` · `Camera positions model the exact view from each floor toward the Holy Mosque concourse.` · `Removes buyer doubt about view premiums across all three towers.`
  - **Block 02:** **H3** `Masar Destination Context` · `Includes Masar's 3.6 km boulevard, high-speed rail access and underground bus stops.` · `Shows walking times and transport options directly from the residences.`
  - **Block 03:** **H3** `Turnkey Sales Gallery Hardware` · `Commercial 65-inch 4K touch tables installed in Erth's sales center.` · `Fast touch response for group presentations and investor reviews.`
  - **Block 04:** **H3** `Remote Sharing by Web Link` · `Agents send personalized, unit-specific 3D walkthroughs to overseas buyers.` · `Nothing to install on the investor's side.`

### SECTION [05]: Sales Team Enablement
- **Eyebrow:** `Sales Team Enablement`
- **H2:** `A Structured Journey for Luxury Investors`
- **Subheading / Body Copy:** `Manzili trained Erth's sales team in floor rehearsals to guide high-net-worth buyers from the masterplan to a unit reservation.`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `District Orientation` · `Advisors open on the Masar Destination twin, showing proximity to the Holy Mosque, concourse links and transit connections.`
  - **Step 02:** `02` · **H3** `Tower Selection & View Check` · `The advisor isolates Tower 1, 2 or 3 and rotates it to show sun orientation, privacy buffers and verified views.`
  - **Step 03:** `03` · **H3** `Floor Plan & Finish Confirmation` · `The interface moves into 3D floor plans with layouts, hospitality-grade finishes and live unit availability.`

### SECTION [06]: Delivery Outcomes
- **Eyebrow:** `Reported Performance`
- **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `3` · `Residential Towers Modeled` · `Every floor of all three towers, up to 31 floors.` · **Outcome:** `Floor-by-floor coverage for off-plan apartment selection.`
  - **Stat 02:** `81,000+ m²` · `Living Area Modeled` · `Built-up residential area captured across the development.` · **Outcome:** `Buyers compare every apartment type in one model.`
  - **Stat 03:** `0` · `App Downloads for Buyers` · `Browser-based WebGL streaming on all major devices.` · **Outcome:** `GCC and overseas buyers inspect units from a web link.`
  - **Stat 04:** `99.9%` · `Presentation Uptime` · `Commercial 65-inch 4K touch tables.` · **Outcome:** `Stable presentations throughout investor launches.`

### SECTION [07]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:** `Standard` · `What We Deployed` · `Why It Matters`
  - `BIM Dimension Accuracy` · `Full engineering CAD ingestion` · `Exact ceiling heights, window openings and interior areas`
  - `In-Kingdom Hosting` · `KSA cloud infrastructure` · `Buyer interactions and registration data hosted in-Kingdom under the Saudi PDPL`
  - `Hardware Support` · `Commercial hardware support` · `On-demand technical support keeps 4K touch screens running`

### SECTION [08]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Dyari Signature (Template B)
- **Target URL Slug:** `/case-studies/dyari-signature`
- **Meta Title:** `Dyari Signature Case Study · Manzili`
- **Meta Description:** `Dyari Real Estate Development presented its 406-unit Riyadh community at RestateX with a Manzili multi-building twin, exhibition hardware and sales training.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · RestateX`
- **H1:** `406 Units Across 36 Buildings, Found in Seconds`
- **Subheading / Body Copy:** `Dyari Real Estate Development presented its 406-unit Riyadh community at RestateX with a Manzili multi-building twin, exhibition hardware and sales training.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Dyari Real Estate Development` · `36 Buildings` · `406 Residential Units` · `Al Mounsiya, Riyadh` · `RestateX Diamond Sponsor`
- **Mockup chips:** `Live twin` · `36 buildings` · `406 units`

### SECTION [02]: Project Sidebar
- **Client:** `Dyari Real Estate Development`
- **Project:** `Dyari Signature · master-planned residential community of apartments, penthouses and villas (36 buildings, 406 units) · RestateX Diamond Sponsor pavilion`
- **Location:** `Al Mounsiya, Riyadh`
- **Scope:** `Multi-building WebGL twin · 4K touch tables · Sales team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Presenting 36 Buildings at a Packed Exhibition`
- **Subheading / Body Copy:** `As Diamond Sponsor at RestateX, Dyari expected heavy buyer traffic over four exhibition days. Presenting 406 units across 36 buildings with scale models or printed brochures would have created agent bottlenecks and slowed reservations.`
- **Cards / Sub-Elements (table):**
  - **Header:** `Sales Friction` · `The Commercial Risk` · `What Manzili Delivered`
  - **Row 1:** `Slow Catalog Browsing` · `Buyers spend 15+ minutes flipping booklets to find unit types and building numbers.` · `Sub-second unit filtering: advisors find units by budget, bedrooms, floor and orientation in two taps.`
  - **Row 2:** `Unclear Community Layout` · `Static plans can't show how buildings relate to gardens, parking and access roads.` · `3D community twin: shows courtyard views, sun orientation and walkability.`
  - **Row 3:** `Exhibition Network Failure` · `Overloaded venue Wi-Fi stalls cloud-only presentations at peak hours.` · `Offline-first caching: local hardware keeps running through a full venue outage.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `A Multi-Building 3D Twin with Instant Unit Search`
- **Subheading / Body Copy:** `Manzili built one digital twin of all 36 buildings in Dyari Signature, linking large touch tables with overhead LED displays and phone handoffs.`
- **Cards / Sub-Elements:**
  - **Block 01:** **H3** `36-Building Masterplan Navigation` · `One coordinate system allows smooth navigation across all 36 buildings, roads and parks.` · `Clear zoning shows privacy buffers and vehicle access points.`
  - **Block 02:** **H3** `Instant Unit Search` · `Filters any of the 406 units by layout, floor, area and availability.` · `Removes manual lookups and speeds up buyer qualification.`
  - **Block 03:** **H3** `Exhibition-Grade Touch Hardware` · `Heavy-duty 4K touch tables paired with synchronized presentation screens.` · `Waiting visitors watch live walkthroughs while agents present.`
  - **Block 04:** **H3** `QR Code Takeaway` · `Visitors scan a QR code on the touch table to load their shortlisted units on their own phone.` · `Keeps buyer interest alive without printed brochures.`

### SECTION [05]: Sales Team Enablement
- **Eyebrow:** `Sales Team Enablement`
- **H2:** `Fast Qualification for High-Traffic Exhibitions`
- **Subheading / Body Copy:** `Manzili trained Dyari's sales team to qualify buyers in 90 seconds and match them to specific units before starting a detailed 3D walkthrough.`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `Multi-Criteria Filtering` · `The agent enters bedrooms, price and preferred building, cutting 406 units to 3 top matches.`
  - **Step 02:** `02` · **H3** `Community Context` · `The 3D twin then shows building position, courtyard exposure, parking and nearby amenities.`
  - **Step 03:** `03` · **H3** `Unit Inspection & QR Handover` · `Advisor and buyer review the 3D interior together. Once the buyer is ready to reserve, the unit record goes to their phone by QR code.`

### SECTION [06]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `406` · `Units Modeled` · `Full 3D coverage across all 36 buildings in Al Mounsiya, Riyadh.` · **Outcome:** `Floor-by-floor visibility for every apartment.`
  - **Stat 02:** `36` · `Buildings Modeled` · `Every building, road and park in one twin.` · **Outcome:** `Buyers see exactly where each unit sits.`
  - **Stat 03:** `<1 s` · `Unit Search` · `Instant filtering by unit type, floor and view.` · **Outcome:** `Advisors find matching units during live conversations.`
  - **Stat 04:** `0` · `Hardware Downtime at RestateX` · `Local edge caching kept every screen running.` · **Outcome:** `Presentations ran through every RestateX session.`

### SECTION [07]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Commercial Touch Hardware` · `Commercial-grade capacitive touch` · `Tested for 12-hour exhibition days without overheating or touch drift`
  - `Data Hosting` · `In-Kingdom cloud hosting` · `Lead and buyer data handled under the Saudi PDPL`
  - `Offline Operation` · `Embedded local asset cache` · `Full 3D interactivity without an internet connection`

### SECTION [08]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Raffles Residences Jeddah (Template B)
- **Target URL Slug:** `/case-studies/raffles-residences-jeddah`
- **Meta Title:** `Raffles Residences Jeddah Case Study · Manzili`
- **Meta Description:** `Remote buyers tour the built show residence at Erth Real Estate Development's 48-floor Raffles Residences on the Jeddah Corniche in interactive 3D.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Jeddah Corniche`
- **H1:** `A Corniche Show Residence, Open to Remote Buyers`
- **Subheading / Body Copy:** `Remote buyers tour the built show residence at Erth Real Estate Development's Raffles Residences on the Jeddah Corniche in interactive 3D, before they reserve off-plan.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Erth Real Estate Development` · `Branded Luxury Tower` · `Show Residence 3D Tour` · `Jeddah Corniche`
- **Mockup chips:** `Show residence 3D tour` · `48 floors` · `Jeddah Corniche`

### SECTION [02]: Project Sidebar
- **Client:** `Erth Real Estate Development · Brand partner: Raffles Hotels & Resorts`
- **Project:** `Raffles Residences Jeddah · branded luxury residences and penthouses, 48 floors`
- **Location:** `Jeddah Corniche, Jeddah`
- **Scope:** `3D show residence tour · WebGL twin · Sales team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Letting Remote Buyers Inspect a Luxury Residence`
- **Subheading / Body Copy:** `Luxury buyers want to see finishes, ceiling heights and sea views before they commit to an off-plan branded tower. Erth had built a show residence, but buyers in Riyadh and across the GCC couldn't easily visit Jeddah.`
- **Cards / Sub-Elements (table):**
  - **Header:** `Sales Friction` · `The Commercial Risk` · `What Manzili Delivered`
  - **Row 1:** `Dependence on Site Visits` · `Out-of-region VIP buyers delay reserving until they can travel to the show residence.` · `True-scale 3D tour: the built show residence captured with true materials and lighting.`
  - **Row 2:** `Unclear Terrace & Sea Views` · `Floor plans can't convey deep terraces and panoramic Red Sea views.` · `Interactive view simulation: floor-specific sea views and sunset angles.`
  - **Row 3:** `Scattered Sales Material` · `Separate PDFs and renders dilute the Raffles brand.` · `One branded web experience: curated 3D walkthroughs that open on any tablet or browser without an app.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `An Interactive 3D Tour with Corniche Views`
- **Subheading / Body Copy:** `Manzili scanned the built show residence and turned its geometry and materials into a fast WebGL walkthrough, linked from showroom touch displays to remote buyers' devices.`
- **Cards / Sub-Elements:**
  - **Block 01:** **H3** `True-Scale Show Residence Twin` · `1:1 capture of master suites, living rooms and designer kitchens.` · `Accurate timber paneling, imported marble and custom joinery.`
  - **Block 02:** **H3** `Corniche View Synthesis` · `Drone panoramas aligned with each window opening.` · `Accurate Red Sea horizons at different tower heights.`
  - **Block 03:** **H3** `Private VIP Links` · `Advisors create secure, unit-specific links for private investor walkthroughs.` · `Works on desktops, iPads and phones with no download.`
  - **Block 04:** **H3** `Showroom Display Sync` · `High-definition touch consoles in Erth's private sales lounges.` · `Advisors guide clients through rooms, wardrobes and terraces.`

### SECTION [05]: Sales Team Enablement
- **Eyebrow:** `Sales Team Enablement`
- **H2:** `Polished Presentations for Global Luxury Buyers`
- **Subheading / Body Copy:** `Manzili trained Erth's private client advisors to use the digital twin in VIP consultations, focusing on hospitality amenities, services and craftsmanship.`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `Waterfront Positioning` · `Advisors open on the Corniche exterior, showing marinas, beach clubs and downtown access.`
  - **Step 02:** `02` · **H3** `Floor & Layout Selection` · `The advisor selects the floor and checks orientation, privacy and Red Sea views.`
  - **Step 03:** `03` · **H3** `Interior Walkthrough` · `The client enters the 3D show residence and inspects proportions, ceiling heights and finishes room by room.`

### SECTION [06]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `48` · `Tower Floors Modeled` · `Full vertical coverage of residences and penthouses.` · **Outcome:** `Buyers understand the whole building, from lobby to amenities.`
  - **Stat 02:** `1:1` · `Show Residence Capture` · `Calibrated textures matching the real finishes.` · **Outcome:** `A faithful digital version of the physical show residence.`
  - **Stat 03:** `0` · `App Downloads for Buyers` · `Browser-based WebGL on any mobile device.` · **Outcome:** `High-net-worth buyers inspect residences remotely through private links.`
  - **Stat 04:** `60 FPS` · `On Phones, Tablets and 4K Displays` · `Consistent performance across every screen.` · **Outcome:** `The tour feels the same in the showroom and at home.`

### SECTION [07]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Material Accuracy` · `Physically based material rendering` · `True marble veining, metal trims and glass reflections`
  - `Data Confidentiality` · `Encrypted cloud streaming` · `Private viewing links protected by time-limited tokens and access control`
  - `Cross-Platform Performance` · `WebGL / HTML5 engine` · `Consistent 60 FPS on smartphones, tablets and 4K displays`

### SECTION [08]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Alwareef (Template A)
- **Target URL Slug:** `/case-studies/nhc-alwareef`
- **Meta Title:** `Alwareef Case Study · Manzili`
- **Meta Description:** `Alwareef, a 12,000-unit NHC community in Southeast Jeddah, launched at RestateX with a Manzili WebGL twin, exhibition hardware and on-site support.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · RestateX`
- **H1:** `A 12,000-Unit Masterplan Launch at RestateX`
- **Subheading / Body Copy:** `Alwareef, a 12,000-unit NHC community in Southeast Jeddah, launched at RestateX with a Manzili WebGL twin, exhibition hardware and on-site launch support.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Institutional Residential Developer` · `NHC Masterplan` · `Alwareef` · `Southeast Jeddah` · `RestateX Launch`
- **Mockup chips:** `Live twin` · `12,000+ units` · `10M+ m²`

### SECTION [02]: Project Sidebar
- **Client:** `Institutional Residential Developer`
- **Project:** `Alwareef · NHC destination masterplan · 10M+ m² · 12,000+ residential units`
- **Location:** `Southeast Jeddah`
- **Scope:** `WebGL masterplan twin · Exhibition touch podiums · Dual-carrier failover · RestateX launch support`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Launching a 10M+ m² Suburb at a Packed Exhibition`
- **Subheading / Body Copy:** `Launching off-plan inventory across a 10M+ m² masterplan at RestateX needed reliable hardware and no network lag during heavy visitor surges.`
- **Cards / Sub-Elements:**
  - **Card 01:** `01` · `Network Risk` · **H3** `Exhibition Wi-Fi Blackouts` · `Convention hall Wi-Fi often fails under crowd pressure, crashing cloud-only sales platforms at peak hours.`
  - **Card 02:** `02` · `Buyer Understanding` · **H3** `A Masterplan Too Big for 2D` · `With 12,000+ planned homes over 10M+ m², buyers struggled to picture phases, roads and amenities on flat maps.`
  - **Card 03:** `03` · `Inventory Risk` · **H3** `Double-Bookings Under Heavy Traffic` · `Many consultants serving hundreds of walk-in buyers at once risk selling the same unit twice without live inventory.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`, 3 blocks with 3 features each
- **Eyebrow:** `Our Solution`
- **H2:** `An Exhibition-Ready Setup for RestateX`
- **Subheading / Body Copy:** `The RestateX setup paired WebGL masterplan navigation with local hardware, cellular failover and fast reservation workflows for the sales team.`
- **Cards / Sub-Elements:**
  - **Block 01:** Label `01 · Digital Twin` · **H3** `10M+ m² WebGL Masterplan Twin`
    - **Body:** `A no-download WebGL twin of all 10M+ m² of Alwareef, showing residential zones, parks, schools and highway junctions in 4K at 60 FPS.`
    - **Features:** `Destination-Scale Coverage` / `All 12,000+ planned homes` · `Infrastructure Context` / `Transit, schools and commercial centers` · `Under 3-Second Load` / `On sales iPads and buyers' phones`
  - **Block 02:** Label `03 · Showroom Hardware` · **H3** `Exhibition Hardware & Local Computing`
    - **Body:** `Durable touch podiums and presenter stations backed by local edge computers that run without venue internet.`
    - **Features:** `Exhibition Touch Podiums` / `Built for continuous exhibition traffic` · `Synchronized Video Walls` / `Consultant walkthroughs mirrored on booth screens` · `Plug-and-Play Assembly` / `Pre-configured flight cases, set up in 24 hours`
  - **Block 03:** Label `05 · Launch Command` · **H3** `Failover & On-Site Launch Command`
    - **Body:** `On-site launch engineers ran local edge servers with dual-carrier private 5G failover throughout RestateX.`
    - **Features:** `Dual-Carrier Private 5G` / `Automatic carrier failover` · `On-Floor Standby Engineers` / `Specialists in the booth for the full event` · `Fast Unit Holds` / `Live inventory sync prevents double-bookings`

### SECTION [05]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `100%` · `Uptime Across 4 Exhibition Days` · **H3** `No Network Downtime` · `Local caching and private 5G failover kept every display running, despite venue network outages.`
  - **Stat 02:** `Sub-500 ms` · `Unit Lock Time` · **H3** `Live Inventory Sync` · `Unit holds synced in under 500 ms across every booth screen, with no double-bookings.`
  - **Stat 03:** `12,000+` · `Units Modeled` · **H3** `Full Masterplan Scope` · `Apartments, townhomes, commercial boulevards and community amenities across Alwareef.`
  - **Stat 04:** `0` · `Rebuilds From Booth to Sales Center` · **H3** `Reused After the Show` · `The digital twin moved from the RestateX booth into the permanent Alwareef sales center with no rebuild.`

### SECTION [06]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `High-Load Performance` · `Edge caching with local GPU compute` · `No frame drops during simultaneous multi-screen presentations`
  - `Failover Redundancy` · `Dual-carrier bonded cellular uplink` · `Automatic failover if the event line slows or drops`
  - `On-Site Support` · `Event engineers on the floor` · `Component swaps within 120 seconds`

### SECTION [07]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Al-Mukiman (Template A)
- **Target URL Slug:** `/case-studies/nhc-al-mukiman`
- **Meta Title:** `Al-Mukiman Case Study · Manzili`
- **Meta Description:** `Families buying at Al-Mukiman, a 6,000-unit community in Madinah, explore their future homes on a Manzili 3D twin and showroom touch tables.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Madinah`
- **H1:** `A 6,000-Unit Madinah Community, Explored in 3D`
- **Subheading / Body Copy:** `Families buying off-plan at Al-Mukiman in central Madinah explore their future homes on a Manzili 3D twin and showroom touch tables, guided by trained sales staff.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Institutional Residential Developer` · `NHC Masterplan` · `Al-Mukiman` · `Central Madinah` · `Live Sales Center`
- **Mockup chips:** `Live twin` · `6,000+ units` · `3.5M+ m²`

### SECTION [02]: Project Sidebar
- **Client:** `Institutional Residential Developer`
- **Project:** `Al-Mukiman · NHC destination masterplan · 3,545,000+ m² · 6,000+ residential units`
- **Location:** `Central Madinah`
- **Scope:** `WebGL masterplan twin · Multi-touch sales gallery displays · Sales team certification`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Clear Answers for Multi-Generational Family Buyers`
- **Subheading / Body Copy:** `Family buyers in central Madinah decide together, and they need to see height limits, setbacks and privacy clearly before they commit to an off-plan home.`
- **Cards / Sub-Elements:**
  - **Card 01:** `01` · `Planning Constraints` · **H3** `Strict Height and Setback Rules` · `Municipal height limits and privacy setbacks near the Prophet's Mosque need exact validation, which 2D floor plans can't provide.`
  - **Card 02:** `02` · `Showroom Adoption` · **H3** `Slow Tools, Back to Brochures` · `Across 3.5M+ m², slow-loading portals pushed consultants back to printed brochures and WhatsApp PDFs at peak family visiting hours.`
  - **Card 03:** `03` · `Family Decisions` · **H3** `Many Decision-Makers` · `Extended families who can't read blueprints take longer to agree, delaying reservations.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `A Turnkey Sales Setup for Al-Mukiman`
- **Subheading / Body Copy:** `The Al-Mukiman sales center runs on a browser-based WebGL twin and showroom touch tables, with structured sales playbooks for the frontline team.`
- **Cards / Sub-Elements:**
  - **Block 01:** Label `01 · Digital Twin` · **H3** `Browser-Based Community Twin`
    - **Body:** `A no-download WebGL masterplan of all 3.5M+ m² of Al-Mukiman, showing building massing, roads, mosques, schools and plot-level daylight in 4K at 60 FPS.`
    - **Features:** `Community Exploration` / `Aerial navigation across 6,000+ homes` · `Boundary Context` / `Accurate distances to the Prophet's Mosque area` · `Under 3-Second Load` / `Smooth on 4G and 5G mobile browsers`
  - **Block 02:** Label `03 · Showroom Hardware` · **H3** `Sales Gallery Hardware`
    - **Body:** `65-inch 4K multi-touch tables installed in the permanent sales center, backed by local computing that removes network lag in busy consultations.`
    - **Features:** `Multi-Touch Tables` / `Rated for all-day showroom use` · `Dual-Display Mode` / `Touch table mirrored to LED walls` · `Local Edge Caching` / `No dependence on public Wi-Fi`
  - **Block 03:** Label `04 · Sales Enablement` · **H3** `Sales Playbooks for Family Buyers`
    - **Body:** `On-site coaching replaced passive feature tours with a structured presentation built for Saudi family buyers.`
    - **Features:** `Masterplan-to-Home Sequence` / `From community infrastructure to living room` · `Objection Handling` / `Answers on privacy and nearby mosques` · `Digital Reservation Flow` / `From unit inspection to timed unit hold`

### SECTION [05]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `6,000+` · `Residential Units Modeled` · **H3** `Every Plot in 3D` · `Each plot in the community can be explored in the twin.`
  - **Stat 02:** `3.5M+ m²` · `Masterplan Modeled` · **H3** `Full Community Context` · `Roads, mosques, schools and setbacks across the whole masterplan.`
  - **Stat 03:** `<3 s` · `Mobile Load Time` · **H3** `Shared with the Whole Family` · `Buyers shared twin links with family members who couldn't attend, loading in under 3 seconds on Saudi mobile networks.`
  - **Stat 04:** `99.9%` · `Presentation Uptime` · **H3** `Stable Sales Gallery` · `Local caching kept the gallery running smoothly at 60 FPS through peak sales seasons.`

### SECTION [06]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Architectural Accuracy` · `Full BIM / CAD coordinates` · `Matches the approved municipal masterplan and infrastructure data`
  - `Data Hosting` · `In-Kingdom data hosting` · `Buyer data hosted in-Kingdom under the Saudi PDPL`
  - `Hardware Service` · `Hot-standby hardware` · `Pre-configured replacement parts minimize showroom downtime`

### SECTION [07]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Malfa Al-Assalah (Template A)
- **Target URL Slug:** `/case-studies/nhc-malfa-al-assalah`
- **Meta Title:** `Malfa Al-Assalah Case Study · Manzili`
- **Meta Description:** `Buyers at Malfa Al-Assalah in Southwest Riyadh explore each of its 633 villas plot by plot, on a Manzili 3D twin and showroom touch tables.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Riyadh`
- **H1:** `633 Villas, Every Plot Explorable in 3D`
- **Subheading / Body Copy:** `Buyers at Malfa Al-Assalah explore each of its 633 villas plot by plot on a Manzili 3D twin and showroom touch tables, with sales staff trained for family consultations.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Institutional Residential Developer` · `NHC Masterplan` · `Malfa Al-Assalah` · `Southwest Riyadh` · `Live Sales Gallery`
- **Mockup chips:** `Live twin` · `633 villas` · `Southwest Riyadh`

### SECTION [02]: Project Sidebar
- **Client:** `Institutional Residential Developer`
- **Project:** `Malfa Al-Assalah · 633 villas on a 45,000+ m² site, within NHC's 3.85M+ m² Al-Assalah master community`
- **Location:** `Southwest Riyadh`
- **Scope:** `Plot-level WebGL twin · 4K showroom touch tables · Sales team certification`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Helping Families Tell Similar Villas Apart`
- **Subheading / Body Copy:** `Before construction starts, villa buyers in Southwest Riyadh need to understand plot privacy, sun angles and room sizes.`
- **Cards / Sub-Elements:**
  - **Card 01:** `01` · `Buyer Indecision` · **H3** `Identical Floor Plans` · `The same 2D plan across hundreds of plots confused families, delaying decisions and adding extra showroom visits.`
  - **Card 02:** `02` · `Sun & Privacy` · **H3** `No Way to Check Sun and Privacy` · `Saudi families weigh sunlight, courtyard privacy and street frontage carefully. Without daylight simulation, decisions stalled.`
  - **Card 03:** `03` · `Showroom Tools` · **H3** `Static Scale Models` · `Acrylic models couldn't show interior variations, so teams struggled to explain finishes and layouts from printed sheets.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `An Interactive Sales Console for Riyadh Villa Buyers`
- **Subheading / Body Copy:** `A plot-level WebGL twin runs on the showroom touch tables, backed by sales playbooks written for family consultations.`
- **Cards / Sub-Elements:**
  - **Block 01:** Label `01 · Digital Twin` · **H3** `Plot-Level WebGL Twin`
    - **Body:** `A lightweight browser app lets buyers inspect each villa plot, checking courtyard boundaries, street access and nearby green spaces.`
    - **Features:** `Plot Sun-Path Studies` / `Daylight from morning to evening on each plot` · `Interior Walkthroughs` / `From ground-floor living to private upper floors` · `No Download` / `Smooth 60 FPS on showroom and mobile`
  - **Block 02:** Label `03 · Showroom Hardware` · **H3** `65-Inch Showroom Touch Consoles`
    - **Body:** `65-inch 4K touch tables in the Al-Assalah sales gallery let families gather around and explore their future home together.`
    - **Features:** `Durable Commercial Glass` / `Anti-glare and scratch-resistant` · `Split-Screen Comparisons` / `Villa types and plot sizes side by side` · `Local Computing` / `No lag on zoom, rotate or interior views`
  - **Block 03:** Label `04 · Sales Enablement` · **H3** `Sales Coaching for Family Consultations`
    - **Body:** `On-site coaching certified the developer's consultants to handle family objections step by step, from plot privacy to finishes.`
    - **Features:** `Step-by-Step Walkthroughs` / `From amenities to garden privacy` · `Finish Demonstrations` / `Materials and fixtures shown in 3D` · `Reservation Workflow` / `From unit selection to timed unit hold`

### SECTION [05]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `633` · `Villas Modeled` · **H3** `Full Architectural Coverage` · `All 633 villas, streetscapes and community parks in 3D.`
  - **Stat 02:** `45,000+ m²` · `Development Modeled` · **H3** `Every Plot in Context` · `The full site, with roads and green spaces, in one twin.`
  - **Stat 03:** `1:1` · `Architectural Scale` · **H3** `Setback & Privacy Checks` · `Exact setbacks, street widths and window positions answer family privacy questions before signing.`
  - **Stat 04:** `0` · `Hardware Outages` · **H3** `Reliable Showroom` · `Pre-configured hardware ran through months of busy weekend sales with no failures.`

### SECTION [06]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Dimensional Accuracy` · `1:1 architectural parity` · `The off-plan model matches the approved villa drawings`
  - `Data Privacy (PDPL)` · `In-Kingdom cloud hosting` · `Buyer and reservation data hosted in-Kingdom under the Saudi PDPL`
  - `Hardware Support` · `Hardware support agreement` · `2-hour dispatch on launch days · 4-hour standard support SLA`

### SECTION [07]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Tabuk Hills (Template A)
- **Target URL Slug:** `/case-studies/nhc-tabuk-hills`
- **Meta Title:** `Tabuk Hills Case Study · Manzili`
- **Meta Description:** `Manzili had the Tabuk Hills sales center running in 48 hours, with a WebGL twin of the 2.2M+ m² masterplan and sales playbooks for 4,600+ units.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Tabuk`
- **H1:** `A Turnkey Tabuk Hills Sales Center in 48 Hours`
- **Subheading / Body Copy:** `Manzili had the Tabuk Hills sales center running in 48 hours, with pre-built showroom hardware, a WebGL twin of the masterplan and sales playbooks for the local team.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Institutional Residential Developer` · `NHC Masterplan` · `Tabuk Hills` · `Tabuk` · `Live Regional Sales Center`
- **Mockup chips:** `Live twin` · `4,600+ units` · `2.2M+ m²`

### SECTION [02]: Project Sidebar
- **Client:** `Institutional Residential Developer`
- **Project:** `Tabuk Hills · NHC destination masterplan · 2,237,000+ m² · 4,600+ residential units`
- **Location:** `Tabuk`
- **Scope:** `WebGL masterplan twin · Plug-and-play sales center hardware · Local sales team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Running a High-Volume Sales Center Far From Riyadh`
- **Subheading / Body Copy:** `A high-volume off-plan sales center in Tabuk needed reliable hardware that didn't depend on scarce local AV specialists.`
- **Cards / Sub-Elements:**
  - **Card 01:** `01` · `Local Support` · **H3** `Few Specialist Technicians` · `Regional cities have few AV and GPU specialists, so any hardware fault risks long showroom downtime.`
  - **Card 02:** `02` · `Buyer Confidence` · **H3** `Doubts About Off-Plan Homes` · `Buyers used to inspecting finished homes hesitated to commit to 4,600+ unbuilt units without seeing them.`
  - **Card 03:** `03` · `Team Experience` · **H3** `New Sales Teams` · `Newly hired consultants struggled to explain infrastructure timelines and relied on handing out brochures.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `A Turnkey Remote Sales Setup for Tabuk Hills`
- **Subheading / Body Copy:** `Manzili delivered a browser-based WebGL masterplan, pre-configured showroom hardware racks and on-site coaching tailored to local buyers.`
- **Cards / Sub-Elements:**
  - **Block 01:** Label `01 · Digital Twin` · **H3** `Browser-Based Masterplan Twin`
    - **Body:** `A 2.2M+ m² WebGL model of all 4,600+ homes, parks, schools and commercial facilities, running smoothly at 60 FPS on every device.`
    - **Features:** `Accurate Terrain` / `Real elevation contours of the Tabuk plateau` · `Amenity Distances` / `Walking and driving times to schools and clinics` · `Works in Any Browser` / `No installs for buyers or consultants`
  - **Block 02:** Label `03 · Showroom Hardware` · **H3** `Pre-Built Showroom Hardware`
    - **Body:** `Touch tables and presenter consoles shipped pre-configured in flight racks, with remote health monitoring that cuts the need for on-site technician visits.`
    - **Features:** `48-Hour Setup` / `Commissioned within 48 hours of handover` · `Remote Diagnostics` / `Temperature and GPU load flagged to Riyadh engineers` · `Offline Mode` / `Presentations continue during fiber cuts`
  - **Block 03:** Label `04 · Sales Enablement` · **H3** `Sales Team Certification`
    - **Body:** `Hands-on coaching taught Tabuk consultants to guide first-time off-plan buyers through the 3D twin step by step.`
    - **Features:** `Masterplan-to-Home Storytelling` / `From infrastructure to living spaces` · `Local Objection Playbooks` / `Answers on construction timelines` · `Reservation Routine` / `Timed unit holds before interest fades`

### SECTION [05]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `48 h` · `Showroom Setup Time` · **H3** `Turnkey Commissioning` · `Pre-assembled racks arrived in Tabuk and were fully operational within 48 hours, meeting the launch milestone.`
  - **Stat 02:** `0` · `Hardware Outages in 120 Days` · **H3** `Uninterrupted Presentations` · `No hardware outage needed an on-site technician in the first 120 days of operation.`
  - **Stat 03:** `2.2M+ m²` · `Masterplan Modeled` · **H3** `Full Terrain & Infrastructure` · `Every home, contour, road and amenity in one twin.`
  - **Stat 04:** `4,600+` · `Homes Modeled` · **H3** `Every Unit Explorable` · `Each of the 4,600+ homes is selectable in the showroom and on the web.`

### SECTION [06]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Logistics & Staging` · `Factory pre-testing in Riyadh` · `Hardware and software load-tested for 72 hours before shipping to Tabuk`
  - `System Continuity` · `Standby edge processing modules` · `Redundant SSD images and automatic reboot keep the showroom running`
  - `One Accountable Partner` · `Single Master Service Agreement` · `Covers the 3D platform, display hardware and sales training`

### SECTION [07]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Mohammed Al Habib (Template B)
- **Target URL Slug:** `/case-studies/mohammed-al-habib`
- **Meta Title:** `Mohammed Al Habib Show Villas Case Study · Manzili`
- **Meta Description:** `Buyers in Riyadh and Jeddah tour Mohammed Al Habib Real Estate's built show villas in 3D, without traveling between the two cities.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Riyadh & Jeddah`
- **H1:** `Show Villas in Two Cities, Toured From Either One`
- **Subheading / Body Copy:** `Buyers in Riyadh and Jeddah tour Mohammed Al Habib Real Estate's built show villas in 3D, so off-plan villa sales no longer depend on traveling between the two cities.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Mohammed Al Habib Real Estate` · `Eyal Al Fursan (Riyadh)` · `Eyal Sadayem (Jeddah)` · `Show Villa 3D Tours`
- **Mockup chips:** `Show villa 3D tours` · `Riyadh` · `Jeddah`

### SECTION [02]: Project Sidebar
- **Client:** `Mohammed Al Habib Real Estate`
- **Project:** `Eyal Al Fursan & Eyal Sadayem · master-planned villa communities within NHC suburbs`
- **Location:** `Al Fursan, Riyadh & Sadayem, Jeddah`
- **Scope:** `Show villa 3D tours · Sales gallery hardware · Sales team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Selling Villas Off-Plan Across Two Cities`
- **Subheading / Body Copy:** `Mohammed Al Habib was building villa communities in Riyadh and Jeddah at the same time. Off-plan buyers wanted to see proportions, privacy and finish quality, but unfinished sites and the distance between galleries slowed their decisions.`
- **Cards / Sub-Elements (table):**
  - **Header:** `Sales Friction` · `The Commercial Risk` · `What Manzili Delivered`
  - **Row 1:** `Hard-to-Reach Sites` · `Families hesitate to visit active construction sites to see unfinished plots.` · `Show villa walkthrough: a true-scale 3D tour of the built show villa, available in city sales centers.`
  - **Row 2:** `Misjudged Room Sizes` · `Buyers misread room volumes, ceiling heights and courtyard privacy on brochures.` · `Dimensionally exact navigation: buyers explore the majlis, family living areas and courtyard light room by room.`
  - **Row 3:** `Distance Between Cities` · `Riyadh buyers looking at Jeddah villas (and vice versa) can't easily visit in person.` · `Cross-gallery web sync: Riyadh advisors present live walkthroughs of Jeddah villas without travel.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `3D Show Villa Tours for Both Cities`
- **Subheading / Body Copy:** `Manzili captured the built show villas at Eyal Al Fursan and Eyal Sadayem and built interactive 3D tours used across Mohammed Al Habib's sales galleries, touch tables and mobile channels.`
- **Cards / Sub-Elements:**
  - **Block 01:** **H3** `Full Interior & Exterior Capture` · `Detailed capture of the majlis, dining halls, family areas and garden courtyards.` · `Accurate daylight across ground, first and roof levels.`
  - **Block 02:** **H3** `Cross-Gallery Integration` · `Riyadh touch screens show Eyal Sadayem, and Jeddah centers show Eyal Al Fursan.` · `Advisors in each city present the other city's inventory directly.`
  - **Block 03:** **H3** `Commercial Touch Screens` · `Responsive touch screens in sales galleries in Riyadh and Jeddah.` · `Family groups review together with smooth zoom and floor switching.`
  - **Block 04:** **H3** `Instant Mobile Follow-Up` · `Private web links sent to buyers by SMS or messaging apps after each visit.` · `Buyers revisit their preferred villa at home with the whole family.`

### SECTION [05]: Sales Team Enablement
- **Eyebrow:** `Sales Team Enablement`
- **H2:** `Five-Minute Walkthroughs for Saudi Families`
- **Subheading / Body Copy:** `Saudi families judge villas on privacy, hosting space and everyday comfort. Manzili trained Mohammed Al Habib's sales teams to run structured 5-minute walkthroughs covering privacy, kitchen flow and master suites.`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `Community & Plot Selection` · `The advisor shows the community plan, villa position, street width and nearby mosques and parks.`
  - **Step 02:** `02` · **H3** `Show Villa Tour & Privacy Check` · `The family walks through the 3D villa and sees how the guest majlis is separated from the private family areas.`
  - **Step 03:** `03` · **H3** `Finishes & Follow-Up Link` · `Materials, bathroom fixtures and roof terraces come next. Before the family leaves, a private web link goes to the buyer's phone.`

### SECTION [06]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `2` · `Cities Connected` · `Riyadh and Jeddah galleries show each other's inventory.` · **Outcome:** `Riyadh buyers see Jeddah villas without traveling.`
  - **Stat 02:** `1:1` · `Show Villa Capture` · `High-precision capture of both built show villas.` · **Outcome:** `Exact majlis proportions, ceiling heights and privacy partitions.`
  - **Stat 03:** `0` · `App Downloads for Buyers` · `Web links delivered by SMS and messaging apps.` · **Outcome:** `Families revisit the 3D villa from home.`
  - **Stat 04:** `99.9%` · `Presentation Uptime` · `Commercial-grade touch displays in every gallery.` · **Outcome:** `Stable presentations through busy weekend sales.`

### SECTION [07]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `Dimensional Accuracy` · `Calibrated LiDAR capture` · `Matches the official architectural drawings`
  - `Performance in Both Cities` · `Low-latency content delivery` · `Fast loading in Riyadh and Jeddah sales centers and on buyers' phones`
  - `Two-City Support` · `Technical maintenance in both regions` · `Engineering monitoring and hardware support in Riyadh and Jeddah`

### SECTION [08]: Related, FAQ & CTA
- Per the template rules.

---

## PAGE: Al Basateen Offices (Template B)
- **Target URL Slug:** `/case-studies/al-basateen-offices`
- **Meta Title:** `Al Basateen Offices Case Study · Manzili`
- **Meta Description:** `Interactive 3D tours of the offices, lobbies and amenities at Al Basateen Offices help leasing teams sign tenants for the 39,387 m² GLA Diriyah campus.`

---

### SECTION [01]: Hero
- **Eyebrow:** `Case Study · Diriyah`
- **H1:** `3D Zone Tours for a Grade-A Office Campus`
- **Subheading / Body Copy:** `Interactive 3D tours of the offices, lobbies and campus amenities at Al Basateen Offices help the leasing team sign corporate tenants in Diriyah.`
- **Primary CTA:** `Plan a Similar Launch` → `/contact-us`
- **Secondary CTA:** `See the Technical Scope` → `#solution`
- **Spec Strip (chips):** `Al Basateen Real Estate Company` · `Grade-A Office Campus` · `39,387 m² GLA` · `King Khalid Road, Diriyah`
- **Mockup chips:** `3D zone tours` · `39,387 m² GLA` · `Diriyah`

### SECTION [02]: Project Sidebar
- **Client:** `Al Basateen Real Estate Company`
- **Project:** `Al Basateen Offices · Grade-A corporate office campus · 39,387 m² GLA on a 98,925 m² site · 1 bay per 23 m² GLA`
- **Location:** `King Khalid Road, Diriyah`
- **Scope:** `3D office zone tours · Campus amenity walkthroughs · Leasing team training`

### SECTION [03]: The Challenge
- **Eyebrow:** `The Challenge`
- **H2:** `Pre-Leasing a Campus Before It's Complete`
- **Subheading / Body Copy:** `Corporate tenants on King Khalid Road wanted proof of the campus's quality: the lobbies, executive drop-offs and courtyards. Brochures and flat floor plans couldn't show it.`
- **Cards / Sub-Elements (table):**
  - **Header:** `Sales Friction` · `The Commercial Risk` · `What Manzili Delivered`
  - **Row 1:** `Static 2D Floor Plans` · `Tenant representatives can't picture entrance scale, lobby finishes or floor flow.` · `3D office zone tours: tenants move through lobbies, typical floors and courtyards.`
  - **Row 2:** `Hidden Campus Amenities` · `Tenants can't judge drop-offs, courtyards or parking access.` · `3D campus walkthroughs: drop-off plazas, landscaping and underground vehicle access.`
  - **Row 3:** `Overseas Decision-Makers` · `Decision-makers in London or Dubai hesitate without visiting Riyadh.` · `No-install WebGL access: tours stream by secure link without firewall issues.`

### SECTION [04]: Our Solution
- **Location / Component:** `id="solution"`
- **Eyebrow:** `Our Solution`
- **H2:** `Interactive 3D Zone Tours for Office Leasing`
- **Subheading / Body Copy:** `Manzili built 3D tours of the Al Basateen campus, covering lobbies, office floors and landscaped courtyards, so leasing teams could show the campus's quality and fill office space.`
- **Cards / Sub-Elements:**
  - **Block 01:** **H3** `3D Office Zone Tours` · `High-resolution tours of lobbies, typical office floors and double-height receptions, at accurate dimensions.` · `Tenants check layouts, ceiling heights and core circulation before completion.`
  - **Block 02:** **H3** `Amenity & Courtyard Walkthroughs` · `Landscaped plazas, outdoor work areas and paths between buildings.` · `Shows corporate occupiers the campus's quality of life.`
  - **Block 03:** **H3** `Underground Parking & Access` · `3D routing shows direct King Khalid Road ramp access, visitor drop-offs and executive parking.` · `Confirms the 1 bay per 23 m² GLA parking ratio for tenant representatives.`
  - **Block 04:** **H3** `Multi-Tenant Availability Viewer` · `Leasing status, floor allocations and suite boundaries shown inside the tour.` · `Leasing teams present available suites and contiguous floors live.`

### SECTION [05]: Sales Team Enablement
- **Eyebrow:** `Leasing Team Enablement`
- **H2:** `Leasing Presentations for Corporate Brokers`
- **Subheading / Body Copy:** `Manzili trained Al Basateen's leasing team and appointed brokers to guide tenant representatives through the 3D tours on touch displays and in web sessions.`
- **Cards / Sub-Elements:**
  - **Step 01:** `01` · **H3** `Campus & Connectivity` · `The advisor introduces the Diriyah location, airport and ring road access, and campus amenities.`
  - **Step 02:** `02` · **H3** `Zone & Typical Floor Walkthrough` · `Next, the tour moves through lobbies, core layouts, natural light and floor flow to answer tenant questions.`
  - **Step 03:** `03` · **H3** `Amenities & Commercial Terms` · `The session ends with courtyard amenities, parking allocation and a review of the lease documents.`

### SECTION [06]: Delivery Outcomes
- **Eyebrow:** `Reported Performance` · **H2:** `Delivery Outcomes`
- **Cards / Sub-Elements:**
  - **Stat 01:** `39,387 m²` · `GLA Modeled` · `Full 3D coverage of lobbies, office zones and floors.` · **Outcome:** `The whole campus visible digitally.`
  - **Stat 02:** `100%` · `Office Zone Coverage` · `Every lobby, typical floor and courtyard is navigable.` · **Outcome:** `Clear answers on layout and space for tenant representatives.`
  - **Stat 03:** `0` · `Plugins or Installs Required` · `Pure browser-based WebGL.` · **Outcome:** `Multinational committees inspect remotely behind corporate firewalls.`
  - **Stat 04:** `1:1` · `Showroom & Web Parity` · `The same tour quality on touch screens and executive laptops.` · **Outcome:** `Consistent presentation in every leasing channel.`

### SECTION [07]: Delivery Standards
- **Eyebrow:** `Quality & Compliance` · **H2:** `Delivery Standards`
- **Table:**
  - `BOMA Measurement Alignment` · `Precise area verification` · `Accurate rentable and usable areas reduce square-meter disputes after signing`
  - `Corporate IT Compatibility` · `Pure WebGL, no plugins` · `Works behind strict bank and corporate proxy networks`
  - `In-Kingdom Hosting` · `KSA data center` · `Lease negotiations and terms hosted in-Kingdom under the Saudi PDPL`

### SECTION [08]: Related, FAQ & CTA
- Per the template rules.

---

# PART 5 — Contact, Privacy & Terms

## PAGE: Contact / RFP Intake
- **Target URL Slug:** `/contact-us` (301 from `/contact`)
- **Meta Title:** `Request Technical Scoping · Manzili`
- **Meta Description:** `Tell us about your off-plan launch. A solutions lead replies within 24 hours, Sunday–Thursday. Best fit: 300+ units or 50,000+ m² commercial GFA.`

---

### SECTION [01]: Hero
- **Location / Component:** Page hero, copy left + "fit check" card right
- **Build note:**
  - Exactly one H1 on the page.
  - "Get in Touch With Us" must not come back.
  - Replace the right-hand card's rows with the strings below. Drop the "Reviewing / Ready / Live" status pills.
- **Breadcrumb:** `Home` → `/` · `Technical Scoping`
- **Eyebrow:** `Technical Scoping`
- **H1:** `Request Technical Scoping`
- **Subheading / Body Copy:** `Tell us about your project, and a solutions lead will scope the digital twin, showroom hardware and launch support it needs. We meet at your offices, in person in Riyadh and across the Kingdom, or online.`
- **Secondary CTA (in-page scroll):** `Start Your Request` → `#intake`
- **Fit-Check Card:**
  - **Card title:** `Best fit`
  - **Row 1:** `Project scale` · `300+ residential units or 50,000+ m² commercial GFA`
  - **Row 2:** `Submitted by` · `The developer entity`
  - **Row 3:** `Reply time` · `Within 24 hours, Sunday–Thursday`
  - **Card footer:** `Smaller projects are welcome, and we'll tell you if we're the right fit.`

### SECTION [02]: Intake Form
- **Location / Component:** `id="intake"`, form card
- **Build note:**
  - **Form length:** the form is 11 fields in 3 fieldsets, replacing the current 15. Removed: Development Location (select), Total Development Scale (tier radios), Asset Typology Mix, Target Launch Window (select), Current Sales Staging Infrastructure, Infrastructure Pillars Required, Target Enterprise Software Integrations and Strategic Scoping Brief.
  - **Labels:** sentence case. Required asterisk with no space (`Full name*`).
  - **Validation:** shows on blur, in red under the field, keeping the user's input.
  - **Spam trap:** keep the hidden "Company website" field. It must stay invisible, `aria-hidden="true"` and `tabindex="-1"`, and never visible to users.
  - **Text limit:** all text inputs are limited to 120 characters.
- **H2:** `Tell Us About Your Launch`
- **Subheading / Body Copy:** `Best fit: 300+ residential units or 50,000+ m² commercial GFA · Submitted by the developer entity`
- **Reassurance line (under H2, small):** `A solutions lead replies within 24 hours, Sunday–Thursday.`
- **Required legend:** `* Required`

#### Fieldset 01: About You
- **Legend:** `01 · About you`
- **Cards / Sub-Elements:**
  - **Field 1:** Label `Full name*` · Placeholder `e.g. Sultan Al-Otaibi` · Type `text` · `autocomplete="name"`
  - **Field 2:** Label `Job title*` · Placeholder `e.g. VP of Sales` · Type `text` · `autocomplete="organization-title"`
  - **Field 3:** Label `Developer entity*` · Placeholder `Registered company name` · Helper `Must be the developer, not a broker or agency.` · Type `text` · `autocomplete="organization"`
  - **Field 4:** Label `Work email*` · Placeholder `name@company.sa` · Helper `We reply to this address.` · Type `email` · `autocomplete="email"`
  - **Field 5:** Label `Mobile*` · Fixed prefix `+966` · Placeholder `5X XXX XXXX` · Helper `For scheduling only.` · Type `tel` · `autocomplete="tel-national"`

#### Fieldset 02: Your Project
- **Legend:** `02 · Your project`
- **Cards / Sub-Elements:**
  - **Field 6:** Label `Masterplan name & location*` · Placeholder `e.g. Al Narjis Residences, North Riyadh` · Type `text`
  - **Field 7:** Label `Target off-plan launch date*` · Placeholder `MM / YYYY` · Helper `An estimate is fine.` · Type `month picker`
  - **Field 8:** Label `Project scale (units or GFA, m²)*` · Placeholder `e.g. 450 units or 62,000 m² GFA` · Helper `Best fit: 300+ units or 50,000+ m² GFA.` · Type `text`

#### Fieldset 03: Scope
- **Legend:** `03 · Scope`
- **Cards / Sub-Elements:**
  - **Field 9:** Label `Current technical asset state*` · Placeholder `Select one` · Type `select`
    - **Options:** `BIM / Revit model available` · `CAD drawings and renders only` · `Existing 3D model or digital twin (needs upgrade)` · `Concept stage, no 3D assets yet`
  - **Field 10:** Label `Wafi licensing status*` · Placeholder `Select one` · Type `select`
    - **Options:** `Approved to sell` · `Application submitted` · `Preparing application` · `Not sure`
  - **Field 11:** Label `Hardware & showroom scope*` · Helper `Select all that apply` · Type `multi-select (checkboxes)`
    - **Options:** `Touch tables` · `LED video wall` · `Immersive room` · `Hologram display` · `GPU workstations` · `Exhibition stand (Cityscape / RestateX)` · `Software only, no hardware`

#### Consent, Submit & NDA Note
- **Consent checkbox (required):** `I agree that Manzili may process this information to respond to my request, as described in the Privacy Policy.` (Make "Privacy Policy" a link → `/privacy`, opening in a new tab.)
- **Primary CTA (submit button):** `Request Technical Scoping`
- **NDA note (below button, static text):** `Project files are only requested after an NDA is signed.`

### SECTION [03]: Inline Validation & Error Messages (12 strings)
- **Location / Component:** Under each field, in red. The summary appears at the top of the form on submit.
- **Build note:**
  - Errors 5 and 9 are **warnings**. Show them in amber and still allow submit.
  - On submit, focus moves to the first error.
  - Every error is linked to its field with `aria-describedby`.
- **Cards / Sub-Elements:**
  - **Error 1 — Required field empty:** `Enter your [field name].` Field-name forms:
    - `Enter your full name.`
    - `Enter your job title.`
    - `Enter your developer entity.`
    - `Enter your work email.`
    - `Enter your mobile number.`
    - `Enter your masterplan name and location.`
    - `Enter your target launch date.`
    - `Enter your project scale.`
  - **Error 2 — Required select empty:** `Choose an option.`
  - **Error 3 — Multi-select empty:** `Choose at least one, or select Software only.`
  - **Error 4 — Email format invalid:** `Enter an email like name@company.sa.`
  - **Error 5 — Free-mail domain (gmail, hotmail, outlook, yahoo) — warning:** `Use your company email so we can verify the developer entity.`
  - **Error 6 — Mobile invalid:** `Enter a Saudi mobile number starting with 5, e.g. 5X XXX XXXX.`
  - **Error 7 — Launch date in the past:** `Choose a month from now onward.`
  - **Error 8 — Project scale has no number:** `Add a unit count or area in m².`
  - **Error 9 — Project scale below threshold (if parsed) — warning:** `Projects under 300 units are usually outside our scope. You can still submit and we'll advise.`
  - **Error 10 — Consent unchecked:** `Agree to the Privacy Policy to continue.`
  - **Error 11 — Character limit reached (text fields, 120):** `Keep this under 120 characters.`
  - **Error 12 — Error summary on submit:** `Check the [n] highlighted fields.` (singular: `Check the highlighted field.`)

### SECTION [04]: Submission States (6 states)
- **Location / Component:** Submit button + form container
- **Cards / Sub-Elements:**
  - **State 1 — Button, loading:** `Submitting…` (button disabled, spinner)
  - **State 2 — Success, replaces form:**
    - **Heading (H2):** `Request Received`
    - **Body:** `A solutions lead will email you within 24 hours, Sunday–Thursday. Reference: [MZ-0000].`
    - **Link:** `Explore case studies while you wait` → `/case-studies`
  - **State 3 — Success toast (if the form stays visible):** `Request sent. We'll reply within 24 hours.`
  - **State 4 — Server or network failure:**
    - **Message:** `We couldn't send your request. Check your connection and try again, or email sales@manzili.sa.` (Link `sales@manzili.sa` → `mailto:sales@manzili.sa`.)
    - **Button:** `Try again`
  - **State 5 — Duplicate submission (same email, 24 h):** `We already have a request from this email. We'll be in touch shortly.`
  - **State 6 — Spam check failed:** `Please confirm you're not a robot and submit again.`

### SECTION [05]: What Happens Next
- **Location / Component:** 3 numbered steps beside or below the form, plus the direct-contact line
- **Eyebrow:** `How It Works`
- **H2:** `What Happens Next`
- **Cards / Sub-Elements:**
  - **Step 1:** `1` · **H3** `We Review Your Request` · `We confirm the project and the developer entity, and a solutions lead replies within 24 hours, Sunday–Thursday.`
  - **Step 2:** `2` · **H3** `Technical Scoping Session` · `A 60-minute session at your offices or online, where our solutions team reviews your BIM files and showroom needs.`
  - **Step 3:** `3` · **H3** `Proposal & Master Service Agreement` · `We send a proposal and one Master Service Agreement covering the software, hardware, training and launch support.`
- **Direct-contact line:** `Prefer to talk first?` · `+966 53 484 4986` → `tel:+966534844986` · `sales@manzili.sa` → `mailto:sales@manzili.sa`

### SECTION [06]: Contact Details
- **Location / Component:** Details list left + map card right
- **Build note:**
  - **Map button:** use the Google Business Profile link, not the generic Maps search.
  - **Overlay:** the "2-hour Riyadh dispatch radius" overlay becomes the label below.
  - **Email links:** split the single "support@ / sales@" link into two links. Today both open the sales mailbox.
- **Eyebrow:** `Contact`
- **H2:** `We Come to You`
- **Subheading / Body Copy:** `Our Riyadh office is administrative. We meet developers at their own offices and sales centers, in person in Riyadh and across the Kingdom, or online.`
- **Cards / Sub-Elements:**
  - **Office:** `Al Rayyan District, Riyadh 14212, Saudi Arabia` → `https://share.google/dmisMPh9YQR4xVIoT`
  - **Phone:** `+966 53 484 4986` → `tel:+966534844986`
  - **WhatsApp:** `+966 53 484 4986` → `https://wa.me/966534844986`
  - **Sales & scoping:** `sales@manzili.sa` → `mailto:sales@manzili.sa`
  - **Client support:** `support@manzili.sa` → `mailto:support@manzili.sa`
  - **Hours:** `Sunday–Thursday, 9:00–18:00 (Riyadh time)`
  - **Launch-day coverage:** `2-hour dispatch on launch days · 4-hour standard support SLA`
- **Map card label:** `Manzili · Al Rayyan District, Riyadh` · overlay `Administrative office`
- **Secondary CTA:** `View on Google` → `https://share.google/dmisMPh9YQR4xVIoT`

---

## PAGE: Privacy Policy
- **Target URL Slug:** `/privacy`
- **Meta Title:** `Privacy Policy · Manzili`
- **Meta Description:** `How Manzili collects, uses, hosts and protects personal data under the Saudi Personal Data Protection Law (PDPL), and how to exercise your rights.`

---

### SECTION [01]: Page Header
- **Build note:** Replace the current H1, subheading, details list and chips with these strings.
- **Breadcrumb:** `Home` → `/` · `Privacy Policy` (current page)
- **Eyebrow:** `Legal`
- **H1:** `Privacy Policy`
- **Subheading / Body Copy:** `How we collect, use, host and protect personal data across our website, the Connected Sales Environment, digital twins and showroom hardware.`
- **Details list:**
  - `Effective date` · `October 19, 2026`
  - `Operating entity` · `IT Home Solutions Company, trading as Manzili (CR 1010797640)`
  - `Registered office` · `Al Rayyan District, Riyadh 14212, Saudi Arabia`
  - `Governing law` · `Saudi Personal Data Protection Law (PDPL), Royal Decree No. M/19`
- **Chips:** `In-Kingdom hosting under Saudi PDPL` · `In-Kingdom data storage`

### SECTION [02]: Body
- **Build note:** Replace the full body text. The "On this page" links use the H2 text below and keep these anchor IDs. "Item 1", "Item 2"… are numbered list items: the number comes from the list styling, so paste only the text.

#### 1. Who We Are · `#governance`
- **H2:** `1. Who We Are`
- **Paragraph:** `IT Home Solutions Company, trading as Manzili (CR 1010797640) ("Manzili", "we", "our") is dedicated to protecting the privacy, security, and digital sovereignty of institutional real estate clients, commercial sales teams, and prospective off-plan property buyers.`
- **Paragraph:** `This policy explains how we handle personal data collected through our website, the Connected Sales Environment (CSE), digital twin masterplans and showroom hardware controllers, in line with the Saudi Personal Data Protection Law (PDPL).`
- **Paragraph:** `This policy is published in Arabic and English. If the two versions conflict, the Arabic version prevails.`

#### 2. Information We Collect · `#collected`
- **H2:** `2. Information We Collect`
- **H3:** `A. Technical Scoping Form Data`
- **Paragraph:** `When developers, asset managers, or family offices submit our Technical Scoping form, we collect:`
- **Bullet:** `Professional Identity: Full name, job title and developer entity.`
- **Bullet:** `Contact Details: Work email and mobile number.`
- **Bullet:** `Project Details: Masterplan name and location, target launch date, project scale, technical asset state, Wafi licensing status and hardware scope.`
- **H3:** `B. Buyer Activity in the Connected Sales Environment`
- **Paragraph:** `When a developer uses the Connected Sales Environment (CSE), it records how buyers interact with the 3D experience, to help the developer's sales team understand buyer interest:`
- **Bullet:** `Spatial Dwell Metrics: Time spent evaluating specific tower typologies, residential floor levels, and unit orientations.`
- **Bullet:** `Unit Interaction Logs: Floor plan configuration toggles, balcony sightline adjustments, and finishing package selections.`
- **Bullet:** `Identity Verification: Nafath verification tokens and timestamps for timed unit holds and generated SPAs (we do not store raw biometric data or national ID credentials on public web servers).`
- **H3:** `C. Technical Logs & Cookies`
- **Bullet:** `Enterprise Network Telemetry: IP addresses, browser engine versions, WebGL hardware rendering capabilities, and session timestamps used to optimize 3D streaming performance.`
- **Bullet:** `Essential Cookies & Local Session Storage: Cryptographic session tokens and interface preference cookies necessary to maintain showroom and multi-screen state continuity.`

#### 3. Why We Process It (Lawful Basis) · `#lawful-basis`
- **H2:** `3. Why We Process It (Lawful Basis)`
- **Paragraph:** `In compliance with the Saudi PDPL, all data collection is executed under clear, lawful bases:`
- **Item 1:** `Contractual Performance & Pre-Contractual Scoping: Evaluating developer RFP submissions, configuring custom WebGL digital twin builds, and deploying sales center hardware integrations.`
- **Item 2:** `Transaction Support: Verifying buyer identity for timed unit holds and generating Sales and Purchase Agreements (SPAs) for the developer, in workflows built for REGA and Wafi off-plan requirements.`
- **Item 3:** `Legitimate Commercial Analytics: Aggregating anonymous spatial telemetry to provide master developers with unit absorption heatmaps and buyer demand insights.`
- **Item 4:** `Legal & Regulatory Compliance: Fulfilling statutory obligations set by REGA, the authority responsible for the Wafi off-plan program, and Saudi courts.`

#### 4. Where Data Is Hosted · `#sovereignty`
- **H2:** `4. Where Data Is Hosted`
- **Item 1:** `In-Kingdom Hosting: In strict adherence to Saudi PDPL cross-border transfer restrictions, all sensitive buyer transaction data, Nafath authentication records, and client project databases are hosted on cloud infrastructure located in Saudi Arabia.`
- **Item 2:** `No Data Commercialization: Manzili does not monetize, sell, lease, or trade personal or institutional commercial data to third-party ad networks, lead brokers, or unauthorized entities.`

#### 5. Service Providers & Integrations · `#sub-processors`
- **H2:** `5. Service Providers & Integrations`
- **Paragraph:** `We share data only with the following service providers, under data processing agreements:`
- **Bullet:** `National Unified Portal (Nafath): For biometric and national identity verification during off-plan digital SPA execution.`
- **Bullet:** `Enterprise CRM / ERP Systems: Direct bi-directional API synchronizations with client CRM and ERP instances (such as Salesforce, Yardi Voyager, SAP RE-FX and HubSpot).`
- **Bullet:** `Spatial Capture Engines: Matterport Inc. (used for real-world ready-built scanning and model unit capture, subject to strict enterprise privacy controls).`
- **Bullet:** `In-Kingdom Cloud Infrastructure: Data centers located in Saudi Arabia.`

#### 6. Information Security · `#security`
- **H2:** `6. Information Security`
- **Paragraph:** `Manzili applies defense-in-depth technical and organizational measures designed to protect data in transit and at rest:`
- **Bullet:** `Data Encryption: TLS 1.3 cryptographic protection for all data in transit; AES-256 encryption for all data at rest.`
- **Bullet:** `Access Control & RBAC: Role-based access governance with mandatory multi-factor authentication (MFA) across all administrative portals.`
- **Bullet:** `Hardware Showroom Isolation: Sales center kiosks and command centers utilize partitioned, zero-trust VLAN architecture to safeguard local showroom hardware from public network exposure.`

#### 7. Your Rights Under the PDPL · `#rights`
- **H2:** `7. Your Rights Under the PDPL`
- **Paragraph:** `Under the PDPL, you have the following rights over your personal data:`
- **Bullet:** `Right to Know / Access: The right to obtain confirmation regarding whether personal data is processed and request a copy of relevant records.`
- **Bullet:** `Right to Rectification: The right to request correction of inaccurate, outdated, or incomplete personal information.`
- **Bullet:** `Right to Destruction: The right to request the permanent deletion of personal data when the original processing purpose has expired, subject to legal retention requirements.`
- **Bullet:** `Right to Withdraw Consent: The right to withdraw previously granted consent at any time for non-statutory data processing.`
- **Paragraph:** `To exercise any of these statutory rights, submit a formal request to our dedicated Data Protection Officer at: support@manzili.sa.` → `mailto:support@manzili.sa`

#### 8. How Long We Keep Data · `#retention`
- **H2:** `8. How Long We Keep Data`
- **Bullet:** `Technical Scoping Requests: Retained for the duration of the developer evaluation and contracting process, or archived after 24 months if no contractual engagement ensues.`
- **Bullet:** `Off-Plan Transaction Records: Retained for the period required by Saudi law and the developer's instructions.`
- **Bullet:** `Web Analytics & Session Telemetry: Anonymized and aggregated after 90 days.`

#### 9. Contact Our Data Protection Officer · `#dpo`
- **H2:** `9. Contact Our Data Protection Officer`
- **Paragraph:** `Data Protection Officer: IT Home Solutions Company, trading as Manzili (CR 1010797640)`
- **Bullet:** `Registered office: Al Rayyan District, Riyadh 14212, Saudi Arabia`
- **Bullet:** `Privacy requests: support@manzili.sa` → `mailto:support@manzili.sa`
- **Bullet:** `Sales: sales@manzili.sa` → `mailto:sales@manzili.sa`
- **Bullet:** `Phone: +966 53 484 4986` → `tel:+966534844986`

---

## PAGE: Terms of Service
- **Target URL Slug:** `/terms`
- **Meta Title:** `Terms of Service · Manzili`
- **Meta Description:** `The terms that govern use of the Manzili website, digital twins, web platforms and the Connected Sales Environment.`

---

### SECTION [01]: Page Header
- **Build note:** Replace the current H1, subheading, details list and chips with these strings.
- **Breadcrumb:** `Home` → `/` · `Terms of Service` (current page)
- **Eyebrow:** `Legal`
- **H1:** `Terms of Service`
- **Subheading / Body Copy:** `The terms that govern use of the Manzili website, digital twins, web platforms and the Connected Sales Environment.`
- **Details list:**
  - `Effective date` · `October 19, 2026`
  - `Operating entity` · `IT Home Solutions Company, trading as Manzili (CR 1010797640)`
  - `Registered office` · `Al Rayyan District, Riyadh 14212, Saudi Arabia`
  - `Built for` · `REGA and Wafi off-plan workflows · Saudi PDPL`
- **Chips:** `In-Kingdom hosting under Saudi PDPL` · `Built for REGA and Wafi off-plan workflows`

### SECTION [02]: Body
- **Build note:** Replace the full body text. The "On this page" links use the H2 text below and keep these anchor IDs. "Item 1", "Item 2"… are numbered list items: the number comes from the list styling, so paste only the text.

#### 1. Acceptance of These Terms · `#acceptance`
- **H2:** `1. Acceptance of These Terms`
- **Paragraph:** `These Terms of Service ("Terms") govern institutional access to, and utilization of, the Manzili website, digital twins, interactive masterplans, showroom software, web platforms and the Connected Sales Environment (CSE) owned and operated by IT Home Solutions Company, trading as Manzili (CR 1010797640) ("Manzili", "we", "us", or "our").`
- **Paragraph:** `By accessing this website, submitting a Technical Scoping request, accessing our connected sales environments, or licensing our spatial visualization platforms, you ("Enterprise Client", "Developer", "Authorized Counterparty", or "User") agree to be bound by these Terms and all applicable laws and regulations of the Kingdom of Saudi Arabia.`
- **Paragraph:** `If you represent an institutional real estate developer, asset management firm, or commercial enterprise, you warrant that you possess the requisite corporate authority to bind your organization to these Terms.`

#### 2. Our Services · `#scope`
- **H2:** `2. Our Services`
- **Paragraph:** `Manzili provides enterprise sales enablement, digital twin visualization, hardware-software integration, and transactional workflow infrastructure tailored specifically for off-plan and completed real estate portfolios within Saudi Arabia.`
- **Item 1:** `Enterprise Infrastructure Partner: Manzili operates as an enterprise technology and implementation counterparty. Unless expressly stipulated under a separate bilateral joint-venture agreement, Manzili does not act as a licensed real estate brokerage, financial escrow agent, or off-plan underwriting entity.`
- **Item 2:** `Services Provided: Manzili provides WebGL digital twins, synchronized CRM middleware, AV showroom integrations, VIP launch command execution, and Matterport lifecycle capture. All deployments are subject to formal statements of work (SOW) and enterprise service level agreements (SLAs).`

#### 3. Intellectual Property · `#ip`
- **H2:** `3. Intellectual Property`
- **Item 1:** `Ownership of Core IP: Manzili retains exclusive ownership, title, copyright, and global intellectual property rights in and to all proprietary codebases, WebGL rendering pipelines, spatial telemetry algorithms, hardware controller interfaces, UI/UX frameworks, graphics, trademarks, logos, and original documentation. This includes the 3D models and digital twins Manzili builds, unless the Master Service Agreement states otherwise.`
- **Item 2:** `Protected Trademarks: "Manzili", "Manzili CSE", "Connected Sales Environment", the Manzili logomark, and associated system designations are trademarks of IT Home Solutions Company (CR 1010797640). No entity or individual may display, replicate, adapt, or utilize these identifiers without prior written corporate authorization.`
- **Item 3:** `Client Asset Ownership: Enterprise Developers retain full title and intellectual property rights over their respective architectural CAD/BIM files, masterplan engineering drafts, brand assets, and proprietary unit pricing matrices provided to Manzili for digital twin ingestion.`

#### 4. Visualization Disclaimer · `#disclaimer`
- **H2:** `4. Visualization Disclaimer`
- **Item 1:** `Representational Fidelity: The 3D digital twins, interactive masterplans, lighting simulations, and virtual tours engineered by Manzili are high-fidelity architectural visualizations designed to communicate spatial layout, unit orientation, and masterplan scale.`
- **Item 2:** `Engineering & Construction Tolerances: While Manzili models directly from verified BIM/CAD files, physical construction is subject to civil engineering tolerances, municipal approvals, materials substitution, and contractor execution. Final unit dimensions, finishes, and spatial configurations are governed strictly by the developer's registered Wafi Off-Plan Sales and Purchase Agreement (SPA).`
- **Item 3:** `Non-Endorsement of Non-Original Content: Any third-party market data, infrastructure timelines, or external municipal plans referenced on this platform are provided for contextual dissemination only. Manzili disclaims liability for inaccuracies in developer-supplied data or government infrastructure planning adjustments.`

#### 5. Transactions, REGA & Wafi · `#transactions`
- **H2:** `5. Transactions, REGA & Wafi`
- **Item 1:** `Regulatory Alignment: When deployed within the Manzili Connected Sales Environment (CSE), digital reservation workflows, Nafath identity verification, milestone payment schedules, and SPA auto-generation are built for REGA and Wafi off-plan workflows.`
- **Item 2:** `Developer Commercial Responsibility: The developer remains exclusively responsible for the legal validity of its Wafi off-plan license, the accuracy of its project bank escrow accounts, and the commercial fulfillment of reservations made through timed unit holds on the platform.`

#### 6. Technical Scoping Requests · `#rfp`
- **H2:** `6. Technical Scoping Requests`
- **Item 1:** `Company Email: Manzili may ask for a company email address to verify the developer entity before scoping begins.`
- **Item 2:** `Confidentiality of Requests: All architectural briefs, unit inventories, and commercial timelines submitted through our Technical Scoping form are treated as confidential and handled under the Saudi PDPL. Project files are requested only after an NDA is signed.`

#### 7. Limitation of Liability · `#liability`
- **H2:** `7. Limitation of Liability`
- **Item 1:** `To the maximum extent permitted under Saudi law, Manzili shall not be liable for any indirect, incidental, consequential, or special damages—including loss of commercial revenue, anticipated sales, or event interruption—arising from the use or inability to use our platform or exhibition hardware.`
- **Item 2:** `Hardware deployed under our Showroom Hardware and Launch Command services operates under dedicated enterprise SLAs. Liability for exhibition network latency or hardware downtime caused by third-party event telecom congestion or force majeure events is expressly limited to the terms of the applicable commercial contract.`

#### 8. Infringement Notices · `#infringement`
- **H2:** `8. Infringement Notices`
- **Paragraph:** `If any intellectual property rights holder believes that content published on this website infringes upon their protected legal rights, a formal notice must be submitted to our corporate desk containing:`
- **Bullet:** `Verifiable proof of ownership and legal authorization.`
- **Bullet:** `Precise location (URL) and identification of the protected work.`
- **Bullet:** `Full corporate contact details of the legal claimant.`
- **Paragraph:** `Notices must be directed in writing to support@manzili.sa or to our registered office.` → `mailto:support@manzili.sa`

#### 9. Governing Law & Disputes · `#law`
- **H2:** `9. Governing Law & Disputes`
- **Paragraph:** `These Terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws and commercial regulations of the Kingdom of Saudi Arabia.`
- **Paragraph:** `Any dispute, controversy, or claim arising out of or relating to these Terms shall be referred to and resolved by the competent Commercial Courts in Riyadh, Kingdom of Saudi Arabia.`
- **Paragraph:** `These Terms are published in Arabic and English. If the two versions conflict, the Arabic version prevails.`

#### 10. Legal Contact · `#contact`
- **H2:** `10. Legal Contact`
- **Paragraph:** `IT Home Solutions Company, trading as Manzili (CR 1010797640)`
- **Bullet:** `Registered office: Al Rayyan District, Riyadh 14212, Saudi Arabia`
- **Bullet:** `Legal & support: support@manzili.sa` → `mailto:support@manzili.sa`
- **Bullet:** `Sales: sales@manzili.sa` → `mailto:sales@manzili.sa`
- **Bullet:** `Phone: +966 53 484 4986` → `tel:+966534844986`
