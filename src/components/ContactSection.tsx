import React, { useState } from 'react';
import { BRAND_INFO, SERVICES_LIST } from '../data/salonData';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Calendar, Sparkles, Navigation } from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: prefilledService || 'Hydra Facial',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Delaqua Beauty Salon!\n\nI would like to request an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Preferred Date: ${formData.date}\n- Preferred Time: ${formData.time}\n- Notes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-rose-400" /> Location & Booking
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Visit Us or <span className="gold-gradient-text">Book Appointment</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We look forward to welcoming you at our boutique salon in People's Colony No. 1, Faisalabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Info & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-5 shadow-xl">
              <h3 className="font-serif font-bold text-2xl text-white">Contact Information</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-950 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-zinc-400 mt-0.5 leading-relaxed">{BRAND_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-950 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone & WhatsApp</p>
                    <p className="text-zinc-400 mt-0.5">
                      <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:text-rose-300 underline">{BRAND_INFO.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-950 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Opening Hours</p>
                    <p className="text-zinc-400 mt-0.5">{BRAND_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact & Navigation Buttons */}
              <div className="pt-4 border-t border-zinc-800 grid grid-cols-3 gap-2">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="bg-zinc-950 hover:bg-zinc-800 text-zinc-200 text-xs font-medium py-2.5 px-2 rounded-xl border border-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Call</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon,%20I%20want%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-xs font-medium py-2.5 px-2 rounded-xl border border-emerald-800/60 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>

                <a
                  href={BRAND_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs font-medium py-2.5 px-2 rounded-xl border border-rose-800/60 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                  <span className="truncate">Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map with Overlay Directions */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl h-64 bg-zinc-900 group">
              <iframe
                title="Delaqua Beauty Salon Location Map"
                src={BRAND_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={BRAND_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-950/90 hover:bg-rose-950 text-rose-200 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-rose-500/40 backdrop-blur-md shadow-2xl flex items-center gap-1.5 transition-all transform hover:scale-105"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-400" />
                  <span>Open Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-zinc-900/90 p-6 sm:p-8 rounded-2xl border border-rose-900/40 shadow-2xl space-y-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">
                Book Your Appointment
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Fill out the details below to request your preferred date and time slot.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-zinc-950 p-6 rounded-xl border border-rose-900/50">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-serif font-bold text-2xl text-white">Appointment Request Received!</h4>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you <span className="text-rose-300 font-semibold">{formData.name}</span>! We have received your booking request for <span className="text-rose-300 font-semibold">{formData.service}</span> on <span className="text-rose-300 font-semibold">{formData.date}</span> at <span className="text-rose-300 font-semibold">{formData.time}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-6 py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Request directly to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto bg-zinc-900 text-zinc-400 hover:text-white text-xs px-5 py-3 rounded-full border border-zinc-800"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fatima Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0321 XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Select Service / Package *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                  >
                    <optgroup label="Popular Treatments">
                      <option value="Hydra Facial Package (Rs. 8,000)">Hydra Facial Package (Rs. 8,000)</option>
                      <option value="24K Gold Facial Deal (Rs. 5,000)">24K Gold Facial Deal (Rs. 5,000)</option>
                      <option value="Thalgo Marine Facial (Rs. 12,000)">Thalgo Marine Facial (Rs. 12,000)</option>
                      <option value="Keratin Treatment">Keratin Treatment</option>
                      <option value="Single Process Hair Dye with Blow Dry">Single Process Hair Dye with Blow Dry</option>
                      <option value="Signature Bridal Makeup">Signature Bridal Makeup</option>
                      <option value="Party HD Makeup">Party HD Makeup</option>
                      <option value="Skin Care Deal 1 (Rs. 2,500)">Skin Care Deal 1 (Rs. 2,500)</option>
                      <option value="Skin Care Deal 2 (Rs. 3,000)">Skin Care Deal 2 (Rs. 3,000)</option>
                      <option value="Wax Deal 3 (Rs. 2,500)">Wax Deal 3 (Rs. 2,500)</option>
                    </optgroup>
                    <optgroup label="All Services">
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.startingPrice})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Special Request or Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific skin concerns, hair length notes or requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm py-4 rounded-xl shadow-xl shadow-rose-950 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST APPOINTMENT</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
