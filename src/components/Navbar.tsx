"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  dict: {
    home: string;
    aiSolution: string;
    company: string;
    services: string;
    industries: string;
    caseStudies: string;
    blogs: string;
    cta: string;
    caseStudiesDropdown?: {
      daeem: { title: string; desc: string };
      vedguru: { title: string; desc: string };
      galinia: { title: string; desc: string };
      eva: { title: string; desc: string };
      artune: { title: string; desc: string };
      das: { title: string; desc: string };
    };
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCaseStudiesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCaseStudiesOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling down and past navbar height, hide it
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // Scrolling up, show it
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLanguageChange = (newLang: string) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"), { scroll: false });
    setLangDropdownOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full glass-panel border-b border-white/5 bg-[#0c0d14]/80 backdrop-blur-md transition-transform duration-500 ease-in-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center gap-2 group">
              <span className="text-3xl font-extrabold tracking-tight text-white transition-colors">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">I</span>nstasolution
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <Link
              href={`/${lang}`}
              className={`${
                pathname === `/${lang}` || pathname === `/${lang}/`
                  ? "text-teal-400 hover:text-teal-300"
                  : "text-slate-300 hover:text-white"
              } transition-colors`}
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}/ai-solution`}
              className={`${
                pathname === `/${lang}/ai-solution` || pathname.startsWith(`/${lang}/ai-solution/`)
                  ? "text-teal-400 hover:text-teal-300"
                  : "text-slate-300 hover:text-white"
              } transition-colors`}
            >
              {dict.aiSolution}
            </Link>
            <Link
              href={`/${lang}/company`}
              className={`${
                pathname === `/${lang}/company` || pathname.startsWith(`/${lang}/company/`)
                  ? "text-teal-400 hover:text-teal-300"
                  : "text-slate-300 hover:text-white"
              } transition-colors`}
            >
              {dict.company}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {dict.services}
            </Link>
            <Link
              href={`/${lang}#industries`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {dict.industries}
            </Link>
            
            {/* Case Studies Link with Megamenu Hover */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={`/${lang}#case-studies`}
                className={`${
                  pathname.includes("/case-study/")
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-slate-300 hover:text-white"
                } transition-colors py-4 flex items-center gap-1.5`}
              >
                <span>{dict.caseStudies}</span>
                <svg
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                    caseStudiesOpen ? "rotate-180 text-teal-400" : ""
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
              </Link>
              
              {/* Desktop Megamenu Card */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white border border-slate-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden z-50 p-6 transition-all duration-300 origin-top ${
                  caseStudiesOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-3 gap-6">
                  {/* Daeem */}
                  <Link
                    href={`/${lang}/case-study/daeem`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.daeem.title || "Daeem"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.daeem.desc}
                      </div>
                    </div>
                  </Link>

                  {/* Vedguru */}
                  <Link
                    href={`/${lang}/case-study/vedguru`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2M12 20v2M4 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.vedguru.title || "Vedguru"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.vedguru.desc}
                      </div>
                    </div>
                  </Link>

                  {/* Galinia AI */}
                  <Link
                    href={`/${lang}/case-study/galinia`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.galinia.title || "Galinia AI"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.galinia.desc}
                      </div>
                    </div>
                  </Link>

                  {/* Eva Social */}
                  <Link
                    href={`/${lang}/case-study/eva`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.eva.title || "Eva Social"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.eva.desc}
                      </div>
                    </div>
                  </Link>

                  {/* Artune */}
                  <Link
                    href={`/${lang}/case-study/artune`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.artune.title || "Artune"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.artune.desc}
                      </div>
                    </div>
                  </Link>

                  {/* DAS */}
                  <Link
                    href={`/${lang}/case-study/das`}
                    onClick={() => setCaseStudiesOpen(false)}
                    className="group/item flex gap-3.5 p-3 rounded-2xl hover:bg-slate-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/10 border border-slate-900/20 flex items-center justify-center text-slate-800 transition-transform group-hover/item:scale-110 duration-300">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 3h12l4 6-10 12L2 9z" />
                          <path d="M11 3 8 9l4 12 4-12-3-6" />
                          <path d="M2 9h20" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow text-left">
                      <div className="text-slate-900 font-extrabold text-sm group-hover/item:text-teal-600 transition-colors">
                        {dict.caseStudiesDropdown?.das.title || "DAS"}
                      </div>
                      <div className="text-slate-500 text-[11px] leading-normal mt-1 line-clamp-2">
                        {dict.caseStudiesDropdown?.das.desc}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href={`/${lang}/blogs`}
              className={`${
                pathname === `/${lang}/blogs` || pathname.startsWith(`/${lang}/blogs/`)
                  ? "text-teal-400 hover:text-teal-300"
                  : "text-slate-300 hover:text-white"
              } transition-colors`}
            >
              {dict.blogs}
            </Link>
          </nav>

          {/* Right Side (CTA + Language Selector) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-sm font-semibold transition-colors text-slate-200"
              >
                <span>{lang === "en" ? "🇬🇧 EN" : "🇳🇱 NL"}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-md bg-[#151824] border border-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${
                        lang === "en"
                          ? "bg-slate-800 text-teal-400"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      🇬🇧 English
                    </button>
                    <button
                      onClick={() => handleLanguageChange("nl")}
                      className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${
                        lang === "nl"
                          ? "bg-slate-800 text-teal-400"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      🇳🇱 Nederlands
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${lang}/contact`}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-slate-900 rounded-full group bg-gradient-to-br from-teal-400 to-cyan-500 hover:text-slate-950 dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-800 transition-all duration-300 hover:scale-105"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-[#0c0d14] dark:bg-[#0c0d14] rounded-full group-hover:bg-opacity-0 text-white group-hover:text-[#575d83] flex items-center gap-2">
                {dict.cta}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Lang switcher on mobile */}
            <button
              onClick={() => handleLanguageChange(lang === "en" ? "nl" : "en")}
              className="p-2 rounded-md border border-slate-700 bg-slate-900/50 text-sm font-semibold"
            >
              {lang === "en" ? "🇳🇱 NL" : "🇬🇧 EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/5 bg-[#0c0d14]/95">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link
              href={`/${lang}`}
              className={`block px-3 py-2 rounded-md text-base font-semibold ${
                pathname === `/${lang}` || pathname === `/${lang}/`
                  ? "text-teal-400 bg-slate-900/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}/ai-solution`}
              className={`block px-3 py-2 rounded-md text-base font-semibold ${
                pathname === `/${lang}/ai-solution` || pathname.startsWith(`/${lang}/ai-solution/`)
                  ? "text-teal-400 bg-slate-900/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {dict.aiSolution}
            </Link>
            <Link
              href={`/${lang}/company`}
              className={`block px-3 py-2 rounded-md text-base font-semibold ${
                pathname === `/${lang}/company` || pathname.startsWith(`/${lang}/company/`)
                  ? "text-teal-400 bg-slate-900/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {dict.company}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {dict.services}
            </Link>
            <Link
              href={`/${lang}#industries`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {dict.industries}
            </Link>
            
            {/* Mobile Case Studies Accordion */}
            <div>
              <button
                onClick={() => setMobileCaseStudiesOpen(!mobileCaseStudiesOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-semibold ${
                  pathname.includes("/case-study/")
                    ? "text-teal-400 bg-slate-900/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <span>{dict.caseStudies}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileCaseStudiesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-1 overflow-hidden transition-all duration-350 ${
                  mobileCaseStudiesOpen ? "max-h-[420px] opacity-100 mt-1 pb-2" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {/* Daeem */}
                <Link
                  href={`/${lang}/case-study/daeem`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-extrabold text-xs">
                    D
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.daeem.title || "Daeem"}
                  </div>
                </Link>
                {/* Vedguru */}
                <Link
                  href={`/${lang}/case-study/vedguru`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 font-extrabold text-xs">
                    V
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.vedguru.title || "Vedguru"}
                  </div>
                </Link>
                {/* Galinia AI */}
                <Link
                  href={`/${lang}/case-study/galinia`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 font-extrabold text-xs">
                    G
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.galinia.title || "Galinia AI"}
                  </div>
                </Link>
                {/* Eva Social */}
                <Link
                  href={`/${lang}/case-study/eva`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 font-extrabold text-xs">
                    E
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.eva.title || "Eva Social"}
                  </div>
                </Link>
                {/* Artune */}
                <Link
                  href={`/${lang}/case-study/artune`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 font-extrabold text-xs">
                    A
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.artune.title || "Artune"}
                  </div>
                </Link>
                {/* DAS */}
                <Link
                  href={`/${lang}/case-study/das`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900/10 border border-slate-900/20 flex items-center justify-center text-slate-800 font-extrabold text-xs">
                    DAS
                  </div>
                  <div className="text-sm font-bold text-slate-200">
                    {dict.caseStudiesDropdown?.das.title || "DAS"}
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href={`/${lang}/blogs`}
              className={`block px-3 py-2 rounded-md text-base font-semibold ${
                pathname === `/${lang}/blogs` || pathname.startsWith(`/${lang}/blogs/`)
                  ? "text-teal-400 bg-slate-900/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {dict.blogs}
            </Link>
            <div className="pt-4 px-3">
              <Link
                href={`/${lang}/contact`}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-full text-base font-bold text-[#0c0d14] bg-gradient-to-r from-teal-400 to-cyan-500 hover:scale-[1.02] active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                {dict.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
