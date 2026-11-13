import { useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { twoWheelerProductCategories } from '@/data/navigation';

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Handshake,
  Headphones,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';

const productExpertise = [
  [
    'Charging Coils (Source)',
    '/charging%20coil/Orado%20rp101%20Ignition%20Charging%20Coil%20For%20Bajaj%2012%20Volt%20Green%20Coil%20(16).png.webp',
  ],
  [
    'L.T. Coils (Lighting Coils)',
    '/lt%20coil/orado%20RP159%20%20Ignition%20LT%20Coil%20Fit%20for%20Bajaj%20Caliber%20Upgrade%20Motorcycle%20Two%20Wheeler%20Spare%20Part%20(10).png.webp',
  ],
  [
    'Pickup Coils',
    '/pickup%20coil/ORP214%20%20Pick%20Up%20Coil%20For%20TVS%20Star%20City%20Centra%20Star%20DLX%20Bike%20Spare%20Parts%20(7).png.webp',
  ],
  [
    'Stator Coil Plates and Assemblies',
    '/coil%20plate%20assembly/Orado%20rp291%20Stator%20Coil%20Plate%20Assembly%20For%20Honda%20active%20new%20dio%20pleasure%20maestro%20(1).png',
  ],
  [
    'CDI Units',
    '/cdi%20unit/Orado%20rp221%20Cdi%20Unit%20For%20Bajaj%20Chetak%2099%20Bravo%20Classic%20sl%20(1).png.thumb.webp',
  ],
  [
    'Regulator Rectifiers',
    '/regulator%20rectifier/RP260AS.png',
  ],
  [
    'A.C. Regulators',
    '/ac%20regulator/rp246%20AC%20Regulator%20For%20Lml%20Select%20nv%20Spl%20express%205%20trendy%20%20(5).webp',
  ],
  [
    'Electronic Flashers',
    '/electronic%20flasher/RP%20255SD%20%20Electronic%20Flasher%20for%20Honda%20Activa%2012v%20Dc%20Oe%20Type%20Two%20Wheelers%20S%20Cooter%20Parts%20%20(5).webp',
  ],
  [
    'HT Ignition Coils',
    '/ht%20coil/RP316%20Bajaj%20Chetak%2012%20Volt%20(6).png',
  ],
  ['Ignition Switches', null],
  ['Starter Relays', null],
  ['Carbon Brushes and Holder Assemblies', null],
  ['Automotive Bulbs', null],
  ['Horns and Other Electrical Components', null],
] as const;

const categoryHrefByName: Record<string, string> = {
  'Charging Coils (Source)': 'Charging Coil (Source)',
  'L.T. Coils (Lighting Coils)': 'L.T. Coils (Light)',
  'Pickup Coils': 'Pick Up Coil (Pulsar)',
  'CDI Units': 'C.D.I. Unit',
  'A.C. Regulators': 'A.C. Regulator',
  'Electronic Flashers': 'Electronic Flasher',
  'Regulator Rectifiers': 'Regulator Rectifier',
  'Stator Coil Plates and Assemblies': 'Coil Plate Assembly',
  'HT Ignition Coils': 'H.T. Coils',
  'Ignition Switches': 'Ignition Switch Cum Steering Lock / Ignition Switch',
  'Starter Relays': 'Self Relay',
};

const benefits = [
  {
    title: 'Established Experience',
    text: 'Automotive electrical parts expertise since 1994.',
    icon: Award,
  },
  {
    title: 'Specialized Product Range',
    text: 'Components for two-wheelers and three-wheelers.',
    icon: Zap,
  },
  {
    title: 'B2B and Export Focus',
    text: 'Serving wholesalers, distributors, and international buyers.',
    icon: Globe2,
  },
  {
    title: 'Customer-Focused Service',
    text: 'Supporting buyers with product and quotation inquiries.',
    icon: Headphones,
  },
];

const markets = [
  ['Wholesalers', BriefcaseBusiness],
  ['Distributors', Truck],
  ['Retailers', Wrench],
  ['Importers', Globe2],
  ['International B2B buyers', Handshake],
] as const;

const storyHighlights = [
  'Industry experience since 1994',
  'Specialized automotive electrical spare parts',
  'Serving domestic and international markets',
  'A focus on reliability, compatibility, and relationships',
];

const heroImage = '/aboutusorado.png.webp';
const storyImage = '/automotivemanufacturingjourneyinfographicaboutus.png.webp';
const qualityImage = '/Stator Coil Quality Inspectionaboutus.png.webp';

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-navy-900 shadow-sm">
      {children}
    </span>
  );
}

