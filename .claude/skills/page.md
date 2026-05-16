# Skill: scaffold a new page

## When to use this skill
When asked to create a new route, page, or view in the site — including
index pages, detail pages, and dynamic routes.

---

## Before you start

1. Identify the route: what is the URL path?
2. Identify the type: static page, dynamic route `[slug]`, or index listing
3. Check `src/app/` — does this route already exist?
4. Check what data the page needs — MDX content, static data, or none

---

## App Router rules (always follow these)

- All pages live under `src/app/`
- Page files are always named `page.tsx`
- Layout files are always named `layout.tsx`
- Every page exports a default function — this is the one exception to the
  "named export" rule in components
- Server component by default — no `"use client"` unless the page itself
  needs browser interactivity (rare — usually extract to a child component)
- Use `generateMetadata()` for SEO on every page — title, description, og tags

---

## File structure by page type

### Static page (e.g. /about)
```
src/app/about/page.tsx
```

### Index listing (e.g. /blog)
```
src/app/blog/page.tsx
```

### Dynamic detail route (e.g. /blog/my-post)
```
src/app/blog/[slug]/page.tsx
```

### Nested layout (shared UI for a section)
```
src/app/blog/layout.tsx
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
```

---

## Page template — static

```tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title | Javier Mayorga",
  description: "Page description for SEO.",
}

export default function PageName() {
  return (
    <main className="min-h-screen bg-[#0f1117]">
      <section className="max-w-5xl mx-auto px-6 py-20">
        {/* content */}
      </section>
    </main>
  )
}
```

---

## Page template — dynamic route with MDX

```tsx
import { Metadata } from "next"
import { getContentBySlug, getAllSlugs } from "@/lib/mdx"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs("posts") // or "case-studies", "architecture"
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await getContentBySlug("posts", params.slug)
  if (!content) return {}
  return {
    title: `${content.frontmatter.title} | Javier Mayorga`,
    description: content.frontmatter.summary,
  }
}

export default async function PostPage({ params }: Props) {
  const content = await getContentBySlug("posts", params.slug)
  if (!content) notFound()

  return (
    <main className="min-h-screen bg-[#0f1117]">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-medium text-[#f9fafb] mb-4">
          {content.frontmatter.title}
        </h1>
        {/* MDX content rendered here */}
      </article>
    </main>
  )
}
```

---

## Index page with filter (blog EN/ES pattern)

```tsx
"use client"

import { useState } from "react"

type Lang = "all" | "en" | "es"

export default function BlogPage() {
  const [filter, setFilter] = useState<Lang>("all")

  return (
    <main className="min-h-screen bg-[#0f1117]">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex gap-2 mb-10">
          {(["all", "en", "es"] as Lang[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border transition-colors ${
                filter === lang
                  ? "bg-[#1D9E75] text-[#04342C] border-[#1D9E75]"
                  : "border-[#2a3040] text-[#6b7280] hover:border-[#5DCAA5] hover:text-[#5DCAA5]"
              }`}
            >
              {lang === "all" ? "All" : lang.toUpperCase()}
            </button>
          ))}
        </div>
        {/* filtered post list */}
      </section>
    </main>
  )
}
```

---

## What good output looks like

- `generateMetadata()` is always present with real title and description
- `generateStaticParams()` is present on all dynamic routes
- `notFound()` is called when content doesn't exist
- Page layout uses `max-w-5xl mx-auto px-6` for content width
- No data fetching logic inline — use `@/lib/mdx` utilities
- Background is always `bg-[#0f1117]` — never white or gray
