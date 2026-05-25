import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CultureFAQ from "@/components/CultureFAQ";
import TeamReviews from "@/components/TeamReviews";
import CompanyCTA from "@/components/CompanyCTA";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const c = dict.company;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      
      <main className="flex-grow bg-[#12141d] text-slate-100 overflow-hidden font-sans pt-16 pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-4">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {c.title.split(" - ")[0]} - <br />
                {c.title.split(" - ")[1]}
              </h1>

              <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-medium pr-0 lg:pr-10">
                <p>
                  {c.desc1_part1}
                  <span className="text-yellow-400 font-semibold">{c.desc1_highlight1}</span>
                  {c.desc1_part2}
                  <span className="text-yellow-400 font-semibold">{c.desc1_highlight2}</span>
                  {c.desc1_part3}
                </p>
                <p>
                  {c.desc2_part1}
                  <span className="text-yellow-400 font-semibold">{c.desc2_highlight1}</span>
                  {c.desc2_part2}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-3 bg-transparent border border-slate-600 hover:border-white text-white rounded-full px-6 py-3 text-sm font-semibold transition-all group"
                >
                  {c.ctaBtn}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

            </div>

            {/* Right Column: Image Stack */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              
              {/* Image Stack */}
              <div className="relative w-full max-w-[500px] aspect-[4/3]">
                {/* Back card 2 */}
                <div className="absolute inset-0 bg-slate-800 rounded-2xl rotate-6 translate-x-6 translate-y-2 opacity-50 border border-slate-700 pointer-events-none"></div>
                {/* Back card 1 */}
                <div className="absolute inset-0 bg-slate-700 rounded-2xl rotate-3 translate-x-3 translate-y-1 opacity-75 border border-slate-600 pointer-events-none"></div>
                
                {/* Main front image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-slate-600/50 z-10 bg-slate-900">
                  <Image 
                    src="/images/company/team.png"
                    alt="Company Team Celebrating"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* Culture & FAQs Section */}
      <CultureFAQ dict={dict.culture} />

      {/* Team Reviews Section */}
      <TeamReviews dict={dict.teamReviews} />

      {/* Final CTAs (Join Team & Newsletter) */}
      <CompanyCTA dict={dict.companyCTA} />

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
