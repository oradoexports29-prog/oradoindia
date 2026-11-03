import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Send,
  Wrench,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Package,
} from 'lucide-react';

import {
  getCategoryBySlug,
  getAllCategories,
} from '@/data/categoryRegistry';

import { chargingCoilProducts } from '@/data/chargingCoilProducts';
import { ltCoilProducts } from '@/data/ltCoilProducts';
import { companyInfo } from '@/data/navigation';

interface CategoryDetailPageProps {
  slug: string;
}

function CategoryDetailPage({ slug }: CategoryDetailPageProps) {
  const category = getCategoryBySlug(slug);

  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const thumbnailSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!category) return;

    setWhatsappMsg(
      `Hello ORADO, I am interested in ${category.title}. Please provide more details and a quotation.`
    );

    setSelectedImage(category.image || null);
    setSelectedProductIndex(0);
  }, [category]);

  useEffect(() => {
    if (category?.slug !== '2-wheeler-parts-lt-coils-light') return;

    const slider = thumbnailSliderRef.current;
    const selectedThumbnail = slider?.children.item(
      selectedProductIndex
    ) as HTMLElement | null;

    if (!slider || !selectedThumbnail) return;

    const sliderBounds = slider.getBoundingClientRect();
    const thumbnailBounds = selectedThumbnail.getBoundingClientRect();

    if (slider.scrollHeight > slider.clientHeight) {
      if (thumbnailBounds.top < sliderBounds.top) {
        slider.scrollTop -= sliderBounds.top - thumbnailBounds.top;
      } else if (thumbnailBounds.bottom > sliderBounds.bottom) {
        slider.scrollTop += thumbnailBounds.bottom - sliderBounds.bottom;
      }
    } else if (slider.scrollWidth > slider.clientWidth) {
      if (thumbnailBounds.left < sliderBounds.left) {
        slider.scrollLeft -= sliderBounds.left - thumbnailBounds.left;
      } else if (thumbnailBounds.right > sliderBounds.right) {
        slider.scrollLeft += thumbnailBounds.right - sliderBounds.right;
      }
    }
  }, [category, selectedProductIndex]);

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
  const isLtCoilPage =
    category.slug === '2-wheeler-parts-lt-coils-light';

  const showcaseProducts = isLtCoilPage
    ? ltCoilProducts
    : chargingCoilProducts;
  const selectedProduct = showcaseProducts[selectedProductIndex];
  const heroBannerImage = isChargingCoilBanner
    ? '/orado_charging_coil_hero_banner_cropped.png'
    : isLtCoilPage
      ? '/L.T. Coils Product Feature Banner.png'
      : null;

  const whatsappNumber = companyInfo.whatsappNumber.replace(/[^0-9]/g, '');

  const selectProduct = (index: number) => {
    setSelectedProductIndex(
      (index + showcaseProducts.length) % showcaseProducts.length
    );
  };

  const moveProductUp = () => {
    selectProduct(selectedProductIndex - 1);
  };

  const moveProductDown = () => {
    selectProduct(selectedProductIndex + 1);
  };

  const productWhatsappMessage = selectedProduct
    ? `Hello ORADO, I am interested in ${isLtCoilPage ? 'L.T. Coil' : 'Charging Coil'} ${selectedProduct.partNumber} for ${selectedProduct.vehicle}. Please share the price and availability.`
    : whatsappMsg;

  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* BREADCRUMBS */}
      <nav
        className={`container-max py-5 ${
          isLtCoilPage ? 'max-[639px]:min-h-20' : ''
        }`}
      >
        <ul className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400">
          <li>
            <a href="#home" className="hover:text-brand-red">
              Home
            </a>
          </li>

          <li><ChevronRight className="h-3 w-3" /></li>

          <li>
            <a href="#products-page" className="hover:text-brand-red">
              Products
            </a>
          </li>

          <li><ChevronRight className="h-3 w-3" /></li>

          <li className="text-navy-900">{category.family}</li>

          <li><ChevronRight className="h-3 w-3" /></li>

          <li className="font-bold text-navy-900">{category.title}</li>
        </ul>
      </nav>

      {/* 1. CHARGING COIL HERO BANNER */}
      {heroBannerImage && (
        <section className="container-max mt-2">
          <div
            className={`overflow-hidden rounded-2xl ${
              isLtCoilPage
                ? 'aspect-[2172/558]'
                : 'bg-white shadow-sm'
            }`}
          >
            <img
              src={heroBannerImage}
              alt={
                isLtCoilPage
                  ? 'ORADO L.T. Coils (Light) Product Feature Banner'
                  : 'ORADO 2 Wheeler Charging Coil Source - Key Features'
              }
              className={`block w-full ${
                isLtCoilPage
                  ? 'h-full object-cover object-center'
                  : 'h-auto object-contain'
              }`}
              fetchPriority="high"
            />
          </div>
        </section>
      )}

      {/* 2. CHARGING COIL PRODUCT SHOWCASE */}
      {isChargingCoilBanner || isLtCoilPage ? (
        <section className="container-max mt-10">
          <div className="grid grid-cols-1 gap-6 lg:items-stretch lg:grid-cols-[minmax(0,1fr)_100px_minmax(0,0.9fr)]">

            {/* MAIN PRODUCT IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div
                className={`relative flex aspect-[1.08/1] items-center justify-center p-5 sm:aspect-square md:p-8 ${
                  isLtCoilPage ? 'min-h-0 min-w-0 overflow-hidden' : ''
                }`}
              >
                {selectedProduct && (
                  <img
                    key={selectedProduct.image}
                    src={selectedProduct.image}
                    alt={`${selectedProduct.partNumber} ${selectedProduct.name}`}
                    className={`h-full w-full object-contain transition-opacity duration-300 ${
                      isLtCoilPage ? 'min-h-0 min-w-0' : ''
                    }`}
                    fetchPriority="high"
                  />
                )}
              </div>

              <div className="border-t border-gray-100 px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Selected Product
                    </p>
                    <h2 className="mt-1 text-lg font-extrabold text-navy-900">
                      {selectedProduct?.partNumber}
                    </h2>
                  </div>

                  <span className="rounded-md bg-yellow-400 px-4 py-2 text-xs font-extrabold text-navy-900">
                    {selectedProductIndex + 1} / {showcaseProducts.length}
                  </span>
                </div>
              </div>
            </div>

            {/* VERTICAL PRODUCT SLIDER */}
            <div className="relative min-w-0 lg:min-h-0 lg:self-stretch">
              <div className="flex flex-row items-center gap-2 lg:absolute lg:inset-0 lg:flex-col">

                <button
                  type="button"
                  onClick={moveProductUp}
                  aria-label="Previous product"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-navy-900 shadow-sm transition hover:border-brand-red hover:text-brand-red lg:h-10 lg:w-full"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>

                <div
                  ref={thumbnailSliderRef}
                  className="flex min-w-0 flex-1 gap-1 overflow-x-auto overscroll-x-contain py-1 sm:gap-2 lg:min-h-0 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:px-1"
                  style={{ scrollbarWidth: 'thin' }}
                >
                  {showcaseProducts.map((product, index) => (
                    <button
                      key={product.partNumber}
                      type="button"
                      onClick={() => selectProduct(index)}
                      aria-label={`Select ${product.partNumber}`}
                      aria-pressed={selectedProductIndex === index}
                      className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition-all sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-[92px] lg:w-full ${
                        selectedProductIndex === index
                          ? 'border-brand-red ring-2 ring-brand-red/20'
                          : 'border-gray-200 hover:border-brand-red/50'
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.partNumber}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />

                      <span className="absolute bottom-0 left-0 right-0 bg-navy-900/85 py-1 text-center text-[10px] font-bold text-white">
                        {product.partNumber}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={moveProductDown}
                  aria-label="Next product"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-navy-900 shadow-sm transition hover:border-brand-red hover:text-brand-red lg:h-10 lg:w-full"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div
              className={`flex flex-col justify-start rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-9 ${
                isLtCoilPage ? 'min-h-[48rem] lg:min-h-[719px]' : ''
              }`}
            >

              <span className="mb-4 inline-flex w-fit rounded-md bg-yellow-400 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-navy-900">
                {category.family}
              </span>

              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                ORADO Product Collection
              </p>

              <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
                {isLtCoilPage ? 'L.T. COILS (LIGHT)' : category.title}
              </h1>

              <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-red" />

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                {isLtCoilPage
                  ? "Explore ORADO's range of L.T. coils. Select a product to view its part number and vehicle application."
                  : "Explore ORADO's range of charging and ignition coils for different two-wheeler applications. Select a product from the image slider to view its part number and vehicle application."}
              </p>

              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-brand-red" />

                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">
                      Product Part Number
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-navy-900">
                      {selectedProduct?.partNumber}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase text-gray-400">
                    Product Description
                  </p>

                  <p className="mt-2 text-base font-bold text-navy-900">
                    {selectedProduct?.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Vehicle: {selectedProduct?.vehicle}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
                >
                  Request a Quote
                  <Send className="h-4 w-4" />
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(productWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-700"
                >
                  Enquire via WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>
        </section>
      ) : (

        /* ORIGINAL CATEGORY LAYOUT FOR ALL OTHER CATEGORIES */
        <section className="container-max mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* PRODUCT IMAGE */}
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
      )}

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

export default CategoryDetailPage;