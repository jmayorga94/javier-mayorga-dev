# CLAUDE.md — Javier Mayorga Personal Brand Site

## Context files — read before working

@docs/design.md
@docs/architecture.md

Before planning any feature or adding requirements → read `docs/requirements.md`
Before building any visual component → also check `reference/mockup.html`

---

## Who I am

Javier Mayorga — Cloud Architect & Enterprise Solutions Leader.
10 years building mission-critical financial systems in regulated environments.
Currently Cloud Architect at a leading cloud consultancy. Previously IT Cloud Architect
Lead at a major multilateral development bank. Based in Honduras, operating globally.

This site is my personal technical brand — not a resume.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript — always, no plain JS |
| Styling | Tailwind CSS |
| Fonts | Inter + JetBrains Mono via next/font/google |
| Content | MDX with next-mdx-remote |
| Diagrams | Inline SVG components |
| Deployment | Vercel (auto-deploy from main) |
| Database | Supabase (blog reactions) |
| Package manager | npm |

---

## Behavior rules

- Always use TypeScript — never create `.js` files
- Never introduce new colors — teal `#1D9E75` is the only accent
- Use `next/font/google` for font loading
- App Router only — never Pages Router patterns
- Server components by default — `"use client"` only when required
- Never add dependencies without a clear reason
- Never ask questions already answered in this file or in `docs/`
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
npm run build     # Production build — must pass before any commit
npm run lint      # ESLint — must pass before any commit
vercel --prod     # Manual deploy
```

---

## Feature implementation workflow

One requirement = one branch = one commit.

1. **Add to tasks.md** — before writing any code, add the new requirement as a phase or task block in `tasks.md` with all sub-tasks as `[ ]`. This is the source of truth for what is being built.
2. **Branch** — cut from `main`:
   ```bash
   git checkout main && git pull && git checkout -b feature/<task-slug>
   ```
3. **Read first** — read every file you'll touch before writing a line. Never guess.
4. **Implement** — one logical change only.
5. **Verify**:
   ```bash
   npm run build && npm run lint
   ```
6. **Commit** — conventional format: `feat(scope): imperative summary`
7. **Update tasks.md** — mark each completed sub-task `[x]` immediately after committing.
8. **Next** — back to step 1, always from an up-to-date `main`.

Rules: never mix two requirements in one branch, never commit directly to `main`.

---

## Git workflow

**Branch naming:**
- `feature/<task>-<description>`
- `fix/<task>-<description>`
- `chore/<description>`

**Commit types:** `feat` | `fix` | `chore` | `refactor` | `test` | `docs` | `style` | `ci`

**Scopes:** `design-system` | `content` | `blog` | `architecture` | `db` | `i18n` | `infra`

**Pull requests:**
1. `git push -u origin <branch>`
2. `gh pr create`
3. Squash-merge only — keep `main` history clean
