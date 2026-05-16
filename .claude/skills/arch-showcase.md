# Skill: architecture showcase

## When to use this skill
When asked to add, update, or build anything related to the architecture
showcase section — the cards, the mini diagram previews, the data, or
the full showcase page.

---

## What the architecture showcase is

The signature section of this site. It shows real architecture diagrams
from real projects — not generic icons, not stock illustrations. Each card
contains a mini SVG diagram that previews the actual system design, plus
metadata about the engagement.

This section differentiates Javier from every other architect who just
lists technologies on a resume. It proves visual, systems-level thinking.

---

## Data structure

Architecture pieces live in `content/architecture/slug.mdx` with this frontmatter:

```yaml
---
title: "Multi-cloud transformation"
client: "Cnovate"
year: "2026"
outcome: "Cost optimization + governance"
tags: ["Azure", "Migration", "Governance"]
diagramType: "migration"   # migration | ha | cicd | api | custom
published: true
---
```

The `diagramType` field tells the showcase card which mini SVG to render.
Each type maps to a pre-built SVG component in `src/components/ui/diagrams/`.

---

## Card component structure

Location: `src/components/sections/ArchShowcase.tsx`
Mini diagrams: `src/components/ui/diagrams/`

```tsx
interface ArchCardProps {
  title: string
  client: string
  year: string
  tags: string[]
  diagramType: DiagramType
  slug: string
}

export function ArchCard({ title, client, year, tags, diagramType, slug }: ArchCardProps) {
  return (
    <Link href={`/architecture/${slug}`}>
      <div className="bg-[#141821] border border-[#1e2330] rounded-xl p-5
                      hover:border-[#1D9E75] transition-colors cursor-pointer group">
        <div className="bg-[#0f1117] border border-[#1e2330] rounded-lg h-28
                        mb-4 flex items-center justify-center overflow-hidden">
          <DiagramPreview type={diagramType} />
        </div>
        <h3 className="text-sm font-medium text-[#e5e7eb] mb-1 group-hover:text-[#5DCAA5]
                       transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[#6b7280] mb-3">{client} · {year}</p>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span key={tag}
              className="bg-[#0a1f18] border border-[#0F6E56] text-[#5DCAA5]
                         text-xs rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
```

---

## Mini SVG diagram rules

Each diagram preview is a small SVG (240×90 viewBox) that sketches the
architecture at a glance. Rules:

- Background: `#0f1117` (matches card inner bg)
- Legacy/old system boxes: `fill="#1a2235" stroke="#2a3040"`
- New/target system boxes: `fill="#0a1f18" stroke="#1D9E75"`
- Neutral boxes: `fill="#141821" stroke="#2a3040"`
- Arrows/connectors: `stroke="#5DCAA5"` (solid) or `stroke="#EF9F27"` (deprecated/warning)
- Text: `font-size: 9px`, `fill="#6b7280"` default, `fill="#5DCAA5"` for accent labels
- Keep it minimal — 3 to 5 boxes maximum, clear left-to-right or hub-spoke flow

### Pre-built diagram types

**`migration`** — left box (legacy) → arrow → right box (new cloud)
**`ha`** — single legacy → splits to primary + replica → load balancer
**`cicd`** — linear pipeline: code → build → test → deploy
**`api`** — old protocol → deprecated arrow → new API → services

If none of these fit, use `diagramType: "custom"` and build a bespoke SVG
component at `src/components/ui/diagrams/CustomDiagram.tsx`.

---

## Adding a new architecture card

1. Create `content/architecture/your-slug.mdx` with correct frontmatter
2. Write the full architecture explanation in the MDX body
3. If the `diagramType` is new, create the SVG component
4. The card will auto-appear on the showcase page via `getAllArchitecture()`
5. The grid is 2 columns on desktop, 1 on mobile — no manual layout needed

---

## Architecture detail page

Each card links to `/architecture/[slug]` which renders the full MDX.
The detail page should include:

- Title + client + year header
- The full-size architecture diagram (not the mini preview)
- The MDX body: context, problem, decisions, tradeoffs, outcome
- Tags as accent pills
- A "back to showcase" link

---

## What good output looks like

- Mini SVG is readable at small size — max 5 elements, clear flow direction
- Card hover state uses `border-[#1D9E75]` and title transitions to `text-[#5DCAA5]`
- All four existing case studies have correct `diagramType` values
- No hardcoded card list — all data comes from MDX frontmatter via `lib/mdx`
- Grid layout: `grid grid-cols-1 md:grid-cols-2 gap-4`
