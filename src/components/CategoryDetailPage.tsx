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

import { ltCoilProducts } from '@/data/ltCoilProducts';

import { pickupCoilProducts } from '@/data/pickupCoilProducts';

import { cdiUnitProducts } from '@/data/cdiUnitProducts';

import { acRegulatorProducts } from '@/data/acRegulatorProducts';

import { electronicFlasherProducts } from '@/data/electronicFlasherProducts';

import { rectifierProducts } from '@/data/rectifierProducts';

import { ignitionSwitchProducts } from '@/data/ignitionSwitchProducts';

import { combinationSwitchProducts } from '@/data/combinationSwitchProducts';

import { selfRelayProducts } from '@/data/selfRelayProducts';

import ChargingCoil from './ChargingCoil';

import BatteryWire from './BatteryWire';

import RegulatorRectifier from './RegulatorRectifier';

import { companyInfo } from '@/data/navigation';

interface CategoryDetailPageProps {

  slug: string;

}

interface ProductCard {

  partNumber: string;

  name: string;

  vehicle: string;

  image: string;

  thumbnail?: string;

}

const CHARGING_COIL_SLUG =

  '2-wheeler-parts-charging-coil-source';

const REGULATOR_RECTIFIER_SLUG =

  '2-wheeler-parts-regulator-rectifier';

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

   H.T. COIL PRODUCTS

   ========================================================= */

const htCoilProducts: ProductCard[] = [

  {

    partNumber: 'RP316',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj Chetak 12 Volt',

    image: '/ht coil/RP316 Bajaj Chetak 12 Volt (6).png',

  },

  {

    partNumber: 'RP317',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj Ignition Coil',

    image: '/ht coil/RP317 Bajaj Ignition Coil Poster copy.png',

  },

  {

    partNumber: 'RP318',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj M80 / M50',

    image: '/ht coil/RP318 Bajaj m80 m50 (1).png',

  },

  {

    partNumber: 'RP322',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj KB 100 / KB 4S / Caliber',

    image: '/ht coil/RP322 Bajaj Kb 100 Kb 4s Caliber (3).jpg',

  },

  {

    partNumber: 'RP323',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Bajaj Boxer CT / Hero Maestro / Honda Activa / Aviator',

    image:

      '/ht coil/RP323 Bajaj Boxer Ct Hero Maestro Honda Activa Aviator (3).jpg',

  },

  {

    partNumber: 'RP328',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Bajaj Discover 100 / Discover 135 / Pulsar 150 / Platina 100',

    image:

      '/ht coil/RP328 Bajaj Discover 100 Dis 135 Pulsar 150 dtsi Platina 100 (2).png',

  },

  {

    partNumber: 'RP329',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Bajaj Pulsar 135 / XCD 125 / Discover 125 / Avenger 180',

    image:

      '/ht coil/RP329  Bajaj Pulsar 135 Pulsar 135 ls Bajaj Xcd 125 Discover 125 Avenger 180 Avenger 180 (2).png',

  },

  {

    partNumber: 'RP330',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj Boxer BM 100 / BM 150',

    image:

      '/ht coil/RP330 Bajaj Boxer bm 100 bm 150 (1).png',

  },

  {

    partNumber: 'RP332',

    name: 'H.T. Ignition Coil',

    vehicle: 'Bajaj Pulsar 200 / Platina / CT 100',

    image:

      '/ht coil/RP332 Bajaj Pulsar 200 Bajaj Platina Ct 100 (2).png',

  },

  {

    partNumber: 'RP335',

    name: 'H.T. Ignition Coil',

    vehicle: 'Hero Honda CD 100 SS / Kinetic Challenger',

    image:

      '/ht coil/RP335 Hero Honda cd 100 ss kinetic challanger   (4).png',

  },

  {

    partNumber: 'RP336KO',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Hero CD Deluxe / Passion Pro / Splendor Pro / CD Dawn',

    image:

      '/ht coil/RP336ko Hero Cd Deluxe Passion Pro Spl Pro Cd Dawn (1).png',

  },

  {

    partNumber: 'RP337',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Hero Honda Splendor / Passion / CBZ / CD Deluxe / CD Dawn',

    image:

      '/ht coil/RP337 Hero Honda Splendor Passion Cbz Cd Dlx Cd Dawn (1).png',

  },

  {

    partNumber: 'RP340',

    name: 'H.T. Ignition Coil',

    vehicle: 'Honda Activa 100 / Aviator',

    image:

      '/ht coil/RP340 Honda Activa 100 cm2 100  cms Aviator 100F3 F 5 F9 (1).png',

  },

  {

    partNumber: 'RP340A',

    name: 'H.T. Ignition Coil',

    vehicle:

      'Honda Activa i / Activa 125 HET / Aviator / Dream Yuga',

    image:

      '/ht coil/RP340A Honda Activa i Activa 125 Het Aviator Dream Yuga (12).png',

  },

  {

    partNumber: 'RP342',

    name: 'H.T. Ignition Coil',

    vehicle: 'Yamaha RXG 12 Volt',

    image:

      '/ht coil/RP342 Yamaha 12 volt rxg 12 volt (3).jpg',

  },

  {

    partNumber: 'RP343KK',

    name: 'H.T. Ignition Coil',

    vehicle: 'Yamaha Crux / Crux R / Libero',

    image:

      '/ht coil/RP343KK Yamaha Crux Crux R Libero (2).png',

  },

  {

    partNumber: 'RP347',

    name: 'H.T. Ignition Coil',

    vehicle: 'TVS / Suzuki Max 100 / Samurai',

    image:

      '/ht coil/RP347 Tvs Suzuki max 100 samurai (3).jpg',

  },

  {

    partNumber: 'RP347SN',

    name: 'H.T. Ignition Coil',

    vehicle: 'TVS Centra',

    image:

      '/ht coil/RP347SN Tvs Centra (2).jpg',

  },

  {

    partNumber: 'RP347SP',

    name: 'H.T. Ignition Coil',

    vehicle:

      'TVS Apache RTR 160 / 180 / 150 / Flame 125',

    image:

      '/ht coil/RP347SP Tvs Apache rtr 160 180 150 Tvs flame 125 (2).png',

  },

  {

    partNumber: 'RP348',

    name: 'H.T. Ignition Coil',

    vehicle: 'TVS Victor GL / GX / Scooty Pep Plus',

    image:

      '/ht coil/RP348 Tvs Victor gl gx scooty pep plus (1).png',

  },

  {

    partNumber: 'RP349',

    name: 'H.T. Ignition Coil',

    vehicle: 'TVS Fiero',

    image:

      '/ht coil/RP349 Tvs Fiero (2).png',

  },

  {

    partNumber: 'RP353',

    name: 'H.T. Ignition Coil',

    vehicle: 'LML Freedom / Energy FX / CRD / Prima',

    image:

      '/ht coil/RP353 Lml Freedom energy fx crd prima (2).png',

  },

  {

    partNumber: 'RP354',

    name: 'H.T. Ignition Coil',

    vehicle: 'Hero Gizmo',

    image:

      '/ht coil/RP354 Hero Gizmo (1).png',

  },

];

