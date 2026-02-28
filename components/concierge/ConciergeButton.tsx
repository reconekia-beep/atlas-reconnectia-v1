"use client";

import { useEffect, useState } from "react";
import { Bot, X } from "lucide-react";

interface ConciergeButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export function ConciergeButton({ onClick, isOpen }: ConciergeButtonProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after 10 seconds
        const buttonTimer = setTimeout(() => {
            setIsVisible(true);
            setShowTooltip(true);
        }, 10000);

        return () => clearTimeout(buttonTimer);
    }, []);

    useEffect(() => {
        // Hide tooltip after a few seconds of being shown, or immediately if opened
        if (isOpen) {
            setShowTooltip(false);
            return;
        }

        if (showTooltip) {
            const tooltipTimer = setTimeout(() => {
                setShowTooltip(false);
            }, 8000);
            return () => clearTimeout(tooltipTimer);
        }
    }, [showTooltip, isOpen]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
            {/* Tooltip */}
            <div
                className={`transition-all duration-500 origin-bottom-right ${showTooltip && !isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="bg-[#202124] text-white text-sm px-4 py-3 rounded-2xl rounded-br-sm border border-white/10 shadow-lg shadow-black/20 flex items-center justify-between gap-3 max-w-[280px]">
                    <p className="leading-relaxed">
                        Explore how AI could operate inside your company
                    </p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowTooltip(false);
                        }}
                        className="text-white/50 hover:text-white transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* Main Button */}
            <button
                onClick={() => {
                    setShowTooltip(false);
                    onClick();
                }}
                className={`bg-[#202124] hover:bg-[#2a2b2e] border border-white/10 text-white p-4 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center relative ${isOpen ? "rotate-180 bg-white/10" : "rotate-0"
                    }`}
                aria-label="Open AI Concierge"
            >
                <div className="relative">
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Bot className="w-6 h-6 text-emerald-400" />
                    )}

                    {/* Pulse effect when closed and tooltip is shown */}
                    {!isOpen && showTooltip && (
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                    )}
                </div>
            </button>
        </div>
    );
}
