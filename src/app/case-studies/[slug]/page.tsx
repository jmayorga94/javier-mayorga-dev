import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/mdx";
import { getMDXComponents } from "@/components/mdx/mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.meta.title} — Javier Mayorga`,
    description: `${cs.meta.client} · ${cs.meta.year}`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const { meta, content } = cs;

  return (
    <>
      <div className="bg-[#0f1117] pt-[120px] pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-4">{meta.client} · {meta.year}</p>
          <h1 className="text-[40px] font-medium text-[#f9fafb] leading-[1.2] max-w-[700px] mb-6">{meta.title}</h1>
          <div className="flex items-baseline gap-3">
            <span className="text-[64px] font-medium text-[#1D9E75] leading-none">{meta.outcome}</span>
            <span className="text-[16px] text-[#9ca3af]">key outcome</span>
          </div>
        </div>
      </div>
      <main className="pt-16 pb-24 px-6">
        <div className="max-w-[720px] mx-auto">
          {meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {meta.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-[#6b7280] border border-[#f3f4f6] px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <MDXRemote source={content} components={getMDXComponents()} />
        </div>
      </main>
    </>
  );
}
