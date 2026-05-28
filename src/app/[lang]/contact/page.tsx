import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountryPhoneInput from "@/components/CountryPhoneInput";
import FeaturedOn from "@/components/FeaturedOn";
import WhyContactUs from "@/components/WhyContactUs";
import WhereIdeasMeetImpact from "@/components/WhereIdeasMeetImpact";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const q = dict.getAQuote;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      
      <main className="flex-grow bg-[#0c0d14] text-slate-100 overflow-hidden font-sans pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-10">
            
            {/* Left Column */}
            <div className="space-y-10">
              
              {/* Heading & Description */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                  {q.leftTitle1} <br className="hidden sm:block" />
                  <span className="text-[#2ebf9b]">{q.leftTitle2}</span>
                </h1>
                <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed max-w-lg">
                  {q.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="text-[#2ebf9b]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.21 17.32C10.38 15.93 8.06 13.62 6.67 10.79L8.94 8.53C9.21 8.25 9.31 7.86 9.19 7.52C8.83 6.41 8.63 5.22 8.63 3.99C8.63 3.45 8.19 3 7.64 3H4.06C3.51 3 3 3.45 3 3.99C3 13.28 10.61 21 19.99 21C20.54 21 20.99 20.55 20.99 20.01V16.38C20.99 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-lg">{q.phone}</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="text-[#2ebf9b]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C8.42 18.5 5.5 15.58 5.5 12C5.5 8.42 8.42 5.5 12 5.5C15.58 5.5 18.5 8.42 18.5 12C18.5 15.58 15.58 18.5 12 18.5ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-lg">{q.email}</span>
                </div>
              </div>

              {/* Join Team Banner */}
              <div className="bg-gradient-to-r from-[#21c277] to-[#40d2b7] rounded-[24px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between mt-8 min-h-[220px]">
                <div className="relative z-10 w-2/3">
                  <h3 className="text-white text-2xl sm:text-[32px] font-bold leading-tight mb-6">
                    {q.joinTeam}
                  </h3>
                  <button className="bg-transparent border border-white/60 hover:bg-white/10 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-2 transition-colors w-fit">
                    {q.joinBtn} 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                {/* Team Member Image Overlap */}
                <div className="absolute right-0 bottom-0 h-[120%] w-[50%] flex items-end">
                  <Image 
                    src="/images/get-a-quote/team.png" 
                    alt="Join our team" 
                    width={400} 
                    height={400} 
                    className="object-cover object-bottom h-full w-full"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Form Card */}
            <div className="bg-[#1f2029] rounded-[24px] p-8 sm:p-10 shadow-2xl border border-slate-800">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center sm:text-left">
                {q.formTitle1} <span className="text-[#2ebf9b]">{q.formTitle2}</span>
              </h2>

              <form className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <input 
                      type="text" 
                      placeholder={q.placeholderName}
                      className="w-full bg-transparent border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 focus:outline-none focus:border-[#2ebf9b] transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <input 
                      type="email" 
                      placeholder={q.placeholderEmail}
                      className="w-full bg-transparent border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 focus:outline-none focus:border-[#2ebf9b] transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <CountryPhoneInput placeholder={q.placeholderPhone} />
                </div>

                {/* Message */}
                <div>
                  <textarea 
                    placeholder={q.placeholderMessage}
                    rows={4}
                    className="w-full bg-transparent border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 focus:outline-none focus:border-[#2ebf9b] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#eab308]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"/>
                      </svg>
                    </span>
                    {q.trust1}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#eab308]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"/>
                      </svg>
                    </span>
                    {q.trust2}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button type="submit" className="bg-gradient-to-r from-[#00d0bb] to-[#04dfaf] hover:opacity-90 text-white rounded-full px-8 py-3 text-base font-bold flex items-center gap-2 transition-opacity">
                    {q.submitBtn}
                    <span className="bg-white/20 rounded-full p-1 ml-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </main>

      {/* Why Contact Us Component */}
      <WhyContactUs dict={dict.whyContactUs} />

      {/* Featured On Component */}
      <FeaturedOn dict={dict.featured} />

      {/* Where Ideas Meet Impact Component */}
      <WhereIdeasMeetImpact 
        dict={{
          daeem: dict.caseStudyDaeem.testimonial,
          vedguru: dict.caseStudyVedguru.testimonial,
          galinia: dict.caseStudyGalinia.testimonial,
          eva: dict.caseStudyEva.testimonial,
          artune: dict.caseStudyArtune.testimonial,
          das: dict.caseStudyDas.testimonial
        }}
      />

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
