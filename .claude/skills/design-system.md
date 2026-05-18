# Skill: design system

## Source of truth
The approved mockup is at `reference/mockup.html`.
Every value in this file was extracted directly from that file.
When building anything visual, open the mockup first.

---

## Color tokens

### Dark sections (hero, footer)
```
page bg:           #0f1117
card surface:      #141821
border:            #1e2330
text primary:      #f9fafb
text muted:        #9ca3af
text faint:        #6b7280
```

### Light sections (all content)
```
body bg:           #fdfcfb       ← warm off-white, not pure white
services bg:       #f0fdf9       ← teal-tinted, services section only
card bg:           #ffffff
card border:       #f3f4f6       ← very subtle
text primary:      #0f1117
text body:         #374151
text muted:        #6b7280
```

### Teal accent
```
strong:            #1D9E75       ← buttons, eyebrows, arrows, dividers
hover:             #178f68       ← button hover only
subtle bg:         #f0fdf9       ← svg new-system boxes, services section
subtle border:     #d1fae5       ← service card borders
```

### SVG diagrams
```
legacy box:        fill #f3f4f6  stroke #d1d5db
new system box:    fill #f0fdf9  stroke #1D9E75
arrow:             stroke #1D9E75  stroke-width 1
text:              fill #6b7280  font-size 9px
```

---

## Typography

### Font loading
```tsx
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })
```

### Scale (desktop)
```
hero headline:     text-[56px]  font-medium  leading-[1.1]   text-[#f9fafb]
hero sub:          text-[18px]  font-normal  leading-[1.6]   text-[#9ca3af]
hero stat value:   text-[32px]  font-medium                  text-[#f9fafb]
hero stat label:   text-[14px]  font-normal                  text-[#9ca3af]
hero location:     text-[14px]  font-normal                  text-[#6b7280]
eyebrow:           text-[11px]  uppercase tracking-[0.1em]   text-[#1D9E75]
section title:     text-[36px]  font-medium  leading-[1.2]   text-[#0f1117]
card title:        text-[16px]  font-medium                  text-[#0f1117]
card desc:         text-[14px]  font-normal                  text-[#6b7280]
case metric:       text-[48px]  font-medium  leading-[1]     text-[#1D9E75]
service title:     text-[18px]  font-medium                  text-[#0f1117]
service desc:      text-[14px]  font-normal  leading-[1.6]   text-[#6b7280]
footer logo:       text-[18px]  font-medium                  text-[#f9fafb]
footer signoff:    text-[14px]  font-normal  leading-[1.6]   text-[#9ca3af]
```

### Responsive overrides
```
768px:  hero headline → text-[40px]
480px:  hero headline → text-[32px]
        section title → text-[28px]
```

### Rules
- Weights: 400 and 500 only — never 600 or 700
- Sentence case always — never ALL CAPS for headings
- Eyebrows use uppercase + tracking — only exception
- Never use bold for emphasis — use color or size instead

---

## Spacing system (8px grid)

```
navbar padding:         py-4 px-6        (16px 24px)
hero padding:           pt-[120px] pb-16 px-6
section padding:        py-24 px-6       (96px 24px)
section-header mb:      mb-16            (64px)
eyebrow mb:             mb-4             (16px)
card padding:           p-8              (32px)
blog card padding:      p-6 pl-7         (24px, left 28px)
footer padding:         py-16 px-6       (64px 24px)
footer-top mb:          mb-12            (48px)
footer-bottom pt:       pt-6             (24px)
card gap:               gap-6            (24px)
nav links gap:          gap-8            (32px)
hero stats gap:         gap-12           (48px)
footer links gap:       gap-8            (32px)
max content width:      max-w-[1200px] mx-auto
```

---

## Component patterns

### Navbar
```tsx
<nav className="fixed top-0 left-0 right-0 z-[100] bg-white">
  <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
    <a className="text-[18px] font-medium text-[#0f1117]">Javier Mayorga</a>
    <div className="flex gap-8">
      <a className="text-[14px] text-[#6b7280] hover:text-[#0f1117] transition-colors">
    </div>
    <a className="text-[14px] font-medium text-white bg-[#1D9E75] px-5 py-2.5
                  rounded-md hover:bg-[#178f68] transition-colors">
      Get in touch
    </a>
  </div>
</nav>
```

### Section divider
```tsx
<div className="h-[2px] bg-[#1D9E75]" />
// Place between every major section — this is a signature element
```

### Section wrapper
```tsx
<section className="py-24 px-6">
  <div className="max-w-[1200px] mx-auto">
    <div className="mb-16">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">
        Section label
      </p>
      <h2 className="text-[36px] font-medium text-[#0f1117] leading-[1.2]">
        Section heading
      </h2>
    </div>
    {/* content */}
  </div>
</section>
```

### Architecture card
```tsx
<div className="bg-white border border-[#f3f4f6] rounded-lg p-8">
  <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
  <p className="text-[14px] text-[#6b7280] mb-6">{desc}</p>
  <svg viewBox="0 0 240 90">{/* inline SVG diagram */}</svg>
</div>
// Grid: grid-cols-2 gap-6
```

### Case study card
```tsx
<div className="bg-white border border-[#f3f4f6] rounded-lg p-8 flex gap-6 items-start">
  <span className="text-[48px] font-medium text-[#1D9E75] leading-none min-w-[100px]">
    {metric}
  </span>
  <div>
    <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
    <p className="text-[14px] text-[#6b7280] mb-2">{client}</p>
    <p className="text-[14px] text-[#6b7280]">{desc}</p>
  </div>
</div>
// Grid: grid-cols-2 gap-6
```

### Blog card
```tsx
<article className="bg-white border border-[#f3f4f6] border-l-[3px] border-l-[#1D9E75]
                    rounded-lg p-6 pl-7">
  <span className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] block mb-3">
    {lang}
  </span>
  <h3 className="text-[16px] font-medium text-[#0f1117] leading-[1.4]">{title}</h3>
</article>
// Grid: grid-cols-2 gap-6
// The left border accent is the signature of this component — never remove it
```

### Service card
```tsx
// Parent section has bg-[#f0fdf9]
<div className="bg-white border border-[#d1fae5] rounded-lg p-8">
  <h3 className="text-[18px] font-medium text-[#0f1117] mb-3">{title}</h3>
  <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
</div>
// Grid: grid-cols-3 gap-6
```

### Footer
```tsx
<footer className="bg-[#0f1117] py-16 px-6">
  <div className="max-w-[1200px] mx-auto">
    <div className="flex justify-between items-start mb-12">
      <div>
        <span className="text-[18px] font-medium text-[#f9fafb]">Javier Mayorga</span>
        <p className="text-[14px] text-[#9ca3af] mt-2 max-w-[280px] leading-[1.6]">
          Building systems that last. Writing about what I learn.
        </p>
      </div>
      <div className="flex gap-8">
        <a className="text-[14px] text-[#9ca3af] hover:text-[#f9fafb] transition-colors">
      </div>
    </div>
    <div className="border-t border-[#1e2330] pt-6">
      <span className="text-[14px] text-[#6b7280]">
        © 2026 Javier Mayorga. All rights reserved.
      </span>
    </div>
  </div>
</footer>
```

---

## What to never do
- Never use pure white (#ffffff) as page background — use #fdfcfb
- Never use font-weight 600 or 700
- Never use ALL CAPS for headings (eyebrows are the only exception)
- Never use gradients, shadows, or glow effects
- Never introduce a color not listed in this document
- Never remove the 2px teal section divider between sections
- Never remove the 3px left border from blog cards
- Never use inline style={{}} when a Tailwind class exists
