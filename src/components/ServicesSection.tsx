import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-wider uppercase text-sky-700 mb-2">
            Professional Window & Exterior UPVC Cleaning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display text-balance">
            Our Cleaning Services in Bradford
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            From regular 4-weekly window cleaning to heavy conservatory roof restorations and commercial shopfronts, we bring commercial water filtration and expert care to every property.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Service Visual Preview */}
                <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                    From £{service.startingPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>Typical: {service.typicalTime}</span>
                    <span>·</span>
                    <span>{service.recommendedFrequency}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 font-display">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-neutral-900 bg-neutral-100 hover:bg-sky-600 hover:text-white rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Pure Water Works Better Box */}
        <div className="mt-16 bg-neutral-900 text-white rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-sky-400">
                <ShieldCheck className="w-4 h-4" />
                <span>The Science of 0 PPM Pure Water</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Why Windoworx pure water cleaning stays cleaner for longer
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Ordinary tap water contains dissolved chalk, lime, and mineral impurities (often 250+ parts per million in West Yorkshire). When tap water or dish soap evaporates on glass, it leaves hazy white spots and a sticky electrostatic film that pulls airborne dust right back onto your windows. Our on-board reverse-osmosis filtration purifies water down to 0 parts per million. It lifts grime organically and dries with complete crystal clarity.
              </p>
            </div>
            <div className="bg-neutral-800/80 border border-neutral-700 p-6 rounded-xl flex flex-col justify-between">
              <div className="text-sm text-neutral-300 font-semibold mb-2">The Windoworx Promise</div>
              <ul className="text-xs text-neutral-300 space-y-2 mb-4">
                <li>✓ Frames, sills, and doors scrubbed clean</li>
                <li>✓ Reaches up to 4 storeys without ladder damage</li>
                <li>✓ 24-Hour clean satisfaction guarantee</li>
                <li>✓ £5M Public Liability Insurance cover</li>
              </ul>
              <div className="text-xs text-sky-400 font-bold">
                Windoworx Cleaning Services · Bradford BD4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
