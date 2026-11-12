import { useMemo, useState } from 'react';

import {

  ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight,

  MessageCircle, Package, Send, ShieldCheck, Wrench,

} from 'lucide-react';



import { batteryWireProducts } from '@/data/batteryWireProducts';

import {

  getAllCategories,

  getCategoryBySlug,

} from '@/data/categoryRegistry';

import { companyInfo } from '@/data/navigation';



const CATEGORY_SLUG = '2-wheeler-parts-battery-wire';
const HERO_IMAGE = '/Battery-Wire-Key-Features-Banner.png';

const FALLBACK_IMAGE = '/logo.png';



const advantages = [

  {

    number: '01',

    title: 'Product variety',

    copy: 'Explore battery wire designs for a range of two-wheeler applications.',

  },

  {

    number: '02',

    title: 'Different configurations',

    copy: 'Compare positive, negative and relay wire configurations and terminal arrangements.',

  },

  {

    number: '03',

    title: 'Vehicle applications',

    copy: 'Browse product references for Bajaj, Hero Honda and Honda two-wheeler models.',

  },

  {

    number: '04',

    title: 'Quotation assistance',

    copy: 'Share your vehicle model or ORADO RP reference to request pricing and availability.',

  },

];



const highlights = [

  'Positive, negative and relay battery wire options',

  'Different wire lengths, terminals and connection arrangements',

  'Individual ORADO RP references for product identification',

  'Applications across a range of motorcycle and scooter models',

];



// Preserve existing encoded paths and plus signs.

function encodeImagePath(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return path.replace(/ /g, '%20');
}



