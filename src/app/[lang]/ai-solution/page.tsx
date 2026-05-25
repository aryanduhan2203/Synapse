import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBusinessOutcomes from "@/components/AIBusinessOutcomes";
import AIWhatWeDeliver from "@/components/AIWhatWeDeliver";
import AIUseCases from "@/components/AIUseCases";
import AIHowWeDeliver from "@/components/AIHowWeDeliver";
import AIAccelerators from "@/components/AIAccelerators";
import AIFAQ from "@/components/AIFAQ";
import AIContactCTA from "@/components/AIContactCTA";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function AISolutionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const ai = dict.aiHero;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      
      <main className="flex-grow bg-[#12141d] text-slate-100 overflow-hidden font-sans pt-16 pb-20 relative min-h-[90vh] flex items-center">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-4">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 space-y-8 lg:pr-10 z-10">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {ai.title}
                <br />
                <span className="text-[#38c89b]">{ai.titleHighlight}</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {ai.desc}
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-3 bg-transparent border border-slate-500 hover:border-white text-white rounded-full px-6 py-3.5 text-sm font-semibold transition-all group"
                >
                  {ai.ctaBtn}
                  <div className="w-5 h-5 rounded-full border border-slate-500 group-hover:border-white flex items-center justify-center transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Features row */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <svg className="text-[#38c89b]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  {ai.feature1}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="text-[#38c89b]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {ai.feature2}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="text-[#38c89b]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  {ai.feature3}
                </div>
              </div>

            </div>

            {/* Right Column: AI Image */}
            <div className="lg:col-span-6 relative mt-12 lg:mt-0 min-h-[400px] lg:min-h-0 pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[160%] aspect-square mix-blend-screen opacity-90"
                style={{
                  maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)"
                }}
              >
                <Image 
                  src="/images/ai-solution/hero.png"
                  alt="AI Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Business Outcomes Section */}
      <AIBusinessOutcomes dict={dict.aiOutcomes} />

      {/* What We Deliver Section */}
      <AIWhatWeDeliver dict={dict.aiDeliver} />

      {/* AI Use Cases By Industry */}
      <AIUseCases dict={dict.aiUseCases} />

      {/* How We Deliver Timeline */}
      <AIHowWeDeliver dict={dict.aiHowWeDeliver} />

      {/* AI Accelerators */}
      <AIAccelerators dict={dict.aiAccelerators} />

      {/* FAQ */}
      <AIFAQ dict={dict.aiFaq} />

      {/* Contact CTA */}
      <AIContactCTA dict={dict.aiContactCTA} />

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
