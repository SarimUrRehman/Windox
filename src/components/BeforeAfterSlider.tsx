import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  subtitle: string;
  location: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Before (Algae & Film)",
  afterLabel = "After (Crystal Pure Clean)",
  beforeImage,
  afterImage,
  title,
  subtitle,
  location
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600">
            <span>{location}</span>
            <span>·</span>
            <span>Interactive Window Comparison</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display mt-0.5">
            {title}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg self-start sm:self-auto">
          <ArrowLeftRight className="w-3.5 h-3.5 text-neutral-700" />
          <span>Drag slider horizontally</span>
        </div>
      </div>

      {/* Interactive image container */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden select-none cursor-ew-resize touch-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Background image: AFTER (Crystal Clean) */}
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Foreground image: BEFORE (Dirty / Grime) clipped by slider */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              filter: 'contrast(0.9) brightness(0.8) sepia(0.25)'
            }}
          />
          {/* Grime overlay */}
          <div className="absolute inset-0 bg-neutral-900/35 backdrop-contrast-125" />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 bg-neutral-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-sky-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-sky-200" />
          {afterLabel}
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg border-2 border-sky-600 flex items-center justify-center text-sky-700 cursor-ew-resize">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Preset jump toggles */}
      <div className="p-3 bg-neutral-50 flex items-center justify-between text-xs border-t border-neutral-100">
        <button
          onClick={() => setSliderPosition(100)}
          className="px-3 py-1 font-medium text-neutral-600 hover:text-neutral-900 rounded hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          View Full Before
        </button>
        <button
          onClick={() => setSliderPosition(50)}
          className="px-3 py-1 font-bold text-sky-700 hover:bg-sky-50 rounded transition-colors cursor-pointer"
        >
          Split 50 / 50
        </button>
        <button
          onClick={() => setSliderPosition(0)}
          className="px-3 py-1 font-medium text-neutral-600 hover:text-neutral-900 rounded hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          View Full After
        </button>
      </div>
    </div>
  );
}
