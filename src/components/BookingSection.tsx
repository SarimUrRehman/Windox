import { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, Phone, Mail, MapPin, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, ADDONS_LIST, BUSINESS_DETAILS } from '../data/servicesData';
import { BookingFormData, BookingConfirmation } from '../types';

interface BookingSectionProps {
  initialServiceId?: string;
  initialAreaSize?: number;
  initialAddons?: string[];
}

export default function BookingSection({
  initialServiceId = 'residential-windows',
  initialAreaSize = 30,
  initialAddons = ['sills-frames'],
}: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId,
    propertyType: 'semi-detached',
    areaSizeSqm: initialAreaSize,
    surfaceType: 'Standard UPVC Windows',
    addons: initialAddons,
    preferredDate: '',
    preferredTime: 'morning',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    postcode: 'BD4',
    addressLine: '',
    notes: '',
    hasOutdoorTap: 'yes',
  });

  const [frequency, setFrequency] = useState<'4-weekly' | '8-weekly' | 'one-off'>('4-weekly');
  const [gateAccess, setGateAccess] = useState<'side-gate' | 'unlocked' | 'call-first'>('side-gate');
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialAreaSize) {
      setFormData((prev) => ({ ...prev, areaSizeSqm: initialAreaSize }));
    }
  }, [initialAreaSize]);

  useEffect(() => {
    if (initialAddons) {
      setFormData((prev) => ({ ...prev, addons: initialAddons }));
    }
  }, [initialAddons]);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, preferredDate: dateStr }));
  }, []);

  const calculateTotal = () => {
    const selectedService = SERVICES.find((s) => s.id === formData.serviceId);
    let base = selectedService ? selectedService.startingPrice : 20;

    let addonsCost = 0;
    formData.addons.forEach((addonId) => {
      const addon = ADDONS_LIST.find((a) => a.id === addonId);
      if (addon) addonsCost += addon.price;
    });

    let total = base + addonsCost;
    if (frequency === '4-weekly') total = Math.round(total * 0.9); // 10% regular discount
    return Math.max(18, total);
  };

  const handleAddonToggle = (addonId: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter((id) => id !== addonId)
        : [...prev.addons, addonId],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Please enter your full name';
    if (!formData.customerPhone.trim() || formData.customerPhone.length < 9) {
      newErrors.customerPhone = 'Please provide a valid contact phone number';
    }
    if (!formData.customerEmail.trim() || !formData.customerEmail.includes('@')) {
      newErrors.customerEmail = 'Please provide a valid email address';
    }
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode required (e.g. BD4, BD11, LS28)';
    if (!formData.addressLine.trim()) newErrors.addressLine = 'Street address required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refCode = `WX-${Math.floor(1000 + Math.random() * 9000)}`;
      const conf: BookingConfirmation = {
        referenceCode: refCode,
        timestamp: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        data: { ...formData },
        estimatedTotal: calculateTotal(),
      };
      setConfirmation(conf);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="booking" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-sky-700 mb-2">
            Windoworx Booking Portal · Bradford BD4
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display text-balance">
            Book Your Window Cleaning Service
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Reserve your appointment with our Tong Street crew. We send an SMS confirmation, arrive with on-board pure water, and frames and sills are washed free every time.
          </p>
        </div>

        {confirmation ? (
          /* Confirmation View */
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 shadow-md max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 border-b border-neutral-100 pb-6">
              <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Window Clean Booked
                </div>
                <h3 className="text-2xl font-black text-neutral-900 font-display">
                  Reference Code: {confirmation.referenceCode}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Windoworx Cleaning Services · 6 Broadstone Way, Tong Street, Bradford BD4 9RX
                </p>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-xl text-sky-950 text-sm">
                <p className="font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-700" />
                  What happens next?
                </p>
                <p className="text-xs leading-relaxed text-sky-900">
                  Our dispatch manager will text or call you on <span className="font-bold">{confirmation.data.customerPhone}</span> to confirm your clean window. You do not need to be home if side gate access is available. Payment is only due after your windows are sparkling clean.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 text-xs sm:text-sm space-y-3">
                <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-bold text-neutral-900">
                    {SERVICES.find((s) => s.id === confirmation.data.serviceId)?.title}
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                  <span className="text-neutral-500">Frequency:</span>
                  <span className="font-bold text-sky-700 capitalize">
                    {frequency.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                  <span className="text-neutral-500">Scheduled Date:</span>
                  <span className="font-bold text-neutral-900">
                    {confirmation.data.preferredDate} ({confirmation.data.preferredTime} slot)
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                  <span className="text-neutral-500">Customer:</span>
                  <span className="font-bold text-neutral-900">{confirmation.data.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                  <span className="text-neutral-500">Address:</span>
                  <span className="font-bold text-neutral-900">
                    {confirmation.data.addressLine}, {confirmation.data.postcode}
                  </span>
                </div>
                <div className="flex justify-between pt-1 text-base">
                  <span className="font-bold text-neutral-900">Clean Price:</span>
                  <span className="font-black text-sky-700 font-display">
                    £{confirmation.estimatedTotal} (Pay on completion)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Booking Details</span>
              </button>

              <button
                onClick={() => setConfirmation(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Make Another Booking</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Step 1 & 2: Service & Property Details */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 font-display pb-3 border-b border-neutral-100">
                  1. Service & Frequency
                </h3>
                
                {/* Service Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Select Primary Service
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm font-medium focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — from £{s.startingPrice}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cleaning Frequency Options */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Cleaning Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: '4-weekly', label: 'Regular 4-Weekly', badge: 'Most Popular (10% Off)' },
                      { id: '8-weekly', label: 'Regular 8-Weekly', badge: 'Standard Schedule' },
                      { id: 'one-off', label: 'One-Off Deep Clean', badge: 'Single Visit' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFrequency(opt.id as any)}
                        className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all cursor-pointer ${
                          frequency === opt.id
                            ? 'bg-sky-50 border-sky-600 text-sky-900 ring-1 ring-sky-600'
                            : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        <div className="font-bold">{opt.label}</div>
                        <div className="text-[10px] text-neutral-500 mt-0.5">{opt.badge}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Type & Gate Access */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyType: e.target.value as BookingFormData['propertyType'],
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    >
                      <option value="semi-detached">Semi-Detached (2-3 Bed)</option>
                      <option value="detached">Detached House (3-4 Bed)</option>
                      <option value="terraced">Terraced Property</option>
                      <option value="bungalow">Bungalow</option>
                      <option value="commercial">Commercial / Retail Shop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Rear Garden Access
                    </label>
                    <select
                      value={gateAccess}
                      onChange={(e) => setGateAccess(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    >
                      <option value="side-gate">Unlocked Side Gate</option>
                      <option value="unlocked">Back Access Always Open</option>
                      <option value="call-first">Text / Ring Before Arrival</option>
                    </select>
                  </div>
                </div>

                {/* Add-on treatments */}
                <div className="mt-5">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Optional UPVC & Roofline Add-ons
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ADDONS_LIST.map((addon) => {
                      const isChecked = formData.addons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleAddonToggle(addon.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-sky-50/80 border-sky-500 text-sky-950'
                              : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
                          }`}
                        >
                          <div className="text-xs font-bold">{addon.name}</div>
                          <span className="text-xs font-mono font-bold text-sky-700">
                            +£{addon.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="pt-4 border-t border-neutral-100">
                <h3 className="text-lg font-bold text-neutral-900 font-display mb-4">
                  2. Preferred Date & Time
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Preferred Arrival Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value as BookingFormData['preferredTime'],
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    >
                      <option value="morning">Morning (08:00 – 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 – 16:30)</option>
                      <option value="anytime">Flexible / Any Available</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Contact Details & Order Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 font-display pb-3 border-b border-neutral-100">
                  3. Bradford Contact & Address
                </h3>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Mahmood"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  {errors.customerName && (
                    <p className="text-xs text-red-600 mt-1">{errors.customerName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 07708 200506"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                    {errors.customerPhone && (
                      <p className="text-xs text-red-600 mt-1">{errors.customerPhone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BD4 9RX"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                    />
                    {errors.postcode && (
                      <p className="text-xs text-red-600 mt-1">{errors.postcode}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. tariq@example.co.uk"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  {errors.customerEmail && (
                    <p className="text-xs text-red-600 mt-1">{errors.customerEmail}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Street Address in Bradford *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 14 Tong Street"
                    value={formData.addressLine}
                    onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  {errors.addressLine && (
                    <p className="text-xs text-red-600 mt-1">{errors.addressLine}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Notes / Access Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Conservatory on rear, dog in garden"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none resize-none"
                  />
                </div>

                {/* Real-time calculated total */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-500">Estimated Clean Price</div>
                    <div className="text-2xl font-black text-neutral-900 font-display">
                      £{calculateTotal()}
                    </div>
                  </div>
                  <div className="text-right text-xs text-sky-700 font-semibold">
                    <div>Frames & Sills Included</div>
                    <div className="text-neutral-500 text-[11px]">Pay on satisfaction</div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Booking...</span>
                  ) : (
                    <>
                      <span>Submit Window Clean Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  Or ring directly: <a href={`tel:${BUSINESS_DETAILS.phone}`} className="font-bold text-sky-700 hover:underline">{BUSINESS_DETAILS.phoneDisplay}</a>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
