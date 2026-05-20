# CLAUDE.md — Javier Mayorga Personal Brand Site

## Visual reference
The approved mockup is at `reference/mockup.html`.
Open and study this file before building any page or component.
Every color, spacing value, and component pattern in this document
was extracted directly from that file. When in doubt — check the mockup.

---

## Who I am

Javier Mayorga — Cloud Architect & Enterprise Solutions Leader.
10 years building mission-critical financial systems in regulated environments.
Currently Cloud Architect at Cnovate. Previously IT Cloud Architect Lead at the
Inter-American Development Bank (IDB). Based in Honduras, operating globally.

This site is my personal technical brand — not a resume. It demonstrates
how I think, how I architect systems, and how I lead technical decisions.

---

## Site goals

- Showcase architecture thinking through real diagrams and decisions
- Present case studies with real outcomes and business impact
- Publish technical insights in Spanish and English
- Position me for senior roles, consulting engagements, and future courses
- Feel like: technical portfolio + engineering blog + architecture showcase

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript — always, no plain JS |
| Styling | Tailwind CSS |
| Font | Inter via next/font/google |
| Content | MDX with next-mdx-remote |
| Diagrams | Inline SVG components |
| Deployment | Vercel (auto-deploy from main) |
| Package manager | npm |

---

## Design system — extracted from approved mockup

### Base
```
font-family:     'Inter', -apple-system, BlinkMacSystemFont, sans-serif
font-size:       16px base
line-height:     1.75
body color:      #374151
body background: #fdfcfb
scroll-behavior: smooth
box-sizing:      border-box on all elements
```

### Colors

#### Dark sections (hero, footer)
```
background:        #0f1117
card surface:      #141821
border:            #1e2330
text primary:      #f9fafb
text secondary:    #9ca3af
text muted:        #6b7280
```

#### Light sections (all content sections)
```
background:        #fdfcfb  (body default — warm off-white)
section services:  #f0fdf9  (teal-tinted band for services section)
card background:   #ffffff
card border:       1px solid #f3f4f6
text primary:      #0f1117
text secondary:    #374151
text muted:        #6b7280
```

#### Teal accent
```
strong:            #1D9E75  (buttons, eyebrows, arrows, active states)
hover:             #178f68  (button hover)
subtle bg:         #f0fdf9  (services section, svg boxes)
subtle border:     #d1fae5  (service card borders)
```

#### SVG diagram colors
```
legacy box fill:   #f3f4f6   stroke: #d1d5db
new system fill:   #f0fdf9   stroke: #1D9E75
arrow stroke:      #1D9E75   stroke-width: 1
text fill:         #6b7280   font-size: 9px
```

### Typography scale
```
hero headline:     56px  font-weight: 500  line-height: 1.1  color: #f9fafb
hero sub:          18px  font-weight: 400  color: #9ca3af    line-height: 1.6
hero stat value:   32px  font-weight: 500  color: #f9fafb
hero stat label:   14px  font-weight: 400  color: #9ca3af
hero eyebrow:      11px  uppercase  letter-spacing: 0.1em  color: #1D9E75
hero location:     14px  color: #6b7280

section eyebrow:   11px  uppercase  letter-spacing: 0.1em  color: #1D9E75
section title:     36px  font-weight: 500  color: #0f1117   line-height: 1.2
card title:        16px  font-weight: 500  color: #0f1117
card desc:         14px  font-weight: 400  color: #6b7280
case metric big:   48px  font-weight: 500  color: #1D9E75   line-height: 1
blog lang badge:   11px  uppercase  letter-spacing: 0.1em  color: #1D9E75
service title:     18px  font-weight: 500  color: #0f1117
service desc:      14px  font-weight: 400  color: #6b7280   line-height: 1.6

footer logo:       18px  font-weight: 500  color: #f9fafb
footer signoff:    14px  color: #9ca3af    line-height: 1.6  max-width: 280px
footer links:      14px  color: #9ca3af
footer copy:       14px  color: #6b7280

Mobile hero:       40px (max-width: 768px) → 32px (max-width: 480px)
Mobile section:    28px (max-width: 480px)
```

### Spacing
```
max content width:     1200px  margin: 0 auto
navbar padding:        16px 24px
hero padding:          120px 24px 64px
section padding:       96px 24px
section-header mb:     64px
section eyebrow mb:    16px
arch/case card padding: 32px
blog card padding:     24px (left: 28px)
services card padding: 32px
footer padding:        64px 24px
footer-top mb:         48px
footer-bottom pt:      24px
card gap:              24px
nav links gap:         32px
hero stats gap:        48px
footer links gap:      32px
```

### Component patterns

