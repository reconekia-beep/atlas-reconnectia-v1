import { notFound } from "next/navigation";
import { DashboardIndex } from "@/components/DashboardIndex";
import { DashboardRadar } from "@/components/DashboardRadar";
import { DashboardInsights } from "@/components/DashboardInsights";
import { TrackerClient } from "@/components/TrackerClient";
import { CTAButton } from "@/components/CTAButton";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ session_id: string }>;
}) {
  const { session_id } = await params;

  // Fetch session directly from DB for SSR
  const { data: session, error } = await supabase
    .from("atlas_sessions")
    .select("*")
    .eq("id", session_id)
    .single();

  if (error || !session) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center pt-16 px-4 pb-24 animate-in fade-in duration-1000 fill-mode-forwards opacity-0 [animation:fadeIn_1s_ease-in-out_forwards]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-5xl font-medium text-white mb-2 tracking-tight">
            Panel de Resultados
          </h1>
          <p className="text-gray-400">
            Diagnóstico estratégico para: <span className="text-white font-medium">{session.name || session.email}</span>
          </p>
        </div>

        {/* Structural Index Area */}
        <DashboardIndex index={session.structural_index} profile={session.profile} />

        {/* Detailed Analysis Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <DashboardRadar scores={session.dimension_scores} />
          <DashboardInsights scores={session.dimension_scores} />
        </div>

        {/* Strong CTA */}
        <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-2xl p-10 text-center shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col items-center">
          <h3 className="text-2xl text-white font-medium mb-4">Sube al Siguiente Nivel</h3>
          <p className="text-blue-200 mb-8 max-w-2xl text-lg">
            Tu índice estructural indica áreas de mejora prioritaria. Agenda una sesión estratégica sin costo para analizar tu perfil y diseñar el roadmap de escalabilidad de tu negocio.
          </p>
          <CTAButton sessionId={session_id} />
        </div>
      </div>
      <TrackerClient sessionId={session_id} />
    </main>
  );
}

