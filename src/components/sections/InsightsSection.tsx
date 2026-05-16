const posts = [
  {
    slug: "zero-downtime-migrations",
    title: "Zero-downtime database migrations in regulated environments",
    date: "2024-11-20",
    lang: "en",
    tags: ["migrations", "postgresql", "azure"],
    summary:
      "The patterns I use to run schema migrations on live databases serving financial transactions — without maintenance windows.",
  },
  {
    slug: "gitops-regulated-fintech",
    title: "GitOps in a regulated fintech: what actually works",
    date: "2024-10-05",
    lang: "en",
    tags: ["gitops", "compliance", "terraform"],
    summary:
      "Compliance teams love audit trails. GitOps gives you that for free — if you set it up right from the start.",
  },
  {
    slug: "migracion-aws-azure",
    title: "Cómo migré una plataforma financiera de AWS a Azure sin perder datos",
    date: "2024-09-12",
    lang: "es",
    tags: ["azure", "aws", "migración"],
    summary:
      "Una guía práctica basada en mi experiencia migrando cargas de trabajo críticas entre nubes públicas en entornos regulados.",
  },
];

export default function InsightsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-mono text-[#5DCAA5] uppercase tracking-widest mb-3">
            Technical Insights
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How I think about systems
          </h2>
        </div>
        <a
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#5DCAA5] transition-colors"
        >
          All posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="flex flex-col divide-y divide-[#1e2230]">
        {posts.map(({ slug, title, date, lang, tags, summary }) => (
          <a
            key={slug}
            href={`/blog/${slug}`}
            className="py-5 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs text-[#6b7280]">
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                  lang === "es"
                    ? "text-[#5DCAA5] border-[#1D9E75]"
                    : "text-[#6b7280] border-[#1e2230]"
                }`}
              >
                {lang.toUpperCase()}
              </span>
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-[#6b7280]">
                  #{tag}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-white group-hover:text-[#5DCAA5] transition-colors mb-1.5">
              {title}
            </h3>
            <p className="text-xs text-[#6b7280] leading-relaxed">{summary}</p>
          </a>
        ))}
      </div>

      <a
        href="/blog"
        className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#5DCAA5] transition-colors"
      >
        All posts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  );
}
