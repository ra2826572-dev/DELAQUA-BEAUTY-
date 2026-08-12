import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface NavbarProps {
  onBookClick: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'packages', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-zinc-950 border-b border-rose-950/40 text-xs py-2 px-6 text-zinc-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${BRAND_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-rose-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <a href={BRAND_INFO.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-400 hover:text-rose-300 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>50-A Nizami St, People's Colony No. 1, Faisalabad</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Mon-Sun: 11:00 AM – 8:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-rose-950/80 border border-rose-500/30 text-rose-300 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-rose-400" /> Google Rating 4.6 ★ ({BRAND_INFO.totalReviews} Reviews)
            </span>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon,%20I%20want%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-rose-900/30 shadow-xl py-3'
            : 'bg-gradient-to-b from-zinc-950/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-600 via-pink-600 to-rose-950 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg border border-rose-400/30 group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-rose-300 transition-colors">
                DELAQUA
              </span>
              <span className="text-[10px] tracking-widest text-rose-400 uppercase font-medium">
                Signature By Asma
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-md ${
                  activeSection === link.id
                    ? 'text-rose-400 bg-rose-950/50 border border-rose-800/40'
                    : 'text-zinc-300 hover:text-rose-300 hover:bg-zinc-900/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book Appointment Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookClick()}
              className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-600 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-rose-900/40 hover:shadow-rose-600/50 transition-all border border-rose-400/30 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-rose-900/40 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-rose-300 bg-rose-950/60 border border-rose-800/40'
                    : 'text-zinc-300 hover:text-rose-300 hover:bg-zinc-900'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-rose-300">
                <Phone className="w-4 h-4 text-rose-500" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`}>{BRAND_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>People's Colony No. 1, Faisalabad</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 pt-1">
                <MessageCircle className="w-4 h-4" />
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Delaqua%20Salon,%20I%20want%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 0321 7664078
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
