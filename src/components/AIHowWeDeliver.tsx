interface AIHowWeDeliverStep {
  num: string;
  title: string;
  desc: string;
}

interface AIHowWeDeliverProps {
  dict: {
    title: string;
    subtitle: string;
    steps: AIHowWeDeliverStep[];
  };
}

export default function AIHowWeDeliver({ dict }: AIHowWeDeliverProps) {
  return (
    <section className="w-full bg-[#12141d] py-24 font-sans border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-slate-300 text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Central Vertical Line (hidden on very small screens, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          {/* Left Vertical Line for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-white/10"></div>

          {dict.steps.map((step, idx) => {
            const isLeftText = idx % 2 === 0;

            return (
              <div key={idx} className="relative flex items-center justify-between w-full mb-12 md:mb-16 group">
                
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-emerald-400 rounded-full -translate-x-1/2 shadow-[0_0_12px_rgba(52,211,153,0.8)] z-10 group-hover:scale-150 transition-transform"></div>

                {/* Left Column (Desktop) */}
                <div className={`hidden md:flex w-5/12 relative items-center justify-end pr-10 ${isLeftText ? '' : 'invisible'}`}>
                  <div className="text-right mr-6">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl font-bold text-white/10 mr-0">{step.num}</span>
                </div>

                {/* Right Column (Desktop) */}
                <div className={`hidden md:flex w-5/12 relative items-center justify-start pl-10 ${!isLeftText ? '' : 'invisible'}`}>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl font-bold text-white/10 ml-0">{step.num}</span>
                  <div className="text-left ml-6">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="md:hidden w-full pl-16 pr-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-white/10">{step.num}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
