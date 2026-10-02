import React from 'react';
import { VintageCorner, BrideGroomWreathMonogram } from './Ornaments';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CardCoverProps {
  onOpenInside: () => void;
  className?: string;
}

export const CardCover: React.FC<CardCoverProps> = ({ onOpenInside, className = '' }) => {
  return (
    <div
      onClick={onOpenInside}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenInside();
        }
      }}
      className={`relative w-full max-w-[440px] mx-auto bg-[#0c3843] text-amber-50 shadow-2xl rounded-sm transition-all duration-300 overflow-hidden cursor-pointer select-none group border border-[#c59b27]/40 ${className}`}
      style={{
        aspectRatio: '1 / 1.52',
        boxShadow:
          '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(197, 155, 39, 0.25), inset 0 0 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Luxurious radial lighting effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(20, 80, 95, 0.6) 0%, rgba(12, 56, 67, 0.95) 70%, rgba(7, 29, 35, 1) 100%)',
        }}
      />

      {/* Foil shimmer reflection on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#f5e4b7]/10 to-transparent" />

      {/* Double gold hairline borders */}
      <div className="absolute inset-2 sm:inset-3 border border-[#c59b27]/60 pointer-events-none rounded-xs" />
      <div className="absolute inset-3.5 sm:inset-4.5 border border-[#e8c76b]/35 pointer-events-none rounded-xs" />

      {/* Four vintage corner flourishes */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 pointer-events-none">
        <VintageCorner position="top-left" size={32} color="#e8c76b" />
      </div>
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 pointer-events-none">
        <VintageCorner position="top-right" size={32} color="#e8c76b" />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 pointer-events-none">
        <VintageCorner position="bottom-left" size={32} color="#e8c76b" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 pointer-events-none">
        <VintageCorner position="bottom-right" size={32} color="#e8c76b" />
      </div>

      {/* Main Cover Content */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-6 sm:px-10 py-7 sm:py-9 text-center">
        {/* Top Header Label */}
        <div className="flex flex-col items-center">
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-[#e8c76b] uppercase opacity-90">
            Wedding Invitation
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#e8c76b] to-transparent mt-2" />
        </div>

        {/* Center Botanical Wreath with Initials & Date (Same design as inside invitation, styled in metallic gold) */}
        <div className="flex flex-col items-center my-auto py-3">
          {/* Exact same botanical wreath & initials design as inside card, rendered in gold */}
          <BrideGroomWreathMonogram
            size={185}
            colorMode="gold"
            className="transform scale-95 sm:scale-100 transition-transform drop-shadow-md"
          />

          {/* Date row directly below initials wreath */}
          <div className="mt-4 sm:mt-5 text-center">
            <p className="font-cinzel text-sm sm:text-base tracking-[0.35em] text-[#e8c76b] font-semibold uppercase">
              20 &bull; 10 &bull; 2026
            </p>
          </div>
        </div>

        {/* Bottom Tap Prompt */}
        <div className="flex flex-col items-center pb-2 group-hover:translate-y-[-2px] transition-transform">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#071d23]/90 border border-[#c59b27] shadow-xl group-hover:border-[#e8c76b] group-hover:shadow-[#c59b27]/40 transition-all">
            <Sparkles className="w-4 h-4 text-[#e8c76b] animate-pulse" />
            <span className="font-cinzel text-xs font-bold tracking-widest text-[#f5e4b7] uppercase">
              Tap to open
            </span>
            <ArrowRight className="w-4 h-4 text-[#e8c76b] group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
