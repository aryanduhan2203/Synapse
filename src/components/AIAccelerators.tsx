import Image from "next/image";

interface AIStackCategory {
  category: string;
  items: string[];
}

interface AIAcceleratorsProps {
  dict: {
    title: string;
    subtitle: string;
    stacks: AIStackCategory[];
  };
}

export default function AIAccelerators({ dict }: AIAcceleratorsProps) {
  return (
    <section className="w-full bg-[#12141d] font-sans relative overflow-hidden">
      
      {/* Background glow to highlight the robot on the right */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text and Stacks */}
          <div className="lg:col-span-7 pb-20 lg:pb-32">
            
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {dict.title}
              </h2>
              <p className="text-slate-300 text-lg">
                {dict.subtitle}
              </p>
            </div>

            {/* Stacks List */}
            <div className="space-y-6">
              {dict.stacks.map((stack, sIdx) => (
                <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  {/* Category Label */}
                  <div className="w-32 flex-shrink-0 text-slate-400 text-sm font-semibold tracking-wider uppercase">
                    {stack.category}
                  </div>
                  
                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-3">
                    {stack.items.map((item, iIdx) => (
                      <div 
                        key={iIdx}
                        className="px-4 py-1.5 rounded-full bg-[#0a5c8e] text-white text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] whitespace-nowrap"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: AI Image (Robot) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 lg:-mb-12 flex justify-center lg:justify-end items-end h-[500px] lg:h-[700px] pointer-events-none">
            {/* Using the user's robot image */}
            <div className="absolute bottom-0 right-[0%] lg:right-[-10%] w-[100%] lg:w-[120%] h-[120%]">
              <Image 
                src="/images/ai-solution/accelerator-robot.png"
                alt="AI Accelerators"
                fill
                className="object-contain object-bottom opacity-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
