# Site Build Tasks

> Source of truth: CLAUDE.md + .claude/skills/ + reference/mockup.html
> Check off every task immediately after completing it.
> Never commit directly to main — use feature branches.

---

## Phase 1 — Setup & Config

- [x] Initialize Next.js 15 project with TypeScript and Tailwind
- [x] Switch font from Geist to Inter in layout.tsx (`next/font/google`, weights 400 + 500)
- [x] Update root layout: `bg-[#fdfcfb]` body, Inter variable, correct metadata
- [x] Install `next-mdx-remote` for MDX rendering
- [x] Install `@tailwindcss/typography` for prose styles
- [x] Configure `next.config.ts` for MDX support (`serverExternalPackages: ["gray-matter"]`)
- [x] Create directory structure: `src/components/ui/`, `src/components/ui/diagrams/`, `src/components/mdx/`, `src/lib/`, `content/posts/`, `content/case-studies/`, `content/architecture/`
- [x] Update `.gitignore` (already done)

---

## Phase 2 — Layout & Primitives

- [x] Create `src/components/layout/Navbar.tsx` (fixed, white bg)
- [x] Rebuild Navbar: `fixed` position, `bg-white`, logo `text-[#0f1117]`, links `text-[#6b7280]`, CTA `bg-[#1D9E75] text-white`
- [x] Create `src/components/layout/Footer.tsx`
- [x] Rebuild Footer: `bg-[#0f1117]`, logo + signoff left, LinkedIn/GitHub/Email links right, copyright bottom
- [x] Create `src/components/ui/SectionDivider.tsx` — `h-[2px] bg-[#1D9E75]`
- [x] Create `src/components/ui/SectionHeader.tsx` — eyebrow + h2 pattern
- [x] Add `<SectionDivider />` between every section in homepage

---

## Phase 3 — UI Card Components

- [x] Create `src/components/ui/ArchCard.tsx` — white bg, `border-[#f3f4f6]`, 32px padding, SVG slot
- [x] Create `src/components/ui/CaseCard.tsx` — white bg, 48px teal metric left, content right
- [x] Create `src/components/ui/BlogCard.tsx` — white bg, `border-l-[3px] border-l-[#1D9E75]`, left teal accent
- [x] Create `src/components/ui/ServiceCard.tsx` — white bg, `border-[#d1fae5]`, 32px padding

---

## Phase 4 — SVG Diagram Components

- [x] Create `src/components/ui/diagrams/HaDiagram.tsx` — legacy → primary + replica → LB
- [x] Create `src/components/ui/diagrams/CicdDiagram.tsx` — linear: Code→Build→Test→Deploy
- [x] Create `src/components/ui/diagrams/MigrationDiagram.tsx` — AWS→Gateway→Azure
- [x] Create `src/components/ui/diagrams/ApiDiagram.tsx` — ESB→GraphQL→Clients
- [x] All SVGs: viewBox `0 0 240 90`, legacy `fill="#f3f4f6" stroke="#d1d5db"`, new `fill="#f0fdf9" stroke="#1D9E75"`, arrows `stroke="#1D9E75"`

---

## Phase 5 — Homepage Sections

- [x] Rebuild `src/components/sections/HeroSection.tsx` — dark `bg-[#0f1117]`, 56px headline, stats row, eyebrow, location
- [x] Rebuild `src/components/sections/ArchShowcase.tsx` — light bg, 2-col grid, `ArchCard` + diagram components
- [x] Rebuild `src/components/sections/CaseStudiesSection.tsx` — light bg, 2-col grid, `CaseCard`
- [x] Rebuild `src/components/sections/InsightsSection.tsx` — light bg, 2-col grid, `BlogCard`
- [x] Rebuild `src/components/sections/ServicesSection.tsx` — `bg-[#f0fdf9]`, 3-col grid, `ServiceCard`
- [x] Rebuild `src/app/page.tsx` — assemble all sections with `SectionDivider` between each

---

