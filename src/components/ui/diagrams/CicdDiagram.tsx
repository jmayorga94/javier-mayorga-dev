export function CicdDiagram() {
  const stages = ["Code", "Build", "Test", "Deploy"];
  const xPositions = [8, 65, 122, 179];

  return (
    <svg viewBox="0 0 240 90" className="w-full" aria-hidden="true">
      <defs>
        <marker id="cicd-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {stages.map((label, i) => {
        const x = xPositions[i];
        const isNew = i === stages.length - 1;
        return (
          <g key={label}>
            <rect
              x={x} y="30" width="48" height="30" rx="4"
              fill={isNew ? "#f0fdf9" : "#f3f4f6"}
              stroke={isNew ? "#1D9E75" : "#d1d5db"}
              strokeWidth="1"
            />
            <text x={x + 24} y="47" textAnchor="middle" fill="#6b7280" fontSize="9">
              {label}
            </text>
            {i < stages.length - 1 && (
              <line
                x1={x + 48} y1="45" x2={xPositions[i + 1]} y2="45"
                stroke="#1D9E75" strokeWidth="1"
                markerEnd="url(#cicd-arrow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
