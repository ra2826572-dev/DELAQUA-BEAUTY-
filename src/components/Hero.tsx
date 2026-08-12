import React from 'react';
import { Sparkles, Calendar, ChevronDown, Star, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface HeroProps {
  onBookClick: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark & Rose Glow Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/delaqua_boutique_facade_1786532043184.jpg"
          alt="DELAQUA Beauty Salon Exterior"
          className="w-full h-full object-cover object-center scale-105 opacity-40 animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-rose-950/30 via-transparent to-zinc-950/90" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-10">
        {/* Brand Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-medium mb-6 shadow-xl backdrop-blur-md animate-fade-in">
          <Sparkles className="w-4 h-4 text-rose-400" />
          <span>Faisalabad's Premier Women's Luxury Salon & Spa</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
          <span className="text-amber-300 flex items-center gap-1 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> 4.6 (133 Reviews)
          </span>
        </div>

        {/* Main Brand Title */}
        <div className="mb-4 space-y-1">
          <p className="text-rose-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            {BRAND_INFO.brand}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-white drop-shadow-2xl">
            DELAQUA
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-rose-500" />
            <p className="text-rose-300 font-serif italic text-lg sm:text-2xl tracking-widest uppercase">
              BEAUTY SALON & SPA
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-rose-500" />
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-medium pt-1">
            {BRAND_INFO.tagline}
          </p>
        </div>

        {/* Headline & Supporting Text */}
        <h2 className="text-2xl sm:text-4xl font-serif text-pink-100 max-w-3xl mx-auto font-light leading-snug mt-6">
          “Your Beauty. Your Confidence. Your Signature.”
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
          Premium beauty, hair, skin, nails and spa services in the heart of Faisalabad.
          Experience luxury care customized by <span className="text-rose-300 font-medium">Signature By Asma</span>.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onBookClick()}
            className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl shadow-rose-900/50 border border-rose-400/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-rose-200" />
            <span>Book an Appointment</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full border border-zinc-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Key Highlights Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 pt-8 border-t border-zinc-800/80 text-zinc-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>Certified Stylists</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>Hygienic & Sterile</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>People's Colony No. 1</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Top Rated Salon</span>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 mt-10 text-zinc-400 hover:text-rose-400 text-xs transition-colors group"
        >
          <span>Discover More</span>
          <ChevronDown className="w-5 h-5 text-rose-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
