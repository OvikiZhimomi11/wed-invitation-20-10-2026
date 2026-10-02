import React from 'react';

/**
 * Faithful botanical wreath & initials design matching image.png
 * Features an asymmetric wild-flower & bud wreath
 * with the bride & groom's initials stacked vertically:
 *     H
 *   - & -
 *     P
 * with crystal clear, elegant calligraphy.
 */
export const BrideGroomWreathMonogram: React.FC<{
  className?: string;
  size?: number;
  colorMode?: 'navy' | 'gold';
}> = ({ className = '', size = 160, colorMode = 'navy' }) => {
  const isGold = colorMode === 'gold';
  const strokeColor = isGold ? '#d4af37' : '#26435f';
  const flowerFill = isGold ? '#fff8e7' : '#eef4fa';
  const flowerStroke = isGold ? '#c59b27' : '#26435f';
  const leafColor = isGold ? '#e8c76b' : '#26435f';

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size * 0.95 }}
    >
      <svg
        viewBox="0 0 240 220"
        className="w-full h-full drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="monogramGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3d1" />
            <stop offset="25%" stopColor="#e8c76b" />
            <stop offset="55%" stopColor="#d4af37" />
            <stop offset="80%" stopColor="#8a670f" />
            <stop offset="100%" stopColor="#c59b27" />
          </linearGradient>
          <linearGradient id="wreathGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf1cd" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#a37e19" />
          </linearGradient>
        </defs>

        {/* Ambient subtle glow when in gold mode */}
        {isGold && (
          <circle cx="120" cy="110" r="85" fill="#c59b27" fillOpacity="0.08" filter="blur(10px)" />
        )}

        {/* ========================================================================= */}
        {/* BOTANICAL WILDFLOWER WREATH                                              */}
        {/* ========================================================================= */}
        <g stroke={isGold ? 'url(#wreathGoldGrad)' : strokeColor} strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Base crossing stems */}
          <path d="M 68 185 C 90 205 130 208 160 188" strokeWidth="1.2" opacity="0.9" />
          <path d="M 85 198 C 110 210 142 205 174 182" strokeWidth="1.0" opacity="0.8" />
          <path d="M 98 182 C 115 196 135 195 152 180" strokeWidth="0.8" opacity="0.75" />

          {/* Left Main Curved Stem */}
          <path
            d="M 115 204 C 85 200 58 178 46 148 C 38 125 42 98 54 75 C 62 60 72 48 84 38"
            strokeWidth="1.3"
            opacity="0.95"
          />
          <path
            d="M 95 198 C 72 188 52 165 44 140 C 37 118 42 94 50 78"
            strokeWidth="0.9"
            opacity="0.7"
          />

          {/* Right Main Curved Stem (Sweeping higher towards 1 o'clock) */}
          <path
            d="M 125 204 C 155 198 182 175 194 145 C 205 118 200 88 188 64 C 178 44 162 28 144 18"
            strokeWidth="1.3"
            opacity="0.95"
          />
          <path
            d="M 140 196 C 168 184 188 158 196 130 C 202 105 196 82 184 62 C 172 45 156 30 140 20"
            strokeWidth="0.9"
            opacity="0.7"
          />

          {/* Branching twigs - Left side */}
          <path d="M 47 150 C 35 146 28 138 24 130" strokeWidth="0.9" />
          <path d="M 45 138 C 32 130 30 118 28 112" strokeWidth="0.8" />
          <path d="M 42 115 C 32 108 34 96 36 90" strokeWidth="0.8" />
          <path d="M 50 85 C 44 72 48 60 52 52" strokeWidth="0.85" />
          <path d="M 60 66 C 54 54 62 44 68 38" strokeWidth="0.8" />
          <path d="M 75 48 C 70 38 78 30 84 24" strokeWidth="0.75" />

          {/* Branching twigs - Right side */}
          <path d="M 193 145 C 205 140 214 132 220 122" strokeWidth="0.9" />
          <path d="M 196 128 C 210 120 216 108 218 98" strokeWidth="0.8" />
          <path d="M 192 102 C 204 94 205 82 204 74" strokeWidth="0.8" />
          <path d="M 186 70 C 196 60 196 46 192 38" strokeWidth="0.85" />
          <path d="M 172 50 C 182 38 180 26 174 18" strokeWidth="0.8" />
          <path d="M 158 32 C 168 22 165 14 160 8" strokeWidth="0.75" />
          <path d="M 144 18 C 148 10 144 4 138 2" strokeWidth="0.7" />

          {/* Base delicate tendrils */}
          <path d="M 80 185 C 72 178 68 168 64 160" strokeWidth="0.8" />
          <path d="M 155 185 C 165 178 170 168 174 160" strokeWidth="0.8" />
          <path d="M 105 196 C 96 208 84 212 74 214" strokeWidth="0.7" />
          <path d="M 135 196 C 146 208 158 212 168 214" strokeWidth="0.7" />
        </g>

        {/* Small 5-petal wildflower blossoms with fine outlines & centers */}
        <g stroke={flowerStroke} strokeWidth="0.8" fill={flowerFill} fillOpacity={isGold ? '0.95' : '0.85'}>
          {/* Flower Left 1 */}
          <g transform="translate(26, 126) scale(0.9)">
            <circle cx="0" cy="-4" r="3.2" />
            <circle cx="4" cy="-1" r="3.2" />
            <circle cx="3" cy="4" r="3.2" />
            <circle cx="-3" cy="4" r="3.2" />
            <circle cx="-4" cy="-1" r="3.2" />
            <circle cx="0" cy="0" r="1.6" fill={flowerStroke} stroke="none" />
          </g>

          {/* Flower Left 2 */}
          <g transform="translate(52, 54) scale(0.85)">
            <circle cx="0" cy="-4" r="3" />
            <circle cx="4" cy="-1" r="3" />
            <circle cx="3" cy="4" r="3" />
            <circle cx="-3" cy="4" r="3" />
            <circle cx="-4" cy="-1" r="3" />
            <circle cx="0" cy="0" r="1.5" fill={flowerStroke} stroke="none" />
          </g>

          {/* Flower Left Lower */}
          <g transform="translate(68, 172) scale(0.8)">
            <circle cx="0" cy="-3.5" r="2.8" />
            <circle cx="3.5" cy="-1" r="2.8" />
            <circle cx="2.5" cy="3.5" r="2.8" />
            <circle cx="-2.5" cy="3.5" r="2.8" />
            <circle cx="-3.5" cy="-1" r="2.8" />
            <circle cx="0" cy="0" r="1.4" fill={flowerStroke} stroke="none" />
          </g>

          {/* Flower Right 1 */}
          <g transform="translate(216, 102) scale(0.95)">
            <circle cx="0" cy="-4" r="3.2" />
            <circle cx="4" cy="-1" r="3.2" />
            <circle cx="3" cy="4" r="3.2" />
            <circle cx="-3" cy="4" r="3.2" />
            <circle cx="-4" cy="-1" r="3.2" />
            <circle cx="0" cy="0" r="1.6" fill={flowerStroke} stroke="none" />
          </g>

          {/* Flower Right 2 */}
          <g transform="translate(192, 42) scale(0.85)">
            <circle cx="0" cy="-4" r="3" />
            <circle cx="4" cy="-1" r="3" />
            <circle cx="3" cy="4" r="3" />
            <circle cx="-3" cy="4" r="3" />
            <circle cx="-4" cy="-1" r="3" />
            <circle cx="0" cy="0" r="1.5" fill={flowerStroke} stroke="none" />
          </g>

          {/* Flower Right Lower */}
          <g transform="translate(170, 168) scale(0.8)">
            <circle cx="0" cy="-3.5" r="2.8" />
            <circle cx="3.5" cy="-1" r="2.8" />
            <circle cx="2.5" cy="3.5" r="2.8" />
            <circle cx="-2.5" cy="3.5" r="2.8" />
            <circle cx="-3.5" cy="-1" r="2.8" />
            <circle cx="0" cy="0" r="1.4" fill={flowerStroke} stroke="none" />
          </g>
        </g>

        {/* Wildflower leaves, pods, and florets along branches */}
        <g fill={leafColor} opacity={isGold ? '0.95' : '0.85'}>
          {/* Left side leaves/buds */}
          <path d="M 28 112 C 25 106 28 102 32 106 C 30 110 29 111 28 112 Z" />
          <path d="M 36 90 C 32 85 36 80 40 85 C 38 88 37 89 36 90 Z" />
          <path d="M 68 38 C 65 32 70 28 73 34 C 71 37 69 38 68 38 Z" />
          <path d="M 84 24 C 80 18 86 15 88 20 C 86 23 85 24 84 24 Z" />
          <circle cx="23" cy="132" r="1.8" />
          <circle cx="34" cy="98" r="1.8" />
          <circle cx="44" cy="74" r="1.9" />
          <circle cx="62" cy="48" r="1.8" />
          <circle cx="78" cy="32" r="1.7" />

          {/* Right side leaves/buds */}
          <path d="M 220 122 C 224 116 220 111 216 116 C 218 119 219 121 220 122 Z" />
          <path d="M 204 74 C 208 68 205 64 200 68 C 202 71 203 73 204 74 Z" />
          <path d="M 174 18 C 178 12 174 8 170 12 C 172 15 173 17 174 18 Z" />
          <path d="M 160 8 C 164 2 160 -1 156 3 C 158 6 159 7 160 8 Z" />
          <circle cx="218" cy="96" r="1.8" />
          <circle cx="204" cy="72" r="1.8" />
          <circle cx="192" cy="36" r="1.9" />
          <circle cx="172" cy="16" r="1.8" />
          <circle cx="140" cy="3" r="1.6" />
        </g>

        {/* Base small botanical sprig */}
        <g stroke={flowerStroke} strokeWidth="0.7" fill={leafColor} opacity="0.8">
          <circle cx="108" cy="188" r="1.3" />
          <circle cx="118" cy="192" r="1.4" />
          <circle cx="128" cy="189" r="1.3" />
          <circle cx="138" cy="194" r="1.4" />
        </g>

        {/* ========================================================================= */}
        {/* MONOGRAM INITIALS (Native SVG Vector Rendering - ZERO CSS Clipping)       */}
        {/* Full letter P with complete vertical stem & upper loop is 100% visible     */}
        {/* ========================================================================= */}
        <g
          id="monogram-initials"
          style={{
            filter: isGold
              ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.65)) drop-shadow(0 0 10px rgba(232,199,107,0.4))'
              : 'drop-shadow(0 1px 2px rgba(138,103,15,0.45))',
          }}
        >
          {/* Top Initial "H" - Spencerian Script Capital H */}
          <text
            x="120"
            y="76"
            textAnchor="middle"
            fontFamily="'Alex Brush', 'Great Vibes', cursive"
            fontSize="45"
            fontWeight="normal"
            fill="url(#monogramGold)"
          >
            H
          </text>

          {/* Middle Divider "- & -" */}
          <line
            x1="86"
            y1="102"
            x2="108"
            y2="102"
            stroke="url(#monogramGold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <text
            x="120"
            y="107"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic"
            fontSize="17"
            fontWeight="600"
            fill="url(#monogramGold)"
          >
            &amp;
          </text>
          <line
            x1="132"
            y1="102"
            x2="154"
            y2="102"
            stroke="url(#monogramGold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Bottom Initial "P" - Complete Spencerian Script Capital P with full vertical stem & loop */}
          <text
            x="120"
            y="156"
            textAnchor="middle"
            fontFamily="'Alex Brush', 'Great Vibes', cursive"
            fontSize="48"
            fontWeight="normal"
            fill="url(#monogramGold)"
          >
            P
          </text>
        </g>
      </svg>
    </div>
  );
};


