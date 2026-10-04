import React from 'react';
import { PreviewMode } from './PreviewToolbar';
import { Lock, RotateCw } from 'lucide-react';

interface DeviceFrameProps {
  mode: PreviewMode;
  isToolbarVisible?: boolean;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ mode, isToolbarVisible = true }) => {
  const iframeSrc = `${window.location.pathname}?standalone=true`;

  // Compute container dimensions, chassis styling, and exact viewport width
  const getLayout = () => {
    switch (mode) {
      case 'phone':
        return {
          wrapperClass: 'w-[418px] max-w-full h-[844px] max-h-[calc(100vh-110px)] rounded-[52px] p-[14px] bg-[#1d1d1f] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.1)] border-[4px] border-[#38383a]',
          screenClass: 'rounded-[40px]',
          iframeWidth: '390px',
          badge: 'Phone Viewport • 390 px',
        };
      case 'tablet':
        return {
          wrapperClass: 'w-[808px] max-w-full h-[1024px] max-h-[calc(100vh-110px)] rounded-[38px] p-[20px] bg-[#1e1e20] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.08)] border-[3px] border-[#3a3a3c]',
          screenClass: 'rounded-[24px]',
          iframeWidth: '768px',
          badge: 'Tablet Viewport • 768 px',
        };
      case 'pc':
        return {
          wrapperClass: 'w-[1320px] max-w-full h-[840px] max-h-[calc(100vh-110px)] rounded-[20px] bg-[#1e1e22] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] border border-white/10',
          screenClass: 'rounded-b-[20px]',
          iframeWidth: '1280px',
          badge: 'Desktop Viewport • 1280 px',
        };
      case 'fullscreen':
      default:
        return {
          wrapperClass: 'w-full h-full rounded-none p-0 bg-transparent shadow-none border-none',
          screenClass: 'rounded-none',
          iframeWidth: '100%',
          badge: 'Natural Fullscreen Viewport',
        };
    }
  };

  const layout = getLayout();
  const isFullscreen = mode === 'fullscreen';

  return (
    <div
      className={`relative w-full overflow-auto flex flex-col items-center justify-start transition-all duration-200 ${
        isToolbarVisible ? 'h-[calc(100vh-52px)] mt-[52px]' : 'h-screen mt-0'
      } ${isFullscreen ? 'p-0 bg-[#F5F5F3]' : 'py-3 sm:py-5 px-2 sm:px-4 bg-[#121214]'}`}
    >
      {/* Viewport Dimension Info Badge (hidden in fullscreen) */}
      {!isFullscreen && (
        <div className="mb-2 sm:mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono flex items-center gap-2 select-none shadow-sm shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5FC7]"></span>
          <span>{layout.badge}</span>
        </div>
      )}

      {/* Outer Hardware Chassis Frame - Single Persistent Shell */}
      <div
        className={`relative transition-all duration-300 ease-out flex flex-col overflow-hidden shrink-0 ${layout.wrapperClass}`}
      >
        {/* ================= PHONE HARDWARE OVERLAYS ================= */}
        {mode === 'phone' && (
          <>
            {/* Dynamic Island Notch */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[116px] h-[28px] bg-black rounded-full z-30 flex items-center justify-between px-3 pointer-events-none shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b2a] border border-[#1b263b]/50"></div>
              <div className="w-2 h-2 rounded-full bg-[#1b263b]/40"></div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/40 rounded-full pointer-events-none z-30"></div>
          </>
        )}

        {/* ================= TABLET CAMERA OVERLAY ================= */}
        {mode === 'tablet' && (
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a1128] border border-white/10 pointer-events-none z-30"></div>
        )}

        {/* ================= PC BROWSER CHROME TITLEBAR ================= */}
        {mode === 'pc' && (
          <div className="h-[40px] bg-[#27272b] px-4 flex items-center justify-between border-b border-white/5 select-none shrink-0">
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
            </div>

            {/* URL address bar */}
            <div className="bg-[#18181b] px-5 py-1 rounded-lg text-white/70 text-xs font-mono flex items-center gap-2 border border-white/5 w-[360px] max-w-full justify-center">
              <Lock className="w-3 h-3 text-[#B8F23A]" />
              <span className="truncate">https://dental-clinic.local/</span>
            </div>

            <div className="w-12 flex justify-end text-white/40">
              <RotateCw className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        {/* ================= INNER SCREEN CONTAINER & REAL VIEWPORT IFRAME ================= */}
        <div
          className={`relative w-full flex-1 overflow-hidden bg-[#F5F5F3] shadow-inner flex items-center justify-center ${layout.screenClass}`}
        >
          <iframe
            id="dental-preview-viewport"
            src={iframeSrc}
            title="Dental Clinic Website Viewport Preview"
            className="h-full border-none transition-all duration-300 ease-out block"
            style={{
              width: layout.iframeWidth,
              maxWidth: '100%',
              margin: '0 auto',
            }}
          />
        </div>

      </div>

    </div>
  );
};
