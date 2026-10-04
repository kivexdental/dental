import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { NumberTicker } from './magicui/number-ticker';
import { AvatarCircles } from './magicui/avatar-circles';
import { ShimmerButton } from './magicui/shimmer-button';
import { DotPattern } from './magicui/dot-pattern';

interface HeroProps {
  onBookAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  const patientAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section id="home" className="px-3 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-3 sm:pb-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-14 shadow-subtle border border-black/[0.04] relative overflow-hidden">
        
        {/* Subtle Ambient Dot Pattern */}
        <DotPattern
          width={24}
          height={24}
          cx={1}
          cy={1}
          cr={1}
          className="opacity-40"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Headline, Copy, CTAs, Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                Modern Dental Care
              </span>
            </div>

            {/* Giant Heading */}
            <h1 className="text-[34px] sm:text-[56px] lg:text-[68px] font-bold tracking-tight text-[#111111] leading-[1.03] mb-3 sm:mb-6">
              Healthy Smiles<br />
              <span className="text-[#111111]">Brighter Lives</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[17px] text-[#666666] max-w-[480px] leading-relaxed mb-6 sm:mb-9 font-normal">
              Advanced dental care with modern technology for you and your family.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {/* Primary CTA with Magic UI ShimmerButton */}
              <div className="w-full sm:w-auto">
                <ShimmerButton
                  onClick={onBookAppointment}
                  background="#B8F23A"
                  shimmerColor="rgba(255, 255, 255, 0.7)"
                  className="w-full sm:w-auto px-7 py-3.5 text-[14px] sm:text-[15px] text-black font-semibold shadow-sm"
                >
                  <span>Book Appointment</span>
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </span>
                </ShimmerButton>
              </div>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] font-medium text-[14px] sm:text-[15px] px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 group"
              >
                <span>View Services</span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#333333]" />
                </span>
              </a>
            </div>

            {/* Statistics Row with NumberTicker & AvatarCircles */}
            <div className="pt-5 sm:pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-2 sm:gap-6 items-center">
              <div>
                <div className="text-[20px] sm:text-[28px] font-bold text-[#111111] tracking-tight">
                  <NumberTicker value={20} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight mt-0.5">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-[20px] sm:text-[28px] font-bold text-[#111111] tracking-tight">
                  <NumberTicker value={5000} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight mt-0.5">
                  Happy Patients
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[20px] sm:text-[28px] font-bold text-[#111111] tracking-tight">
                    <NumberTicker value={4.9} decimalPlaces={1} />
                  </span>
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="text-[10px] sm:text-[13px] text-[#777777] font-medium leading-tight">
                    Patient Rating
                  </div>
                  {/* Magic UI Avatar Circles */}
                  <div className="hidden sm:block">
                    <AvatarCircles numPeople={5000} avatarUrls={patientAvatars} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Doctor Image with Script & Floating Glass Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Pale Lime Organic Blob Background */}
            <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-[45%] bg-[#EAF8D2]/80 blur-xl pointer-events-none transform -rotate-3 scale-105"></div>

            {/* Main Doctor Image Container */}
            <div className="relative w-full max-w-[420px] lg:max-w-none rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#F5F9ED] to-[#EBF5DC]/60 p-2 sm:p-3 border border-black/[0.04]">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85"
                alt="Lead dentist smiling warmly in clinical attire at dental Clinic"
                width={420}
                height={500}
                loading="eager"
                className="w-full h-[320px] sm:h-[460px] lg:h-[500px] object-cover object-top rounded-[20px] sm:rounded-[30px]"
              />

              {/* Handwritten Script Accent: "Your Smile Our Priority" with arrow */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 pointer-events-none select-none z-10">
                <div className="font-handwritten text-[#3B7011] text-[19px] sm:text-[28px] font-bold leading-none rotate-[-8deg] drop-shadow-sm flex flex-col items-start">
                  <span>Your Smile</span>
                  <span className="ml-1 sm:ml-2 text-[#4c8f15]">Our Priority</span>
                  <svg className="w-8 h-6 sm:w-10 sm:h-7 text-[#4c8f15] mt-1 -rotate-12" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 5 C 20 20, 30 22, 45 15 M 35 12 L 45 15 L 38 24" />
                  </svg>
                </div>
              </div>

              {/* Floating Glassmorphism Info Card */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-[16px] sm:rounded-[20px] shadow-float border border-black/[0.06] flex items-center gap-2.5 sm:gap-3 z-10 animate-float-slow">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EAF8D2] flex items-center justify-center text-[#2d5f0e] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d5f0e]" />
                </div>
                <div>
                  <div className="text-[12px] sm:text-[13px] font-bold text-[#111111] leading-tight">
                    Advanced Care
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#666666] font-medium leading-tight mt-0.5">
                    Modern Dental Technology
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
