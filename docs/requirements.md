# Product Requirements — Javier Mayorga Dev

## Product Vision

A personal technical brand site for Javier Mayorga — Cloud Architect & Enterprise Solutions
Leader. The site is not a resume. It demonstrates how Javier thinks, how he architects systems,
and how he leads technical decisions.

**Target visitors:**
- CTOs and engineering leads evaluating consulting partners
- Recruiters and hiring managers for senior architect roles
- Peers in the cloud architecture and enterprise engineering community

**Primary actions the site must enable:**
1. Understand Javier's expertise and track record within 60 seconds (hero + case studies)
2. Evaluate the depth of his technical thinking (architecture showcase + blog)
3. Get in touch to start a conversation (contact section + email CTA)

---

## Content Conventions

### Blog post frontmatter
```yaml
---
title: "Post title"
date: "YYYY-MM-DD"
lang: "en"        # or "es"
tags: ["Azure", "Architecture"]
summary: "One sentence description."
published: true
---
```

### Case study frontmatter
```yaml
---
title: "Case study title"
client: "Organization name"
clientShort: "Short name"
year: "2024"
metric: "95%"
metricLabel: "downtime reduction"
tags: ["Azure", "HA"]
lang: "en"
published: true
---
```

### Architecture piece frontmatter
```yaml
---
title: "Architecture title"
client: "Client or context"
year: "2024"
diagramType: "ha"   # ha | cicd | migration | api | custom
tags: ["Azure", "Microservices"]
published: true
---
```

---

## Nav Links (exact)

```
Architecture · Work · Insights · Services
CTA: "Get in touch" → #contact
```

---

## Phase 1–9 — Completed

All foundation, layout, content, deployment tasks completed. See `tasks.md` Phases 1–9.
Site is live at javiermayorga.tech with Lighthouse Performance ≥ 90, Accessibility ≥ 95.

---

## Phase 10 — UX & Design Polish

> Source: Design critique 2026-05-20. All REQs below completed.

### REQ-01 — Hero Primary CTA ✓
Button "Explore my work ↓" inside hero, anchored to `#architecture`.
Style: `bg-[#1D9E75]`, full-width on mobile.

### REQ-02 — Contact Section ✓
`#contact` section before footer. Dark `bg-[#0f1117]`. Headline, availability note,
email CTA (mailto link), LinkedIn link.

### REQ-03 — Blog Card Enrichment ✓
`summary` (14px muted) and `date` (12px lighter) displayed on BlogCard and blog index.

### REQ-04 — Service Card Icons ✓
32×32 inline SVG icons per service. Stroke `#1D9E75`, stroke-width 1.5, fill none.
Deepens on hover.

### REQ-05 — Navbar Scroll Shadow ✓
`box-shadow: 0 1px 12px rgba(0,0,0,0.08)` when `scrollY > 10px`. Transition 200ms.

### REQ-06 — Scroll-Reveal Animations ✓
CSS + IntersectionObserver. fade-up `opacity-0 translate-y-4` → `opacity-100 translate-y-0`.
Cards stagger 75ms. `prefers-reduced-motion` respected.

### REQ-07 — Footer Social Icons ✓
LinkedIn, GitHub, envelope SVG icons (16×16) prefix each footer link.
`group-hover:text-white` on icon + label.

### REQ-08 — Architecture Diagram Upgrade ✓
Service labels (Azure LB, Azure DevOps, etc.), arrow verb labels, viewBox `0 0 320 120`.

### REQ-09 — Active Nav Highlighting ✓
IntersectionObserver on `#architecture`, `#work`, `#insights`, `#services`.
Active: `text-[#0f1117] font-medium`. Inactive: `text-[#6b7280]`.

### REQ-10 — Hero Stats Label Correction ✓
- "10+" / "years · Enterprise systems"
- "95%" / "Downtime reduction"
- "5×" / "Azure certifications"

---

## Phase 11 — Blog Reactions (Supabase)

> Branch pattern: `feature/11-<slug>`

**Storage:** Supabase Postgres `reaction_counts` table + `increment_reaction` RPC.
**Auth:** None required. Rate limit: localStorage per browser, one per type per post.

### Database
- [ ] `supabase/schema.sql` — `reaction_counts` table + `increment_reaction` RPC
- [ ] Run SQL in Supabase dashboard

### Config
- [ ] `.env.local` with `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `.env.local` in `.gitignore`
- [ ] Install `@supabase/supabase-js`
- [ ] `src/lib/supabase.ts` — server + browser client singletons

### API
- [ ] `src/app/api/reactions/[slug]/route.ts` — GET counts, POST increment

### UI
- [ ] `src/types/reactions.ts` — `ReactionType` union, `ReactionCounts` interface
- [ ] `src/hooks/useReactions.ts` — fetch on mount, POST on click, optimistic update, localStorage dedup
- [ ] `src/components/blog/ReactionBar.tsx` — 4 emoji buttons, counts, active state
- [ ] `src/app/blog/[slug]/page.tsx` — add `<ReactionBar slug={slug} />`

---

## Phase 12 — Homepage i18n

> Library: `next-intl`. URLs: `/` (EN default) and `/es`.

### Setup
- [ ] Install `next-intl`
- [ ] `messages/en.json` — homepage copy in English
- [ ] `messages/es.json` — Spanish translations
- [ ] Configure `next.config.ts` with `next-intl` plugin
- [ ] `src/i18n.ts` — locales: ['en', 'es'], defaultLocale: 'en'

### Layout + Components
- [ ] Wrap `src/app/layout.tsx` with `NextIntlClientProvider`
- [ ] Create `src/app/[locale]/` route group
- [ ] Update `HeroSection`, `FeaturedWorkSection`, `HowIWorkSection`, `ServicesSection` with `useTranslations`

### Navbar
- [ ] Language toggle (EN / ES) in navbar — desktop and mobile drawer
- [ ] `useRouter` + `usePathname` from `next-intl` to switch locale

---

## Out of Scope (deferred)

| Feature | Reason deferred |
|---|---|
| Contact form with backend | Requires email service infra decision |
| Dark mode toggle | Design is intentionally mixed; toggle risks breaking hero/footer theming (ADR-009) |
| Blog pagination | Content volume doesn't warrant it |
| i18n routing (Phase 12 aside) | Being done in Phase 12 |
| Lighthouse performance audit | Tracked in tasks.md Phase 9 (complete) |
| Comments / discussion | Not aligned with site goals |
