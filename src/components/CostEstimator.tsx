import { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ADDONS_LIST } from '../data/servicesData';

interface CostEstimatorProps {
  onApplyEstimateToBooking: (serviceId: string, areaSize: number, addons: string[]) => void;
}

export default function CostEstimator({ onApplyEstimateToBooking }: CostEstimatorProps) {
  const [serviceType, setServiceType] = useState<string>('residential-windows');
  const [propertySize, setPropertySize] = useState<number>(3); // Bedrooms: 1 to 5
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['sills-frames']);

  const propertyOptions = [
    { bedrooms: 1, label: '1-2 Bed Flat / Terraced', baseWindows: 8 },
    { bedrooms: 2, label: '2-3 Bed Semi-Detached', baseWindows: 12 },
    { bedrooms: 3, label: '3-4 Bed Detached Home', baseWindows: 16 },
    { bedrooms: 4, label: '4-5 Bed Large Executive Home', baseWindows: 22 },
    { bedrooms: 5, label: '5+ Bed Townhouse / 3 Storeys', baseWindows: 28 },
  ];

  const serviceRates: Record<string, { base: number; perRoom: number; label: string }> = {
    'residential-windows': { base: 18, perRoom: 4, label: 'Residential Pure Water Windows' },
    'conservatory-clean': { base: 55, perRoom: 8, label: 'Conservatory Roof & Windows' },
    'fascia-gutters': { base: 60, perRoom: 10, label: 'Fascias, Soffits & Gutters Wash' },
    'commercial-windows': { base: 35, perRoom: 6, label: 'Commercial / Shopfront Glass' },
    'full-house-valet': { base: 120, perRoom: 15, label: 'Full Property Exterior Valet' },
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculation = useMemo(() => {
    const rate = serviceRates[serviceType] || serviceRates['residential-windows'];
    const baseCost = Math.round(rate.base + (propertySize - 1) * rate.perRoom);

    let addonsCost = 0;
    selectedAddons.forEach((addonId) => {
      const match = ADDONS_LIST.find((a) => a.id === addonId);
      if (match) addonsCost += match.price;
    });

    const subtotal = baseCost + addonsCost;
    const discount = serviceType === 'full-house-valet' || selectedAddons.length >= 2 ? Math.round(subtotal * 0.1) : 0;
    const estimatedTotal = subtotal - discount;

    return {
      baseCost,
      addonsCost,
      discount,
      estimatedTotal,
      lowRange: Math.max(18, Math.round(estimatedTotal * 0.95)),
      highRange: Math.round(estimatedTotal * 1.08),
    };
  }, [serviceType, propertySize, selectedAddons]);

  return (
    <section id="estimator" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-sky-400 mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Window Cleaning Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Instant Window Cleaning Quote Estimator
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Select your property size in Bradford and desired services below for an instant guide price. Sills and frames are always included free with Windoworx.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-neutral-800/90 border border-neutral-700 rounded-2xl p-6 sm:p-8 space-y-7">
            {/* 1. Service selection */}
            <div>
              <label className="block text-sm font-bold text-neutral-200 mb-3">
                1. Select Primary Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(serviceRates).map(([key, item]) => {
                  const isSelected = serviceType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setServiceType(key)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                          : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Property size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-neutral-200">
                  2. Property Type & Size
                </label>
                <div className="text-right">
                  <span className="text-base font-bold font-mono text-sky-400">
                    {propertyOptions.find((p) => p.bedrooms === propertySize)?.label}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                {propertyOptions.slice(0, 3).map((opt) => (
                  <button
                    key={opt.bedrooms}
                    onClick={() => setPropertySize(opt.bedrooms)}
                    className={`p-3 text-xs font-semibold rounded-xl border transition-all text-left cursor-pointer ${
                      propertySize === opt.bedrooms
                        ? 'bg-sky-950/80 border-sky-400 text-white'
                        : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <div>{opt.label}</div>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">~{opt.baseWindows} windows</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {propertyOptions.slice(3).map((opt) => (
                  <button
                    key={opt.bedrooms}
                    onClick={() => setPropertySize(opt.bedrooms)}
                    className={`p-3 text-xs font-semibold rounded-xl border transition-all text-left cursor-pointer ${
                      propertySize === opt.bedrooms
                        ? 'bg-sky-950/80 border-sky-400 text-white'
                        : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <div>{opt.label}</div>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">~{opt.baseWindows} windows</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on options */}
            <div>
              <label className="block text-sm font-bold text-neutral-200 mb-3">
                3. Optional UPVC & Exterior Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS_LIST.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-sky-950/60 border-sky-400 text-white'
                          : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border text-xs ${
                              isChecked
                                ? 'bg-sky-600 border-sky-400 text-white'
                                : 'border-neutral-600 bg-neutral-700'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-tight">
                          {addon.desc}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400 whitespace-nowrap">
                        +£{addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result / Estimation Summary Column */}
          <div className="lg:col-span-5 bg-neutral-800/90 border border-neutral-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Windoworx Quote Summary
                </span>
                <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Frames & Sills Included
                </span>
              </div>

              {/* Price Display */}
              <div className="py-6 text-center border-b border-neutral-700">
                <div className="text-xs text-neutral-400 mb-1">
                  Estimated Clean Price
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-display">
                  £{calculation.lowRange} – £{calculation.highRange}
                </div>
                <div className="text-xs text-neutral-400 mt-2">
                  Midpoint estimate: <span className="text-sky-400 font-mono font-bold">£{calculation.estimatedTotal}</span>
                </div>
              </div>

              {/* Itemized breakdown */}
              <div className="py-4 space-y-2.5 text-xs text-neutral-300 border-b border-neutral-700">
                <div className="flex justify-between">
                  <span>Window Clean ({propertyOptions.find((p) => p.bedrooms === propertySize)?.label}):</span>
                  <span className="font-mono font-bold text-white">£{calculation.baseCost}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons ({selectedAddons.length}):</span>
                    <span className="font-mono font-bold text-white">£{calculation.addonsCost}</span>
                  </div>
                )}
                {calculation.discount > 0 && (
                  <div className="flex justify-between text-sky-400 font-semibold">
                    <span>Package Discount:</span>
                    <span className="font-mono font-bold">-£{calculation.discount}</span>
                  </div>
                )}
              </div>

              {/* What is included */}
              <div className="pt-4 text-xs text-neutral-400 space-y-1.5">
                <div className="font-semibold text-neutral-300 mb-1">Included as standard:</div>
                <div>• All glass panes cleaned with 100% pure water</div>
                <div>• All UPVC window frames & sills scrubbed</div>
                <div>• Front and back composite/UPVC doors cleaned</div>
                <div>• 24-hour streak-free guarantee</div>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-6">
              <button
                onClick={() =>
                  onApplyEstimateToBooking(serviceType, propertySize * 10, selectedAddons)
                }
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-neutral-900 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Book Clean with this Estimate</span>
                <ArrowRight className="w-4 h-4 text-neutral-900" />
              </button>
              <p className="text-[11px] text-center text-neutral-400 mt-2">
                Tong Street depot · Bradford BD4 9RX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
