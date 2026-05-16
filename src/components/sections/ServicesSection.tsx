const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: "Cloud Architecture",
    description:
      "Design and implementation of resilient, cost-efficient cloud systems on AWS and Azure. From greenfield builds to complex legacy migrations.",
    bullets: ["Multi-AZ / multi-region design", "FinOps cost optimization", "IaC with Terraform"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Platform Engineering",
    description:
      "Build the internal developer platform your team actually wants to use. CI/CD pipelines, GitOps workflows, and developer experience tooling.",
    bullets: ["GitHub Actions / Azure DevOps", "GitOps with ArgoCD / Flux", "Developer portals"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Technical Advisory",
    description:
      "Fractional CTO and architecture review for teams navigating regulated environments, vendor lock-in, or scaling challenges.",
    bullets: ["Architecture audits", "Technology selection", "Compliance readiness"],
  },
];

export default function ServicesSection() {
  return (
    <section id="about" className="bg-[#080a0f] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="text-xs font-mono text-[#5DCAA5] uppercase tracking-widest mb-3">
            What I do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How I can help your team
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {services.map(({ icon, title, description, bullets }) => (
            <div
              key={title}
              className="border border-[#1e2230] rounded-lg p-6 hover:border-[#2a3040] transition-colors"
            >
              <div className="w-9 h-9 rounded border border-[#1e2230] flex items-center justify-center text-[#5DCAA5] mb-4">
                {icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
              <p className="text-xs text-[#6b7280] leading-relaxed mb-4">
                {description}
              </p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-[#6b7280]">
                    <span className="w-1 h-1 rounded-full bg-[#5DCAA5] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
