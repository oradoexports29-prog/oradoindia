

import { useMemo, useRef, useState } from 'react';



import {

  ArrowRight,

  ArrowUpRight,

  Check,

  ChevronRight,

  ChevronLeft,

  MessageCircle,

  Package,

  Search,

  Send,

  ShieldCheck,

  Wrench,

} from 'lucide-react';



import { regulatorRectifierProducts } from '@/data/RegulatorRectifier';



import {

  getAllCategories,

  getCategoryBySlug,

} from '@/data/categoryRegistry';



import { companyInfo } from '@/data/navigation';



// CATEGORY CONFIGURATION

const CATEGORY_SLUG = '2-wheeler-parts-regulator-rectifier';



const HERO_IMAGE = '/Regulator%20Rectifier%20Key%20Features.png';



// IMAGE PATH HELPER

// Encode spaces only. Preserve + signs and parentheses.

function encodeImagePath(path: string): string {

  if (/^https?:\/\//i.test(path)) {

    return path;

  }



  return path.replace(/ /g, '%20');

}



// ADVANTAGES

const advantages = [

  {

    number: '01',

    title: 'Product variety',

    copy: 'Explore regulator rectifiers with different designs, configurations and product references.',

  },

  {

    number: '02',

    title: 'Vehicle applications',

    copy: 'Product options covering various motorcycle and scooter models.',

  },

  {

    number: '03',

    title: 'Part reference support',

    copy: 'Identify products through their individual ORADO RP reference numbers.',

  },

  {

    number: '04',

    title: 'Quotation assistance',

    copy: 'Share your vehicle model and product reference to request pricing and availability.',

  },

];



// PRODUCT HIGHLIGHTS

const highlights = [

  'Different regulator rectifier designs and configurations',

  'Multiple connector, terminal and wiring arrangements',

  'Individual RP references for product identification',

  'Applications across various two-wheeler models',

];



