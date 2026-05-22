"use client";

import Image from "next/image";

interface PromoProps {
  dict: {
    title: string;
    description1: string;
    description2: string;
  };
}

export default function Promo({ dict }: PromoProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 text-slate-950 py-6 md:py-10">
      {/* Light grid overlay on teal banner */}
      <div className="absolute inset-0 grid-bg-teal opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (White Robot Image) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 select-none">
              <Image
                src="/images/robot_thinking.png"
                alt="AI Robot thinking"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column (Promo Text) */}
          <div className="lg:col-span-7 space-y-6 text-left text-slate-950">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {dict.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg font-medium leading-relaxed text-slate-900">
              <p>
                {dict.description1}
              </p>
              <p>
                {dict.description2}
              </p>
            </div>

            {/* Glowing Accent Badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-950 text-teal-400 text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                Synapse Core Methodology
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
