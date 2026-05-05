
# Education Moving Up — Marketing Site Revamp (Frontend-Only)

A research-institute-grade marketing platform that preserves EMU's core doctrine (verbatim where it's IP) and modernizes the marketing layer. Built as cleanly componentized TanStack Start routes so v0 and Codex can migrate it into a clean Next.js App Router project with minimal friction.

## 1. Brand & Doctrine (extracted from archives)

Preserved verbatim (IP):
- **3 Strategic Pillars**: Data Driven · Systemic Thinking · Use of ICT
- **Quality Improvement 5-Stage Model**: Case Analysis → Input → Process → Output → Impact
- **3 Focus Areas**: District · School · Learning levels
- **Core axiom**: *"Functionality must precede Performance"*
- **Signature quote** (Dr. Gallie): *"Without data, you are just another person with an opinion."*
- **Proprietary instrument**: School Functionality Index (SFI) — Dr. Gallie's doctoral thesis
- **Vision/Mission paragraph** from archives, kept word-for-word

Refreshed for 2026 (marketing layer):
- New hero copy, CTAs, section intros, taglines, microcopy

## 2. Visual System — "Modern Editorial / Academic"

**Aesthetic**: think tank meets university press. Authoritative, generous whitespace, restrained, content-led. Subtle gov/edtech energy via data-viz motifs; warm South African classroom imagery for human moments; light premium polish (fine borders, hairline dividers, micro-interactions).

**Design tokens** (added to `src/styles.css` as oklch variables, mapped via `@theme inline`):

```text
Color
  --background        near-white warm paper        oklch(0.985 0.005 85)
  --foreground        deep ink                     oklch(0.18 0.02 260)
  --primary           institutional indigo         oklch(0.32 0.10 265)
  --accent            scholarly ochre              oklch(0.72 0.13 70)
  --muted             stone surface                oklch(0.95 0.01 90)
  --border            hairline                     oklch(0.88 0.01 90)
  --chart-1..5        data-viz palette (indigo, ochre, teal, plum, sand)
  Dark mode mirror with warm-graphite background

Typography
  Headings   Fraunces (serif, optical variable)  — editorial weight
  Body       Inter (sans)                         — long-form readable
  Mono       JetBrains Mono                       — data callouts
  Scale: display 56/64, h1 44/52, h2 32/40, h3 24/32, body 17/28, small 14/22

Spacing & Layout
  Container max 1200px, gutter 24px (mobile) → 48px (desktop)
  Section vertical rhythm: 96px desktop / 64px mobile
  Card radius: 12px;  hairline 1px borders over fills

Components (shadcn-aligned)
  Button: primary (filled indigo), secondary (outline), ghost, link-arrow
  Card: bordered + subtle shadow on hover; PillarCard, StageCard, ResourceCard
  Badge: small uppercase tracked label (e.g. "Methodology")
  Section: <SectionHeader eyebrow title lede /> standard pattern
  Pull-quote, Stat block, Timeline (5-stage), Logo strip
```

A short tokens/usage reference is added at `src/design-system.md` so v0 and Codex have a single source of truth.

## 3. Information Architecture (9 routes)

```text
/                    Home — narrative entry, all sections in summary
/about               Story, vision/mission (verbatim), origin, values
/methodology         Pillars + 5-stage QI + Functionality→Performance
/services            Consulting offerings across District/School/Learning
/insights            Thought-leadership index (blog list)
/insights/$slug      Article template
/case-studies        Index of impact stories
/case-studies/$slug  Case-study template
/resources           Resources hub (SFI tool card, framework downloads, gated/ungated)
/library             "Library of Excellence" — book preorder / primary conversion
/team                Leadership; Dr. Gallie featured
/contact             Briefing form + offices/contact details
```

Each route file defines its own `head()` metadata (title, description, og:title, og:description) per the route-architecture rules. Hash anchors are NOT used for primary nav.

## 4. Component Inventory (all under `src/components/`)

Layout / chrome:
- `layout/SiteHeader.tsx` — sticky transparent → solid on scroll, primary nav, CTA
- `layout/SiteFooter.tsx` — sitemap, contact, newsletter stub, fine-print
- `layout/Section.tsx`, `layout/Container.tsx`, `layout/SectionHeader.tsx`

