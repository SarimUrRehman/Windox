import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import CostEstimator from './components/CostEstimator';
import BookingSection from './components/BookingSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_DETAILS } from './data/servicesData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('residential-windows');
  const [estimatedAreaSize, setEstimatedAreaSize] = useState<number>(30);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['sills-frames']);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (serviceId: string, areaSize: number, addons: string[]) => {
    setSelectedServiceId(serviceId);
    setEstimatedAreaSize(areaSize);
    setSelectedAddons(addons);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-sky-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* Services Bento Grid */}
        <ServicesSection onSelectServiceForBooking={(id) => scrollToBooking(id)} />

        {/* Interactive Before & After + Gallery */}
        <GallerySection onOpenBooking={() => scrollToBooking()} />

        {/* Interactive Quote & Cost Estimator */}
        <CostEstimator onApplyEstimateToBooking={handleApplyEstimate} />

        {/* Booking Form with instant confirmation */}
        <BookingSection
          initialServiceId={selectedServiceId}
          initialAreaSize={estimatedAreaSize}
          initialAddons={selectedAddons}
        />

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Contact Details & Coverage Area */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => scrollToBooking()} />

      {/* Mobile Sticky Quick Bar (respecting <= 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-900 text-white rounded-lg text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call {BUSINESS_DETAILS.localPhone}</span>
        </a>
        <button
          onClick={() => scrollToBooking()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-sky-600 text-white rounded-lg text-xs font-bold cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Clean</span>
        </button>
      </div>
    </div>
  );
}
