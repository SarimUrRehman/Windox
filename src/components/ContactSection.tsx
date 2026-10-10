import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_DETAILS, COVERAGE_AREAS } from '../data/servicesData';

export default function ContactSection() {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackPostcode, setCallbackPostcode] = useState('BD4');
  const [callbackSent, setCallbackSent] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;
    setCallbackSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100/60 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-sky-700 mb-2">
            Local Bradford Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display text-balance">
            Contact Details & Bradford Depot
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Need a quote for your house windows, conservatory, or commercial premises? Get in touch directly with our Tong Street team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-8">
            {/* Direct Phone highlight */}
            <div className="p-6 bg-sky-50/70 border border-sky-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Direct Telephone Enquiries
                </div>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="text-2xl sm:text-3xl font-black text-neutral-900 font-display hover:text-sky-700 transition-colors block mt-1"
                >
                  {BUSINESS_DETAILS.phoneDisplay}
                </a>
                <div className="text-xs text-neutral-600 mt-1">
                  Local mobile contact ({BUSINESS_DETAILS.localPhone})
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/447708200506?text=Hello%20Windoworx%2C%20I%20would%20like%20a%20window%20cleaning%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-sky-800 bg-sky-100/80 hover:bg-sky-200/80 rounded-xl transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Official Business Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-sky-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Registered Business Address</div>
                  <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {BUSINESS_DETAILS.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-sky-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Operating Hours</div>
                  <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {BUSINESS_DETAILS.operatingHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-sky-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Email Enquiries</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-sky-600 hover:underline">
                      {BUSINESS_DETAILS.email}
                    </a>
                    <div className="text-neutral-400 text-[11px] mt-0.5">Prompt email replies within 1 hour</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-sky-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Insurance & Safety</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    £5,000,000 Public Liability Insured<br />
                    Full ground-level water-fed pole safety
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Callback Request */}
            <div className="pt-6 border-t border-neutral-100">
              <div className="font-bold text-neutral-900 text-sm mb-1 font-display">
                Request a Quick Callback
              </div>
              <p className="text-xs text-neutral-500 mb-3">
                Leave your number and postcode in Bradford, and we'll ring you back within 15 minutes.
              </p>

              {callbackSent ? (
                <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Thank you! We've received your request and will call {callbackPhone} shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none flex-1"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 07...)"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    className="px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Postcode (e.g. BD4)"
                    value={callbackPostcode}
                    onChange={(e) => setCallbackPostcode(e.target.value)}
                    className="w-24 px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Callback
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Service Area Coverage Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
              <MapPin className="w-4 h-4" />
              <span>Coverage & Rounds</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-display">
              Where Windoworx Cleans
            </h3>
            <p className="text-xs text-neutral-600 mt-1 mb-4 leading-relaxed">
              Based on Tong Street (BD4), our pure water vans run scheduled routes across all Bradford postal districts and adjoining towns:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {COVERAGE_AREAS.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 border border-neutral-100 text-neutral-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
              <span className="font-bold text-neutral-700">Address: </span>
              {BUSINESS_DETAILS.address}. For immediate quotes, call or text us directly on <a href={`tel:${BUSINESS_DETAILS.phone}`} className="font-bold text-sky-600">{BUSINESS_DETAILS.phoneDisplay}</a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
