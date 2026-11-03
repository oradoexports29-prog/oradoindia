
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Send,
  Wrench,
} from 'lucide-react';

import {
  getCategoryBySlug,
  getAllCategories,
} from '@/data/categoryRegistry';

import { companyInfo } from '@/data/navigation';

interface CategoryDetailPageProps {
  slug: string;
}

function CategoryDetailPage({ slug }: CategoryDetailPageProps) {
  const category = getCategoryBySlug(slug);

  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    setWhatsappMsg(
      `Hello ORADO, I am interested in ${category.title}. Please provide more details and a quotation.`
    );

    setSelectedImage(category.image || null);
  }, [category]);

  if (!category) {
    return (
      <div className="container-max py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-navy-900">
          Category Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          The product category you are looking for doesn't exist or has been moved.
        </p>

        <a
          href="#products-page"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-brand-red-dark"
        >
          Return to Products
          <ArrowLeft className="h-4 w-4" />
        </a>
      </div>
    );
  }

  const familyCategories = getAllCategories().filter(
    (item) => item.family === category.family
  );

  const isChargingCoilBanner =
    category.slug === '2-wheeler-parts-charging-coil-source';

  const whatsappNumber = companyInfo.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* BREADCRUMBS */}
      <nav className="container-max py-5">
        <ul className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400">
          <li>
            <a href="#home" className="hover:text-brand-red">
              Home
            </a>
          </li>

          <li><ChevronRight /></li>

          <li>
            <a href="#products-page" className="hover:text-brand-red">
              Products
            </a>
          </li>

          <li><ChevronRight /></li>

          <li className="text-navy-900">{category.family}</li>

          <li><ChevronRight /></li>

          <li className="font-bold text-navy-900">{category.title}</li>
        </ul>
      </nav>

      {/* 1. CUSTOM CHARGING COIL HERO BANNER */}
      {isChargingCoilBanner && (
        <section className="container-max mt-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="/orado_charging_coil_hero_banner_cropped.png"
              alt="ORADO 2 Wheeler Charging Coil Source - Key Features"
              className="block h-auto w-full object-contain"
              fetchPriority="high"
            />
          </div>
        </section>
      )}

      {/* 2. ORIGINAL CATEGORY PRODUCT IMAGE AND DESCRIPTION
          This section now appears BELOW the banner.
          It also remains available for every other category. */}
      <section className="container-max mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">

        {/* PRODUCT IMAGE GALLERY */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={category.title}
                className="h-full w-full bg-white object-contain"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                <Wrench className="h-16 w-16" />
              </div>
            )}
          </div>

          {/* CATEGORY IMAGE THUMBNAILS */}
          <div className="grid grid-cols-4 gap-3">
            {familyCategories
              .filter((item) => item.image)
              .slice(0, 4)
              .map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setSelectedImage(item.image)}
                  aria-label={`View ${item.title}`}
                  className={`aspect-square overflow-hidden rounded-lg border-2 bg-white transition-all ${
                    selectedImage === item.image
                      ? 'border-brand-red ring-2 ring-brand-red/20'
                      : 'border-gray-200 hover:border-brand-red/50'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </button>
              ))}
          </div>
        </div>

        {/* CATEGORY DETAILS */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-md bg-yellow-400 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-navy-900">
            {category.family}
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-tight text-navy-900 md:text-5xl">
            {category.title}
          </h1>

          <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-red" />

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            {category.description}
          </p>

          {/* ENQUIRY BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
            >
              Request a Quote
              <Send className="h-4 w-4" />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-700"
            >
              Enquire via WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. RELATED CATEGORIES */}
      <section className="container-max mt-16 md:mt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-900 md:text-3xl">
              Related Categories
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore more products from {category.family}.
            </p>
          </div>

          <a
            href="#products-page"
            className="shrink-0 text-xs font-bold uppercase tracking-wide text-brand-red hover:underline"
          >
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {familyCategories
            .filter((item) => item.slug !== category.slug)
            .slice(0, 4)
            .map((item) => (
              <a
                key={item.slug}
                href={`#category/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg sm:p-4"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-50">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-300">
                      <Wrench className="h-12 w-12" />
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-bold text-navy-900 transition-colors group-hover:text-brand-red">
                  {item.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-red">
                  Explore Category →
                </span>
              </a>
            ))}
        </div>
      </section>

    </main>
  );
}

function ChevronRight() {
  return (
    <svg
      className="h-3 w-3 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default CategoryDetailPage;
