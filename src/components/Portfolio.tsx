"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

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
  const params = useParams();
  const lang = params?.lang as string || "en";
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
          
          {/* Card 1: EVA SOCIAL */}
          <div id="eva" className="group rounded-3xl bg-[#f0f9ff] text-slate-900 p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[460px] hover:-translate-y-1 scroll-mt-24 border border-sky-100">
            {/* Glow decoration */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-sky-200/30 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-extrabold tracking-wider uppercase text-slate-800">
                    {dict.projects.eva.title}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
                {dict.projects.eva.desc}
              </h3>
            </div>

            {/* Cute AI robot & Speech Bubble */}
            <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-end gap-2.5 pointer-events-none group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-14 h-14" style={{ animation: 'bounce 4s infinite' }}>
                {/* Robot head */}
                <div className="w-11 h-9 rounded-2xl bg-white border border-slate-200 shadow-md relative flex items-center justify-center">
                  {/* Face screen */}
                  <div className="w-8 h-6 rounded-lg bg-slate-950 flex items-center justify-center gap-1 p-0.5">
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  </div>
                  {/* Antennas */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-slate-400"></div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500"></div>
                </div>
                <div className="w-7 h-3 bg-slate-100 rounded-t mx-auto border-x border-slate-200 -mt-0.5"></div>
              </div>
              <div className="bg-pink-500 text-white text-[8px] font-black px-2 py-0.5 rounded-lg shadow-sm relative -translate-y-2">
                HI!
                <div className="absolute left-1.5 -bottom-0.5 w-1 h-1 bg-pink-500 rotate-45"></div>
              </div>
            </div>

            {/* Mockup Image */}
            <div className="relative w-full h-44 sm:h-52 mt-6 rounded-2xl bg-white border border-slate-200/80 shadow-md overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-end">
              <img
                src="/images/portfolio/eva_mockup.png"
                alt="Eva Social UI Preview"
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </div>

          {/* Card 2: MentalWell */}
          <div id="galinia" className="group rounded-3xl bg-gradient-to-br from-[#02a971] to-[#2bdba3] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[460px] hover:-translate-y-1 scroll-mt-24">
            {/* Background leaf pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <svg className="w-80 h-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 9 20 9 20s1.5-7 8-9c4-1.2 5-6 5-6s-4.5 3-8 4zm-8 4c-5.5 1.5-6.5 8-6.5 8s1-5 6.5-6.5c3.2-.8 4-4 4-4s-3.2 2-4 2.5z" />
              </svg>
            </div>

            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-2.5 mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 9 20 9 20s1.5-7 8-9c4-1.2 5-6 5-6s-4.5 3-8 4zm-8 4c-5.5 1.5-6.5 8-6.5 8s1-5 6.5-6.5c3.2-.8 4-4 4-4s-3.2 2-4 2.5z" />
                </svg>
                <span className="text-sm font-extrabold tracking-wider uppercase text-white font-sans">
                  {dict.projects.mental.title}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                {dict.projects.mental.desc}
              </h3>
            </div>

            {/* Status Pills */}
            <div className="absolute left-6 bottom-20 z-20 flex flex-col gap-2 pointer-events-none hidden sm:flex">
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white text-slate-800 text-[10px] font-bold shadow-sm flex items-center gap-1">
                  <span>😊</span> Calm
                </span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-400 text-slate-900 text-[10px] font-bold shadow-sm flex items-center gap-1">
                  <span>😴</span> Tired
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-900 text-[10px] font-bold shadow-sm flex items-center gap-1">
                  <span>😠</span> Angry
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white text-slate-800 text-[10px] font-bold shadow-sm flex items-center gap-1">
                  <span>😢</span> Heartbroken
                </span>
              </div>
            </div>

            {/* Mockup Graphic */}
            <div className="relative w-full h-44 sm:h-52 mt-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden flex items-end justify-center group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/images/portfolio/mental_mockup.png"
                alt="MentalWell Mobile Mockups"
                className="h-full w-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Card 3: DAEEM */}
          <Link href={`/${lang}/case-study/daeem`} id="daeem" className="group rounded-3xl bg-white text-slate-955 p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[460px] hover:-translate-y-1 scroll-mt-24 border border-slate-100 block cursor-pointer">
            {/* Soft pink wave ribbon background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-25 transition-opacity">
              <svg viewBox="0 0 1000 300" fill="none" className="w-full h-full object-cover">
                <path d="M-100 150 C300 50, 500 250, 1100 120" stroke="url(#wave-gradient)" strokeWidth="60" strokeLinecap="round" />
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#fca5a5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-[#e52e2e] tracking-widest leading-none">داعم دليفري</span>
                  <span className="text-2xl font-black text-[#0f54b6] tracking-tighter leading-none">daeem<span className="text-[#e52e2e] font-extrabold text-[10px] ml-0.5">delivery</span></span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
                {dict.projects.daeem.desc}
              </h3>
            </div>

            {/* Scooter driver */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:block group-hover:translate-x-4 transition-transform duration-500">
              <span className="text-5xl">🛵</span>
            </div>

            {/* Mockup Graphic */}
            <div className="relative w-full h-44 sm:h-52 mt-6 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 z-10">
              <img
                src="/images/portfolio/daeem_mockup.png"
                alt="Daeem Mobile App Mockups"
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </Link>
          {/* Card 4: GENESIS ERP */}
          <div id="das" className="group rounded-3xl bg-gradient-to-br from-[#0c1222] to-[#060913] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] lg:min-h-[460px] hover:-translate-y-1 border border-slate-800/80 scroll-mt-24">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none"></div>

            <div className="max-w-md relative z-10">
              {/* Logo / Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-black text-xs shadow-md">
                  DAS
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
            
            {/* Card 5: VEDGURU */}
            <div id="vedguru" className="group rounded-3xl bg-[#c05304] text-white p-8 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[380px] hover:-translate-y-1 scroll-mt-24">
              {/* Astrology backgrounds */}
              <div className="absolute -top-12 -left-12 w-32 h-32 opacity-10 pointer-events-none border border-dashed border-white rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-yellow-300">
                    {dict.projects.vedguru.title}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  {dict.projects.vedguru.desc}
                </h4>
              </div>

              {/* Sun/Moon Astrology Symbol */}
              <div className="absolute -left-6 -bottom-6 w-24 h-24 opacity-15 pointer-events-none text-yellow-300 hidden sm:block">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full animate-[spin_60s_linear_infinite]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                </svg>
              </div>

              {/* Mockup Graphic */}
              <div className="relative w-full h-36 mt-4 rounded-xl bg-black/10 border border-white/10 flex items-end justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/images/portfolio/vedguru_mockup.png"
                  alt="Vedguru Mobile Astrology Mockup"
                  className="h-full w-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Card 6: ARTUNE */}
            <div id="artune" className="group rounded-3xl bg-[#5d3fd3] text-white p-8 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[380px] hover:-translate-y-1 scroll-mt-24">
              
              <div className="relative z-10">
                {/* Yellow Ring decoration at the top-left */}
                <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full border-[10px] border-yellow-400 border-r-transparent rotate-45 opacity-60"></div>
                
                {/* Logo and Headings */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black tracking-tight font-serif italic text-white">
                    ARTUNE
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  {dict.projects.artune.desc.split(". ").map((chunk, i) => (
                    <span key={i} className={i === 1 ? "text-yellow-400 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent block mt-1" : "block"}>
                      {chunk}{i === 0 && "."}
                    </span>
                  ))}
                </h4>
              </div>

              {/* Mockup Graphic */}
              <div className="relative w-full h-36 mt-4 rounded-xl bg-black/10 border border-white/10 flex items-end justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/images/artune/browser_mockup.png"
                  alt="Artune Web UI Preview"
                  className="h-full w-auto object-contain select-none"
                />
                {/* Visual Yellow arch element overlaying browser corner */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full border-[8px] border-yellow-400 opacity-80 pointer-events-none"></div>
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
