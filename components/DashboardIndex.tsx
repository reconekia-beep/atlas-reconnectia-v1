export function DashboardIndex({ index, profile }: { index: number; profile: string }) {
    return (
        <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-8 lg:p-12 mb-8 relative overflow-hidden flex flex-col items-center">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-6 z-10">
                Índice Estructural Promedio
            </div>

            {/* Animated Number */}
            <div className="text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-8 z-10 opacity-0 [animation:zoomIn_1s_ease-out_0.3s_forwards]">
                {index.toFixed(1)}
            </div>
            <div className="inline-block px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium tracking-wide">
                Perfil: {profile}
            </div>
        </div>
    );
}
