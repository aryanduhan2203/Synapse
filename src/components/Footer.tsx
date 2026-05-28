"use client";

import Link from "next/link";

interface FooterProps {
  dict: {
    rights: string;
    concept: string;
    terms: string;
    privacy: string;
    servicesTitle: string;
    solutionsTitle: string;
    companyTitle: string;
    contactsTitle: string;
    services: string[];
    solutions: string[];
    company: string[];
    email: string;
    offices: string;
    phone: string;
  };
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="w-full bg-[#08090f] pt-20 pb-10 border-t border-white/5 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Link Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Col 1: Branding & Social */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-1.5 select-none">
              <span className="text-2xl font-extrabold text-white">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">I</span>nstasolution
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-slate-400 font-medium">
              {dict.concept}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-teal-400">
              {/* Facebook */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold tracking-wide uppercase text-xs">
              {dict.servicesTitle}
            </h4>
            <ul className="space-y-3 font-semibold">
              {dict.services.map((item, idx) => (
                <li key={idx}>
                  <Link href={`/${lang}#services`} className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold tracking-wide uppercase text-xs">
              {dict.solutionsTitle}
            </h4>
            <ul className="space-y-3 font-semibold">
              {dict.solutions.map((item, idx) => (
                <li key={idx}>
                  <Link href={`/${lang}#services`} className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold tracking-wide uppercase text-xs">
              {dict.companyTitle}
            </h4>
            <ul className="space-y-3 font-semibold">
              {dict.company.map((item, idx) => {
                let href = `/${lang}#case-studies`;
                if (idx === 0) {
                  href = `/${lang}/company`;
                } else if (idx === 4) {
                  href = `/${lang}/contact`;
                }
                return (
                  <li key={idx}>
                    <Link href={href} className="hover:text-teal-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold tracking-wide uppercase text-xs">
              {dict.contactsTitle}
            </h4>
            <ul className="space-y-4 font-semibold text-xs">
              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-teal-450 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href={`mailto:${dict.email}`} className="hover:text-teal-400 transition-colors font-bold break-all">
                  {dict.email}
                </a>
              </li>
              {/* Offices */}
              <li className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-teal-450 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="font-bold text-slate-350">{dict.offices}</span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-teal-450 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href={`tel:${dict.phone}`} className="hover:text-teal-400 transition-colors font-extrabold text-white text-sm">
                  {dict.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-500 font-semibold">
          {/* Copyrights */}
          <div className="text-center md:text-left">
            <span>{dict.rights}</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-4">
            <span>All Rights Reserved</span>
            <span className="text-slate-700">|</span>
            <Link href={`/${lang}/terms`} className="hover:text-teal-400 transition-colors">
              {dict.terms}
            </Link>
            <span className="text-slate-700">|</span>
            <Link href={`/${lang}/privacy`} className="hover:text-teal-400 transition-colors">
              {dict.privacy}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
