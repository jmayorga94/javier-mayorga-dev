# Design System — Javier Mayorga

## Brand Philosophy

A visual language rooted in the discipline of systems — where every line is necessary,
every proportion deliberate, and every decision made under constraint. The work rejects
ornamentation as a demonstration of intelligence. Silence and exactness become the medium.

Space is not emptiness — it is the primary material. Negative space carries as much weight
as marks themselves. A single teal line placed with precision beneath a monogram communicates
more than an embellished wordmark. Margins frame and protect geometry at the center.

Form speaks in geometric absolutes: straight lines, right angles, strokes of uniform weight.
Color is used as signal, not decoration — one accent, exact and unmixed, performs one role
and withdraws. Everything else is white or near-black.

The corner bracket — borrowed from technical drawing and code notation — signals the beginning
of something significant. Placed with exacting care, it suggests work at the frontier of
discipline, where form and function have ceased to be in conflict.

---

## Base

```
font-family:     'Inter', -apple-system, BlinkMacSystemFont, sans-serif
font-size:       16px base
line-height:     1.75
body color:      #374151
body background: #fdfcfb
scroll-behavior: smooth
box-sizing:      border-box on all elements
```

---

## Colors

### Dark sections (hero, footer, contact)
```
background:        #0f1117
card surface:      #141821
border:            #1e2330
text primary:      #f9fafb
text secondary:    #9ca3af
text muted:        #6b7280
```

### Light sections (all content sections)
```
background:        #fdfcfb  — warm off-white body default
section services:  #f0fdf9  — teal-tinted band for services section
card background:   #ffffff
card border:       1px solid #f3f4f6
text primary:      #0f1117
text secondary:    #374151
text muted:        #6b7280
```

### Teal accent — the only accent color, never supplemented
```
strong:            #1D9E75  — buttons, eyebrows, arrows, active states
hover:             #178f68  — button hover
subtle bg:         #f0fdf9  — services section, svg boxes
subtle border:     #d1fae5  — service card borders
```

### SVG diagram colors
```
legacy box fill:   #f3f4f6   stroke: #d1d5db
new system fill:   #f0fdf9   stroke: #1D9E75
arrow stroke:      #1D9E75   stroke-width: 1
text fill:         #6b7280   font-size: 9px
```

---

## Typography Scale

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

---

## Spacing

```
max content width:      1200px  margin: 0 auto
navbar padding:         16px 24px
hero padding:           120px 24px 64px
section padding:        96px 24px
section-header mb:      64px
section eyebrow mb:     16px
arch/case card padding: 32px
blog card padding:      24px (left: 28px)
services card padding:  32px
footer padding:         64px 24px
footer-top mb:          48px
footer-bottom pt:       24px
card gap:               24px
nav links gap:          32px
hero stats gap:         48px
footer links gap:       32px
```

---

## Component Patterns

### Navbar
```css
position: fixed; top: 0; left: 0; right: 0; z-index: 100;
background: #ffffff;
logo: 18px font-weight 500 color #0f1117 — "javier mayor" dark + "ga" teal, all lowercase
nav links: 14px color #6b7280 hover #0f1117
cta: 14px font-weight 500 color #ffffff bg #1D9E75
    padding 10px 20px border-radius 6px hover bg #178f68
scroll shadow: 0 1px 12px rgba(0,0,0,0.08) when scrollY > 10px
active link: text-[#0f1117] font-medium (IntersectionObserver driven)
```

### Section divider
```css
height: 2px; background: #1D9E75;
— appears between every major section
```

### Architecture card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-radius: 8px;
padding: 32px;
grid: 2 columns, gap 24px
hover: translateY(-2px), border-top 2px solid #1D9E75
```

### Case study card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-radius: 8px;
padding: 32px;
display: flex; gap: 24px; align-items: flex-start;
metric number: 48px font-weight 500 color #1D9E75 min-width 100px
grid: 2 columns, gap 24px
```

### Blog card
```css
background: #ffffff;
border: 1px solid #f3f4f6;
border-left: 3px solid #1D9E75;   ← signature left accent border
border-radius: 8px;
padding: 24px; padding-left: 28px;
grid: 2 columns, gap 24px
summary: 14px color #6b7280, max 2 lines
date: 12px color #9ca3af
```

### Service card
```css
background: #ffffff;
border: 1px solid #d1fae5;        ← teal-tinted border
border-radius: 8px;
padding: 32px;
parent section background: #f0fdf9
grid: 3 columns, gap 24px
icon: 32×32px stroke #1D9E75 stroke-width 1.5 fill none — deepens on hover
```

### Footer
```css
background: #0f1117; padding: 64px 24px;
top: flex justify-between, mb 48px
bottom: border-top 1px solid #1e2330, pt 24px
social icons: 16×16px fill #9ca3af — group-hover:text-white with label
```

### Scroll reveal
```css
initial:  opacity-0 translate-y-4
entered:  opacity-100 translate-y-0  transition duration-500 ease-out
stagger:  each card gets transitionDelay: index * 75ms
exempt:   hero content appears immediately
a11y:     prefers-reduced-motion disables all animations
```

---

## Responsive Breakpoints

```
max-width: 1024px → arch-grid, case-grid, services-grid: 1 column
max-width: 768px  → hero 40px, nav-links hidden,
                    hero-stats column, blog-grid 1 col,
                    case-card column, case-metric 36px min-width auto,
                    footer-top column gap 32px
max-width: 480px  → hero 32px, section-title 28px
```

---

## Fonts

- **Inter** — body, headings, UI. Loaded via `next/font/google`, weights 400 + 500.
- **JetBrains Mono** — data labels, identity marks (stat values, metric numbers, badges).
  Loaded via `next/font/google`. Applies to anywhere a number or identifier carries precision weight.

---

## Rules

- Never introduce new colors. Teal is the only accent — one role, one hex, full stop.
- Never use custom CSS when a Tailwind utility class exists.
- Match spacing values precisely from this document — use the 8px grid.
- SVG diagrams: always inline, never external images or libraries.
- Visual reference: `reference/mockup.html` — check it when in doubt.
