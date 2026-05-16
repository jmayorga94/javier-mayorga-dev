const caseStudies = [
  {
    client: "IDB",
    year: "2022",
    title: "Legacy system → HA cloud",
    outcome: "95% downtime reduction",
    description:
      "Migrated a mission-critical financial reporting platform from aging on-prem infrastructure to a multi-AZ AWS deployment. Designed the cutover strategy to achieve zero user impact.",
    tags: ["AWS", "High Availability", "Migration"],
    metric: "95%",
    metricLabel: "less downtime",
  },
  {
    client: "IDB",
    year: "2023",
    title: "CI/CD pipeline re-engineering",
    outcome: "30% faster deployments",
    description:
      "Replaced a fragile manual release process with a GitOps pipeline using GitHub Actions, Terraform, and environment promotion gates. Reduced deployment lead time from days to hours.",
    tags: ["GitOps", "GitHub Actions", "Terraform"],
    metric: "30%",
    metricLabel: "faster deploys",
  },
  {
    client: "Cnovate",
    year: "2024",
    title: "AWS → Azure multi-cloud transformation",
    outcome: "Zero-downtime migration",
    description:
      "Led the full platform migration from AWS to Azure for a regulated financial client, including workload redesign, unified identity via AAD, and compliance documentation.",
    tags: ["Azure", "Multi-Cloud", "Identity"],
    metric: "0",
    metricLabel: "minutes downtime",
  },
  {
    client: "Sapiens",
    year: "2021",
    title: "Oracle ESB → GraphQL modernization",
    outcome: "3x API throughput",
    description:
      "Replaced a brittle Oracle ESB integration layer with a GraphQL gateway and Kafka event backbone, enabling real-time data for web, mobile, and partner integrations.",
    tags: ["GraphQL", "Kafka", "API Design"],
    metric: "3×",
    metricLabel: "API throughput",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#080a0f] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="text-xs font-mono text-[#5DCAA5] uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Real problems, real outcomes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {caseStudies.map(
            ({ client, year, title, description, tags, metric, metricLabel }) => (
              <div
                key={title}
                className="border border-[#1e2230] rounded-lg p-6 hover:border-[#2a3040] transition-colors"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#5DCAA5]">{client}</span>
                    <span className="text-[#1e2230]">·</span>
                    <span className="text-xs text-[#6b7280]">{year}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white leading-none">{metric}</p>
                    <p className="text-[10px] text-[#6b7280]">{metricLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-[#6b7280] leading-relaxed mb-4">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#6b7280] border border-[#1e2230] rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
