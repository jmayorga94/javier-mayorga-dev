# Javier Mayorga — Personal Brand Site

## Who I am
Cloud Architect and Enterprise Solutions Leader with 10 years of experience
building mission-critical financial systems in regulated environments.

## Site goal
A personal technical brand site that showcases architecture thinking,
case studies, and technical insights. Future plans include courses.
Not a resume — a demonstration of how I think and work.

## Tech stack
- Framework: Next.js 15 App Router
- Styling: Tailwind CSS
- Content: MDX with next-mdx-remote
- Diagrams: Mermaid + custom SVG React components
- Deployment: Vercel
- Language: TypeScript

## Design system
- Theme: Dark background (#0f1117), teal accent (#5DCAA5, #1D9E75)
- Font: Inter or Geist
- Style: Minimal, technical, premium. No gradients, no noise.
- Inspiration: milanjovanovic.tech, juliocasal.com

## Project structure
src/
  app/          → Next.js pages and layouts
  components/   → Reusable UI components
  content/      → MDX blog posts and case studies
  lib/          → Utilities, MDX parser, helpers
  styles/       → Global CSS

content/
  posts/        → Blog articles (ES and EN)
  case-studies/ → Deep dive case studies
  architecture/ → Architecture showcase pieces

## Content conventions
- Blog posts: /content/posts/YYYY-MM-DD-slug.mdx
- Frontmatter fields: title, date, lang (en|es), tags, summary, published
- Case studies: /content/case-studies/slug.mdx
- Frontmatter: title, client, year, outcome, tags, lang

## Bilingual strategy
- Each post has a `lang` field in frontmatter: en or es
- Blog page has a filter: All / EN / ES
- No automatic translation — each post is written in one language only
- URL structure: /blog/slug (no /en/ or /es/ prefix needed)

## Site sections
1. Hero — positioning statement + stats
2. Architecture showcase — 4 diagram cards with mini SVG previews
3. Case studies — 4 real stories with outcomes
4. Technical insights — blog with EN/ES filter
5. What I do — 3 consulting services
6. Contact — email + LinkedIn

## Key case studies (already defined)
1. Legacy system → HA cloud (IDB) — 95% downtime reduction
2. CI/CD pipeline re-engineering (IDB) — 30% faster deployments
3. AWS → Azure multi-cloud transformation (Cnovate)
4. Oracle ESB → GraphQL API modernization (Sapiens)

## Commands
- Dev server: npm run dev
- Build: npm run build
- Deploy: push to main → Vercel auto-deploys

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

---