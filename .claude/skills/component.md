# Skill: build a UI component

## When to use this skill
When asked to create any reusable UI element — a card, button, tag, badge,
stat block, section header, avatar, or any visual piece that will be used
in more than one place.

---

## Before you start

1. Check `src/components/ui/` — the component may already exist
2. Check `src/components/sections/` — if it's a full homepage section
3. Read `CLAUDE.md` design system section before writing any styles
4. Determine: is this a server component or does it need interactivity?
   - Default to server component (no `"use client"`)
   - Add `"use client"` only if it uses useState, useEffect, or browser events

---

## File location rules

| Type | Location |
|---|---|
| Primitive (Button, Tag, Card wrapper) | `src/components/ui/ComponentName.tsx` |
| Layout piece (Navbar, Footer) | `src/components/layout/ComponentName.tsx` |
| Homepage section (Hero, Showcase) | `src/components/sections/ComponentName.tsx` |
| MDX-specific (DiagramBlock, Callout) | `src/components/mdx/ComponentName.tsx` |

---

## Component structure

Every component follows this pattern:

```tsx
// 1. Imports
import { ReactNode } from "react"

// 2. TypeScript interface — always explicit, never `any`
interface ComponentNameProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string   // always accept className for composability
}

// 3. Named export — never default export for UI components
export function ComponentName({
  title,
  description,
  children,
  className = "",
}: ComponentNameProps) {
  return (
    <div className={`... your tailwind classes ... ${className}`}>
      {/* content */}
    </div>
  )
}
```

---

## Tailwind conventions

Use the design system tokens from CLAUDE.md. Quick reference:

```
Card shell:        bg-[#141821] border border-[#1e2330] rounded-xl p-5
Section eyebrow:   text-xs text-[#5DCAA5] uppercase tracking-widest mb-2
Section heading:   text-2xl font-medium text-[#f9fafb] mb-6
Body text:         text-[#9ca3af] text-sm leading-relaxed
Muted text:        text-[#6b7280] text-xs
Accent tag:        bg-[#0a1f18] border border-[#0F6E56] text-[#5DCAA5] text-xs rounded px-2 py-0.5
Primary button:    bg-[#1D9E75] text-[#04342C] font-medium rounded-md px-6 py-2.5
Ghost button:      border border-[#2a3040] text-[#9ca3af] rounded-md px-6 py-2.5
```

---

## What good output looks like

- TypeScript interface is complete — no missing props, no `any`
- Component is self-contained — no logic that belongs in a page
- Tailwind only — no inline `style={{}}` unless absolutely unavoidable
- Accepts `className` prop for external overrides
- If interactive: `"use client"` is at the top, above imports
- Exported as named export, not default
- File is under ~80 lines — if longer, consider splitting

---

## Example: stat card component

```tsx
interface StatCardProps {
  value: string
  suffix?: string
  label: string
  className?: string
}

export function StatCard({ value, suffix, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="text-2xl font-medium text-[#f9fafb]">
        {value}
        {suffix && <span className="text-[#5DCAA5]">{suffix}</span>}
      </div>
      <div className="text-xs text-[#6b7280]">{label}</div>
    </div>
  )
}
```