#### Navbar
```css
position: fixed; top: 0; left: 0; right: 0; z-index: 100;
background: #ffffff;
logo: 18px font-weight 500 color #0f1117
nav links: 14px color #6b7280 hover #0f1117
cta: 14px font-weight 500 color #ffffff bg #1D9E75
    padding 10px 20px border-radius 6px hover bg #178f68
```

#### Section divider
```css
height: 2px; background: #1D9E75;
— appears between every major section
```

#### Architecture card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-radius: 8px;
padding: 32px;
grid: 2 columns, gap 24px
```

#### Case study card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-radius: 8px;
padding: 32px;
display: flex; gap: 24px; align-items: flex-start;
metric number: 48px font-weight 500 color #1D9E75 min-width 100px
grid: 2 columns, gap 24px
```

#### Blog card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-left: 3px solid #1D9E75;   ← signature left accent border
border-radius: 8px;
padding: 24px; padding-left: 28px;
grid: 2 columns, gap 24px
```

#### Service card
```css
background: #ffffff;
border: 1px solid #d1fae5;        ← teal-tinted border
border-radius: 8px;
padding: 32px;
parent section background: #f0fdf9
grid: 3 columns, gap 24px
```

#### Footer
```css
background: #0f1117; padding: 64px 24px;
top: flex justify-between, mb 48px
bottom: border-top 1px solid #1e2330, pt 24px
```

### Responsive breakpoints
```
max-width: 1024px → arch-grid, case-grid, services-grid: 1 column
max-width: 768px  → hero 40px, nav-links hidden,
                    hero-stats column, blog-grid 1 col,
                    case-card column, case-metric 36px min-width auto,
                    footer-top column gap 32px
max-width: 480px  → hero 32px, section-title 28px
```

---

## Site sections

1. **Navbar** — fixed, white, logo + links + CTA
2. **Hero** — full viewport dark, headline, location, subline, stats anchored bottom
3. **Section divider** — 2px teal line between every section
4. **Architecture showcase** — 2-col grid, inline SVG diagrams
5. **Case studies** — 2-col grid, large teal metric number + content
6. **Technical insights** — 2-col blog grid with left teal border accent
7. **Services** — 3-col grid on teal-tinted background
8. **Footer** — dark, logo + signoff left, links right, copyright bottom

---

## Nav links (exact)
```
Architecture · Work · Insights · Services
CTA: "Get in touch" → links to #contact (footer)
```

---

## Real content

### Hero
```
eyebrow:   "Cloud Architect & Enterprise Solutions Leader"
headline:  "I design systems that organizations trust with what matters most"
location:  "Based in Honduras · Working globally"
subline:   "10 years building mission-critical financial systems in regulated
            environments. IDB · Cnovate · Sapiens."
stats:
  - value: "10+"  label: "years · Enterprise systems"
  - value: "95%"  label: "Downtime reduction at IDB"
  - value: "5×"   label: "Azure certifications"
```

### Architecture showcase
```
1. Legacy system → high-availability cloud
   desc: Distributed Azure architecture with zero-downtime migration
   diagramType: ha

2. CI/CD pipeline re-engineering
   desc: Azure DevOps pipelines with automated quality gates and IaC
   diagramType: cicd

3. Multi-cloud transformation
   desc: AWS to Azure migration with unified governance and cost optimization
   diagramType: migration

4. ESB to GraphQL modernization
   desc: Oracle ESB replacement with real-time GraphQL API layer
   diagramType: api
```

### Case studies
```
1. metric: "95%"  title: "Legacy system → high-availability cloud"
   client: "Inter-American Development Bank (IDB)"
   desc: "Downtime reduction through distributed Azure architecture"

2. metric: "30%"  title: "CI/CD pipeline re-engineering"
   client: "Inter-American Development Bank (IDB)"
   desc: "Faster deployments with automated DevOps workflows"

3. metric: "2×"   title: "AWS → Azure multi-cloud transformation"
   client: "Cnovate"
   desc: "Cost optimization and unified governance"

4. metric: "RT"   title: "Oracle ESB → GraphQL modernization"
   client: "Sapiens"
   desc: "Real-time financial data API layer"
```

### Blog posts
```
1. lang: EN  title: "When to migrate to Azure — and when not to"
2. lang: ES  title: "Arquitectura event-driven en sistemas financieros regulados"
3. lang: EN  title: "How I use LLMs to accelerate architecture design"
4. lang: EN  title: "Zero-downtime migrations — what nobody tells you"
```

### Services
```
1. "Cloud architecture consulting"
   Translating business requirements into scalable Azure solutions
   with clear delivery roadmaps.

2. "Cloud migration strategy"
   End-to-end planning for legacy and multi-cloud environments,
   zero downtime, full governance.

