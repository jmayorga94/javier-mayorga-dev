export function ApiDiagram() {
  return (
    <svg viewBox="0 0 240 90" className="w-full" aria-hidden="true">
      <defs>
        <marker id="api-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* ESB (legacy) */}
      <rect x="8" y="30" width="55" height="30" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="35" y="47" textAnchor="middle" fill="#6b7280" fontSize="9">ESB</text>

      {/* Arrow */}
      <line x1="63" y1="45" x2="90" y2="45" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#api-arrow)" />

      {/* GraphQL (new) */}
      <rect x="92" y="30" width="55" height="30" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="119" y="47" textAnchor="middle" fill="#6b7280" fontSize="9">GraphQL</text>

      {/* Arrow */}
      <line x1="147" y1="45" x2="174" y2="45" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#api-arrow)" />

      {/* Clients (new) */}
      <rect x="176" y="30" width="55" height="30" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="203" y="47" textAnchor="middle" fill="#6b7280" fontSize="9">Clients</text>
    </svg>
  );
}
