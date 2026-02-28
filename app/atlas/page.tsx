import { AtlasChat } from "@/components/AtlasChat";
import questionMap from "@/lib/atlas/question.map.json";

export default function AtlasPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center pt-24 px-4 sm:px-6">
            <div className="w-full max-w-4xl flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight drop-shadow-md">
                    Diagnóstico <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Estratégico</span>
                </h1>
                <p className="text-gray-400 text-center max-w-xl mb-12">
                    Evalúa el nivel de madurez estructural de tu negocio interactuando con el motor de Atlas™.
                </p>

                <AtlasChat questions={questionMap.questions} />
            </div>
        </main>
    );
}