## Phase 6 — Content Infrastructure

- [x] Create `src/lib/mdx.ts` — `getAllPosts()`, `getPostBySlug()`, `getAllCaseStudies()`, `getCaseStudyBySlug()`, `getAllArchitecture()`, `getArchBySlug()`, reading time util
- [x] Create `src/components/mdx/DiagramBlock.tsx` — full-size diagram embed for MDX
- [x] Create `src/components/mdx/Callout.tsx` — info callout box
- [x] Create `src/components/mdx/mdx-components.tsx` — central MDX component registry

---

## Phase 7 — Pages

### Blog
- [x] Create `src/app/blog/page.tsx` — index, EN/ES/All filter, `BlogCard` grid
- [x] Create `src/app/blog/[slug]/page.tsx` — `generateStaticParams`, `generateMetadata`, prose MDX render

### Case Studies
- [x] Create `src/app/case-studies/page.tsx` — index, `CaseCard` grid
- [x] Create `src/app/case-studies/[slug]/page.tsx` — dark hero, metric callout, MDX body

### Architecture
- [x] Create `src/app/architecture/page.tsx` — index, `ArchCard` grid
- [x] Create `src/app/architecture/[slug]/page.tsx` — full diagram + MDX body

### Misc
- [x] Create `src/app/not-found.tsx` — custom 404

---

## Phase 8 — Content

### Blog posts
- [x] `content/posts/2024-01-15-when-to-migrate-azure.mdx` — EN
- [x] `content/posts/2024-02-10-arquitectura-event-driven.mdx` — ES
- [x] `content/posts/2024-03-05-llms-architecture-design.mdx` — EN
- [x] `content/posts/2024-04-20-zero-downtime-migrations.mdx` — EN

### Case studies
- [x] `content/case-studies/idb-legacy-ha-cloud.mdx` — metric 95%
- [x] `content/case-studies/idb-cicd-pipeline.mdx` — metric 30%
- [x] `content/case-studies/cnovate-aws-azure.mdx` — metric 2×
- [x] `content/case-studies/sapiens-graphql.mdx` — metric RT

### Architecture pieces
- [x] `content/architecture/legacy-ha-cloud.mdx` — diagramType: ha
- [x] `content/architecture/cicd-pipeline.mdx` — diagramType: cicd
- [x] `content/architecture/multi-cloud-transformation.mdx` — diagramType: migration
- [x] `content/architecture/esb-graphql.mdx` — diagramType: api

---

## Fixes

