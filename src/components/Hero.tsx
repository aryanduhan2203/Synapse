"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  dict: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    bubbleAI: string;
    bubbleShield: string;
  };
  lang: string;
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden grid-bg pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* CTA Pill Badge */}
            <div className="inline-flex">
              <Link 
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 hover:border-slate-600 transition-colors group"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                <span className="text-xs font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                  {dict.badge}
                </span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {dict.headingMain}{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {dict.headingHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {dict.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-700 bg-transparent hover:bg-white hover:text-slate-900 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 group"
              >
                {dict.badge}
                <div className="ml-2.5 w-6 h-6 rounded-full bg-slate-950/20 group-hover:bg-slate-950/10 flex items-center justify-center transition-colors border border-slate-700 group-hover:border-slate-400">
                  <svg className="w-3.5 h-3.5 text-white group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Visual Column (Plexus sphere + floating badges) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              
              {/* Globe Wireframe Image */}
              <div className="w-full h-full relative opacity-85 select-none animate-pulse-slow rounded-full overflow-hidden">
                <Image
                  src="/images/wireframe_globe.png"
                  alt="Futuristic glowing wireframe globe"
                  fill
                  className="object-contain animate-[spin_50s_linear_infinite] mix-blend-screen rounded-full"
                  priority
                />
              </div>

              {/* Floating Badge 1: Yellow Shield (Top Left) */}
              <div className="absolute -top-4 left-1/4 animate-bounce [animation-duration:6s] z-20">
                <div className="flex items-center justify-center w-12 h-14 bg-gradient-to-b from-amber-400 to-amber-500 rounded-b-xl shadow-lg shadow-amber-500/20 border-t border-amber-300">
                  <svg className="w-6 h-6 text-[#0c0d14]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM12 14a3 3 0 11-6 0 3 3 0 016 0zm-3 2a1 1 0 100-2v-1a1 1 0 100 2v1zm4.707-1.293a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM17.242 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707z" />
                  </svg>
                </div>
                {/* Dotted path leading to shield */}
                <div className="absolute top-14 left-6 w-10 h-10 border-l-2 border-b-2 border-dashed border-slate-500/40 rounded-bl-2xl -z-10"></div>
              </div>

              {/* Floating Badge 2: White Chat Bubble (Right) */}
              <div className="absolute top-1/3 -right-6 animate-bounce [animation-duration:8s] [animation-delay:1s] z-20">
                <div className="flex items-center gap-3 bg-white text-slate-900 py-3 px-4 rounded-xl shadow-2xl border border-slate-200 min-w-[200px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                  <div className="flex-1">
                    <div className="h-2 w-20 bg-slate-200 rounded-full mb-1"></div>
                    <div className="h-1.5 w-12 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Teal Chat Bubble (Bottom Left) */}
              <div className="absolute bottom-6 -left-10 animate-bounce [animation-duration:7s] [animation-delay:2s] z-20">
                <div className="flex items-center gap-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 py-3 px-4 rounded-xl shadow-lg shadow-teal-500/10 min-w-[180px]">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-teal-300">
                    <Image
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-wide">
                      {dict.bubbleAI}
                    </span>
                    <span className="text-[10px] opacity-75 font-semibold">
                      Online
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
