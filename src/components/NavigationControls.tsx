import React from 'react';
import { ArrowLeft, MapPin, MailOpen, BookOpen } from 'lucide-react';

export type ActiveTab = 'cover' | 'invitation' | 'map';

interface NavigationControlsProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onBackToHero: () => void;
  onToggleFlip?: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  activeTab,
  onSelectTab,
  onBackToHero,
}) => {
  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full max-w-xl mx-auto px-2 sm:px-3 select-none">
      <div className="flex items-center justify-between gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-[#071d23]/90 backdrop-blur-md border border-[#c59b27]/40 shadow-xl shadow-[#041216]/50">
        {/* Back Button */}
        <button
          onClick={onBackToHero}
          type="button"
          className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 sm:px-3 rounded-full text-xs font-cinzel text-[#e8c76b] hover:text-[#fff3d1] hover:bg-[#0c3843]/80 transition-all shrink-0 cursor-pointer"
          title="Return to home screen"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline text-xs">Back</span>
        </button>

        {/* Center Three Tab Toggles: [ Invitation ] | [ Google Map 📍 ] | [ Cover ] */}
        <div className="flex items-center gap-0.5 sm:gap-1 bg-[#041216]/70 p-0.5 sm:p-1 rounded-full border border-[#c59b27]/25 overflow-hidden">
          {/* Invitation Tab */}
          <button
            onClick={() => onSelectTab('invitation')}
            type="button"
            className={`flex items-center gap-1 sm:gap-1.5 py-1 sm:py-1.5 px-2 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-cinzel font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'invitation'
                ? 'bg-gradient-to-r from-[#c59b27] via-[#e8c76b] to-[#c59b27] text-[#071d23] font-bold shadow-xs'
                : 'text-stone-300 hover:text-[#f5e4b7]'
            }`}
          >
            <MailOpen className="w-3 h-3 shrink-0" />
            <span>Invitation</span>
          </button>

          {/* Google Map Tab */}
          <button
            onClick={() => onSelectTab('map')}
            type="button"
            className={`flex items-center gap-1 sm:gap-1.5 py-1 sm:py-1.5 px-2 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-cinzel font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'map'
                ? 'bg-gradient-to-r from-[#c59b27] via-[#e8c76b] to-[#c59b27] text-[#071d23] font-bold shadow-xs'
                : 'text-stone-300 hover:text-[#f5e4b7]'
            }`}
          >
            <MapPin className="w-3 h-3 shrink-0" />
            <span>
              <span className="hidden sm:inline">Google </span>Map 📍
            </span>
          </button>

          {/* Cover Tab */}
          <button
            onClick={() => onSelectTab('cover')}
            type="button"
            className={`flex items-center gap-1 sm:gap-1.5 py-1 sm:py-1.5 px-2 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-cinzel font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'cover'
                ? 'bg-gradient-to-r from-[#c59b27] via-[#e8c76b] to-[#c59b27] text-[#071d23] font-bold shadow-xs'
                : 'text-stone-300 hover:text-[#f5e4b7]'
            }`}
          >
            <BookOpen className="w-3 h-3 shrink-0" />
            <span>Cover</span>
          </button>
        </div>
      </div>
    </header>
  );
};
