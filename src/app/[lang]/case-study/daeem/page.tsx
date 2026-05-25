import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologiesSection from "@/components/TechnologiesSection";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function DaeemCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const cs = dict.caseStudyDaeem;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      
      <main className="flex-grow bg-[#0c0d14] text-slate-100 overflow-hidden font-sans">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Top subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {cs.title}
            </h1>

            {/* Glowing Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-12 tracking-wide select-none max-w-3xl mx-auto">
              {cs.subtitle.split(/(Daeem Delivery App)/).map((part: string, idx: number) => 
                part === "Daeem Delivery App" ? (
                  <span key={idx} className="text-[#02a971] font-bold">{part}</span>
                ) : (
                  part
                )
              )}
            </p>

            {/* Hero Banner Image */}
            <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/daeem/hero_screen.png"
                alt="Daeem App Screens Preview"
                width={1200}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

          </div>
        </section>

        {/* CLIENT OVERVIEW */}
        <section className="w-full bg-[#08090f] py-20 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {cs.overview.title}
                </h2>
                <div className="space-y-4 text-slate-350 text-base sm:text-lg leading-relaxed">
                  <p>{cs.overview.desc1}</p>
                  <p>{cs.overview.desc2}</p>
                </div>
                
                {/* Meta details list */}
                <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6 font-semibold">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{cs.overview.industryLabel}</div>
                    <div className="text-sm text-slate-200">{cs.overview.industryValue}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{cs.overview.locationLabel}</div>
                    <div className="text-sm text-slate-200">{cs.overview.locationValue}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{cs.overview.servicesLabel}</div>
                    <div className="text-sm text-slate-200">{cs.overview.servicesValue}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Courier Image with Ribbon Badge */}
              <div className="lg:col-span-6 flex justify-center items-center relative">
                {/* Glow backdrop */}
                <div className="absolute w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/daeem/courier_standalone.png"
                    alt="Daeem Logistics Courier Standalone"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Premium floating ribbon badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black tracking-wider uppercase px-4 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-1.5">
                    <span>★</span>
                    <span>5 Star Rated</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES PROVIDED + THE CHALLENGE — Combined Section */}
        <section className="w-full relative">

          {/* ── TOP: Our Services Provided ── */}
          <div className="bg-[#0c0d14] py-16 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10">
                Our Services Provided
              </h2>

              {/* 4-column service grid inside a dark bordered card */}
              <div className="border border-slate-700/60 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-700/60">

                {/* 1 — Conceptualization */}
                <div className="p-8 space-y-2">
                  <span className="text-4xl font-black text-emerald-400">1</span>
                  <h3 className="text-base font-extrabold text-white">Conceptualization</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Market understanding<br />Localization</p>
                </div>

                {/* 2 — UI/UX Design */}
                <div className="p-8 space-y-2">
                  <span className="text-4xl font-black text-emerald-400">2</span>
                  <h3 className="text-base font-extrabold text-white">Conceptualization</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">User flow<br />Designing</p>
                </div>

                {/* 3 — Core Engineering */}
                <div className="p-8 space-y-2">
                  <span className="text-4xl font-black text-emerald-400">3</span>
                  <h3 className="text-base font-extrabold text-white">Conceptualization</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Android App<br />iOS App</p>
                </div>

                {/* 4 — Publishing */}
                <div className="p-8 space-y-2">
                  <span className="text-4xl font-black text-emerald-400">4</span>
                  <h3 className="text-base font-extrabold text-white">Conceptualization</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Play Store publishing<br />App Store publishing</p>
                </div>

              </div>
            </div>
          </div>

          {/* ── BOTTOM: The Challenge ── */}
          <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                {/* Left: challenge text */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0c0d14] tracking-tight leading-tight">
                    {cs.challenge.title}
                  </h3>
                  <p className="text-[#0c0d14] font-bold text-sm sm:text-base">
                    {cs.challenge.subtitle}
                  </p>
                  <ul className="space-y-3 list-disc list-outside pl-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                    {cs.challenge.points.map((pt: string, idx: number) => (
                      <li key={idx} className="pl-1">{pt}</li>
                    ))}
                  </ul>
                </div>

                {/* Right: developer photo */}
                <div className="lg:col-span-6 flex justify-center items-center relative">
                  <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                    <Image
                      src="/images/daeem/developer_standalone.png"
                      alt="Developer code overlay mockup"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {/* Code overlay */}
                    <div className="absolute bottom-4 left-4 bg-slate-950/85 border border-white/10 rounded-xl p-3 font-mono text-[9px] sm:text-[10px] text-teal-400 shadow-xl max-w-[240px] leading-relaxed hidden sm:block">
                      <span className="text-slate-500">// Optimized route dispatcher</span><br />
                      <span className="text-purple-400">const</span> <span className="text-blue-400">route</span> = <span className="text-purple-400">await</span> dispatcher.resolve(order);<br />
                      <span className="text-purple-400">return</span> route.eta;
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* OUR SOLUTION SECTION */}
        <section className="w-full bg-white py-10 relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Cheering Team Photo */}
              <div className="lg:col-span-6 flex justify-center items-center relative">
                <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                  <Image
                    src="/images/daeem/office_cheering.png"
                    alt="Office cheering celebrating success"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Column: Solution text */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0c0d14] tracking-tight leading-tight">
                  {cs.solution.title}
                </h3>
                <p className="text-slate-800 font-bold text-lg sm:text-xl">
                  {cs.solution.subtitle}
                </p>
                <ul className="space-y-4 list-disc list-outside pl-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                  {cs.solution.points.map((pt: string, idx: number) => (
                    <li key={idx} className="pl-1">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNOLOGIES WE USE SECTION */}
        <TechnologiesSection dict={cs.technologies} />

        {/* TESTIMONIAL SECTION */}
        <section className="w-full bg-[#161a23] py-16 relative overflow-hidden border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
            {/* Logo placeholder */}
            <div className="mb-6 select-none">
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <div className="relative w-full max-w-4xl px-8 sm:px-12">
              <span className="absolute top-0 -left-2 sm:-left-2 text-4xl text-[#2ebf9b] font-serif leading-none select-none">“</span>
              <p className="text-white/95 text-base sm:text-[1rem] leading-[2] font-normal tracking-wide">
                {cs.testimonial.quote}
              </p>
              <span className="absolute -bottom-4 -right-2 sm:-right-2 text-4xl text-[#2ebf9b] font-serif leading-none select-none">”</span>
            </div>

            {/* Author */}
            <div className="mt-8">
              <p className="text-white font-bold text-sm tracking-wide">{cs.testimonial.author}</p>
            </div>
          </div>
        </section>


      </main>

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