Marketing sections (used across routes; data passed in as props):
- `sections/Hero.tsx` — editorial hero with eyebrow, serif headline, lede, dual CTA, supporting visual slot
- `sections/PillarsGrid.tsx` + `PillarCard.tsx` — 3 strategic pillars
- `sections/MethodologyTimeline.tsx` — 5-stage QI horizontal/vertical timeline
- `sections/FocusAreas.tsx` — District / School / Learning triptych
- `sections/SignatureQuote.tsx` — large pull-quote (Dr. Gallie)
- `sections/StatBand.tsx` — data callouts (years, districts, learners reached — placeholder numbers flagged)
- `sections/ServicesSection.tsx` + `ServiceCard.tsx`
- `sections/CaseStudiesSection.tsx` + `CaseStudyCard.tsx`
- `sections/InsightsSection.tsx` + `ArticleCard.tsx`
- `sections/ResourcesHub.tsx` + `ResourceCard.tsx` (handles gated/ungated visual states)
- `sections/SFIToolCard.tsx` — feature card for the School Functionality Index
- `sections/BookSeriesSection.tsx` — "Library of Excellence" preorder hero/feature
- `sections/TeamGrid.tsx` + `PersonCard.tsx`, `FounderFeature.tsx`
- `sections/CTASection.tsx` — closing conversion band
- `sections/LogoStrip.tsx` — partner/affiliations placeholder
- `sections/NewsletterStub.tsx` — visual only, mock submit handler

Forms (presentational only, mock handlers, no backend):
- `forms/ContactForm.tsx`, `forms/BriefingRequestForm.tsx`, `forms/PreorderForm.tsx`, `forms/ResourceGateForm.tsx`

All shadcn primitives in `src/components/ui/*` are reused. No new dependencies required beyond what ships with the template.

## 5. Content & Data Separation

All copy lives in `src/content/` as typed TS modules so Codex can migrate it cleanly:

```text
src/content/
  pillars.ts            // 3 pillars (verbatim doctrine)
  methodology.ts        // 5 stages + Functionality→Performance principle
  services.ts           // service offerings (refreshed copy)
  caseStudies.ts        // mock case studies (3–4)
  insights.ts           // mock articles (3–4)
  resources.ts          // SFI + downloadable frameworks (mocked)
  team.ts               // Dr. Gallie + placeholder consultants
  bookSeries.ts         // Library of Excellence entries
  site.ts               // brand strings, nav, footer, contact details from archive
```

Components consume content via props; pages compose components + content. This keeps presentation pure and migration trivial.

## 6. Page Compositions (high-level)

- **Home**: Hero → Pillars summary → Methodology preview → Focus Areas → Signature Quote → Featured Case Study → Library of Excellence teaser → Insights preview → CTA → Newsletter
- **About**: Origin narrative → Vision/Mission (verbatim) → Values → Founder feature → CTA
- **Methodology**: Hero → 3 Pillars (deep) → 5-Stage Timeline → Functionality-precedes-Performance principle → SFI callout → CTA
- **Services**: Hero → 3 Focus Areas → Service offerings grid → Engagement model → Briefing form
- **Insights / Case Studies**: list + article/case templates with editorial typography (`prose`-style)
- **Resources**: Hero → SFI feature card → Downloads grid (gated mock state) → Newsletter
- **Library**: Editorial hero → Book(s) feature with cover slot → Inside-the-book → Preorder form (mock) → Endorsements
- **Team**: Founder feature (Dr. Gallie) → Leadership grid → Advisory note → CTA
- **Contact**: Form + contact details (phone/cell/fax/email from 2016 archive as placeholders to confirm) + map placeholder

## 7. Migration-Friendly Constraints

- No backend, no Supabase, no auth, no DB calls, no server functions in this build.
- All form submit handlers are no-op stubs that show a toast (`sonner`) — clearly commented as placeholders.
- No imports from `@/assets/*`; image slots use external/placeholder URLs and `next/image`-friendly `<img>` patterns (plain `<img>` with width/height + `loading="lazy"`).
- Tailwind v4 utility classes only; no custom CSS beyond design tokens already in `src/styles.css`.
- Components export named props; content modules export typed objects — both pattern-compatible with Next.js App Router server components.

## 8. Build Order (single implementation pass)

1. Extend `src/styles.css` with editorial tokens (Fraunces/Inter via Google Fonts link in `__root.tsx` head, color overrides, dark-mode mirror).
2. Create content modules in `src/content/`.
3. Build layout primitives (`Container`, `Section`, `SectionHeader`, `SiteHeader`, `SiteFooter`).
4. Build marketing section components.
5. Compose 9 routes (`index`, `about`, `methodology`, `services`, `insights`, `insights.$slug`, `case-studies`, `case-studies.$slug`, `resources`, `library`, `team`, `contact`) — each with its own `head()`.
6. Wire `SiteHeader`/`SiteFooter` into `__root.tsx` around `<Outlet />`.
7. Add `src/design-system.md` with token + component reference for v0/Codex.

## 9. Open Items (handled with sensible defaults, easy to revise)

- **Imagery**: I'll use neutral Unsplash education/classroom URLs as slots (clearly tagged "placeholder"). Swap later with EMU's own photography.
- **Stats**: placeholder numbers with a `// TODO: confirm` comment.
- **Contact details**: copy from the 2016 archive (012-370 3600 / 082 822 9494 / muavia@movingup.co.za) — flagged for confirmation.
- **Book series**: titles/descriptions are placeholder until you provide real catalog.

Approve this and I'll implement the full site in one pass.
