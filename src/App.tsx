import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedDeals } from './components/FeaturedDeals';
import { FacialPackages } from './components/FacialPackages';
import { WaxDeals } from './components/WaxDeals';
import { CustomDealCalculator } from './components/CustomDealCalculator';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Hydra Facial Package');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Hero Section */}
      <Hero onBookClick={scrollToBooking} />

      {/* About Section */}
      <About />

      {/* Services Menu */}
      <Services onBookClick={scrollToBooking} />

      {/* Promotional Winter Deals */}
      <FeaturedDeals onBookClick={scrollToBooking} />

      {/* Luxury Facial Packages */}
      <FacialPackages onBookClick={scrollToBooking} />

      {/* Wax Deals */}
      <WaxDeals onBookClick={scrollToBooking} />

      {/* Custom Deal Calculator */}
      <CustomDealCalculator onBookClick={scrollToBooking} />

      {/* Photo Gallery with Lightbox */}
      <Gallery onBookClick={scrollToBooking} />

      {/* Reviews & Google Rating */}
      <Reviews />

      {/* Why Choose Delaqua */}
      <WhyChooseUs />

      {/* Large Appointment Call To Action */}
      <AppointmentSection onBookClick={() => scrollToBooking()} />

      {/* Contact Info, Map & Booking Form */}
      <ContactSection prefilledService={selectedServiceForBooking} />

      {/* Footer */}
      <Footer />

      {/* Floating CTA Widgets */}
      <FloatingCTA />
    </div>
  );
}
