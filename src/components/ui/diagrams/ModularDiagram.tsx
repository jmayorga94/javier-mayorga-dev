export function ModularDiagram() {
  return (
    <svg viewBox="0 0 320 120" className="w-full" aria-hidden="true">
      <defs>
        <marker id="mod-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* Monolith (legacy) */}
      <rect x="10" y="30" width="72" height="60" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="46" y="55" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Monolith</text>
      <text x="46" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">Core financial</text>
      <text x="46" y="80" textAnchor="middle" fill="#9ca3af" fontSize="7">application</text>

      {/* Arrow */}
      <line x1="82" y1="60" x2="114" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#mod-arrow)" />

      {/* Modules */}
      <rect x="116" y="20" width="78" height="36" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="155" y="36" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Domain</text>
      <text x="155" y="49" textAnchor="middle" fill="#9ca3af" fontSize="7">Services</text>

      <rect x="116" y="64" width="78" height="36" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="155" y="80" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Data</text>
      <text x="155" y="93" textAnchor="middle" fill="#9ca3af" fontSize="7">Modules</text>

      {/* Arrows → API */}
      <line x1="194" y1="38" x2="228" y2="52" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#mod-arrow)" />
      <line x1="194" y1="82" x2="228" y2="68" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#mod-arrow)" />

      {/* API Layer */}
      <rect x="230" y="35" width="80" height="50" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="270" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">REST APIs</text>
      <text x="270" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Exposed endpoints</text>
    </svg>
  );
}
