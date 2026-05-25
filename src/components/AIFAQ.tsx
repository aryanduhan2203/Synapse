"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface AIFAQProps {
  dict: {
    title: string;
    subtitle: string;
    faqs: FAQItem[];
  };
}

export default function AIFAQ({ dict }: AIFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-[#0d0f1a] py-24 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-slate-400 text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {dict.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer
                  ${isOpen
                    ? "bg-[#151929] border-white/15 shadow-[0_0_30px_rgba(56,200,155,0.05)]"
                    : "bg-[#151929] border-white/8 hover:border-white/15"
                  }`}
                onClick={() => toggle(idx)}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between px-6 py-5 gap-4">
                  <span className="text-white font-semibold text-base leading-snug">
                    {faq.q}
                  </span>

                  {/* Toggle Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                      ${isOpen
                        ? "bg-[#38c89b] border-[#38c89b]"
                        : "bg-transparent border-white/25"
                      }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-white/60"}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
