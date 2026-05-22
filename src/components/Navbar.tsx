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
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

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
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-cyan-300 transition-colors">
                <span className="text-white">S</span>ynapse
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link
              href={`/${lang}`}
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}#ai-solution`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {dict.aiSolution}
            </Link>
            <Link
              href={`/${lang}#company`}
              className="text-slate-300 hover:text-white transition-colors"
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
            <Link
              href={`/${lang}#case-studies`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {dict.caseStudies}
            </Link>
            <Link
              href={`/${lang}#blogs`}
              className="text-slate-300 hover:text-white transition-colors"
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
              href={`/${lang}#contact`}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-slate-900 rounded-full group bg-gradient-to-br from-teal-400 to-cyan-500 hover:text-slate-950 dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-800 transition-all duration-300 hover:scale-105"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-[#0c0d14] dark:bg-[#0c0d14] rounded-full group-hover:bg-opacity-0 text-white group-hover:text-[#0c0d14] flex items-center gap-2">
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
              className="block px-3 py-2 rounded-md text-base font-semibold text-teal-400 bg-slate-900/50"
              onClick={() => setIsOpen(false)}
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}#ai-solution`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {dict.aiSolution}
            </Link>
            <Link
              href={`/${lang}#company`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
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
            <Link
              href={`/${lang}#case-studies`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {dict.caseStudies}
            </Link>
            <Link
              href={`/${lang}#blogs`}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {dict.blogs}
            </Link>
            <div className="pt-4 px-3">
              <Link
                href={`/${lang}#contact`}
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