/**
 * Vintage Golden Corner Flourish for luxury invitation borders
 */
export const VintageCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  color?: string;
}> = ({ position, size = 36, color = '#c59b27' }) => {
  const rotation = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  }[position];

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: rotation,
        transformOrigin: 'center center',
      }}
      className="pointer-events-none select-none"
    >
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path
          d="M 2 2 L 2 24 C 2 12 12 2 24 2 L 2 2 Z"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M 5 5 L 5 18 C 5 10 10 5 18 5 L 5 5 Z"
          stroke={color}
          strokeWidth="0.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="4" cy="4" r="1.5" fill={color} />
        <path
          d="M 8 16 C 8 12 12 8 16 8 C 14 11 11 14 8 16 Z"
          fill={color}
          opacity="0.75"
        />
      </svg>
    </div>
  );
};

/**
 * Vintage Golden Horizontal Flourish Divider
 */
export const GoldenFlourishDivider: React.FC<{
  className?: string;
  width?: string;
}> = ({ className = '', width = 'w-48 sm:w-64' }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c59b27]/60 to-[#c59b27]" />
      <svg
        viewBox="0 0 100 24"
        fill="none"
        className="w-16 h-4 sm:w-20 sm:h-5 text-[#c59b27]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 10 12 C 22 12 30 6 38 12 C 46 18 54 18 62 12 C 70 6 78 12 90 12"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M 20 12 C 30 16 40 8 50 12 C 60 16 70 8 80 12"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.6"
        />
        <circle cx="50" cy="12" r="2.8" fill="currentColor" />
        <circle cx="38" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
        <circle cx="62" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
        <circle cx="20" cy="12" r="1.2" fill="currentColor" opacity="0.6" />
        <circle cx="80" cy="12" r="1.2" fill="currentColor" opacity="0.6" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c59b27]/60 to-[#c59b27]" />
    </div>
  );
};

/**
 * Stylized "We" section with hairline gradient dividers
 */
export const WeSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c59b27]/70" />
      <span className="font-cormorant italic text-lg sm:text-xl text-[#8a670f] font-normal px-2 tracking-widest">
        We
      </span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c59b27]/70" />
    </div>
  );
};
