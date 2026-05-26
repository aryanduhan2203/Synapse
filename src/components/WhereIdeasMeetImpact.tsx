"use client";

import { useState } from "react";

interface TestimonialItem {
  id: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
}

interface WhereIdeasMeetImpactProps {
  dict: {
    daeem: { quote: string; author: string };
    vedguru: { quote: string; author: string };
    galinia: { quote: string; author: string };
    eva: { quote: string; author: string };
    artune: { quote: string; author: string };
    das: { quote: string; author: string };
  };
}

export default function WhereIdeasMeetImpact({ dict }: WhereIdeasMeetImpactProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: "daeem",
      logo: (
        <svg width="180" height="50" viewBox="0 0 200 60" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="100" y="20" fontFamily="sans-serif" fontSize="14" fill="#EF4444" textAnchor="middle" fontWeight="bold">داعم دليفري</text>
          <text x="100" y="45" fontFamily="sans-serif" fontSize="36" fontWeight="bold" textAnchor="middle" letterSpacing="-1">
            <tspan fill="#3B82F6">d</tspan>
            <tspan fill="#F59E0B">a</tspan>
            <tspan fill="#EAB308">e</tspan>
            <tspan fill="#3B82F6">e</tspan>
            <tspan fill="#EF4444">m</tspan>
            <tspan fill="#EF4444" fontSize="16" dy="-4" dx="4" letterSpacing="0">delivery</tspan>
          </text>
        </svg>
      ),
      quote: dict.daeem.quote,
      author: dict.daeem.author
    },
    {
      id: "vedguru",
      logo: (
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
          </svg>
          <span className="text-3xl font-black text-amber-500 tracking-wider">VEDGURU</span>
        </div>
      ),
      quote: dict.vedguru.quote,
      author: dict.vedguru.author
    },
    {
      id: "galinia",
      logo: (
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span className="text-3xl font-black text-emerald-500 tracking-wider">MentalWell</span>
        </div>
      ),
      quote: dict.galinia.quote,
      author: dict.galinia.author
    },
    {
      id: "eva",
      logo: (
        <div className="flex items-center justify-center gap-2.5 mb-2">
          <svg className="w-8 h-8 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <span className="text-3xl font-black text-white tracking-wide">Eva <span className="text-violet-500">Social</span></span>
        </div>
      ),
      quote: dict.eva.quote,
      author: dict.eva.author
    },
    {
      id: "artune",
      logo: (
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <span className="text-3xl font-black text-indigo-400 tracking-tight">ARTUNE</span>
        </div>
      ),
      quote: dict.artune.quote,
      author: dict.artune.author
    },
    {
      id: "das",
      logo: (
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h12l4 6-10 12L2 9z" />
            <path d="M11 3 8 9l4 12 4-12-3-6" />
            <path d="M2 9h20" />
          </svg>
          <span className="text-3xl font-serif text-white tracking-widest font-light">D A S</span>
        </div>
      ),
      quote: dict.das.quote,
      author: dict.das.author
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#161821] py-20 border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 tracking-tight">
          Where Ideas Meet Impact
        </h2>

        <div className="relative min-h-[380px] md:min-h-[280px] flex items-center justify-center">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-700 hover:bg-slate-800 items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all active:scale-90 flex"
            aria-label="Previous Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Testimonial Content (with stable height wrapper to prevent layout shift) */}
          <div className="px-12 sm:px-20 max-w-3xl flex flex-col items-center justify-center min-h-[300px] md:min-h-[200px] flex-grow transition-opacity duration-300">
            {/* Logo container */}
            <div className="h-16 mb-4 flex items-center justify-center">
              {current.logo}
            </div>

            {/* Quote */}
            <div className="relative mt-2">
              <span className="absolute -top-6 -left-6 sm:-left-8 text-6xl text-slate-700 font-serif leading-none select-none italic">“</span>
              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-medium tracking-wide">
                {current.quote}
              </p>
              <span className="absolute -bottom-8 -right-6 sm:-right-8 text-6xl text-slate-700 font-serif leading-none select-none italic">”</span>
            </div>

            {/* Author */}
            <div className="mt-8 text-xs font-extrabold uppercase tracking-wider text-[#2ebf9b]">
              — {current.author}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-700 hover:bg-slate-800 items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all active:scale-90 flex"
            aria-label="Next Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#2ebf9b] w-6" : "bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-transparent border border-slate-600 hover:border-white hover:bg-white/10 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-2 transition-all">
            Start Your Success Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
