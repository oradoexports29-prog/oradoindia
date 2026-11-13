import { useEffect, useMemo, useRef, useState } from 'react';

import {

  ArrowLeft,

  ArrowRight,

  ArrowUpRight,

  ChevronRight,

  MessageCircle,

  Package,

  Search,

  Send,

  ShieldCheck,

  Wrench,

} from 'lucide-react';

import {

  getAllCategories,

  getCategoryBySlug,

} from '@/data/categoryRegistry';
















import { companyInfo } from '@/data/navigation';
import { catalogueProductsByCategory } from '@/data/catalogueProducts';

interface CategoryDetailPageProps {

  slug: string;

}

interface ProductCard {

  partNumber: string;

  referenceNumber?: string;

  name: string;

  vehicle: string;

  description?: string;

  voltage?: string;

  baseShellDiaMm?: string;

  image: string;

  thumbnail?: string;

}

const FALLBACK_IMAGE = '/logo.png';

/* =========================================================

   IMAGE PATH HANDLING

   Handles spaces, brackets and special characters.

   ========================================================= */

function encodeImagePath(path: string): string {
  if (!path) return FALLBACK_IMAGE;
  if (/^https?:\/\//i.test(path)) return path;
  return path
    .split('/')
    .map((segment) => {
      try {
        return encodeURIComponent(decodeURIComponent(segment));
      } catch {
        return encodeURIComponent(segment);
      }
    })
    .join('/');
}

/* =========================================================

   IMAGE ERROR HANDLING

   ========================================================= */

function handleImageError(

  event: React.SyntheticEvent<HTMLImageElement>

) {

  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === 'true') {

    image.style.visibility = 'hidden';

    return;

  }

  image.dataset.fallbackApplied = 'true';

  image.src = FALLBACK_IMAGE;

}

/* =========================================================

   CATEGORY IMAGE HELPERS

   Use actual product data for related category cards rather

   than relying on mismatched image-array indexes.

   ========================================================= */

function getCategoryImage(

  category: ReturnType<typeof getCategoryBySlug>

): string {

  if (!category) return FALLBACK_IMAGE;

  const slug = category.slug;

  return catalogueProductsByCategory[slug]?.[0]?.image || category.image || FALLBACK_IMAGE;

}

/* =========================================================

   MAIN COMPONENT

   ========================================================= */

