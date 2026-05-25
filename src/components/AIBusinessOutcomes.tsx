interface AIBusinessOutcomesProps {
  dict: {
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
}

export default function AIBusinessOutcomes({ dict }: AIBusinessOutcomesProps) {
  return (
    <section className="w-full bg-[#f0f8ff] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-16 tracking-tight">
          {dict.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-emerald-400 to-emerald-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2563eb] mb-6 shadow-sm">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{dict.card1Title}</h3>
            <p className="text-emerald-50 text-sm font-medium">
              {dict.card1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-emerald-400 to-emerald-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2563eb] mb-6 shadow-sm">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{dict.card2Title}</h3>
            <p className="text-emerald-50 text-sm font-medium">
              {dict.card2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-emerald-400 to-emerald-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2563eb] mb-6 shadow-sm relative">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
              {/* Checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-[#2563eb] text-white rounded-full p-0.5 border-2 border-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{dict.card3Title}</h3>
            <p className="text-emerald-50 text-sm font-medium">
              {dict.card3Desc}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-emerald-400 to-emerald-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2563eb] mb-6 shadow-sm relative">
              {/* Using a custom shield icon to closely match the screenshot */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{dict.card4Title}</h3>
            <p className="text-emerald-50 text-sm font-medium">
              {dict.card4Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
