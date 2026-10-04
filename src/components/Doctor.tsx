import React from 'react';
import { ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { NumberTicker } from './magicui/number-ticker';

interface DoctorProps {
  onViewProfile?: () => void;
}

export const Doctor: React.FC<DoctorProps> = ({ onViewProfile }) => {
  return (
    <section id="doctor" className="px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-14 shadow-subtle border border-black/[0.04]">
        
        {/* Header */}
        <div className="mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
            <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
              Our Doctor
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
            Meet Your Dentist
          </h2>
          <p className="text-[13px] sm:text-[16px] text-[#666666] mt-1.5 font-normal">
            Experienced. Friendly. Committed to your smile.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Portrait with Organic Backdrop */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Pale Green Organic Shape */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-[45%] bg-[#EAF8D2]/90 blur-xl pointer-events-none transform rotate-6 scale-105"></div>

            <div className="relative w-full max-w-[380px] lg:max-w-none rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#F2F8EB] to-[#E5F3D4]/50 p-2 sm:p-2.5 border border-black/[0.04]">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Alex Carter - Prosthodontist & Implantologist"
                loading="lazy"
                width={380}
                height={440}
                className="w-full h-[320px] sm:h-[440px] object-cover object-top rounded-[20px] sm:rounded-[30px]"
              />

              {/* Verified Badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-black/[0.05] flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold text-[#111111]">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4c8f15]" />
                <span>Board Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Info, Bio, Stats, and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-[24px] sm:text-[34px] font-bold text-[#111111] tracking-tight">
              Dr. Alex Carter
            </h3>
            <div className="text-[13px] sm:text-[15px] font-semibold text-[#4c8f15] mt-1 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>BDS, MDS – Prosthodontist & Implantologist</span>
            </div>

            <p className="text-[13px] sm:text-[16px] text-[#666666] leading-relaxed mb-6 sm:mb-8 font-normal">
              Dedicated to providing high-quality, comfortable and personalized dental care with a focus on long-term oral health and beautiful smiles. With international training in advanced oral reconstruction, Dr. Carter has guided thousands of patients to restored self-confidence.
            </p>

            {/* Doctor Statistics Cards with NumberTicker */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 pb-6 sm:pt-6 sm:pb-8 border-t border-b border-black/[0.06] mb-6 sm:mb-8">
              <div>
                <div className="text-[20px] sm:text-[30px] font-bold text-[#111111] tracking-tight">
                  <NumberTicker value={10} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight mt-0.5">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-[20px] sm:text-[30px] font-bold text-[#111111] tracking-tight">
                  <NumberTicker value={3000} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight mt-0.5">
                  Successful Treatments
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[20px] sm:text-[30px] font-bold text-[#111111] tracking-tight">
                    <NumberTicker value={4.9} decimalPlaces={1} />
                  </span>
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight mt-0.5">
                  Patient Rating
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="self-start">
              <button
                onClick={onViewProfile}
                className="inline-flex items-center gap-3 bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] font-semibold text-[13px] sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 active:scale-95 group border border-black/[0.05]"
              >
                <span>View Profile</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
