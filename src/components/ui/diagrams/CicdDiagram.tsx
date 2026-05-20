export function CicdDiagram() {
  const stages = [
    { name: "Azure Repos", sub: "Source control" },
    { name: "Pipelines", sub: "Azure DevOps" },
    { name: "Quality Gate", sub: "Tests + SAST" },
    { name: "App Service", sub: "Azure PaaS" },
  ];
  const xPositions = [8, 90, 172, 254];
  const nodeWidth = 66;

  return (
    <svg viewBox="0 0 320 120" className="w-full" aria-hidden="true">
      <defs>
        <marker id="cicd-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1D9E75" />
        </marker>
      </defs>

      {stages.map(({ name, sub }, i) => {
        const x = xPositions[i];
        const isNew = i >= 1;
        return (
          <g key={name}>
            <rect
              x={x} y="35" width={nodeWidth} height="50" rx="4"
              fill={isNew ? "#f0fdf9" : "#f3f4f6"}
              stroke={isNew ? "#1D9E75" : "#d1d5db"}
              strokeWidth="1"
            />
            <text x={x + nodeWidth / 2} y="57" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="600">
              {name}
            </text>
            <text x={x + nodeWidth / 2} y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">
              {sub}
            </text>
            {i < stages.length - 1 && (
              <>
                <line
                  x1={x + nodeWidth} y1="60" x2={xPositions[i + 1]} y2="60"
                  stroke="#1D9E75" strokeWidth="1"
                  markerEnd="url(#cicd-arrow)"
                />
                <text
                  x={x + nodeWidth + (xPositions[i + 1] - x - nodeWidth) / 2}
                  y="55"
                  textAnchor="middle" fill="#9ca3af" fontSize="7"
                >
                  {i === 0 ? "triggers" : i === 1 ? "validates" : "deploys"}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
