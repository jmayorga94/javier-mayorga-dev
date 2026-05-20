import Link from "next/link";

interface BlogCardProps {
  lang: string;
  title: string;
  slug: string;
  summary?: string;
  date?: string;
  className?: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogCard({ lang, title, slug, summary, date, className = "" }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className={`bg-white border border-[#f3f4f6] border-l-[3px] border-l-[#1D9E75] rounded-lg p-6 pl-7 hover:border-l-[#178f68] transition-colors cursor-pointer ${className}`}
      >
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#1D9E75] block mb-3">
          {lang}
        </span>
        <h3 className="text-[16px] font-medium text-[#0f1117] leading-[1.4]">{title}</h3>
        {summary && (
          <p className="text-[14px] text-[#6b7280] mt-2 leading-[1.5] line-clamp-2">{summary}</p>
        )}
        {date && (
          <p className="text-[12px] text-[#9ca3af] mt-3">{formatDate(date)}</p>
        )}
      </article>
    </Link>
  );
}