/* =========================================================

   IGNITERS PRODUCTS

   Exact filenames from public/igniters

   ========================================================= */

const igniterProducts: ProductCard[] = [

  {

    partNumber: 'RP358',

    name: 'Ignition Coil Igniter',

    vehicle: 'LML Vespa 12V',

    image:

      '/igniters/rp358 Ignition coil Igniters For Lml  V espa 12V  (4).png',

  },

  {

    partNumber: 'RP359',

    name: 'Ignition Coil Igniter',

    vehicle: 'Hero Panther / VIP / Gizmo',

    image:

      '/igniters/rp359 Hero Panther Vip Gizmo  (1).png',

  },

  {

    partNumber: 'RP360',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS / Suzuki Max 100 / Samurai',

    image:

      '/igniters/RP360 Tvs Suzuki Max 100 Samurai (1).png',

  },

  {

    partNumber: 'RP361',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Scooty Pep',

    image:

      '/igniters/RP361 Tvs Scooty Pep (1).png',

  },

  {

    partNumber: 'RP362',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Star City Deluxe 6 Wire',

    image:

      '/igniters/RP362  Tvs Star City Dlx 6 wire (7).png',

  },

  {

    partNumber: 'RP363ZK',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Star City KS / ES / Star Sport 7 Wire',

    image:

      '/igniters/RP363ZK Tvs Star City ks es Star sport 7 wire (1).png',

  },

  {

    partNumber: 'RP365',

    name: 'Ignition Coil Igniter with Clamp',

    vehicle: 'TVS / Suzuki Max 100 / Samurai',

    image:

      '/igniters/RP365 Tvs Suzuki Max 100 Samurai with clamp (2).png',

  },

  {

    partNumber: 'RP365CB',

    name: 'Combined Ignition Coil / Igniter',

    vehicle:

      'TVS Jupiter / TVS Wego Combined CDI Ignition BS4',

    image:

      '/igniters/RP365CB  Tvs Jupiter Tvs wego combined idi ignition coil after apr 2017 bs4 (6).jpg',

  },

  {

    partNumber: 'RP365CZ',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Jupiter / TVS Wego',

    image:

      '/igniters/RP365cz Ignition coil Igniters For Tvs Jupiter Tvs Wego (5).jpg',

  },

  {

    partNumber: 'RP365DM',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Super XL HD',

    image:

      '/igniters/RP365D M Tvs Super xl hd (1).png',

  },

  {

    partNumber: 'RP365K',

    name: 'Ignition Coil Igniter',

    vehicle: 'TVS Super XL 100 BS3 / BS4',

    image:

      '/igniters/RP365K Tvs Super xl 100 bs3 bs4 (2).png',

  },

];

