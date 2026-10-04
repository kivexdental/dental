import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiePolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const consent = localStorage.getItem('dental_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dental_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('dental_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[24px] shadow-2xl border border-black/[0.08] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
            Cookie & Privacy Notice
          </h4>
          <p className="text-xs text-[#666666] mt-1 leading-relaxed">
            We use essential cookies to ensure standard browsing performance and remember device viewport settings.{' '}
            <button
              onClick={onOpenCookiePolicy}
              className="text-[#3B7011] underline font-semibold hover:text-black focus-visible:outline-none"
            >
              Read Cookie Policy
            </button>.
          </p>

          <div className="flex items-center gap-2 mt-3.5">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-full bg-[#B8F23A] hover:bg-[#aee62f] text-black font-semibold text-xs transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-1.5 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#444444] font-medium text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              Essential Only
            </button>
          </div>
        </div>

        <button
          onClick={handleDecline}
          aria-label="Dismiss cookie notice"
          className="text-[#888888] hover:text-[#111111] p-1 rounded-full hover:bg-black/5 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
