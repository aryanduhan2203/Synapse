"use client";

import Link from "next/link";

interface BlogPost {
  category: string;
  title: string;
}

interface BlogProps {
  dict: {
    title: string;
    cta: string;
    featured: {
      title: string;
      desc: string;
      readMore: string;
    };
    posts: BlogPost[];
  };
}

export default function Blog({ dict }: BlogProps) {
  return (
    <section id="blog" className="w-full bg-[#0c0d14] py-20 md:py-28 relative border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Card Container Panel */}
        <div className="bg-[#0e2233]/85 border border-[#1b3c54] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none"></div>

          {/* Header Row (Inside the Card) */}
          <div className="flex items-center justify-between gap-6 mb-8 relative z-10 border-b border-slate-800/60 pb-5">
            <h2 className="text-2xl sm:text-3.5xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="w-2.5 h-6 bg-teal-400 rounded-full"></span>
              {dict.title}
            </h2>

            <Link
              href="#blog"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-800 hover:border-teal-400 bg-white/5 hover:bg-white/10 text-xs font-extrabold text-slate-200 hover:text-white transition-all hover:scale-105 active:scale-95 group"
            >
              {dict.cta}
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform text-teal-400"
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

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Left Column: Big Feature Card Frame (Glassmorphic Redesign without Photo) */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-xl border border-slate-800/80 bg-gradient-to-br from-[#112437] via-[#091522] to-[#060b11] group flex flex-col justify-between p-6">
              {/* Animated abstract light glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/15 transition-colors duration-500 pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/15 transition-colors duration-500 pointer-events-none"></div>

              {/* Center Abstract Tech Design */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <svg className="w-48 h-48 text-slate-800" fill="none" viewBox="0 0 200 200" stroke="currentColor">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_120s_linear_infinite]" />
                  {/* Inner glowing circle */}
                  <circle cx="100" cy="100" r="50" strokeWidth="1.5" className="text-teal-500/20" />
                  {/* Floating particles or crosshairs */}
                  <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.5" strokeDasharray="2 4" />
                  <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.5" strokeDasharray="2 4" />
                  {/* Glowing central sphere */}
                  <circle cx="100" cy="100" r="10" className="fill-teal-500/10 stroke-teal-500/40" />
                </svg>
              </div>

              {/* Top brand logo overlay */}
              <div className="relative z-10 text-white/90 font-black text-2xl select-none tracking-tighter filter drop-shadow">
                DF
              </div>

              {/* Floating Featured Badge */}
              <div className="relative z-10 mt-auto">
                <span className="inline-block bg-teal-400/90 text-[#0c0d14] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                  Featured Article
                </span>
              </div>
            </div>

            {/* Right Column: Featured Details & Bottom 3 horizontal Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              
              {/* Top Section: Main Article Copy */}
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight hover:text-teal-400 transition-colors">
                  {dict.featured.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed max-w-2xl">
                  {dict.featured.desc}
                </p>
                
                <Link
                  href="#blog"
                  className="inline-flex items-center gap-2 text-teal-400 font-extrabold text-sm md:text-[15px] hover:underline group/btn mt-2"
                >
                  {dict.featured.readMore}
                  <div className="w-5 h-5 rounded-full border border-teal-400/30 flex items-center justify-center group-hover/btn:border-teal-450 transition-colors">
                    <svg
                      className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform"
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

              {/* Bottom Section: 3 Mockup Cards side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                
                {/* Card 1: BLOCKCHAIN */}
                <div className="group rounded-2xl bg-gradient-to-br from-[#0c1c2e] via-[#091522] to-[#050b12] border border-slate-800/80 hover:border-cyan-500/40 p-4 h-[142px] flex flex-col justify-between relative overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Cyber Grid / Glowing Cube Visual Mockup */}
                  <div className="absolute right-0 bottom-0 w-20 h-20 opacity-20 pointer-events-none">
                    <div className="w-12 h-12 border-2 border-cyan-400 rounded-lg absolute right-2 bottom-2 transform rotate-12 flex items-center justify-center">
                      <div className="w-6 h-6 border border-cyan-300 rounded-md transform -rotate-12"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {dict.posts[0].category}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-white/5 group-hover:bg-cyan-500/10 border border-slate-700 group-hover:border-cyan-500/35 flex items-center justify-center transition-colors">
                      <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-[11px] font-extrabold text-slate-200 group-hover:text-white leading-snug line-clamp-2 mt-auto relative z-10">
                    {dict.posts[0].title}
                  </h4>
                </div>

                {/* Card 2: LOGISTICS */}
                <div className="group rounded-2xl bg-[#e6f4fe] hover:bg-[#ebf6ff] border border-sky-200 p-4 h-[142px] flex flex-col justify-between relative overflow-hidden cursor-pointer shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Cute delivery scooter path mockup */}
                  <div className="absolute right-0 bottom-0 w-24 h-20 opacity-15 pointer-events-none flex items-end justify-end p-1">
                    <div className="w-16 h-12 bg-sky-400 rounded-lg relative flex items-center justify-center text-xl">🛵</div>
                  </div>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#0e7490] bg-[#e0f2fe] px-2 py-0.5 rounded border border-[#bae6fd]">
                      {dict.posts[1].category}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-black/5 group-hover:bg-sky-500/10 border border-sky-300 flex items-center justify-center transition-colors">
                      <svg className="w-2.5 h-2.5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-[11px] font-extrabold text-slate-800 group-hover:text-slate-950 leading-snug line-clamp-2 mt-auto relative z-10">
                    {dict.posts[1].title}
                  </h4>
                </div>

                {/* Card 3: BUSINESS */}
                <div className="group rounded-2xl bg-gradient-to-br from-[#2e1065] via-[#1e0745] to-[#0f0224] border border-slate-800/80 hover:border-purple-500/40 p-4 h-[142px] flex flex-col justify-between relative overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Dashboard wireframe visual mockup */}
                  <div className="absolute right-1 bottom-1 w-20 h-16 opacity-20 pointer-events-none">
                    <div className="w-14 h-14 bg-purple-900/40 border border-purple-500/25 rounded-md p-1 flex flex-col gap-1">
                      <div className="w-full h-1.5 bg-purple-500/30 rounded"></div>
                      <div className="flex gap-1 flex-grow items-end mt-1">
                        <div className="w-2.5 h-6 bg-purple-400 rounded-sm"></div>
                        <div className="w-2.5 h-4 bg-purple-400 rounded-sm"></div>
                        <div className="w-2.5 h-8 bg-purple-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[8px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {dict.posts[2].category}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-white/5 group-hover:bg-purple-500/10 border border-slate-700 group-hover:border-purple-500/35 flex items-center justify-center transition-colors">
                      <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-[11px] font-extrabold text-slate-200 group-hover:text-white leading-snug line-clamp-2 mt-auto relative z-10">
                    {dict.posts[2].title}
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
