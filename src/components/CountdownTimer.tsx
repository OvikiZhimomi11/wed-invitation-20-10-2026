import React, { useState, useEffect } from 'react';

// Target date: Tuesday, October 20, 2026 at 10:00 A.M. IST (UTC+05:30)
const WEDDING_TARGET_TIMESTAMP = new Date('2026-10-20T10:00:00+05:30').getTime();

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeRemaining(): TimeRemaining {
  const now = Date.now();
  const diff = WEDDING_TARGET_TIMESTAMP - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
}

export const CountdownTimer: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'light',
}) => {
  const [time, setTime] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    // Initial run
    setTime(calculateTimeRemaining());
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isLight = theme === 'light';

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINS', value: time.minutes },
    { label: 'SECS', value: time.seconds },
  ];

  return (
    <div className="w-full my-3 sm:my-4 select-none">
      <div className="text-center mb-1.5 sm:mb-2">
        <span
          className={`font-cinzel text-[10px] sm:text-[11px] tracking-[0.25em] uppercase ${
            isLight ? 'text-[#8a670f]/90' : 'text-[#e8c76b]/90'
          }`}
        >
          Counting Down to the Blessed Day
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 max-w-xs mx-auto">
        {units.map((unit, index) => (
          <div
            key={unit.label}
            className={`flex flex-col items-center justify-center py-1.5 px-1 sm:py-2 rounded border transition-all ${
              isLight
                ? 'bg-amber-50/70 border-[#c59b27]/30 shadow-xs'
                : 'bg-[#071d23]/80 border-[#c59b27]/40 shadow-xs'
            }`}
          >
            <span
              className={`font-cinzel text-base sm:text-lg md:text-xl font-bold leading-none ${
                isLight ? 'text-[#8a670f]' : 'text-[#f5e4b7]'
              }`}
            >
              {String(unit.value).padStart(2, '0')}
            </span>
            <span
              className={`font-cinzel text-[8px] sm:text-[9px] tracking-widest mt-1 ${
                isLight ? 'text-stone-500' : 'text-[#e8c76b]/70'
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
