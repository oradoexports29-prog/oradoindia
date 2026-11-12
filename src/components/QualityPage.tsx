
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Search,
  CheckCircle2,
  Settings,
  PackageCheck,
  ClipboardCheck,
  Truck,
  Zap,
  CircuitBoard,
  Boxes,
  BadgeCheck,
  FileCheck,
  Handshake,
  ArrowLeft,
} from 'lucide-react';

interface QualityPageProps {
  activeSection: 'main' | 'assurance' | 'capabilities' | 'inspection';
  setActiveSection: (
    section: 'main' | 'assurance' | 'capabilities' | 'inspection'
  ) => void;
}

const productGroups = [
  {
    title: 'Coils & Stator Assemblies',
    description:
      'Electrical components used in motorcycle and scooter ignition and charging systems.',
    products: [
      'Charging Coils',
      'Lighting Coils',
      'Pickup Coils',
      'Stator Plates',
      'Coil Plate Assemblies',
    ],
    icon: CircuitBoard,
  },
  {
    title: 'Ignition Components',
    description:
      'Components for vehicle ignition systems across a range of two-wheeler and three-wheeler applications.',
    products: [
      'Ignition Coils',
      'HT Coils',
      'CDI Units',
      'Igniters',
      'Plug Caps',
    ],
    icon: Zap,
  },
  {
    title: 'Regulators & Electrical Controls',
    description:
      'Electrical regulation, switching, and control components for vehicle applications.',
    products: [
      'Regulator Rectifiers',
      'AC Regulators',
      'Electronic Flashers',
      'Starter Relays',
      'Combination Switches',
    ],
    icon: Settings,
  },
  {
    title: 'Additional Electrical Parts',
    description:
      'A broader range of electrical spare parts for two-wheeler and three-wheeler requirements.',
    products: [
      'Ignition Switches',
      'Stop Switches',
      'Carbon Brushes',
      'Brush Holder Assemblies',
      'Battery Wires',
    ],
    icon: Boxes,
  },
];

const qualityPrinciples = [
  {
    title: 'Product Specification',
    description:
      'Check product details, part numbers, and stated vehicle compatibility against the order requirements.',
    icon: FileCheck,
  },
  {
    title: 'Component Inspection',
    description:
      'Pay attention to component condition, connections, construction, and visible workmanship.',
    icon: Search,
  },
  {
    title: 'Electrical Verification',
    description:
      'Where applicable, electrical checks can help verify continuity and relevant product specifications.',
    icon: Zap,
  },
  {
    title: 'Order & Packaging Checks',
    description:
      'Confirm item identification, quantities, and packaging requirements before dispatch.',
    icon: PackageCheck,
  },
];

function Breadcrumbs({ active }: { active: string }) {
  const formatted =
    active === 'main'
      ? ''
      : active.charAt(0).toUpperCase() +
        active.slice(1).replace(/([A-Z])/g, ' $1');

  return (
    <nav aria-label="Breadcrumb" className="container-max py-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
        <li>
          <a href="#home" className="transition-colors hover:text-red-600">
            Home
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <a href="#quality" className="transition-colors hover:text-red-600">
            Quality &amp; Manufacturing
          </a>
        </li>
        {formatted && (
          <>
            <li aria-hidden="true">/</li>
            <li className="font-bold text-[#071d49]">{formatted}</li>
          </>
        )}
      </ol>
    </nav>
  );
}

function SectionHeader({
  title,
  description,
  onBack,
}: {
  title: string;
  description: string;
  onBack: () => void;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
          ORADO · Quality &amp; Manufacturing
        </p>
        <h2 className="text-3xl font-extrabold text-[#071d49] md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#071d49] transition hover:border-red-300 hover:text-red-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </button>
    </div>
  );
}

