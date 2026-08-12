import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { Sparkles, Eye, X, Calendar, Camera } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  onBookClick: (serviceName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onBookClick }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'nailbar', label: 'Nail Bar' },
    { id: 'spa', label: 'Facial & Spa' },
    { id: 'hair', label: 'Hair Stations' },
    { id: 'makeup', label: 'Bridal Studio' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeFilter === 'all' || item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-rose-400" /> Salon Showcase & Ambience
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            DELAQUA <span className="gold-gradient-text">GALLERY</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Take a visual tour of our boutique salon architecture, nail lounge, facial suites, and signature makeovers.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-950 border border-rose-400/30'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-rose-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-rose-950/40"
            >
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Overlay with Zoom & "View Image" */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-rose-950/90 text-rose-300 border border-rose-500/30">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-rose-300 font-semibold underline">
                    View Full Image & Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-zinc-900 border border-rose-900/50 rounded-2xl overflow-hidden shadow-2xl space-y-4">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/80 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-8 h-80 sm:h-96 md:h-[450px] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:col-span-4 p-6 flex flex-col justify-between bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="space-y-3">
                  <span className="text-xs uppercase font-bold text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/50">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed pt-2">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800 space-y-3">
                  <button
                    onClick={() => {
                      const title = selectedImage.title;
                      setSelectedImage(null);
                      onBookClick(title);
                    }}
                    className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm py-3 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment for This Look</span>
                  </button>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs py-2 rounded-full border border-zinc-800"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
