export function HaDiagram() {
  return (
    <svg viewBox="0 0 240 90" className="w-full" aria-hidden="true">
      <defs>
        <marker id="ha-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* Legacy DB */}
      <rect x="8" y="30" width="50" height="30" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="33" y="47" textAnchor="middle" fill="#6b7280" fontSize="9">Legacy DB</text>

      {/* Arrow from legacy → split */}
      <line x1="58" y1="45" x2="88" y2="30" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />
      <line x1="58" y1="45" x2="88" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />

      {/* Primary */}
      <rect x="90" y="15" width="50" height="25" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="115" y="30" textAnchor="middle" fill="#6b7280" fontSize="9">Primary</text>

      {/* Replica */}
      <rect x="90" y="50" width="50" height="25" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="115" y="65" textAnchor="middle" fill="#6b7280" fontSize="9">Replica</text>

      {/* Arrow → LB */}
      <line x1="140" y1="27" x2="182" y2="40" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />
      <line x1="140" y1="62" x2="182" y2="50" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />

      {/* Load Balancer */}
      <rect x="184" y="30" width="48" height="30" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="208" y="47" textAnchor="middle" fill="#6b7280" fontSize="9">LB</text>
    </svg>
  );
}
