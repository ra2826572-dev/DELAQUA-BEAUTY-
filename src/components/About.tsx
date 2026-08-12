import React from 'react';
import { Users, Sparkles, HeartHandshake, CheckCircle2, MapPin, Award } from 'lucide-react';
import { BRAND_INFO, WHY_CHOOSE_US } from '../data/salonData';

export const About: React.FC = () => {
  const featureCards = [
    {
      icon: Users,
      title: 'Professional Team',
      desc: 'Experienced beauty professionals dedicated to quality service and international beauty standards.'
    },
    {
      icon: Sparkles,
      title: 'Premium Experience',
      desc: 'A luxurious, comfortable and relaxing salon environment designed for your ultimate peace.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Care',
      desc: 'Services selected according to each client’s individual skin type, hair texture and aesthetic goals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Salon Imagery Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-rose-900/40 shadow-2xl group">
              <img
                src="/src/assets/images/delaqua_boutique_facade_1786532043184.jpg"
                alt="DELAQUA Boutique Salon Exterior"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-rose-500/30 flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-white font-serif font-bold text-lg sm:text-xl tracking-wide">
                    DELAQUA Boutique Salon
                  </p>
                  <p className="text-zinc-300 text-xs sm:text-sm flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" /> 50–A Nizami Street, People’s Colony No. 1, Faisalabad
                  </p>
                </div>
                <div className="bg-rose-900/90 text-rose-200 text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-rose-400/40 font-semibold shrink-0 shadow-lg">
                  Google 4.6 ★
                </div>
              </div>
            </div>

            {/* Sub-grid of storefront and interior photos */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-md group relative">
                <img
                  src="/src/assets/images/delaqua_asma_storefront_1786532062793.jpg"
                  alt="DELAQUA BY ASMA Salon & Spa"
                  className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1.5 left-2 text-[10px] bg-zinc-950/80 text-rose-300 px-1.5 py-0.5 rounded border border-rose-900/50">Facade Night View</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-md group relative">
                <img
                  src="/src/assets/images/delaqua_nail_bar_1786530847103.jpg"
                  alt="DELAQUA Nail Bar"
                  className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1.5 left-2 text-[10px] bg-zinc-950/80 text-rose-300 px-1.5 py-0.5 rounded border border-rose-900/50">Luxury Nail Bar</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-md group relative">
                <img
                  src="/src/assets/images/delaqua_facial_spa_1786530831961.jpg"
                  alt="DELAQUA Facial Spa Room"
                  className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-1.5 left-2 text-[10px] bg-zinc-950/80 text-rose-300 px-1.5 py-0.5 rounded border border-rose-900/50">Facial Spa Room</span>
              </div>
            </div>
          </div>

          {/* Right Column - Brand Story & Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Welcome To Delaqua
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                About <span className="gold-gradient-text">DELAQUA Beauty Salon</span>
              </h2>
              <p className="text-rose-300 font-serif italic text-lg">{BRAND_INFO.tagline}</p>
            </div>

            {/* Core Quote Box */}
            <blockquote className="p-5 rounded-2xl bg-zinc-900/80 border-l-4 border-rose-500 border-zinc-800 text-zinc-200 text-sm sm:text-base italic leading-relaxed shadow-lg">
              “At Delaqua Beauty Salon, we believe beauty is personal. Our professional team combines modern beauty techniques, premium products and personalized care to create an experience that makes every client feel confident and beautiful.”
            </blockquote>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Located in the prestigious People's Colony No. 1, Faisalabad, DELAQUA by Asma has earned a reputation as a trusted sanctuary for women seeking high-end bridal makeups, clinical hydra facials, keratin treatments, hair colors, and spa pampering.
            </p>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {featureCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/40 transition-all hover:bg-zinc-900 space-y-2 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-rose-950/80 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-white text-base group-hover:text-rose-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Guarantees */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>100% Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>Hygienic & Sterilized Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>Private Women's Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" />
                <span>Expert Asma Signature Care</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
