import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, X, Menu } from 'lucide-react';

export type PreviewMode = 'pc' | 'tablet' | 'phone' | 'fullscreen';

interface PreviewToolbarProps {
  currentMode: PreviewMode;
  onModeChange: (mode: PreviewMode) => void;
  onClose: () => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({
  currentMode,
  onModeChange,
  onClose,
}) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const modes: { id: PreviewMode; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'pc', label: 'PC', icon: Monitor },
    { id: 'tablet', label: 'Tablet', icon: Tablet },
    { id: 'phone', label: 'Phone', icon: Smartphone },
    { id: 'fullscreen', label: 'Fullscreen', icon: Maximize2 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[52px] bg-[#F5EFE5] text-[#222222] border-b border-[#e2d6c3] shadow-xs flex items-center justify-between px-3 sm:px-6 select-none font-sans">
      
      {/* Left: Permanent KIVEX Technology Branding Unit */}
      <div className="flex items-center gap-1.5 shrink-0" aria-label="KIVEX Technology Preview System">
        <span className="text-[17px] sm:text-[19px] font-black tracking-tight text-[#2D5FC7] leading-none uppercase">
          KIVEX
        </span>
        <span className="text-[12px] sm:text-[13px] font-bold tracking-tight text-[#E8B62A] leading-none">
          Technology
        </span>
      </div>

      {/* Desktop & Tablet: Device View Controls */}
      <div className="hidden sm:flex items-center bg-black/[0.04] p-1 rounded-full border border-black/[0.06] shrink-0 gap-1">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = currentMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              aria-pressed={isActive}
              aria-label={`Switch to ${mode.label} preview mode`}
              title={`Switch to ${mode.label} preview mode`}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] ${
                isActive
                  ? 'bg-[#2D5FC7] text-white font-bold shadow-xs'
                  : 'text-[#444444] hover:text-[#111111] hover:bg-black/5 font-medium'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#555555]'}`} />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Controls: Mobile Menu Toggle + Cross Button */}
      <div className="flex items-center gap-2">
        {/* Mobile device dropdown toggle */}
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="sm:hidden flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/[0.05] text-[#222222] text-xs font-semibold hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          aria-label="Toggle device view controls"
          aria-expanded={mobileExpanded}
        >
          <Menu className="w-3.5 h-3.5" />
          <span className="capitalize">{currentMode}</span>
        </button>

        {/* Cross / Close Button (Hides Toolbar) */}
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-black/[0.05] hover:bg-black/10 text-[#333333] hover:text-black flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] cursor-pointer"
          title="Hide preview toolbar"
          aria-label="Hide preview toolbar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Expanded Device View Interface for Mobile / Small Screens */}
      {mobileExpanded && (
        <div className="absolute top-[52px] left-0 right-0 bg-[#F5EFE5] border-b border-[#e2d6c3] shadow-lg p-3 sm:hidden flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] px-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[15px] font-black tracking-tight text-[#2D5FC7] uppercase">
                KIVEX
              </span>
              <span className="text-[11px] font-bold text-[#E8B62A]">
                Technology
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#666666]">
              Device Viewport
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isActive = currentMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    onModeChange(mode.id);
                    setMobileExpanded(false);
                  }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs transition-colors ${
                    isActive
                      ? 'bg-[#2D5FC7] text-white font-bold shadow-xs'
                      : 'bg-black/[0.04] text-[#333333] font-medium hover:bg-black/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
};
