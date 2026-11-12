
import {
  ArrowRight,
  Bike,
  Globe2,
  Layers3,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';

import CategoryCarousel from '@/components/CategoryCarousel';

import {
  lubricationAndHandToolProductCategories,
  threeWheelerProductCategories,
  twoWheelerProductCategories,
  NavSubItem,
} from '@/data/navigation';

import {
  lubricationHandToolImages,
  threeWheelerImages,
  twoWheelerImages,
} from '@/data/productImages';

/**
 * ORADO HOMEPAGE PRODUCT IMAGE MAPPING
 *
 * Only homepage 2-wheeler category images are changed.
 * Original product category data and navigation remain unchanged.
 */

const homepageTwoWheelerImageOverrides: Record<number, string> = {
  // First category group - actual ORADO product images
  0: '/chargingcoil.png.webp',
  1: '/ltcoil.png.webp',
  2: '/pickup%20coil/Orado%20rp191dd%20Ignition%20Pickup%20Coil%20For%20Bajaj%20Pulsar%20150%20(2).png.webp',
  3: '/cdi%20unit/RP221%20Cdi%20Unit%20For%20Bajaj%20Chetak%2099%20Bravo%20Classic%20sl%20.png',
  4: '/ac%20regulator/rp246%20AC%20Regulator%20For%20Lml%20Select%20nv%20Spl%20express%205%20trendy%20%20(5).webp',
  5: '/electronic%20flasher/RP%20255SD%20%20Electronic%20Flasher%20for%20Honda%20Activa%2012v%20Dc%20Oe%20Type%20Two%20Wheelers%20S%20Cooter%20Parts%20%20(5).webp',

  // Second category group - actual ORADO products
  6: '/regulator%20rectifier/RP256%20Lml%20Vespa%20Select%20Self%20Start%20Select%20II%205%20Pin%20(6).png',
  7: '/rectifier/RP277%20Regulator%20Rectifier%20For%20Hero%20Honda%20Cd%20100%20Dawn%20Kinetic%20Honda%20(3).png',
  8: '/coil%20plate%20assembly/Orado%20rp284%20Stator%20Coil%20Plate%20Assembly%20For%20Bajaj%20chetak%2012v%20electronic%20(2).png',
  9: '/ht%20coil/RP316%20Bajaj%20Chetak%2012%20Volt%20(6).png',
  10: '/igniters/rp358%20Ignition%20coil%20Igniters%20For%20Lml%20%20V%20espa%2012V%20%20(4).png',
  11: '/battery-wire/RP379-negative.png',
  12: '/Ignition%20Switch%20Cum%20Steering%20Lock/RP384%20Ignition%20switch%20Lock%20For%20Hero%20Hnd%20Splendor%20Passion%20(3).png',
  13: '/combination%20switch/RP455%20Hero%20Honda%20Cd%20100%20(1).png',
  14: '/self%20relay/RP489%20Bajaj%20platina%20ug4%20ct100.png',
};

const homepageTwoWheelerImages = twoWheelerImages.map(
  (image, index) =>
    homepageTwoWheelerImageOverrides[index] ?? image
);

interface ProductDepartment {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  categories: NavSubItem[];
  images: string[];
  icon: typeof Bike;
  accent: string;
  viewAllHref: string;
}

const departments: ProductDepartment[] = [
  {
    id: 'products-2-wheeler',
    eyebrow: '01 / Automotive Electricals',
    title: '2 Wheeler Parts',
    description:
      'Electrical components for motorcycles and scooters, sourced directly from the ORADO product catalogue.',
    categories: twoWheelerProductCategories,
    images: homepageTwoWheelerImages,
    icon: Bike,
    accent: 'bg-brand-red',
    viewAllHref: '#products-page-2-wheeler',
  },
  {
    id: 'products-3-wheeler',
    eyebrow: '02 / Automotive Electricals',
    title: '3 Wheeler Parts',
    description:
      'Dedicated electrical parts for three-wheeler applications including charging, ignition, relay, and lighting categories.',
    categories: threeWheelerProductCategories,
    images: threeWheelerImages,
    icon: Truck,
    accent: 'bg-navy-900',
    viewAllHref: '#products-page-3-wheeler',
  },
  {
    id: 'products-lubrication-hand-tools',
    eyebrow: '03 / Workshop Essentials',
    title: 'Lubrication & Hand Tools',
    description:
      'A combined workshop range covering vehicle care, lubrication, maintenance products, and practical hand tools.',
    categories: lubricationAndHandToolProductCategories,
    images: lubricationHandToolImages,
    icon: Wrench,
    accent: 'bg-brand-yellow',
    viewAllHref: '#products-page-lubrication',
  },
];

const productPageLinks: Record<string, string> = {
  'products-2-wheeler': '#products-page-2-wheeler',
  'products-3-wheeler': '#products-page-3-wheeler',
  'products-lubrication-hand-tools': '#products-page-lubrication',
};

function DepartmentSection({
  department,
}: {
  department: ProductDepartment;
}) {
  const Icon = department.icon;

  return (
    <section id={department.id} className="scroll-mt-24">
      <div className="mb-3 flex flex-col gap-3 border-b border-gray-200 pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-yellow shadow-md">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              {department.eyebrow}
            </p>

            <h3 className="font-display text-xl font-extrabold text-navy-900 md:text-2xl">
              {department.title}
            </h3>

            <p className="mt-1 max-w-2xl text-xs leading-relaxed text-gray-500">
              {department.description}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
            <span
              className={`h-2 w-2 rounded-full ${department.accent}`}
            />

            <span className="text-sm font-bold text-navy-900">
              {department.categories.length}
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Categories
            </span>
          </div>

          <a
            href={department.viewAllHref}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-navy-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy-700 transition-colors hover:bg-navy-900 hover:text-white"
          >
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <CategoryCarousel
        categories={department.categories}
        images={department.images}
        columns={6}
      />
    </section>
  );
}

export default function ProductCategories() {
  const totalCategories =
    twoWheelerProductCategories.length +
    threeWheelerProductCategories.length +
    lubricationAndHandToolProductCategories.length;

  return (
    <section id="products" className="bg-gray-50 py-14">
      <div className="container-max">
        {/* Catalogue Header Panel */}

        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-8 shadow-xl md:px-10 md:py-10">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[28px] border-white/5" />

          <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full border-[18px] border-brand-yellow/10" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5">
                <Layers3 className="h-3.5 w-3.5 text-brand-yellow" />

                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                  Complete Product Catalogue
                </span>
              </div>

              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Everything you need for the road, workshop, and business.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                Explore ORADO by product family. Browse categories in compact,
                auto-rotating showcases designed for wholesalers, distributors,
                retailers, and workshop buyers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5 border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <Globe2 className="mb-2 h-5 w-5 text-brand-yellow" />
                <p className="text-xl font-extrabold text-white">3</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Product families
                </p>
              </div>

              <div>
                <ShieldCheck className="mb-2 h-5 w-5 text-brand-yellow" />

                <p className="text-xl font-extrabold text-white">
                  {totalCategories}
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Categories
                </p>
              </div>

              <div>
                <Wrench className="mb-2 h-5 w-5 text-brand-yellow" />
                <p className="text-xl font-extrabold text-white">B2B</p>

                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Ready to source
                </p>
              </div>
            </div>
          </div>

          {/* Product Family Navigation */}

          <div className="relative mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {departments.map((department) => (
              <a
                key={department.id}
                href={productPageLinks[department.id]}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-colors hover:border-brand-yellow/60 hover:bg-brand-yellow hover:text-navy-900"
              >
                {department.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Product Department Carousels */}

        <div className="mt-8 space-y-8">
          {departments.map((department) => (
            <DepartmentSection
              key={department.id}
              department={department}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
