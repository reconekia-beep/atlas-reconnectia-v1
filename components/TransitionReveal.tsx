"use client";

import { useEffect, useState } from "react";

export function TransitionReveal({ isVisible }: { isVisible: boolean }) {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (isVisible) {
            // Stage 1: Fade to black (immediate trigger, takes 300ms CSS)
            setStage(1);

            // Stage 2: Show line progressively after black fade
            const lineTimer = setTimeout(() => {
                setStage(2);
            }, 300);

            return () => clearTimeout(lineTimer);
        } else {
            setStage(0);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-300 ease-in ${stage >= 1 ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                className={`h-[2px] bg-blue-500 shadow-[0_0_25px_8px_rgba(59,130,246,0.7)] transition-all duration-[1500ms] ease-out ${stage === 2 ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
            />
        </div>
    );
}
