# Skill: case study pages

## Visual reference
Open `reference/mockup.html` and find the case studies section.
The signature element is the large teal metric number (48px, #1D9E75)
anchored left inside each card, with content flowing to the right.

---

## Case study card pattern (from mockup)
```tsx
<div className="bg-white border border-[#f3f4f6] rounded-lg p-8
                flex gap-6 items-start">
  <span className="text-[48px] font-medium text-[#1D9E75]
                   leading-none min-w-[100px]">
    {metric}
  </span>
  <div>
    <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
    <p className="text-[14px] text-[#6b7280] mb-2">{client}</p>
    <p className="text-[14px] text-[#6b7280]">{desc}</p>
  </div>
</div>
```

---

## Frontmatter (use exactly)
```yaml
---
title: "Case study title"
client: "Full organization name"
clientShort: "Short name"
year: "2024"
metric: "95%"
metricLabel: "downtime reduction"
tags: ["Azure", "HA"]
lang: "en"
published: true
---
```

---

## MDX body structure
Use these H2 headings in every case study:
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

```tsx
// Grid: grid-cols-1 lg:grid-cols-2 gap-6
// Each card links to /case-studies/[slug]
// Show metric prominently — this is the hook
```

## Case study detail page
Location: `src/app/case-studies/[slug]/page.tsx`

Layout:
```
1. Hero area (dark #0f1117):
   - eyebrow: clientShort + year
   - title: large heading
   - metric callout box

2. Section divider (2px teal)

3. Content area (bg #fdfcfb):
   - MDX body with prose styles
   - DiagramBlock components embedded

4. Section divider

5. Back link
```

Metric callout box:
```tsx
<div className="bg-[#f0fdf9] border border-[#d1fae5] rounded-lg p-8 my-8">
  <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-2">
    Outcome
  </p>
  <p className="text-[48px] font-medium text-[#1D9E75] leading-none">
    {metric}
  </p>
  <p className="text-[14px] text-[#6b7280] mt-2">{metricLabel}</p>
</div>
```

MDX prose classes:
```tsx
<div className="prose max-w-none
  prose-headings:font-medium prose-headings:text-[#0f1117]
  prose-p:text-[#374151] prose-p:leading-relaxed
  prose-strong:text-[#0f1117]
  prose-h2:text-[24px] prose-h2:mt-12 prose-h2:mb-4
  prose-li:text-[#374151]">
```

---

## What good output looks like
- Metric number is always the first visual anchor on the card
- Detail page has `generateStaticParams()` and `generateMetadata()`
- `notFound()` called for missing slugs
- Only published case studies appear (check `published: true`)
- Reading time shown: word count ÷ 200
