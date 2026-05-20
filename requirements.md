# UX & Design Improvement Requirements — v2

> Source: Design critique conducted 2026-05-20 via full visual audit of javiermayorga.tech.
> Every requirement maps to a task in tasks.md Phase 10.
> Acceptance criteria must be met before marking a task complete.

---

## Scope

This document defines the requirements for evolving the site from a well-structured wireframe
into a polished, modern portfolio that converts visitors into leads. The tech stack, design
tokens, and content strategy defined in CLAUDE.md remain unchanged. Only UX, layout, and
interaction improvements are in scope.

---

## REQ-01 — Hero Primary CTA

**Problem:** The hero has no in-body action. The only CTA is "Get in touch" in the navbar,
which is easy to miss on first load and doesn't guide the visitor into the work.

**Requirement:** Add a primary button inside the hero section that anchors to `#architecture`.

**Acceptance criteria:**
- Button text: "Explore my work" with a down-arrow glyph (↓)
- Style: `bg-[#1D9E75] text-white` with `hover:bg-[#178f68]` transition
- Positioned below the subline text, above the stats row
- On mobile: full-width button
- Smooth scroll to the architecture section on click

---

## REQ-02 — Contact Section

**Problem:** The footer has LinkedIn/GitHub/Email links but no structured contact section.
Visitors who want to engage have no clear place to land. "Get in touch" in the navbar
links to `#contact` which doesn't exist — this is a broken anchor.

**Requirement:** Add a `#contact` section immediately before the footer.

**Acceptance criteria:**
- Dark background (`bg-[#0f1117]`) matching the footer so they flow together
- Headline: "Let's work together" or similar
- 1-2 sentence availability note (e.g. "Open to consulting engagements and advisory roles.")
- Email CTA button: primary teal style linking to `mailto:javier.mayorga@cnovate.io`
- LinkedIn link displayed as secondary text link
- Section is reachable via `id="contact"` so navbar "Get in touch" works correctly
- SectionDivider appears above it (above the dark band)

---

## REQ-03 — Blog Card Enrichment

**Problem:** Blog cards show only the post title and a language badge. Visitors cannot
evaluate whether a post is relevant to them without clicking through. Summary and date
are already in the frontmatter but not surfaced.

**Requirement:** Display `summary` and `date` fields on `BlogCard`.

**Acceptance criteria:**
- `summary` appears below the title, styled as `text-[14px] text-[#6b7280]`, max 2 lines
- `date` appears below the summary in `text-[12px] text-[#9ca3af]`, formatted as "Jan 15, 2024"
- Language badge remains in top-left position
- Card height should grow naturally — no fixed height or truncation that hides content
- Same changes applied to the blog index page cards

---

## REQ-04 — Service Card Icons

**Problem:** The 3-column services grid has three visually identical cards: only the title
differs. There is no visual anchor to help the eye differentiate the three offerings quickly.

**Requirement:** Add a unique SVG icon to each `ServiceCard`.

**Acceptance criteria:**
- Icons are inline SVG (no external dependencies)
- Icon size: 32×32px, stroke color `#1D9E75`, stroke-width 1.5, fill none
- Positioned above the card title
- Icon concepts per service:
  - Cloud architecture consulting → cloud with nodes
  - Cloud migration strategy → arrows moving between two clouds
  - Technical leadership advisory → a person/org chart node
- On hover, icon color deepens slightly (opacity or stroke color transition)

---

## REQ-05 — Navbar Scroll State

**Problem:** The fixed white navbar has no visual separation from page content when
the user scrolls. On light-background sections (Architecture, Case Studies, Blog) the
navbar blends in and loses its sense of being a fixed overlay.

**Requirement:** Add a box-shadow to the navbar when the page is scrolled past 10px.

**Acceptance criteria:**
- `"use client"` component that listens to `scroll` event
- Below 10px scroll: no shadow (transparent)
- Above 10px: `box-shadow: 0 1px 12px rgba(0,0,0,0.08)` (subtle, not dramatic)
- Transition: `transition-shadow duration-200`
- No layout shift — navbar height stays fixed