- [x] Remove dark-mode CSS override from `globals.css` that caused content sections to go black in OS dark mode
- [x] Add explicit `bg-[#fdfcfb]` to `ArchShowcase` and `CaseStudiesSection` sections
- [x] Navbar logo: split "javier mayor" (dark #0f1117) + "ga" (teal #1D9E75), all lowercase

## Polish pass (FIXES.MD)

- [x] FIX 1 — Remove all company name references (IDB, Cnovate, Sapiens) from src, content, and blog posts
- [x] FIX 2 — Elevate visual aesthetics: hero 64px headline, teal "trust" accent, eyebrow blink cursor, stats 40px with separators and teal labels, section background numbers
- [x] FIX 3 — Architecture section: new heading, focus line, card hover translateY + border-top teal, taller diagram area, "View case →" on hover
- [x] FIX 4 — Case studies: metric labels (less downtime / faster delivery / cost efficiency / real-time data), section subheading
- [x] FIX 5 — Hero grid background: CSS linear-gradient pattern, opacity 0.3, absolute position
- [x] FIX (FIXES.MD) — Fix LinkedIn URL to https://www.linkedin.com/in/j-mayorga/
- [x] FIX (FIXES.MD) — Remove background section numbers (01, 02, 03) from SectionHeader

---

## Phase 9 — Deploy

- [x] Verify `npm run build` passes with zero errors
- [x] Connect repo to Vercel project
- [x] Set `NEXT_PUBLIC_SITE_URL` env var in Vercel
- [x] Configure custom domain
- [x] Verify HTTPS + www redirect
- [x] Run Lighthouse audit (Performance ≥ 90, Accessibility ≥ 95)
- [x] Add `public/og.png` for social sharing

---

## Phase 10 — UX & Design Polish (v2)

> Requirements source: `requirements.md`
> Branch pattern: `feature/10-<slug>`
> Complete tasks in priority order. Each task = one atomic commit.

### REQ-01 · Hero CTA Button
- [x] Add "Explore my work ↓" button in `HeroSection.tsx` below the subline, above stats
- [x] Style: `bg-[#1D9E75] text-white px-6 py-3 rounded-[6px] text-[14px] font-medium hover:bg-[#178f68]`
- [x] Wire smooth-scroll to `#architecture` via `href="#architecture"`
- [x] Mobile: `w-full` button width

### REQ-02 · Contact Section
- [x] Create `src/components/sections/ContactSection.tsx` — dark `bg-[#0f1117]`, `id="contact"`
- [x] Content: headline, 1-line availability note, email CTA button, LinkedIn text link
- [x] Add `<ContactSection />` + `<SectionDivider />` in `src/app/page.tsx` before `<Footer />`
- [x] Verify navbar "Get in touch" (`href="#contact"`) scrolls correctly

### REQ-03 · Blog Card Enrichment
- [x] Update `BlogCard.tsx` to render `summary` prop below title (14px muted)
- [x] Update `BlogCard.tsx` to render formatted `date` prop below summary (12px, lighter)
- [x] Update `InsightsSection.tsx` to pass `summary` and `date` to each `BlogCard`
- [x] Update `src/app/blog/page.tsx` blog index to pass same fields

### REQ-04 · Service Card Icons
- [x] Add `icon` prop (inline SVG ReactNode) to `ServiceCard.tsx`
- [x] Create three 32×32 inline SVG icons: cloud-nodes, cloud-migration-arrows, org-chart
- [x] Update `ServicesSection.tsx` to pass the correct icon to each `ServiceCard`
- [x] Add `group-hover` icon stroke-color transition

### REQ-05 · Navbar Scroll Shadow
- [x] Convert `Navbar.tsx` to `"use client"` (already may be — verify)
- [x] Add `useEffect` + `scroll` listener that toggles a `scrolled` boolean above 10px
- [x] Apply `shadow-[0_1px_12px_rgba(0,0,0,0.08)]` class when `scrolled === true`
- [x] Transition: `transition-shadow duration-200`

### REQ-06 · Scroll-Reveal Animations
- [x] Create `src/hooks/useScrollReveal.ts` — IntersectionObserver hook returning a ref + `isVisible` bool
- [x] Create `src/components/ui/RevealWrapper.tsx` — wraps children with fade-up-on-enter CSS
- [x] Apply `RevealWrapper` to each card grid inside: `ArchShowcase`, `CaseStudiesSection`, `InsightsSection`, `ServicesSection`
- [x] Stagger cards: each card gets `style={{ transitionDelay: \`${index * 75}ms\` }}`

### REQ-07 · Footer Social Icons
- [x] Add inline SVG LinkedIn, GitHub, and envelope icons (16×16) to `Footer.tsx`
- [x] Place icon left of each text label inside the link element
- [x] Hover: `group-hover:text-white` on both icon and label together

### REQ-08 · Architecture Diagram Upgrade
- [x] Upgrade `HaDiagram.tsx` — add node labels ("Azure DB", "Primary", "Azure LB"), arrow labels ("replicates", "routes")
- [x] Upgrade `CicdDiagram.tsx` — label steps ("Azure Repos", "Azure Pipelines", "Quality Gate", "Azure App Service"), add arrow labels
- [x] Upgrade `MigrationDiagram.tsx` — label nodes ("AWS VPC", "Azure API Mgmt", "Azure vNet"), add arrow labels
- [x] Upgrade `ApiDiagram.tsx` — label nodes ("Oracle ESB", "GraphQL API", "Financial Clients"), add arrow labels
- [x] Expand viewBox to `0 0 320 120` if needed for legibility
- [x] Keep color tokens unchanged (legacy gray / new teal)

### REQ-09 · Active Nav Highlighting
- [x] Convert (or confirm) `Navbar.tsx` is `"use client"`
- [x] Add `useEffect` + `IntersectionObserver` watching `#architecture`, `#work`, `#insights`, `#services`
- [x] Track `activeSection` state; apply `text-[#0f1117] font-medium` to matching nav link
- [x] Default/inactive: `text-[#6b7280]`
- [x] Use `rootMargin: "-20% 0px -70% 0px"` to trigger when section is in upper viewport

### REQ-10 · Hero Stats Label Correction
- [x] In `HeroSection.tsx` update stat labels to match spec exactly:
  - `"years · Enterprise systems"`
  - `"Downtime reduction at IDB"`
  - `"Azure certifications"`

---

## Phase 11 — Blog Reactions (Supabase)

> Branch: `feature/blog-reactions`
> Storage: Supabase Postgres — `reaction_counts` table
> No auth required. Rate limit: localStorage per browser (one reaction per type per post).

### Database
- [ ] Create `supabase/schema.sql` with `reaction_counts` table + `increment_reaction` RPC function
- [ ] Run SQL in Supabase dashboard → SQL Editor

### Config
- [ ] Create `.env.local` with `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Add `.env.local` to `.gitignore` (verify)
- [ ] Install `@supabase/supabase-js`
- [ ] Create `src/lib/supabase.ts` — server + browser client singletons

### API
- [ ] Create `src/app/api/reactions/[slug]/route.ts` — GET counts, POST increment (service role, edge runtime)

### UI
- [ ] Create `src/types/reactions.ts` — `ReactionType` union, `ReactionCounts` interface
- [ ] Create `src/hooks/useReactions.ts` — fetch on mount, POST on click, optimistic update, localStorage dedup
- [ ] Create `src/components/blog/ReactionBar.tsx` — 4 emoji buttons, counts, active state, design-system styling
- [ ] Update `src/app/blog/[slug]/page.tsx` — add `<ReactionBar slug={slug} />` below prose

### Verify
- [ ] `npm run build` passes
- [ ] `npm run lint` passes

---

## Phase 12 — Homepage i18n (Spanish / English)

> Scope: homepage sections only (Hero, Featured Work, How I Work, Services). Blog posts already handle lang per-file.
> Library: `next-intl` — standard Next.js App Router i18n solution.
> URLs: `/` (EN default) and `/es` (Spanish) — no prefix on default locale.

### Setup
- [ ] Install `next-intl`
- [ ] Create `messages/en.json` — all homepage copy in English
- [ ] Create `messages/es.json` — Spanish translations of all homepage copy
- [ ] Configure `next.config.ts` with `next-intl` plugin
- [ ] Create `src/i18n.ts` — locale config (locales: ['en', 'es'], defaultLocale: 'en')

### Layout
- [ ] Wrap `src/app/layout.tsx` with `NextIntlClientProvider`
- [ ] Create `src/app/[locale]/` route group and move `page.tsx` inside it

### Components
- [ ] Update `HeroSection.tsx` — use `useTranslations('hero')` for all copy
- [ ] Update `FeaturedWorkSection.tsx` — use `useTranslations('work')` for card content
- [ ] Update `HowIWorkSection.tsx` — use `useTranslations('approach')` for principles
- [ ] Update `ServicesSection.tsx` — use `useTranslations('services')` for card copy

### Navbar
- [ ] Add language toggle (EN / ES) to Navbar — desktop and mobile drawer
- [ ] Use `useRouter` + `usePathname` from `next-intl` to switch locale

### Verify
- [ ] `/` renders English copy
- [ ] `/es` renders Spanish copy
- [ ] Language toggle switches between locales
- [ ] `npm run build` passes with zero errors
