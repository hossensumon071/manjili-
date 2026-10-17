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

`/` is built. Links already point to the sitemap routes (`/solutions`,
`/products/connected-sales-environment`, `/pillars/*`, `/case-studies`,
`/contact`, `/privacy`, `/terms`); until those pages exist they show a branded
"page in preparation" screen.

## Accessibility & motion

Skip link, keyboard-accessible menus and FAQ, visible focus rings, and all
animation respects the visitor's "reduce motion" setting.
