import React from 'react';
import { WHY_CHOOSE_US } from '../data/salonData';
import { Award, ShieldCheck, Sparkles, HeartHandshake, CalendarCheck, Crown } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    Award,
    ShieldCheck,
    Sparkles,
    Crown,
    HeartHandshake,
    CalendarCheck,
  ];

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-rose-400" /> The Delaqua Difference
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Why Choose <span className="gold-gradient-text">DELAQUA</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We hold ourselves to the highest standards of beauty craftsmanship, product purity, and client satisfaction.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 hover:bg-zinc-900 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-950 to-pink-950 text-rose-400 flex items-center justify-center border border-rose-800/40 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-serif font-bold text-xl text-white mt-4 group-hover:text-rose-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
