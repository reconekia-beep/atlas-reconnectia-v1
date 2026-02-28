export function AtlasProgress({ current, total }: { current: number; total: number }) {
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
                <span>Pregunta {current} de {total}</span>
                <span>{Math.round(percentage)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
