import React, { useState } from 'react';
import { Sparkles, Check, Scissors, Gift, Calendar, ArrowRight } from 'lucide-react';
import { HAIR_DYE_OPTIONS, KERATIN_OPTIONS, SKIN_CARE_DEALS } from '../data/salonData';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface FeaturedDealsProps {
  onBookClick: (dealName?: string) => void;
}

export const FeaturedDeals: React.FC<FeaturedDealsProps> = ({ onBookClick }) => {
  // Hair Dye Selection State
  const [hairDyeLength, setHairDyeLength] = useState<number>(0);
  const [hairDyeThickness, setHairDyeThickness] = useState<'thin' | 'thick'>('thin');

  // Keratin Selection State
  const [keratinLength, setKeratinLength] = useState<number>(0);
  const [keratinThickness, setKeratinThickness] = useState<'thin' | 'thick'>('thin');

  const selectedHairDye = HAIR_DYE_OPTIONS[hairDyeLength];
  const hairDyePrice = hairDyeThickness === 'thin' ? selectedHairDye.thinPrice : selectedHairDye.thickPrice;

  const selectedKeratin = KERATIN_OPTIONS[keratinLength];
  const keratinPrice = keratinThickness === 'thin' ? selectedKeratin.thinPrice : selectedKeratin.thickPrice;

  return (
    <section id="packages" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950 border border-rose-600/40 text-rose-300 text-xs font-bold uppercase tracking-widest shadow-xl">
            <Gift className="w-4 h-4 text-rose-400" /> Exclusive Promotions
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            WINTER <span className="gold-gradient-text">DEALS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Limited-time luxury beauty packages meticulously created to provide maximum pampering and exceptional value.
          </p>
        </div>

        {/* Section 1: Hair Deals (Single Process Hair Dye & Keratin) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-rose-950/80 text-rose-400 border border-rose-800/40">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">Hair Transformations</h3>
              <p className="text-zinc-400 text-xs">Select your hair length and density to see exact pricing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Hair Dye Deal Card */}
            <div className="rounded-2xl overflow-hidden bg-zinc-900/90 border border-rose-900/40 hover:border-rose-500/50 transition-all shadow-xl flex flex-col justify-between group">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={getImageUrl("/images/delaqua_hair_dye_deal_1786539058569.jpg")}
                  alt="Single Process Hair Dye"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-rose-800/50 shadow-md">
                    Hair Color Special
                  </span>
                  <span className="text-xs text-zinc-200 bg-zinc-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-zinc-800">
                    Includes Blow Dry
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-2xl text-white">
                    Single Process Hair Dye
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1">
                    Rich, vibrant single-tone global hair dye with nourishing shine gloss and professional blow dry.
                  </p>

                  {/* Length Selector */}
                  <div className="mt-6 space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Select Hair Length:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {HAIR_DYE_OPTIONS.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => setHairDyeLength(idx)}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                            hairDyeLength === idx
                              ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                          }`}
                        >
                          {opt.length}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Thickness Selector */}
                  <div className="mt-4 space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Select Hair Density:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setHairDyeThickness('thin')}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          hairDyeThickness === 'thin'
                            ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        Thin Hair
                      </button>
                      <button
                        onClick={() => setHairDyeThickness('thick')}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          hairDyeThickness === 'thick'
                            ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        Thick Hair
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price & Booking Button */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-medium">Selected Deal Price</p>
                    <p className="font-serif font-bold text-3xl text-rose-400">
                      {hairDyePrice}
                    </p>
                  </div>
                  <button
                    onClick={() => onBookClick(`Single Process Hair Dye (${selectedHairDye.length} - ${hairDyeThickness})`)}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Deal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Keratin Deal Card */}
            <div className="rounded-2xl overflow-hidden bg-zinc-900/90 border border-rose-900/40 hover:border-rose-500/50 transition-all shadow-xl flex flex-col justify-between group">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={getImageUrl("/images/delaqua_keratin_deal_1786539073271.jpg")}
                  alt="Keratin Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-rose-800/50 shadow-md">
                    Keratin Smoothing
                  </span>
                  <span className="text-xs text-zinc-200 bg-zinc-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-zinc-800">
                    Silky & Frizz-Free
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-2xl text-white">
                    Keratin Treatment
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1">
                    Reconstructs damaged hair fiber, eliminates frizz, and adds long-lasting sleek shine.
                  </p>

                  {/* Length Selector */}
                  <div className="mt-6 space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Select Hair Length:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {KERATIN_OPTIONS.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => setKeratinLength(idx)}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                            keratinLength === idx
                              ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                          }`}
                        >
                          {opt.length}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Thickness Selector */}
                  <div className="mt-4 space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Select Hair Density:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setKeratinThickness('thin')}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          keratinThickness === 'thin'
                            ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        Thin Hair
                      </button>
                      <button
                        onClick={() => setKeratinThickness('thick')}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          keratinThickness === 'thick'
                            ? 'bg-rose-950 text-rose-300 border-rose-500 font-semibold'
                            : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        Thick Hair
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price & Booking Button */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-medium">Selected Keratin Price</p>
                    <p className="font-serif font-bold text-3xl text-rose-400">
                      {keratinPrice}
                    </p>
                  </div>
                  <button
                    onClick={() => onBookClick(`Keratin Treatment (${selectedKeratin.length} - ${keratinThickness})`)}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Deal</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Skin Care Deals (Deal 1 & Deal 2) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-rose-950/80 text-rose-400 border border-rose-800/40">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">Skin Care & Pampering Deals</h3>
              <p className="text-zinc-400 text-xs">Complete head-to-toe facial and Mani/Pedi bundles</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKIN_CARE_DEALS.map((deal) => (
              <div
                key={deal.id}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-rose-500/50 transition-all shadow-xl flex flex-col justify-between space-y-6 relative group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-950 px-3 py-1 rounded-full border border-rose-800/50">
                      {deal.badge}
                    </span>
                    <span className="font-serif font-bold text-3xl text-rose-400">
                      {deal.price}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-2xl text-white mt-4">
                    {deal.title}
                  </h4>

                  {/* Feature List */}
                  <ul className="mt-5 space-y-2.5">
                    {deal.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-rose-400" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">Full Head-to-Toe Care</span>
                  <button
                    onClick={() => onBookClick(deal.title)}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
