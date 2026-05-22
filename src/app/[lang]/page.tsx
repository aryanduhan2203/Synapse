import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import FeaturedOn from "@/components/FeaturedOn";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";

// Pre-render routes at build time for optimized loading performance
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-grow">
        <Hero dict={dict.hero} />
        <Promo dict={dict.promo} />
        <FeaturedOn dict={dict.featured} />
        <Services dict={dict.services} />
        <TrustedBy dict={dict.trusted} />
        <Industries dict={dict.industries} />
        <Portfolio dict={dict.portfolio} />
        <Blog dict={dict.blog} />
        <FAQ dict={dict.faq} />
        <Testimonials dict={dict.testimonials} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
