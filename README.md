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

## Brand system

Official palette (brand kit): **Blue #069AD7 · Grey #373535 · Orange #F28E21 · Light Grey #EFEFEF**.
Tokens live in `tailwind.config.ts`. Brand blue and orange are below 4.5:1 on white, so text uses
AA shades: `brand-dark` #0474A1 (links, small text, primary buttons), `brand-deep` #045A86
(dark surfaces), `accent-dark` #9D5C15 (small orange text). Body text `body` #555353, captions
`muted` #6B6969. Use plain `brand` / `accent` only for icons, fills and large display type.

Buttons: one system in `src/components/ui/Button.tsx` — `primary`/`secondary` on light surfaces,
`light`/`outline` on blue surfaces, all 48px with 15px labels.

Logos: `public/brand/` (colour, white, vertical, icon). Favicons, Apple icon and share image are
in `src/app/` (`favicon.ico`, `icon.svg`, `apple-icon.png`, `opengraph-image.png`, `twitter-image.png`).
Replace `opengraph-image.png` / `twitter-image.png` (1200×630) when the final share image arrives.

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
free webmail domains, then emails the submission via Resend and/or forwards it to a
webhook. Configure in Vercel → Settings → Environment Variables (see `.env.example`):
`RESEND_API_KEY`, `RFP_TO_EMAIL`, `RFP_FROM_EMAIL` (verified domain), optional
`RFP_WEBHOOK_URL`. With nothing configured the form shows an error instead of
silently dropping submissions.

## SEO / indexing

`robots.txt`, `sitemap.xml` and `manifest.webmanifest` are generated. The site is
**noindex by default** (staging). Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and
`NEXT_PUBLIC_SITE_URL=https://your-domain` only on the live production domain.

## Social links

Add profile URLs in `src/content/site.ts` → `socials`. Icons with an empty URL are hidden.

Matterport tours (Pillar 06): paste the share URL into `embedUrl` in `pillar-06.ts`.


## Languages (English + Arabic) and copy

- English pages: `src/app/(en)/`. Arabic pages: `src/app/(ar)/ar/`. Each group has its own root
  layout, so Arabic pages render `<html lang="ar" dir="rtl">` (Cairo, 1.75 line height).
- One view component per page (`src/components/views/`) renders either language.
- **All copy comes from Buddy's final files** in `/copy` (`Manzili_Website_Copy_EN.md`, `..._AR.md`).
  They are converted to `src/content/copy/{en,ar}/*.json`. Never edit the JSON by hand; to update
  copy, replace the .md files and run:

  ```bash
  bash scripts/copy/run.sh
  ```
- `lp(locale, path)` builds locale-aware links; `pageMetadata(locale, slug)` sets title, description,
  canonical `https://manzili.sa/...`, hreflang (en / ar / x-default) and Open Graph.
- Routes: `/platform-cse`, `/contact-us`; `/solutions` removed. 301 redirects in `next.config.mjs`.

## Accessibility & motion

Skip link, keyboard-accessible menus and FAQ, visible focus rings, and all
animation respects the visitor's "reduce motion" setting.
