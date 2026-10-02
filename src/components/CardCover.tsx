import React from 'react';
import { VintageCorner, GoldenFlourishDivider } from './Ornaments';
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
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-6 sm:px-10 py-8 sm:py-10 text-center">
        {/* Top Header Label */}
        <div className="flex flex-col items-center">
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-[#e8c76b] uppercase opacity-90">
            Wedding Invitation
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#e8c76b] to-transparent mt-2" />
        </div>

        {/* Center Golden Foliage Circular Wreath with Monogram & Names */}
        <div className="flex flex-col items-center my-auto py-2">
          {/* Circular Golden Wreath with Monogram */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* Ambient golden glow */}
            <div className="absolute inset-4 rounded-full bg-[#c59b27]/15 blur-xl group-hover:bg-[#c59b27]/25 transition-all duration-500" />

            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="coverGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff3d1" />
                  <stop offset="35%" stopColor="#e8c76b" />
                  <stop offset="70%" stopColor="#c59b27" />
                  <stop offset="100%" stopColor="#9b7818" />
                </linearGradient>
              </defs>

              {/* Decorative Concentric Rings */}
              <circle
                cx="100"
                cy="100"
                r="88"
                stroke="url(#coverGoldGradient)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <circle
                cx="100"
                cy="100"
                r="82"
                stroke="url(#coverGoldGradient)"
                strokeWidth="1.2"
                opacity="0.9"
              />
              <circle
                cx="100"
                cy="100"
                r="76"
                stroke="url(#coverGoldGradient)"
                strokeWidth="0.6"
                opacity="0.5"
              />

              {/* Foliage Leaf Motifs along the circle */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const x = 100 + 82 * Math.cos(rad);
                const y = 100 + 82 * Math.sin(rad);
                return (
                  <g key={i} transform={`translate(${x}, ${y}) rotate(${angle + 90})`}>
                    <path
                      d="M 0 -7 C -4 -4 -3 3 0 6 C 3 3 4 -4 0 -7 Z"
                      fill="url(#coverGoldGradient)"
                      opacity="0.85"
                    />
                    <circle cx="0" cy="0" r="1.5" fill="#fff3d1" />
                  </g>
                );
              })}
            </svg>

            {/* Script Monogram inside the wreath matching image.png */}
            <div className="absolute inset-0 flex flex-col items-center justify-center select-none pb-1">
              <span
                className="font-pinyon text-4xl sm:text-5xl text-[#fff3d1] select-none leading-none block transform translate-y-1"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 16px rgba(232, 199, 107, 0.5)',
                }}
              >
                H
              </span>
              <div className="flex items-center justify-center gap-1.5 my-[-1px]">
                <span className="w-3.5 h-[1px] bg-[#e8c76b]/80" />
                <span className="font-cormorant italic text-sm text-[#e8c76b] font-medium">&amp;</span>
                <span className="w-3.5 h-[1px] bg-[#e8c76b]/80" />
              </div>
              <span
                className="font-pinyon text-4xl sm:text-5xl text-[#fff3d1] select-none leading-none block transform -translate-y-0.5"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 16px rgba(232, 199, 107, 0.5)',
                }}
              >
                P
              </span>
            </div>
          </div>

          {/* Couple's Names */}
          <div className="mt-4 sm:mt-5 text-center">
            <h2
              className="font-alex text-3xl sm:text-4xl text-[#fcf5e2] tracking-wide"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 0 20px rgba(197, 155, 39, 0.35)',
              }}
            >
              Hikety &amp; Wilson
            </h2>
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#c59b27] to-transparent my-2" />
          </div>

          {/* Date: "20 - 10 - 2026" */}
          <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] text-[#e8c76b] font-medium">
            20 &bull; 10 &bull; 2026
          </p>
          <p className="font-cormorant italic text-xs text-[#a3c3cb] mt-1">
            Satakha, Nagaland
          </p>
        </div>

        {/* Bottom Tap Prompt */}
        <div className="flex flex-col items-center pb-2 group-hover:translate-y-[-2px] transition-transform">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#071d23]/80 border border-[#c59b27]/60 shadow-lg group-hover:border-[#e8c76b] group-hover:shadow-[#c59b27]/30 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#e8c76b] animate-pulse" />
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#f5e4b7]">
              Tap to open inside
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#e8c76b] group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="font-cormorant italic text-[11px] text-[#a3c3cb]/70 mt-2">
            Click anywhere on the card to reveal
          </span>
        </div>
      </div>
    </div>
  );
};
