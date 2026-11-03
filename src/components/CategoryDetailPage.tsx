import { useEffect, useState } from 'react';
import { ArrowLeft, MessageCircle, Send, CheckCircle2, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { getCategoryBySlug, getAllCategories, CategoryData } from '@/data/categoryRegistry';
import { companyInfo } from '@/data/navigation';

interface CategoryDetailPageProps {
  slug: string;
}

function CategoryDetailPage({ slug }: CategoryDetailPageProps) {
  const category = getCategoryBySlug(slug);
  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setWhatsappMsg(`Hello ORADO, I am interested in ${category?.title || 'your products'}. Please provide more details and a quotation.`);
    if (category?.image) {
      setSelectedImage(category.image);
    }
  }, [category]);

  if (!category) {
    return (
      <div className="container-max py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-navy-900">Category Not Found</h2>
        <p className="mt-4 text-gray-500">The product category you are looking for doesn't exist or has been moved.</p>
        <a href="#products-page" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-brand-red-dark">
          Return to Products <ArrowLeft className="h-4 w-4" />
        </a>
      </div>
    );
  }

  const familyCategories = getAllCategories().filter(c => c.family === category.family);

  return (
    <main className="bg-gray-50 pb-20">
      {/* Breadcrumbs */}
      <nav className="container-max py-6">
        <ul className="flex items-center gap-2 text-xs font-medium text-gray-400">
          <li><a href="#home" className="hover:text-brand-red transition-colors">Home</a></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li><a href="#products-page" className="hover:text-brand-red transition-colors">Products</a></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li><span className="text-navy-900">{category.family}</span></li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-navy-900 font-bold">{category.title}</li>
        </ul>
      </nav>

      <div className="container-max grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={category.title}
                className="h-full w-full object-contain bg-white transition-all duration-300"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                <Wrench className="h-16 w-16" />
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {familyCategories.slice(0, 4).map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(c.image || null)}
                aria-label={`View ${c.title}`}
                className={`aspect-square overflow-hidden rounded-lg border-2 bg-white transition-all duration-200 ${
                  selectedImage === c.image ? 'border-brand-red ring-2 ring-brand-red/20' : 'border-gray-200 hover:border-brand-red/50'
                }`}
              >
                <img
                  src={c.image || '/placeholder.png'}
                  alt={c.title}
                  className={`h-full w-full object-cover transition-opacity ${selectedImage === c.image ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Category Details */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-red mb-4">
            <ShieldCheck className="h-3 w-3" /> Certified Quality
          </div>
          <h1 className="font-display text-4xl font-extrabold text-navy-900 md:text-5xl leading-tight">
            {category.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {category.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Availability</p>
                <p className="text-sm font-bold text-navy-900">In Stock / On Request</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">Standard</p>
                <p className="text-sm font-bold text-navy-900">OEM Grade</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
            >
              Request a Quote <Send className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-700"
            >
              Enquire via WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <section className="container-max mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-extrabold text-navy-900">Related Categories</h2>
          <a href="#products-page" className="text-xs font-bold uppercase tracking-wide text-brand-red hover:underline">View All Products</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {familyCategories.filter(c => c.slug !== category.slug).slice(0, 4).map(c => (
            <a
              key={c.slug}
              href={`#category/${c.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all hover:shadow-md hover:border-brand-red/40"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img src={c.image || '/placeholder.png'} alt={c.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="text-sm font-bold text-navy-900 group-hover:text-brand-red transition-colors">{c.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

// Helper for breadcrumbs
function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
}

export default CategoryDetailPage;
