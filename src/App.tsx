
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VehicleCompatibility from '@/components/VehicleCompatibility';
import ProductCategories from '@/components/ProductCategories';
import CompanyIntroduction from '@/components/CompanyIntroduction';
import WhyChooseOrado from '@/components/WhyChooseOrado';
import AboutUsPage from '@/components/AboutUsPage';
import ProductsPage from '@/components/ProductsPage';
import CategoryDetailPage from '@/components/CategoryDetailPage';
import QualityPage from '@/components/QualityPage';
import CertificatePage from '@/components/CertificatePage';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import FloatingContactToolbar from '@/components/FloatingContactToolbar';
import Logo from '@/components/Logo';

import useOradoAnimations from '@/hooks/useOradoAnimations';

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

function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 2600);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white px-5 text-center text-[#071d49]"
      role="dialog"
      aria-label="Welcome to ORADO"
      aria-modal="true"
    >
      <style>{`
        @keyframes oradoIntroLogo {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes oradoIntroLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes oradoIntroText {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .orado-intro-logo {
          animation: oradoIntroLogo 850ms cubic-bezier(.22,1,.36,1) both;
        }

        .orado-intro-logo img,
        .orado-intro-logo svg {
          display: block;
          width: 100% !important;
          max-width: 100% !important;
          height: auto;
          max-height: 230px;
          object-fit: contain;
          margin-inline: auto;
        }

        .orado-intro-line {
          width: 150px;
          height: 5px;
          margin: 26px auto 0;
          border-radius: 999px;
          background: #ffcc00;
          transform-origin: center;
          animation: oradoIntroLine 750ms ease-out 250ms both;
        }

        .orado-intro-tagline {
          margin-top: 23px;
          color: #071d49;
          font-size: clamp(11px, 2vw, 15px);
          font-weight: 800;
          line-height: 1.8;
          letter-spacing: .14em;
          animation: oradoIntroText 650ms ease-out 450ms both;
        }

        .orado-intro-since {
          margin-top: 10px;
          color: #ed1c24;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .18em;
          animation: oradoIntroText 650ms ease-out 600ms both;
        }

        @media (max-width: 480px) {
          .orado-intro-logo img,
          .orado-intro-logo svg {
            max-height: 150px;
          }

          .orado-intro-tagline {
            letter-spacing: .07em;
          }

          .orado-intro-since {
            font-size: 10px;
            letter-spacing: .12em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orado-intro-logo,
          .orado-intro-line,
          .orado-intro-tagline,
          .orado-intro-since {
            animation: none !important;
          }
        }
      `}</style>

      <div className="w-full">
        <div className="orado-intro-logo mx-auto w-[min(560px,88vw)]">
          <Logo />
        </div>

        <div className="orado-intro-line" />

        <p className="orado-intro-tagline">
          TRUSTED ELECTRICAL PARTS
        </p>

        <p className="orado-intro-since">
          ESTABLISHED 1994 · MADE IN INDIA
        </p>
      </div>

      <button
        type="button"
        onClick={onFinish}
        className="absolute right-5 top-5 rounded-md border border-[#071d49]/25 bg-white px-4 py-2 text-sm font-semibold text-[#071d49] transition hover:border-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Skip Intro
      </button>
    </div>
  );
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  const [qualitySection, setQualitySection] =
    useState<QualitySection>('main');

  const [showIntro, setShowIntro] = useState(false);

  useOradoAnimations(hash);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  const finishIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

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

  const getCategorySlug = () =>
    isCategoryPage ? hash.replace('#category/', '') : '';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {isCataloguePage ? (
        <CataloguePage />
      ) : isAboutPage ? (
        <AboutUsPage />
      ) : isCategoryPage ? (
        <CategoryDetailPage slug={getCategorySlug()} />
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

      <Footer />
      <FloatingContactToolbar />

      {showIntro && <IntroAnimation onFinish={finishIntro} />}
    </div>
  );
}

export default App;
