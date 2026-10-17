# Manzili Enterprise Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Node 18.18+ (Node 20 LTS recommended). Deploys to Vercel with zero config.

## Where things live

| What | Where |
| --- | --- |
| All homepage text | `src/content/home.ts` |
| Nav, pillars, footer, contact details | `src/content/site.ts` |
| Real photos (optional) | `src/content/images.ts` + `public/images/` |
| Colours, type scale, radii | `tailwind.config.ts` |
| Homepage sections | `src/components/home/*` |
| Navbar / Footer / Logo | `src/components/layout/*` |
| Illustrations (SVG) | `src/components/art/*` |
| Product UI mockups | `src/components/mockups/*` |

## Using real photos

Every visual ships with a built-in illustration. To swap one for a photo, put the
file in `public/images/` and set its path in `src/content/images.ts`, e.g.
`hero: "/images/hero.jpg"`. Images are served through `next/image` (AVIF/WebP).

## Fonts

**Cairo** everywhere (brand rule), loaded via `next/font` with Latin + Arabic
subsets. Type scale follows the brief: H1 ExtraBold 800 / 1.12, H2 Bold 700 / 1.20,
H3 SemiBold 600 / 1.30, H4 SemiBold 600 / 1.35, Lead Medium 500 / 1.50,
Body Regular 400 / 1.65, Eyebrow SemiBold 600 / +0.05em.

## Routes

| Route | Content file |
| --- | --- |
| `/` | `src/content/home.ts` |
| `/solutions` | `src/content/pages/solutions.ts` |
| `/products/connected-sales-environment` | `src/content/pages/cse.ts` |
| `/pillars/[slug]` (6 pages) | `src/content/pillars/pillar-01.ts` … `pillar-06.ts` |
| `/case-studies` | `src/content/pages/case-studies-hub.ts` |
| `/case-studies/[slug]` (10 pages) | `src/content/case-studies/*.ts` |
| `/contact` | `src/content/pages/contact.ts` |
| `/privacy`, `/terms` | `src/content/legal/privacy.ts`, `terms.ts` |

Pillar pages and case studies each render from one template and are statically
generated. To add a case study, copy one file in `src/content/case-studies/`,
edit it, and add it to `index.ts` — it appears on the hub automatically.

## Visuals

Illustrations are animated isometric "digital twin" scenes
(`src/components/art/IsoScene.tsx`) — each case study picks a `variant` and `seed`
so every project gets its own masterplan. The footer skyline
(`SkylineArt.tsx`) animates windows, aviation beacons and bridge traffic.
Real photos can still replace any visual via `src/content/images.ts`.

## RFP form (/contact)

The form posts to `/api/rfp`, which validates every field server-side and rejects
free webmail domains. Set `RFP_WEBHOOK_URL` (see `.env.example`) to forward each
submission to your CRM, Zapier/Make, Slack or email automation. Without it,
submissions are only logged on the server.

Matterport tours (Pillar 06): paste the share URL into `embedUrl` in `pillar-06.ts`.

## Accessibility & motion

Skip link, keyboard-accessible menus and FAQ, visible focus rings, and all
animation respects the visitor's "reduce motion" setting.
