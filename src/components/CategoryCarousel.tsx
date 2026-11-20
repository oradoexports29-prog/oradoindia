
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavSubItem } from '@/data/navigation';

interface CategoryCarouselProps {
  categories: NavSubItem[];
  images: string[];
  columns: number;
  intervalMs?: number;
}

function getResponsiveImageProps(src: string) {
  if (!src.includes('images.pexels.com')) {
    return { src };
  }

  const makeUrl = (width: number) => {
    const url = new URL(src);
    url.searchParams.set('w', String(width));
    url.searchParams.set('h', String(Math.round(width * 0.6)));
    return url.toString();
  };

  return {
    src: makeUrl(640),
    srcSet: `${makeUrl(480)} 480w, ${makeUrl(640)} 640w`,
  };
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    setPrefersReducedMotion(mq.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
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

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta =
      event.changedTouches[0].clientX - touchStartX.current;

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
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full shrink-0"
              aria-hidden={slideIndex !== current}
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
                {slide.map((category, catIndex) => {
                  const imageIndex =
                    images.length > 0
                      ? (slideIndex * columns + catIndex) % images.length
                      : -1;

                  const imageSrc =
                    imageIndex >= 0 ? images[imageIndex] : '';

                  return (
                    <a
                      key={`${slideIndex}-${catIndex}`}
                      href={category.href}
                      tabIndex={slideIndex === current ? undefined : -1}
                      className="group/card min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-md"
                    >
                      <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
                        {imageSrc && (
                          <img
                            {...getResponsiveImageProps(imageSrc)}
                            alt={category.label}
                            width={720}
                            height={432}
                            sizes="(max-width: 639px) 45vw, (max-width: 1023px) 45vw, 30vw"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />

                        <ArrowUpRight className="absolute right-2 top-2 h-3.5 w-3.5 text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover/card:opacity-100" />
                      </div>

                      <div className="flex min-h-[54px] flex-col justify-between gap-1 px-2 py-2 sm:min-h-[62px] sm:px-3 sm:py-2.5">
                        <span className="text-[10px] font-bold leading-snug text-navy-800 transition-colors duration-200 group-hover/card:text-brand-red sm:text-sm">
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

      {totalSlides > 1 && (
        <div className="mt-2.5 flex items-center justify-center gap-3 sm:mt-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous categories"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-navy-700 shadow-sm transition-all duration-200 hover:border-brand-red hover:bg-brand-red hover:text-white"
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
                aria-current={index === current ? 'true' : undefined}
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
            aria-label="Next categories"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-navy-700 shadow-sm transition-all duration-200 hover:border-brand-red hover:bg-brand-red hover:text-white"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
