export function DashboardRadar({ scores }: { scores: Record<string, number> }) {
    // A simple 4-point radar chart strictly using SVG to avoid heavy libraries
    const keys = Object.keys(scores);
    if (keys.length !== 4) return null;

    const center = 150;
    const radius = 100;

    // Normalized 1-5 to 0.2-1.0 scale for drawing
    const getPoint = (value: number, angleIndex: number) => {
        const angle = (Math.PI / 2) * angleIndex - Math.PI / 2; // Start at top, go clockwise
        const normalizedLength = (value / 5) * radius;
        return {
            x: center + Math.cos(angle) * normalizedLength,
            y: center + Math.sin(angle) * normalizedLength,
        };
    };

    const p1 = getPoint(scores[keys[0]], 0);
    const p2 = getPoint(scores[keys[1]], 1);
    const p3 = getPoint(scores[keys[2]], 2);
    const p4 = getPoint(scores[keys[3]], 3);

    const polygonPoints = `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`;

    return (
        <div className="w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-white font-medium mb-6">Distribución Estructural</h3>
            <svg width="300" height="300" className="opacity-90">
                {/* Background Grid */}
                {[1, 2, 3, 4, 5].map((level) => {
                    const r = (level / 5) * radius;
                    return (
                        <polygon
                            key={`grid-${level}`}
                            points={`
                ${center},${center - r} 
                ${center + r},${center} 
                ${center},${center + r} 
                ${center - r},${center}
              `}
                            fill="none"
                            stroke="#374151"
                            strokeWidth="1"
                            strokeDasharray={level === 5 ? "none" : "4 4"}
                        />
                    );
                })}
                {/* Axes */}
                <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="#4B5563" strokeWidth="1" />
                <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="#4B5563" strokeWidth="1" />

                {/* Data Polygon */}
                <polygon
                    points={polygonPoints}
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3B82F6"
                    strokeWidth="2"
                />

                {/* Data Points */}
                <circle cx={p1.x} cy={p1.y} r="4" fill="#60A5FA" />
                <circle cx={p2.x} cy={p2.y} r="4" fill="#60A5FA" />
                <circle cx={p3.x} cy={p3.y} r="4" fill="#60A5FA" />
                <circle cx={p4.x} cy={p4.y} r="4" fill="#60A5FA" />

                {/* Labels */}
                <text x={center} y={center - radius - 15} fill="#9CA3AF" fontSize="10" textAnchor="middle">ID Actual</text>
                <text x={center + radius + 15} y={center} fill="#9CA3AF" fontSize="10" textAnchor="start" alignmentBaseline="middle">Ap. Conoc.</text>
                <text x={center} y={center + radius + 20} fill="#9CA3AF" fontSize="10" textAnchor="middle">Auto. Oper.</text>
                <text x={center - radius - 15} y={center} fill="#9CA3AF" fontSize="10" textAnchor="end" alignmentBaseline="middle">Esc. Est.</text>
            </svg>
        </div>
    );
}
