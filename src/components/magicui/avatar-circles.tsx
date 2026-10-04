import React from 'react';

interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls: string[];
  className?: string;
}

export const AvatarCircles: React.FC<AvatarCirclesProps> = ({
  numPeople = 5000,
  avatarUrls,
  className = '',
}) => {
  return (
    <div className={`flex items-center -space-x-2 overflow-hidden ${className}`}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover transition-transform duration-200 hover:scale-110 hover:z-10 shadow-xs"
          src={url}
          alt={`Patient ${index + 1}`}
        />
      ))}
      {numPeople > 0 && (
        <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#111111] text-[10px] font-bold text-white ring-2 ring-white shadow-xs">
          +{(numPeople / 1000).toFixed(0)}k
        </div>
      )}
    </div>
  );
};
