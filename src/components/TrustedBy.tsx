"use client";

import Link from "next/link";

interface TrustedByProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function TrustedBy({ dict }: TrustedByProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 text-slate-950 py-12 md:py-16">
      {/* Light grid overlay */}
      <div className="absolute inset-0 grid-bg-teal opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Title Group */}
        <div className="space-y-3 mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {dict.title}
          </h2>
          <p className="text-white/90 font-medium text-sm md:text-base">
            {dict.subtitle}
          </p>
        </div>

        {/* Infinite Ticker Container */}
        <div className="relative w-full overflow-hidden mb-10 flex select-none py-6">
          {/* Mask gradients on left and right for fade out effect */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-teal-500 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-cyan-500 to-transparent z-20 pointer-events-none"></div>
          
          {/* Scrolling wrapper with 0 gap between sets for a mathematically seamless reset loop */}
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Set 1 */}
            <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
              {/* Sajaya */}
              <div className="font-serif text-[#f8fafc] text-5xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300">
                Sajaya
              </div>
              {/* GLOBAL Menu */}
              <div className="flex items-center gap-3 text-white hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-white opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v2m-6 6h12a6 6 0 00-12 0zm-2 2h16a1 1 0 011 1v1H3v-1a1 1 0 011-1z" />
                </svg>
                <div className="flex flex-col text-left leading-none font-black">
                  <span className="text-xs tracking-[0.2em] opacity-90 uppercase">GLOBAL</span>
                  <span className="text-3xl tracking-tight font-serif italic mt-0.5">menu</span>
                </div>
              </div>
              {/* MUSELINK */}
              <div className="font-sans font-black italic tracking-wide text-5xl text-white hover:scale-105 transition-transform duration-300">
                MUSELINK
              </div>
              {/* D A S */}
              <div className="font-sans font-extrabold tracking-[0.45em] text-5xl text-white hover:scale-105 transition-transform duration-300 pl-4">
                DAS
              </div>
              {/* DASH OF HEALTH */}
              <div className="flex flex-col text-left font-sans font-bold tracking-widest leading-none text-white hover:scale-105 transition-transform duration-300">
                <span className="text-xs opacity-85 tracking-[0.3em]">DASH OF</span>
                <span className="border-t-2 border-white/40 pt-1 mt-1 font-black text-3xl tracking-widest">HEALTH</span>
              </div>
              {/* swift bite */}
              <div className="flex flex-col text-left text-white leading-none hover:scale-105 transition-transform duration-300">
                <span className="font-serif font-black tracking-tight text-5xl">swift</span>
                <span className="text-xs tracking-[0.25em] uppercase opacity-85 font-mono mt-1 text-center">bite</span>
              </div>
              {/* Genesis */}
              <div className="flex items-center gap-3 text-white hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center font-black text-3xl shadow-inner">G</div>
                <span className="font-sans font-black text-2xl tracking-widest uppercase">Genesis</span>
              </div>
            </div>

            {/* Set 2 for seamless loop (identical spacing and padding) */}
            <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
              {/* Sajaya */}
              <div className="font-serif text-[#f8fafc] text-5xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300">
                Sajaya
              </div>
              {/* GLOBAL Menu */}
              <div className="flex items-center gap-3 text-white hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-white opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v2m-6 6h12a6 6 0 00-12 0zm-2 2h16a1 1 0 011 1v1H3v-1a1 1 0 011-1z" />
                </svg>
                <div className="flex flex-col text-left leading-none font-black">
                  <span className="text-xs tracking-[0.2em] opacity-90 uppercase">GLOBAL</span>
                  <span className="text-3xl tracking-tight font-serif italic mt-0.5">menu</span>
                </div>
              </div>
              {/* MUSELINK */}
              <div className="font-sans font-black italic tracking-wide text-5xl text-white hover:scale-105 transition-transform duration-300">
                MUSELINK
              </div>
              {/* D A S */}
              <div className="font-sans font-extrabold tracking-[0.45em] text-5xl text-white hover:scale-105 transition-transform duration-300 pl-4">
                DAS
              </div>
              {/* DASH OF HEALTH */}
              <div className="flex flex-col text-left font-sans font-bold tracking-widest leading-none text-white hover:scale-105 transition-transform duration-300">
                <span className="text-xs opacity-85 tracking-[0.3em]">DASH OF</span>
                <span className="border-t-2 border-white/40 pt-1 mt-1 font-black text-3xl tracking-widest">HEALTH</span>
              </div>
              {/* swift bite */}
              <div className="flex flex-col text-left text-white leading-none hover:scale-105 transition-transform duration-300">
                <span className="font-serif font-black tracking-tight text-5xl">swift</span>
                <span className="text-xs tracking-[0.25em] uppercase opacity-85 font-mono mt-1 text-center">bite</span>
              </div>
              {/* Genesis */}
              <div className="flex items-center gap-3 text-white hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center font-black text-3xl shadow-inner">G</div>
                <span className="font-sans font-black text-2xl tracking-widest uppercase">Genesis</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Case Study Button */}
        <div className="flex justify-center px-4">
          <Link
            href="#case-studies"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white hover:bg-slate-900 text-[#0c0d14] hover:text-white text-sm font-extrabold shadow-lg shadow-black/10 hover:shadow-black/20 hover:scale-105 active:scale-95 transition-all group"
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
