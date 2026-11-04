
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
    null,
  ],
  [
    'CDI Units',
    '/cdi%20unit/Orado%20rp221%20Cdi%20Unit%20For%20Bajaj%20Chetak%2099%20Bravo%20Classic%20sl%20(1).png.thumb.webp',
  ],
  [
    'Regulator Rectifiers',
    null,
  ],
  [
    'A.C. Regulators',
    '/ac%20regulator/rp246%20AC%20Regulator%20For%20Lml%20Select%20nv%20Spl%20express%205%20trendy%20%20(5).png',
  ],
  [
    'Electronic Flashers',
    '/electronic%20flasher/RP%20255SD%20%20Electronic%20Flasher%20for%20Honda%20Activa%2012v%20Dc%20Oe%20Type%20Two%20Wheelers%20S%20Cooter%20Parts%20%20(5).png',

  ],
  [
    'HT Ignition Coils',
    null,
  ],
  [
    'Ignition Switches',
    null,
  ],
  [
    'Starter Relays',
    null,
  ],
  [
    'Carbon Brushes and Holder Assemblies',
    null,
  ],
  [
    'Automotive Bulbs',
    null,
  ],
  [
    'Horns and Other Electrical Components',
    null,
  ],
] as const;

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

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-navy-900 shadow-sm">
      {children}
    </span>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/45" />

        <img
          src={heroImage}
          srcSet="/aboutusorado.png.800.webp 800w, /aboutusorado.png.webp 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt="Automotive mechanic working on electrical vehicle components"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          {...{ fetchpriority: 'high' }}
        />

        <div className="container-max relative flex min-h-[440px] items-center py-14 md:min-h-[500px] md:py-16 lg:min-h-[540px] lg:py-20">
          <div className="max-w-4xl">
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
                className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy-900"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section
        id="about-history"
        className="scroll-mt-24 bg-gray-50 py-10 md:py-12"
      >
        <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
              Three Decades of Automotive Electrical Expertise
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Established in 1994, ORADO specializes in automotive electrical
              components for two-wheelers and three-wheelers. Our product focus
              is built around the parts buyers rely on for charging, ignition,
              lighting, switching, and starting systems.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              We support domestic and international markets with a practical,
              specialized range and a customer-first approach to product
              compatibility, reliability, and business relationships.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {storyHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm font-semibold text-navy-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
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

            <div className="absolute bottom-5 left-5 rounded-xl bg-navy-900 px-5 py-4 text-white shadow-lg">
              <strong className="block text-3xl font-extrabold text-brand-yellow">
                1994
              </strong>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                Established
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product expertise */}
      <section
        id="about-products"
        className="scroll-mt-24 bg-white py-10 md:py-12"
      >
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionLabel>Our Product Expertise</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              Specialized Components. Reliable Performance.
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Explore the electrical categories that make up ORADO's focused
              automotive spare parts range.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {productExpertise.map(([name, image]) => (
              <a
                key={name}
                href="#products"
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-md"
              >
                <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-gray-100">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      width={700}
                      height={420}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
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

                <div className="flex min-h-[58px] items-center justify-between gap-2 px-3 py-2.5">
                  <span className="text-xs font-bold leading-snug text-navy-800 group-hover:text-brand-red">
                    {name}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300 group-hover:text-brand-red" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose ORADO */}
      <section className="bg-gray-50 py-10 md:py-12">
        <div className="container-max">
          <div className="text-center">
            <SectionLabel>Why Choose ORADO</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              A Focused Partner for Automotive Parts
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-bold text-navy-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing and quality */}
      <section
        id="about-quality"
        className="scroll-mt-24 bg-white py-10 md:py-12"
      >
        <div className="container-max grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={qualityImage}
              srcSet="/Stator%20Coil%20Quality%20Inspectionaboutus.png.800.webp 800w, /Stator%20Coil%20Quality%20Inspectionaboutus.png.webp 1400w"
              sizes="(max-width: 1023px) 100vw, 50vw"
              width={1400}
              height={788}
              alt="Automotive workshop workbench with tools and maintenance products"
              className="h-[320px] w-full object-cover md:h-[380px]"
              loading="lazy"
            />
          </div>

          <div>
            <SectionLabel>Manufacturing & Quality</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              Focused on Quality and Reliability
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              ORADO is focused on dependable automotive electrical components,
              practical product compatibility, and consistent customer service.
              Our approach keeps the range specialized and aligned with the
              needs of parts buyers.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              For product details, category guidance, and quotation support,
              our team is available to help buyers identify the right range for
              their business.
            </p>

            <a
              href="#quality"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-800"
            >
              Quality & Manufacturing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="bg-navy-900 py-10 text-white md:py-12">
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionLabel>Markets We Serve</SectionLabel>

            <h2 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
              Supporting Automotive Parts Buyers
            </h2>

            <p className="mt-4 leading-relaxed text-white/65">
              ORADO supports the businesses that keep automotive parts moving
              from specialist suppliers to workshops and customers.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {markets.map(([label, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-4"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-yellow" />
                <span className="text-sm font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
