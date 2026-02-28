const dimensionLabels: Record<string, string> = {
    infraestructura_digital_actual: "Infraestructura Digital",
    apalancamiento_de_conocimiento: "Apalancamiento de Conocimiento",
    automatizacion_operativa: "Automatización Operativa",
    escalabilidad_estrategica: "Escalabilidad Estratégica",
};

const getInsightForScore = (score: number) => {
    if (score < 3.0) return "Área crítica de fricción. Requiere estandarización urgente para evitar cuellos de botella.";
    if (score < 4.0) return "Nivel operativo funcional, pero dependiente de intervención manual en puntos clave.";
    return "Sólida base estructural lista para escalar sin comprometer calidad ni tiempos.";
};

export function DashboardInsights({ scores }: { scores: Record<string, number> }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {Object.entries(scores).map(([key, score]) => (
                <div key={key} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-gray-300 font-medium text-sm pr-4">
                                {dimensionLabels[key] || key}
                            </h4>
                            <span className={`text-lg font-semibold ${score >= 4 ? 'text-green-400' : score >= 3 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {score.toFixed(1)}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {getInsightForScore(score)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
