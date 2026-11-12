
import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
} from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 'iso',
    title: 'ISO 9001:2015 Certification',
    subtitle: 'Quality Management System',
    image: '/ISO%20Certificate.jpg',
  },
  {
    id: 'msme',
    title: 'MSME Registration',
    subtitle: 'Udyam Registration',
    image: '/MSME.jpg',
  },
  {
    id: 'zed',
    title: 'ZED Bronze Certification',
    subtitle: 'Zero Defect Zero Effect',
    image: '/Bronze%20ZED.jpg',
  },
  {
    id: 'ce',
    title: 'CE Mark Certification',
    subtitle: 'Certificate of Compliance',
    image: '/CE%20MARK.jpg',
  },
];

function getInitialIndex() {
  if (typeof window === 'undefined') return 0;

  const id = window.location.hash.split('/')[1];
  const index = certificates.findIndex((cert) => cert.id === id);

  return index >= 0 ? index : 0;
}

function WoodenFrame({
  certificate,
}: {
  certificate: Certificate;
}) {
  return (
    <div className="wood-frame">
      <div className="wood-frame-outer">
        <div className="wood-frame-inner">
          <div className="certificate-paper">
            <img
              src={certificate.image}
              alt={certificate.title}
              draggable={false}
              className="certificate-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificatePage() {
  const [activeIndex, setActiveIndex] = useState(getInitialIndex);
  const [previewOpen, setPreviewOpen] = useState(false);

  const activeCertificate = certificates[activeIndex];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % certificates.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + certificates.length) % certificates.length
    );
  };

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.split('/')[1];
      const index = certificates.findIndex((cert) => cert.id === id);

      if (index >= 0) {
        setActiveIndex(index);
      }

      setPreviewOpen(false);
    };

    window.addEventListener('hashchange', syncHash);

    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    if (!previewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewOpen(false);
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrevious();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewOpen]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f6]">
      <style>{`
        .certificate-room {
          position: relative;
          isolation: isolate;
          background:
            radial-gradient(
              ellipse at 50% 35%,
              #ffffff 0%,
              #f6f5f1 65%,
              #eceae4 100%
            );
          perspective: 1400px;
        }

        .gallery-shelf {
          position: absolute;
          z-index: -1;
          left: 3%;
          right: 3%;
          bottom: 15%;
          height: 24px;
          background: linear-gradient(
            180deg,
            #fffdf7 0%,
            #e5dfd2 35%,
            #c5b99f 78%,
            #a99a7e 100%
          );
          border-top: 2px solid #fff;
          box-shadow:
            0 12px 22px rgba(54, 42, 23, .15),
            0 20px 35px rgba(54, 42, 23, .08);
          transform: rotateX(5deg);
        }

        .gallery-shelf::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -5px;
          height: 5px;
          background: linear-gradient(180deg, #fff, #e5dfd2);
        }

        .gallery-floor-shadow {
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 9%;
          height: 35px;
          background: radial-gradient(
            ellipse,
            rgba(75, 62, 42, .17),
            transparent 70%
          );
          filter: blur(8px);
        }

        .wood-frame {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 3px;
          background: linear-gradient(
            135deg,
            #f9e1a9 0%,
            #b8792e 18%,
            #75400e 32%,
            #e5b96d 48%,
            #8c4f18 65%,
            #f1d28e 83%,
            #9c601e 100%
          );
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.7),
            inset 0 0 0 3px rgba(105,59,16,.6),
            0 10px 20px rgba(43,31,17,.2);
        }

        .wood-frame-outer {
          height: 100%;
          width: 100%;
          padding: 2px;
          background: linear-gradient(
            135deg,
            #fff0c7,
            #a66a26 35%,
            #f4d99e 65%,
            #87501d
          );
          box-shadow: inset 0 0 0 1px #754313;
        }

        .wood-frame-inner {
          height: 100%;
          width: 100%;
          padding: 2px;
          background: #f8f0df;
          border: 1px solid #9c6a2e;
          box-shadow: inset 0 0 0 1px #d5b77e;
        }

        .certificate-paper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: 1px solid #e4d7bc;
          padding: 0;
        }

        .certificate-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .shelf-certificate {
          position: absolute;
          left: 50%;
          bottom: 17%;
          transform-origin: center bottom;
          cursor: pointer;
          transition:
            transform 850ms cubic-bezier(.2,.75,.2,1),
            opacity 500ms ease,
            filter 500ms ease;
          will-change: transform;
          backface-visibility: hidden;
        }

        .shelf-certificate:focus-visible {
          outline: 3px solid #071d49;
          outline-offset: 6px;
        }

        .shelf-certificate:not(.is-selected) {
          filter: brightness(.94) saturate(.88);
        }

        @media (max-width: 640px) {
          .certificate-room {
            perspective: 900px;
          }

          .gallery-shelf {
            left: -10%;
            right: -10%;
            bottom: 13%;
            height: 17px;
          }

          .gallery-floor-shadow {
            bottom: 7%;
          }

          .shelf-certificate {
            bottom: 16%;
          }

          .wood-frame {
            padding: 2px;
          }

          .wood-frame-outer {
            padding: 2px;
          }

          .wood-frame-inner {
            padding: 2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shelf-certificate {
            transition: none;
          }
        }
      `}</style>

      {/* Page heading */}
      <section className="px-4 pb-3 pt-9 text-center sm:pt-12 md:pt-14">
        <div className="container-max">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-red-600 sm:text-xs">
            ORADO · Established 1994
          </p>

          <h1 className="mt-3 font-display text-3xl font-extrabold text-[#071d49] sm:text-4xl md:text-5xl">
            Our Certifications
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            A collection of ORADO's official certifications and registrations,
            reflecting our commitment to quality and compliance.
          </p>
        </div>
      </section>

      {/* Certificate gallery */}
      <section className="container-max px-2 pb-12 pt-5 sm:px-5 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="certificate-room relative h-[390px] overflow-hidden rounded-sm sm:h-[510px] md:h-[590px] lg:h-[630px]">
            <div className="gallery-floor-shadow" />
            <div className="gallery-shelf" />

            {certificates.map((cert, index) => {
              let difference = index - activeIndex;

              if (difference > certificates.length / 2) {
                difference -= certificates.length;
              }

              if (difference < -certificates.length / 2) {
                difference += certificates.length;
              }

              const isSelected = difference === 0;

              const spacing =
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 100
                  : 220;

              const rotation =
                difference === 0 ? 0 : difference < 0 ? 9 : -9;

              const scale =
                difference === 0
                  ? 1
                  : typeof window !== 'undefined' &&
                      window.innerWidth < 640
                    ? 0.76
                    : 0.82;

              const depth = isSelected ? 65 : -65;

              const width =
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 155
                  : 245;

              const height =
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 255
                  : 405;

              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => {
                    if (isSelected) {
                      setPreviewOpen(true);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`View ${cert.title}`}
                  aria-pressed={isSelected}
                  className={`shelf-certificate ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  style={{
                    width,
                    height,
                    marginLeft: -width / 2,
                    transform: `
                      translateX(${difference * spacing}px)
                      translateY(${difference === 0 ? 0 : 12}px)
                      translateZ(${depth}px)
                      rotateY(${rotation}deg)
                      scale(${scale})
                    `,
                    zIndex: isSelected
                      ? 50
                      : 20 - Math.abs(difference),
                    opacity: Math.abs(difference) > 2 ? 0 : 1,
                    pointerEvents:
                      Math.abs(difference) > 2 ? 'none' : 'auto',
                  }}
                >
                  <WoodenFrame certificate={cert} />

                  {isSelected && (
                    <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#071d49] text-white shadow-xl">
                      <ZoomIn size={18} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected certificate details */}
          <div className="mt-5 px-2 text-center sm:mt-7">
            <span className="inline-flex rounded-full bg-[#071d49]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#071d49] sm:text-xs">
              Certificate {activeIndex + 1} of {certificates.length}
            </span>

            <h2 className="mt-3 font-display text-lg font-extrabold text-[#071d49] sm:text-xl md:text-2xl">
              {activeCertificate.title}
            </h2>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              {activeCertificate.subtitle}
            </p>

            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#071d49] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-red-600"
            >
              <ZoomIn size={16} />
              View Certificate
            </button>
          </div>

          {/* Gallery navigation */}
          <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous certificate"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#071d49] shadow-sm transition hover:bg-[#071d49] hover:text-white"
            >
              <ChevronLeft size={21} />
            </button>

            <div className="flex items-center gap-2">
              {certificates.map((cert, index) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select ${cert.title}`}
                  aria-current={
                    activeIndex === index ? 'true' : undefined
                  }
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-7 bg-red-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next certificate"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#071d49] shadow-sm transition hover:bg-[#071d49] hover:text-white"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          <p className="mt-4 text-center text-[10px] text-slate-400 sm:text-xs">
            Select a framed certificate to bring it forward. Select it again
            to view the full certificate.
          </p>
        </div>
      </section>

      {/* Full certificate preview: transparent background, image and arrows only */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-transparent"
          onClick={() => setPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCertificate.title} preview`}
        >
          <img
  src={activeCertificate.image}
  alt={activeCertificate.title}
  draggable={false}
  onClick={(event) => event.stopPropagation()}
  className="pointer-events-auto block max-h-[78dvh] max-w-[75vw] object-contain sm:max-h-[82dvh] sm:max-w-[65vw] lg:max-h-[85dvh] lg:max-w-[48vw]"
  style={{
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: 0,
  }}
/>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setPreviewOpen(false)}
            aria-label="Close certificate"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071d49]/85 text-white shadow-lg transition hover:bg-red-600 sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {/* Previous certificate */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrevious();
            }}
            aria-label="Previous certificate"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#071d49]/85 text-white shadow-lg transition hover:bg-red-600 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next certificate */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="Next certificate"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#071d49]/85 text-white shadow-lg transition hover:bg-red-600 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight size={26} />
          </button>

          {/* Certificate counter */}
          <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#071d49]/85 px-4 py-2 text-xs font-bold text-white">
            {activeIndex + 1} / {certificates.length}
          </span>
        </div>
      )}
    </main>
  );
}
