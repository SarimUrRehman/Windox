import { useState } from 'react';
import { GALLERY_PROJECTS } from '../data/servicesData';
import { GalleryProject } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import { MapPin, Clock, Maximize2, X, Calendar } from 'lucide-react';
import galleryConservatoryCleanImg from '../assets/images/gallery_conservatory_clean_1791649387362.jpg';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export default function GallerySection({ onOpenBooking }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'patio', label: 'Residential Windows' },
    { id: 'decking', label: 'Conservatory Roofs' },
    { id: 'walls', label: 'Gutters & Fascias' },
    { id: 'driveway', label: 'Leaded & Custom Glass' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-neutral-100/70 border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-sky-700 mb-2">
            Verified Work · Bradford & West Yorkshire
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display text-balance">
            Gallery of Past Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            See real residential and commercial properties cleaned by Windoworx across Bradford. Spotless glass, detailed window sills, and bright UPVC frames.
          </p>
        </div>

        {/* Featured Interactive Before & After Slider */}
        <div className="mb-14">
          <BeforeAfterSlider
            title="Conservatory Glass Roof & Finial Restoration"
            subtitle="Full removal of winter moss, green algae, and traffic film using pure water"
            location="Birkenshaw, Bradford (BD11)"
            beforeImage={galleryConservatoryCleanImg}
            afterImage={galleryConservatoryCleanImg}
          />
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-white border border-neutral-200 rounded-xl max-w-fit shadow-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-neutral-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>{project.location}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 bg-neutral-900/80 hover:bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-500 mb-1">
                    {project.surface}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 font-display">
                    {project.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-600">
                    <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                      <span className="font-bold text-neutral-800">Before: </span>
                      <span>{project.beforeDesc}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-100 text-sky-950">
                      <span className="font-bold text-sky-900">Result: </span>
                      <span>{project.afterDesc}</span>
                    </div>
                  </div>
                </div>

                {/* Card Meta Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span>Duration: {project.turnaround}</span>
                  </div>
                  <div className="font-semibold text-neutral-700">
                    Scope: {project.areaSize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
              Need your windows or conservatory cleaned in Bradford?
            </h4>
            <p className="text-sm text-neutral-600 mt-1">
              Windoworx provides free instant quotes and transparent pricing with no hidden charges.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Clean</span>
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-[16/10] bg-neutral-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-neutral-900/80 hover:bg-neutral-900 text-white p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-neutral-900/80 text-white text-xs font-semibold px-3 py-1 rounded-md">
                {selectedProject.location}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                  {selectedProject.surface}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div>
                  <span className="text-neutral-500">Property Scope: </span>
                  <span className="font-bold text-neutral-800">{selectedProject.areaSize}</span>
                </div>
                <div>
                  <span className="text-neutral-500">Time Taken: </span>
                  <span className="font-bold text-neutral-800">{selectedProject.turnaround}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-neutral-500">Technique: </span>
                  <span className="font-bold text-neutral-800">{selectedProject.technique}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-bold text-neutral-900">Before: </span>
                  <span className="text-neutral-600">{selectedProject.beforeDesc}</span>
                </div>
                <div>
                  <span className="font-bold text-sky-800">Result: </span>
                  <span className="text-neutral-600">{selectedProject.afterDesc}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Book Clean For My Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
