import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologiesSection from "@/components/TechnologiesSection";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function EvaCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const cs = dict.caseStudyEva;

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

            {/* Hero Banner HTML Implementation */}
            <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#f0f7ff] via-[#e6fcf5] to-[#f5f0ff] flex flex-col md:flex-row items-center px-4 md:px-0 h-[400px] md:h-[420px]">
              
              {/* Huge background logo faded */}
              <div className="absolute -left-20 -top-20 opacity-[0.03] pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 4 L11 15 L11 45 L30 56 L49 45 L26 32 L40 24 L49 15 Z" fill="#7158e2"/>
                </svg>
              </div>

              {/* Left Content: Logo */}
              <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center items-center md:items-start pl-0 md:pl-12 lg:pl-20">
                <div className="flex items-center gap-5">
                  <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                    <path d="M30 4 L11 15 L11 45 L30 56 L49 45 L26 32 L40 24 L49 15 Z" fill="#7158e2"/>
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-4xl font-black text-slate-900 tracking-wider">EVA</span>
                    <span className="text-4xl font-black text-slate-900 tracking-wider mt-1">SOCIAL</span>
                  </div>
                </div>
              </div>

              {/* Right Content: Mockups */}
              <div className="relative z-10 w-full md:w-7/12 h-full flex flex-col items-center justify-start md:justify-end pr-0 md:pr-10 lg:pr-16 pt-8 md:pt-12">
                
                {/* Floating Card 1 (Smaller, behind/left) */}
                <div className="hidden lg:block absolute right-[65%] top-[10%] w-56 bg-[#f2ffdb] rounded-xl p-3 shadow-2xl transform -rotate-3 z-20 border border-white/60">
                  <div className="flex gap-3">
                    <div className="w-16 h-20 bg-orange-300 rounded-lg overflow-hidden relative flex justify-center items-center shadow-inner">
                      <span className="text-3xl filter drop-shadow-md">🤳</span>
                    </div>
                    <div className="flex-1 py-1">
                      <h4 className="text-[9px] font-extrabold text-slate-800 leading-snug mb-2">Automate & Optimize</h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#7158e2] rounded-full flex items-center justify-center"><span className="text-[6px] text-white">✓</span></div>
                          <div className="flex flex-col gap-1"><div className="h-1 w-12 bg-slate-400/40 rounded"></div></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#2ebf9b] rounded-full flex items-center justify-center"><span className="text-[6px] text-white">✓</span></div>
                          <div className="flex flex-col gap-1"><div className="h-1 w-10 bg-slate-400/40 rounded"></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Robot */}
                  <div className="absolute -bottom-4 -right-4 text-3xl filter drop-shadow-lg rotate-12">🤖</div>
                </div>

                {/* Floating Card 2 (Larger, main mockup) */}
                <div className="relative w-full max-w-[460px] bg-white rounded-t-xl rounded-b-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-30 border border-slate-100 flex flex-col overflow-hidden origin-top md:origin-top-right transform scale-90 md:scale-100">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100/80">
                    <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 4 L11 15 L11 45 L30 56 L49 45 L26 32 L40 24 L49 15 Z" fill="#7158e2"/>
                        </svg>
                        <span className="text-[9px] font-black text-slate-800 tracking-wide">EVA SOCIAL</span>
                    </div>
                    <div className="hidden sm:flex gap-3 text-[8px] font-bold text-slate-500">
                      <span className="text-[#7158e2]">Home</span><span>Features</span><span>Integrations</span><span>Pricing</span>
                    </div>
                    <div className="bg-[#f2ffdb] text-[#3f4736] text-[8px] font-bold px-2.5 py-1.5 rounded cursor-pointer hover:bg-[#e4ffbd] transition-colors">Sign Up Free ✨</div>
                  </div>
                  
                  {/* Body */}
                  <div className="p-5 md:p-6 text-center bg-gradient-to-b from-white to-slate-50/50">
                    <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight mb-2">Elevate Your Social Media Strategy<br/>with <span className="text-[#7158e2]">Eva Social</span></h3>
                    <p className="text-[9px] font-medium text-slate-500 mb-5 px-4 md:px-10 leading-relaxed">Streamline your content creation, scheduling, and analytics with our AI-driven platform. Manage all your social media accounts effortlessly in one place.</p>
                    <button className="bg-[#7158e2] hover:bg-[#5b43cc] transition-colors text-white text-[10px] font-black px-5 py-2 rounded-full mb-6 shadow-lg shadow-purple-500/20">Get Started 🚀</button>
                    
                    {/* Sub-cards row */}
                    <div className="flex justify-center gap-3 mb-6">
                      {/* Subcard 1 */}
                      <div className="w-24 md:w-28 bg-[#f2ffdb] rounded-xl p-2.5 text-left relative overflow-hidden h-28 border border-[#e4ffbd] shadow-sm">
                        <h4 className="text-[9px] md:text-[10px] font-extrabold text-[#3f4736] leading-tight mb-4">Schedule &<br/>Automate<br/>Posts</h4>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#161a23] text-white text-[7px] font-bold py-1.5 rounded-md text-center">Dashboard ↗</div>
                      </div>
                      {/* Subcard 2 (Video mockup) */}
                      <div className="w-28 md:w-32 bg-[#fce7f3] rounded-xl relative overflow-hidden h-28 border border-pink-200 flex justify-center items-center shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-rose-200 opacity-50"></div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex justify-center items-center backdrop-blur-md shadow-xl z-10">
                          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#7158e2] border-b-[4px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      {/* Subcard 3 */}
                      <div className="w-24 md:w-28 bg-[#7158e2] rounded-xl p-2.5 text-left relative overflow-hidden h-28 border border-purple-500 shadow-xl shadow-purple-500/20">
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-white/20 rounded-md mb-2 flex items-center justify-center text-[8px]">🤖</div>
                        <h4 className="text-[8px] md:text-[9px] font-extrabold text-white leading-tight mb-1">AI-Powered<br/>Workflow</h4>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#f2ffdb] text-[#3f4736] font-bold text-[7px] py-1.5 rounded-md text-center">How it Works ↗</div>
                      </div>
                    </div>
                    
                    {/* Stats row */}
                    <div className="flex justify-between items-center border-t border-slate-200/60 pt-4 pb-1 px-4">
                      <div className="text-center"><div className="text-xs md:text-sm font-black text-slate-800 flex items-center justify-center gap-1.5">😎 1.2M+</div><div className="text-[7px] md:text-[8px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">Account Reach</div></div>
                      <div className="text-center"><div className="text-xs md:text-sm font-black text-slate-800 flex items-center justify-center gap-1.5">💖 800K</div><div className="text-[7px] md:text-[8px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">Likes</div></div>
                      <div className="text-center"><div className="text-xs md:text-sm font-black text-slate-800 flex items-center justify-center gap-1.5">💬 97%</div><div className="text-[7px] md:text-[8px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">Comments</div></div>
                    </div>
                  </div>
                </div>
                
              </div>
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
                  {'desc3' in cs.overview && <p>{(cs.overview as any).desc3}</p>}
                  {'desc4' in cs.overview && <p>{(cs.overview as any).desc4}</p>}
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

              {/* Right Column: Image with Ribbon Badge */}
              <div className="lg:col-span-6 flex justify-center items-center relative">
                {/* Glow backdrop */}
                <div className="absolute w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/eva/overview.png"
                    alt="Eva Social App Overview"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Premium floating ribbon badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-black tracking-wider uppercase px-4 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-1.5">
                    <span>★</span>
                    <span>Top Social App</span>
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
            {/* Eva Social Logo */}
            <div className="mb-8 select-none flex justify-center">
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 4 L11 15 L11 45 L30 56 L49 45 L26 32 L40 24 L49 15 Z" fill="#7158e2"/>
                <text x="65" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#ffffff" letterSpacing="1">EVA</text>
                <text x="65" y="52" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#ffffff" letterSpacing="1">SOCIAL</text>
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
