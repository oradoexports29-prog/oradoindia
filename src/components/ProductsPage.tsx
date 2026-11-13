import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Bike, Check, ChevronDown, Search, Truck, Wrench, X } from 'lucide-react';
import {
  lubricationAndHandToolProductCategories,
  threeWheelerProductCategories,
  twoWheelerProductCategories,
} from '@/data/navigation';
import type { NavSubItem } from '@/data/navigation';
import {
  lubricationHandToolImages,
  threeWheelerImages,
  twoWheelerImages,
} from '@/data/productImages';
import { catalogueProductsByCategory } from '@/data/catalogueProducts';
import { getCategoryBySlug } from '@/data/categoryRegistry';

interface ProductFamily {
  key: Exclude<FamilyKey, 'all'>;
  title: string;
  description: string;
  categories: NavSubItem[];
  images: string[];
  anchor: string;
  icon: typeof Bike;
}

type FamilyKey = 'all' | 'two-wheeler' | 'three-wheeler' | 'lubrication';

interface CatalogueItem {
  category: NavSubItem;
  image?: string;
  family: ProductFamily;
}

interface ProductRecord {
  partNumber: string;
  referenceNumber?: string | null;
  name: string;
  vehicle: string;
  description: string;
  image: string;
  family: Exclude<FamilyKey, 'all'>;
  familyTitle: string;
  category: string;
  categorySlug: string;
}

const priorityCategories: Record<Exclude<FamilyKey, 'all'>, string[]> = {
  'two-wheeler': [
    'Charging Coil (Source)', 'L.T. Coils (Light)', 'Pick Up Coil (Pulsar)', 'C.D.I. Unit',
    'A.C. Regulator', 'Electronic Flasher', 'Regulator Rectifier', 'Coil Plate Assembly',
  ],
  'three-wheeler': [
    'Charging Coil (Source)', 'Pick Up Coil (Pulsar)', 'Light Coil', 'C.D.I. Unit',
    'Electronic Flasher', 'Regulator Rectifier (RR Unit)', 'Coil Plate Assembly (Stator)', 'HT Coil (Ignition Coil)',
  ],
  lubrication: [
    'Engine Lubricants', 'Gear & Transmission Lubricants', 'Grease & Bearing Lubricants', 'Chain Care & Maintenance',
    'Combination Spanners', 'Socket & Ratchet Sets', 'Screwdrivers & Pliers', 'Workshop Hand Tool Sets',
  ],
};

const families: ProductFamily[] = [
  {
    key: 'two-wheeler', title: '2 Wheeler Parts',
    description: 'Premium electrical components for motorcycles and scooters, ensuring peak performance and reliability.',
    categories: twoWheelerProductCategories, images: twoWheelerImages,
    anchor: 'products-page-2-wheeler', icon: Bike,
  },
  {
    key: 'three-wheeler', title: '3 Wheeler Parts',
    description: 'Dedicated electrical parts for three-wheeler applications, built for durability in heavy-duty use.',
    categories: threeWheelerProductCategories, images: threeWheelerImages,
    anchor: 'products-page-3-wheeler', icon: Truck,
  },
  {
    key: 'lubrication', title: 'Lubrication & Hand Tools',
    description: 'High-performance vehicle care, maintenance products, and professional workshop hand tools.',
    categories: lubricationAndHandToolProductCategories, images: lubricationHandToolImages,
    anchor: 'products-page-lubrication', icon: Wrench,
  },
];

const slugify = (value: string) => value.toLowerCase()
  .replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-').trim();
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

function familyFromHash(hash: string): FamilyKey {
  if (hash.includes('2-wheeler')) return 'two-wheeler';
  if (hash.includes('3-wheeler')) return 'three-wheeler';
  if (hash.includes('lubrication')) return 'lubrication';
  return 'all';
}

function orderedItems(family: ProductFamily): CatalogueItem[] {
  const priority = priorityCategories[family.key];
  return family.categories
    .map((category, index) => ({ category, index }))
    .sort((left, right) => {
      const leftPriority = priority.indexOf(left.category.label);
      const rightPriority = priority.indexOf(right.category.label);
      return (leftPriority === -1 ? priority.length + left.index : leftPriority)
        - (rightPriority === -1 ? priority.length + right.index : rightPriority);
    })
    .map(({ category, index }) => ({ category, image: family.images[index], family }));
}

const productRecords: ProductRecord[] = Object.entries(catalogueProductsByCategory)
  .flatMap(([categorySlug, products]) => {
    const categoryData = getCategoryBySlug(categorySlug);
    if (!categoryData) return [];
    const family: Exclude<FamilyKey, 'all'> =
      categoryData.family === '3 Wheeler Parts' ? 'three-wheeler' : 'two-wheeler';
    return products.map((product) => ({
      ...product,
      family,
      familyTitle: categoryData.family,
      category: categoryData.title,
      categorySlug,
    }));
  });

