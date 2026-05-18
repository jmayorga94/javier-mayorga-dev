import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArchitecture, getArchBySlug } from "@/lib/mdx";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { DiagramBlock } from "@/components/mdx/DiagramBlock";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArchitecture().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const arch = getArchBySlug(slug);
  if (!arch) return {};
  return {
    title: `${arch.meta.title} — Javier Mayorga`,
    description: arch.meta.summary,
  };
}

export default async function ArchPage({ params }: Props) {
  const { slug } = await params;
  const arch = getArchBySlug(slug);
  if (!arch) notFound();

  const { meta, content } = arch;

  return (
    <main className="pt-[120px] pb-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] mb-3">Architecture</p>
          <h1 className="text-[40px] font-medium text-[#0f1117] leading-[1.2] mb-4">{meta.title}</h1>
          <p className="text-[16px] text-[#6b7280] leading-[1.6]">{meta.summary}</p>
          {meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {meta.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-[#6b7280] border border-[#f3f4f6] px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <DiagramBlock type={meta.diagramType} />
        <div className="mt-12">
          <MDXRemote source={content} components={getMDXComponents()} />
        </div>
      </div>
    </main>
  );
}
