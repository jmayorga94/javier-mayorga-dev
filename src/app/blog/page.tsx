import { getAllPosts } from "@/lib/mdx";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Technical Insights — Javier Mayorga",
  description: "Architecture patterns, cloud engineering, and systems thinking.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Technical Insights" title="How I think about systems" />
        <BlogFilter posts={posts} />
      </div>
    </main>
  );
}
