
import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VehicleCompatibility from '@/components/VehicleCompatibility';
import ProductCategories from '@/components/ProductCategories';
import CompanyIntroduction from '@/components/CompanyIntroduction';
import WhyChooseOrado from '@/components/WhyChooseOrado';
import Footer from '@/components/Footer';
import FloatingContactToolbar from '@/components/FloatingContactToolbar';

import useOradoAnimations from '@/hooks/useOradoAnimations';

const AboutUsPage = lazy(() => import('@/components/AboutUsPage'));
const ProductsPage = lazy(() => import('@/components/ProductsPage'));
const CategoryDetailPage = lazy(() => import('@/components/CategoryDetailPage'));
const QualityPage = lazy(() => import('@/components/QualityPage'));
const CertificatePage = lazy(() => import('@/components/CertificatePage'));
const ContactPage = lazy(() => import('@/components/ContactPage'));

const CATALOGUE_URL = 'https://heyzine.com/flip-book/96371319fe.html';

type QualitySection = 'main' | 'assurance' | 'capabilities' | 'inspection';

function CataloguePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#071d49] px-5 py-10 text-center text-white md:py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
          ORADO · Established 1994
        </p>

        <h1 className="text-3xl font-extrabold md:text-5xl">
          ORADO Product Catalogue
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
          Explore our two-wheeler and three-wheeler electrical spare parts,
          lubrication products and workshop tools.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-[#071d49] transition hover:bg-yellow-300"
          >
            OPEN FULL CATALOGUE ↗
          </a>

          <a
            href="#contact"
            className="rounded-md border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#071d49]"
          >
            REQUEST A QUOTE
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-3 py-8 sm:px-5 md:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#071d49] md:text-3xl">
              Browse Our Catalogue
            </h2>

            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Browse the flipbook below or open it in a new tab.
            </p>
          </div>

          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-md border border-[#071d49] px-4 py-2.5 text-sm font-bold text-[#071d49] transition hover:bg-[#071d49] hover:text-white"
          >
            Open in a new tab ↗
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
          <iframe
  title="ORADO Product Catalogue"
  src={CATALOGUE_URL}
  allow="autoplay; fullscreen; clipboard-write"
  loading="eager"
  className="block w-full border-0"
  style={{ height: 'clamp(560px, 78vh, 900px)' }}
/>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          If the catalogue does not load, open it directly in a new tab.
        </p>

        <div className="mt-9">
          <h2 className="mb-5 text-center text-xl font-bold text-[#071d49] md:text-2xl">
            Explore ORADO Products
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="#products-page-2-wheeler"
              className="group rounded-xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#071d49] hover:shadow-md"
            >
              <h3 className="font-bold text-[#071d49] group-hover:text-red-600">
                Two-Wheeler Parts
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Electrical components for motorcycles and scooters.
              </p>

              <span className="mt-4 inline-block text-sm font-bold text-red-600">
                Explore Products →
              </span>
            </a>

            <a
              href="#products-page-3-wheeler"
              className="group rounded-xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#071d49] hover:shadow-md"
            >
              <h3 className="font-bold text-[#071d49] group-hover:text-red-600">
                Three-Wheeler Parts
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Electrical components for three-wheelers.
              </p>

              <span className="mt-4 inline-block text-sm font-bold text-red-600">
                Explore Products →
              </span>
            </a>

            <a
              href="#products-page-lubrication"
              className="group rounded-xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#071d49] hover:shadow-md"
            >
              <h3 className="font-bold text-[#071d49] group-hover:text-red-600">
                Lubrication &amp; Hand Tools
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Lubrication products and workshop hand tools.
              </p>

              <span className="mt-4 inline-block text-sm font-bold text-red-600">
                Explore Products →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-9 rounded-xl bg-[#071d49] px-5 py-8 text-center text-white md:px-8">
          <h2 className="text-xl font-bold md:text-2xl">
            Looking for Wholesale Supply?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-200 md:text-base">
            Contact ORADO for product information, bulk requirements and
            export enquiries.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex rounded-md bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            CONTACT ORADO
          </a>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  const [qualitySection, setQualitySection] =
    useState<QualitySection>('main');

  useOradoAnimations(hash);


  const isAboutPage =
    hash === '#about-page' || hash.startsWith('#about-');

  const isProductsPage =
    hash === '#products-page' || hash.startsWith('#products-page-');

  const isCategoryPage = hash.startsWith('#category/');

  useLayoutEffect(() => {
    if (isCategoryPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash, isCategoryPage]);

  const isQualityPage =
    hash === '#quality' || hash.startsWith('#quality-');

  // All certificate links now open the same gallery.
  const isCertificatePage =
    hash === '#certificates' || hash.startsWith('#certificates/');

  const isContactPage = hash === '#contact';

  const isCataloguePage =
    hash === '#catalogue' || hash === '#catalogue-page';

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setHash(newHash);

      if (newHash.startsWith('#quality-')) {
        const section = newHash.replace('#quality-', '');

        if (
          section === 'assurance' ||
          section === 'capabilities' ||
          section === 'inspection'
        ) {
          setQualitySection(section);
        }
      } else if (newHash === '#quality') {
        setQualitySection('main');
      }

      window.scrollTo({
        top: 0,
        behavior: newHash.startsWith('#category/') ? 'instant' : 'smooth',
      });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Category links can open either the category overview or the
  // category page with its first product selected. The query string
  // is stored inside the URL hash, so parse it separately from the slug.
  const getCategoryRoute = (): {
    slug: string;
    viewMode: 'overview' | 'products';
    initialProductIndex: number;
  } => {
    if (!isCategoryPage) {
      return { slug: '', viewMode: 'products', initialProductIndex: 0 };
    }

    const route = hash.slice('#category/'.length);
    const questionMarkIndex = route.indexOf('?');
    const rawSlug = questionMarkIndex >= 0
      ? route.slice(0, questionMarkIndex)
      : route;
    const queryString = questionMarkIndex >= 0
      ? route.slice(questionMarkIndex + 1)
      : '';
    const params = new URLSearchParams(queryString);

    const requestedProductIndex = Number.parseInt(params.get('product') || '0', 10);

    return {
      slug: decodeURIComponent(rawSlug),
      viewMode: params.get('view') === 'overview' ? 'overview' : 'products',
      initialProductIndex: Number.isFinite(requestedProductIndex) && requestedProductIndex >= 0
        ? requestedProductIndex
        : 0,
    };
  };

  const categoryRoute = getCategoryRoute();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Suspense fallback={null}>
        {isCataloguePage ? (
          <CataloguePage />
        ) : isAboutPage ? (
          <AboutUsPage />
        ) : isCategoryPage ? (
          <CategoryDetailPage
            slug={categoryRoute.slug}
            viewMode={categoryRoute.viewMode}
            initialProductIndex={categoryRoute.initialProductIndex}
          />
        ) : isProductsPage ? (
          <ProductsPage />
        ) : isQualityPage ? (
          <QualityPage
            activeSection={qualitySection}
            setActiveSection={(section) => {
              setQualitySection(section);
              window.location.hash =
                section === 'main' ? '#quality' : `#quality-${section}`;
            }}
          />
        ) : isCertificatePage ? (
          <CertificatePage />
        ) : isContactPage ? (
          <ContactPage />
        ) : (
          <main>
            <HeroSection />
            <VehicleCompatibility />
            <ProductCategories />
            <CompanyIntroduction />
            <WhyChooseOrado />
          </main>
        )}
      </Suspense>

      <Footer />
      <FloatingContactToolbar />
    </div>
  );
}

export default App;
