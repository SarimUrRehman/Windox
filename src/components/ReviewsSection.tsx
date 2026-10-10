import { useState } from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { REVIEWS, BUSINESS_DETAILS } from '../data/servicesData';
import { ReviewItem } from '../types';

export default function ReviewsSection() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'conservatory'>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === 'residential') return r.service.toLowerCase().includes('residential') || r.service.toLowerCase().includes('clean');
    if (filter === 'conservatory') return r.service.toLowerCase().includes('conservatory') || r.service.toLowerCase().includes('valet');
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Overview Scorecard */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 mb-14 shadow-sm border border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Scorecard left */}
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 md:pr-8">
              <div className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2">
                Customer Reviews · Bradford & West Yorkshire
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-black font-display text-white">
                  5.0
                </span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    Based on 7 Verified Client Reviews in Bradford
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>100% Recommended by Bradford & West Yorkshire Homeowners</span>
              </div>
            </div>

            {/* Scorecard breakdown right */}
            <div className="md:col-span-7 space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-14 text-neutral-400">5 Stars</span>
                <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full w-full" />
                </div>
                <span className="w-8 font-mono font-bold text-right text-sky-400">7</span>
              </div>
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-14 text-neutral-400">4 Stars</span>
                <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full w-0" />
                </div>
                <span className="w-8 font-mono text-right">0</span>
              </div>
              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-14 text-neutral-400">3 Stars</span>
                <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full w-0" />
                </div>
                <span className="w-8 font-mono text-right">0</span>
              </div>
              <div className="text-xs text-neutral-400 pt-2">
                Pure de-ionised water ensures 100% streak-free results across all properties.
              </div>
            </div>
          </div>
        </div>

        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-sky-700 mb-1">
              Customer Feedback
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
              What Bradford Homeowners Say About Windoworx
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg text-xs font-semibold self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All 7 Reviews
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'residential'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Residential Windows
            </button>
            <button
              onClick={() => setFilter('conservatory')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'conservatory'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Conservatories & Roofs
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="bg-neutral-50 rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
            >
              <div>
                {/* Header with stars & date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">{review.date}</span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-bold text-sky-800 mb-2">
                  {review.service}
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-neutral-900">{review.author}</div>
                  <div className="text-neutral-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sky-700 font-medium bg-sky-50 px-2 py-0.5 rounded text-[11px]">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
