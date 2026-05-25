"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface CultureFAQProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    faqs: FAQ[];
  };
}

export default function CultureFAQ({ dict }: CultureFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#12141d] py-20 border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Culture Text */}
          <div className="lg:col-span-5 space-y-8 text-slate-200">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight tracking-tight text-white mb-6">
              {dict.title}
            </h2>
            <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-slate-300">
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {dict.faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                
                return (
                  <div 
                    key={idx}
                    className="border border-[#1e2336] bg-[#161821] rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#1a1c27] transition-colors focus:outline-none group"
                    >
                      <span className="font-semibold text-white text-[15px] sm:text-base group-hover:text-teal-400 transition-colors">
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-[#2d3248] text-slate-400 transition-all duration-300 ${isOpen ? 'rotate-45 border-teal-500/50 text-teal-400' : 'group-hover:border-slate-500 group-hover:text-slate-300'}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 text-slate-400 text-sm sm:text-[15px] leading-relaxed border-t border-white/5 mx-6 mt-2">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
