import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';
import { NAV_LINKS } from '../data/dentalData';
import { ShimmerButton } from './magicui/shimmer-button';

interface NavbarProps {
  onBookAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 ${
          isScrolled ? 'backdrop-blur-md bg-[#F5F5F3]/85 shadow-xs' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between bg-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-subtle border border-black/[0.04]"
          >
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] rounded-full p-0.5"
              aria-label="dental home page"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B8F23A] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                {/* Tooth Icon SVG */}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C9.5 2 7.7 3.5 6.9 5.5C5.8 8.1 6.2 12.2 7 15.5C7.6 18 8.4 20.8 9.5 22C10.1 22.7 10.8 22.4 11.2 21.6C11.6 20.7 12 18.2 12 17C12 18.2 12.4 20.7 12.8 21.6C13.2 22.4 13.9 22.7 14.5 22C15.6 20.8 16.4 18 17 15.5C17.8 12.2 18.2 8.1 17.1 5.5C16.3 3.5 14.5 2 12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#111111]">
                dental
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[14px] font-medium text-[#444444]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#111111] hover:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] rounded-md px-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-2.5">
              {/* Primary Appointment Button with Magic UI Shimmer */}
              <div className="hidden sm:block">
                <ShimmerButton
                  onClick={onBookAppointment}
                  background="#B8F23A"
                  shimmerColor="rgba(255, 255, 255, 0.7)"
                  className="px-5 py-2 text-[13px] sm:text-[14px] text-black font-semibold shadow-xs"
                >
                  <span>Book Appointment</span>
                  <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </ShimmerButton>
              </div>

              {/* Mobile CTA Icon button */}
              <button
                onClick={onBookAppointment}
                className="sm:hidden w-9 h-9 rounded-full bg-[#B8F23A] flex items-center justify-center text-black font-medium transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                aria-label="Book appointment"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="md:hidden w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] flex items-center justify-center text-[#111111] transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-sm flex flex-col justify-start"
        >
          <div className="bg-white m-3 sm:m-4 rounded-[28px] p-6 shadow-2xl border border-black/[0.06] animate-in fade-in slide-in-from-top-4 duration-250">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#B8F23A] flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.5 2 7.7 3.5 6.9 5.5C5.8 8.1 6.2 12.2 7 15.5C7.6 18 8.4 20.8 9.5 22C10.1 22.7 10.8 22.4 11.2 21.6C11.6 20.7 12 18.2 12 17C12 18.2 12.4 20.7 12.8 21.6C13.2 22.4 13.9 22.7 14.5 22C15.6 20.8 16.4 18 17 15.5C17.8 12.2 18.2 8.1 17.1 5.5C16.3 3.5 14.5 2 12 2Z" />
                  </svg>
                </div>
                <span className="font-bold text-lg text-[#111111]">dental</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-8 h-8 rounded-full bg-[#F5F5F3] flex items-center justify-center text-[#111111] hover:bg-[#eaeaea] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col py-4 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-[#333333] hover:text-[#111111] hover:bg-[#F5F5F3] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <ShimmerButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookAppointment();
                }}
                background="#B8F23A"
                className="w-full py-3.5 px-4 text-black font-semibold rounded-full flex items-center justify-center gap-2 text-sm shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </ShimmerButton>
              <div className="text-center text-xs text-[#777777] mt-1 flex items-center justify-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Us: +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
