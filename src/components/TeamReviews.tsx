import Image from "next/image";

interface Review {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

interface TeamReviewsProps {
  dict: {
    title: string;
    subtitle: string;
    leftCard: {
      title: string;
      count: string;
      label: string;
      btn: string;
    };
    reviews: Review[];
  };
}

export default function TeamReviews({ dict }: TeamReviewsProps) {
  return (
    <section className="w-full bg-[#1b1d28] py-20 border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {dict.title}
          </h2>
          <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Large Green Card */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-12">
              {dict.leftCard.title}
            </h3>
            
            <div>
              <div className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight mb-2">
                {dict.leftCard.count}
              </div>
              <div className="text-yellow-300 font-bold text-xl sm:text-2xl mb-10">
                {dict.leftCard.label}
              </div>
              
              <button className="bg-white hover:bg-slate-50 text-emerald-600 rounded-full px-5 py-2.5 text-sm font-bold flex items-center justify-between w-full max-w-[240px] transition-colors group">
                {dict.leftCard.btn}
                <div className="w-6 h-6 rounded-full border border-emerald-600 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Reviews Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {dict.reviews.map((review, idx) => (
              <div key={idx} className="flex flex-col space-y-6">
                
                {/* Reviewer Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-700 flex-shrink-0 border border-slate-600">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed flex-grow">
                  {review.text}
                </p>

                {/* Reviewer Info */}
                <div className="font-bold text-white text-[15px]">
                  {review.name}, {review.location}
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