export default function QualityPage({
  activeSection,
  setActiveSection,
}: QualityPageProps) {
  return (
    <main className="bg-slate-50 pb-16">
      <Breadcrumbs active={activeSection} />

      {activeSection === 'main' && (
        <>
          {/* Main introduction */}
          <section className="relative overflow-hidden bg-[#071d49] py-14 text-white md:py-20">
            <div className="container-max relative z-10">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Established 1994 · Made in India
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                  Quality &amp; Manufacturing
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  At ORADO, product quality, accurate identification, and
                  dependable business relationships are important parts of
                  serving the automotive spare-parts industry. We supply
                  electrical components for two-wheelers and three-wheelers,
                  supporting wholesalers, distributors, retailers, and
                  international buyers.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveSection('assurance')}
                    className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Explore Quality Assurance
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-8 h-56 w-56 rounded-full border border-yellow-400/20"
              />
            </div>
          </section>

          {/* Text-based company highlights */}
          <section className="container-max py-12 md:py-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Established 1994',
                  description:
                    'Serving the automotive spare-parts sector for decades.',
                  icon: BadgeCheck,
                },
                {
                  title: 'Two-Wheeler Parts',
                  description:
                    'Electrical components for motorcycle and scooter applications.',
                  icon: Zap,
                },
                {
                  title: 'Three-Wheeler Parts',
                  description:
                    'Electrical spare parts for relevant three-wheeler applications.',
                  icon: Settings,
                },
                {
                  title: 'B2B Supply',
                  description:
                    'Supporting trade enquiries, bulk requirements, and export buyers.',
                  icon: Handshake,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-50 text-red-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-extrabold text-[#071d49]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Main content navigation */}
          <section className="container-max pb-8 pt-4">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071d49] md:text-4xl">
                Quality, Product Knowledge &amp; Process
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                Explore our approach to product requirements, component
                categories, and inspection considerations without unnecessary
                visual clutter.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  id: 'assurance' as const,
                  title: 'Quality Assurance',
                  description:
                    'Product identification, specification checks, component condition, and order accuracy.',
                  icon: ShieldCheck,
                  number: '01',
                },
                {
                  id: 'capabilities' as const,
                  title: 'Product Range',
                  description:
                    'Explore key electrical component categories supplied by ORADO.',
                  icon: Factory,
                  number: '02',
                },
                {
                  id: 'inspection' as const,
                  title: 'Inspection & Testing',
                  description:
                    'Learn about relevant inspection and electrical verification considerations.',
                  icon: Search,
                  number: '03',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSection(item.id)}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="text-xs font-extrabold tracking-widest text-red-600">
                        {item.number}
                      </span>
                      <div className="rounded-xl bg-[#071d49] p-3 text-yellow-400 transition group-hover:bg-red-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-[#071d49]">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600">
                      Explore Section
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Product categories */}
          <section className="container-max py-12 md:py-16">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                Automotive Electrical Components
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071d49] md:text-4xl">
                Our Product Categories
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                ORADO's product range includes electrical spare parts used in
                ignition, charging, regulation, switching, and related vehicle
                electrical applications. Confirm individual product
                specifications and compatibility for each requirement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {productGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-yellow-50 p-3 text-red-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-[#071d49]">
                          {group.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.products.map((product) => (
                        <span
                          key={product}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <a
                href="#products-page"
                className="inline-flex items-center gap-2 rounded-lg border border-[#071d49] px-5 py-3 text-sm font-bold text-[#071d49] transition hover:bg-[#071d49] hover:text-white"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Business principles */}
          <section className="bg-white py-12 md:py-16">
            <div className="container-max">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                  Our Priorities
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#071d49] md:text-4xl">
                  What Matters in Every Order
                </h2>
                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Clear product information and dependable order coordination
                  help buyers source the components they need.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: 'Correct Identification',
                    description:
                      'Use part numbers and product descriptions to identify the required component.',
                    icon: ClipboardCheck,
                  },
                  {
                    title: 'Compatibility Details',
                    description:
                      'Confirm vehicle make, model, year, and product variation where applicable.',
                    icon: CheckCircle2,
                  },
                  {
                    title: 'Order Coordination',
                    description:
                      'Discuss quantities, packaging requirements, and delivery arrangements.',
                    icon: Boxes,
                  },
                  {
                    title: 'Buyer Support',
                    description:
                      'Contact ORADO to clarify product details before placing an order.',
                    icon: Handshake,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <Icon className="h-7 w-7 text-red-600" />
                      <h3 className="mt-4 font-extrabold text-[#071d49]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Certifications link */}
          <section className="container-max py-12">
            <div className="flex flex-col gap-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-[#071d49] shadow-sm">
                  <BadgeCheck className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#071d49]">
                    Certificates &amp; Registrations
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-700">
                    Visit the certificates page to view the documents made
                    available by ORADO.
                  </p>
                </div>
              </div>

              <a
                href="#certificates"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#071d49] px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
              >
                View Certificates
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

        </>
      )}

      {activeSection === 'assurance' && (
        <section className="container-max py-10 md:py-14">
          <SectionHeader
            title="Quality Assurance"
            description="A practical approach to product identification, specification review, component condition, and order accuracy."
            onBack={() => setActiveSection('main')}
          />

          <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
            The checks below describe useful quality-control considerations.
            Specific testing methods and acceptance criteria should follow the
            requirements applicable to each product.
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {qualityPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-red-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600">
                      CHECKPOINT 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-extrabold text-[#071d49]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-extrabold text-[#071d49]">
              Product Information Buyers Should Confirm
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
              {[
                'Part number and product description',
                'Vehicle make and model compatibility',
                'Connector, pin, and wire configuration',
                'Order quantity and packaging requirements',
                'Product variation and applicable specifications',
                'Any special buyer inspection requirements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>
      )}

      {activeSection === 'capabilities' && (
        <section className="container-max py-10 md:py-14">
          <SectionHeader
            title="Manufacturing & Product Capabilities"
            description="Explore ORADO's automotive electrical component categories and the applications they serve."
            onBack={() => setActiveSection('main')}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {productGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#071d49] p-3 text-yellow-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-600">
                        PRODUCT GROUP 0{index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-extrabold text-[#071d49]">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-[#071d49] p-7 text-white md:p-9">
            <div className="flex items-start gap-4">
              <Factory className="mt-1 h-8 w-8 shrink-0 text-yellow-400" />
              <div>
                <h3 className="text-xl font-extrabold">
                  Product and Process Information
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
                  Manufacturing methods, production capacity, materials, and
                  available testing facilities vary by product and operation.
                  Contact ORADO to discuss specific requirements and confirm
                  the relevant details before ordering.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Discuss Your Requirements
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </section>
      )}

      {activeSection === 'inspection' && (
        <section className="container-max py-10 md:py-14">
          <SectionHeader
            title="Inspection & Testing"
            description="Understand the types of checks relevant to automotive electrical spare parts and product-order verification."
            onBack={() => setActiveSection('main')}
          />

          <div className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5 text-sm leading-6 text-slate-700">
            The checks below are examples of relevant inspection considerations,
            not a claim that every test is performed on every ORADO product.
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Visual Inspection',
                description:
                  'Review visible condition, component finish, connectors, wiring, and assembly details.',
                icon: Search,
              },
              {
                title: 'Product Identification',
                description:
                  'Check part numbers, product descriptions, and labels against the order.',
                icon: ClipboardCheck,
              },
              {
                title: 'Electrical Continuity',
                description:
                  'Where relevant, continuity checks can help identify open circuits in electrical components.',
                icon: Zap,
              },
              {
                title: 'Specification Review',
                description:
                  'Confirm applicable electrical values and product requirements against the relevant specification.',
                icon: Settings,
              },
              {
                title: 'Connector & Fitment Details',
                description:
                  'Review connector type, pin arrangement, wire configuration, and stated vehicle application.',
                icon: CircuitBoard,
              },
              {
                title: 'Packing & Dispatch Review',
                description:
                  'Confirm ordered items, quantities, and packaging instructions before shipment.',
                icon: Truck,
              },
            ].map((test) => {
              const Icon = test.icon;

              return (
                <article
                  key={test.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#071d49]">
                      {test.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {test.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-extrabold text-[#071d49]">
              Have a Specific Product Requirement?
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Share the part number, vehicle model, connector details, and
              required quantity with ORADO so the relevant product information
              can be discussed.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Contact ORADO
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </section>
      )}
    </main>
  );
}
