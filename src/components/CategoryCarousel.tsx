import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavSubItem } from '@/data/navigation';

interface CategoryCarouselProps {
  categories: NavSubItem[];
  images: string[];
  columns: number;
  intervalMs?: number;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function CategoryCarousel({
  categories,
  images,
  columns,
  intervalMs = 4500,
}: CategoryCarouselProps) {
  const slides = chunkArray(categories, columns);
  const totalSlides = slides.length;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      const handler = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || totalSlides <= 1) return;
    const timer = window.setInterval(goNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, goNext, intervalMs, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (totalSlides === 0) return null;

  return (
    <div
      className="relative touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full min-h-[500px] shrink-0 sm:min-h-[760px] lg:min-h-[600px]"
              aria-hidden={slideIndex !== current}
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
                {slide.map((category, catIndex) => {
                  const imageIndex = (slideIndex * columns + catIndex) % images.length;
                  return (
                    <a
                      key={`${slideIndex}-${catIndex}`}
                      href={category.href}
                      className="group/card overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-md"
                    >
                      <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
                        <img
                          src={images[imageIndex]}
                          alt={category.label}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />
                        <ArrowUpRight className="absolute right-2 top-2 h-3.5 w-3.5 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover/card:opacity-100" />
                      </div>
                      <div className="flex min-h-[60px] flex-col justify-between gap-1 px-2.5 py-2 sm:px-3 sm:py-2.5">
                        <span className="text-[11px] font-bold leading-snug text-navy-800 transition-colors duration-200 group-hover/card:text-brand-red sm:text-sm">
                          {category.label}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-200 group-hover/card:text-brand-red">
                          View Products
                          <ArrowRight className="h-2.5 w-2.5 transition-transform duration-200 group-hover/card:translate-x-0.5" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {totalSlides > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={totalSlides <= 1}
            aria-label="Previous categories"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-navy-700 shadow-sm transition-all duration-200 hover:border-brand-red hover:bg-brand-red hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-6 bg-brand-red'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={totalSlides <= 1}
            aria-label="Next categories"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-navy-700 shadow-sm transition-all duration-200 hover:border-brand-red hover:bg-brand-red hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
