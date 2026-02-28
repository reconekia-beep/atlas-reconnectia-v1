export function AtlasQuestion({
    question,
    currentValue,
    onSelect,
}: {
    question: { id: string; text: string };
    currentValue: number | null;
    onSelect: (value: number) => void;
}) {
    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
                {question.text}
            </h2>
            <div className="flex justify-between items-center gap-2 pt-4">
                {[1, 2, 3, 4, 5].map((val) => (
                    <button
                        key={val}
                        onClick={() => onSelect(val)}
                        className={`
              w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-lg transition-all
              ${currentValue === val
                                ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] border-2"
                                : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-500 hover:bg-gray-800"
                            }
            `}
                    >
                        {val}
                    </button>
                ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-1">
                <span>Totalmente en desacuerdo</span>
                <span>Totalmente de acuerdo</span>
            </div>
        </div>
    );
}
