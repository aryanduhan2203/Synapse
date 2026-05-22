"use client";

import Link from "next/link";

interface PortfolioProps {
  dict: {
    titleMain: string;
    titleSub: string;
    subtitle: string;
    cta: string;
    projects: {
      eva: { title: string; desc: string };
      mental: { title: string; desc: string };
      daeem: { title: string; desc: string };
      genesis: { title: string; desc: string };
      vedguru: { title: string; desc: string };
      artune: { title: string; desc: string };
    };
  };
}

export default function Portfolio({ dict }: PortfolioProps) {
  return (
    <section id="case-studies" className="w-full bg-[#08090f] py-20 md:py-28 relative border-b border-white/5">
      {/* Glow decorations */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {dict.titleMain}{" "}
            <span className="text-teal-400 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.titleSub}
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {dict.subtitle.split("stable, scalable").map((chunk, i) => (
              <span key={i}>
                {chunk}
                {i === 0 && (
                  <span className="text-teal-400 font-semibold">stable, scalable</span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: AURASOCIAL */}
          <div className="group rounded-3xl bg-white text-slate-950 p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] lg:min-h-[460px] hover:-translate-y-1">
            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                  AS
                </div>
                <div>
                  <span className="text-sm font-extrabold tracking-wider uppercase text-violet-600">
                    {dict.projects.eva.title}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
                {dict.projects.eva.desc}
              </h3>
            </div>

            {/* Graphic Mockup (AuraSocial UI preview) */}
            <div className="relative w-full h-48 sm:h-56 mt-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-inner overflow-hidden p-4 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="w-full h-full flex flex-col gap-2.5">
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-violet-600"></div>
                    <div className="w-16 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-8 h-3.5 rounded bg-violet-100"></div>
                    <div className="w-8 h-3.5 rounded bg-slate-200"></div>
                  </div>
                </div>
                {/* Simulated Dashboard content */}
                <div className="grid grid-cols-3 gap-3 flex-grow">
                  <div className="col-span-2 bg-white rounded-xl border border-slate-200/60 p-2.5 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="w-2/3 h-2 rounded bg-slate-200"></div>
                      <div className="w-full h-2 rounded bg-slate-100"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="w-12 h-4 rounded bg-violet-50 flex items-center justify-center text-[8px] font-bold text-violet-600">
                        Schedule
                      </div>
                      <div className="w-6 h-2 rounded bg-slate-200"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200/60 p-2.5 flex flex-col justify-between items-center text-center">
                    <div className="w-7 h-7 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 text-xs font-bold">
                      AI
                    </div>
                    <div className="w-10 h-1.5 rounded bg-slate-200 mt-2"></div>
                  </div>
                </div>
              </div>
              {/* Overlay floating badge */}
              <div className="absolute right-4 bottom-4 w-28 bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-lg flex items-center gap-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="space-y-1 flex-grow">
                  <div className="w-12 h-1.5 rounded bg-slate-200"></div>
                  <div className="w-8 h-1 rounded bg-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: MINDFLOW */}
          <div className="group rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] lg:min-h-[460px] hover:-translate-y-1">
            {/* Background pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <svg className="w-80 h-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 9 20 9 20s1.5-7 8-9c4-1.2 5-6 5-6s-4.5 3-8 4zm-8 4c-5.5 1.5-6.5 8-6.5 8s1-5 6.5-6.5c3.2-.8 4-4 4-4s-3.2 2-4 2.5z" />
              </svg>
            </div>

            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-7 h-7 text-emerald-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 9 20 9 20s1.5-7 8-9c4-1.2 5-6 5-6s-4.5 3-8 4z" />
                </svg>
                <span className="text-sm font-extrabold tracking-wider uppercase text-emerald-100">
                  {dict.projects.mental.title}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                {dict.projects.mental.desc}
              </h3>
            </div>

            {/* Telemedicine call mockup graphic */}
            <div className="relative w-full h-48 sm:h-56 mt-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden flex items-center justify-around p-4 group-hover:scale-[1.02] transition-transform duration-300">
              
              {/* Call Screen mockup */}
              <div className="w-1/2 h-full bg-[#0c0d14] rounded-xl border border-white/10 overflow-hidden relative flex flex-col justify-between p-2">
                {/* Caller Video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-mono text-[9px] select-none">
                  Video Feed
                </div>
                
                {/* Mini User Video */}
                <div className="absolute bottom-2 right-2 w-10 h-14 rounded bg-slate-800 border border-white/20 z-10"></div>
                
                {/* Call controls */}
                <div className="relative z-10 flex justify-center gap-1.5 mt-auto">
                  <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[6px]">📞</div>
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[6px]">🎙️</div>
                </div>
              </div>

              {/* Chat list / Mood indicator mockup */}
              <div className="w-1/2 max-w-[160px] h-full flex flex-col gap-2 justify-center pl-4">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-1.5 border border-white/10 flex items-center gap-2">
                  <span className="text-xs">😊</span>
                  <div className="space-y-0.5">
                    <div className="w-12 h-1 bg-white/60 rounded"></div>
                    <div className="w-8 h-0.5 bg-white/40 rounded"></div>
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-1.5 border border-white/10 flex items-center gap-2">
                  <span className="text-xs">🧘</span>
                  <div className="space-y-0.5">
                    <div className="w-10 h-1 bg-white/60 rounded"></div>
                    <div className="w-6 h-0.5 bg-white/40 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: SWIFTBITE */}
          <div className="group rounded-3xl bg-[#fdf5f0] text-slate-950 p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] lg:min-h-[460px] hover:-translate-y-1">
            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-650 flex items-center justify-center text-white font-extrabold text-[9px] shadow uppercase">
                  Swift
                </div>
                <span className="text-sm font-extrabold tracking-wider uppercase text-orange-650">
                  {dict.projects.daeem.title}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
                {dict.projects.daeem.desc}
              </h3>
            </div>

            {/* Food delivery app mockup */}
            <div className="relative w-full h-48 sm:h-56 mt-6 rounded-2xl bg-white border border-slate-200/80 shadow-md overflow-hidden p-4 flex gap-4 group-hover:scale-[1.02] transition-transform duration-300">
              {/* Left Side: Category list */}
              <div className="w-1/3 flex flex-col gap-2 border-r border-slate-100 pr-2">
                <div className="w-full h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[9px] font-bold text-orange-600 gap-1">
                  🍕 Pizza
                </div>
                <div className="w-full h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[9px] text-slate-600 gap-1">
                  🍔 Burger
                </div>
                <div className="w-full h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[9px] text-slate-600 gap-1">
                  🍣 Sushi
                </div>
              </div>

              {/* Right Side: Store cards */}
              <div className="w-2/3 flex flex-col gap-2 justify-center">
                <div className="border border-slate-200/60 rounded-xl p-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex-shrink-0 flex items-center justify-center text-lg">🍕</div>
                  <div className="space-y-1 flex-grow">
                    <div className="w-16 h-2 bg-slate-200 rounded"></div>
                    <div className="w-24 h-1.5 bg-slate-150 rounded"></div>
                  </div>
                </div>
                {/* 20% off promo banner overlay */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg p-2 flex items-center justify-between shadow-md">
                  <div className="space-y-0.5">
                    <div className="text-[8px] font-extrabold tracking-wide uppercase">Promo Offer</div>
                    <div className="text-[10px] font-black">20% OFF FIRST ORDER</div>
                  </div>
                  <span className="text-xs">🎉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: GENESIS ERP */}
          <div className="group rounded-3xl bg-gradient-to-br from-[#0c1222] to-[#060913] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] lg:min-h-[460px] hover:-translate-y-1 border border-slate-800/80">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none"></div>

            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-black text-xl shadow-md">
                  G
                </div>
                <div>
                  <span className="text-sm font-extrabold tracking-wider uppercase text-cyan-450">
                    {dict.projects.genesis.title}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {dict.projects.genesis.desc}
              </h3>
            </div>

            {/* Simulated SaaS Dashboard / Chart Mockup */}
            <div className="relative w-full h-48 sm:h-56 mt-6 rounded-2xl bg-[#111422] border border-slate-800/60 shadow-lg overflow-hidden p-4 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="w-full h-full flex flex-col gap-3">
                {/* Header panel */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-450"></div>
                    <div className="w-20 h-2 bg-slate-800 rounded"></div>
                  </div>
                  <div className="w-10 h-2 bg-slate-800 rounded"></div>
                </div>

                {/* Grid analytics info */}
                <div className="grid grid-cols-4 gap-3 flex-grow items-end">
                  {/* Left stats column */}
                  <div className="col-span-1 flex flex-col justify-end h-full space-y-2">
                    <div className="w-12 h-3 bg-slate-850 rounded"></div>
                    <div className="w-8 h-2 bg-slate-900 rounded"></div>
                  </div>
                  {/* Chart columns with gradients */}
                  <div className="col-span-3 h-full flex items-end justify-around border-l border-slate-850 pl-3">
                    <div className="w-5.5 h-16 bg-gradient-to-t from-cyan-600 to-teal-400 rounded-md transition-all duration-500 group-hover:h-20 shadow-lg shadow-cyan-500/20"></div>
                    <div className="w-5.5 h-24 bg-gradient-to-t from-cyan-600 to-teal-400 rounded-md transition-all duration-500 group-hover:h-28 shadow-lg shadow-cyan-500/20"></div>
                    <div className="w-5.5 h-12 bg-gradient-to-t from-cyan-600 to-teal-400 rounded-md transition-all duration-500 group-hover:h-16 shadow-lg shadow-cyan-500/20"></div>
                  </div>
                </div>
              </div>

              {/* Floating metrics badge */}
              <div className="absolute right-4 top-4 bg-[#1a2035]/90 border border-cyan-400/25 rounded-xl p-2.5 shadow-xl flex flex-col gap-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-[8px] font-extrabold text-cyan-400 uppercase tracking-widest">Global ARR</span>
                <span className="text-xs font-black text-white">+$24.8K USD</span>
              </div>
            </div>
          </div>

          {/* Card 5 & 6 (ASTROGUIDE and MUSELINK) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            
            {/* Card 5: ASTROGUIDE */}
            <div className="group rounded-3xl bg-[#e65c00] text-white p-8 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[380px] hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-orange-200">
                    {dict.projects.vedguru.title}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  {dict.projects.vedguru.desc}
                </h4>
              </div>

              {/* Horoscope astrology wheel mockup */}
              <div className="relative w-full h-36 mt-4 rounded-xl bg-orange-700/35 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-full border border-white/15 animate-[spin_20s_linear_infinite] flex items-center justify-center opacity-70">
                  <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                    <span className="text-lg">☀️</span>
                  </div>
                </div>
                {/* Astro chat overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-white text-slate-900 rounded-lg p-2 flex items-center justify-between border border-orange-100 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">🧙</div>
                    <div className="text-[9px] font-bold">Sandy: Connect with Astrologer</div>
                  </div>
                  <div className="bg-orange-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                    Chat
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: MUSELINK */}
            <div className="group rounded-3xl bg-[#5200cc] text-white p-8 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[380px] hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-violet-200">
                    {dict.projects.artune.title}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  {dict.projects.artune.desc}
                </h4>
              </div>

              {/* Contemporary art UI frame mockup */}
              <div className="relative w-full h-36 mt-4 rounded-xl bg-violet-950 border border-white/15 overflow-hidden p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-widest text-violet-300 uppercase">MUSELINK DEPTH</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 my-2 flex-grow">
                  <div className="bg-violet-900/50 rounded-lg border border-white/5 flex items-center justify-center text-xs">🖼️</div>
                  <div className="bg-violet-900/50 rounded-lg border border-white/5 flex items-center justify-center text-xs">🎨</div>
                  <div className="bg-violet-900/50 rounded-lg border border-white/5 flex items-center justify-center text-xs">🗿</div>
                </div>
                <div className="w-full h-2 rounded bg-violet-900"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Explore CTA Button */}
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-slate-900 text-[#0c0d14] hover:text-white text-sm font-extrabold shadow-lg shadow-black/10 hover:shadow-black/20 hover:scale-105 active:scale-95 transition-all group"
          >
            {dict.cta}
            <div className="w-6 h-6 rounded-full bg-slate-900/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg
                className="w-3.5 h-3.5 text-slate-900 group-hover:text-white transition-colors transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
