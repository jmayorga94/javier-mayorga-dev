# Skill: case study page

## When to use this skill
When asked to build or update the case study detail page template,
the case studies index page, or any component specific to how
case studies are rendered.

---

## What a case study is on this site

A case study is a deep-dive page that tells the full story of a real
engagement. It is NOT a portfolio thumbnail. It shows:

1. The situation — what the client had, what was broken or missing
2. The challenge — constraints, risk, technical complexity
3. The approach — how Javier thought about it, what options were considered
4. The architecture — the actual design decisions made
5. The outcome — measurable business and technical results

The goal is to let a CTO, engineering director, or recruiter read this
and think: "this person thinks exactly the way we need."

---

## Data structure

Case studies live in `content/case-studies/slug.mdx`:

```yaml
---
title: "Legacy system to high-availability cloud"
client: "Inter-American Development Bank"
clientShort: "IDB"
year: "2024"
role: "IT Cloud Architect Lead"
outcome: "95% reduction in system downtime"
tags: ["Azure", "HA", "IaC", "Zero downtime", "Terraform"]
lang: "en"
published: true
---
```

The MDX body follows this structure (use these as H2 headings):

```
## Context
## The challenge
## Architecture approach
## Key decisions
## Outcome
```

---

## Case study index page

Location: `src/app/case-studies/page.tsx`

Renders a vertical list of case study cards. Each card shows:
- A large number (01, 02, 03, 04) in muted color
- Title and client/description
- The outcome metric prominently in teal

```tsx
// Card layout — 3 column grid: number | content | metric
<div className="grid grid-cols-[48px_1fr_auto] gap-5 items-center
                bg-[#141821] border border-[#1e2330] rounded-xl p-5
                hover:border-[#1D9E75] transition-colors">
  <span className="text-3xl font-medium text-[#1e2330]">01</span>
  <div>
    <h3 className="text-sm font-medium text-[#e5e7eb] mb-1">{title}</h3>
    <p className="text-xs text-[#6b7280]">{client} · {tags}</p>
  </div>
  <div className="text-right">
    <p className="text-lg font-medium text-[#5DCAA5]">{outcomeValue}</p>
    <p className="text-xs text-[#6b7280]">{outcomeLabel}</p>
  </div>
</div>
```

---

## Case study detail page

Location: `src/app/case-studies/[slug]/page.tsx`

### Layout structure

```
[Navbar — from root layout]

[Header section]
  - Eyebrow: clientShort + year + role
  - Title: large, font-medium
  - Outcome metric: prominent teal callout box
  - Tags: accent pills

[Content section — max-w-3xl centered]
  - MDX body renders here
  - Diagrams embedded via <DiagramBlock> MDX component

[Footer — from root layout]
```

### Outcome callout box

The outcome metric gets a special callout at the top of every case study —
this is the hook that keeps readers engaged:

```tsx
<div className="bg-[#0a1f18] border border-[#1D9E75] rounded-xl p-6 my-8">
  <p className="text-xs text-[#5DCAA5] uppercase tracking-widest mb-2">Outcome</p>
  <p className="text-2xl font-medium text-[#f9fafb]">{outcome}</p>
</div>
```

### MDX prose styles

Apply these Tailwind prose overrides for MDX body content:

```tsx
<div className="
  prose prose-invert max-w-none
  prose-headings:font-medium prose-headings:text-[#f9fafb]
  prose-p:text-[#9ca3af] prose-p:leading-relaxed
  prose-strong:text-[#e5e7eb]
  prose-code:text-[#5DCAA5] prose-code:bg-[#141821] prose-code:px-1 prose-code:rounded
  prose-pre:bg-[#141821] prose-pre:border prose-pre:border-[#1e2330]
  prose-li:text-[#9ca3af]
  prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
">
  <MDXContent />
</div>
```

---

## DiagramBlock MDX component

Location: `src/components/mdx/DiagramBlock.tsx`

Used inside case study MDX to embed a full-size architecture diagram:

```tsx
// Usage in MDX:
// <DiagramBlock type="migration" title="AWS to Azure migration" />

interface DiagramBlockProps {
  type: string
  title?: string
}

export function DiagramBlock({ type, title }: DiagramBlockProps) {
  return (
    <figure className="my-8 bg-[#141821] border border-[#1e2330] rounded-xl p-6">
      {title && (
        <figcaption className="text-xs text-[#6b7280] uppercase tracking-widest mb-4">
          {title}
        </figcaption>
      )}
      <div className="flex items-center justify-center min-h-[200px]">
        {/* full-size diagram SVG for the given type */}
      </div>
    </figure>
  )
}
```

---

## What good output looks like

- Outcome metric is always the first thing a reader sees after the title
- MDX prose uses `prose-invert` with the custom overrides above
- No hardcoded case study data — everything comes from MDX frontmatter
- Detail page has `generateStaticParams()` and `generateMetadata()`
- `notFound()` is called if slug doesn't match any published case study
- Reading time is shown: calculate from MDX content word count (~200 wpm)
