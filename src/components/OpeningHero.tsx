import React from 'react';
import confetti from 'canvas-confetti';
import { VintageCorner } from './Ornaments';

interface OpeningHeroProps {
  onOpenCard: () => void;
}

export const OpeningHero: React.FC<OpeningHeroProps> = ({ onOpenCard }) => {
  const triggerGoldConfettiAndOpen = () => {
    // Elegant celebratory golden confetti burst
    const count = 120;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#f5e4b7', '#d4af37', '#c59b27', '#e8c76b', '#ffffff', '#b58919'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Smooth delay to let guests see the burst
    setTimeout(() => {
      onOpenCard();
    }, 450);
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 bg-[#071d23] text-stone-100 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 50% 45%, #0e3b46 0%, #0c3843 30%, #071d23 85%, #041216 100%)',
      }}
    >
      {/* Decorative ambient subtle outer vignette & frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#c59b27]/20 pointer-events-none rounded-sm" />
      <div className="absolute inset-6 sm:inset-10 border border-[#c59b27]/10 pointer-events-none rounded-sm" />

      {/* Subtle corner accents */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 pointer-events-none">
        <VintageCorner position="top-left" size={32} color="#c59b27" />
      </div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 pointer-events-none">
        <VintageCorner position="top-right" size={32} color="#c59b27" />
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 pointer-events-none">
        <VintageCorner position="bottom-left" size={32} color="#c59b27" />
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 pointer-events-none">
        <VintageCorner position="bottom-right" size={32} color="#c59b27" />
      </div>

      {/* Center content: Simple 'Invitation' and 'Open the card' only */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto select-none">
        {/* Simple elegant label */}
        <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-[#e8c76b] uppercase mb-8 opacity-90">
          Invitation
        </span>

        {/* Prominent Luxury Gold Gradient Button */}
        <button
          onClick={triggerGoldConfettiAndOpen}
          type="button"
          className="relative group px-10 sm:px-14 py-4 sm:py-4.5 rounded-sm text-sm sm:text-base font-cinzel font-bold tracking-[0.25em] uppercase text-[#071d23] shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          style={{
            background:
              'linear-gradient(135deg, #fff3d1 0%, #e8c76b 25%, #c59b27 50%, #f3e5ab 75%, #9b7818 100%)',
            boxShadow:
              '0 15px 35px -5px rgba(197, 155, 39, 0.4), 0 0 25px rgba(232, 199, 107, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
          }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Open the card
          </span>
          {/* Subtle hover golden ring glow */}
          <div className="absolute inset-0 rounded-sm ring-2 ring-[#f5e4b7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
      </div>
    </div>
  );
};
