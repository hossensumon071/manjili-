# Manzili Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · English + Arabic (RTL)

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Node 18.18+ (Node 20 LTS recommended). Deploys to Vercel with zero config.

## Routes (23 pages × 2 languages)

| English | Arabic | View |
| --- | --- | --- |
| `/` | `/ar` | `HomeView` |
| `/platform-cse` | `/ar/platform-cse` | `PlatformView` |
| `/pillars/[slug]` (6) | `/ar/pillars/[slug]` | `PillarView` |
| `/case-studies` | `/ar/case-studies` | `CaseIndexView` |
| `/case-studies/[slug]` (10) | `/ar/case-studies/[slug]` | `CaseStudyView` |
| `/contact-us` | `/ar/contact-us` | `ContactView` |
| `/privacy`, `/terms` | `/ar/privacy`, `/ar/terms` | `LegalPage` |

- English routes live in `src/app/(en)/`, Arabic in `src/app/(ar)/ar/`. Each group has its own root
  layout, so Arabic pages render `<html lang="ar" dir="rtl">`. Switching language is a full page
  load by design (different root layout).
- Views are in `src/components/views/` and render either language from a `locale` prop.
- 301 redirects (`next.config.mjs`): `/products/connected-sales-environment` → `/platform-cse`,
  `/contact` → `/contact-us`, `/solutions` → `/#pillars` (and the `/ar` equivalents).

## Copy (English + Arabic)

All page text comes from Buddy's final copy files in `/copy`:
`Manzili_Website_Copy_EN.md` and `Manzili_Website_Copy_AR.md`.

They are converted to `src/content/copy/{en,ar}/*.json`. **Never edit the JSON by hand.** To update copy,
replace the `.md` files and run:

```bash
bash scripts/copy/run.sh
```

| What | Where |
| --- | --- |
| Page copy (generated) | `src/content/copy/{en,ar}/` |
| Copy loader | `src/content/copy/index.ts` |
| Contact details, routes, pillar icons | `src/content/site.ts` |
| Pillar hero mock-ups (EN + AR strings) | `src/content/pillarPanels.ts` |
| New UI strings from the Oct 21 revision list | `src/content/revisions.ts` |
| Case-study 3D scene settings | `src/content/caseScenes.ts` |
| Real photos (optional) | `src/content/images.ts` + `public/images/` |

## SEO

`pageMetadata(locale, slug)` (`src/lib/seo.ts`) sets the title and description from the copy file,
canonical `https://manzili.sa/...`, hreflang (en / ar / x-default) and Open Graph.
`robots.txt`, `sitemap.xml` (both languages) and `manifest.webmanifest` are generated.

The site is **noindex by default** (staging). On the live domain only, set
`NEXT_PUBLIC_ALLOW_INDEXING=true` and `NEXT_PUBLIC_SITE_URL=https://manzili.sa`.

## Contact form (/contact-us)

11 fields in 3 fieldsets, inline validation (two warnings that still allow submit), Arabic plural
error summary and six submission states, all from the copy files. It posts to `/api/rfp`, which
validates server-side and emails the request via Resend (Reply-To = the submitter) and/or forwards
JSON to a webhook.

Vercel → Settings → Environment Variables (see `.env.example`):

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com |
| `RFP_TO_EMAIL` | Inbox(es) that receive requests, comma-separated |
| `RFP_FROM_EMAIL` | `Manzili Website <rfp@manzili.sa>` once manzili.sa is verified in Resend |
| `RFP_WEBHOOK_URL` | Optional CRM / Zapier webhook |

With nothing configured, the form shows the failure message instead of silently dropping requests.

## Brand system

Palette (brand kit): **Blue #069AD7 · Grey #373535 · Orange #F28E21 · Light Grey #EFEFEF**.
Tokens in `tailwind.config.ts`. Small text uses AA shades: `brand-dark` #0474A1, `brand-deep` #045A86,
`accent-dark` #9D5C15; body `#555353`, captions `#6B6969`.

Buttons (`src/components/ui/Button.tsx`): one primary (brand orange, ink `#373535` label, hover `#F59E3F`)
and one secondary (outline) style, 48px tall with 15px labels.

Logos: `public/brand/`. Favicons and Apple icon: `src/app/`. Share image: `public/og/manzili-share.png`
(1200×630).

## Fonts

**Cairo** everywhere (brand rule), via `next/font`, Latin + Arabic subsets.

## Visuals

Animated isometric "digital twin" scenes (`src/components/art/IsoScene.tsx`) and the footer skyline
(`SkylineArt.tsx`). Any visual can be replaced by a photo through `src/content/images.ts`.
Matterport tours (Pillar 06): pass the share URL as `embedUrl` in `src/components/views/PillarView.tsx`.

## Accessibility & motion

Skip link, keyboard-accessible menus and FAQ, visible focus rings, labelled form errors
(`aria-describedby`), decorative art hidden from screen readers, and all animation respects
"reduce motion".
