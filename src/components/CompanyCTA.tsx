"use client";

interface CompanyCTAProps {
  dict: {
    joinTitle: string;
    joinDesc: string;
    joinBtn: string;
    newsTitle: string;
    newsDesc: string;
    placeholder: string;
    newsBtn: string;
    newsDisclaimer: string;
  };
}

export default function CompanyCTA({ dict }: CompanyCTAProps) {
  return (
    <section className="w-full font-sans relative overflow-hidden bg-[#12141d]">
      
      {/* Subtle radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 space-y-16">
        
        {/* Top Join Card */}
        <div className="bg-emerald-400 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {dict.joinTitle}
            </h2>
            <p className="text-white/90 text-[15px] sm:text-lg leading-relaxed">
              {dict.joinDesc}
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-white hover:bg-slate-50 text-slate-900 rounded-full px-6 py-3.5 text-sm sm:text-base font-bold flex items-center justify-center gap-3 transition-colors group">
              {dict.joinBtn}
              <div className="w-6 h-6 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Newsletter Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {dict.newsTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            {dict.newsDesc}
          </p>
          
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={dict.placeholder}
              className="w-full sm:w-2/3 bg-[#232635] text-white border border-slate-700 rounded-full px-6 py-3.5 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto flex-shrink-0 bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-full px-6 py-3.5 flex items-center justify-center gap-2 transition-colors"
            >
              {dict.newsBtn}
              <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          </form>
          
          <p className="text-slate-400 text-sm mt-6">
            {dict.newsDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
