
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
  twoWheelerCategoryCardImages,
} from '@/data/productImages';

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
    images: twoWheelerCategoryCardImages,
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
      <div className="mb-2 flex flex-col gap-2 border-b border-gray-200 pb-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-yellow shadow-sm">
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
              {department.eyebrow}
            </p>

            <h3 className="font-display text-lg font-extrabold text-navy-900 sm:text-xl md:text-2xl">
              {department.title}
            </h3>

            <p className="mt-0.5 max-w-2xl text-[11px] leading-relaxed text-gray-500 sm:text-xs">
              {department.description}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-1.5">
            <span
              className={`h-2 w-2 rounded-full ${department.accent}`}
            />

            <span className="text-sm font-bold text-navy-900">
              {department.categories.length}
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
              Categories
            </span>
          </div>

          <a
            href={department.viewAllHref}
            className="inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-navy-200 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy-700 transition-colors hover:bg-navy-900 hover:text-white"
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
    <section id="products" className="bg-gray-50 py-8 sm:py-10 lg:py-12">
      <div className="container-max">
        {/* Catalogue Header Panel */}

        <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-5 py-6 shadow-xl sm:rounded-3xl sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[28px] border-white/5" />

          <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full border-[18px] border-brand-yellow/10" />

          <div className="relative grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1.5">
                <Layers3 className="h-3.5 w-3.5 text-brand-yellow" />

                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow sm:text-xs">
                  Complete Product Catalogue
                </span>
              </div>

              <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                Everything you need for the road, workshop, and business.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                Explore ORADO by product family. Browse categories in compact,
                auto-rotating showcases designed for wholesalers, distributors,
                retailers, and workshop buyers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <Globe2 className="mb-1.5 h-5 w-5 text-brand-yellow" />
                <p className="text-lg font-extrabold text-white">3</p>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Product families
                </p>
              </div>

              <div>
                <ShieldCheck className="mb-1.5 h-5 w-5 text-brand-yellow" />
                <p className="text-lg font-extrabold text-white">
                  {totalCategories}
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Categories
                </p>
              </div>

              <div>
                <Wrench className="mb-1.5 h-5 w-5 text-brand-yellow" />
                <p className="text-lg font-extrabold text-white">B2B</p>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Ready to source
                </p>
              </div>
            </div>
          </div>

          {/* Product Family Navigation */}

          <div className="relative mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
            {departments.map((department) => (
              <a
                key={department.id}
                href={productPageLinks[department.id]}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold text-white transition-colors hover:border-brand-yellow/60 hover:bg-brand-yellow hover:text-navy-900 sm:px-4 sm:py-2 sm:text-xs"
              >
                {department.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Product Department Carousels */}

        <div className="mt-5 space-y-6 sm:mt-6 sm:space-y-7">
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
