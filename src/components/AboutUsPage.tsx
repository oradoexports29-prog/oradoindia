import { useState } from 'react';
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
import { twoWheelerProductCategories } from '@/data/navigation';

type ProductExpertiseItem = {
  name: string;
  image: string | null;
  categoryLabel: string;
};

const productExpertise: ProductExpertiseItem[] = [
  {
    name: 'Charging Coils (Source)',
    image: '/chargingcoil.png.webp',
    categoryLabel: 'Charging Coil (Source)',
  },
  {
    name: 'L.T. Coils (Lighting Coils)',
    image: '/ltcoil.png.webp',
    categoryLabel: 'L.T. Coils (Light)',
  },
  {
    name: 'Pickup Coils',
    image: '/2 wheeler/pickup coil/RP182 Ignition Pickup Coil For Bajaj 12v .webp',
    categoryLabel: 'Pick Up Coil (Pulsar)',
  },
  {
    name: 'Stator Coil Plates and Assemblies',
    image: '/2 wheeler/coil plate assembly/Orado rp283 Stator Coil Plate Assembly For Bajaj chetak 6v point type (1).webp',
    categoryLabel: 'Coil Plate Assembly',
  },
  {
    name: 'CDI Units',
    image: '/2 wheeler/cdi unit/RP220 CDI Unit For Bajaj Chetak 12V 5 Pin Scooter Two Wheeler Spare Parts .webp',
    categoryLabel: 'C.D.I. Unit',
  },
  {
    name: 'Regulator Rectifiers',
    image: '/2 wheeler/regulator rectifier/RP256 Lml Vespa Select Self Start Select II 5 Pin.webp',
    categoryLabel: 'Regulator Rectifier',
  },
  {
    name: 'A.C. Regulators',
    image: '/2 wheeler/ac regulator/rp246 AC Regulator For Lml Select nv Spl express 5 trendy  (5).webp',
    categoryLabel: 'A.C. Regulator',
  },
  {
    name: 'Electronic Flashers',
    image: '/2 wheeler/electronic flasher/RP250 Electronic Flasher for Bajaj 12V AC Scooter Two Wheeler Spare Parts (1).webp',
    categoryLabel: 'Electronic Flasher',
  },
  {
    name: 'HT Ignition Coils',
    image: '/2 wheeler/ht coil/RP315.webp',
    categoryLabel: 'H.T. Coils',
  },
  {
    name: 'Ignition Switches Cum Steering Locks',
    image: '/2 wheeler/Ignition Switch Cum Steering Lock/RP384 Ignition switch Lock For Hero Hnd Splendor Passion (3).webp',
    categoryLabel: 'Ignition Switch Cum Steering Lock / Ignition Switch',
  },
  {
    name: 'Starter Relays',
    image: '/2 wheeler/self relay/RP489 Bajaj platina ug4 ct100.webp',
    categoryLabel: 'Self Relay',
  },
  {
    name: 'Carbon Brushes and Holder Assemblies',
    image: '/2 wheeler/Carbon Brush Holder Assly. for Starter/RP546  Hero Honda Super Splendor Glamour Ignitor shine nm zeus acess nm.webp',
    categoryLabel: 'Carbon Brush Holder Assly. for Starter',
  },
  {
    name: 'Automotive Bulbs',
    image: '/2 wheeler/headlamp bulb/RP505 Hero Honda Ss Sleek.webp',
    categoryLabel: 'Automotive Bulbs',
  },
  {
    name: 'Horns and Other Electrical Components',
    image: '/2 wheeler/dc horn product/RP614 Dc Horn For Horn 74mm 12v universal active type.webp',
    categoryLabel: 'DC Horn Product',
  },
];

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-navy-900">
      {children}
    </span>
  );
}

function CategoryProductImage({
  src,
  alt,
}: {
  src: string | null;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 px-3 text-center">
        <span className="text-3xl font-extrabold tracking-wider text-navy-900/25">
          ORADO
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          Product range
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={700}
      height={420}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain p-3"
    />
  );
}

