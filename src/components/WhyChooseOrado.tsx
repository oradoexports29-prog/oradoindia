import { Award, Zap, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Established Industry Experience',
    description: 'Three decades of manufacturing automotive electrical spare parts for two-wheelers and three-wheelers.',
  },
  {
    icon: Zap,
    title: 'Specialized Automotive Electrical Range',
    description: 'A focused catalog covering charging coils, ignition systems, regulators, switches, and more.',
  },
  {
    icon: Headphones,
    title: 'B2B Customer Support',
    description: 'Dedicated support for wholesalers, distributors, and retailers with product guidance and order assistance.',
  },
  {
    icon: Globe,
    title: 'Domestic and Export Business',
    description: 'Serving both Indian markets and international buyers with reliable supply and export capabilities.',
  },
];

export default function WhyChooseOrado() {
  return (
    <section id="quality" className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-50 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-600">Why ORADO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3">
            Why Choose ORADO
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A trusted name in automotive electrical spare parts with a commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-navy-900 transition-all duration-300 border border-gray-200 hover:border-navy-900"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-red/10 group-hover:bg-brand-red flex items-center justify-center mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-navy-900 group-hover:text-white transition-colors mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