function Reveal({
  children,
  className = '',
  delay = 0,
  scrollVisual = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  scrollVisual?: boolean;
}) {
  const style = { '--about-reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <div
      className={`about-reveal ${className}`}
      style={style}
      data-about-reveal
      data-scroll-visual={scrollVisual ? '' : undefined}
    >
      {children}
    </div>
  );
}

export default function AboutUsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '#about-page-content [data-about-reveal]'
    );

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
          } else {
            // Remove the visible state when leaving the viewport so the
            // entrance animation can replay when scrolling back either way.
            element.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    // Scroll-linked image treatment: saturation, scale and a diagonal light sweep
    // respond continuously to viewport progress and reverse naturally on upward scroll.
    const visualFrames = Array.from(
      document.querySelectorAll<HTMLElement>(
        '#about-page-content [data-scroll-visual]'
      )
    );
    let frame = 0;

    const updateImageProgress = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;

      visualFrames.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const travel = viewportHeight + rect.height;
        const progress = Math.min(
          1,
          Math.max(0, (viewportHeight - rect.top) / travel)
        );
        element.style.setProperty('--image-progress', progress.toFixed(4));
      });
    };

    const requestImageUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateImageProgress);
    };

    updateImageProgress();
    window.addEventListener('scroll', requestImageUpdate, { passive: true });
    window.addEventListener('resize', requestImageUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestImageUpdate);
      window.removeEventListener('resize', requestImageUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main id="about-page-content" className="about-page overflow-hidden">
      <style>{`
        .about-page {
          --about-ease: cubic-bezier(.2,.72,.25,1);
        }

        .about-page .about-reveal {
          opacity: 0;
          transform: translate3d(0, 34px, 0);
          transition:
            opacity 780ms var(--about-ease),
            transform 780ms var(--about-ease);
          transition-delay: var(--about-reveal-delay, 0ms);
          will-change: opacity, transform;
        }

        .about-page .about-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .about-page .about-image-reveal {
          overflow: hidden;
          clip-path: inset(0 0 13% 0 round 1rem);
          transition: clip-path 1100ms var(--about-ease);
        }

        .about-page .about-image-reveal.is-visible {
          clip-path: inset(0 0 0 0 round 1rem);
        }

        .about-page .about-image-reveal img {
          transform: scale(1.075);
          transition: transform 1400ms var(--about-ease);
        }

        .about-page .about-image-reveal.is-visible img {
          transform: scale(1);
        }

        /* ORADO precision-scan image reveal: a restrained technical overlay clears with scroll. */
        .about-page .about-image-frame {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          --image-progress: 0;
          background: #10264d;
        }

        .about-page .about-image-frame img {
          display: block;
          filter:
            saturate(calc(.48 + var(--image-progress) * .52))
            contrast(calc(.96 + var(--image-progress) * .04));
          transform: scale(calc(1.055 - var(--image-progress) * .055));
          transform-origin: center;
          transition: filter 90ms linear;
          will-change: transform, filter;
        }

        /* Blueprint-toned layer clears from left to right as the visitor scrolls. */
        .about-page .about-image-frame::after {
          content: '';
          position: absolute;
          z-index: 2;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, rgba(8, 27, 55, .90), rgba(12, 43, 79, .60)),
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,.075) 0,
              rgba(255,255,255,.075) 1px,
              transparent 1px,
              transparent 26px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,.075) 0,
              rgba(255,255,255,.075) 1px,
              transparent 1px,
              transparent 26px
            );
          clip-path: inset(0 0 0 calc(var(--image-progress) * 100%));
          transition: clip-path 80ms linear;
        }

        /* Fine scanning beam at the live edge of the reveal. */
        .about-page .about-image-frame::before {
          content: '';
          position: absolute;
          z-index: 3;
          top: 0;
          bottom: 0;
          left: calc(var(--image-progress) * 100%);
          width: 3px;
          transform: translateX(-50%);
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.15),
            #ffcc00 28%,
            #e32936 72%,
            rgba(255,255,255,.15)
          );
          box-shadow:
            0 0 10px rgba(255,204,0,.65),
            0 0 28px rgba(227,41,54,.35);
          opacity: calc(.15 + var(--image-progress) * .85);
        }

        .about-page .about-image-frame.is-visible {
          clip-path: inset(0 0 0 0 round 1rem);
        }

        .about-page .about-product-card {
          transition:
            transform 450ms var(--about-ease),
            border-color 450ms ease,
            box-shadow 450ms ease;
        }

        .about-page .about-product-card:hover {
          transform: translateY(-7px);
        }

        .about-page .about-product-card img {
          transition: transform 700ms var(--about-ease);
        }

        .about-page .about-product-card:hover img {
          transform: scale(1.07);
        }

        .about-page .about-hero-image {
          transform: scale(1.08);
          animation: aboutHeroSettle 1500ms var(--about-ease) both;
        }

        .about-page .about-hero-copy {
          animation: aboutHeroText 900ms var(--about-ease) 120ms both;
        }

        .about-page .about-market-card {
          transition:
            background-color 350ms ease,
            border-color 350ms ease,
            transform 350ms var(--about-ease);
        }

        .about-page .about-market-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,.11);
          border-color: rgba(255,204,0,.5);
        }

        @keyframes aboutHeroSettle {
          from { opacity: .45; transform: scale(1.15); }
          to { opacity: 1; transform: scale(1.08); }
        }

        @keyframes aboutHeroText {
          from { opacity: 0; transform: translate3d(0, 26px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page .about-reveal,
          .about-page .about-image-reveal,
          .about-page .about-image-reveal img,
          .about-page .about-hero-image,
          .about-page .about-hero-copy,
          .about-page .about-product-card,
          .about-page .about-product-card img,
          .about-page .about-image-frame img,
          .about-page .about-image-frame::after,
          .about-page .about-image-frame::before,
          .about-page .about-market-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            clip-path: none !important;
            opacity: 1 !important;
            will-change: auto !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/45" />

        <img
          src={heroImage}
          srcSet="/aboutusorado.png.800.webp 800w, /aboutusorado.png.webp 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt="Automotive mechanic working on electrical vehicle components"
          className="about-hero-image absolute inset-0 z-0 h-full w-full object-cover opacity-35"
        />

        <div className="container-max relative z-20 flex min-h-[440px] items-center py-14 md:min-h-[500px] md:py-16 lg:min-h-[540px] lg:py-20">
          <div className="about-hero-copy max-w-4xl">
            <SectionLabel>About ORADO</SectionLabel>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Automotive Electrical Parts Expertise Since 1994
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              ORADO is an Indian manufacturer, exporter, and supplier
              specializing in two-wheeler and three-wheeler electrical
              components. We serve wholesalers, distributors, retailers, and
              international buyers with a specialized range of automotive
              electrical spare parts.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#products-page"
                className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red-dark"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-navy-900"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/15 to-transparent" />
      </section>

      {/* Our story */}
      <section
        id="about-history"
        className="scroll-mt-24 bg-gray-50 py-14 md:py-20 lg:py-24"
      >
        <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
                Three Decades of Automotive Electrical Expertise
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 leading-relaxed text-gray-600">
                Established in 1994, ORADO specializes in automotive electrical
                components for two-wheelers and three-wheelers. Our product
                focus is built around the parts buyers rely on for charging,
                ignition, lighting, switching, and starting systems.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 leading-relaxed text-gray-600">
                We support domestic and international markets with a practical,
                specialized range and a customer-first approach to product
                compatibility, reliability, and business relationships.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {storyHighlights.map((highlight, index) => (
                <Reveal key={highlight} delay={260 + index * 75}>
                  <div className="flex items-start gap-2 text-sm font-semibold text-navy-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                    {highlight}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="about-image-reveal about-image-frame rounded-2xl shadow-xl" delay={120} scrollVisual>
            <div className="relative z-0 rounded-2xl">
              <img
                src={storyImage}
                srcSet="/automotivemanufacturingjourneyinfographicaboutus.png.800.webp 800w, /automotivemanufacturingjourneyinfographicaboutus.png.webp 1536w"
                sizes="(max-width: 1023px) 100vw, 50vw"
                width={1536}
                height={1024}
                alt="Mechanic inspecting automotive electrical components"
                className="h-[360px] w-full object-cover md:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="relative -mt-20 ml-5 w-fit rounded-xl bg-navy-900 px-5 py-4 text-white shadow-lg">
              <strong className="block text-3xl font-extrabold text-brand-yellow">
                1994
              </strong>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                Established
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product expertise */}
      <section
        id="about-products"
        className="scroll-mt-24 bg-white py-14 md:py-20 lg:py-24"
      >
        <div className="container-max">
          <Reveal className="max-w-2xl">
            <SectionLabel>Our Product Expertise</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              Specialized Components. Reliable Performance.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Explore the electrical categories that make up ORADO's focused
              automotive spare parts range.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {productExpertise.map(([name, image], index) => {
              const categoryName = categoryHrefByName[name];
              const category = twoWheelerProductCategories.find(
                (item) => item.label === categoryName
              );

              return (
                <Reveal key={name} delay={(index % 4) * 75}>
                  <a
                    href={category?.href || '#products-page-2-wheeler'}
                    className="about-product-card group block h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:border-brand-red/40 hover:shadow-xl"
                  >
                    <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-gray-100">
                      {image ? (
                        <img
                          src={image}
                          alt={name}
                          width={700}
                          height={420}
                          className="h-full w-full object-contain p-3"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 px-3 text-center">
                          <span className="text-3xl font-extrabold tracking-wider text-navy-900/20">
                            ORADO
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                            Product range
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex min-h-[62px] items-center justify-between gap-2 px-3 py-3">
                      <span className="text-xs font-bold leading-snug text-navy-800 transition-colors group-hover:text-brand-red sm:text-sm">
                        {name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-red" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose ORADO */}
      <section className="bg-gray-50 py-14 md:py-20 lg:py-24">
        <div className="container-max">
          <Reveal className="text-center">
            <SectionLabel>Why Choose ORADO</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              A Focused Partner for Automotive Parts
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 100}>
                  <div className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-navy-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {benefit.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing and quality */}
      <section
        id="about-quality"
        className="scroll-mt-24 bg-white py-14 md:py-20 lg:py-24"
      >
        <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="about-image-reveal about-image-frame rounded-2xl shadow-lg" scrollVisual>
            <div className="relative z-0 rounded-2xl">
              <img
                src={qualityImage}
                srcSet="/Stator%20Coil%20Quality%20Inspectionaboutus.png.800.webp 800w, /Stator%20Coil%20Quality%20Inspectionaboutus.png.webp 1400w"
                sizes="(max-width: 1023px) 100vw, 50vw"
                width={1400}
                height={788}
                alt="Automotive electrical product quality inspection"
                className="h-[320px] w-full object-cover md:h-[380px]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>Manufacturing & Quality</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
                Focused on Quality and Reliability
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 leading-relaxed text-gray-600">
                ORADO is focused on dependable automotive electrical
                components, practical product compatibility, and consistent
                customer service. Our approach keeps the range specialized and
                aligned with the needs of parts buyers.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 leading-relaxed text-gray-600">
                For product details, category guidance, and quotation support,
                our team is available to help buyers identify the right range
                for their business.
              </p>
            </Reveal>
            <Reveal delay={310}>
              <a
                href="#quality"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800"
              >
                Quality & Manufacturing
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="bg-navy-900 py-14 text-white md:py-20 lg:py-24">
        <div className="container-max">
          <Reveal className="max-w-2xl">
            <SectionLabel>Markets We Serve</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
              Supporting Automotive Parts Buyers
            </h2>
            <p className="mt-4 leading-relaxed text-white/65">
              ORADO supports the businesses that keep automotive parts moving
              from specialist suppliers to workshops and customers.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {markets.map(([label, Icon], index) => (
              <Reveal key={label} delay={index * 80}>
                <div className="about-market-card flex h-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-5">
                  <Icon className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <span className="text-sm font-bold text-white">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 border-t border-white/15 pt-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-yellow">
              ORADO · Established 1994 · Made in India
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold md:text-3xl">
              Looking for a dependable automotive electrical parts partner?
            </h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red-dark"
            >
              Talk to ORADO
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