/* =========================================================

   RECTIFIER PRODUCTS

   ========================================================= */

/* =========================================================

   BATTERY WIRE PRODUCTS

   Exact filenames from public/battery wire

   ========================================================= */

const batteryWireProducts: ProductCard[] = [

  {

    partNumber: 'RP379',

    name: 'Battery Wire - Negative OE',

    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',

    image: '/battery wire/RP379 Bajaj pulsar 150 180 dts i es ug 3 model negative oe (1).png',

  },

  {

    partNumber: 'RP379',

    name: 'Battery Wire - Positive OE Type',

    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',

    image: '/battery wire/RP379 Bajaj pulsar 150 180 dts i es ug 3 model positive oe type  (3).png',

  },

  {

    partNumber: 'RP379F',

    name: 'Battery Wire - To Relay Positive',

    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3 / UG4',

    image: '/battery wire/RP379f To Relay Bajaj Pulsar 150 180 Dtsi Es Ug3 Ug4 Positive  (12).png',

  },

  {

    partNumber: 'RP379S',

    name: 'Battery Wire - Digital Meter Negative OE Type',

    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',

    image: '/battery wire/rp379S Bajaj Pulsar 150 180 Dtsi Es Ug3 Digital Meter Negative Oe Type (5).png',

  },

  {

    partNumber: 'RP381',

    name: 'Battery Wire - To Relay',

    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i LS / 135cc ES',

    image: '/battery wire/RP381 To Relay B ajaj Pulsar 150 180 Dts i ls 135cc es (1).png',

  },

  {

    partNumber: 'RP382D',

    name: 'Battery Wire - Negative',

    vehicle: 'Bajaj Discover DTS-i ES 150cc',

    image: '/battery wire/RP382D Bajaj Discover dts i es 150cc negative (1).png',

  },

  {

    partNumber: 'RP383',

    name: 'Battery Wire - Positive',

    vehicle: 'Bajaj Discover DTS-i 135cc ES Disc Brake',

    image: '/battery wire/RP383 Bajaj Discover dts i 135cc es disc break positive (1).png',

  },

  {

    partNumber: 'RP383',

    name: 'Battery Wire - Positive',

    vehicle: 'Honda Shine 125cc ES / Unicorn',

    image: '/battery wire/RP383 Honda Shine 125cc es unicorn positive (1).png',

  },

  {

    partNumber: 'RP383A',

    name: 'Battery Wire - To Relay Positive',

    vehicle: 'Bajaj Discover DTS-i ES 125cc / 135cc Disc Brake',

    image: '/battery wire/RP383a To Relay Bajaj discover dtsi es 125cc 135cc Disk Break Positive  (6).png',

  },

  {

    partNumber: 'RP383MT',

    name: 'Battery Wire - Negative & Positive Pair',

    vehicle: 'Honda Activa New Model',

    image: '/battery wire/RP383MT Honda Activa n m negative & positive pair (2).png',

  },

  {

    partNumber: 'RP383RL',

    name: 'Battery Wire - To Relay Positive',

    vehicle: 'Hero Honda Glamour ES / Super Splendor ES',

    image: '/battery wire/RP383RL To Relay Hero Honda Glamour es super splendor es positive (1).png',

  },

  {

    partNumber: 'RP383ZM',

    name: 'Battery Wire - To Relay Positive',

    vehicle: 'Hero Honda Hunk 150 ES / CBZ Xtreme 150 ES',

    image: '/battery wire/RP383ZM To Relay Hero Hnd Hunk 150 es Cbz Xtreme 150 es positive (1).png',

  },

];

