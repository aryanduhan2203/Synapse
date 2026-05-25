import Image from "next/image";
import Link from "next/link";

interface AIProject {
  title: string;
  image: string;
  probLabel: string;
  probText: string;
  solLabel: string;
  solText: string;
  stat: string;
}

interface AIProjectsProps {
  dict: {
    title: string;
    subtitle: string;
    btnLabel: string;
    projects: AIProject[];
  };
}

export default function AIProjects({ dict }: AIProjectsProps) {
  return (
    <section className="w-full bg-emerald-500 py-24 font-sans relative overflow-hidden">
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-white/90 text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dict.projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-[#12141d] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Image Section */}
              <div className="w-full h-56 relative bg-slate-800 m-4 rounded-xl overflow-hidden shrink-0" style={{ width: 'calc(100% - 2rem)' }}>
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <div className="space-y-4 flex-grow mb-8">
                  <div>
                    <h4 className="text-[#38c89b] text-xs font-bold uppercase tracking-wider mb-1">
                      {project.probLabel}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.probText}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#38c89b] text-xs font-bold uppercase tracking-wider mb-1">
                      {project.solLabel}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.solText}
                    </p>
                  </div>
                </div>

                {/* Stat Pill */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-950 px-4 py-2 rounded-full font-bold text-sm shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-950 opacity-60"></div>
                    {project.stat}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-transparent border border-white/50 hover:border-white text-white hover:bg-white/10 rounded-full px-8 py-4 text-sm font-bold transition-all group"
          >
            {dict.btnLabel}
            <div className="w-6 h-6 rounded-full border border-white/50 group-hover:border-white flex items-center justify-center transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
