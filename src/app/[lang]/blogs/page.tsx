import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogFeed from "@/components/BlogFeed";
import { getDictionary, Locale } from "@/lib/dictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      
      <main className="flex-grow bg-[#12141d] text-slate-100 min-h-[85vh] relative overflow-hidden pt-12 pb-24 font-sans">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/20 text-[#38c89b] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38c89b] animate-ping"></span>
              {dict.blog.title}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Insights, Guides &amp; <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Digital Innovation</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Stay ahead of the curve with our latest articles on AI integration, custom software engineering, product design, and modern tech stacks.
            </p>
          </div>

          {/* Interactive Blog Feed with Search & Filters */}
          <BlogFeed dict={dict.blog} lang={lang} />
        </div>
      </main>

      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
