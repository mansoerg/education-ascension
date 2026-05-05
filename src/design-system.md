# Education Moving Up — Design System Reference

For v0 and Codex during the Next.js migration. The codebase is the source of truth; this is the map.

## Aesthetic
Modern editorial / academic. Research institute meets university press. Generous whitespace, hairline dividers, restrained palette with one ochre accent.

## Tokens (defined in `src/styles.css`)
All colors are oklch. Mapped to Tailwind via `@theme inline`.

| Token | Light | Role |
|---|---|---|
| `--background` / `bg-background` | warm paper | page bg |
| `--foreground` / `text-foreground` | deep ink | body text |
| `--primary` / `bg-primary` | institutional indigo | primary buttons, links |
| `--accent` / `bg-accent` | scholarly ochre | small highlights, eyebrow tags |
| `--muted` / `bg-muted` | stone surface | alt sections |
| `--card` | white | cards over `bg-background` |
| `--border` / `--hairline` | warm grey | borders, hairlines |
| `--chart-1..5` | indigo, ochre, teal, plum, sand | data viz |

Dark mode mirrors all of the above. Use `.dark` class on `<html>` to toggle.

## Typography
- Headings — `font-serif` (Fraunces, optical variable). Use `.display-serif` for hero/section headlines.
- Body — `font-sans` (Inter).
- Mono / eyebrows — `font-mono` (JetBrains Mono). Use `.eyebrow` utility.

Loaded via Google Fonts `<link>` in `src/routes/__root.tsx`.

## Layout primitives (`src/components/layout/`)
- `Container` — `max-w-1200`, responsive gutters. Use `.container-editorial` directly when not in JSX.
- `Section` — vertical rhythm + `tone="paper" | "muted" | "ink"`.
- `SectionHeader` — `eyebrow` / `title` / `lede` / `align`.

## Section components (`src/components/sections/`)
All take typed props from `src/content/*.ts`. Pure presentation. No data-fetching.

`Hero`, `PillarsGrid` + `PillarCard`, `MethodologyTimeline`, `FocusAreas`, `SignatureQuote`, `StatBand`, `ServicesSection` + `ServiceCard`, `CaseStudiesSection` + `CaseStudyCard`, `InsightsSection` + `ArticleCard`, `ResourcesHub` + `ResourceCard`, `SFIToolCard`, `BookSeriesSection`, `TeamGrid` + `PersonCard` + `FounderFeature`, `CTASection`, `LogoStrip`, `NewsletterStub`.

## Forms (`src/components/forms/`)
`ContactForm`, `BriefingRequestForm`, `PreorderForm`. **All use mock handlers (toast).** Replace with server actions / route handlers in Next.js.

## Content (`src/content/`)
All copy as typed TS modules — designed to drop into Next.js Server Components untouched.
- `site.ts` — brand, nav, contact, signature quote, impact stats
- `pillars.ts` — 3 strategic pillars (verbatim doctrine)
- `methodology.ts` — 5-stage QI cycle, focus areas, vision/mission (verbatim)
- `services.ts` — 6 service lines + engagement steps
- `caseStudies.ts`, `insights.ts` — mock content
- `resources.ts` — frameworks/tools (gated/open)
- `team.ts` — founder + team
- `bookSeries.ts` — Library of Excellence catalogue + endorsements

## Routes (TanStack file-based; map 1:1 to Next.js App Router)
```
/                    -> app/page.tsx
/about               -> app/about/page.tsx
/methodology         -> app/methodology/page.tsx
/services            -> app/services/page.tsx
/insights            -> app/insights/page.tsx
/insights/[slug]     -> app/insights/[slug]/page.tsx
/case-studies        -> app/case-studies/page.tsx
/case-studies/[slug] -> app/case-studies/[slug]/page.tsx
/resources           -> app/resources/page.tsx
/library             -> app/library/page.tsx
/team                -> app/team/page.tsx
/contact             -> app/contact/page.tsx
```
Each route defines its own `head()` (title, description, og:title, og:description) — port to Next.js `generateMetadata` / `metadata` exports.

## Component patterns to preserve
- Card pattern: `border border-hairline rounded-lg bg-card p-7`
- Eyebrow: `<p className="eyebrow">…</p>` (mono, uppercase, tracked)
- Hairline divider: `<div className="hairline-divider" />`
- Numbered items: mono `01`, `02`, … in `text-muted-foreground`
- Hero composition: eyebrow → display-serif headline → muted lede → CTA pair

## Migration notes
- No backend, no auth, no DB calls.
- All images are external URLs (Unsplash placeholders) — swap with Next.js `<Image>` and EMU's own photography on migration.
- Sonner toaster mounted in root; replace with the project's preferred toaster if changed.
- Header uses `useState` + `useEffect` for scroll/mobile menu — keep as Client Component on migration (`"use client"`).
