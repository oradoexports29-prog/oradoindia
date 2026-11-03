import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Bike, Check, ChevronDown, Search, Truck, Wrench, X } from 'lucide-react';
import {
  lubricationAndHandToolProductCategories,
  NavSubItem,
  threeWheelerProductCategories,
  twoWheelerProductCategories,
} from '@/data/navigation';
import {
  lubricationHandToolImages,
  threeWheelerImages,
  twoWheelerImages,
} from '@/data/productImages';

interface ProductFamily {
  key: FamilyKey;
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
    key: 'two-wheeler',
    title: '2 Wheeler Parts',
    description: 'Premium electrical components for motorcycles and scooters, ensuring peak performance and reliability.',
    categories: twoWheelerProductCategories,
    images: twoWheelerImages,
    anchor: 'products-page-2-wheeler',
    icon: Bike,
  },
  {
    key: 'three-wheeler',
    title: '3 Wheeler Parts',
    description: 'Dedicated electrical parts for three-wheeler applications, built for durability in heavy-duty use.',
    categories: threeWheelerProductCategories,
    images: threeWheelerImages,
    anchor: 'products-page-3-wheeler',
    icon: Truck,
  },
  {
    key: 'lubrication',
    title: 'Lubrication & Hand Tools',
    description: 'High-performance vehicle care, maintenance products, and professional workshop hand tools.',
    categories: lubricationAndHandToolProductCategories,
    images: lubricationHandToolImages,
    anchor: 'products-page-lubrication',
    icon: Wrench,
  },
];

function familyFromHash(hash: string): FamilyKey {
  if (hash.includes('2-wheeler')) return 'two-wheeler';
  if (hash.includes('3-wheeler')) return 'three-wheeler';
  if (hash.includes('lubrication')) return 'lubrication';
  return 'all';
}

function orderedItems(family: ProductFamily): CatalogueItem[] {
  const priority = priorityCategories[family.key as Exclude<FamilyKey, 'all'>];
  return family.categories
    .map((category, index) => ({ category, index }))
    .sort((left, right) => {
      const leftPriority = priority.indexOf(left.category.label);
      const rightPriority = priority.indexOf(right.category.label);
      return (leftPriority === -1 ? priority.length + left.index : leftPriority) - (rightPriority === -1 ? priority.length + right.index : rightPriority);
    })
    .map(({ category, index }) => ({ category, image: family.images[index], family }));
}

