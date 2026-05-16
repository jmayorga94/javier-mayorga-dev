const diagrams = [
  {
    title: "HA Cloud Migration",
    tag: "Availability",
    description: "Legacy on-prem → multi-AZ active/active with zero-downtime cutover",
    svg: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        {/* On-prem box */}
        <rect x="4" y="28" width="28" height="24" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
        <text x="18" y="43" textAnchor="middle" fill="#6b7280" fontSize="5">On-Prem</text>
        {/* Arrow */}
        <line x1="32" y1="40" x2="46" y2="40" stroke="#5DCAA5" strokeWidth="1" markerEnd="url(#arrow)" />
        {/* Load balancer */}
        <rect x="46" y="30" width="20" height="20" rx="2" fill="none" stroke="#5DCAA5" strokeWidth="1" />
        <text x="56" y="43" textAnchor="middle" fill="#5DCAA5" fontSize="4.5">LB</text>
        {/* AZ A */}
        <rect x="72" y="16" width="22" height="18" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
        <text x="83" y="26" textAnchor="middle" fill="#6b7280" fontSize="4.5">AZ-A</text>
        {/* AZ B */}
        <rect x="72" y="46" width="22" height="18" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
        <text x="83" y="57" textAnchor="middle" fill="#6b7280" fontSize="4.5">AZ-B</text>
        {/* Lines to AZs */}
        <line x1="66" y1="35" x2="72" y2="25" stroke="#5DCAA5" strokeWidth="0.75" />
        <line x1="66" y1="45" x2="72" y2="55" stroke="#5DCAA5" strokeWidth="0.75" />
        {/* DB */}
        <rect x="100" y="30" width="16" height="20" rx="2" fill="none" stroke="#1D9E75" strokeWidth="1" />
        <text x="108" y="43" textAnchor="middle" fill="#1D9E75" fontSize="4">DB</text>
        <line x1="94" y1="25" x2="100" y2="35" stroke="#374151" strokeWidth="0.75" />
        <line x1="94" y1="55" x2="100" y2="45" stroke="#374151" strokeWidth="0.75" />
        <defs>
          <marker id="arrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5DCAA5" />
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    title: "CI/CD Pipeline",
    tag: "Delivery",
    description: "GitOps pipeline with environment promotion, rollback, and observability",
    svg: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        {/* Pipeline stages */}
        {[
          { x: 4, label: "Git" },
          { x: 28, label: "Build" },
          { x: 52, label: "Test" },
          { x: 76, label: "Stage" },
          { x: 100, label: "Prod" },
        ].map(({ x, label }, i) => (
          <g key={label}>
            <rect x={x} y="30" width="20" height="20" rx="2" fill="none"
              stroke={i === 4 ? "#5DCAA5" : "#374151"} strokeWidth="1" />
            <text x={x + 10} y="43" textAnchor="middle"
              fill={i === 4 ? "#5DCAA5" : "#6b7280"} fontSize="4.5">{label}</text>
            {i < 4 && (
              <line x1={x + 20} y1="40" x2={x + 28} y2="40" stroke="#374151" strokeWidth="0.75"
                strokeDasharray={i === 3 ? "2,2" : "none"} />
            )}
          </g>
        ))}
        {/* Rollback arrow */}
        <path d="M 96,52 Q 64,68 36,52" fill="none" stroke="#ef4444" strokeWidth="0.75" strokeDasharray="2,2" markerEnd="url(#redarrow)" />
        <text x="64" y="72" textAnchor="middle" fill="#ef4444" fontSize="3.5">rollback</text>
        <defs>
          <marker id="redarrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#ef4444" />
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    title: "Multi-Cloud Architecture",
    tag: "Resilience",
    description: "AWS → Azure migration with workload distribution and unified identity",
    svg: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        {/* AWS cloud */}
        <rect x="4" y="10" width="48" height="28" rx="4" fill="none" stroke="#374151" strokeWidth="1" />
        <text x="28" y="20" textAnchor="middle" fill="#6b7280" fontSize="4">AWS</text>
        <rect x="10" y="24" width="16" height="10" rx="1" fill="none" stroke="#374151" strokeWidth="0.75" />
        <text x="18" y="31" textAnchor="middle" fill="#6b7280" fontSize="3.5">EC2</text>
        <rect x="30" y="24" width="16" height="10" rx="1" fill="none" stroke="#374151" strokeWidth="0.75" />
        <text x="38" y="31" textAnchor="middle" fill="#6b7280" fontSize="3.5">S3</text>
        {/* Azure cloud */}
        <rect x="68" y="10" width="48" height="28" rx="4" fill="none" stroke="#5DCAA5" strokeWidth="1" />
        <text x="92" y="20" textAnchor="middle" fill="#5DCAA5" fontSize="4">Azure</text>
        <rect x="74" y="24" width="16" height="10" rx="1" fill="none" stroke="#5DCAA5" strokeWidth="0.75" />
        <text x="82" y="31" textAnchor="middle" fill="#5DCAA5" fontSize="3.5">AKS</text>
        <rect x="94" y="24" width="16" height="10" rx="1" fill="none" stroke="#5DCAA5" strokeWidth="0.75" />
        <text x="102" y="31" textAnchor="middle" fill="#5DCAA5" fontSize="3.5">SQL</text>
        {/* Bridge */}
        <line x1="52" y1="24" x2="68" y2="24" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3,2" />
        <text x="60" y="22" textAnchor="middle" fill="#6b7280" fontSize="3">VPN</text>
        {/* Identity layer */}
        <rect x="30" y="54" width="60" height="14" rx="2" fill="none" stroke="#1D9E75" strokeWidth="1" />
        <text x="60" y="63" textAnchor="middle" fill="#1D9E75" fontSize="4">Unified Identity (AAD)</text>
        <line x1="28" y1="38" x2="50" y2="54" stroke="#374151" strokeWidth="0.5" />
        <line x1="92" y1="38" x2="72" y2="54" stroke="#374151" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "API Modernization",
    tag: "Integration",
    description: "Oracle ESB → GraphQL gateway with legacy adapter and event streaming",
    svg: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        {/* Legacy ESB */}
        <rect x="4" y="28" width="24" height="24" rx="2" fill="none" stroke="#374151" strokeWidth="1" />
        <text x="16" y="40" textAnchor="middle" fill="#6b7280" fontSize="3.5">Oracle</text>
        <text x="16" y="46" textAnchor="middle" fill="#6b7280" fontSize="3.5">ESB</text>
        {/* Adapter */}
        <rect x="34" y="31" width="22" height="18" rx="2" fill="none" stroke="#374151" strokeWidth="0.75" />
        <text x="45" y="43" textAnchor="middle" fill="#6b7280" fontSize="4">Adapter</text>
        <line x1="28" y1="40" x2="34" y2="40" stroke="#374151" strokeWidth="0.75" />
        {/* GraphQL gateway */}
        <rect x="62" y="28" width="26" height="24" rx="2" fill="none" stroke="#5DCAA5" strokeWidth="1" />
        <text x="75" y="39" textAnchor="middle" fill="#5DCAA5" fontSize="4">GraphQL</text>
        <text x="75" y="46" textAnchor="middle" fill="#5DCAA5" fontSize="3.5">Gateway</text>
        <line x1="56" y1="40" x2="62" y2="40" stroke="#5DCAA5" strokeWidth="1" />
        {/* Consumers */}
        {[14, 40, 66].map((y, i) => (
          <g key={i}>
            <rect x="96" y={y} width="18" height="10" rx="1" fill="none" stroke="#374151" strokeWidth="0.75" />
            <text x="105" y={y + 7} textAnchor="middle" fill="#6b7280" fontSize="3.5">
              {["Web", "Mobile", "Partner"][i]}
            </text>
            <line x1="88" y1={[22, 40, 58][i]} x2="96" y2={y + 5} stroke="#374151" strokeWidth="0.5" />
          </g>
        ))}
        {/* Kafka */}
        <rect x="62" y="60" width="26" height="12" rx="2" fill="none" stroke="#1D9E75" strokeWidth="0.75" />
        <text x="75" y="68" textAnchor="middle" fill="#1D9E75" fontSize="3.5">Kafka</text>
        <line x1="75" y1="52" x2="75" y2="60" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
      </svg>
    ),
  },
];

export default function ArchitectureSection() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <p className="text-xs font-mono text-[#5DCAA5] uppercase tracking-widest mb-3">
          Architecture
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Systems I&apos;ve designed
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {diagrams.map(({ title, tag, description, svg }) => (
          <div
            key={title}
            className="border border-[#1e2230] rounded-lg p-5 hover:border-[#2a3040] transition-colors group"
          >
            {/* Diagram preview */}
            <div className="h-32 mb-4 rounded bg-[#0a0d14] flex items-center justify-center p-3">
              {svg}
            </div>
            {/* Meta */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <span className="text-[10px] font-mono text-[#5DCAA5] border border-[#1D9E75] rounded-full px-2 py-0.5">
                {tag}
              </span>
            </div>
            <p className="text-xs text-[#6b7280] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
