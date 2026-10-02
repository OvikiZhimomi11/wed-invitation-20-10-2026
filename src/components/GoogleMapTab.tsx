import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Clock, Calendar, Church } from 'lucide-react';
import { VintageCorner } from './Ornaments';

interface GoogleMapTabProps {
  onBackToInvitation: () => void;
}

export const GoogleMapTab: React.FC<GoogleMapTabProps> = ({ onBackToInvitation }) => {
  const [copied, setCopied] = useState(false);

  const churchName = 'Satakha Town Baptist Church';
  const fullAddress = 'Satakha Town Baptist Church, Satakha, Zunheboto District, Nagaland 798620';
  const coordinates = '26.0125° N, 94.4856° E';
  const googleMapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=26.0125,94.4856';
  const googleMapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Satakha+Town+Baptist+Church+Nagaland';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto bg-[#0c3843] text-stone-100 shadow-2xl rounded-sm transition-all duration-300 overflow-hidden border border-[#c59b27]/40 p-4 sm:p-6"
      style={{
        boxShadow:
          '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(197, 155, 39, 0.2), inset 0 0 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Delicate gold frame */}
      <div className="absolute inset-1.5 sm:inset-2.5 border border-[#c59b27]/30 pointer-events-none rounded-xs" />
      <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 pointer-events-none">
        <VintageCorner position="top-left" size={24} color="#e8c76b" />
      </div>
      <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 pointer-events-none">
        <VintageCorner position="top-right" size={24} color="#e8c76b" />
      </div>
      <div className="absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 pointer-events-none">
        <VintageCorner position="bottom-left" size={24} color="#e8c76b" />
      </div>
      <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 pointer-events-none">
        <VintageCorner position="bottom-right" size={24} color="#e8c76b" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {/* Header */}
        <div className="text-center pt-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Church className="w-5 h-5 text-[#e8c76b]" />
            <h2 className="font-cinzel text-base sm:text-xl font-bold tracking-wider text-[#f5e4b7] uppercase">
              Wedding Venue Location
            </h2>
          </div>
          <p className="font-cormorant italic text-sm text-[#a3c3cb]">
            Join Hikety &amp; Wilson at the sacred altar of Satakha
          </p>
        </div>

        {/* Live Interactive Google Map Embed (Zero image asset dependencies) */}
        <div className="relative w-full h-64 sm:h-72 rounded border border-[#c59b27]/50 overflow-hidden shadow-inner bg-[#071d23]">
          <iframe
            title="Satakha Town Baptist Church Google Map Location"
            src="https://maps.google.com/maps?q=Satakha+Town+Baptist+Church,+Zunheboto,+Nagaland&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter contrast-105"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Subtle frame sheen */}
          <div className="absolute inset-0 pointer-events-none border border-[#c59b27]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Location Details Card */}
        <div className="bg-[#071d23]/80 rounded p-3.5 border border-[#c59b27]/30 flex flex-col gap-2.5 text-xs sm:text-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#e8c76b] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-cinzel font-semibold text-[#f5e4b7]">
                  {churchName}
                </h3>
                <p className="font-cormorant text-stone-300 text-xs sm:text-sm mt-0.5">
                  Satakha, Zunheboto District, Nagaland
                </p>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#e8c76b]/80 font-mono">
                  <span>Coordinates: {coordinates}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              type="button"
              className="shrink-0 p-1.5 rounded bg-[#0c3843] hover:bg-[#14505f] border border-[#c59b27]/40 text-[#f5e4b7] flex items-center gap-1 text-[11px] font-cinzel transition-all cursor-pointer"
              title="Copy venue address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#e8c76b]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="h-[1px] w-full bg-[#c59b27]/20" />

          {/* Schedule Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-300 text-[11.5px]">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#e8c76b]" />
              <span>Tuesday, October 20, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#e8c76b]" />
              <span>10:00 A.M. IST (Holy Matrimony)</span>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          {/* Direct "Get Directions" button linking to Google Maps navigation for guests */}
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59b27] hover:brightness-110 text-[#071d23] text-xs font-cinzel font-bold tracking-wider rounded shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer group"
          >
            <Navigation className="w-4 h-4 text-[#071d23] group-hover:rotate-12 transition-transform" />
            <span>Get Directions in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#071d23]" />
          </a>

          <a
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 bg-[#071d23] hover:bg-[#0c3843] text-[#f5e4b7] text-xs font-cinzel font-semibold tracking-wider rounded border border-[#c59b27]/50 shadow flex items-center justify-center gap-1.5 transition-all"
          >
            <span>View Place in Maps</span>
          </a>
        </div>

        {/* Return back to invitation */}
        <div className="text-center pt-1 pb-1">
          <button
            onClick={onBackToInvitation}
            type="button"
            className="text-xs font-cinzel tracking-wider text-[#e8c76b] hover:text-[#fff3d1] underline underline-offset-4 transition-colors cursor-pointer"
          >
            ← Return to Inside Invitation Card
          </button>
        </div>
      </div>
    </div>
  );
};
