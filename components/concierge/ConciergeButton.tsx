"use client";

import { Bot, X } from "lucide-react";

interface ConciergeButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export function ConciergeButton({ onClick, isOpen }: ConciergeButtonProps) {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 animate-fade-in animate-delay-500">
            {/* Main Button */}
            <button
                onClick={onClick}
                className={`transition-all duration-300 relative flex items-center justify-center ${isOpen
                    ? "bg-[#202124] hover:bg-[#2a2b2e] border border-white/10 text-white p-4 rounded-full shadow-lg shadow-black/20 hover:scale-105 active:scale-95 rotate-180"
                    : "bg-[#ff751f] hover:bg-orange-600 text-white px-6 py-4 rounded-2xl font-semibold gap-3 floating-cta-shadow group animate-soft-pulse hover:scale-105 active:scale-95 rotate-0"
                    }`}
                aria-label="Open AI Concierge"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <>
                        <span className="material-symbols-outlined text-xl">smart_toy</span>
                        <span className="text-sm tracking-wide hidden sm:block">Talk to our Concierge Assistant</span>
                    </>
                )}
            </button>
        </div>
    );
}
