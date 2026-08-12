import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/salonData';
import { Sparkles, Search, ArrowRight, Tag, Scissors, Sparkle, Heart, Eye } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onBookClick: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair' },
    { id: 'skin', label: 'Skin & Facial' },
    { id: 'nails', label: 'Nails' },
    { id: 'waxing', label: 'Waxing' },
    { id: 'makeup', label: 'Makeup' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-zinc-900/60 relative overflow-hidden border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/50 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Signature Services & Treatments
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Exquisite Beauty & Spa Menu
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            From precision haircuts and clinical facials to luxury nail bar treatments and signature bridal transformations.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-950 border border-rose-400/30'
                    : 'bg-zinc-950/80 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs rounded-full pl-9 pr-4 py-2 focus:outline-none focus:border-rose-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-zinc-950/40 rounded-2xl border border-zinc-800 text-zinc-400">
            <p className="text-base font-medium">No services match your search criteria.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-rose-400 underline hover:text-rose-300"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-rose-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-950/30 flex flex-col"
              >
                {/* Service Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-900">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Popular Badge */}
                  {service.popular && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg border border-rose-300/30">
                      Popular Choice
                    </span>
                  )}

                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-rose-300 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border border-rose-900/40">
                    {service.category}
                  </span>
                </div>

                {/* Service Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-rose-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Price & Booking Button */}
                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 font-medium">Starting From</p>
                      <p className="font-serif font-bold text-lg text-rose-400">
                        {service.startingPrice}
                      </p>
                    </div>

                    <button
                      onClick={() => onBookClick(service.name)}
                      className="bg-zinc-900 hover:bg-rose-600 text-zinc-200 hover:text-white text-xs font-medium px-4 py-2 rounded-full border border-zinc-800 hover:border-rose-500/50 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
