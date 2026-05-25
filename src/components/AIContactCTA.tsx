"use client";

import { useState, FormEvent } from "react";

interface AIContactCTAProps {
  dict: {
    title: string;
    titleHighlight: string;
    desc: string;
    bullets: string[];
    replyNote: string;
    form: {
      nameLbl: string;
      namePlh: string;
      emailLbl: string;
      emailPlh: string;
      companyLbl: string;
      companyPlh: string;
      useCaseLbl: string;
      useCasePlh: string;
      messageLbl: string;
      messagePlh: string;
      submitBtn: string;
      successMsg: string;
    };
  };
}

export default function AIContactCTA({ dict }: AIContactCTAProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="w-full font-sans py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #0d6e5c 0%, #0a4a3f 30%, #0a1a1a 65%, #0d0f1a 100%)",
      }}
    >
      {/* Subtle noise/grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {dict.title}{" "}
              <span className="block">{dict.titleHighlight}</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed max-w-md">
              {dict.desc}
            </p>

            {/* Bullet list */}
            <ul className="space-y-3">
              {dict.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#38c89b] flex items-center justify-center shadow-[0_0_10px_rgba(56,200,155,0.5)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Reply note */}
            <div className="inline-flex items-center gap-3 border border-white/15 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#38c89b] shadow-[0_0_6px_rgba(56,200,155,0.8)]" />
              <span className="text-slate-300 text-sm font-medium">{dict.replyNote}</span>
            </div>
          </div>

          {/* ── Right Column: Form Card ── */}
          <div className="bg-[#0d1117] rounded-3xl p-8 shadow-2xl border border-white/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#38c89b]/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38c89b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white text-xl font-bold">{dict.form.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1.5">
                    {dict.form.nameLbl} <span className="text-[#38c89b]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={dict.form.namePlh}
                    className="w-full bg-[#161b2a] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38c89b]/50 focus:ring-1 focus:ring-[#38c89b]/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1.5">
                    {dict.form.emailLbl} <span className="text-[#38c89b]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={dict.form.emailPlh}
                    className="w-full bg-[#161b2a] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38c89b]/50 focus:ring-1 focus:ring-[#38c89b]/30 transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1.5">
                    {dict.form.companyLbl}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={dict.form.companyPlh}
                    className="w-full bg-[#161b2a] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38c89b]/50 focus:ring-1 focus:ring-[#38c89b]/30 transition-all"
                  />
                </div>

                {/* Use Case */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1.5">
                    {dict.form.useCaseLbl}
                  </label>
                  <input
                    type="text"
                    name="useCase"
                    value={form.useCase}
                    onChange={handleChange}
                    placeholder={dict.form.useCasePlh}
                    className="w-full bg-[#161b2a] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38c89b]/50 focus:ring-1 focus:ring-[#38c89b]/30 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1.5">
                    {dict.form.messageLbl}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={dict.form.messagePlh}
                    className="w-full bg-[#161b2a] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38c89b]/50 focus:ring-1 focus:ring-[#38c89b]/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#38c89b] hover:bg-[#2eb389] text-[#0a1a1a] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(56,200,155,0.35)] hover:shadow-[0_4px_30px_rgba(56,200,155,0.5)]"
                >
                  {loading ? (
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                  ) : (
                    <>
                      {dict.form.submitBtn}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
