import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface AppointmentSectionProps {
  onBookClick: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-zinc-950 border-t border-b border-rose-900/40">
      {/* Ambient Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/delaqua_boutique_facade_1786532043184.jpg"
          alt="DELAQUA Salon Ambience"
          className="w-full h-full object-cover object-center opacity-20 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950" />
        <div className="absolute inset-0 bg-radial-at-c from-rose-950/40 via-transparent to-zinc-950/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950 border border-rose-600/40 text-rose-300 text-xs font-bold uppercase tracking-widest shadow-xl">
          <Sparkles className="w-4 h-4 text-rose-400" /> Start Your Pampering Journey
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
          Ready for Your <span className="gold-gradient-text">Beauty Transformation?</span>
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book your appointment with Delaqua Beauty Salon today and let Signature By Asma bring out your radiant, confident self.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full border border-zinc-700 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-rose-400" />
            <span>Call Now: 0321 7664078</span>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full border border-emerald-700/60 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onBookClick}
            className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-2xl shadow-rose-950 border border-rose-400/30 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </section>
  );
};