3. "Technical leadership advisory"
   Supporting CTOs and engineering teams with architecture decisions,
   delivery frameworks, and team alignment.
```

### Footer
```
logo:    "Javier Mayorga"
signoff: "Building systems that last. Writing about what I learn."
links:   LinkedIn · GitHub · Email
copy:    "© 2026 Javier Mayorga. All rights reserved."
```

---

## Content conventions

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

## Bilingual strategy
- Each post has `lang: en` or `lang: es` in frontmatter
- Blog index has filter: All / EN / ES
- URL: `/blog/slug` — no language prefix
- No automatic translation — each post is written in one language only

---

## Claude behavior rules
- Always open `reference/mockup.html` when building any visual component
- Always use TypeScript — never create `.js` files
- Always follow the design system above exactly — never introduce new colors
- Match spacing values precisely from the mockup — use the 8px grid
- Use `next/font/google` for Inter font loading
- App Router only — never Pages Router patterns
- Server components by default — `"use client"` only when required
- Never add dependencies without clear reason
- Never ask questions already answered in this document
- Always update `tasks.md` after completing any task

---

## Available skills

| File | Use when |
|---|---|
| `.claude/skills/component.md` | Building any UI component |
| `.claude/skills/page.md` | Scaffolding a new page or route |
| `.claude/skills/arch-showcase.md` | Adding to the architecture showcase |
| `.claude/skills/case-study.md` | Building case study pages |
| `.claude/skills/design-system.md` | Any visual or styling decision |

---

## Commands
```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # ESLint
vercel --prod     # Manual deploy
```

## What Claude should always do
- Follow the dark theme design system exactly
- Use TypeScript — no plain JS files
- Keep components small and focused
- Use Tailwind utility classes, no custom CSS unless necessary
- When building a new page, always check existing components first
- When adding content, always use the MDX frontmatter conventions above
- Never add unnecessary dependencies
- Never ask for information that is already defined in this document.
  Read CLAUDE.md fully before asking any clarifying question.
- Always update tasks.md after completing any task.

  ## Feature Implementation Workflow

Follow this process for every task in tasks.md, in order. One requirement = one branch = one commit.

### Step-by-step

1. **Branch** — cut from `main`:
   ```bash
   git checkout main && git pull && git checkout -b feature/<task-slug>
   ```

2. **Read first** — before writing a single line of code, read every file you'll touch. Never guess existing code.

3. **Implement** — one logical change only. Do not mix unrelated fixes into the same branch.

4. **Verify** — run both checks before committing:
   ```bash
   npm run build   # must pass with zero errors
   npm run lint    # must pass clean
   ```

5. **Commit** — one atomic commit, conventional format:
   ```bash
   git commit -m "feat(design-system): add hero CTA button"
   ```

6. **Update tasks.md** — mark each completed sub-task `[x]` immediately after committing.

7. **Next feature** — go back to step 1. Always branch from an up-to-date `main`.

### Rules

- Never mix two requirements in a single branch
- Never commit if `npm run build` fails
- Never skip lint
- Never commit directly to `main`
- tasks.md is updated in the same commit only if the tasks.md change is the only change; otherwise update it in a follow-up commit on `main` after merge

---

## Git Workflow

### Branch naming
- Features: `feature/<task>-<brief-description>`
- Bug fixes: `fix/<task>-<brief-description>`
- Chores: `chore/<brief-description>`

All branches cut from `main`. Never commit directly to `main`.

### Conventional commits
Format: `<type>(<scope>): <imperative summary>`

| Type | When to use |
|------|-------------|
| `feat` | New feature or UI component |
| `fix` | Bug fix |
| `chore` | Deps, config, tooling — no production code |
| `refactor` | Code restructure without behavior change |
| `test` | Add/update tests |
| `docs` | Documentation only |
| `style` | Formatting, whitespace |
| `ci` | CI/CD pipeline changes |

Scopes: `auth` | `wizard` | `booking` | `dashboard` | `db` | `i18n` | `design-system` | `messaging`

Examples:
```
feat(wizard): add step 1 business info form
fix(auth): redirect to correct locale after OAuth callback
chore(deps): bump supabase-js to 2.45
test(wizard): add unit tests for step validation
```

### Atomic commits
One logical change per commit — if reverting it leaves the app in a coherent state, it's atomic. Stage specific files; never `git add .` blindly. Migrations go in their own commit, separate from dependent UI code.

### Pull requests
After completing a task:
1. Push branch: `git push -u origin <branch>`
2. Open PR: `gh pr create` (the repo template auto-populates the body)
3. Reviewers are auto-assigned via CODEOWNERS (`@jmayorga94`)
4. Merge only after approval — prefer squash-merge to keep `main` history clean
