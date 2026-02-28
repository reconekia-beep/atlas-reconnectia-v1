import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConciergeWidget } from "@/components/concierge/ConciergeWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141517] flex flex-col items-center justify-center relative overflow-hidden text-white pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="z-10 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          The Intelligence <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            Behind the Experience
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          ReconnectIA provides strategic AI solutions to optimize your business operations and elevate customer engagement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard/overview"
            className="group px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-white/90 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Access Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/atlas"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 border border-white/10"
          >
            Explore Atlas
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 text-white/30 text-sm">
        <p>© {new Date().getFullYear()} ReconnectIA. All rights reserved.</p>
      </div>

      {/* The Concierge as the entry point */}
      <ConciergeWidget />
    </main>
  );
}
