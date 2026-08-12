import React, { useState } from 'react';
import { Sparkles, Calculator, Check, MessageCircle, Calendar, Plus, RefreshCw } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface CustomDealCalculatorProps {
  onBookClick: (customPackageDetails?: string) => void;
}

interface SelectableItem {
  id: string;
  name: string;
  category: string;
  priceNum: number;
  priceText: string;
}

const CUSTOM_ITEMS: SelectableItem[] = [
  { id: 'c1', name: 'Fruit Glow Facial', category: 'Facial', priceNum: 2500, priceText: 'Rs. 2,500' },
  { id: 'c2', name: 'French Whitening Facial', category: 'Facial', priceNum: 3000, priceText: 'Rs. 3,000' },
  { id: 'c3', name: '24K Gold Facial', category: 'Facial', priceNum: 5000, priceText: 'Rs. 5,000' },
  { id: 'c4', name: 'Hydra Facial', category: 'Facial', priceNum: 8000, priceText: 'Rs. 8,000' },
  { id: 'c5', name: 'Diamond Glow Mani & Pedi', category: 'Nails', priceNum: 2500, priceText: 'Rs. 2,500' },
  { id: 'c6', name: 'Hair Cut & Blow Dry', category: 'Hair', priceNum: 2000, priceText: 'Rs. 2,000' },
  { id: 'c7', name: 'Single Hair Color (Shoulder)', category: 'Hair', priceNum: 6500, priceText: 'Rs. 6,500' },
  { id: 'c8', name: 'Keratin Treatment (Shoulder)', category: 'Hair', priceNum: 10000, priceText: 'Rs. 10,000' },
  { id: 'c9', name: 'Half Arms & Legs Wax', category: 'Waxing', priceNum: 1400, priceText: 'Rs. 1,400' },
  { id: 'c10', name: 'Full Body Wax Combo', category: 'Waxing', priceNum: 2500, priceText: 'Rs. 2,500' },
  { id: 'c11', name: 'Party HD Makeup', category: 'Makeup', priceNum: 12000, priceText: 'Rs. 12,000' },
  { id: 'c12', name: 'Signature Bridal Makeup', category: 'Makeup', priceNum: 3500, priceText: 'Rs. 35,000' },
];

export const CustomDealCalculator: React.FC<CustomDealCalculatorProps> = ({ onBookClick }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['c1', 'c5']);

  const toggleItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedItems = CUSTOM_ITEMS.filter((item) => selectedIds.includes(item.id));
  const subtotal = selectedItems.reduce((acc, item) => acc + item.priceNum, 0);
  const isComboDiscount = selectedItems.length >= 3;
  const discountAmount = isComboDiscount ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  const packageDescription = selectedItems.map((i) => i.name).join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hello Delaqua Salon! I created a Custom Beauty Package:\n\nServices: ${packageDescription}\nTotal Price: Rs. ${finalTotal.toLocaleString()}/-\n\nI would like to book an appointment for this package.`
  );

  return (
    <section className="py-20 bg-zinc-900/80 relative overflow-hidden border-t border-b border-rose-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950 border border-rose-800/50 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-rose-400" /> Interactive Package Builder
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Build Your <span className="gold-gradient-text">Custom Beauty Package</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            Select 3 or more services to unlock an instant <span className="text-rose-400 font-bold">10% Combo Discount</span> on your pampering session!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Picker Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CUSTOM_ITEMS.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg shadow-rose-950/40'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase font-semibold text-rose-400 bg-zinc-900 px-2 py-0.5 rounded border border-rose-950">
                      {item.category}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors ${
                        isSelected ? 'bg-rose-500 text-white' : 'bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="font-serif font-bold text-sm text-white">{item.name}</p>
                    <p className="text-xs text-rose-300 font-semibold mt-0.5">{item.priceText}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Package Summary Box */}
          <div className="lg:col-span-4 bg-zinc-950 p-6 rounded-2xl border border-rose-900/50 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="font-serif font-bold text-xl text-white">Your Custom Package</h3>
              <button
                onClick={() => setSelectedIds([])}
                className="text-xs text-zinc-500 hover:text-rose-400 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {selectedItems.length === 0 ? (
              <p className="text-xs text-zinc-500 text-center py-6">
                Click services on the left to create your personalized package.
              </p>
            ) : (
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs text-zinc-300 py-1 border-b border-zinc-900">
                    <span className="truncate pr-2">{item.name}</span>
                    <span className="font-semibold text-white">{item.priceText}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Calculations */}
            <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal ({selectedItems.length} items):</span>
                <span>Rs. {subtotal.toLocaleString()}/-</span>
              </div>

              {isComboDiscount && (
                <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded border border-emerald-800/40">
                  <span>10% Combo Special Discount:</span>
                  <span>- Rs. {discountAmount.toLocaleString()}/-</span>
                </div>
              )}

              {!isComboDiscount && selectedItems.length > 0 && (
                <p className="text-[11px] text-amber-400 italic">
                  💡 Add {3 - selectedItems.length} more service(s) to get 10% OFF!
                </p>
              )}

              <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-zinc-800">
                <span>Estimated Total:</span>
                <span className="text-rose-400 text-xl">Rs. {finalTotal.toLocaleString()}/-</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onBookClick(`Custom Package (${packageDescription}) - Rs. ${finalTotal}`)}
                disabled={selectedItems.length === 0}
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm py-3 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Custom Package</span>
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-medium text-xs sm:text-sm py-2.5 rounded-full border border-emerald-800/60 transition-all flex items-center justify-center gap-2 ${
                  selectedItems.length === 0 ? 'pointer-events-none opacity-50' : ''
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
