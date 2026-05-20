export function ApiDiagram() {
  return (
    <svg viewBox="0 0 320 120" className="w-full" aria-hidden="true">
      <defs>
        <marker id="api-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* Oracle ESB (legacy) */}
      <rect x="10" y="35" width="76" height="50" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="48" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Oracle ESB</text>
      <text x="48" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Legacy middleware</text>

      {/* Arrow */}
      <line x1="86" y1="60" x2="118" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#api-arrow)" />
      <text x="102" y="54" textAnchor="middle" fill="#9ca3af" fontSize="7">replaced by</text>

      {/* GraphQL API */}
      <rect x="120" y="35" width="80" height="50" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="160" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">GraphQL API</text>
      <text x="160" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Real-time layer</text>

      {/* Arrow */}
      <line x1="200" y1="60" x2="232" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#api-arrow)" />
      <text x="216" y="54" textAnchor="middle" fill="#9ca3af" fontSize="7">serves</text>

      {/* Financial Clients */}
      <rect x="234" y="35" width="76" height="50" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="272" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Fin. Clients</text>
      <text x="272" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Core banking apps</text>
    </svg>
  );
}
