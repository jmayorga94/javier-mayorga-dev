export function HaDiagram() {
  return (
    <svg viewBox="0 0 320 120" className="w-full" aria-hidden="true">
      <defs>
        <marker id="ha-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* Legacy DB */}
      <rect x="10" y="38" width="66" height="44" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="43" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">SQL Server</text>
      <text x="43" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">On-premise DB</text>

      {/* Arrows legacy → split */}
      <line x1="76" y1="60" x2="108" y2="42" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />
      <line x1="76" y1="60" x2="108" y2="78" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />

      {/* Primary */}
      <rect x="110" y="20" width="72" height="40" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="146" y="37" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Azure SQL</text>
      <text x="146" y="50" textAnchor="middle" fill="#9ca3af" fontSize="7">Primary replica</text>

      {/* Replica */}
      <rect x="110" y="60" width="72" height="40" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="146" y="77" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Azure SQL</text>
      <text x="146" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7">Geo-replica</text>

      {/* Arrows → LB */}
      <line x1="182" y1="40" x2="228" y2="55" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />
      <line x1="182" y1="80" x2="228" y2="65" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#ha-arrow)" />

      {/* Azure Load Balancer */}
      <rect x="230" y="38" width="76" height="44" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="268" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Azure LB</text>
      <text x="268" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Load balancer</text>
    </svg>
  );
}