---

## REQ-06 — Scroll-Reveal Animations

**Problem:** The page loads all content simultaneously with no motion. Modern portfolio
sites use scroll-triggered reveals to create a sense of depth and draw attention to
content as it enters the viewport.

**Requirement:** Add fade-up-on-enter animations to section content blocks.

**Acceptance criteria:**
- Use CSS + IntersectionObserver — no animation library dependency
- Initial state: `opacity-0 translate-y-4`
- Entered state: `opacity-100 translate-y-0` with `transition duration-500 ease-out`
- Applies to: card grids (each card staggers by 75ms), section headers, case metrics
- Hero content is exempt — it should appear immediately
- `prefers-reduced-motion` media query: animations disabled if user prefers no motion

---

## REQ-07 — Footer Social Icons

**Problem:** Footer links "LinkedIn · GitHub · Email" are plain text. Every other element
in the footer is typographically styled but these look like placeholder links.

**Requirement:** Prefix each footer link with its SVG icon.

**Acceptance criteria:**
- LinkedIn: standard LinkedIn logo mark (inline SVG)
- GitHub: GitHub mark (inline SVG, Octocat outline)
- Email: envelope SVG
- Icon size: 16×16px, `text-[#9ca3af]` fill, sits to the left of the text label
- On hover: icon and text shift to `text-white` together
- Links remain the same hrefs — no functional change

---

## REQ-08 — Architecture Diagram Visual Upgrade

**Problem:** The four SVG diagrams (HA, CI/CD, Migration, API) are basic box-and-arrow
schematics. They look like rough wireframes rather than thoughtful architecture artifacts.
For a Cloud Architect's portfolio, these are the most critical visual proof-of-work.

**Requirement:** Elevate each diagram with Azure/cloud service labels and improved visual hierarchy.

**Acceptance criteria:**
- Each diagram node includes: icon area (16×16 reserved space top-left), service name (bold), role label (muted)
- Azure service names added where applicable (e.g. "Azure LB", "Azure DevOps", "API Management")
- Arrow labels: short verbs (e.g. "replicates", "deploys", "routes")
- viewBox can grow to `0 0 320 120` if needed for readability
- Legacy nodes: `fill="#f3f4f6" stroke="#d1d5db"` (unchanged)
- New/Azure nodes: `fill="#f0fdf9" stroke="#1D9E75"` (unchanged)
- No external images — keep everything inline SVG

---

## REQ-09 — Active Nav Section Highlighting

**Problem:** The navbar has no indication of which section the user is currently viewing.
On a single-page layout this is standard UX that signals location to the visitor.

**Requirement:** Highlight the active nav link based on the visible section.

**Acceptance criteria:**
- Use IntersectionObserver with a `rootMargin` that activates when section crosses 30% of viewport
- Active link color: `text-[#0f1117] font-medium` (vs. default `text-[#6b7280]`)
- Sections watched: `#architecture`, `#work`, `#insights`, `#services`
- No jitter — debounce or use threshold array to prevent flicker at boundaries
- "Get in touch" CTA is never treated as an active state (always teal)

---

## REQ-10 — Hero Stats Label Correction

**Problem:** Current stat labels are "less downtime", "faster delivery", "cost efficiency"
which are paraphrases. CLAUDE.md specifies exact labels that should be used.

**Requirement:** Correct stats labels to match the approved content spec.

**Acceptance criteria:**
- Stat 1: value "10+", label "years · Enterprise systems"
- Stat 2: value "95%", label "Downtime reduction at IDB"
- Stat 3: value "5×", label "Azure certifications"
- Verify these display correctly at mobile breakpoints

---

## Out of Scope (Phase 10)

The following were identified but are deferred:

- Full contact form with backend (email service integration) — requires infra decision
- Dark mode toggle — design system is intentionally light/dark mixed; adding toggle risks breaking the hero/footer theming
- Blog pagination — content volume doesn't warrant it yet
- i18n routing (`/en/`, `/es/`) — deferred until content volume justifies it
- Lighthouse Performance audit — tracked separately in Phase 9 of tasks.md
