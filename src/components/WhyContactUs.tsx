"use client";

import Image from "next/image";

interface WhyContactUsProps {
  dict?: any; // For future localization
}

export default function WhyContactUs({ dict }: WhyContactUsProps) {
  return (
    <section className="w-full bg-[#38c89b] relative overflow-hidden py-16 lg:py-24 border-b border-black/10">
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Grid */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 tracking-tight">
              {dict?.title || "Why Contact Us"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Fast Response */}
              <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#21855a] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-[#0c0d14] font-bold text-lg mb-2">{dict?.card1Title || "Fast Response"}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dict?.card1Desc || "We'll get back to you within 24 hours."}
                </p>
              </div>

              {/* Card 2: Expert Guidance */}
              <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#21855a] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-[#0c0d14] font-bold text-lg mb-2">{dict?.card2Title || "Expert Guidance"}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dict?.card2Desc || "Benefit from our years of industry experience."}
                </p>
              </div>

              {/* Card 3: Global Experience */}
              <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#21855a] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-[#0c0d14] font-bold text-lg mb-2">{dict?.card3Title || "Global Experience"}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dict?.card3Desc || "We've successfully delivered projects worldwide."}
                </p>
              </div>

              {/* Card 4: Proven Results */}
              <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#21855a] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-[#0c0d14] font-bold text-lg mb-2">{dict?.card4Title || "Proven Results"}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dict?.card4Desc || "Our portfolio speaks for itself with high success rates."}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <Image 
                src="/images/get-a-quote/team_collaboration.png" 
                alt="Team collaborating" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
