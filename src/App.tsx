/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OpeningHero } from './components/OpeningHero';
import { NavigationControls, ActiveTab } from './components/NavigationControls';
import { CardCover } from './components/CardCover';
import { InsideInvitationCard } from './components/InsideInvitationCard';
import { GoogleMapTab } from './components/GoogleMapTab';
import { RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [screen, setScreen] = useState<'hero' | 'invitation'>('hero');
  const [activeTab, setActiveTab] = useState<ActiveTab>('cover');
  const [isFlipped, setIsFlipped] = useState(true);

  // Transition from Hero to Cover first
  const handleOpenCard = () => {
    setScreen('invitation');
    setActiveTab('cover');
    setIsFlipped(true);
  };

  // Tab selection handler
  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'cover') {
      setIsFlipped(true);
    } else if (tab === 'invitation') {
      setIsFlipped(false);
    }
  };

  // Flip toggle
  const handleToggleFlip = () => {
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    setActiveTab(nextFlipped ? 'cover' : 'invitation');
  };

  const handleConfettiTrigger = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f5e4b7', '#d4af37', '#c59b27', '#e8c76b', '#ffffff'],
    });
  };

  return (
    <div className="min-h-screen bg-[#071d23] text-stone-100 flex flex-col font-cormorant relative selection:bg-[#c59b27]/30 selection:text-[#fbf5d8]">
      {/* Screen 1: Hero View */}
      {screen === 'hero' ? (
        <OpeningHero onOpenCard={handleOpenCard} />
      ) : (
        /* Screen 2: Interactive Wedding Card & Tabs */
        <div className="min-h-screen flex flex-col justify-between relative pb-12 pt-3">
          {/* Subtle Royal Teal Ambient Glow in background */}
          <div
            className="fixed inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(circle at 50% 30%, #0e3b46 0%, #0c3843 40%, #071d23 85%)',
            }}
          />

          {/* Top Floating Navigation Controls */}
          <div className="relative z-40 mb-3 sm:mb-5">
            <NavigationControls
              activeTab={activeTab}
              onSelectTab={handleSelectTab}
              onBackToHero={() => setScreen('hero')}
              onToggleFlip={handleToggleFlip}
            />
          </div>

          {/* Center Main Stage */}
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-3 sm:px-4 py-2 w-full max-w-4xl mx-auto">
            {activeTab === 'map' ? (
              /* Dedicated Live Google Map Tab */
              <div className="w-full flex justify-center animate-fade-in">
                <GoogleMapTab onBackToInvitation={() => handleSelectTab('invitation')} />
              </div>
            ) : (
              /* 3D Flip Card Container */
              <div className="w-full flex flex-col items-center">
                {/* 3D Card Scene */}
                <div className="w-full max-w-[440px] perspective-1500 my-auto">
                  <div
                    className="relative w-full aspect-[1/1.52] transform-style-3d transition-transform duration-700 ease-in-out"
                    style={{
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front Face: Inside Invitation Card */}
                    <div
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{
                        transform: 'rotateY(0deg)',
                        pointerEvents: isFlipped ? 'none' : 'auto',
                      }}
                    >
                      <InsideInvitationCard
                        onOpenMap={() => setActiveTab('map')}
                        onFlipToCover={() => {
                          setIsFlipped(true);
                          setActiveTab('cover');
                        }}
                        className="h-full"
                      />
                    </div>

                    {/* Back Face: Card Cover */}
                    <div
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{
                        transform: 'rotateY(180deg)',
                        pointerEvents: isFlipped ? 'auto' : 'none',
                      }}
                    >
                      <CardCover
                        onOpenInside={() => {
                          setIsFlipped(false);
                          setActiveTab('invitation');
                          handleConfettiTrigger();
                        }}
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
