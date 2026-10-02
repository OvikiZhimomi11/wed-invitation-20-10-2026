import React from 'react';
import { MapPin } from 'lucide-react';
import { BrideGroomWreathMonogram, VintageCorner, GoldenFlourishDivider, WeSection } from './Ornaments';
import { CountdownTimer } from './CountdownTimer';

interface InsideInvitationCardProps {
  onOpenMap: () => void;
  onFlipToCover: () => void;
  className?: string;
}

export const InsideInvitationCard: React.FC<InsideInvitationCardProps> = ({
  onOpenMap,
  onFlipToCover,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-[440px] mx-auto bg-[#fdfbf7] text-[#2c3e50] shadow-2xl rounded-sm transition-all duration-300 overflow-hidden border border-[#c59b27]/30 select-text ${className}`}
      style={{
        aspectRatio: '1 / 1.52',
        boxShadow:
          '0 25px 50px -12px rgba(7, 29, 35, 0.45), 0 0 0 1px rgba(197, 155, 39, 0.25), inset 0 0 40px rgba(197, 155, 39, 0.05)',
      }}
    >
      {/* Subtle luxury paper texture background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(247, 235, 206, 0.3) 0%, rgba(253, 251, 247, 0) 80%)`,
        }}
      />

      {/* Elegant double golden hairline border with inset */}
      <div className="absolute inset-2 sm:inset-3 border border-[#c59b27]/40 pointer-events-none rounded-xs" />
      <div className="absolute inset-3.5 sm:inset-4.5 border border-[#c59b27]/25 pointer-events-none rounded-xs" />

      {/* Four vintage corner flourishes */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 pointer-events-none">
        <VintageCorner position="top-left" size={28} color="#c59b27" />
      </div>
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 pointer-events-none">
        <VintageCorner position="top-right" size={28} color="#c59b27" />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 pointer-events-none">
        <VintageCorner position="bottom-left" size={28} color="#c59b27" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 pointer-events-none">
        <VintageCorner position="bottom-right" size={28} color="#c59b27" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center px-5 sm:px-8 py-4 sm:py-5 text-center overflow-y-auto custom-scrollbar">
        {/* ========================================================================= */}
        {/* SECTION 1: TOP HEADER WITH BRIDE & GROOM INITIALS MONOGRAM WREATH        */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center w-full pt-0.5">
          {/* Botanical wildflower wreath encircling the bride & groom's H - & - P initials */}
          <BrideGroomWreathMonogram
            size={135}
            className="mb-0.5 transform scale-95 sm:scale-100 transition-transform"
          />

          {/* Scripture verse in Cormorant Garamond styled in dark blue / black */}
          <blockquote className="font-cormorant italic text-[12.5px] sm:text-[14px] leading-relaxed text-[#0a1926] font-medium max-w-[340px] mx-auto px-2">
            &ldquo;May your constant love be with us, Lord, as we put our hope in you.&rdquo;
            <span className="block not-italic font-cinzel text-[9.5px] sm:text-[10px] tracking-wider text-[#8a670f] mt-0.5 font-semibold uppercase">
              Psalm 33:22
            </span>
          </blockquote>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: ANNOUNCEMENT & COUPLE NAMES                                    */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center w-full my-auto py-1 sm:py-1.5">
          {/* Blessing opener */}
          <p className="font-cormorant uppercase text-[11px] sm:text-[12px] tracking-[0.2em] text-stone-600 font-medium">
            With the blessings of Almighty God
          </p>
          <p className="font-cormorant uppercase text-[10px] sm:text-[11px] tracking-[0.18em] text-stone-500 font-normal mt-0.5">
            and our families
          </p>

          {/* Stylized italic "We" with hairline dividers */}
          <WeSection className="my-1" />

          {/* Couple's names in grand golden calligraphy */}
          <div className="relative my-0.5">
            <h1
              className="font-alex text-3xl sm:text-4xl md:text-5xl leading-tight font-normal select-none"
              style={{
                background: 'linear-gradient(135deg, #c59b27 0%, #8a670f 45%, #b58919 75%, #d9a930 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.06))',
              }}
            >
              Hikety &amp; Wilson
            </h1>
          </div>

          {/* Cordially request text */}
          <p className="font-cormorant text-[11px] sm:text-[12.5px] leading-relaxed text-stone-700 max-w-[320px] mx-auto px-2 font-normal mt-0.5">
            Cordially request the honour of your presence and prayers as we join hands in holy matrimony on
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: DATE, VENUE & INTERACTIVE CONTROLS                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center w-full pb-1">
          {/* Date row: "Tuesday || 20 || 10:00 A.M." with double gold bar accents and year 2026 */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 py-0.5 text-center select-none">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest text-[#8a670f] uppercase">
              Tuesday
            </span>
            <span className="text-[#c59b27] font-serif text-sm opacity-70">||</span>
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold leading-none text-[#8a670f]">
                20
              </span>
              <span className="font-cinzel text-[8.5px] tracking-widest text-stone-500 uppercase mt-0.5">
                OCTOBER 2026
              </span>
            </div>
            <span className="text-[#c59b27] font-serif text-sm opacity-70">||</span>
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest text-[#8a670f] uppercase">
              10:00 A.M.
            </span>
          </div>

          {/* Venue title */}
          <div className="mt-0.5 flex items-center justify-center gap-1.5 text-center px-2">
            <MapPin className="w-3.5 h-3.5 text-[#26435f] shrink-0" />
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#0c3843] uppercase">
              Satakha Town Baptist Church
            </h2>
          </div>
          <p className="font-cormorant text-[10.5px] sm:text-[11.5px] text-[#26435f] italic">
            Zunheboto District, Nagaland
          </p>

          {/* Real-time countdown timer */}
          <CountdownTimer theme="light" />

          {/* Action controls: Prominent Google Maps button (RSVP, Calendar, Share removed) */}
          <div className="w-full max-w-xs mx-auto mt-1">
            <button
              onClick={onOpenMap}
              type="button"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0c3843] via-[#071d23] to-[#0c3843] hover:from-[#071d23] hover:to-[#071d23] text-[#f5e4b7] text-xs font-cinzel font-semibold tracking-wider rounded border border-[#c59b27]/60 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#e8c76b] group-hover:scale-110 transition-transform" />
              <span>Open in Google Maps</span>
            </button>
          </div>

          {/* Classic vintage golden flourish divider at the bottom */}
          <div className="mt-2 w-full flex justify-center">
            <GoldenFlourishDivider width="w-36 sm:w-44" />
          </div>

          {/* Prompt to flip back to cover */}
          <button
            onClick={onFlipToCover}
            type="button"
            className="mt-1 text-[9.5px] font-cormorant italic text-stone-500 hover:text-[#8a670f] transition-colors cursor-pointer"
          >
            ← View Card Cover
          </button>
        </div>
      </div>
    </div>
  );
};