function CategoryDetailPage({

  slug,

}: CategoryDetailPageProps) {

  const category = getCategoryBySlug(slug);

  const isLtCoil =

    slug === '2-wheeler-parts-lt-coils-light';

  const isPickupCoil =

    slug === '2-wheeler-parts-pick-up-coil-pulsar';

  const isCdi =

    slug === '2-wheeler-parts-cdi-unit';

  const isAcRegulator =

    slug === '2-wheeler-parts-ac-regulator';

  const isFlasher =

    slug === '2-wheeler-parts-electronic-flasher';

  const isRectifier =

    slug === '2-wheeler-parts-rectifier';

  const isHtCoil =

    slug === '2-wheeler-parts-ht-coils';

  const isIgniter =

    slug === '2-wheeler-parts-igniters';

  const isBatteryWire =

    slug === '2-wheeler-parts-battery-wire';

  const isIgnitionSwitch =

    slug === '2-wheeler-parts-ignition-switch-cum-steering-lock-ignition-switch';

  const isCombinationSwitch =

    slug === '2-wheeler-parts-combination-switch-lh-only';

  const isSelfRelay = slug === '2-wheeler-parts-self-relay';
  const isCoilPlateAssembly =
    slug === '2-wheeler-parts-coil-plate-assembly';

  const [activeProduct, setActiveProduct] = useState(0);

  const [productSearch, setProductSearch] = useState('');

  const referenceStripRef = useRef<HTMLDivElement | null>(null);

  /* Reset selection when category changes */

  useEffect(() => {

    setActiveProduct(0);

    setProductSearch('');

  }, [slug]);

  /* Related categories */

  const familyCategories = useMemo(() => {

    if (!category) return [];

    return getAllCategories().filter(

      (item) =>

        item.family === category.family &&

        item.slug !== category.slug

    );

  }, [category]);

  /* Product heading */

  const productType = isCoilPlateAssembly
    ? 'Coil Plate Assembly'
    : isSelfRelay

    ? 'Self Relay'

    : isCombinationSwitch

    ? 'Combination Switch (LH Only)'

    : isIgnitionSwitch

    ? 'Ignition Switch Cum Steering Lock'

    : isBatteryWire

    ? 'Battery Wire'

    : isIgniter

    ? 'Ignition Coil Igniter'

    : isHtCoil

      ? 'H.T. Ignition Coil'

      : isRectifier

        ? 'Rectifier'

        : isLtCoil

          ? 'L.T. Coil'

          : isPickupCoil

            ? 'Pickup Coil'

            : isCdi

              ? 'CDI Unit'

              : isAcRegulator

                ? 'A.C. Regulator'

                : isFlasher

                  ? 'Electronic Flasher'

                  : category?.title || 'ORADO Product';

  /* Product source */

  const productSource: ProductCard[] =
    (catalogueProductsByCategory[slug] as ProductCard[] | undefined) || [];

  const products = productSource;

  const currentProduct = products[activeProduct];

  /* Product search */

  const filteredProducts = products.filter((product) => {

    const search = productSearch

      .toLowerCase()

      .replace(/[^a-z0-9]/g, '');

    const content =

      `${product.partNumber} ${product.referenceNumber || ''} ${product.name} ${product.vehicle} ${product.description || ''}`

        .toLowerCase()

        .replace(/[^a-z0-9]/g, '');

    return content.includes(search);

  });

  const moveProduct = (direction: -1 | 1) => {

    setActiveProduct((current) =>

      Math.min(Math.max(current + direction, 0), Math.max(products.length - 1, 0))

    );

  };

  const scrollReferenceStrip = (direction: -1 | 1) => {

    const strip = referenceStripRef.current;

    if (!strip) return;

    strip.scrollBy({

      left: direction * Math.max(strip.clientWidth * 0.75, 240),

      behavior: 'smooth',

    });

  };

  // When the main product changes, bring its matching thumbnail into view.

  useEffect(() => {

    const strip = referenceStripRef.current;

    if (!strip) return;

    const selected = strip.querySelector<HTMLElement>(

      `[data-product-index="${activeProduct}"]`

    );

    selected?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

  }, [activeProduct, productSearch, slug]);

  /* WhatsApp */

  const whatsappNumber =

    companyInfo.whatsappNumber.replace(/[^0-9]/g, '');

  const generalMessage = category

    ? `Hello ORADO, I am interested in ${category.title}. Please share product details and a quotation.`

    : 'Hello ORADO, I am interested in your products. Please share more details.';

  const productMessage = currentProduct

    ? `Hello ORADO, I am interested in ${productType} ${currentProduct.partNumber}${currentProduct.referenceNumber ? ` (Reference: ${currentProduct.referenceNumber})` : ''} - ${currentProduct.description || currentProduct.vehicle}. Please share the price and availability.`

    : generalMessage;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

    productMessage

  )}`;

  const generalWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

    generalMessage

  )}`;

  /* Hero banner */
  const firstCatalogueImage = catalogueProductsByCategory[slug]?.[0]?.image;
  const heroImage = isSelfRelay
    ? '/Self Relay Key Features Banner.png'
    : isLtCoil
      ? '/L.T. Coils Product Feature Banner.png-1600.webp'
      : isPickupCoil
        ? '/Pickup Coil 2-Wheeler Parts Banner.png-1600.webp'
        : isCdi
          ? '/ORADO C.D.I. Unit Features.png-1600.webp'
          : isAcRegulator
            ? '/A.C. Regulator Product Banner.png'
            : isFlasher
              ? '/Electronic Flasher Key Features.png'
              : firstCatalogueImage || category?.image || '';

  /* =====================================================

     CATEGORY NOT FOUND

     ===================================================== */

  if (!category) {

    return (

      <main className="min-h-[60vh] bg-slate-50 px-4 py-20">

        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

          <Package className="mx-auto h-12 w-12 text-red-600" />

          <h1 className="mt-5 text-3xl font-extrabold text-slate-900">

            Category Not Found

          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">

            This product category may have been moved or is no longer available.

          </p>

          <a

            href="#products-page"

            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700"

          >

            <ArrowLeft className="h-4 w-4" />

            Back to Products

          </a>

        </div>

      </main>

    );

  }

  /* =====================================================

     NAVIGATION AND CATEGORY PAGE

     ===================================================== */

  return (

    <main className="min-h-screen bg-[#f4f6f9] pb-16">

      {/* BREADCRUMB */}

      <div className="border-b border-slate-200 bg-white">

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">

          <a href="#home" className="hover:text-red-600">

            Home

          </a>

          <ChevronRight className="h-3 w-3" />

          <a

            href="#products-page"

            className="hover:text-red-600"

          >

            Products

          </a>

          <ChevronRight className="h-3 w-3" />

          <span>{category.family}</span>

          <ChevronRight className="h-3 w-3" />

          <span className="font-semibold text-slate-900">

            {category.title}

          </span>

        </nav>

      </div>

      {/* CATEGORY HERO */}

      <section className="relative isolate overflow-hidden bg-[#102747] text-white">

        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full border-[56px] border-white/[0.05]" />

        <div className="pointer-events-none absolute -bottom-52 left-[38%] -z-10 h-96 w-96 rounded-full border-[48px] border-yellow-400/[0.08]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">

          <div className="max-w-2xl">

            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">

              <span className="h-2 w-2 rounded-full bg-yellow-400" />

              ORADO Product Collection

            </p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">

              {category.family}

            </p>

            <h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

              {category.title}

            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-red-500" />

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">

              {isSelfRelay

                ? "Explore ORADO's self relay collection for different motorcycle and scooter applications. Select an RP reference to view the product image and vehicle compatibility."

                : isCombinationSwitch

                ? "Explore ORADO's left-hand combination switch collection for motorcycles and scooters. Select an RP reference to view the product image and vehicle compatibility."

                : isIgnitionSwitch

                ? "Explore ORADO's ignition switch and steering lock collection for different motorcycle and scooter models. Select an RP reference to view the product image and vehicle compatibility."

                : isBatteryWire

                ? "Explore ORADO's battery wire range for motorcycle and scooter applications. Select an RP reference to view the positive, negative or relay connection and vehicle compatibility."

                : isIgniter

                ? "Explore ORADO's ignition coil igniter collection for different motorcycle and scooter applications. Select an RP reference to view product images and vehicle compatibility."

                : isHtCoil

                  ? "Explore ORADO's H.T. ignition coil collection for different motorcycle and scooter applications. Select an RP reference to view product images and vehicle compatibility."

                  : category.description}

            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a

                href="#contact"

                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-700"

              >

                Request a Quote

                <ArrowUpRight className="h-4 w-4" />

              </a>

              <a

                href={generalWhatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"

              >

                <MessageCircle className="h-4 w-4" />

                WhatsApp Enquiry

              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/65">

              <span className="inline-flex items-center gap-2">

                <ShieldCheck className="h-4 w-4 text-yellow-400" />

                Established 1994

              </span>

              <span className="inline-flex items-center gap-2">

                <Package className="h-4 w-4 text-yellow-400" />

                Automotive Electrical Parts

              </span>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-2 shadow-2xl">

              <div className="flex aspect-[2.4/1] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-5">

                {heroImage && (

                  <img

                    src={encodeImagePath(heroImage)}

                    alt={`ORADO ${category.title}`}

                    width={1200}

                    height={600}

                    className={

                      isIgniter

                        ? 'max-h-full max-w-full object-contain'

                        : 'h-full w-full object-contain'

                    }

                    onError={handleImageError}

                  />

                )}

              </div>

            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-slate-100 bg-white px-5 py-4 text-slate-900 shadow-xl sm:left-10 sm:right-10">

              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-red-600">

                ORADO • Automotive Electrical Parts

              </p>

              <p className="mt-1 text-sm font-bold">

                {isSelfRelay

                ? "Explore ORADO's self relay collection for different motorcycle and scooter applications. Select an RP reference to view the product image and vehicle compatibility."

                : isCombinationSwitch

                  ? 'Left-hand handlebar switches for two-wheeler electrical controls'

                  : isIgnitionSwitch

                  ? 'Ignition switches and steering locks for two-wheeler applications'

                  : isBatteryWire

                  ? 'Battery wires for two-wheeler electrical applications'

                  : isIgniter

                  ? 'Ignition coil igniters for two-wheeler applications'

                  : isHtCoil

                    ? 'H.T. ignition coil range for two-wheeler applications'

                    : `${category.title} for automotive applications`}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICE ATTRIBUTES */}

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-4">

          {[

            ['01', 'Product variety'],

            ['02', 'Vehicle applications'],

            ['03', 'Part reference support'],

            ['04', 'Quotation assistance'],

          ].map(([number, label], index) => (

            <div

              key={number}

              className={`flex items-center gap-3 px-4 py-5 sm:px-6 ${

                index % 2 === 0 ? 'border-r border-slate-100' : ''

              } ${

                index > 1

                  ? 'border-t border-slate-100 md:border-t-0'

                  : ''

              } ${

                index === 1 ? 'md:border-r' : ''

              }`}

            >

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-[#102747]">

                {number}

              </span>

              <span className="text-xs font-bold text-slate-800 sm:text-sm">

                {label}

              </span>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================

         PRODUCT RANGE

         ===================================================== */}

      {products.length > 0 && (

        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">

                Product Range

              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#102747] sm:text-4xl">

                Explore {productType} Products

              </h2>

              <p className="mt-3 text-sm text-slate-500">

                Select a product reference to view its details and vehicle application.

              </p>

            </div>

          </div>

          {/* PRODUCT SELECTOR */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">

            {/* MAIN PRODUCT IMAGE */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div

                className={`relative ${

                  isIgniter

                    ? 'flex h-[340px] items-center justify-center bg-white p-5 sm:h-[420px] sm:p-8 lg:h-[480px]'

                    : 'flex aspect-square items-center justify-center bg-white p-6 sm:p-10'

                }`}

              >

                {currentProduct && (

                  <img

                    key={currentProduct.image}

                    src={encodeImagePath(currentProduct.image)}

                    alt={`${currentProduct.partNumber} ${currentProduct.name}`}

                    width={1000}

                    height={1000}

                    loading="eager"

                    className={

                      isIgniter

                        ? 'max-h-full max-w-full object-contain'

                        : 'h-full w-full object-contain'

                    }

                    onError={handleImageError}

                  />

                )}

                {products.length > 1 && (

                  <>

                    <button

                      type="button"

                      aria-label="Previous product image"

                      disabled={activeProduct <= 0}

                      onClick={() => moveProduct(-1)}

                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#102747] shadow-md transition hover:border-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-35 sm:left-5 sm:h-12 sm:w-12"

                    >

                      <ArrowLeft className="h-5 w-5" />

                    </button>

                    <button

                      type="button"

                      aria-label="Next product image"

                      disabled={activeProduct >= products.length - 1}

                      onClick={() => moveProduct(1)}

                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#102747] shadow-md transition hover:border-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-35 sm:right-5 sm:h-12 sm:w-12"

                    >

                      <ArrowRight className="h-5 w-5" />

                    </button>

                  </>

                )}

              </div>

              <div className="border-t border-slate-100 px-5 py-4">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">

                      Selected Product

                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-[#102747]">

                      {currentProduct?.partNumber || 'Select a product'}

                    </h3>

              {currentProduct?.referenceNumber && (

                      <p className="mt-1 text-xs font-semibold leading-5 text-blue-700">

                        Ref: {currentProduct.referenceNumber}

                      </p>

                    )}

                  </div>

                  <span className="rounded-lg bg-yellow-400 px-4 py-2 text-xs font-extrabold text-[#102747]">

                    {products.length > 0

                      ? `${activeProduct + 1} / ${products.length}`

                      : '0 / 0'}

                  </span>

                </div>

              </div>

            </div>

            {/* PRODUCT DETAILS */}

            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <span className="mb-4 inline-flex w-fit rounded-md bg-yellow-400 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#102747]">

                {category.family}

              </span>

              <p className="text-xs font-bold uppercase tracking-wider text-red-600">

                ORADO Product

              </p>

              <h2 className="mt-2 text-3xl font-black leading-tight text-[#102747]">

                {productType}

              </h2>

              <div className="mt-4 h-1.5 w-20 rounded-full bg-red-600" />

              <p className="mt-6 text-sm leading-7 text-slate-500">

                {isSelfRelay

                  ? 'ORADO self relays are available in different designs and configurations for motorcycle and scooter applications. Select the required RP reference to view its image and confirm vehicle compatibility.'

                  : isCombinationSwitch

                  ? 'ORADO Combination Switch (LH Only) products are available for different motorcycle and scooter models. Select an RP reference to view the switch design and confirm vehicle compatibility.'

                  : isIgnitionSwitch

                  ? 'ORADO ignition switches and steering lock assemblies are available for different two-wheeler applications. Select your required RP reference to view the product and confirm vehicle compatibility.'

                  : isBatteryWire

                  ? 'ORADO battery wires are available in positive, negative and relay connection configurations for different two-wheeler models. Select the required RP reference to check the exact vehicle compatibility.'

                  : isIgniter

                  ? 'ORADO ignition coil igniters are available for different motorcycle and scooter models. Select your required RP reference and check the vehicle compatibility before placing an enquiry.'

                  : isHtCoil

                    ? 'Explore the ORADO H.T. ignition coil range for different two-wheeler applications. Select your required product reference to view the corresponding vehicle compatibility.'

                    : `Explore ORADO ${category.title} products. Select a reference to view the product and its vehicle application.`}

              </p>

              {/* PART NUMBER */}

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">

                  Part Number

                </p>

                <p className="mt-2 text-3xl font-black text-[#102747]">

                  {currentProduct?.partNumber || 'N/A'}

                </p>

              </div>

              {currentProduct?.referenceNumber && (

                <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">

                    Reference Number

                  </p>

                  <p className="mt-2 break-words text-lg font-bold leading-relaxed text-[#102747]">

                    {currentProduct.referenceNumber}

                  </p>

                </div>

              )}

              {currentProduct?.voltage && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Voltage
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#102747]">
                    {currentProduct.voltage}
                  </p>
                </div>
              )}

              {currentProduct?.baseShellDiaMm && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Base Shell Dia mm
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#102747]">
                    {currentProduct.baseShellDiaMm}
                  </p>
                </div>
              )}

              {currentProduct?.description && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Product Description
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#102747]">
                    {currentProduct.description}
                  </p>
                </div>
              )}

              {/* ENQUIRY BUTTONS */}

              <div className="mt-6 flex flex-col gap-3">

                <a

                  href="#contact"

                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"

                >

                  Request a Quote

                  <Send className="h-4 w-4" />

                </a>

                <a

                  href={whatsappLink}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-green-700"

                >

                  <MessageCircle className="h-4 w-4" />

                  Enquire via WhatsApp

                </a>

              </div>

            </div>

          </div>

          {/* PRODUCT REFERENCE THUMBNAILS */}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

            <div className="mb-4 flex items-center justify-between gap-3">

              <div className="min-w-0 flex-1">

                <h3 className="text-sm font-extrabold text-[#102747]">

                  All References

                </h3>

                <p className="mt-1 text-xs text-slate-400">

                  Select any RP number to view its product.

                </p>

                <div className="relative mt-3 w-full max-w-[385px]">

                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input

                    id="category-product-search"

                    type="search"

                    value={productSearch}

                    onChange={(event) => {

                      setProductSearch(event.target.value);

                      setActiveProduct(0);

                    }}

                    placeholder="Search RP number, reference number or product description..."

                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"

                  />

                </div>

              </div>

              <div className="flex items-center gap-2">

                <span className="rounded-md bg-yellow-400 px-3 py-2 text-xs font-black text-[#102747]">

                  {filteredProducts.length} Products

                </span>

                <button

                  type="button"

                  aria-label="Scroll product references left"

                  onClick={() => scrollReferenceStrip(-1)}

                  className="rounded-full border border-slate-200 p-2 text-[#102747] transition hover:border-red-500 hover:text-red-600"

                >

                  <ArrowLeft className="h-4 w-4" />

                </button>

                <button

                  type="button"

                  aria-label="Scroll product references right"

                  onClick={() => scrollReferenceStrip(1)}

                  className="rounded-full border border-slate-200 p-2 text-[#102747] transition hover:border-red-500 hover:text-red-600"

                >

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>

            </div>

            {filteredProducts.length > 0 ? (

              <div

                ref={referenceStripRef}

                className="flex gap-3 overflow-x-auto scroll-smooth pb-3"

                style={{ scrollbarWidth: 'thin' }}

              >

                {filteredProducts.map((product) => {

                  const originalIndex = products.findIndex(

                    (item) => item.image === product.image

                  );

                  const isActive = activeProduct === originalIndex;

                  return (

                    <button

                      key={`${product.partNumber}-${product.image}-${originalIndex}`}

                      data-product-index={originalIndex}

                      type="button"

                      onClick={() => setActiveProduct(originalIndex)}

                      aria-pressed={isActive}

                      className={`w-[112px] shrink-0 overflow-hidden rounded-xl border-2 p-2 text-center transition ${

                        isActive

                          ? 'border-red-600 bg-red-50'

                          : 'border-slate-200 bg-white hover:border-red-300'

                      }`}

                    >

                      <div className="flex h-20 items-center justify-center rounded-lg bg-slate-50 p-2">

                        <img

                          src={encodeImagePath(product.thumbnail || product.image)}

                          alt={product.partNumber}

                          loading="lazy"

                          className="h-full w-full object-contain"

                          onError={handleImageError}

                        />

                      </div>

                      <p className="mt-2 text-xs font-black text-[#102747]">

                        {product.partNumber}

                      </p>

                      {product.referenceNumber && (

                        <p className="mt-1 line-clamp-2 break-words text-[8px] font-semibold leading-3 text-blue-700">

                          Ref: {product.referenceNumber}

                        </p>

                      )}

                      {product.description && (
                        <>
                          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                            Product Description
                          </p>
                          <p className="line-clamp-2 text-[10px] leading-4 text-slate-500">
                            {product.description}
                          </p>
                        </>
                      )}

                    </button>

                  );

                })}

              </div>

            ) : (

              <div className="rounded-xl bg-slate-50 px-4 py-10 text-center">

                <Search className="mx-auto h-8 w-8 text-slate-300" />

                <p className="mt-3 text-sm font-bold text-slate-600">

                  No matching products found.

                </p>

                <button

                  type="button"

                  onClick={() => setProductSearch('')}

                  className="mt-3 text-xs font-bold text-red-600 hover:underline"

                >

                  Clear Search

                </button>

              </div>

            )}

          </div>

        </section>

      )}

      {/* =====================================================

         RELATED CATEGORIES

         ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-end justify-between gap-4">

          <div>

            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">

              More From This Range

            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#102747]">

              Related Categories

            </h2>

          </div>

          <a

            href="#products-page"

            className="shrink-0 text-xs font-bold text-red-600 hover:underline sm:text-sm"

          >

            View All Products

            <ArrowUpRight className="ml-1 inline h-4 w-4" />

          </a>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {familyCategories

            .filter((item) => item.slug !== category.slug)

            .slice(0, 4)

            .map((item) => {

              const relatedImage = getCategoryImage(item);

              return (

                <a

                  key={item.slug}

                  href={`#category/${item.slug}`}

                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg sm:p-4"

                >

                  <div className="mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3">

                    <img

                      src={encodeImagePath(relatedImage)}

                      alt={item.title}

                      loading="lazy"

                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"

                      onError={handleImageError}

                    />

                  </div>

                  <h3 className="text-sm font-extrabold text-[#102747] transition-colors group-hover:text-red-600">

                    {item.title}

                  </h3>

                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">

                    Explore

                    <ArrowUpRight className="h-3 w-3" />

                  </span>

                </a>

              );

            })}

        </div>

      </section>

      {/* =====================================================

         CONTACT CTA

         ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl bg-[#102747] px-6 py-12 text-center text-white shadow-lg sm:px-12 sm:py-16">

          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[35px] border-white/[0.05]" />

          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-400">

            Talk to ORADO

          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">

            Looking for the right automotive electrical part?

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">

            Share your vehicle model, product reference or requirement with our team to request product information and a quotation.

          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a

              href="#contact"

              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700"

            >

              Request a Quote

              <ArrowUpRight className="h-4 w-4" />

            </a>

            <a

              href={generalWhatsappLink}

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15"

            >

              <MessageCircle className="h-4 w-4" />

              WhatsApp ORADO

            </a>

          </div>

        </div>

      </section>

    </main>

  );

}

export default CategoryDetailPage;