function ProductCard({ item, onSelect }: { item: CatalogueItem; onSelect: (family: FamilyKey, category: string) => void }) {
  const familySlug = item.family.title.toLowerCase().replace(/ /g, '-');
  const catSlug = item.category.label.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-');
  const slug = `${familySlug}-${catSlug}`;
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg">
      <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
        {item.image ? <img src={item.image} alt={item.category.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /> : <div className="flex h-full items-center justify-center text-navy-200"><Wrench className="h-12 w-12" /></div>}
      </div>
      <div className="p-2.5 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{item.family.title}</p>
        <h3 className="mt-1 min-h-[42px] text-sm font-bold leading-snug text-navy-900">{item.category.label}</h3>
        <a href={`#category/${slug}`} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-red transition-colors hover:text-brand-red-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
          View Products <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
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
  const visibleFamilies = selectedFamily === 'all' ? families : families.filter((family) => family.key === selectedFamily);
  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return catalogue.filter((item) => {
      const matchesFamily = selectedFamily === 'all' || item.family.key === selectedFamily;
      const matchesCategory = !selectedCategory || item.category.label === selectedCategory;
      const matchesSearch = !query || item.category.label.toLowerCase().includes(query) || item.family.title.toLowerCase().includes(query);
      return matchesFamily && matchesCategory && matchesSearch;
    });
  }, [catalogue, search, selectedCategory, selectedFamily]);

  const categoryOptions = selectedFamily === 'all' ? [] : families.find((family) => family.key === selectedFamily)?.categories ?? [];
  const clearFilters = () => { setSelectedFamily('all'); setSelectedCategory(''); setSearch(''); window.location.hash = 'products-page'; };
  const selectCategory = (family: FamilyKey, category: string) => {
    setSelectedFamily(family);
    setSelectedCategory(category);
    window.location.hash = 'products-page';
  };

  const selectFamily = (familyKey: FamilyKey) => {
    setSelectedFamily(familyKey);
    setSelectedCategory('');
    window.location.hash = 'products-page';
  };

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

      {selectedFamily === 'all' && (
        <section className="container-max py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold text-navy-900 md:text-4xl">Our Product Range</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Select a product family to explore our comprehensive range of high-quality automotive electrical components and tools.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {families.map((family) => (
              <div
                key={family.key}
                onClick={() => selectFamily(family.key)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-red/40 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-1 p-1">
                    {family.images.slice(0, 4).map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden">
                        <img src={img} alt={family.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-extrabold text-navy-900">{family.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{family.description}</p>
                  <button type="button" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red group-hover:gap-3">
                    Explore Categories <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={selectedFamily === 'all' ? 'hidden' : 'container-max relative z-10 py-12 md:py-16'}>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg md:p-5 mb-12">
          <div className="grid gap-3 lg:grid-cols-[1fr_220px_220px_auto] lg:items-center">
            <label className="relative block"><span className="sr-only">Search product categories</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search product or category..." className="w-full rounded-md border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10" /></label>
            <label className="relative block"><span className="sr-only">Product family</span><select value={selectedFamily} onChange={(event) => { setSelectedFamily(event.target.value as FamilyKey); setSelectedCategory(''); }} className="w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-3 pr-9 text-sm text-navy-800 outline-none focus:border-brand-red"><option value="all">All product families</option>{families.map((family) => <option key={family.key} value={family.key}>{family.title}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /></label>
            <label className="relative block"><span className="sr-only">Product category</span><select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} disabled={selectedFamily === 'all'} className="w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-3 pr-9 text-sm text-navy-800 outline-none focus:border-brand-red disabled:cursor-not-allowed disabled:text-gray-400"><option value="">All categories</option>{categoryOptions.map((category) => <option key={category.label} value={category.label}>{category.label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /></label>
            {(search || selectedFamily !== 'all' || selectedCategory) && <button type="button" onClick={clearFilters} className="inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-3 text-sm font-bold text-navy-700 transition-colors hover:bg-gray-100"><X className="h-4 w-4" /> Clear</button>}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3"><p className="text-xs font-semibold text-gray-500"><span className="font-bold text-navy-900">{visibleItems.length}</span> matching categories</p><div className="hidden items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:flex"><Check className="h-3.5 w-3.5 text-brand-red" /> Current ORADO category catalogue</div></div>
        </div>

        <div className="space-y-14">
          {visibleFamilies.map((family) => {
            const items = visibleItems.filter((item) => item.family.key === family.key);
            const Icon = family.icon;
            return <section key={family.key} id={family.anchor} className="scroll-mt-24"><div className="mb-6 flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between"><div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-yellow"><Icon className="h-5 w-5" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">ORADO Catalogue</p><h2 className="font-display text-2xl font-extrabold text-navy-900 md:text-3xl">{family.title}</h2><p className="mt-1 text-sm text-gray-500">{family.description}</p></div></div><span className="text-xs font-bold uppercase tracking-wider text-gray-400">{items.length} shown</span></div>{items.length > 0 ? <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{items.map((item) => <ProductCard key={`${item.family.key}-${item.category.label}`} item={item} onSelect={selectCategory} />)}</div> : <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center"><p className="font-bold text-navy-900">No categories match these filters.</p><p className="mt-2 text-sm text-gray-500">Try a different search or clear the filters to browse the full catalogue.</p></div>}</section>;
          })}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
