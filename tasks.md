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

---

## Phase 9 — Deploy

- [x] Verify `npm run build` passes with zero errors
- [ ] Connect repo to Vercel project
- [ ] Set `NEXT_PUBLIC_SITE_URL` env var in Vercel
- [ ] Configure custom domain
- [ ] Verify HTTPS + www redirect
- [ ] Run Lighthouse audit (Performance ≥ 90, Accessibility ≥ 95)
- [ ] Add `public/og.png` for social sharing
