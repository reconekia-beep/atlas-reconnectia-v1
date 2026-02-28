"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AtlasProgress } from "./AtlasProgress";
import { AtlasQuestion } from "./AtlasQuestion";
import { TransitionReveal } from "./TransitionReveal";
import { trackEvent } from "@/utils/tracking";

type Question = {
    id: string;
    dimension: string;
    text: string;
    required: boolean;
};

type DimensionResponses = {
    [dimension: string]: number[];
};

export function AtlasChat({ questions }: { questions: Question[] }) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState<DimensionResponses>({});

    // Track on initial mount
    useEffect(() => {
        trackEvent("chat_started", null);
    }, []);

    // For the current question's local selection before moving to the next
    const [currentSelection, setCurrentSelection] = useState<number | null>(null);

    // Email capture state
    const [isFinished, setIsFinished] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Transition state
    const [showTransition, setShowTransition] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleNext = () => {
        if (currentSelection === null) return;

        // Save response
        const currentDim = currentQuestion.dimension;
        setResponses((prev) => ({
            ...prev,
            [currentDim]: [...(prev[currentDim] || []), currentSelection],
        }));

        setCurrentSelection(null);

        // Next question or finish
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/atlas/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name || "Anonymous Lead",
                    email,
                    responses,
                }),
            });

            const data = await res.json();

            if (data.success && data.session_id) {
                setShowTransition(true);
                setTimeout(() => {
                    router.push(`/dashboard/${data.session_id}`);
                }, 2000); // Wait for transition animation
            } else {
                console.error("Failed to submit session");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    if (showTransition) {
        return <TransitionReveal isVisible={true} />;
    }

    if (isFinished) {
        return (
            <div className="w-full max-w-md mx-auto mt-12 animate-fade-in space-y-8 text-center p-6 border border-gray-800 bg-gray-900/50 rounded-2xl">
                <h2 className="text-2xl font-medium text-white">Análisis Completado</h2>
                <p className="text-gray-400">
                    Tus respuestas han sido procesadas por el motor Atlas™. Ingresa tu correo para descubrir tu Índice Estructural y Perfil Estratégico.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Tu nombre (opcional)"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-800 border items-center border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            required
                            placeholder="Tu correo electrónico *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            disabled={isSubmitting}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all disabled:opacity-50 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)] mt-6"
                    >
                        {isSubmitting ? "Procesando Diagnóstico..." : "Ver Resultados Estratégicos"}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-12 animate-fade-in flex flex-col items-center">
            <AtlasProgress current={currentIndex + 1} total={questions.length} />

            <div className="w-full py-8 mt-4">
                <AtlasQuestion
                    question={currentQuestion}
                    currentValue={currentSelection}
                    onSelect={setCurrentSelection}
                />
            </div>

            <button
                onClick={handleNext}
                disabled={currentSelection === null}
                className="mt-8 px-12 py-3 rounded-full bg-blue-600 text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
                Siguiente
            </button>

        </div>
    );
}
