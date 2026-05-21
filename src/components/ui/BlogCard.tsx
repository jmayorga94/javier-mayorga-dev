import Link from "next/link";

interface BlogCardProps {
  lang: string;
  title: string;
  slug: string;
  summary?: string;
  date?: string;
  className?: string;
  comingSoon?: boolean;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogCard({ lang, title, slug, summary, date, className = "", comingSoon = false }: BlogCardProps) {
  const inner = (
    <article
      className={`backdrop-blur-xl border border-l-[3px] rounded-lg p-6 pl-7 transition-all duration-300 ${
        comingSoon
          ? "opacity-50 cursor-not-allowed select-none"
          : "hover:border-[#1D9E75]/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,158,117,0.10)] cursor-pointer"
      } ${className}`}
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--hairline)",
        borderLeftColor: comingSoon ? "var(--hairline)" : "#1D9E75",
      }}
    >
      <span
        className={`text-[11px] uppercase tracking-[0.1em] block mb-3 ${
          comingSoon ? "text-[var(--text-muted)]" : "text-[#1D9E75]"
        }`}
      >
        {comingSoon ? "Coming soon" : lang}
      </span>
      <h3 className="text-[16px] font-medium text-[var(--text-primary)] leading-[1.4]">{title}</h3>
      {summary && (
        <p className="text-[14px] text-[var(--text-secondary)] mt-2 leading-[1.5] line-clamp-2">{summary}</p>
      )}
      {date && !comingSoon && (
        <p className="text-[12px] text-[var(--text-muted)] mt-3">{formatDate(date)}</p>
      )}
    </article>
  );

  if (comingSoon) return <div>{inner}</div>;
  return <Link href={`/blog/${slug}`}>{inner}</Link>;
}
