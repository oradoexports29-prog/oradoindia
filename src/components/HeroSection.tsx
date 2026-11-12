import { ArrowRight, FileText, Zap, ShieldCheck, Truck } from 'lucide-react';

const heroImage = '/home image1.png.webp';
const heroImageSecondary = '/home image2.png.webp';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-navy-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,201,40,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(217,35,50,0.1) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container-max relative pt-6 pb-16 lg:pt-8 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="text-white animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb - 6">
              <Zap className="h-3.5 w-3.5 text-brand-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Established 1994 · Made in India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Precision Electrical
              <br />
              Components.
              <br />
              <span className="text-brand-yellow">Trusted Since 1994.</span>
            </h1>

            <p className="text-lg text-white/80 mb-4 max-w-xl leading-relaxed">
              Manufacturer and Exporter of Two-Wheeler and Three-Wheeler Electrical Spare Parts.
            </p>
            <p className="text-sm text-white/60 mb-8 max-w-xl leading-relaxed">
              Discover automotive electrical components for motorcycles, scooters, and three-wheelers. ORADO supports wholesalers, distributors, retailers, and international buyers with a specialized product range.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products-page"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded-md hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-navy-900 font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-yellow" />
                <span className="text-xs text-white/70 font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-brand-yellow" />
                <span className="text-xs text-white/70 font-medium">Global Export</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-yellow" />
                <span className="text-xs text-white/70 font-medium">Specialized Range</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                srcSet="/home%20image1.png.640.webp 640w, /home%20image1.png.webp 1600w"
                sizes="(max-width: 1023px) 100vw, 50vw"
                width={1280}
                height={853}
                alt="Motorcycle engine electrical components"
                className="w-full h-[420px] object-cover"
                loading="eager"
                {...{ fetchpriority: 'high' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -left-6 w-48 rounded-xl overflow-hidden shadow-2xl border-4 border-navy-900">
              <img
                src={heroImageSecondary}
                width={640}
                height={480}
                alt="Motorcycle electrical parts detail"
                className="w-full h-32 object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-brand-yellow text-navy-900 rounded-lg px-4 py-3 shadow-xl">
              <div className="text-2xl font-extrabold leading-none">30+</div>
              <div className="text-[10px] font-bold uppercase tracking-wide mt-1">Years of</div>
              <div className="text-[10px] font-bold uppercase tracking-wide">Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px]" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
