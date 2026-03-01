/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { ConciergeWidget } from "@/components/concierge/ConciergeWidget";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-neutral-dark text-white font-display overflow-hidden">

            <nav className="fixed w-full z-50 glass-nav">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center">
                            <img src="/assets/images/logo-main.png" alt="Reconnectia" className="h-10 md:h-12 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-soft-gray hover:text-white transition-colors" href="#gap">The Gap</a>
                        <a className="text-sm font-medium text-soft-gray hover:text-white transition-colors" href="#methodology">Our
                            Approach</a>
                        <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all duration-300">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
                <div className="absolute inset-0 abstract-network pointer-events-none"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
                    <div className="absolute inset-0 opacity-20 bg-accent-blue rounded-full blur-[160px]"></div>
                    <div
                        className="absolute top-1/4 left-1/4 w-full h-full border border-accent-blue/20 rounded-full animate-pulse">
                    </div>
                    <div className="absolute top-1/3 left-1/3 w-2/3 h-2/3 border border-white/10 rounded-full"></div>
                </div>
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block mb-8">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-blue/80 mb-2">ReconnectIA</p>
                        <div className="h-[1px] w-12 bg-accent-blue/40 mx-auto"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-4xl mx-auto">
                        Your experience does not compete with AI. <span className="text-primary italic">It Directs It.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-soft-gray mb-4 max-w-3xl mx-auto leading-relaxed font-light">
                        Transform decades of professional knowledge into Scalable Digital Assets. Create a legacy that works
                        without you.
                    </p>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-12">
                        This new economy does not replace experts. It scales them.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                            className="bg-[#ff751f] hover:bg-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] inline-block">
                            Schedule a Private Strategic Diagnosis
                        </a>
                        <p className="text-xs text-soft-gray/60 font-medium">
                            30-minute private session. Confidential. No obligation.
                        </p>
                    </div>
                    <div className="mt-20 flex justify-center gap-7 opacity-30 grayscale hover:opacity-60 transition-opacity">
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-accent-blue">neurology</span>
                            <span className="text-[12px] uppercase tracking-tighter">Human Intuition</span>
                        </div>
                        <div className="w-16 flex items-center justify-center">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-blue to-transparent"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-accent-blue">account_tree</span>
                            <span className="text-[12px] uppercase tracking-tighter">Digital Scale</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">
                <div className="bg-white/95 backdrop-blur shadow-xl px-4 py-2 rounded-xl border border-white/20 animate-fade-in">
                    <p className="text-[12px] font-medium text-neutral-dark whitespace-nowrap">
                        Experience how your own AI agent would work.
                    </p>
                    <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white/95 rotate-45 border-r border-b border-white/20">
                    </div>
                </div>
                <a href="#concierge" target="_blank" rel="noopener noreferrer"
                    className="bg-[#ff751f] hover:bg-orange-600 text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 floating-cta-shadow transition-all group animate-soft-pulse">
                    <span className="material-symbols-outlined text-xl">smart_toy</span>
                    <span className="text-sm tracking-wide">Talk to our Concierge Assistant</span>
                </a>
            </div>
            <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-2">The core
                        challenge</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                        Your knowledge isn&apos;t the problem! <br className="hidden md:block" />
                        <span className="text-primary">It&apos;s the format you&apos;re using.</span>
                    </h2>
                </div>
                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        className="group relative card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-xl transition-all duration-300 hover:border-primary/50 glow-hover">
                        <div
                            className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                            <span className="material-icons text-primary group-hover:text-white">hourglass_empty</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Time-Bound Income</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Your revenue is limited by your physical availability. When you stop working, the engine stops
                            running.
                        </p>
                        <div
                            className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-xl">
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="group relative card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-xl transition-all duration-300 hover:border-primary/50 glow-hover">
                        <div
                            className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                            <span className="material-icons text-primary group-hover:text-white">psychology</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Technology without Strategy is
                            Overwhelming
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            It&apos;s an avalanche of tools that creates noise. It advances faster than its own integration strategy.
                        </p>
                        <div
                            className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-xl">
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="group relative card-bg border border-slate-200 dark:border-slate-800 p-8 rounded-xl transition-all duration-300 hover:border-primary/50 glow-hover">
                        <div
                            className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                            <span className="material-icons text-primary group-hover:text-white">inventory_2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Analog Expertise in a Digital World
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Your knowledge are buried in spreadsheets, emails, and meetings instead of being codified into
                            intelligent systems.It&apos;s an asset that cannot yet work without you.
                        </p>
                        <div
                            className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-b-xl">
                        </div>
                    </div>
                </div>
                {/* Closing Statement */}
                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <div className="h-px w-24 bg-primary/30 mx-auto mb-10"></div>
                    <p className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                        You don’t need to learn more. <br className="hidden sm:block" />
                        <span className="font-bold underline decoration-primary decoration-4 underline-offset-8">Just need to
                            Automate what you already execute.</span>
                    </p>
                    <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                        className="mt-12 bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 inline-block">
                        Begin the Strategic Assessment
                    </a>
                </div>
                {/* Background Decorative Elements */}
                <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]">
                    </div>
                </div>
            </section>
            {/* Visual Divider Map/Image Placeholder */}
            <div className="w-full h-64 relative overflow-hidden opacity-30 dark:opacity-20 grayscale">
                <img alt="Abstract global connectivity network" className="w-full h-full object-cover"
                    data-alt="Abstract network of digital connections and glowing nodes"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6KVeaKOnOtYIYTTksOYS74YuQ-6O7b9jhy8a2DJ_4U5691uwFCyu_t5XBtbRvh2RC5lrLGlO_qiCdM00ruTPkrUvfd1stBsLHNQ-XLKtuiQ-7qk6TJ7SQjcSB4Z5yCGzJBYbtKHsXWHxeYHCrnapC10ymss__8mwI2Z1H5-46OZusEpKgWy4jGsoeb7dcWhEiecU_QzWFtdPkph6ycG_DFyQaliD2HZDqhJaUKjT0yAxGU5fh6BdEPwjn7IUkCIsaQ6nyD0hAOpHj" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
                </div>
            </div>
            <section className="py-24 bg-neutral-dark relative" id="gap">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">The &quot;Seniority Paradox&quot;</h2>
                        <p className="text-soft-gray text-lg">As technology advances, decades of experience can be overshadowed by
                            the rapid pace of AI, from Manual Consultation to Intelligent Systems where We Architect a Digital
                            Reflection of your
                            Professional Expertise that works while you sleep.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bento-card p-10 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl">query_stats</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-accent-blue material-icons">warning</span>
                                Signal Clarity
                            </h3>
                            <p className="text-soft-gray leading-relaxed">Scale your brand without scaling your working hours
                                through digital twins and smart content engines.</p>
                        </div>
                        <div className="bento-card p-10 rounded-xl relative overflow-hidden group border-primary/10">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-primary material-icons">speed</span>
                                Operationally Scalable
                            </h3>
                            <p className="text-soft-gray leading-relaxed">Eliminate the gap between decision and execution.
                                Traditional workflows are built for precision; AI demands speed.</p>
                        </div>
                        <div className="bento-card p-10 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-6xl">security</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-accent-blue material-icons">lock</span>
                                Unbreakable Legacy
                            </h3>
                            <p className="text-soft-gray leading-relaxed">Commercial grade privacy. Your data never trains public
                                models. Adopting AI without compromising intellectual property.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative min-h-screen py-24 px-6 overflow-hidden flex flex-col items-center justify-center"
                id="services">
                {/* Background Ambient Blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none">
                </div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none">
                </div>
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    {/* Heading */}
                    <div className="text-center mb-20 space-y-4">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Strategic Architecture</p>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
                            We don’t sell tools. We Architect <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Institutional
                                Memory.</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-8"></div>
                    </div>
                    {/* 4-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Block 1: AI Concierge Agent */}
                        <div
                            className="service-card group relative bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col h-full shadow-lg">
                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">support_agent</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-primary drop-shadow-sm">Autonomous Client Interface
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">24/7
                                            interaction with flawless execution</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Sophisticated
                                            lead qualification</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Executive time
                                            protection protocols</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Block 2: Cloning Engine */}
                        <div
                            className="service-card group relative bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col h-full shadow-lg">
                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">psychology</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-primary drop-shadow-sm">Digital Twin Architecture
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">High-fidelity
                                            voice replication</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Strategic
                                            digital avatars</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Unlimited
                                            scalable presence</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Block 3: Private AI & Audit */}
                        <div
                            className="service-card group relative bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col h-full shadow-lg">
                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">admin_panel_settings</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-primary drop-shadow-sm">Sovereign Data Environments
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Enterprise
                                            productivity audit</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Rigorous data
                                            protection</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Controlled AI
                                            environment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Block 4: Full Integration System */}
                        <div
                            className="service-card group relative bg-slate-50 p-8 rounded-xl border border-slate-200 flex flex-col h-full shadow-lg">
                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">hub</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-primary drop-shadow-sm">Strategic Workflow
                                    Orchestration</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">High-conversion
                                            UX design</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Embedded
                                            GPT-native agents</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700 text-sm leading-relaxed">Retention-focused
                                            architecture</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Closing Line */}
                    <div className="mt-20 text-center">
                        <div className="inline-block relative">
                            <p className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                                This is not a tool. It is your system.
                            </p>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50">
                            </div>
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 inline-block">
                            Initiate a Confidential Briefing
                        </a>
                    </div>
                </div>
                {/* Subtle Visual Texture */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    data-alt="Abstract grid pattern background"
                    style={{ backgroundImage: 'radial-gradient(#067ff9 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
                </div>
            </section>
            <section
                className="max-w-7xl w-full mx-auto relative overflow-hidden bg-[#202124] rounded-xl border border-primary/10 shadow-2xl">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
                <div
                    className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-30">
                </div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16 lg:p-24 items-center">
                    {/* Left-aligned Content Section */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <span
                                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                                Premium AI Strategy
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                The Economy is Shifting.<br />
                                <span className="text-primary">Your Authority must Scale.</span>
                            </h2>
                        </div>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            Professionals who structure their expertise into intelligent systems dominate their niche. Those who
                            don&apos;t will compete with algorithms.
                        </p>
                        {/* Benefit List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            {/* Benefit Item 1 */}
                            <div
                                className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons text-2xl">verified</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Omnipresent Authority</h4>
                                    <p className="text-slate-400 text-sm mt-1">Establishing expertise around the clock.</p>
                                </div>
                            </div>
                            {/* Benefit Item 2 */}
                            <div
                                className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons text-2xl">auto_graph</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Zero-Touch Acquisition</h4>
                                    <p className="text-slate-400 text-sm mt-1">Lead generation without manual effort.</p>
                                </div>
                            </div>
                            {/* Benefit Item 3 */}
                            <div
                                className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons text-2xl">bolt</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Infinite Leverage</h4>
                                    <p className="text-slate-400 text-sm mt-1">Growing output without proportional input.</p>
                                </div>
                            </div>
                            {/* Benefit Item 4 */}
                            <div
                                className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-icons text-2xl">history_edu</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Durable Asset Class</h4>
                                    <p className="text-slate-400 text-sm mt-1">Building a durable digital asset.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side Decorative Area */}
                    <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-md">
                            {/* Abstract Tech Visual */}
                            <div
                                className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-6 scale-95 border border-primary/20">
                            </div>
                            <div
                                className="absolute inset-0 bg-[#282a2d] rounded-3xl shadow-2xl overflow-hidden border border-white/5 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <div className="w-12 h-2 bg-primary/40 rounded-full"></div>
                                        <div className="w-24 h-2 bg-slate-700 rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                        <span className="material-icons text-primary text-sm">lock</span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div
                                        className="h-32 w-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/10 flex items-center justify-center">
                                        <span className="material-icons text-5xl text-primary opacity-50">analytics</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-full h-1 bg-slate-800 rounded-full"></div>
                                        <div className="w-full h-1 bg-slate-800 rounded-full"></div>
                                        <div className="w-2/3 h-1 bg-slate-800 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                                        <img alt="Consultant profile" className="w-full h-full object-cover grayscale"
                                            data-alt="Close up portrait of a professional senior male consultant"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk9QLyDoybWY5FSn9Ea83NTdjF3d3I5qi6ai283Y_DipuKDCyrRDpBSSrk3b7VhY3fG9qNgYh1y7vPJFqSPhEPmjKLxoiO5foMNaJSzOq7fpONVsqZIsDoxyTl082Mt8OHLiy6Rh3V5DlBiTKMQYXE-4kkxWuz9UkO7BD46WtqOgXmeZpNRcdpscPxvr5BDCSc50LlOfpBk-3A3GvbpGtT5u8elgLu9BlRnS2gtYj5_vg2wEL7prkI_HYYP026L7mtaUtLIcOdxHiV" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="w-20 h-2 bg-slate-600 rounded-full"></div>
                                        <div className="w-12 h-1.5 bg-slate-700 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Stat Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-xl border border-white/20">
                                <div className="text-white">
                                    <p className="text-xs font-medium uppercase tracking-widest opacity-80">Market Power</p>
                                    <p className="text-3xl font-bold">+140%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Privacy & Control Section */}
            <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8">
                {/* Subtle Background Glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-primary blur-[120px] rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-24 space-y-4">
                        <div
                            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
                            Security Architecture
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
                            Privacy, control and <span className="text-primary">full ownership.</span>
                        </h2>
                        <p
                            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            Designed for senior professionals who demand the highest standards of data integrity and
                            architectural sovereignty.
                        </p>
                    </div>
                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                        {/* Pillar 1 */}
                        <div className="group flex flex-col items-center text-center">
                            <div
                                className="mb-8 p-6 rounded-2xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 shadow-sm group-hover:border-primary/50 transition-colors duration-300">
                                <span className="material-icons text-5xl text-primary">verified_user</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                Your data remains yours.
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                                Absolute sovereignty over your proprietary information. We never claim rights to your
                                intellectual property.
                            </p>
                        </div>
                        {/* Pillar 2 */}
                        <div className="group flex flex-col items-center text-center">
                            <div
                                className="mb-8 p-6 rounded-2xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 shadow-sm group-hover:border-primary/50 transition-colors duration-300">
                                <span className="material-icons text-5xl text-primary">gpp_maybe</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                No external data sharing.
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                                Your inputs never leave your secure environment. Zero third-party training on your sensitive
                                business logic.
                            </p>
                        </div>
                        {/* Pillar 3 */}
                        <div className="group flex flex-col items-center text-center">
                            <div
                                className="mb-8 p-6 rounded-2xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 shadow-sm group-hover:border-primary/50 transition-colors duration-300">
                                <span className="material-icons text-5xl text-primary">hub</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                Private architecture.
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                                Bespoke infrastructure designed for enterprise-grade security, fully controlled and managed by
                                your parameters.
                            </p>
                        </div>
                    </div>
                    {/* Trust Badges / Footer */}
                    <div
                        className="mt-32 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary/80">workspace_premium</span>
                            <span className="text-sm font-semibold tracking-wider text-slate-600 dark:text-slate-300 uppercase">SOC2
                                TYPE II</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary/80">admin_panel_settings</span>
                            <span className="text-sm font-semibold tracking-wider text-slate-600 dark:text-slate-300 uppercase">GDPR
                                COMPLIANT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary/80">lock</span>
                            <span
                                className="text-sm font-semibold tracking-wider text-slate-600 dark:text-slate-300 uppercase">AES-256
                                ENCRYPTION</span>
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 inline-block">
                            Take Control And Own It
                        </a>
                    </div>
                    {/* Abstract Tech Visual */}
                    <div
                        className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
                        <div className="w-full h-full bg-primary rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </section>
            <section className="py-24 overflow-hidden" id="methodology">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                                A Strategic Approach to <span
                                    className="text-primary underline decoration-primary/30 underline-offset-8">Intelligence</span>.
                            </h2>
                            <p className="text-sm text-soft-gray mb-8 font-medium tracking-wide">
                                Private AI infrastructure and strategic implementation for decision-makers operating at scale.
                            </p>
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 bg-accent-blue/10 border border-accent-blue/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-accent-blue">search</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">1. Strategic Audit</h4>
                                        <p className="text-soft-gray">We analyze your existing workflows to identify where AI can
                                            provide the highest leverage without disrupting core values.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-primary">settings_input_component</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">2. Custom AI Integration</h4>
                                        <p className="text-soft-gray">Tailored implementation of LLMs and automation agents
                                            specifically tuned to your industry&apos;s nuances and data sensitivity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 bg-accent-blue/10 border border-accent-blue/20 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-accent-blue">auto_graph</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">3. Workflow Mastery</h4>
                                        <p className="text-soft-gray">One-on-one training for you and your executive team to ensure
                                            the technology becomes an extension of your talent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Testimonial Cascade */}
                            <div className="relative w-full max-w-lg mx-auto flex flex-col space-y-6 animate-float"
                                id="testimonials">
                                {/* Testimonial 1 */}
                                <div
                                    className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 ml-0 hover:-translate-y-1">
                                    <p className="text-slate-300 italic text-sm mb-4 leading-relaxed">&quot;ReconnectIA didn’t replace my
                                        expertise — it amplified it. What used to take my team days now happens automatically,
                                        without losing strategic control.&quot;</p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                            CM</div>
                                        <div>
                                            <p className="text-white font-bold text-xs">Carlos Mendoza</p>
                                            <p className="text-primary text-[10px] uppercase tracking-wider font-semibold">Founder,
                                                Financial Advisory Group</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div
                                    className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 ml-12 hover:-translate-y-1">
                                    <p className="text-slate-300 italic text-sm mb-4 leading-relaxed">&quot;For the first time, technology feels aligned with my judgment, not competing with it. ReconnectIA transformed my firm’s operational clarity.&quot;</p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-xs font-bold">
                                            EV</div>
                                        <div>
                                            <p className="text-white font-bold text-xs">Elena Vargas</p>
                                            <p className="text-primary text-[10px] uppercase tracking-wider font-semibold">Principal
                                                Attorney, Vargas Legal Partners</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div
                                    className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 ml-6 hover:-translate-y-1">
                                    <p className="text-slate-300 italic text-sm mb-4 leading-relaxed">&quot;I wasn’t looking for
                                        automation. I was looking for leverage. ReconnectIA built the system that finally
                                        allowed me to scale without dilution.&quot;</p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                            RS</div>
                                        <div>
                                            <p className="text-white font-bold text-xs">Ricardo Salazar</p>
                                            <p className="text-primary text-[10px] uppercase tracking-wider font-semibold">Managing
                                                Consultant, RS Strategic Consulting</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 4 */}
                                <div
                                    className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 ml-16 hover:-translate-y-1">
                                    <p className="text-slate-300 italic text-sm mb-4 leading-relaxed">&quot;The real breakthrough wasn’t AI — it was structure. ReconnectIA turned decades of experience into a scalable digital asset.&quot;</p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-xs font-bold">
                                            MT</div>
                                        <div>
                                            <p className="text-white font-bold text-xs">Michael Thompson</p>
                                            <p className="text-primary text-[10px] uppercase tracking-wider font-semibold">CEO,
                                                Precision Engineering Advisors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main FAQ Section */}
            <section className="py-24 bg-neutral-dark">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Knowledge
                            Base</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Common Strategic Inquiries</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Addressing the critical considerations for executive-led AI implementation and digital asset
                            scaling.
                        </p>
                    </div>
                    {/* Accordion Container */}
                    <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                        {/* Accordion Item 1 */}
                        <div className="accordion-item group cursor-pointer p-6 rounded-lg hover:bg-white/[0.02]">
                            <div className="flex justify-between items-center">
                                <h3 className="question-text text-xl font-medium transition-colors duration-300">Do I need technical
                                    knowledge?</h3>
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <span className="material-icons text-white group-hover:text-primary text-xl">expand_more</span>
                                </div>
                            </div>
                            <div className="mt-4 pr-12">
                                <p className="text-gray-400 leading-relaxed">
                                    No. You provide the strategic doctrine; we architect the digital enforcement. This is an
                                    executive-level deployment, not a technical seminar.
                                </p>
                            </div>
                        </div>
                        {/* Accordion Item 2 */}
                        <div className="accordion-item group cursor-pointer p-6 rounded-lg hover:bg-white/[0.02]">
                            <div className="flex justify-between items-center">
                                <h3 className="question-text text-xl font-medium transition-colors duration-300">How is my
                                    information protected?</h3>
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <span className="material-icons text-white group-hover:text-primary text-xl">expand_more</span>
                                </div>
                            </div>
                            <div className="mt-4 pr-12">
                                <p className="text-gray-400 leading-relaxed">
                                    We deploy air-gapped, sovereignty-first architectures. Your data is legally and technically
                                    isolated. It never touches public models, ensuring your IP remains a trade secret.
                                </p>
                            </div>
                        </div>
                        {/* Accordion Item 3 */}
                        <div className="accordion-item group cursor-pointer p-6 rounded-lg hover:bg-white/[0.02]">
                            <div className="flex justify-between items-center">
                                <h3 className="question-text text-xl font-medium transition-colors duration-300">What ROI can I
                                    expect?</h3>
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <span className="material-icons text-white group-hover:text-primary text-xl">expand_more</span>
                                </div>
                            </div>
                            <div className="mt-4 pr-12">
                                <p className="text-gray-400 leading-relaxed">
                                    Efficiency is the baseline. The true ROI is valuation separation: transforming from a
                                    service-provider with capped upside to a platform-owner with infinite leverage.
                                </p>
                            </div>
                        </div>
                        {/* Accordion Item 4 */}
                        <div className="accordion-item group cursor-pointer p-6 rounded-lg hover:bg-white/[0.02]">
                            <div className="flex justify-between items-center">
                                <h3 className="question-text text-xl font-medium transition-colors duration-300">Is this only for
                                    tech experts?</h3>
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <span className="material-icons text-white group-hover:text-primary text-xl">expand_more</span>
                                </div>
                            </div>
                            <div className="mt-4 pr-12">
                                <p className="text-gray-400 leading-relaxed">
                                    It is exclusively for domain leaders. We partner with Principals and Founders who understand
                                    that their judgment is their product, and are ready to codify it at scale.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Qualification Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Subtle Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20"></div>

                    <div className="text-center mb-20 space-y-4">
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/50">Qualification</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Who This Is For — <span className="text-slate-500">And Who It Is Not.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                    <span className="material-icons text-sm">check</span>
                                </span>
                                This Is For You If:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>You are a senior professional or business owner with established operations.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>You manage a team, clients, or complex workflows.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>You believe your expertise is your greatest competitive advantage.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>You want to scale without diluting your authority.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                    <span>You are ready to invest in infrastructure, not shortcuts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8 relative">
                            {/* Vertical Divider for Desktop */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block -ml-6 lg:-ml-12"></div>

                            <h3 className="text-xl font-bold text-slate-500 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-500">
                                    <span className="material-icons text-sm">close</span>
                                </span>
                                This Is Not For You If:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                    <span>You are looking for AI prompts or basic automation tutorials.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                    <span>You want a quick hack without structural thinking.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                    <span>You are experimenting without operational maturity.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                    <span>You are unwilling to systematize decision-making processes.</span>
                                </li>
                                <li className="flex items-start gap-4 text-slate-400 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                    <span>You are searching for low-cost tools instead of long-term leverage.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-xl md:text-2xl text-white font-medium">
                            ReconnectIA is built for professionals who think in decades — <span className="text-gray-500">not
                                trends.</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Final Strategic CTA Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden premium-gradient py-24 px-6"
                id="cta">
                {/* Abstract Background Elements for Premium Feel */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div
                        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px] opacity-10">
                    </div>
                    <div
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px] opacity-10">
                    </div>
                    <div
                        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5">
                    </div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Context Badge */}
                    <div
                        className="mb-8 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 bg-primary/5">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary/80">Exclusive
                            Engagement</span>
                    </div>
                    {/* Main Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white">
                        Your expertise deserves more than <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">memory.</span>
                    </h2>
                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
                        It must become an active asset. Transition from finite billing to <span
                            className="text-gray-200 font-medium">infinite digital leverage</span>.
                    </p>
                    {/* CTA Container */}
                    <div className="flex flex-col items-center gap-6">
                        <a className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-primary rounded-lg cta-glow text-lg md:text-xl shadow-xl shadow-primary/10"
                            href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer">
                            <span className="relative">Limited capacity. Strategic alignment required</span>
                            <span
                                className="material-icons ml-3 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        {/* Scarcity Microcopy */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm italic text-gray-500 tracking-wide">
                                Strictly capped quarterly intake.
                            </p>
                            <div className="mt-4 flex items-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                                <div className="flex items-center space-x-1">
                                    <span className="material-icons text-sm">verified_user</span>
                                    <span className="text-[12px] uppercase font-bold tracking-tighter">Enterprise Secure</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                <div className="flex items-center space-x-1">
                                    <span className="material-icons text-sm">lock</span>
                                    <span className="text-[12px] uppercase font-bold tracking-tighter">NDA Protected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative UI Element: Grid Pattern */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#ff751f 1px, transparent 1px), linear-gradient(90deg, #ff751f 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </section>
            {/* Our Story Section */}
            <section className="py-32 relative overflow-hidden" id="our-story">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Subtle Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

                    <div className="text-center space-y-12">
                        {/* Label */}
                        <p className="text-accent-blue font-semibold tracking-widest uppercase text-sm">
                            Our Position
                        </p>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Built for Experts Who Refuse to Be Replaced.
                        </h2>

                        {/* Body Text */}
                        <div className="space-y-8 text-lg md:text-xl text-soft-gray font-light leading-relaxed max-w-3xl mx-auto">
                            <p>
                                ReconnectIA was founded on a simple observation: <br className="hidden md:block" />
                                Senior professionals possess decades of judgment, pattern recognition, and strategic intuition —
                                yet most digital systems ignore that accumulated value.
                            </p>
                            <p>
                                We do not teach AI. <br className="hidden md:block" />
                                We architect intelligent infrastructure that protects, organizes, and scales expertise without
                                diluting authority.
                            </p>
                            <p>
                                Our role is not to automate professionals out of relevance. <br className="hidden md:block" />
                                Our role is to transform their accumulated experience into autonomous digital assets that
                                operate with structure, discretion, and leverage.
                            </p>
                        </div>

                        {/* Closing Emphasis */}
                        <p className="text-xl md:text-2xl text-white font-medium pt-4">
                            Experience should compound — <span className="text-primary">not expire.</span>
                        </p>

                        {/* CTA */}
                        <div className="pt-8">
                            <a href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 inline-block">
                                Schedule Your Strategic Consultation
                            </a>
                            <p className="text-xs text-soft-gray/60 font-medium">
                                30-minute private session. Confidential. No obligation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <Link href="#top" className="inline-block">
                                    <img src="/assets/images/logo-main.png" alt="Reconnectia" className="h-8 w-auto" />
                                </Link>
                            </div>
                            <p className="text-soft-gray text-sm leading-relaxed">
                                The private infrastructure partner for the world&apos;s leading minds.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h5>
                            <ul className="space-y-4 text-soft-gray text-sm">
                                <li><a className="hover:text-white" href="#our-story">Our Story</a></li>
                                <li><a className="hover:text-white" href="#methodology">Methodology</a></li>
                                <li><a className="hover:text-white" href="#testimonials">Success Stories</a></li>
                                <li><a className="hover:text-white" href="#cta">Schedule</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Intelligence</h5>
                            <ul className="space-y-4 text-soft-gray text-sm">
                                <li><a className="hover:text-white" href="#services">AI Strategy</a></li>
                                <li><a className="hover:text-white" href="#services">Workflow Design</a></li>
                                <li><a className="hover:text-white" href="#services">Executive Training</a></li>
                                <li><a className="hover:text-white" href="#services">Security Audits</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Connect</h5>
                            <div className="flex gap-4 mb-6">
                                <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                    href="https://calendly.com/reconnectia/30min" target="_blank" rel="noopener noreferrer">
                                    <span className="material-icons text-sm">mail</span>
                                </a>
                            </div>
                            <p className="text-xs text-soft-gray">USA · LATAM</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-soft-gray gap-4">
                        <p>© 2024 ReconnectIA Consulting. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a className="hover:text-white" href="#">Privacy Policy</a>
                            <a className="hover:text-white" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>


            <ConciergeWidget />
        </main>
    );
}
