# Architecture Decision Records — Javier Mayorga Dev

Format: context → options considered → decision → rationale → consequences.

---

## ADR-001 — Framework: Next.js 15 App Router

**Date:** 2026-01 (project start)

**Context:** Personal brand site needing static pages, a blog, case study pages, and architecture
showcases. Needs fast builds, great SEO, and zero-friction Vercel deployment.

**Options considered:**
- Next.js 15 App Router
- Astro (content-first, islands architecture)
- Remix (full-stack, loader/action pattern)
- SvelteKit

**Decision:** Next.js 15 with App Router.

**Rationale:** App Router gives RSC by default (minimal client JS), file-based routing matches
the content structure, `generateStaticParams` covers all dynamic routes, and Vercel deploys
it with zero configuration. Astro was a close second but Next.js is the primary skill to
demonstrate to enterprise clients.

**Consequences:** App Router patterns only — no Pages Router code. `"use client"` boundary
must be explicit and minimal.

---

## ADR-002 — Language: TypeScript only

**Date:** 2026-01

**Context:** Project convention for correctness and IDE support.

**Decision:** TypeScript everywhere. No `.js` files in `src/`.

**Rationale:** Props contracts on components, type-safe MDX frontmatter, no runtime surprises.
The overhead is near-zero for a site this size and the IDE feedback loop is worth it.

**Consequences:** All new files use `.tsx` or `.ts`. Plain JS is never acceptable.

---

## ADR-003 — Styling: Tailwind CSS

**Date:** 2026-01

**Options considered:**
- Tailwind CSS
- CSS Modules
- styled-components / Emotion
- Vanilla Extract

**Decision:** Tailwind CSS.

**Rationale:** The design system is token-based (fixed colors, a defined spacing scale, specific
font sizes). Tailwind makes design tokens first-class via utility classes. No context switching
between CSS files and JSX. Works perfectly with RSC — no runtime CSS injection.

**Consequences:** No custom CSS unless a Tailwind utility class cannot do the job. All colors
reference design system tokens via `text-[#1D9E75]` syntax — never arbitrary color values
outside the system.

---

## ADR-004 — Content: MDX + next-mdx-remote (no CMS)

**Date:** 2026-01

**Options considered:**
- Headless CMS (Contentful, Sanity, Notion API)
- MDX files in repo with next-mdx-remote
- Plain Markdown
- MDX with `@next/mdx` (built-in)

**Decision:** MDX files in `content/` with `next-mdx-remote`.

**Rationale:** Content lives with the code — no external service dependency, no API keys
needed at build time, no vendor lock-in. MDX enables custom components (diagrams, callouts)
inline in posts. `next-mdx-remote` allows `gray-matter` frontmatter parsing and works with
App Router's RSC model. Volume is low enough that a CMS adds no value.

**Consequences:** All content lives in `content/posts/`, `content/case-studies/`,
`content/architecture/`. Frontmatter schema is enforced by convention (see `docs/requirements.md`).
`src/lib/mdx.ts` is the single read layer — all content access goes through it.

---

## ADR-005 — Diagrams: Inline SVG components

**Date:** 2026-01

**Options considered:**
- D3.js (programmatic, data-driven)
- Mermaid.js (text-to-diagram)
- Excalidraw embed
- Inline SVG React components

**Decision:** Inline SVG as React components (`src/components/ui/diagrams/`).

**Rationale:** Zero external dependencies. Full control over colors, stroke weights, and
responsive scaling. SVGs match the design system tokens exactly (teal `#1D9E75` strokes,
gray fills). No client-side JS required — SVGs render on the server. Most importantly:
the diagrams are architecture *artifacts*, not auto-generated charts — they need to look
crafted, not machine-drawn.

**Consequences:** Each diagram is a dedicated `.tsx` file. viewBox is `0 0 320 120` for
readability. Color tokens must match the design system.

---

## ADR-006 — Deployment: Vercel

**Date:** 2026-01

