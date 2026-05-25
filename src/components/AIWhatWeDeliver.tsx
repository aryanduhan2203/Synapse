import Link from "next/link";

interface AIDeliverCard {
  title: string;
  desc: string;
  bullets: string[];
}

interface AIWhatWeDeliverProps {
  dict: {
    title: string;
    explore: string;
    cards: AIDeliverCard[];
  };
}

export default function AIWhatWeDeliver({ dict }: AIWhatWeDeliverProps) {
  return (
    <section className="w-full bg-[#12141d] py-24 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16 tracking-tight">
          {dict.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {dict.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#1a1d29] rounded-2xl p-8 flex flex-col border border-white/5 shadow-2xl transition-transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white mb-6 flex-shrink-0">
                {idx === 0 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                )}
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-10">
                {card.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3 flex-shrink-0"></div>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors mt-auto group">
                {dict.explore}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
