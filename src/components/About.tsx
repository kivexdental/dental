import React from 'react';
import { ArrowRight, Heart, Cpu, Sparkles } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-subtle border border-black/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Description, CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-[#111111] leading-[1.05] mb-5">
              A Modern Approach<br />
              <span className="text-[#111111]">to Dental Care</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed mb-8 max-w-lg font-normal">
              We combine advanced technology, a patient-first philosophy, and a comfortable environment to deliver exceptional dental care for every stage of life.
            </p>

            {/* CTA Button */}
            <div className="self-start">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-3 bg-[#B8F23A] hover:bg-[#aee62f] text-black font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 active:scale-95 group shadow-sm"
              >
                <span>Learn More</span>
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 text-black" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Overlapping Photos & Floating Feature Card */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Main Reception Photo */}
              <div className="col-span-8 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-100 shadow-sm border border-black/[0.04]">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Clinic Reception"
                  loading="lazy"
                  width={400}
                  height={340}
                  className="w-full h-[260px] sm:h-[340px] object-cover"
                />
              </div>

              {/* Secondary Operatory Photo */}
              <div className="col-span-4 rounded-[20px] sm:rounded-[26px] overflow-hidden bg-stone-100 shadow-sm border border-black/[0.04] self-end mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                  alt="Modern Dental Operatory"
                  loading="lazy"
                  width={200}
                  height={220}
                  className="w-full h-[180px] sm:h-[220px] object-cover"
                />
              </div>

            </div>

            {/* Floating Info Pill Card */}
            <div className="relative lg:absolute lg:bottom-[-16px] lg:left-8 mt-4 lg:mt-0 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[22px] shadow-float border border-black/[0.06] flex flex-col gap-3 max-w-[340px] z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0">
                  <Heart className="w-4 h-4 fill-[#3B7011]" />
                </div>
                <span className="text-[13px] font-bold text-[#111111]">
                  Patient First Approach
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-[#111111]">
                  Advanced Technology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[13px] font-bold text-[#111111]">
                  Comfortable Experience
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
