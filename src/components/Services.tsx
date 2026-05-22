"use client";

import Link from "next/link";

interface ServicesProps {
  dict: {
    titleMain: string;
    titleSub: string;
    cta: string;
    mobile: { title: string; desc: string };
    web: { title: string; desc: string };
    devops: { title: string; desc: string };
    uiux: { title: string; desc: string };
    blockchain: { title: string; desc: string };
    devs: { title: string; desc: string };
  };
}

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="w-full bg-[#1b1d2a] py-18 md:py-18 relative">
      {/* Background decoration glow */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {dict.titleMain}{" "}
            <span className="text-teal-400 font-semibold">{dict.titleSub}</span>
          </h2>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700 hover:border-teal-400 bg-transparent text-sm font-bold text-slate-200 hover:text-white transition-all group"
          >
            {dict.cta}
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-teal-400"
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
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Mobile App Development (Dark) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-[#151824]/60 border border-slate-800/80 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-[#0c0d14] transition-all duration-300">
                {/* Mobile icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.mobile.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {dict.mobile.desc}
              </p>
            </div>
          </div>

          {/* Card 2: Web Development (Highlighted Teal Card) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-[#1a1e2f] to-[#121420] border border-teal-500/40 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-teal-500/5 hover:shadow-cyan-500/10 relative overflow-hidden">
            {/* Soft grid background inside card */}
            <div className="absolute inset-0 grid-bg-teal opacity-5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-[#0c0d14] mb-6 group-hover:scale-110 transition-transform shadow-md shadow-teal-450/20">
                {/* Screen / Code icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.web.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {dict.web.desc}
              </p>
            </div>
          </div>

          {/* Card 3: DevOps (Dark) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-[#151824]/60 border border-slate-800/80 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-[#0c0d14] transition-all duration-300">
                {/* Cloud icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.devops.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {dict.devops.desc}
              </p>
            </div>
          </div>

          {/* Card 4: UI/UX (Dark) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-[#151824]/60 border border-slate-800/80 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-[#0c0d14] transition-all duration-300">
                {/* Palette icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.uiux.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {dict.uiux.desc}
              </p>
            </div>
          </div>

          {/* Card 5: Blockchain (Dark) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-[#151824]/60 border border-slate-800/80 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-[#0c0d14] transition-all duration-300">
                {/* Cube icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.blockchain.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {dict.blockchain.desc}
              </p>
            </div>
          </div>

          {/* Card 6: Hire Dedicated Developer (Highlighted Teal Card) */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-[#1a1e2f] to-[#121420] border border-teal-500/40 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-[#122332] hover:to-[#0c1822] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-teal-500/5 hover:shadow-cyan-500/10 relative overflow-hidden">
            {/* Soft grid background inside card */}
            <div className="absolute inset-0 grid-bg-teal opacity-5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-[#0c0d14] mb-6 group-hover:scale-110 transition-transform shadow-md shadow-teal-450/20">
                {/* Developers group icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                {dict.devs.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {dict.devs.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
