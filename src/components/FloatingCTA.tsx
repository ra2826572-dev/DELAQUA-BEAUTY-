import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export const FloatingCTA: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-zinc-900 border border-rose-500/40 text-rose-300 hover:text-white hover:bg-rose-950 flex items-center justify-center shadow-2xl transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call Button */}
      <a
        href={`tel:${BRAND_INFO.phoneRaw}`}
        className="pointer-events-auto p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-100 hover:text-white hover:bg-zinc-800 shadow-2xl flex items-center justify-center transition-all group"
        title="Call Delaqua Salon"
      >
        <Phone className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl shadow-emerald-950 flex items-center gap-2 transition-all transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Booking</span>
      </a>

    </div>
  );
};
