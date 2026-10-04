import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Sparkles, Smile } from 'lucide-react';
import { SAFETY_ITEMS } from '../data/dentalData';

interface SafetyProps {
  onLearnMore?: () => void;
}

export const Safety: React.FC<SafetyProps> = ({ onLearnMore }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#3B7011]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#3B7011]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#3B7011]" />;
      case 'Smile':
      default:
        return <Smile className="w-4 h-4 text-[#3B7011]" />;
    }
  };

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Copy, CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                Safety Care
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[38px] font-bold tracking-tight text-[#111111] leading-tight mb-3 sm:mb-4">
              Your Safety<br />
              <span className="text-[#111111]">Our Priority</span>
            </h2>

            <p className="text-[13px] sm:text-[15px] text-[#666666] leading-relaxed mb-5 sm:mb-6 font-normal">
              We follow strict sterilization protocols and use advanced technology to ensure a safe, clean and comfortable environment for every patient.
            </p>

            <div className="self-start">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-3 bg-[#B8F23A] hover:bg-[#aee62f] text-black font-semibold text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 active:scale-95 group shadow-sm"
              >
                <span>Learn More</span>
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </span>
              </button>
            </div>
          </div>

          {/* MOBILE VIEW: Clean list items matching mobile panel */}
          <div className="flex sm:hidden flex-col gap-2.5 w-full">
            {SAFETY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAF9] rounded-[18px] p-3 border border-black/[0.04] flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EAF8D2] flex items-center justify-center shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#111111] leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-[#4c8f15] font-semibold uppercase tracking-wide">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-white border border-black/[0.06] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                </div>
              </div>
            ))}
          </div>

          {/* TABLET & DESKTOP: 4 Cards Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:col-span-8">
            {SAFETY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FAFAF9] hover:bg-white rounded-[22px] p-3 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-subtle transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="w-full h-[110px] sm:h-[120px] rounded-[16px] overflow-hidden bg-white mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={240}
                    height={120}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#EAF8D2] flex items-center justify-center shrink-0">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[11px] font-bold text-[#4c8f15] uppercase tracking-wide truncate">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#111111] leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
