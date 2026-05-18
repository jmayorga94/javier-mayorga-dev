import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { getMDXComponents } from "@/components/mdx/mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Javier Mayorga`,
    description: post.meta.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <div className="mb-10">
          <span className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75]">{meta.lang.toUpperCase()}</span>
          <h1 className="text-[40px] font-medium text-[#0f1117] leading-[1.2] mt-3 mb-4">{meta.title}</h1>
          <div className="flex items-center gap-4 text-[13px] text-[#6b7280]">
            <span>{meta.date}</span>
            <span>·</span>
            <span>{meta.readingTime} min read</span>
          </div>
          {meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {meta.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-[#6b7280] border border-[#f3f4f6] px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="prose-wrapper">
          <MDXRemote source={content} components={getMDXComponents()} />
        </div>
      </div>
    </main>
  );
}
