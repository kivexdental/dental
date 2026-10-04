import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '../data/dentalData';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onBookAppointment: () => void;
  onOpenPolicy: (policy: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookAppointment, onOpenPolicy }) => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-4 pb-10">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-subtle border border-black/[0.04]">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B8F23A] flex items-center justify-center">
              <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9.5 2 7.7 3.5 6.9 5.5C5.8 8.1 6.2 12.2 7 15.5C7.6 18 8.4 20.8 9.5 22C10.1 22.7 10.8 22.4 11.2 21.6C11.6 20.7 12 18.2 12 17C12 18.2 12.4 20.7 12.8 21.6C13.2 22.4 13.9 22.7 14.5 22C15.6 20.8 16.4 18 17 15.5C17.8 12.2 18.2 8.1 17.1 5.5C16.3 3.5 14.5 2 12 2Z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#111111]">
              dental
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[14px] font-medium text-[#444444]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] rounded-md px-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] flex items-center justify-center text-[#444444] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] flex items-center justify-center text-[#444444] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] flex items-center justify-center text-[#444444] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onBookAppointment}
              className="inline-flex items-center gap-2.5 bg-[#B8F23A] hover:bg-[#aee62f] text-black font-semibold text-[13px] sm:text-[14px] px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              <span>Book Appointment</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

        </div>

        {/* Bottom Sub-row with Legal & Policies */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <div>
            © {new Date().getFullYear()} dental clinic. All rights reserved. Dr. Alex Carter, BDS, MDS.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:underline hover:text-[#111111] transition-colors focus-visible:outline-none"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:underline hover:text-[#111111] transition-colors focus-visible:outline-none"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenPolicy('medical-disclaimer')}
              className="hover:underline hover:text-[#111111] transition-colors focus-visible:outline-none text-[#555555] font-medium"
            >
              Medical Disclaimer
            </button>
            <button
              onClick={() => onOpenPolicy('cookie')}
              className="hover:underline hover:text-[#111111] transition-colors focus-visible:outline-none"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onOpenPolicy('appointment')}
              className="hover:underline hover:text-[#111111] transition-colors focus-visible:outline-none"
            >
              Appointment Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
