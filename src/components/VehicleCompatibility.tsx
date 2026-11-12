const vehicleBrands = [
  'MAHINDRA',
  'LML',
  'ROYAL ENFIELD',
  'LAMBRETTA',
  'HERO',
  'HONDA',
  'TVS',
  'BAJAJ',
  'YAMAHA',
  'SUZUKI',
];

function BrandSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="brand-set flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden}>
      {vehicleBrands.map((brand) => (
        <span key={`${hidden ? 'repeat-' : ''}${brand}`} className="whitespace-nowrap text-sm font-extrabold tracking-wide text-navy-800 transition-colors hover:text-brand-red sm:text-base">
          {brand}
        </span>
      ))}
    </div>
  );
}

export default function VehicleCompatibility() {
  return (
    <section id="vehicle-compatibility" className="bg-white py-12 md:py-14">
      <div className="container-max">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Vehicle Compatibility</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-navy-900 md:text-3xl">Our parts are compatible with leading brands</h2>
        </div>
        <div className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 py-5 shadow-sm">
          <div className="brand-marquee flex w-max items-center">
            <BrandSet />
            <BrandSet hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
