import React from 'react';
import { BRAND_INFO } from '../data/salonData';
import { MessageCircle, MapPin, Phone, Instagram, Facebook, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-rose-950/60 text-zinc-400 text-xs sm:text-sm pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-600 via-pink-600 to-rose-950 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg border border-rose-400/30">
                D
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
                  DELAQUA
                </h3>
                <p className="text-xs text-rose-400 font-medium tracking-widest uppercase">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Faisalabad’s sanctuary for luxury hair, skin, nails, waxing and signature bridal pampering. Combining international beauty care with personalized attention.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 hover:bg-rose-950 text-zinc-300 hover:text-rose-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 hover:bg-rose-950 text-zinc-300 hover:text-rose-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-950 text-zinc-300 hover:text-emerald-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-rose-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-300 transition-colors">About Delaqua</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">Services & Menu</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-rose-300 transition-colors">Winter Deals & Packages</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-300 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-rose-300 transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-300 transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Salon Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Faisalabad Salon</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <a href={BRAND_INFO.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose-300 transition-colors">
                  {BRAND_INFO.address}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:text-rose-300">{BRAND_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Mon-Sun: 11:00 AM – 8:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Delaqua Beauty Salon. All Rights Reserved.</p>
          <p className="text-[11px] text-zinc-500">
            Delaqua by Asma — Signature By Asma | People's Colony No. 1, Faisalabad
          </p>
        </div>
      </div>
    </footer>
  );
};