export default function RegulatorRectifier() {

  const [activeProduct, setActiveProduct] = useState(0);

  const [productSearch, setProductSearch] = useState('');
  const referencesScrollRef = useRef<HTMLDivElement | null>(null);



  const category = getCategoryBySlug(CATEGORY_SLUG);



  const products = regulatorRectifierProducts;



  const currentProduct = products[activeProduct];

  const filteredProducts = products.map((product, index) => ({ product, index })).filter(({ product }) =>

    `${product.partNumber} ${product.name} ${product.vehicle}`.toLowerCase().replace(/[^a-z0-9]/g, '').includes(productSearch.toLowerCase().replace(/[^a-z0-9]/g, ''))

  );



  const whatsappNumber = companyInfo.whatsappNumber.replace(

    /[^0-9]/g,

    ''

  );



  // RELATED CATEGORIES

  const familyCategories = useMemo(() => {

    if (!category) return [];



    return getAllCategories().filter(

      (item) =>

        item.family === category.family &&

        item.slug !== CATEGORY_SLUG

    );

  }, [category]);



  // WHATSAPP MESSAGE

  const productMessage = currentProduct

    ? `Hello ORADO, I am interested in Regulator Rectifier ${currentProduct.partNumber} for ${currentProduct.vehicle}. Please share the price and availability.`

    : 'Hello ORADO, I am interested in your Regulator Rectifier product range. Please share details and quotation.';



  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

    productMessage

  )}`;



  // QUOTATION LINK

  const quoteHref = `?category=${encodeURIComponent(

    'Regulator Rectifier'

  )}&message=${encodeURIComponent(productMessage)}#contact`;



  // ALL REFERENCES SCROLLING (does not change the selected product)
  const scrollReferences = (direction: -1 | 1) => {
    referencesScrollRef.current?.scrollBy({
      left: direction * 420,
      behavior: 'smooth',
    });
  };

  return (

    <main className="min-h-screen bg-[#f4f6f9] pb-16">



      {/* BREADCRUMB */}

      <div className="border-b border-slate-200 bg-white">

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">



          <a href="#home" className="hover:text-red-600">

            Home

          </a>



          <ChevronRight className="h-3 w-3" />



          <a href="#products-page" className="hover:text-red-600">

            Products

          </a>



          <ChevronRight className="h-3 w-3" />



          <span>2 Wheeler Parts</span>



          <ChevronRight className="h-3 w-3" />



          <span className="font-semibold text-slate-900">

            Regulator Rectifier

          </span>



        </nav>

      </div>



      {/* CATEGORY HERO */}

      <section className="relative isolate overflow-hidden bg-[#102747] text-white">



        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full border-[56px] border-white/[0.05]" />



        <div className="pointer-events-none absolute -bottom-52 left-[38%] -z-10 h-96 w-96 rounded-full border-[48px] border-yellow-400/[0.08]" />



        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">



          {/* HERO TEXT */}

          <div className="max-w-2xl">



            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">



              <span className="h-2 w-2 rounded-full bg-yellow-400" />



              ORADO Product Collection



            </p>



            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">

              2 Wheeler Parts

            </p>



            <h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

              Regulator Rectifier

            </h1>



            <div className="mt-6 h-1 w-20 rounded-full bg-red-500" />



            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">

              Explore ORADO's regulator rectifier collection for

              motorcycles and scooters. Browse different product

              configurations, connector arrangements and vehicle

              applications using individual ORADO RP references.

            </p>



            <div className="mt-8 flex flex-col gap-3 sm:flex-row">



              <a

                href={quoteHref}

                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-red-700"

              >

                Request a quote

                <ArrowUpRight className="h-4 w-4" />

              </a>



              <a

                href={whatsappUrl}

                target="\_blank"

                rel="noopener noreferrer"

                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"

              >

                <MessageCircle className="h-4 w-4" />

                WhatsApp enquiry

              </a>



            </div>



            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/65">



              <span className="inline-flex items-center gap-2">

                <ShieldCheck className="h-4 w-4 text-yellow-400" />

                Established 1994

              </span>



              <span className="inline-flex items-center gap-2">

                <Package className="h-4 w-4 text-yellow-400" />

                Automotive electrical parts

              </span>



            </div>



          </div>



          {/* HERO BANNER */}

          <div className="relative">



            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-2 shadow-2xl">



              <img

                src={HERO_IMAGE}

                alt="ORADO Regulator Rectifier Key Features"

                width={1600}

                height={900}

                loading="eager"

                decoding="async"

                className="max-h-[390px] w-full rounded-xl object-contain"

              />



            </div>



            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-slate-100 bg-white px-5 py-4 text-slate-900 shadow-xl sm:left-10 sm:right-10">



              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-red-600">

                ORADO • Automotive Electrical Parts

              </p>



              <p className="mt-1 text-sm font-bold">

                Product range for motorcycle and scooter applications

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

              className={`flex items-center gap-3 px-4 py-5 sm:px-6

                ${index % 2 === 0 ? 'border-r border-slate-100' : ''}

                ${index > 1 ? 'border-t border-slate-100 md:border-t-0' : ''}

                ${index === 1 ? 'md:border-r' : ''}

              `}

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



      {/* PRODUCT SELECTOR */}

      <section

        id="regulator-rectifier-products"

        className="mx-auto max-w-7xl scroll-mt-28 px-4 pt-16 sm:px-6 lg:px-8"

      >



        <div className="mb-7">



          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">

            Product Range

          </p>



          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#102747] sm:text-4xl">

            Explore Regulator Rectifier Products

          </h2>



          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">

            Select a product reference to view its image, part number

            and compatible vehicle application.

          </p>



        </div>



        {currentProduct && (



          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">



            {/* MAIN PRODUCT IMAGE */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">



              <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-5 sm:p-8">



                <img

                  key={currentProduct.image}

                  src={encodeImagePath(currentProduct.image)}

                  alt={`${currentProduct.partNumber} Regulator Rectifier for ${currentProduct.vehicle}`}

                  width={800}

                  height={800}

                  loading="eager"

                  decoding="async"

                  className="h-full w-full object-contain"

                />



              </div>



              <div className="flex items-center justify-between gap-3 px-2 py-4">



                <div>



                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">

                    Selected Reference

                  </p>



                  <p className="mt-1 text-xl font-black text-[#102747]">

                    {currentProduct.partNumber}

                  </p>



                </div>



                <span className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-extrabold text-[#102747]">

                  {activeProduct + 1} / {products.length}

                </span>



              </div>



            </div>



            {/* PRODUCT DETAILS */}

            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">



              <span className="w-fit rounded-full bg-slate-100 px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#102747]">

                ORADO Product

              </span>



              <h3 className="mt-6 text-2xl font-black text-[#102747]">

                Regulator Rectifier

              </h3>



              <p className="mt-2 text-sm leading-6 text-slate-500">

                {currentProduct.vehicle}

              </p>



              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Part Number
                  </p>
                  <p className="mt-2 text-lg font-extrabold text-[#102747]">
                    {currentProduct.partNumber}
                  </p>
                </div>

                {Boolean((currentProduct as typeof currentProduct & { description?: string }).description?.trim()) && (
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Product Description
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#102747]">
                      {(currentProduct as typeof currentProduct & { description?: string }).description}
                    </p>
                  </div>
                )}

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Vehicle Compatibility
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#102747]">
                    {currentProduct.vehicle}
                  </p>
                </div>
              </div>

              <div className="mt-6">



                <p className="text-xs font-extrabold uppercase tracking-widest text-[#102747]">

                  Vehicle Compatibility

                </p>



                <p className="mt-2 text-sm leading-7 text-slate-500">

                  This product is listed for the vehicle application

                  mentioned above. Please confirm the connector,

                  wiring and product reference before ordering.

                </p>



              </div>



              <p className="mt-4 text-sm leading-7 text-slate-500">

                Contact ORADO with this part number and vehicle

                application to enquire about pricing and availability.

              </p>



              <div className="mt-auto flex flex-col gap-3 pt-8">



                <a

                  href={quoteHref}

                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-red-700"

                >

                  Request a quote

                  <Send className="h-4 w-4" />

                </a>



                <a

                  href={whatsappUrl}

                  target="\_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-green-700"

                >

                  WhatsApp enquiry

                  <MessageCircle className="h-4 w-4" />

                </a>



              </div>



            </div>



          </div>



        )}



        {/* ALL REFERENCES */}

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">



          <div className="mb-3 flex items-center justify-between">



            <p className="text-xs font-extrabold uppercase tracking-widest text-[#102747]">

              All References

            </p>



            <div className="flex gap-2">



              <button

                type="button"

                onClick={() => scrollReferences(-1)}

                aria-label="Scroll references left"

                className="rounded-full border border-slate-200 p-2 transition hover:border-red-600 hover:text-red-600"

              >

                <ChevronLeft className="h-4 w-4" />

              </button>



              <button

                type="button"

                onClick={() => scrollReferences(1)}

                aria-label="Scroll references right"

                className="rounded-full border border-slate-200 p-2 transition hover:border-red-600 hover:text-red-600"

              >

                <ChevronRight className="h-4 w-4" />

              </button>



            </div>



          </div>



          <label className="relative mb-4 block max-w-md">

            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input value={productSearch} onChange={(event) => setProductSearch(event.target.value)} placeholder="Search RP number, vehicle name or model..." className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10" />

          </label>

          <div ref={referencesScrollRef} className="flex gap-3 overflow-x-auto pb-2 scroll-smooth">



            {filteredProducts.map(({ product, index }) => (



              <button

                key={product.partNumber}

                type="button"

                onClick={() => setActiveProduct(index)}

                aria-pressed={activeProduct === index}

                aria-label={`View ${product.partNumber}`}

                className={`w-28 shrink-0 rounded-xl border-2 p-2 text-left transition sm:w-32 ${

                  activeProduct === index

                    ? 'border-red-600 bg-red-50'

                    : 'border-slate-200 bg-white hover:border-slate-400'

                }`}

              >



                <div className="aspect-square overflow-hidden rounded-lg bg-slate-50">



                  <img

                    src={encodeImagePath(product.image)}

                    alt={product.partNumber}

                    loading="lazy"

                    decoding="async"

                    className="h-full w-full object-contain"

                  />



                </div>



                <span className="mt-2 block truncate text-center text-xs font-extrabold text-[#102747]">

                  {product.partNumber}

                </span>

                <span className="mt-1 block text-center text-[9px] font-bold uppercase tracking-wide text-slate-400">

                  Vehicle Compatibility

                </span>

                <span className="mt-0.5 block line-clamp-2 min-h-[28px] text-center text-[10px] leading-4 text-slate-600">

                  {product.vehicle}

                </span>



              </button>



            ))}

            {filteredProducts.length === 0 && <p className="py-6 text-sm text-slate-500">No product references match your search.</p>}



          </div>



        </div>



      </section>



      {/* ORADO ADVANTAGES */}

      <section className="mt-16 bg-[#102747] py-14 text-white">



        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">



          <div className="max-w-3xl">



            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-yellow-300">

              The ORADO Advantage

            </p>



            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">

              Why Explore ORADO Regulator Rectifiers?

            </h2>



            <p className="mt-4 text-sm leading-7 text-white/65">

              Explore different regulator rectifier designs for

              motorcycles and scooters. Each product variation can

              be identified by its individual reference and vehicle

              application.

            </p>



          </div>



          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">



            {advantages.map((item) => (



              <article

                key={item.number}

                className="rounded-xl border border-white/10 bg-white/[0.055] p-6 transition hover:border-yellow-300/50 hover:bg-white/[0.09]"

              >



                <span className="text-3xl font-black text-yellow-300">

                  {item.number}

                </span>



                <h3 className="mt-5 text-base font-extrabold">

                  {item.title}

                </h3>



                <p className="mt-3 text-sm leading-6 text-white/65">

                  {item.copy}

                </p>



              </article>



            ))}



          </div>



        </div>



      </section>



      {/* PRODUCT INFORMATION */}

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8">



        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">



          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">

            Product Information

          </p>



          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102747] sm:text-3xl">

            Understanding Regulator Rectifiers

          </h2>



          <p className="mt-5 text-sm leading-8 text-slate-600">

            A regulator rectifier is an electrical component used

            in motorcycle and scooter charging systems. It performs

            rectification and voltage regulation according to the

            vehicle's electrical system design.

          </p>



          <p className="mt-4 text-sm leading-8 text-slate-600">

            Different vehicles use different regulator rectifier

            designs, connectors, wire arrangements and electrical

            specifications. Therefore, selecting the correct

            replacement requires checking the original part and

            vehicle application.

          </p>



          <p className="mt-4 text-sm leading-8 text-slate-600">

            ORADO's collection includes multiple regulator rectifier

            references for different two-wheeler applications.

            Refer to the individual RP number and confirm the

            required configuration with our team.

          </p>



        </article>



        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">



          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">

            Range Highlights

          </p>



          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102747] sm:text-3xl">

            What You Can Explore

          </h2>



          <div className="mt-7 space-y-5">



            {highlights.map((item) => (



              <div key={item} className="flex gap-3">



                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[#102747]">

                  <Check className="h-4 w-4" />

                </span>



                <p className="text-sm font-semibold leading-6 text-slate-700">

                  {item}

                </p>



              </div>



            ))}



          </div>



          <div className="mt-8 rounded-xl bg-slate-50 p-5">



            <p className="text-sm font-extrabold text-[#102747]">

              Need Help Identifying a Regulator Rectifier?

            </p>



            <p className="mt-2 text-sm leading-6 text-slate-500">

              Send ORADO your vehicle model, old part image or RP

              reference to help us understand your requirement.

            </p>



            <a

              href={quoteHref}

              className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-red-600 hover:text-red-700"

            >

              Send an enquiry

              <ArrowRight className="h-4 w-4" />

            </a>



          </div>



        </article>



      </section>



      {/* RELATED CATEGORIES */}

      {familyCategories.length > 0 && (



        <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">



          <div className="flex flex-wrap items-end justify-between gap-4">



            <div>



              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">

                More From This Range

              </p>



              <h2 className="mt-2 text-3xl font-black text-[#102747]">

                Related Categories

              </h2>



            </div>



            <a

              href="#products-page"

              className="inline-flex items-center gap-2 text-sm font-extrabold text-red-600 hover:text-red-700"

            >

              View all products

              <ArrowUpRight className="h-4 w-4" />

            </a>



          </div>



          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">



            {familyCategories.slice(0, 4).map((item) => (



              <a

                key={item.slug}

                href={`#category/${item.slug}`}

                className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"

              >



                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3">



                  {item.image ? (



                    <img

                      src={encodeImagePath(item.image)}

                      alt={item.title}

                      loading="lazy"

                      decoding="async"

                      className="h-full w-full object-contain transition group-hover:scale-105"

                    />



                  ) : (



                    <Wrench className="h-10 w-10 text-slate-300" />



                  )}



                </div>



                <h3 className="mt-4 text-sm font-extrabold text-[#102747] group-hover:text-red-600">

                  {item.title}

                </h3>



                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">

                  Explore

                  <ArrowUpRight className="h-3 w-3" />

                </span>



              </a>



            ))}



          </div>



        </section>



      )}



      {/* FINAL CTA */}

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">



        <div className="relative overflow-hidden rounded-2xl bg-[#102747] px-6 py-11 text-center text-white shadow-xl sm:px-12 sm:py-14">



          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[38px] border-white/[0.06]" />



          <p className="relative text-[11px] font-extrabold uppercase tracking-[0.2em] text-yellow-300">

            Talk to ORADO

          </p>



          <h2 className="relative mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">

            Looking for the Right Regulator Rectifier?

          </h2>



          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">

            Share your vehicle model, product reference or

            requirement with our team to request product

            information and a quotation.

          </p>



          <a

            href={quoteHref}

            className="relative mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700"

          >

            Contact ORADO

            <Send className="h-4 w-4" />

          </a>



        </div>



      </section>



    </main>

  );

}