**Options considered:**
- Vercel
- AWS Amplify
- Cloudflare Pages
- Self-hosted VPS

**Decision:** Vercel.

**Rationale:** Zero-config Next.js deployment. Auto-deploy from `main` branch. Edge network
for static assets. Custom domain + HTTPS in minutes. The personal brand site has no
infrastructure complexity that would justify managing deployment separately.

**Environment variables:** `NEXT_PUBLIC_SITE_URL` set in Vercel project settings.

**Consequences:** Deployment is automatic on merge to `main`. Manual deploy: `vercel --prod`.

---

## ADR-007 — Database: Supabase (blog reactions)

**Date:** 2026-02

**Context:** Blog posts needed a lightweight engagement signal — emoji reactions — without
requiring user authentication.

**Options considered:**
- Supabase Postgres + RPC function
- Firebase Realtime Database
- PlanetScale + custom API
- Client-side localStorage only (no persistence)

**Decision:** Supabase Postgres with an `increment_reaction` RPC function.

**Rationale:** Supabase free tier covers the volume. No auth required — reactions are
anonymous, rate-limited via localStorage per browser. The RPC pattern (`increment_reaction`)
avoids race conditions on concurrent writes. Supabase's JS client works cleanly in
Next.js API routes.

**Consequences:** `src/lib/supabase.ts` has server + browser client singletons.
`src/app/api/reactions/[slug]/route.ts` handles GET (counts) and POST (increment).
Schema in `supabase/schema.sql`.

---

## ADR-008 — Fonts: Inter + JetBrains Mono

**Date:** 2026-01

**Decision:** Inter for all body and heading text. JetBrains Mono for data labels,
stat values, metric numbers, and identity marks.

**Rationale:** Inter is the standard for technical and product UIs — readable, neutral,
professional. JetBrains Mono on numeric data creates a "precision" signal: stat values
look measured, not styled. Both loaded via `next/font/google` for zero layout shift.

**Consequences:** No other fonts. Apply JetBrains Mono anywhere a number or identifier
carries precision weight: hero stats, case study metrics, cert badges.

---

## ADR-009 — No dark mode toggle

**Date:** 2026-02

**Context:** A theme toggle was proposed during Phase 10 planning.

**Decision:** Deferred indefinitely. No dark mode toggle.

**Rationale:** The design is intentionally mixed — dark hero/footer/contact, light content
sections. This is a deliberate visual rhythm, not a light-mode default. A toggle would
require maintaining two complete color systems and risks breaking the hero/footer contrast.
The investment is not justified for the current audience size.

**Consequences:** No `dark:` Tailwind variants on content sections. The OS-level dark mode
CSS override was explicitly removed from `globals.css` (see commit history).

---

## ADR-010 — i18n: deferred routing, per-file language

**Date:** 2026-01

**Context:** Target audience is global (English + Spanish speakers). Blog posts are written
in either language.

**Decision:** No i18n URL routing initially. Blog posts carry a `lang` frontmatter field.
The blog index has an EN / ES / All filter. Full i18n routing (`/es/` prefix) is Phase 12.

**Rationale:** Content volume doesn't justify the routing complexity yet. Per-file language
is simpler to author and maintain. The filter satisfies reader needs without adding route
complexity to every page.

**Consequences:** Blog posts are authored at `/blog/[slug]` with no language prefix.
`lang: en` or `lang: es` in frontmatter. Phase 12 will add `next-intl` and `/es` routes
when content volume warrants it.

---

## ADR-011 — Static generation by default

**Date:** 2026-01

**Decision:** All pages use static generation (`generateStaticParams` for dynamic routes).
No SSR pages.

**Rationale:** Personal brand site has no user-specific data and no real-time content
requirements. Static generation gives best performance (Lighthouse ≥ 90) and eliminates
server costs. Blog reactions are fetched client-side after hydration.

**Consequences:** Any future feature requiring SSR (authenticated pages, personalized content)
must make a new ADR. Default is always static unless there is a compelling reason.
