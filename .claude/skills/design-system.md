# Skill: design system

## When to use this skill
Reference this whenever making any visual or styling decision —
colors, spacing, typography, component patterns, or layout.
This is the single source of truth. Never introduce new colors
or patterns not listed here.

---

## Color tokens

### Backgrounds
```
Page background:        #0f1117
Navbar / footer:        #0a0d13
Card surface:           #141821
Elevated border bg:     #1a2235
Accent subtle bg:       #0a1f18   (teal-tinted, for accent areas)
```

### Borders
```
Default border:         #1e2330
Elevated border:        #2a3040
Accent border:          #0F6E56   (teal, for highlighted cards/tags)
Active/hover border:    #1D9E75
```

### Text
```
Primary:                #f9fafb
Secondary:              #e5e7eb
Body:                   #9ca3af
Muted:                  #6b7280
Faint:                  #4b5563
```

### Accent (teal)
```
Teal light:             #5DCAA5   (labels, icons, small text)
Teal strong:            #1D9E75   (buttons, active borders, strong accent)
Teal border:            #0F6E56   (tag borders, accent dividers)
Teal dark text:         #04342C   (text on teal button backgrounds)
```

### Semantic
```
Warning / deprecated:   #EF9F27   (amber — use for "old system" in diagrams)
Never use red for UI:   use Tailwind's red-* only for actual errors
```

---

## Typography

### Font
- Primary: Geist Sans via `next/font/google` or `next/font/local`
- Monospace: Geist Mono (for code blocks only)

### Scale
```
Display / hero:         text-4xl (36px) font-medium
Section heading:        text-2xl (24px) font-medium
Card title:             text-sm (14px) font-medium
Eyebrow label:          text-xs (12px) uppercase tracking-widest
Body:                   text-sm (14px) or text-[15px] leading-relaxed
Caption / meta:         text-xs (12px)
```

### Rules
- Font weight: 400 (body) and 500 (medium) only — never 600 or 700
- Sentence case always — never ALL CAPS for headings or titles
- Eyebrows (section labels above headings) use uppercase + tracking
- Line height: `leading-relaxed` (1.625) for body, `leading-tight` for headings

---

## Spacing

### Section layout
```
Section vertical padding:   py-20
Section horizontal padding: px-6 (mobile) px-12 (desktop)
Max content width:          max-w-5xl mx-auto (sections)
Max prose width:            max-w-3xl mx-auto (article/case study body)
```

### Component spacing
```
Card padding:           p-5 (20px)
Card gap in grid:       gap-4
Section eyebrow → h2:   mb-2 / mb-6
Between cards:          gap-4 (16px)
Between sections:       py-20 (80px top and bottom)
```

---

## Component patterns

### Card
```tsx
className="bg-[#141821] border border-[#1e2330] rounded-xl p-5"
// With hover: add "hover:border-[#1D9E75] transition-colors cursor-pointer"
```

### Section eyebrow + heading
```tsx
<p className="text-xs text-[#5DCAA5] uppercase tracking-widest mb-2">
  Section label
</p>
<h2 className="text-2xl font-medium text-[#f9fafb] mb-6">
  Section heading
</h2>
```

### Primary button
```tsx
className="bg-[#1D9E75] text-[#04342C] font-medium rounded-md px-6 py-2.5
           hover:bg-[#5DCAA5] transition-colors"
```

### Ghost button
```tsx
className="border border-[#2a3040] text-[#9ca3af] rounded-md px-6 py-2.5
           hover:border-[#5DCAA5] hover:text-[#5DCAA5] transition-colors"
```

### Accent tag (teal)
```tsx
className="bg-[#0a1f18] border border-[#0F6E56] text-[#5DCAA5]
           text-xs rounded px-2 py-0.5"
```

### Neutral tag
```tsx
className="border border-[#2a3040] text-[#9ca3af] text-xs rounded-full px-3 py-1"
```

### Language badge
```tsx
// EN badge
className="bg-[#0a1f18] border border-[#0F6E56] text-[#5DCAA5] text-xs rounded px-2 py-0.5"

// ES badge
className="bg-[#1a1f10] border border-[#3B6D11] text-[#97C459] text-xs rounded px-2 py-0.5"
```

### Outcome callout (case studies)
```tsx
className="bg-[#0a1f18] border border-[#1D9E75] rounded-xl p-6 my-8"
```

---

## Navbar

```
Background:     bg-[#0a0d13]
Border bottom:  border-b border-[#1e2330]
Logo:           text-[#e5e7eb] with accent span text-[#5DCAA5]
Nav links:      text-sm text-[#6b7280] hover:text-[#9ca3af]
CTA button:     border border-[#1D9E75] text-[#5DCAA5] text-sm px-4 py-1.5 rounded-md
Height:         h-16 (64px)
```

---

## Grid layouts

```
2-col cards:    grid grid-cols-1 md:grid-cols-2 gap-4
3-col cards:    grid grid-cols-1 md:grid-cols-3 gap-4
Stats row:      grid grid-cols-3 gap-4 (always 3, no responsive change)
Case study list: flex flex-col gap-4
```

---

## Diagram colors (mini SVG previews)

```
Legacy system box:      fill="#1a2235" stroke="#2a3040"
New/target system box:  fill="#0a1f18" stroke="#1D9E75"
Neutral box:            fill="#141821" stroke="#2a3040"
Flow arrow:             stroke="#5DCAA5"
Deprecated arrow:       stroke="#EF9F27" stroke-dasharray="3 2"
Accent text in SVG:     fill="#5DCAA5"
Muted text in SVG:      fill="#6b7280"
SVG font-size:          9px
```

---

## What to never do

- Never use white or light backgrounds — this is a dark theme site
- Never introduce a color not listed in this document
- Never use font-weight 600 or 700
- Never use gradients, shadows, blur, or glow effects
- Never use ALL CAPS for headings (eyebrow labels are the exception)
- Never use inline `style={{}}` when a Tailwind class exists
- Never hardcode data that should come from MDX frontmatter
