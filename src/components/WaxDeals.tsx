import React from 'react';
import { WAX_DEALS } from '../data/salonData';
import { Sparkles, Calendar, Check } from 'lucide-react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface WaxDealsProps {
  onBookClick: (dealName?: string) => void;
}

export const WaxDeals: React.FC<WaxDealsProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Hygienic Hair Removal
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            WAX <span className="gold-gradient-text">DEALS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Gentle, hygienic waxing using premium warm wax formulas for silky smooth skin.
          </p>
        </div>

        {/* 3 Wax Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WAX_DEALS.map((deal) => (
            <div
              key={deal.id}
              className="rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-rose-500/50 transition-all flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-rose-950/30 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={getImageUrl(deal.image || "/images/delaqua_waxing_deal_1786539087544.jpg")}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-rose-800/50 shadow-md">
                    {deal.badge}
                  </span>
                  <p className="font-serif font-bold text-lg text-rose-300 bg-zinc-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-rose-500/30">
                    {deal.price}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-white group-hover:text-rose-300 transition-colors">
                    {deal.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {deal.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-rose-950 text-rose-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-rose-400" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onBookClick(deal.title)}
                    className="w-full bg-zinc-900 hover:bg-rose-600 text-zinc-200 hover:text-white text-xs font-medium py-2.5 rounded-full border border-zinc-800 hover:border-rose-500/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Deal</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
