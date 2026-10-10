import { useState } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/servicesData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0 font-display group"
          >
            <span className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-sm group-hover:bg-sky-700 transition-colors">
              WX
            </span>
            <span className="font-extrabold text-neutral-900 group-hover:text-sky-700 transition-colors">
              Windoworx
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-neutral-700">
            <a href="#services" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#gallery" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0">
              Past Work
            </a>
            <a href="#estimator" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0">
              Instant Quote
            </a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0">
              Reviews
            </a>
            <a href="#contact" className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-neutral-800 hover:text-sky-600 hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call us now"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{BUSINESS_DETAILS.localPhone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Clean</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              aria-label="Call business"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between py-1 px-2 text-xs font-semibold text-neutral-500 border-b border-neutral-100 pb-2">
            <span>Bradford (BD4 9RX)</span>
            <span className="flex items-center gap-1 text-sky-600">
              <Sparkles className="w-3.5 h-3.5" /> Pure Water System
            </span>
          </div>
          <nav className="flex flex-col space-y-2 text-base font-semibold text-neutral-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Window Cleaning Services
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Past Work Gallery
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Instant Cost Calculator
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Bradford Address & Contact
            </a>
          </nav>
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Online</span>
            </button>
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
            >
              <Phone className="w-5 h-5 text-sky-600" />
              <span>Call: {BUSINESS_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