export default function BatteryWire() {

  const [activeProduct, setActiveProduct] = useState(0);



  const category = getCategoryBySlug(CATEGORY_SLUG);

  const products = batteryWireProducts;

  const currentProduct = products[activeProduct];



  const whatsappNumber = companyInfo.whatsappNumber.replace(/[^0-9]/g, '');



  const familyCategories = useMemo(() => {

    if (!category) return [];



    return getAllCategories().filter(

      (item) =>

        item.family === category.family &&

        item.slug !== CATEGORY_SLUG

    );

  }, [category]);



  const productMessage = currentProduct

    ? `Hello ORADO, I am interested in Battery Wire ${currentProduct.partNumber} for ${currentProduct.vehicle}. Please share the price and availability.`

    : 'Hello ORADO, I am interested in your Battery Wire product range. Please share details and quotation.';



  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(productMessage)}`;



  const quoteHref = `?category=${encodeURIComponent('Battery Wire')}&message=${encodeURIComponent(productMessage)}#contact`;



  const moveProduct = (direction: -1 | 1) => {

    if (!products.length) return;



    setActiveProduct((current) =>

      (current + direction + products.length) % products.length

    );

  };



  if (!category) {

    return (

      <main className="min-h-[60vh] bg-slate-50 px-4 py-20">

        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

          <Package className="mx-auto h-12 w-12 text-red-600" />

          <h1 className="mt-5 text-3xl font-extrabold text-slate-900">

            Category not found

          </h1>

          <a href="#products-page" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white">

            Back to products <ArrowRight className="h-4 w-4" />

          </a>

        </div>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-[#f4f6f9] pb-16">



      {/* BREADCRUMB */}

      <div className="border-b border-slate-200 bg-white">

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">

          <a href="#home" className="hover:text-red-600">Home</a>

          <ChevronRight className="h-3 w-3" />

          <a href="#products-page" className="hover:text-red-600">Products</a>

          <ChevronRight className="h-3 w-3" />

          <span>{category.family}</span>

          <ChevronRight className="h-3 w-3" />

          <span className="font-semibold text-slate-900">Battery Wire</span>

        </nav>

      </div>



      {/* HERO - MATCHES THE CHARGING COIL PAGE LAYOUT */}
      <section className="relative isolate overflow-hidden bg-[#102747] text-white">
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full border-[56px] border-white/[0.05]" />
        <div className="pointer-events-none absolute -bottom-52 left-[38%] -z-10 h-96 w-96 rounded-full border-[48px] border-yellow-400/[0.08]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              ORADO product collection
            </p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              {category.family}
            </p>

            <h1 className="mt-3 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Battery Wire
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-red-500" />

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Explore ORADO battery wire products for different two-wheeler
              applications. Browse individual RP references, compare product
              designs and contact our team with your vehicle details.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={quoteHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-700">
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15">
                <MessageCircle className="h-4 w-4" /> WhatsApp enquiry
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/65">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-yellow-400" /> Established 1994
              </span>
              <span className="inline-flex items-center gap-2">
                <Package className="h-4 w-4 text-yellow-400" /> Automotive electrical parts
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-2 shadow-2xl">
              <img
                src={encodeImagePath(HERO_IMAGE)}
                alt="ORADO Battery Wire key features"
                width={2048}
                height={684}
                loading="eager"
                className="max-h-[390px] w-full rounded-xl object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-slate-100 bg-white px-5 py-4 text-slate-900 shadow-xl sm:left-10 sm:right-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-red-600">
                ORADO • Automotive Electrical Parts
              </p>
              <p className="mt-1 text-sm font-bold">
                Battery wire assemblies for two-wheeler electrical applications
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

                index > 1 ? 'border-t border-slate-100 md:border-t-0' : ''

              } ${index === 1 ? 'md:border-r' : ''}`}

            >

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-[#102747]">

                {number}

              </span>

              <span className="text-xs font-bold text-slate-800 sm:text-sm">{label}</span>

            </div>

          ))}

        </div>

      </section>



      {/* INDIVIDUAL PRODUCT SHOWCASE */}

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">

              Product range

            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#102747] sm:text-4xl">

              Explore Battery Wire Products

            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">

              Select an ORADO battery wire reference to view its image, part number and vehicle application.

            </p>

          </div>

          <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#102747] shadow-sm">

            {products.length} product references

          </span>

        </div>



        {currentProduct && (

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

              <div className="flex aspect-[5/4] items-center justify-center rounded-xl bg-slate-50 p-5 sm:p-8">

                <img

                  key={currentProduct.image}

                  src={encodeImagePath(currentProduct.image || FALLBACK_IMAGE)}

                  alt={`${currentProduct.partNumber} ${currentProduct.name} for ${currentProduct.vehicle}`}

                  className="h-full w-full object-contain"

                  loading="eager"

                  onError={(event) => {

                    event.currentTarget.src = FALLBACK_IMAGE;

                  }}

                />

              </div>



              <div className="flex items-center justify-between gap-3 px-2 py-4">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">

                    Selected reference

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



            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <span className="w-fit rounded-full bg-slate-100 px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#102747]">

                ORADO product

              </span>



              <h3 className="mt-6 text-2xl font-black text-[#102747]">

                {currentProduct.name}

              </h3>



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

              <p className="mt-6 text-sm leading-7 text-slate-500">

                Contact ORADO with this part number and vehicle application to enquire about pricing and availability.

              </p>



              <div className="mt-auto flex flex-col gap-3 pt-8">

                <a href={quoteHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-4 text-sm font-extrabold uppercase text-white hover:bg-red-700">

                  Request a quote <Send className="h-4 w-4" />

                </a>



                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-4 text-sm font-extrabold uppercase text-white hover:bg-green-700">

                  WhatsApp enquiry <MessageCircle className="h-4 w-4" />

                </a>

              </div>

            </div>

          </div>

        )}



        {/* ALL REFERENCES */}

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="mb-3 flex items-center justify-between">

            <div>

              <p className="text-xs font-extrabold uppercase tracking-widest text-[#102747]">

                All references

              </p>

              <p className="mt-1 text-xs text-slate-400">

                Select any RP number to view its product.

              </p>

            </div>



            <div className="flex gap-2">

              <button

                type="button"

                onClick={() => moveProduct(-1)}

                aria-label="Previous product"

                className="rounded-full border border-slate-200 p-2 hover:border-red-600 hover:text-red-600"

              >

                <ChevronLeft className="h-4 w-4" />

              </button>

              <button

                type="button"

                onClick={() => moveProduct(1)}

                aria-label="Next product"

                className="rounded-full border border-slate-200 p-2 hover:border-red-600 hover:text-red-600"

              >

                <ChevronRight className="h-4 w-4" />

              </button>

            </div>

          </div>



          <div className="flex gap-3 overflow-x-auto pb-2">

            {products.map((product, index) => (

              <button

                key={`${product.partNumber}-${product.image}-${index}`}

                type="button"

                onClick={() => setActiveProduct(index)}

                aria-pressed={activeProduct === index}

                className={`w-28 shrink-0 rounded-xl border-2 p-2 text-left transition sm:w-32 ${

                  activeProduct === index

                    ? 'border-red-600 bg-red-50'

                    : 'border-slate-200 bg-white hover:border-slate-400'

                }`}

              >

                <div className="aspect-square rounded-lg bg-slate-50">

                  <img

                    src={encodeImagePath(product.image || FALLBACK_IMAGE)}

                    alt={product.partNumber}

                    className="h-full w-full object-contain"

                    loading="lazy"

                    onError={(event) => {

                      event.currentTarget.src = FALLBACK_IMAGE;

                    }}

                  />

                </div>

                <span className="mt-2 block truncate text-center text-xs font-extrabold text-[#102747]">

                  {product.partNumber}

                </span>

              </button>

            ))}

          </div>

        </div>

      </section>



      {/* ADVANTAGES */}

      <section className="mt-16 bg-[#102747] py-14 text-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-yellow-300">

              The ORADO advantage

            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">

              Why explore ORADO Battery Wire products?

            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65">

              Explore a diverse range of battery wires for different two-wheeler applications. Each product variation can be identified by its individual reference and vehicle application.

            </p>

          </div>



          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => (

              <article key={item.number} className="rounded-xl border border-white/10 bg-white/[0.055] p-6 transition hover:border-yellow-300/50 hover:bg-white/[0.09]">

                <span className="text-3xl font-black text-yellow-300">{item.number}</span>

                <h3 className="mt-5 text-base font-extrabold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">{item.copy}</p>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* PRODUCT INFORMATION */}

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8">

        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">

            Product information

          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102747] sm:text-3xl">

            Understanding Battery Wire Assemblies

          </h2>

          <p className="mt-5 text-sm leading-8 text-slate-600">

            Battery wire assemblies connect electrical components and battery terminals in a motorcycle or scooter. Correct wire type and terminal configuration are important for a suitable fit and reliable electrical connection.

          </p>

          <p className="mt-4 text-sm leading-8 text-slate-600">

            Battery wire assemblies can differ in length, terminal shape, connector type and connection purpose. Confirm the RP reference and vehicle model before selecting a replacement.

          </p>

          <p className="mt-4 text-sm leading-8 text-slate-600">

            For accurate selection, refer to the ORADO RP reference and confirm the vehicle model and required connection with our team.

          </p>

        </article>



        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-600">

            Range highlights

          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102747] sm:text-3xl">

            Battery Wire range highlights

          </h2>



          <div className="mt-7 space-y-5">

            {highlights.map((item) => (

              <div key={item} className="flex gap-3">

                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[#102747]">

                  <Check className="h-4 w-4" />

                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>

              </div>

            ))}

          </div>



          <div className="mt-8 rounded-xl bg-slate-50 p-5">

            <p className="text-sm font-extrabold text-[#102747]">

              Need help identifying a battery wire?

            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              Send ORADO your vehicle model, old part image or RP reference to help us understand your requirement.

            </p>

            <a href={quoteHref} className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-red-600 hover:text-red-700">

              Send an enquiry <ArrowRight className="h-4 w-4" />

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

                More from this range

              </p>

              <h2 className="mt-2 text-3xl font-black text-[#102747]">

                Related Categories

              </h2>

            </div>

            <a href="#products-page" className="inline-flex items-center gap-2 text-sm font-extrabold text-red-600 hover:text-red-700">

              View all products <ArrowUpRight className="h-4 w-4" />

            </a>

          </div>



          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

            {familyCategories.slice(0, 4).map((item) => (

              <a key={item.slug} href={`#category/${item.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg">

                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3">

                  {item.image ? (

                    <img src={encodeImagePath(item.image)} alt={item.title} loading="lazy" className="h-full w-full object-contain transition group-hover:scale-105" />

                  ) : (

                    <Wrench className="h-10 w-10 text-slate-300" />

                  )}

                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[#102747] group-hover:text-red-600">

                  {item.title}

                </h3>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-600">

                  Explore <ArrowUpRight className="h-3 w-3" />

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

            Looking for the right Battery Wire?

          </h2>

          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">

            Share your vehicle model, product reference or requirement with our team to request product information and a quotation.

          </p>

          <a href={quoteHref} className="relative mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700">

            Contact ORADO <Send className="h-4 w-4" />

          </a>

        </div>

      </section>

    </main>

  );

}
