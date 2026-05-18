import Link from "next/link";

interface BlogCardProps {
  lang: string;
  title: string;
  slug: string;
  className?: string;
}

export function BlogCard({ lang, title, slug, className = "" }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className={`bg-white border border-[#f3f4f6] border-l-[3px] border-l-[#1D9E75] rounded-lg p-6 pl-7 hover:border-l-[#178f68] transition-colors cursor-pointer ${className}`}
      >
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] block mb-3">
          {lang}
        </span>
        <h3 className="text-[16px] font-medium text-[#0f1117] leading-[1.4]">{title}</h3>
      </article>
    </Link>
  );
}
