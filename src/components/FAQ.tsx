"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  dict: {
    titleMain: string;
    titleSub: string;
    subtitle: string;
    questions: FAQItem[];
  };
}

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-28 relative border-y border-slate-100 z-10">
      {/* Subtle grid pattern overlay for light mode look */}
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading Info (Dark charcoal on white background) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {dict.titleMain}{" "}
              <span className="text-teal-500 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {dict.titleSub}
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              {dict.subtitle}
            </p>
          </div>

          {/* Right Column: Clean Accordion Rows with thin separator lines */}
          <div className="lg:col-span-7 flex flex-col border-t border-slate-200/80">
            {dict.questions.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b border-slate-200/80 transition-all duration-300"
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left py-6 gap-4 font-bold text-slate-900 transition-colors group"
                  >
                    <span
                      className={`text-base sm:text-lg transition-colors ${
                        isOpen ? "text-teal-600" : "text-slate-900 group-hover:text-teal-600"
                      }`}
                    >
                      {faq.q}
                    </span>
                    
                    {/* Circle arrow icon */}
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen
                          ? "border-teal-500 bg-teal-50 text-teal-600"
                          : "border-slate-350 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-800"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Panel Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="pb-6 pr-12 text-sm text-slate-650 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
