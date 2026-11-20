
import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  FileText,
  Zap,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const heroImage = '/home%20image1.png.webp';
const heroImageSmall = '/home%20image1.png.640.webp';
const heroImageMedium = '/home%20image1.png.768.webp';
const heroImageLarge = '/home%20image1.png.1024.webp';
const heroImageSecondary = '/home%20image2.320.webp';

export default function HeroSection() {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    heroImageRef.current?.setAttribute('fetchpriority', 'high');
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-navy-900"
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(245,201,40,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(217,35,50,0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container-max relative px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Column */}
          <div className="min-w-0 text-white">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4">
              <Zap className="h-3.5 w-3.5 shrink-0 text-brand-yellow" />

              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 sm:text-xs">
                Established 1994 · Made in India
              </span>
            </div>

            <h1 className="mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
              Precision Electrical
              <br />
              Components.
              <br />
              <span className="text-brand-yellow">
                Trusted Since 1994.
              </span>
            </h1>

            <p className="mb-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Manufacturer and Exporter of Two-Wheeler and Three-Wheeler Electrical Spare Parts.
            </p>

            <p className="mb-7 max-w-xl text-sm leading-relaxed text-white/60 sm:mb-8">
              Discover automotive electrical components for motorcycles,
              scooters, and three-wheelers. ORADO supports wholesalers,
              distributors, retailers, and international buyers with a
              specialized product range.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-4">
              <a
                href="#products-page"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 sm:px-7 sm:text-sm"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-wide text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 sm:px-7 sm:text-sm"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
              </a>
            </div>
          </div>

          {/* Responsive Hero Image */}
          <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:mt-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl sm:rounded-2xl">
              <img
                ref={heroImageRef}
                src={heroImage}
                srcSet={`${heroImageSmall} 640w, ${heroImageMedium} 768w, ${heroImageLarge} 1024w, ${heroImage} 1280w`}
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 50vw"
                width={1280}
                height={853}
                alt="ORADO automotive electrical components"
                decoding="async"
                loading="eager"
                className="block aspect-[3/2] h-auto max-h-[420px] w-full object-contain lg:aspect-auto lg:h-[420px] lg:object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent"
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute -bottom-5 left-3 hidden w-32 overflow-hidden rounded-xl border-4 border-navy-900 shadow-2xl sm:block sm:left-5 sm:w-40 lg:-bottom-6 lg:-left-6 lg:w-48">
              <img
                src={heroImageSecondary}
                width={640}
                height={480}
                alt="Motorcycle electrical parts detail"
                loading="lazy"
                decoding="async"
                className="block h-24 w-full object-cover sm:h-28 lg:h-32"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -right-2 -top-3 rounded-lg bg-brand-yellow px-3 py-2 text-navy-900 shadow-xl sm:-right-3 sm:-top-4 sm:px-4 sm:py-3">
              <div className="text-xl font-extrabold leading-none sm:text-2xl">
                30+
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">
                Years of
              </div>

              <div className="text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">
                Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-9 flex flex-wrap gap-x-5 gap-y-4 border-t border-white/10 pt-6 sm:mt-10 sm:gap-x-8 sm:pt-8 lg:mt-12">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-yellow" />
            <span className="text-[11px] font-medium text-white/70 sm:text-xs">
              Quality Assured
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 shrink-0 text-brand-yellow" />
            <span className="text-[11px] font-medium text-white/70 sm:text-xs">
              Global Export
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 shrink-0 text-brand-yellow" />
            <span className="text-[11px] font-medium text-white/70 sm:text-xs">
              Specialized Range
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 60"
          className="block h-7 w-full sm:h-10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
