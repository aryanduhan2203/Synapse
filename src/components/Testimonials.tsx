"use client";

import Image from "next/image";
import Link from "next/link";

interface ReviewItem {
  author: string;
  location: string;
  text: string;
}

interface TestimonialsProps {
  dict: {
    title: string;
    subtitle: string;
    cta: string;
    sidebarTitle: string;
    sidebarStat: string;
    sidebarLabel: string;
    reviews: ReviewItem[];
  };
}

export default function Testimonials({ dict }: TestimonialsProps) {
  // Array of profile picture urls from unsplash (authorized in next.config.ts)
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120", // Emma Rodriguez
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120", // James Whitaker
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120", // Sophie Dubois
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120", // Lars Janssen
  ];

  return (
    <section id="testimonials" className="w-full bg-gradient-to-b from-[#0a1e1a] to-[#05100e] py-20 md:py-28 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {dict.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            {dict.subtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Transparent/Borderless Reviews Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {dict.reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between transition-all duration-300"
              >
                {/* Text and Stars */}
                <div className="space-y-4">
                  {/* Avatar and Stars */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={avatars[idx % avatars.length]}
                        alt={review.author}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 text-amber-400 text-sm">
                      {"★".repeat(5)}
                    </div>
                  </div>

                  {/* Review Text (Non-italicized, regular font for clean aesthetic) */}
                  <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info (Single line with Comma separation) */}
                <div className="mt-4 flex items-center font-sans font-bold text-sm text-white">
                  {review.author}, {review.location}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Big Highlight Stat Card (Emerald gradient & yellow accents) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#12d8a5] via-[#10b981] to-[#059669] p-8 sm:p-10 flex flex-col justify-between text-[#052e24] shadow-xl shadow-teal-500/10 min-h-[360px] relative overflow-hidden group">
            {/* Soft grid background */}
            <div className="absolute inset-0 grid-bg-teal opacity-[0.12] pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-black tracking-tight leading-snug text-[#052e24]">
                {dict.sidebarTitle}
              </h3>
            </div>

            <div className="relative z-10 my-8">
              <div className="text-6xl sm:text-7.5xl font-black tracking-tighter leading-none text-white">
                {dict.sidebarStat}
              </div>
              <div className="text-sm font-extrabold tracking-wider uppercase text-yellow-300 mt-2">
                {dict.sidebarLabel}
              </div>
            </div>

            <div className="relative z-10 flex">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-[#052e24] text-[#052e24] hover:text-white text-xs font-black shadow-md hover:scale-105 active:scale-95 transition-all group/btn"
              >
                {dict.cta}
                <div className="w-5 h-5 rounded-full bg-[#052e24]/10 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
                  <svg
                    className="w-3 h-3 text-[#052e24] group-hover/btn:text-white transition-colors transform group-hover/btn:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
