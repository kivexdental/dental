import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.1em',
      shimmerDuration = '2.5s',
      borderRadius = '9999px',
      background = '#B8F23A',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as React.CSSProperties
        }
        className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-black/10 px-6 py-3 font-semibold text-black transition-all duration-300 [background:var(--bg)] [border-radius:var(--radius)] hover:scale-[1.02] active:scale-[0.98] ${className}`}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <div className="absolute inset-0 -z-10 overflow-visible [container-type:size]">
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>

        {/* Backdrop overlay */}
        <div className="absolute inset-[1px] -z-10 rounded-[inherit] [background:var(--bg)] transition-colors duration-200 group-hover:brightness-95" />
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
