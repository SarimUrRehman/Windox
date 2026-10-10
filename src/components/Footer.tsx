import { Phone, Mail, MapPin, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black text-xs">
                WX
              </span>
              <span className="text-lg font-bold text-white font-display">
                {BUSINESS_DETAILS.name}
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Professional pure water window cleaning service. Specialising in residential homes, conservatory roofs, gutters, and commercial shopfronts across Bradford and West Yorkshire.
            </p>
            <div className="text-neutral-300 text-xs">
              <div className="font-semibold text-white">{BUSINESS_DETAILS.address}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Services
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Window Clean</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conservatory Roof Washing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UPVC Fascias & Soffits</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial & Retail Glass</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Solar Panel Cleaning</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Information
            </div>
            <ul className="space-y-2">
              <li><a href="#gallery" className="hover:text-white transition-colors">Past Work Gallery</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Instant Cost Estimator</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews (5.0 ★)</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Online Booking Form</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Bradford Coverage Area</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Direct Contact
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{BUSINESS_DETAILS.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{BUSINESS_DETAILS.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <span>6 Broadstone Way, Tong Street, Bradford BD4 9RX</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Book a Clean
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved. 6 Broadstone Way, Tong Street, Bradford BD4 9RX, United Kingdom.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>£5M Public Liability Insured</span>
            </span>
            <span>·</span>
            <span>Domestic & Commercial Pure Water Window Cleaning</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
