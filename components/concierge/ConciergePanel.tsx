"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Clock, PlayCircle } from "lucide-react";
import { conciergeConfig } from "@/config/concierge.config";
import { trackEvent } from "@/utils/tracking";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface Action {
    type: "calendly" | "atlas";
    label: string;
    url: string;
}

interface ConciergePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const STORAGE_KEY = "concierge_chat_history";

export function ConciergePanel({ isOpen, onClose }: ConciergePanelProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I am Atlas, your strategic concierge. How can I help you explore AI for your company today?",
        },
    ]);
    const [inputVal, setInputVal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [actions, setActions] = useState<Action[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const initializedRef = useRef(false);

    // Load from LocalStorage
    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            }
        } catch (e) {
            console.error("Failed to load chat history", e);
        }
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (messages.length > 1) { // Don't save if it's just the initial message
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Track Open
    useEffect(() => {
        if (isOpen) {
            // Small timeout to ensure session_id is available if tracking is initialized simultaneously
            setTimeout(() => {
                trackEvent("concierge_opened", null);
            }, 500);
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, actions]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputVal.trim() || isLoading) return;

        const newMsg: Message = { role: "user", content: inputVal };
        const newContext = [...messages, newMsg];

        setMessages(newContext);
        setInputVal("");
        setActions([]); // Clear previous actions
        setIsLoading(true);

        try {
            const res = await fetch("/api/concierge", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newContext }),
            });

            if (!res.ok) throw new Error("API error");

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.reply || "Hubo un error al procesar tu mensaje." },
            ]);

            if (data.suggested_actions && Array.isArray(data.suggested_actions)) {
                setActions(data.suggested_actions);
            }

        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Lo siento, estamos experimentando intermitencias. Por favor, intenta de nuevo." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleActionClick = (action: Action) => {
        trackEvent("concierge_cta_clicked", null, { action_type: action.type, label: action.label });

        if (action.type === 'calendly' || action.type === 'atlas') {
            window.open(action.url, '_blank');
        }
    };

    return (
        <>
            {/* Backdrop (Mobile/Optional) */}
            <div
                className={`fixed inset-0 bg-black/50 z-[55] lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Panel */}
            <aside
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] max-w-[100vw] bg-[#141517] border-l border-white/10 shadow-2xl z-[60] flex flex-col transition-transform duration-500 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <header className="px-6 py-5 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#1c1d21]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-white/90 text-sm tracking-wide">Strategic Concierge</h2>
                            <p className="text-xs text-white/40">{conciergeConfig.brandName}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors p-2"
                    >
                        <span className="sr-only">Close</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                {/* Messages Layout */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar">
                    {messages.map((m, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col max-w-[85%] ${m.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                        >
                            <span className="text-[10px] uppercase tracking-wider text-white/30 mb-1.5 px-1 font-medium">
                                {m.role === 'user' ? 'You' : 'Atlas'}
                            </span>
                            <div
                                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                        ? 'bg-white/10 text-white rounded-tr-sm border border-white/5'
                                        : 'bg-[#202124] text-white/80 rounded-tl-sm border border-white/10 shadow-sm'
                                    }`}
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex flex-col mr-auto items-start">
                            <span className="text-[10px] uppercase tracking-wider text-white/30 mb-1.5 px-1 font-medium">
                                Atlas
                            </span>
                            <div className="bg-[#202124] px-5 py-4 rounded-2xl rounded-tl-sm border border-white/10 flex items-center gap-1.5 h-[46px]">
                                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    )}

                    {actions.length > 0 && !isLoading && (
                        <div className="flex flex-col gap-2 mt-4 ani m-fade-in pl-2">
                            {actions.map((act, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleActionClick(act)}
                                    className="group relative overflow-hidden bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium py-3 px-4 rounded-xl border border-emerald-500/20 text-left transition-all duration-300 flex items-center justify-between mx-auto w-full max-w-[85%] ml-0"
                                >
                                    <span className="relative z-10 flex flex-col gap-0.5">
                                        <span className="text-white/90">{act.label}</span>
                                        <span className="text-[10px] text-emerald-400/60 uppercase tracking-wider">
                                            {act.type === 'calendly' ? 'Schedule Call' : 'Explore Platform'}
                                        </span>
                                    </span>
                                    {act.type === 'calendly' ? (
                                        <Clock className="w-4 h-4 text-emerald-400/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all" />
                                    ) : (
                                        <PlayCircle className="w-5 h-5 text-emerald-400/50 group-hover:text-emerald-400 group-hover:scale-110 transition-all" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#141517] border-t border-white/5 shrink-0 relative">
                    <form
                        onSubmit={handleSend}
                        className="relative flex items-end gap-2 bg-[#202124] rounded-xl border border-white/10 p-1.5 focus-within:border-white/30 transition-colors"
                    >
                        <textarea
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder="Ask Atlas about your challenges..."
                            className="flex-1 bg-transparent text-white text-sm px-3 py-2.5 outline-none resize-none min-h-[44px] max-h-[120px] placeholder:text-white/30 custom-scrollbar"
                            rows={1}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={!inputVal.trim() || isLoading}
                            className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white/50 transition-colors shrink-0 mb-0.5 mr-0.5"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <span className="text-[10px] text-white/20">Powered by ReconnectIA Advanced Protocol</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
