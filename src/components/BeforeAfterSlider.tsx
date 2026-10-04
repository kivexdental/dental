import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_TREATMENTS, BeforeAfterTreatment } from '../data/dentalData';
import { BorderBeam } from './magicui/border-beam';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<BeforeAfterTreatment>(
    BEFORE_AFTER_TREATMENTS[0]
  );
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically track container width for pixel-perfect before/after image overlay registration
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="technology" className="px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
            <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
              Interactive Demo
            </span>
          </div>

          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
            See the Difference
          </h2>
          <p className="text-[13px] sm:text-[16px] text-[#666666] mt-1.5 max-w-xl font-normal">
            Move the slider to compare clinical before and after results for each treatment. Use arrow keys when handle is focused to adjust position.
          </p>
        </div>

        {/* Content Grid: Slider on Left, Treatments on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Before/After Visualizer */}
          <div className="lg:col-span-8 flex flex-col">
            <div
              ref={containerRef}
              onClick={(e) => handleMove(e.clientX)}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative w-full h-[260px] sm:h-[400px] lg:h-[460px] rounded-[22px] sm:rounded-[32px] overflow-hidden select-none cursor-ew-resize border border-black/[0.06] bg-[#111111] group shadow-inner touch-none"
            >
              {/* Magic UI BorderBeam */}
              <BorderBeam size={250} duration={12} delay={0} colorFrom="#B8F23A" colorTo="transparent" />

              {/* "AFTER" Layer (Full Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={selectedTreatment.afterImage}
                  alt={`${selectedTreatment.name} - After Treatment Result`}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                {/* Floating "After" Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold text-[#111111] shadow-sm pointer-events-none flex items-center gap-1.5 z-20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4c8f15]" />
                  <span>{selectedTreatment.afterLabel || 'After'}</span>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="h-full relative"
                  style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                >
                  <img
                    src={selectedTreatment.beforeImage}
                    alt={`${selectedTreatment.name} - Before Treatment Condition`}
                    loading="eager"
                    className="absolute inset-0 h-full object-cover max-w-none"
                    style={{
                      width: containerWidth ? `${containerWidth}px` : '100%',
                      height: '100%',
                    }}
                  />
                  {/* Floating "Before" Badge */}
                  <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-black/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold text-white shadow-sm pointer-events-none z-20">
                    <span>{selectedTreatment.beforeLabel || 'Before'}</span>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Line & Accessible Keyboard Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Accessible Interactive Handle */}
                <div
                  role="slider"
                  tabIndex={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(sliderPosition)}
                  aria-label={`Comparison slider for ${selectedTreatment.name}, currently at ${Math.round(sliderPosition)} percent`}
                  onKeyDown={handleKeyDown}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center slider-handle-shadow pointer-events-auto transition-transform group-hover:scale-105 active:scale-95 focus:scale-110 focus:ring-4 focus:ring-[#B8F23A] focus:outline-none cursor-ew-resize"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B8F23A] flex items-center justify-center">
                    <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Helper badge */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-3 py-0.5 rounded-full pointer-events-none opacity-80 sm:opacity-90 z-20">
                Drag slider or use arrow keys
              </div>
            </div>

            {/* Treatment Information Highlight under the slider */}
            <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] bg-[#FAFAF9] border border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#4c8f15] bg-[#EAF8D2] px-2 py-0.5 rounded-md">
                  {selectedTreatment.badge}
                </span>
                <p className="text-[12px] sm:text-[13px] text-[#444444] mt-1 leading-snug">
                  {selectedTreatment.description}
                </p>
              </div>
              <div className="text-[11px] sm:text-[12px] text-[#777777] italic sm:text-right shrink-0">
                {selectedTreatment.details}
              </div>
            </div>
          </div>

          {/* Right Column: Selectable Treatment Tabs/Cards */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-[#777777] uppercase tracking-wider mb-0.5 px-1">
              Select Treatment
            </h3>

            {BEFORE_AFTER_TREATMENTS.map((treatment) => {
              const isActive = selectedTreatment.id === treatment.id;
              return (
                <button
                  key={treatment.id}
                  onClick={() => {
                    setSelectedTreatment(treatment);
                    setSliderPosition(50); // Reset to center on treatment switch for clean preview
                  }}
                  aria-pressed={isActive}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-[18px] sm:rounded-[20px] transition-all duration-200 flex items-center gap-3 sm:gap-3.5 border active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] relative overflow-hidden ${
                    isActive
                      ? 'bg-[#F4FBEA] border-[#B8F23A] shadow-xs ring-1 ring-[#B8F23A]/50'
                      : 'bg-white hover:bg-[#FAFAF9] border-black/[0.06] text-[#444444]'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[12px] sm:rounded-[14px] overflow-hidden bg-white shrink-0 border border-black/[0.05]">
                    <img
                      src={treatment.thumbnail}
                      alt={treatment.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-[14px] sm:text-[15px] font-bold truncate ${
                          isActive ? 'text-[#111111]' : 'text-[#333333]'
                        }`}
                      >
                        {treatment.name}
                      </h4>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#4c8f15] shrink-0"></span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-[12px] text-[#666666] line-clamp-1 mt-0.5 font-normal">
                      {treatment.badge} • Clinical results
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
