"use client";

interface FeaturedProps {
  dict: {
    title: string;
  };
}

export default function FeaturedOn({ dict }: FeaturedProps) {
  return (
    <section className="w-full bg-[#08090f] py-17 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Section Title */}
          <div className="text-center md:text-left flex-shrink-0">
            <span className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
              {dict.title}:
            </span>
          </div>

          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 md:flex-1 md:justify-end opacity-60">
            {/* TIMES BUSINESS AWARDS */}
            <div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
              <div className="w-9 h-9 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5 text-amber-500 text-[8px] font-bold text-center leading-none px-1">
                TIMES AWARDS
              </div>
              <span className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors">
                TIMES BUSINESS
              </span>
            </div>

            {/* INDIA'S GROWTH CHAMPIONS */}
            <div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
              <span className="text-xs font-black tracking-tighter text-slate-400 group-hover:text-white transition-colors">
                GROWTH CHAMPIONS <span className="text-red-500">2026</span>
              </span>
            </div>

            {/* Entrepreneur */}
            <div className="flex items-center gap-1 group hover:opacity-100 transition-opacity">
              <span className="text-sm font-serif font-extrabold tracking-tight text-red-600 group-hover:text-red-500 transition-colors">
                Entrepreneur
              </span>
            </div>

            {/* Deloitte 50 */}
            <div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors">
                Deloitte.
              </span>
              <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-bold">
                FAST 50
              </span>
            </div>

            {/* Clutch 100 */}
            <div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
              <div className="bg-teal-500 text-[#0c0d14] text-[9px] font-extrabold px-2 py-1 rounded">
                Clutch 100
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
