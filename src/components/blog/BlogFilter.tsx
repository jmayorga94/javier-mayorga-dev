"use client";

import { useState } from "react";
import { BlogCard } from "@/components/ui/BlogCard";
import type { PostMeta } from "@/lib/mdx";

type Filter = "all" | "en" | "es";

export function BlogFilter({ posts }: { posts: PostMeta[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = posts.filter((p) =>
    filter === "all" ? true : p.lang === filter
  );

  return (
    <>
      <div className="flex gap-2 mb-10">
        {(["all", "en", "es"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
              filter === f
                ? "bg-[#1D9E75] text-white"
                : "bg-white border border-[#f3f4f6] text-[#6b7280] hover:border-[#1D9E75] hover:text-[#0f1117]"
            }`}
          >
            {f === "all" ? "All" : f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <BlogCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              lang={p.lang.toUpperCase()}
              summary={p.summary}
              date={p.date}
            />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[14px] text-[#6b7280]">No posts in this language yet.</p>
      )}
    </>
  );
}
