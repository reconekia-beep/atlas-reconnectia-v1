"use client";

import { trackEvent } from "@/utils/tracking";

export function CTAButton({ sessionId }: { sessionId: string }) {
    const handleClick = () => {
        trackEvent("cta_clicked", sessionId);
    };

    return (
        <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] text-lg"
        >
            Agendar Diagnóstico Estratégico
        </a>
    );
}
