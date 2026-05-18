# Skill: build a UI component

## Before you start
1. Open `reference/mockup.html` — find the component visually first
2. Open `.claude/skills/design-system.md` — get exact token values
3. Check `src/components/` — does it already exist?
4. Decide: server component or client? Default is server.
   Add `"use client"` only for useState, useEffect, or browser events.

---

## File locations

| Type | Location |
|---|---|
| Primitive (Button, Tag, Divider) | `src/components/ui/ComponentName.tsx` |
| Layout (Navbar, Footer) | `src/components/layout/ComponentName.tsx` |
| Homepage section | `src/components/sections/ComponentName.tsx` |
| MDX components | `src/components/mdx/ComponentName.tsx` |

---

## Component structure

```tsx
// Named export always — never default export for components
interface ComponentNameProps {
  // explicit types — never `any`
  className?: string  // always include for composability
}

export function ComponentName({ className = "" }: ComponentNameProps) {
  return (
    <div className={`[mockup-matched classes] ${className}`}>
      {/* content */}
    </div>
  )
}
```

---

## Key components and their exact classes

### SectionDivider
```tsx
export function SectionDivider() {
  return <div className="h-[2px] bg-[#1D9E75]" />
}
// Use between every major section — never skip this
```

### SectionHeader
```tsx
export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-16">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-[36px] font-medium text-[#0f1117] leading-[1.2]">
        {title}
      </h2>
    </div>
  )
}
```

### ArchCard
```tsx
export function ArchCard({ title, desc, diagram }: ArchCardProps) {
  return (
    <div className="bg-white border border-[#f3f4f6] rounded-lg p-8">
      <h3 className="text-[16px] font-medium text-[#0f1117] mb-2">{title}</h3>
      <p className="text-[14px] text-[#6b7280] mb-6">{desc}</p>
      {diagram}
    </div>
  )
}
```

### CaseCard
```tsx
export function CaseCard({ metric, title, client, desc }: CaseCardProps) {
  return (
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
  )
}
```

### BlogCard
```tsx
export function BlogCard({ lang, title, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white border border-[#f3f4f6] border-l-[3px]
                          border-l-[#1D9E75] rounded-lg p-6 pl-7
                          hover:border-l-[#178f68] transition-colors">
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] block mb-3">
          {lang}
        </span>
        <h3 className="text-[16px] font-medium text-[#0f1117] leading-[1.4]">
          {title}
        </h3>
      </article>
    </Link>
  )
}
```

### ServiceCard
```tsx
export function ServiceCard({ title, desc }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#d1fae5] rounded-lg p-8">
      <h3 className="text-[18px] font-medium text-[#0f1117] mb-3">{title}</h3>
      <p className="text-[14px] text-[#6b7280] leading-[1.6]">{desc}</p>
    </div>
  )
}
```

---

## What good output looks like
- Classes match design-system.md exactly — no approximations
- Props interface is complete with no `any`
- Component is under ~80 lines — split if longer
- Accepts `className` for external overrides
- Uses `next/link` for all internal links
- Uses `next/image` for all images
