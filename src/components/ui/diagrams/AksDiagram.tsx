export function AksDiagram() {
  return (
    <svg viewBox="0 0 320 120" className="w-full" aria-hidden="true">
      <defs>
        <marker id="aks-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {/* Client apps (legacy / existing) */}
      <rect x="10" y="35" width="72" height="50" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
      <text x="46" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">Apps</text>
      <text x="46" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Enterprise clients</text>

      {/* Arrow */}
      <line x1="82" y1="60" x2="114" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#aks-arrow)" />
      <text x="98" y="54" textAnchor="middle" fill="#9ca3af" fontSize="7">routes</text>

      {/* API Management */}
      <rect x="116" y="35" width="84" height="50" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="158" y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">API Mgmt</text>
      <text x="158" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Azure gateway</text>

      {/* Arrow */}
      <line x1="200" y1="60" x2="232" y2="60" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#aks-arrow)" />
      <text x="216" y="54" textAnchor="middle" fill="#9ca3af" fontSize="7">dispatches</text>

      {/* AKS Cluster */}
      <rect x="234" y="28" width="76" height="64" rx="4" fill="#f0fdf9" stroke="#1D9E75" strokeWidth="1" />
      <text x="272" y="50" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">AKS Cluster</text>
      <text x="272" y="63" textAnchor="middle" fill="#9ca3af" fontSize="7">Microservices</text>
      {/* Pod dots */}
      <circle cx="256" cy="76" r="4" fill="#1D9E75" opacity="0.4" />
      <circle cx="272" cy="76" r="4" fill="#1D9E75" opacity="0.4" />
      <circle cx="288" cy="76" r="4" fill="#1D9E75" opacity="0.4" />
    </svg>
  );
}
