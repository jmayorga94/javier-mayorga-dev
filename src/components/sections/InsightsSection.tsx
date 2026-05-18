import { BlogCard } from "@/components/ui/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  {
    slug: "when-to-migrate-azure",
    title: "When to migrate to Azure — and when not to",
    lang: "EN",
  },
  {
    slug: "arquitectura-event-driven",
    title: "Arquitectura event-driven en sistemas financieros regulados",
    lang: "ES",
  },
  {
    slug: "llms-architecture-design",
    title: "How I use LLMs to accelerate architecture design",
    lang: "EN",
  },
  {
    slug: "zero-downtime-migrations",
    title: "Zero-downtime migrations — what nobody tells you",
    lang: "EN",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Technical Insights" title="How I think about systems" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
