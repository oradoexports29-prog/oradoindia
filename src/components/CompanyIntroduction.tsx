
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const aboutImage = '/aboutorado1.png.webp';

const highlights = [
  'Indian manufacturer and exporter of automotive electrical parts',
  'Specialized in two-wheeler and three-wheeler electrical components',
  'Serving wholesalers, distributors, retailers, and international buyers',
  'In-house manufacturing with focus on quality and reliability',
];

export default function CompanyIntroduction() {
  return (
    <section id="about" className="pt-2 pb-12 md:pt-4 md:pb-14 bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                srcSet="/aboutorado1.png.640.webp 640w, /aboutorado1.png.webp 1280w"
                sizes="(max-width: 1023px) 100vw, 50vw"
                width={1280}
                height={853}
                alt="ORADO automotive electrical parts manufacturing"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white rounded-xl p-6 shadow-2xl hidden md:block">
              <div className="text-4xl font-extrabold text-brand-yellow">
                1994
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider mt-1 text-white/80">
                Year Established
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                About ORADO
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-5 leading-tight">
              Automotive Electrical Parts
              <br />
              Expertise Since 1994
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              ORADO is an Indian manufacturer, exporter, and supplier specializing in two-wheeler and three-wheeler electrical components. With decades of industry experience, we produce a comprehensive range of automotive electrical spare parts that serve markets across domestic and international territories.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our specialized product range supports motorcycles, scooters, and three-wheelers with components built for durability, compatibility, and reliable performance in demanding conditions.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#about-page"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-md hover:bg-navy-800 transition-all shadow-md hover:shadow-lg"
            >
              About ORADO
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