function ProductCategoryCard({ item }: { item: CatalogueItem }) {
  const slug = `${slugify(item.family.title)}-${slugify(item.category.label)}`;
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg">
      <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
        {item.image ? <img src={item.image} alt={item.category.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /> : <div className="flex h-full items-center justify-center text-navy-200"><Wrench className="h-12 w-12" /></div>}
      </div>
      <div className="p-2.5 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{item.family.title}</p>
        <h3 className="mt-1 min-h-[42px] text-sm font-bold leading-snug text-navy-900">{item.category.label}</h3>
        <a href={`#category/${slug}`} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-red transition-colors hover:text-brand-red-dark">View Products <ArrowRight className="h-3.5 w-3.5" /></a>
      </div>
    </article>
  );
}

function ProductsPage() {
  const [selectedFamily, setSelectedFamily] = useState<FamilyKey>(() => familyFromHash(window.location.hash));
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleHashChange = () => setSelectedFamily(familyFromHash(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const catalogue = useMemo(() => families.flatMap(orderedItems), []);
  const query = normalize(search.trim());
  const matchesSearch = (value: string) => !query || normalize(value).includes(query);

  const visibleProducts = useMemo(() => productRecords.filter((product) => {
    const matchesFamily = selectedFamily === 'all' || product.family === selectedFamily;
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const searchableText = `${product.partNumber} ${product.referenceNumber || ''} ${product.name} ${product.description} ${product.vehicle} ${product.category} ${product.familyTitle}`;
    return matchesFamily && matchesCategory && matchesSearch(searchableText);
  }), [query, selectedFamily, selectedCategory]);

  const visibleItems = useMemo(() => catalogue.filter((item) => {
    const matchesFamily = selectedFamily === 'all' || item.family.key === selectedFamily;
    const matchesCategory = !selectedCategory || item.category.label === selectedCategory;
    const categoryHasProductData = productRecords.some((product) => product.categorySlug === `${slugify(item.family.title)}-${slugify(item.category.label)}`);
    const matchesCategorySearch = matchesSearch(`${item.category.label} ${item.family.title}`);
    // In a search, categories with product datasets are represented by the matching product cards below.
    return matchesFamily && matchesCategory && matchesCategorySearch && (!query || !categoryHasProductData);
  }), [catalogue, query, selectedCategory, selectedFamily]);

  const visibleFamilies = selectedFamily === 'all' ? families : families.filter((family) => family.key === selectedFamily);
  const categoryOptions = selectedFamily === 'all' ? [] : families.find((family) => family.key === selectedFamily)?.categories ?? [];
  const clearFilters = () => { setSelectedFamily('all'); setSelectedCategory(''); setSearch(''); window.location.hash = 'products-page'; };
  const selectFamily = (familyKey: FamilyKey) => { setSelectedFamily(familyKey); setSelectedCategory(''); window.location.hash = 'products-page'; };
  const showSearchResults = Boolean(query);

  return (
    <main className="bg-gray-50">
      <section className="bg-navy-900 py-14 text-white md:py-20">
        <div className="container-max">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">ORADO Product Catalogue</p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl"><h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">Automotive Electrical Spare Parts</h1><p className="mt-4 text-base leading-relaxed text-white/70">Explore ORADO's specialized range of two-wheeler and three-wheeler electrical components, along with lubrication products and workshop hand tools.</p></div>
            <a href="#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark">Request a Quote <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="container-max pt-8">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg md:p-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_220px_220px_auto] lg:items-center">
            <label className="relative block"><span className="sr-only">Search products, RP numbers, vehicles or categories</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search RP number, vehicle, product or category..." className="w-full rounded-md border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10" /></label>
            <label className="relative block"><span className="sr-only">Product family</span><select value={selectedFamily} onChange={(event) => { setSelectedFamily(event.target.value as FamilyKey); setSelectedCategory(''); }} className="w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-3 pr-9 text-sm text-navy-800 outline-none focus:border-brand-red"><option value="all">All product families</option>{families.map((family) => <option key={family.key} value={family.key}>{family.title}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /></label>
            <label className="relative block"><span className="sr-only">Product category</span><select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} disabled={selectedFamily === 'all'} className="w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-3 pr-9 text-sm text-navy-800 outline-none focus:border-brand-red disabled:cursor-not-allowed disabled:text-gray-400"><option value="">All categories</option>{categoryOptions.map((category) => <option key={category.label} value={category.label}>{category.label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /></label>
            {(search || selectedFamily !== 'all' || selectedCategory) && <button type="button" onClick={clearFilters} className="inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-3 text-sm font-bold text-navy-700 transition-colors hover:bg-gray-100"><X className="h-4 w-4" /> Clear</button>}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3"><p className="text-xs font-semibold text-gray-500"><span className="font-bold text-navy-900">{showSearchResults ? visibleProducts.length + visibleItems.length : catalogue.length}</span> {showSearchResults ? 'matching products and categories' : 'categories in catalogue'}</p><div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-400"><Check className="h-3.5 w-3.5 text-brand-red" /> Search by RP reference or vehicle model</div></div>
        </div>
      </section>

      {showSearchResults ? (
        <section className="container-max py-10">
          {visibleProducts.length > 0 && <div className="mb-12"><div className="mb-5 flex items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">Product matches</p><h2 className="mt-1 font-display text-2xl font-extrabold text-navy-900">Matching ORADO Products</h2></div><span className="text-xs font-bold text-gray-400">{visibleProducts.length} found</span></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{visibleProducts.map((product, index) => <article key={`${product.categorySlug}-${product.partNumber}-${index}`} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex aspect-square items-center justify-center bg-white p-4"><img src={product.image} alt={`${product.partNumber} ${product.name} for ${product.vehicle}`} className="h-full w-full object-contain" loading="lazy" /></div><div className="border-t border-gray-100 p-3 sm:p-4"><p className="text-[10px] font-bold uppercase tracking-wide text-brand-red">{product.partNumber}</p><h3 className="mt-1 text-sm font-extrabold text-navy-900">{product.name}</h3><p className="mt-2 text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Product Description</p><p className="mt-0.5 min-h-[36px] text-xs leading-5 text-gray-600">{product.description}</p>{product.referenceNumber && <><p className="mt-2 text-[9px] font-extrabold uppercase tracking-wider text-blue-600">Reference Number</p><p className="mt-0.5 text-xs font-semibold text-navy-900">{product.referenceNumber}</p></>}<p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">{product.category}</p><a href={`#category/${product.categorySlug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-red hover:text-brand-red-dark">View category <ArrowRight className="h-3.5 w-3.5" /></a></div></article>)}</div></div>}
          {visibleItems.length > 0 && <div><div className="mb-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">Category matches</p><h2 className="mt-1 font-display text-2xl font-extrabold text-navy-900">Browse Categories</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{visibleItems.map((item) => <ProductCategoryCard key={`${item.family.key}-${item.category.label}`} item={item} />)}</div></div>}
          {visibleProducts.length === 0 && visibleItems.length === 0 && <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center"><Search className="mx-auto h-8 w-8 text-gray-300" /><h2 className="mt-3 font-bold text-navy-900">No matching products or categories found</h2><p className="mt-2 text-sm text-gray-500">Try another RP number, vehicle model or product keyword.</p></div>}
        </section>
      ) : selectedFamily === 'all' ? (
        <section className="container-max py-16"><div className="mb-12 text-center"><h2 className="font-display text-3xl font-extrabold text-navy-900 md:text-4xl">Our Product Range</h2><p className="mx-auto mt-3 max-w-2xl text-gray-500">Select a product family to explore our comprehensive range of high-quality automotive electrical components and tools.</p></div><div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{families.map((family) => <div key={family.key} onClick={() => selectFamily(family.key)} className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-red/40 hover:shadow-xl"><div className="relative aspect-square overflow-hidden bg-gray-100"><div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1 p-1">{family.images.slice(0, 4).map((img, idx) => <div key={idx} className="relative overflow-hidden"><img src={img} alt={family.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" /></div>)}</div><div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" /></div><div className="p-6 text-center"><h3 className="font-display text-xl font-extrabold text-navy-900">{family.title}</h3><p className="mt-2 line-clamp-2 text-sm text-gray-500">{family.description}</p><button type="button" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:gap-3 group-hover:bg-brand-red">Explore Categories <ArrowRight className="h-4 w-4" /></button></div></div>)}</div></section>
      ) : (
        <section className="container-max py-12 md:py-16"><div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">ORADO Catalogue</p><h2 className="font-display text-2xl font-extrabold text-navy-900 md:text-3xl">{visibleFamilies[0]?.title}</h2><p className="mt-1 text-sm text-gray-500">{visibleFamilies[0]?.description}</p></div><span className="text-xs font-bold uppercase tracking-wider text-gray-400">{visibleItems.length} categories</span></div><div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{catalogue.filter((item) => item.family.key === selectedFamily && (!selectedCategory || item.category.label === selectedCategory)).map((item) => <ProductCategoryCard key={`${item.family.key}-${item.category.label}`} item={item} />)}</div></section>
      )}
    </main>
  );
}

export default ProductsPage;
