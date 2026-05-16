# Site Build Tasks

> Checked tasks are complete. Update this file every time a task is finished.

---

## Phase 1 — Setup

- [x] Initialize Next.js 15 project with TypeScript and Tailwind CSS
- [x] Configure Geist font via `next/font/google` in root layout
- [x] Set up `@/` path alias in `tsconfig.json`
- [ ] Add design system color tokens to `tailwind.config.ts`
- [ ] Install and configure `next-mdx-remote` for MDX support
- [ ] Install `@tailwindcss/typography` for prose styles in blog/case study pages
- [ ] Configure `next.config.ts` to allow MDX file extensions
- [ ] Create `content/posts/`, `content/case-studies/`, `content/architecture/` directories
- [ ] Create `src/lib/`, `src/components/ui/`, `src/components/layout/`, `src/components/mdx/` directories

---

## Phase 2 — Layout

- [x] Create `Navbar` component (sticky, scroll shadow, mobile hamburger)
- [x] Create `Footer` component (copyright, email + LinkedIn icons)
- [x] Wire `Navbar` and `Footer` into root `layout.tsx`
- [x] Set root layout metadata (title, description)
- [x] Apply dark background `bg-[#0f1117]` and text `text-[#f1f5f9]` globally
- [x] Move `Navbar` to `src/components/layout/Navbar.tsx` (correct file location per skill)
- [x] Move `Footer` to `src/components/layout/Footer.tsx` (correct file location per skill)
- [x] Fix Navbar background to `bg-[#0a0d13]` (design system token)
- [x] Fix Navbar nav link hover to `hover:text-[#9ca3af]` (design system token)
- [x] Add CTA button to Navbar: `border border-[#1D9E75] text-[#5DCAA5]` (per design system)
- [x] Fix Navbar height to `h-16` (design system specifies 64px)
- [x] Fix Footer background to `bg-[#0a0d13]` (design system token)
- [ ] Create `src/app/not-found.tsx` (custom 404 page)

---

## Phase 3 — Homepage

- [x] Scaffold `src/app/page.tsx` with all section imports
- [x] `HeroSection` — headline, sub-headline, CTA buttons, stats strip
- [x] `ArchitectureSection` — 4 cards with inline SVG diagram previews (hardcoded)
- [x] `CaseStudiesSection` — 4 case study cards with outcomes (hardcoded)
- [x] `InsightsSection` — 3 latest blog post previews with EN/ES badges (hardcoded)
- [x] `ServicesSection` — 3 service cards (Cloud Architecture, Platform Eng, Advisory)
- [x] `ContactSection` — email + LinkedIn CTA in bordered card
- [ ] Fix homepage section headings to `font-medium` not `font-bold` (design system: weight 400/500 only)
- [ ] Fix card shells to `bg-[#141821]` (design system card surface token)
- [ ] Refactor `ArchitectureSection` to read from MDX via `lib/mdx` (remove hardcoded data)
- [ ] Refactor `CaseStudiesSection` to read from MDX via `lib/mdx` (remove hardcoded data)
- [ ] Refactor `InsightsSection` to read from MDX via `lib/mdx` (remove hardcoded data)
- [ ] Extract mini SVG diagrams to `src/components/ui/diagrams/` components
- [ ] Rename `ArchitectureSection` → `ArchShowcase` at `src/components/sections/ArchShowcase.tsx` (per arch skill)

---

## Phase 4 — Pages

### Blog
- [ ] Create `src/app/blog/page.tsx` — index with EN/ES/All filter (client component)
- [ ] Create `src/app/blog/[slug]/page.tsx` — post detail with `generateStaticParams` + `generateMetadata`
- [ ] Blog detail page: render MDX with `prose prose-invert` + design system overrides

### Case Studies
- [ ] Create `src/app/case-studies/page.tsx` — vertical list with numbered cards (01–04)
- [ ] Create `src/app/case-studies/[slug]/page.tsx` — detail with outcome callout at top
- [ ] Case study detail: `generateStaticParams`, `generateMetadata`, `notFound()` guard
- [ ] Add reading time calculation (~200 wpm) to case study detail page

### Architecture
- [ ] Create `src/app/architecture/page.tsx` — 2-col grid of arch cards
- [ ] Create `src/app/architecture/[slug]/page.tsx` — full diagram + MDX body

---

## Phase 5 — Content Infrastructure

### MDX utilities (`src/lib/mdx.ts`)
- [ ] `getAllPosts()` — returns all published posts sorted by date
- [ ] `getPostBySlug(slug)` — returns frontmatter + compiled MDX for a post
- [ ] `getAllCaseStudies()` — returns all published case studies
- [ ] `getCaseStudyBySlug(slug)` — returns frontmatter + compiled MDX
- [ ] `getAllArchitecture()` — returns all published architecture pieces
- [ ] `getArchitectureBySlug(slug)` — returns frontmatter + compiled MDX
- [ ] Reading time utility function

### MDX components (`src/components/mdx/`)
- [ ] Create `src/components/mdx/DiagramBlock.tsx` — full-size diagram embed for MDX
- [ ] Create `src/components/mdx/Callout.tsx` — info/warning callout box
- [ ] Register MDX components in a central `mdx-components.tsx` file

### Diagram SVG components (`src/components/ui/diagrams/`)
- [ ] `MigrationDiagram.tsx` — legacy → new cloud
- [ ] `HADiagram.tsx` — single → primary + replica + LB
- [ ] `CICDDiagram.tsx` — linear pipeline: code → build → test → deploy
- [ ] `APIDiagram.tsx` — old protocol → new API → services
- [ ] `DiagramPreview.tsx` — dispatcher component that maps `diagramType` to SVG

---

## Phase 6 — Content

### Blog posts
- [ ] Write `content/posts/2024-11-20-zero-downtime-migrations.mdx` (EN)
- [ ] Write `content/posts/2024-10-05-gitops-regulated-fintech.mdx` (EN)
- [ ] Write `content/posts/2024-09-12-migracion-aws-azure.mdx` (ES)

### Case studies
- [ ] Write `content/case-studies/idb-legacy-ha-cloud.mdx` — 95% downtime reduction
- [ ] Write `content/case-studies/idb-cicd-pipeline.mdx` — 30% faster deployments
- [ ] Write `content/case-studies/cnovate-aws-azure.mdx` — multi-cloud transformation
- [ ] Write `content/case-studies/sapiens-graphql.mdx` — Oracle ESB → GraphQL

### Architecture pieces
- [ ] Write `content/architecture/multi-cloud-transformation.mdx` (diagramType: migration)
- [ ] Write `content/architecture/legacy-ha-cloud.mdx` (diagramType: ha)
- [ ] Write `content/architecture/cicd-pipeline.mdx` (diagramType: cicd)
- [ ] Write `content/architecture/graphql-modernization.mdx` (diagramType: api)

---

## Phase 7 — Deploy

- [ ] Push `main` branch to GitHub remote
- [ ] Connect GitHub repo to Vercel project
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable in Vercel
- [ ] Verify production build passes (`npm run build`) with no errors
- [ ] Configure custom domain in Vercel
- [ ] Confirm `https://` and `www` redirects work correctly
- [ ] Run Lighthouse audit (target: Performance ≥ 90, Accessibility ≥ 95)
- [ ] Add OG image (`public/og.png`) for social sharing metadata
