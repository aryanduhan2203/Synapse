"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  category: string;
  title: string;
  desc?: string;
  date?: string;
  readTime?: string;
  gradient?: string;
}

interface BlogFeedProps {
  dict: {
    title: string;
    cta: string;
    featured: {
      title: string;
      desc: string;
      readMore: string;
    };
    posts: Array<{
      category: string;
      title: string;
    }>;
  };
  lang: string;
}

export default function BlogFeed({ dict, lang }: BlogFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // In Dutch "ZAKELIJK", "LOGISTIEK", in English "BUSINESS", "LOGISTICS", etc.
  // We can normalize the category match to make it work cross-languages.
  const categories = lang === "nl" 
    ? ["ALLE", "BLOCKCHAIN", "LOGISTIEK", "ZAKELIJK", "AI & TECH"] 
    : ["ALL", "BLOCKCHAIN", "LOGISTICS", "BUSINESS", "AI & TECH"];

  const getNormalizedCategory = (cat: string) => {
    const upper = cat.toUpperCase();
    if (upper === "ALL" || upper === "ALLE") return "ALL";
    if (upper === "BLOCKCHAIN") return "BLOCKCHAIN";
    if (upper === "LOGISTICS" || upper === "LOGISTIEK") return "LOGISTICS";
    if (upper === "BUSINESS" || upper === "ZAKELIJK") return "BUSINESS";
    return "AI & TECH";
  };

  // We can supply richer details (description, date, read time) for the grid posts to make them look premium.
  const enrichedPosts: BlogPost[] = [
    {
      category: dict.posts[0]?.category || "BLOCKCHAIN",
      title: dict.posts[0]?.title || "Technology ensuring secure data and payments",
      desc: lang === "nl"
        ? "Ontdek hoe moderne cryptografie en gedecentraliseerde systemen zorgen voor onkraakbare transacties en veilige data-opslag."
        : "Discover how modern cryptography and decentralized ledgers ensure tamper-proof transactions and highly secure database systems.",
      date: "May 24, 2026",
      readTime: "6 min read",
      gradient: "from-blue-600/20 via-indigo-500/10 to-transparent"
    },
    {
      category: dict.posts[1]?.category || "LOGISTICS",
      title: dict.posts[1]?.title || "Important things you need to know about Food delivery app Development",
      desc: lang === "nl"
        ? "Van real-time koeriers-tracking tot dynamische route-optimalisatie, dit zijn de kritieke factoren voor succesvolle bezorgapps."
        : "From real-time courier tracking to dynamic route optimization, these are the critical engineering factors for successful delivery apps.",
      date: "May 18, 2026",
      readTime: "8 min read",
      gradient: "from-orange-600/20 via-red-500/10 to-transparent"
    },
    {
      category: dict.posts[2]?.category || "BUSINESS",
      title: dict.posts[2]?.title || "How much does it cost to build a mobile app in USA",
      desc: lang === "nl"
        ? "Een transparant overzicht van budgetten, uurtarieven van ontwikkelaars, ontwerpkosten en doorlopend onderhoud."
        : "A complete transparent breakdown of development phases, design resources, API hosting budgets, and post-launch maintenance.",
      date: "May 12, 2026",
      readTime: "10 min read",
      gradient: "from-teal-600/20 via-emerald-500/10 to-transparent"
    },
    // Adding 3 more premium posts to fill a stunning 6-post grid layout
    {
      category: "AI & TECH",
      title: lang === "nl"
        ? "Waarom Next.js 16 Server Components de web-architectuur veranderen"
        : "Why Next.js 16 Server Components are Revolutionizing Web Architecture",
      desc: lang === "nl"
        ? "Een diepe duik in het minimaliseren van client-side JavaScript, snellere laadtijden en verbeterde SEO-indexering."
        : "A deep dive into reducing client-side bundle size, improving initial page loads, and optimizing layout shift for better Core Web Vitals.",
      date: "May 08, 2026",
      readTime: "5 min read",
      gradient: "from-violet-600/20 via-purple-500/10 to-transparent"
    },
    {
      category: "AI & TECH",
      title: lang === "nl"
        ? "De opkomst van Agentic AI: Autonome coding assistenten"
        : "The Rise of Agentic AI: Autonomous Coding Assistants",
      desc: lang === "nl"
        ? "Hoe AI-agenten zich ontwikkelen van simpele autocomplete tools tot volledig autonome software engineering partners."
        : "How AI agents are evolving from simple autocomplete shortcuts into collaborative, context-aware software engineering partners.",
      date: "May 02, 2026",
      readTime: "7 min read",
      gradient: "from-cyan-600/20 via-teal-500/10 to-transparent"
    },
    {
      category: "BUSINESS",
      title: lang === "nl"
        ? "Het valideren van uw MVP in 2026: Een praktische gids voor founders"
        : "Validating Your MVP in 2026: A Practical Guide for Founders",
      desc: lang === "nl"
        ? "Vermijd kostbare fouten. Leer hoe u feedback verzamelt, hypotheses test en uw product lanceert in minder dan 8 weken."
        : "Avoid expensive building mistakes. Learn how to gather real feedback, test core hypotheses, and launch your product in under 8 weeks.",
      date: "Apr 25, 2026",
      readTime: "9 min read",
      gradient: "from-pink-600/20 via-rose-500/10 to-transparent"
    }
  ];

  // Filter posts based on search query and category
  const filteredPosts = enrichedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const normalizedSelected = getNormalizedCategory(selectedCategory);
    const normalizedPostCat = getNormalizedCategory(post.category);
    const matchesCategory = normalizedSelected === "ALL" || normalizedPostCat === normalizedSelected;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Search and Filters panel */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#161824] border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory.toUpperCase() === cat.toUpperCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                  isSelected
                    ? "bg-[#38c89b] text-[#0c0d14] shadow-[0_4px_20px_rgba(56,200,155,0.3)]"
                    : "bg-[#202334] text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder={lang === "nl" ? "Zoek artikelen..." : "Search articles..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#202334] border border-slate-700 focus:border-[#38c89b] rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
          <svg
            className="absolute left-3.5 top-3 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Featured Post (only show if no filter search is active, or if it matches) */}
      {selectedCategory.toUpperCase() === (lang === "nl" ? "ALLE" : "ALL") && searchQuery === "" && (
        <div className="group relative bg-[#161824] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-teal-500/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative min-h-[300px] bg-gradient-to-br from-teal-900/30 via-slate-900 to-transparent flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,200,155,0.1)_0%,transparent_70%)] pointer-events-none"></div>
              <div className="relative w-full max-w-sm aspect-video rounded-2xl border border-white/10 overflow-hidden bg-[#0c0d14]/80 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-[#38c89b]">
                    <span className="font-extrabold text-sm">AI</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold tracking-wider">SYSTEM ACTIVE</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-2/3 bg-[#38c89b]/80 rounded-full"></div>
                  <div className="h-1.5 w-1/2 bg-[#38c89b]/40 rounded-full"></div>
                  <div className="h-1.5 w-5/6 bg-[#38c89b]/20 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Instasolution Labs</span>
                  <span>v2026.1</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#38c89b]/10 border border-[#38c89b]/20 text-[#38c89b] text-[10px] font-bold tracking-wider uppercase">
                  AI &amp; TECH
                </span>
                <span className="text-slate-400 text-xs font-semibold">May 25, 2026</span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-slate-400 text-xs font-semibold">8 min read</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#38c89b] transition-colors leading-tight">
                {dict.featured.title}
              </h2>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {dict.featured.desc}
              </p>
              
              <div>
                <button className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn">
                  <span>{dict.featured.readMore}</span>
                  <svg className="w-4 h-4 text-[#38c89b] group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <article 
              key={idx}
              className="group bg-[#161824] border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-teal-500/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:scale-[1.01]"
            >
              <div>
                {/* Visual Header */}
                <div className={`h-48 relative bg-gradient-to-br ${post.gradient || "from-slate-800 to-slate-900"} flex items-center justify-center p-6 border-b border-white/5`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_75%)]"></div>
                  <span className="text-slate-600 font-extrabold text-sm uppercase tracking-widest bg-black/20 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span>{post.date || "May 15, 2026"}</span>
                    <span>{post.readTime || "5 min read"}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-[#38c89b] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.desc || "Learn more about this development topic and check out the best industry tips and insights from our team."}
                  </p>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-white group/btn">
                  <span>{dict.featured.readMore}</span>
                  <svg className="w-3.5 h-3.5 text-[#38c89b] group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#161824]/50 rounded-3xl border border-white/5">
          <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-slate-400 font-medium">
            {lang === "nl" ? "Geen artikelen gevonden die aan uw criteria voldoen." : "No articles found matching your criteria."}
          </p>
        </div>
      )}
    </div>
  );
}