export default function AboutUsPage() {
  return (
    <main id="about-page-content" className="about-page overflow-hidden">
      {/* Hero */}
      <section className="bg-navy-900 py-12 text-white md:py-16 lg:py-20">
        <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-3xl">
            <SectionLabel>About ORADO</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Automotive Electrical Parts Expertise Since 1994
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              ORADO is an Indian manufacturer, exporter, and supplier
              specializing in two-wheeler and three-wheeler electrical
              components. We serve wholesalers, distributors, retailers, and
              international buyers with a specialized range of automotive
              electrical spare parts.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#about-products"
                className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/35 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-navy-900"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src={heroImage}
              alt="Automotive electrical components and manufacturing"
              width={1600}
              height={900}
              className="block h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section
        id="about-history"
        className="scroll-mt-24 bg-gray-50 py-14 md:py-20 lg:py-24"
      >
        <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
              Three Decades of Automotive Electrical Expertise
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Established in 1994, ORADO specializes in automotive electrical
              components for two-wheelers and three-wheelers. Our product
              focus is built around the parts buyers rely on for charging,
              ignition, lighting, switching, and starting systems.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              We support domestic and international markets with a practical,
              specialized range and a customer-first approach to product
              compatibility, reliability, and business relationships.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {storyHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 text-sm font-semibold text-navy-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src={storyImage}
              alt="Automotive manufacturing and product assembly"
              width={1536}
              height={1024}
              loading="lazy"
              className="block h-[360px] w-full object-cover md:h-[440px]"
            />
            <div className="bg-navy-900 px-6 py-4 text-white">
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
        className="scroll-mt-24 bg-white py-14 md:py-20 lg:py-24"
      >
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionLabel>Our Product Expertise</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              Specialized Components. Reliable Performance.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Explore the electrical categories that make up ORADO&apos;s
              focused automotive spare parts range.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {productExpertise.map((item) => {
              const category = twoWheelerProductCategories.find(
                (categoryItem) => categoryItem.label === item.categoryLabel
              );

              return (
                <a
                  key={item.name}
                  href={category?.href || '#products-page-2-wheeler'}
                  className="group block h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:border-brand-red/40"
                >
                  <div className="flex aspect-[5/3] items-center justify-center overflow-hidden bg-gray-50">
                    <CategoryProductImage src={item.image} alt={item.name} />
                  </div>
                  <div className="flex min-h-[62px] items-center justify-between gap-2 px-3 py-3">
                    <span className="text-xs font-bold leading-snug text-navy-800 group-hover:text-brand-red sm:text-sm">
                      {item.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose ORADO */}
      <section className="bg-gray-50 py-14 md:py-20 lg:py-24">
        <div className="container-max">
          <div className="text-center">
            <SectionLabel>Why Choose ORADO</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              A Focused Partner for Automotive Parts
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
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
          <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
            <img
              src={qualityImage}
              alt="Automotive electrical product quality inspection"
              width={1400}
              height={788}
              loading="lazy"
              className="block h-[320px] w-full object-cover md:h-[380px]"
            />
          </div>

          <div>
            <SectionLabel>Manufacturing &amp; Quality</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-900 md:text-4xl">
              Focused on Quality and Reliability
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              ORADO is focused on dependable automotive electrical
              components, practical product compatibility, and consistent
              customer service. Our approach keeps the range specialized and
              aligned with the needs of parts buyers.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              For product details, category guidance, and quotation support,
              our team is available to help buyers identify the right range
              for their business.
            </p>
            <a
              href="#quality"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-navy-800"
            >
              Quality &amp; Manufacturing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="bg-navy-900 py-14 text-white md:py-20 lg:py-24">
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionLabel>Markets We Serve</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
              Supporting Automotive Parts Buyers
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              ORADO supports the businesses that keep automotive parts moving
              from specialist suppliers to workshops and customers.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {markets.map(([label, Icon]) => (
              <div
                key={label}
                className="flex h-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-5"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-yellow" />
                <span className="text-sm font-bold text-white">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/15 pt-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-yellow">
              ORADO · Established 1994 · Made in India
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold md:text-3xl">
              Looking for a dependable automotive electrical parts partner?
            </h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
            >
              Talk to ORADO
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
