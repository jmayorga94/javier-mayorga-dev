# Skill: architecture showcase

## Visual reference
Open `reference/mockup.html` and find the architecture section.
The cards use white background, subtle border, 32px padding, with
inline SVG diagrams. Study the SVG patterns before building.

---

## Card data (from CLAUDE.md)
```
1. title: "Legacy system → high-availability cloud"
   desc:  "Distributed Azure architecture with zero-downtime migration"
   diagramType: ha

2. title: "CI/CD pipeline re-engineering"
   desc:  "Azure DevOps pipelines with automated quality gates and IaC"
   diagramType: cicd

3. title: "Multi-cloud transformation"
   desc:  "AWS to Azure migration with unified governance and cost optimization"
   diagramType: migration

4. title: "ESB to GraphQL modernization"
   desc:  "Oracle ESB replacement with real-time GraphQL API layer"
   diagramType: api
```

---

## SVG diagram rules (exact from mockup)

ViewBox: `0 0 240 90`
```
Legacy boxes:    fill="#f3f4f6"  stroke="#d1d5db"  rx="4"
New system:      fill="#f0fdf9"  stroke="#1D9E75"  rx="4"
Arrow path:      stroke="#1D9E75"  stroke-width="1"
Arrow marker:    fill="#1D9E75"  6x6 triangle
Text:            fill="#6b7280"  font-size="9"  text-anchor="middle"
```

Each diagram type:

**ha** — legacy → splits to primary + replica
```svg
<rect x="8" y="30" w="50" h="30" legacy/>  [Legacy DB]
arrow splits →
<rect x="98" y="15" w="50" h="25" new/>    [Primary]
<rect x="98" y="50" w="50" h="25" new/>    [Replica]
arrows → <rect x="188" y="30" w="44" h="30" neutral/> [LB]
```

**cicd** — linear pipeline
```svg
[Code] → [Build] → [Test] → [Deploy]
all neutral boxes except Deploy which is new/teal
```

**migration** — left to right cloud hop
```svg
[AWS] → [Gateway] → [Azure]
AWS is legacy, Gateway and Azure are new/teal
```

**api** — protocol replacement
```svg
[ESB] → [GraphQL] → [Clients]
ESB is legacy, GraphQL and Clients are new/teal
```

---

## Component location
```
src/components/sections/ArchShowcase.tsx   ← section wrapper + grid
src/components/ui/ArchCard.tsx             ← individual card
src/components/ui/diagrams/HaDiagram.tsx   ← per type
src/components/ui/diagrams/CicdDiagram.tsx
src/components/ui/diagrams/MigrationDiagram.tsx
src/components/ui/diagrams/ApiDiagram.tsx
```

---

## Grid layout
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {architectureItems.map((item) => <ArchCard key={item.slug} {...item} />)}
</div>
```

---

## What good output looks like
- SVG uses exact colors from above — no approximations
- Each diagram is readable at card size — max 4 elements
- Cards link to `/architecture/[slug]` detail page
- All data comes from MDX frontmatter — no hardcoded arrays
- Hover state: `hover:border-[#1D9E75] transition-colors` on card
