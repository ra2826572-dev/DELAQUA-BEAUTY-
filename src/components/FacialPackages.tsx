import React from 'react';
import { FACIAL_PACKAGES } from '../data/salonData';
import { Sparkles, CheckCircle2, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface FacialPackagesProps {
  onBookClick: (packageName?: string) => void;
}

export const FacialPackages: React.FC<FacialPackagesProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-zinc-900/40 relative overflow-hidden border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Clinical & Luxury Skin Science
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            LUXURY <span className="gold-gradient-text">FACIAL PACKAGES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Revitalize your skin with our signature clinical facial treatments combined with complimentary pampering.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACIAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl bg-zinc-950 border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl hover:shadow-rose-950/40 ${
                pkg.popular
                  ? 'border-rose-500 ring-2 ring-rose-500/30 scale-102'
                  : 'border-zinc-800 hover:border-rose-500/40'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5 shadow-md">
                  ★ Most Requested Clinical Treatment ★
                </div>
              )}

              {/* Package Image Banner */}
              <div className="relative h-44 overflow-hidden bg-zinc-900">
                <img
                  src={getImageUrl(pkg.image)}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-rose-950/90 text-rose-300 text-xs font-semibold px-3 py-1 rounded-full border border-rose-800/50">
                  {pkg.badge}
                </span>
              </div>

              {/* Package Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif font-bold text-2xl text-white">
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="font-serif font-bold text-3xl text-rose-400 mt-1">
                    {pkg.price}
                  </p>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-6 pt-4 border-t border-zinc-900 space-y-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-rose-300">
                      Package Includes:
                    </p>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onBookClick(pkg.title)}
                  className={`w-full py-3 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-lg shadow-rose-950'
                      : 'bg-zinc-900 hover:bg-rose-600 text-zinc-200 hover:text-white border border-zinc-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
