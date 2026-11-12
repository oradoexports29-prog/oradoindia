import { ArrowRight, ChevronRight } from 'lucide-react';
import { NavSubItem, productMenuGroups } from '@/data/navigation';

interface ProductsMegaMenuProps {
  subItems: NavSubItem[];
  onClose: () => void;
}

function ProductGroupSection({ group, onClose }: { group: (typeof productMenuGroups)[number]; onClose: () => void }) {
  return (
    <section className="px-4 py-4 first:border-l-0 lg:border-l lg:border-gray-200">
      <div className="mb-3 flex items-start gap-2.5">
        <span className="mt-0.5 h-5 w-1 shrink-0 rounded-full bg-brand-red" />
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy-900">{group.title}</h4>
          <p className="mt-1 text-[11px] leading-snug text-gray-400">{group.categories.length} featured categories</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        {group.categories.map((item) => {
          const familySlug = group.title.toLowerCase().replace(/ /g, '-');
          const catSlug = item.label.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-');
          const slug = `${familySlug}-${catSlug}`;
          return (
            <a
              key={item.label}
              href={`#category/${slug}`}
              onClick={onClose}
              className="group flex min-h-[34px] items-start gap-1.5 rounded-md px-1.5 py-1.5 transition-colors hover:bg-navy-50"
            >
              <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-red" />
              <span className="text-[11px] font-medium leading-snug text-navy-800 transition-colors group-hover:text-brand-red">{item.label}</span>
            </a>
          );
        })}
      </div>
      <a
        href={group.viewAllHref}
        onClick={onClose}
        className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-brand-red/30 px-2.5 py-2 text-[10px] font-extrabold uppercase tracking-wide text-brand-red transition-colors hover:bg-brand-red hover:text-white"
      >
        View All {group.title} <ArrowRight className="h-3 w-3" />
      </a>
    </section>
  );
}

export default function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 top-full z-50 animate-slide-down">
      <div className="border-b-4 border-b-brand-red bg-white shadow-2xl">
        <div className="container-max">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy-900">Product Categories</h3>
              <p className="mt-0.5 text-xs text-gray-500">Browse by product family</p>
            </div>
            <a href="#products-page" onClick={onClose} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-red transition-colors hover:text-brand-red-dark">
              View All Products <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 pb-2 md:grid-cols-3">
            {productMenuGroups.map((group) => <ProductGroupSection key={group.title} group={group} onClose={onClose} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
