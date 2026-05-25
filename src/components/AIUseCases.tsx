"use client";

import { useState } from "react";

interface AIUseCase {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

interface AIIndustry {
  id: string;
  name: string;
  cases: AIUseCase[];
}

interface AIUseCasesProps {
  dict: {
    title: string;
    industries: AIIndustry[];
  };
}

export default function AIUseCases({ dict }: AIUseCasesProps) {
  const [activeTab, setActiveTab] = useState(dict.industries[0].id);

  const activeIndustry = dict.industries.find((i) => i.id === activeTab) || dict.industries[0];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "chat":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case "document":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case "chart":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        );
      case "sparkles":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          </svg>
        );
      case "search":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        );
      case "shield":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-emerald-500 to-emerald-600 py-24 font-sans relative overflow-hidden">
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 tracking-tight">
          {dict.title}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-16">
          {dict.industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeTab === industry.id
                  ? "bg-white text-emerald-800 scale-105"
                  : "bg-transparent text-white border border-white/30 hover:bg-white/10"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {activeIndustry.cases.map((useCase, idx) => (
            <div 
              key={`${activeIndustry.id}-${idx}`}
              className="bg-[#1a1d29] rounded-2xl p-6 sm:p-8 flex gap-6 shadow-xl border border-white/5 transition-all duration-300 hover:scale-[1.02]"
            >
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-emerald-400 rounded-xl flex items-center justify-center text-white shadow-md">
                  {getIcon(useCase.icon)}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {useCase.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {useCase.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
