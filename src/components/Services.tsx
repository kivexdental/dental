import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/dentalData';
import { MagicCard } from './magicui/magic-card';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-2.5 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                Our Services
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
              Complete Dental Care<br />
              <span className="text-[#111111]">for Every Smile</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] flex items-center justify-center transition-all duration-200 active:scale-90"
              aria-label="Previous services"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#B8F23A] hover:bg-[#aee62f] text-black flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm"
              aria-label="Next services"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE VIEW: Vertical Compact Row Cards */}
        <div className="flex sm:hidden flex-col gap-3">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-[#FAFAF9] active:bg-[#f2f2ef] rounded-[20px] p-3 border border-black/[0.04] flex items-center justify-between gap-3 shadow-xs cursor-pointer transition-all active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-14 h-14 rounded-[14px] overflow-hidden bg-white shrink-0 border border-black/[0.04]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[14px] font-bold text-[#111111] truncate">
                    {service.title}
                  </h3>
                  <p className="text-[12px] text-[#666666] line-clamp-1 mt-0.5 font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-white border border-black/[0.08] flex items-center justify-center shrink-0 shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]" />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP & TABLET VIEW: MagicCard Spotlight Grid */}
        <div
          ref={scrollContainerRef}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-1"
        >
          {SERVICES_DATA.map((service) => (
            <MagicCard
              key={service.id}
              onClick={() => onSelectService(service)}
              gradientColor="rgba(184, 242, 58, 0.2)"
              gradientSize={220}
              className="group cursor-pointer bg-[#FAFAF9] hover:bg-white rounded-[24px] p-3.5 sm:p-4 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative w-full h-[180px] sm:h-[190px] rounded-[18px] overflow-hidden bg-white mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={280}
                  height={190}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {service.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111111] group-hover:text-[#2d5f0e] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] mt-1.5 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row with Arrow Button */}
                <div className="pt-4 mt-2 flex items-center justify-between border-t border-black/[0.04]">
                  <span className="text-[12px] font-semibold text-[#111111] group-hover:underline">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#B8F23A] border border-black/[0.06] flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-4 h-4 text-[#111111]" />
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

      </div>
    </section>
  );
};