const rectifierShowcaseProducts: ProductCard[] = [

  {

    partNumber: 'RP277',

    name: 'Regulator Rectifier',

    vehicle: 'Hero Honda CD 100 / Dawn / Kinetic Honda',

    image:

      '/rectifier/RP277 Regulator Rectifier For Hero Honda Cd 100 Dawn Kinetic Honda (3).png',

  },

  {

    partNumber: 'RP278',

    name: 'Regulator Rectifier',

    vehicle: 'Hero Honda Splendor / Passion',

    image:

      '/rectifier/RP278 Hero Honda Splendor Passion.jpg',

  },

];

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

  const imageMap: Record<string, string> = {

    '2-wheeler-parts-lt-coils-light':

      ltCoilProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-pick-up-coil-pulsar':

      pickupCoilProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-cdi-unit':

      cdiUnitProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-ac-regulator':

      acRegulatorProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-electronic-flasher':

      electronicFlasherProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-rectifier':

      rectifierShowcaseProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-ht-coils':

      htCoilProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-igniters':

      igniterProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-ignition-switch-cum-steering-lock-ignition-switch':

      ignitionSwitchProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-combination-switch-lh-only':

      combinationSwitchProducts[0]?.image || FALLBACK_IMAGE,

    '2-wheeler-parts-battery-wire':

      batteryWireProducts[0]?.image || FALLBACK_IMAGE,

  };

  return imageMap[slug] || category.image || FALLBACK_IMAGE;

}

/* =========================================================

   MAIN COMPONENT

   ========================================================= */

function CategoryDetailPage({

  slug,

}: CategoryDetailPageProps) {

  const category = getCategoryBySlug(slug);

  const isChargingCoil = slug === CHARGING_COIL_SLUG;

  const isRectifierDedicated =

    slug === REGULATOR_RECTIFIER_SLUG;

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

  const productType = isSelfRelay

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

  const productSource: ProductCard[] = isSelfRelay

    ? (selfRelayProducts as ProductCard[])

    : isCombinationSwitch

    ? (combinationSwitchProducts as ProductCard[])

    : isIgnitionSwitch

    ? (ignitionSwitchProducts as ProductCard[])

    : isBatteryWire

    ? batteryWireProducts

    : isIgniter

    ? igniterProducts

    : isHtCoil

      ? htCoilProducts

      : isRectifier

        ? rectifierShowcaseProducts

        : isFlasher

          ? (electronicFlasherProducts as ProductCard[])

          : isAcRegulator

            ? (acRegulatorProducts as ProductCard[])

            : isCdi

              ? (cdiUnitProducts as ProductCard[])

              : isPickupCoil

                ? (pickupCoilProducts as ProductCard[])

                : isLtCoil

                  ? (ltCoilProducts as ProductCard[])

                  : [];

  const products = productSource;

  const currentProduct = products[activeProduct];

  /* Product search */

  const filteredProducts = products.filter((product) => {

    const search = productSearch

      .toLowerCase()

      .replace(/[^a-z0-9]/g, '');

    const content =

      `${product.partNumber} ${product.name} ${product.vehicle}`

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

    ? `Hello ORADO, I am interested in ${productType} ${currentProduct.partNumber} for ${currentProduct.vehicle}. Please share the price, product details and availability.`

    : generalMessage;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

    productMessage

  )}`;

  const generalWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

    generalMessage

  )}`;

  /* Hero banner */

  const heroImage = isSelfRelay

    ? selfRelayProducts[0]?.image

    : isCombinationSwitch

    ? '/Combination-Switch-Key-Features-Banner.png'

    : isIgnitionSwitch

    ? ignitionSwitchProducts[0]?.image

    : isBatteryWire

    ? batteryWireProducts[0]?.image

    : isIgniter

    ? igniterProducts[0]?.image

    : isHtCoil

      ? htCoilProducts[0]?.image

      : isRectifier

        ? rectifierShowcaseProducts[0]?.image

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

                  : category?.image || '';

  /* =====================================================

     DEDICATED CATEGORY ROUTING

     ===================================================== */

  if (isBatteryWire) {

    return <BatteryWire />;

  }

  if (isChargingCoil) {

    return <ChargingCoil />;

  }

  if (isRectifierDedicated) {

    return <RegulatorRectifier />;

  }

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

              {/* VEHICLE */}

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">

                  Vehicle Compatibility

                </p>

                <p className="mt-2 text-base font-bold leading-relaxed text-[#102747]">

                  {currentProduct?.vehicle || 'Please select a product'}

                </p>

              </div>

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

                    placeholder="Search RP number or vehicle model..."

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

                      key={`${product.partNumber}-${product.image}`}

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

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">

                        Vehicle Compatibility

                      </p>

                      <p className="line-clamp-2 text-[10px] leading-4 text-slate-500">

                        {product.vehicle}

                      </p>

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
