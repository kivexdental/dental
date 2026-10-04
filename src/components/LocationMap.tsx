import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ArrowRight, ExternalLink, Navigation } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText('123 Smile Street, Ahmedabad, Gujarat 380001');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
            <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
              Find Us
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
            Visit Our Clinic
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#666666] mt-1.5 font-normal">
            Conveniently located with easy access and dedicated parking.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-5 bg-[#FAFAF9] rounded-[26px] p-6 sm:p-8 border border-black/[0.04] flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              
              {/* Address Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#777777] uppercase tracking-wider mb-0.5">
                    Address
                  </div>
                  <div className="text-[15px] font-semibold text-[#111111] leading-snug">
                    123 Smile Street,<br />
                    Ahmedabad, Gujarat 380001
                  </div>
                  <button
                    onClick={copyAddress}
                    className="text-[11px] text-[#4c8f15] hover:underline font-semibold mt-1 inline-block"
                  >
                    {copied ? 'Copied to clipboard!' : 'Copy address'}
                  </button>
                </div>
              </div>

              {/* Phone & Hours Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#777777] uppercase tracking-wider mb-0.5">
                    Phone & Appointments
                  </div>
                  <div className="text-[15px] font-semibold text-[#111111]">
                    +91 98765 43210
                  </div>
                  <div className="text-[12px] text-[#666666] mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#888888]" />
                    <span>Mon – Sat, 9:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#777777] uppercase tracking-wider mb-0.5">
                    Email Inquiry
                  </div>
                  <a
                    href="mailto:hello@dental.com"
                    className="text-[15px] font-semibold text-[#111111] hover:text-[#4c8f15] transition-colors"
                  >
                    hello@dental.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Note */}
            <div className="pt-6 mt-6 border-t border-black/[0.05] text-[12px] text-[#777777] leading-relaxed">
              * Valet parking and wheelchair accessible facilities available at our primary entrance.
            </div>

          </div>

          {/* Right Column: Interactive Styled Map */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] rounded-[26px] overflow-hidden border border-black/[0.06] bg-[#eef1eb] flex items-center justify-center group shadow-inner">
            
            {/* Styled Clean Architectural Map Vector Pattern */}
            <svg
              className="absolute inset-0 w-full h-full object-cover opacity-75"
              viewBox="0 0 800 500"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#dbe3d8" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="#eaf0e6" />
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Roads / Arteries */}
              <path d="M-50 120 C 150 140, 300 110, 500 130 C 650 145, 750 120, 850 110" stroke="#FFFFFF" strokeWidth="18" fill="none" />
              <path d="M-50 120 C 150 140, 300 110, 500 130 C 650 145, 750 120, 850 110" stroke="#d5dfce" strokeWidth="2" fill="none" />
              
              <path d="M 380 -50 L 410 250 L 430 550" stroke="#FFFFFF" strokeWidth="22" fill="none" />
              <path d="M 380 -50 L 410 250 L 430 550" stroke="#d5dfce" strokeWidth="2" fill="none" />
              
              <path d="M 120 550 C 180 380, 240 280, 410 250 C 580 220, 680 340, 820 400" stroke="#FFFFFF" strokeWidth="16" fill="none" />
              
              {/* Waterway / River Park Accent */}
              <path d="M 680 -50 C 640 150, 690 320, 660 550" stroke="#d8e8ea" strokeWidth="36" fill="none" opacity="0.6" />

              {/* Park green zone */}
              <rect x="180" y="80" width="140" height="120" rx="16" fill="#e2eddc" opacity="0.7" />
              <rect x="460" y="280" width="180" height="130" rx="20" fill="#e2eddc" opacity="0.7" />
            </svg>

            {/* Glowing Lime Map Marker Pin */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Pulse rings */}
              <div className="absolute -inset-4 rounded-full bg-[#B8F23A]/40 animate-ping"></div>
              <div className="absolute -inset-2 rounded-full bg-[#B8F23A]/60"></div>
              
              {/* Marker pin */}
              <div className="relative w-12 h-12 rounded-full bg-[#B8F23A] text-black shadow-lg flex items-center justify-center border-2 border-white transform transition-transform group-hover:scale-110">
                <MapPin className="w-6 h-6 text-black fill-black" />
              </div>

              {/* Clinic label tag */}
              <div className="mt-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-black/[0.05] text-[12px] font-bold text-[#111111] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B8F23A]"></span>
                <span>dental Clinic • Ahmedabad</span>
              </div>
            </div>

            {/* Get Directions Floating Button */}
            <div className="absolute bottom-4 right-4 z-20">
              <a
                href="https://maps.google.com/?q=Ahmedabad+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#B8F23A] hover:bg-[#aee62f] text-black font-semibold text-[13px] px-5 py-2.5 rounded-full shadow-md transition-all duration-200 active:scale-95 group"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
