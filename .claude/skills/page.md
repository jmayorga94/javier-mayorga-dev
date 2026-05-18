# Skill: scaffold a new page

## Before you start
1. Open `reference/mockup.html` — find the section visually
2. Check `src/app/` — does this route exist?
3. Identify the page type: static, dynamic [slug], or index listing

---

## App Router rules
- All pages: `src/app/[route]/page.tsx`
- File always named `page.tsx`
- Default export only for page files
- Server component by default
- Always include `generateMetadata()` for SEO

---

## Page template — static
```tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title | Javier Mayorga",
  description: "Page description.",
}

export default function PageName() {
  return (
    <main className="bg-[#fdfcfb]">
      {/* sections here */}
    </main>
  )
}
```

## Page template — dynamic [slug]
```tsx
import { Metadata } from "next"
import { getContentBySlug, getAllSlugs } from "@/lib/mdx"
import { notFound } from "next/navigation"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return (await getAllSlugs("posts")).map((slug) => ({ slug }))
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
    <main className="bg-[#fdfcfb]">
      {/* content */}
    </main>
  )
}
```

## Blog index with EN/ES filter
```tsx
"use client"
import { useState } from "react"
type Lang = "all" | "en" | "es"

export default function BlogPage() {
  const [filter, setFilter] = useState<Lang>("all")
  return (
    <main className="bg-[#fdfcfb]">
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-3 mb-16">
            {(["all", "en", "es"] as Lang[]).map((lang) => (
              <button key={lang} onClick={() => setFilter(lang)}
                className={`text-[11px] uppercase tracking-[0.1em] px-4 py-2
                            rounded-md border transition-colors ${
                  filter === lang
                    ? "bg-[#1D9E75] text-white border-[#1D9E75]"
                    : "border-[#f3f4f6] text-[#6b7280] hover:border-[#1D9E75] hover:text-[#1D9E75]"
                }`}>
                {lang === "all" ? "All" : lang.toUpperCase()}
              </button>
            ))}
          </div>
          {/* filtered posts grid */}
        </div>
      </section>
    </main>
  )
}
```

---

## What good output looks like
- Background is always `bg-[#fdfcfb]` — never white or dark for content pages
- `generateMetadata()` present on every page
- `notFound()` called when content is missing
- Max content width: `max-w-[1200px] mx-auto`
- Section padding: `py-24 px-6`
- `SectionDivider` component between every major section
