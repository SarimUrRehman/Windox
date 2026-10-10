import { Phone, Calendar, Star, Shield, Droplets, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Trust badge with Address & Category */}
            <div className="inline-flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-sky-300">
              <div className="flex items-center gap-1.5 bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold text-white">Tong Street, Bradford BD4</span>
              </div>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-300 font-medium">Window Cleaning Specialists</span>
              <span className="text-neutral-400">·</span>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-white">5.0</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              Crystal-clear, streak-free window cleaning for homes & businesses.
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Based at 6 Broadstone Way, Tong Street, Bradford. We use commercial water-fed telescopic pole systems with 100% de-ionised pure water. Window glass, UPVC frames, and sills washed spotlessly clean every visit.
            </p>

            {/* Key feature checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Frames, sills & doors cleaned as standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Pure de-mineralised water (zero streaks)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Safely reaches up to 45ft / 4 storeys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Regular 4 or 8 weekly cleans & one-offs</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-neutral-900 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-neutral-900" />
                <span>Get Instant Quote & Book</span>
              </button>

              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>Call {BUSINESS_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            {/* Direct address & availability note */}
            <p className="text-xs text-neutral-400 pt-1">
              Serving Bradford (BD1–BD22), Tong Street, Birkenshaw, Pudsey, and West Yorkshire.
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-800 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/hero_window_cleaning_1791649368804.jpg"
                alt="Windoworx Cleaning Services technician using pure water reach and wash pole on residential property in Bradford"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Overlay highlight badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 p-3.5 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-sky-400 font-bold">Pure Water Reach & Wash</div>
                  <div className="text-sm font-semibold text-white">Carbon-Fibre Telescopic Pole</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400">Purity Rating</div>
                  <div className="text-sm font-bold text-sky-300">000 PPM (100% Pure)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-sky-400 mb-1">
              <Droplets className="w-4 h-4" />
              <span className="text-2xl font-extrabold text-white font-display">100% Pure</span>
            </div>
            <div className="text-xs text-neutral-400">
              Reverse osmosis de-ionised water
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-sky-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-2xl font-extrabold text-white font-display">Sills & Frames</span>
            </div>
            <div className="text-xs text-neutral-400">
              Cleaned free with every wash
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-sky-400 mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-2xl font-extrabold text-white font-display">£5,000,000</span>
            </div>
            <div className="text-xs text-neutral-400">
              Public Liability Insurance
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-sky-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-2xl font-extrabold text-white font-display">Local Bradford</span>
            </div>
            <div className="text-xs text-neutral-400">
              Tong Street, BD4 9RX depot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
