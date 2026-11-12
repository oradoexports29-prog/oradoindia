import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Send,
  ShieldCheck,
  Building2,
  Package,
  Globe2,
  ClipboardList,
  CheckCircle2,
  Clock3,
  Headphones,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { companyInfo } from '@/data/navigation';

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  enquiryType: string;
  category: string;
  quantity: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  enquiryType: 'Product Enquiry',
  category: '',
  quantity: '',
  message: '',
};

const enquiryTypes = [
  'Product Enquiry',
  'Wholesale Order',
  'Export Enquiry',
  'Other',
];

const productCategoryGroups = [
  {
    label: 'Two-Wheeler Electrical Parts',
    options: [
      ['Charging Coil (Source)', 'Charging Coil (Source)'],
      ['L.T. Coils (Light)', 'L.T. Coils (Light)'],
      ['Pick Up Coil', 'Pick Up Coil'],
      ['C.D.I. Unit', 'C.D.I. Unit'],
      ['A.C. Regulator', 'A.C. Regulator'],
      ['Electronic Flasher', 'Electronic Flasher'],
      ['Regulator Rectifier', 'Regulator Rectifier'],
      ['Rectifier', 'Rectifier'],
      ['Coil Plate Assembly', 'Coil Plate Assembly'],
      ['H.T. Ignition Coil', 'H.T. Ignition Coil'],
      ['Igniters', 'Igniters'],
      ['Battery Wire', 'Battery Wire'],
      ['Ignition Switch', 'Ignition Switch'],
      ['Combination Switch', 'Combination Switch'],
      ['Starter Relay', 'Starter Relay'],
      ['Head Lamp Bulb', 'Head Lamp Bulb'],
      ['Indicator Bulb', 'Indicator Bulb'],
      ['Tail & Stop Light Bulb', 'Tail & Stop Light Bulb'],
      ['Indicator Festoon', 'Indicator Festoon'],
      ['Turn Pilot Indicator Bulb', 'Turn Pilot Indicator Bulb'],
      ['Speedo Meter Bulb', 'Speedo Meter Bulb'],
      ['Halogen Bulb M-5', 'Halogen Bulb M-5'],
      ['Halogen Bulb HS 1', 'Halogen Bulb HS 1'],
      ['Carbon Brush Holder Assembly', 'Carbon Brush Holder Assembly'],
      ['Carbon Brush for Starter', 'Carbon Brush for Starter'],
      ['Plug Cap', 'Plug Cap'],
      ['DC Horn', 'DC Horn'],
      ['Plug Wire Assembly', 'Plug Wire Assembly'],
      ['Front Stop Switch', 'Front Stop Switch'],
      ['Rear Stop Switch', 'Rear Stop Switch'],
      ['Fuse Wire', 'Fuse Wire'],
    ],
  },
  {
    label: 'Three-Wheeler Electrical Parts',
    options: [
      ['3W Charging Coil (Source)', 'Charging Coil (Source)'],
      ['3W Pick Up Coil', 'Pick Up Coil'],
      ['3W Light Coil', 'Light Coil'],
      ['3W C.D.I. Unit', 'C.D.I. Unit'],
      ['3W Electronic Flasher', 'Electronic Flasher'],
      ['3W Regulator Rectifier', 'Regulator Rectifier (RR Unit)'],
      ['3W Coil Plate Assembly', 'Coil Plate Assembly (Stator)'],
      ['3W HT Ignition Coil', 'HT Coil (Ignition Coil)'],
      ['3W DC Horn', 'Horn DC'],
      ['3W Starter Relay', 'Starter Relay'],
      ['Change Over Relay', 'Change Over Relay'],
      ['Head Lamp Relay', 'Head Lamp Relay'],
    ],
  },
  {
    label: 'Lubrication & Hand Tools',
    options: [
      ['Engine Lubricants', 'Engine Lubricants'],
      ['Gear & Transmission Lubricants', 'Gear & Transmission Lubricants'],
      ['Grease & Bearing Lubricants', 'Grease & Bearing Lubricants'],
      ['Chain Care & Maintenance', 'Chain Care & Maintenance'],
      ['Combination Spanners', 'Combination Spanners'],
      ['Socket & Ratchet Sets', 'Socket & Ratchet Sets'],
      ['Screwdrivers & Pliers', 'Screwdrivers & Pliers'],
      ['Workshop Hand Tool Sets', 'Workshop Hand Tool Sets'],
    ],
  },
];

const inputClass =
  'w-full rounded-none border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10';

const labelClass =
  'mb-2 block text-[11px] font-extrabold uppercase tracking-[0.13em] text-navy-900';

export default function ContactPage() {
  // Always open the Contact Us form with an empty product category and message.
  // Product details are added only after the visitor chooses a category here.
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setSubmitStatus(null);
  };

  // Fill the message ONLY when the visitor changes the Product Category.
  // On initial page load both category and message remain blank.
  const handleCategoryChange = (categoryValue: string) => {
    const categoryLabel = categoryValue || '';

    setFormData((previous) => ({
      ...previous,
      category: categoryValue,
      message: categoryValue
        ? `Hello ORADO, I am interested in your ${categoryLabel} products. Please share the available part numbers, vehicle compatibility, pricing and quotation.`
        : '',
    }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          name: formData.fullName,
          company_name: formData.companyName || 'Not provided',
          from_email: formData.email,
          email: formData.email,
          phone: formData.phone,
          country: formData.country || 'Not provided',
          enquiry_type: formData.enquiryType,
          product_category: formData.category || 'Not specified',
          quantity: formData.quantity || 'Not specified',
          message: formData.message,
        },
        { publicKey }
      );

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('ORADO EmailJS submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: 'Call ORADO',
      value: companyInfo.whatsappNumber,
      detail: 'Speak with our team',
      href: `tel:${companyInfo.whatsappNumber.replace(/\s/g, '')}`,
      icon: Phone,
      accent: 'text-blue-700 bg-blue-50',
      external: false,
    },
    {
      title: 'WhatsApp',
      value: 'Chat with our team',
      detail: 'Quick product discussions',
      href: companyInfo.whatsappLink,
      icon: MessageCircle,
      accent: 'text-green-700 bg-green-50',
      external: true,
    },
    {
      title: 'Business Email',
      value: companyInfo.email,
      detail: 'Send your requirements',
      href: `mailto:${companyInfo.email}`,
      icon: Mail,
      accent: 'text-red-700 bg-red-50',
      external: false,
    },
    {
      title: 'Our Location',
      value: companyInfo.address,
      detail: 'View business location',
      href: companyInfo.googleMapsLink,
      icon: MapPin,
      accent: 'text-yellow-700 bg-yellow-50',
      external: true,
    },
  ];

  const businessEnquiries = [
    {
      title: 'Domestic Wholesale',
      description:
        'Contact us about product availability, bulk requirements and wholesale quotations.',
      icon: Building2,
      number: '01',
    },
    {
      title: 'International Export',
      description:
        'Send us your destination country, required products and export order details.',
      icon: Globe2,
      number: '02',
    },
    {
      title: 'Bulk Product Orders',
      description:
        'Share product categories, part numbers and estimated quantities for your enquiry.',
      icon: Package,
      number: '03',
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-navy-900">
      {/* Contact hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[50px] border-white/10" />
          <div className="absolute -bottom-48 right-[22%] h-[28rem] w-[28rem] rounded-full border-[1px] border-brand-yellow/40" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_48%,rgba(255,255,255,0.05)_48.2%,transparent_48.5%)]" />
        </div>

        <div className="container-max relative py-16 md:py-24 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs font-semibold text-white/55"
          >
            <a href="#home" className="transition hover:text-brand-yellow">
              Home
            </a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow">
                <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                Wholesale · Domestic Supply · Export
              </div>

              <h1 className="font-display text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                Let’s talk
                <br />
                <span className="text-brand-yellow">business.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Contact ORADO for two-wheeler and three-wheeler electrical
                spare parts, product details, bulk orders and export enquiries.
                Tell us what you need and our team will help you take the next
                step.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-3 bg-brand-red px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-brand-red-dark"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-white hover:text-navy-900"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ORADO
                </a>
              </div>
            </div>

            <div className="hidden border-l border-white/15 pl-8 lg:block">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow">
                ORADO · Since 1994
              </div>
              <p className="mt-4 text-2xl font-extrabold leading-snug">
                Product enquiries.
                <br />
                Wholesale requirements.
                <br />
                Export opportunities.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-white/55">
                <ShieldCheck className="h-5 w-5 text-brand-yellow" />
                Direct business communication
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-brand-yellow" />
      </section>

      {/* Contact methods */}
      <section className="bg-[#f5f7fa] py-14 md:py-20">
        <div className="container-max">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-red">
                Reach our team
              </p>
              <h2 className="font-display text-3xl font-black text-navy-900 md:text-4xl">
                Get in touch with ORADO
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-600">
              Choose the contact method that works best for your business and
              enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[210px] flex-col border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl md:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center ${card.accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-gray-300">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.17em] text-gray-500">
                      {card.title}
                    </h3>
                    <p className="mt-2 break-words text-sm font-extrabold leading-6 text-navy-900">
                      {card.value}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand-red">
                      {card.detail}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="contact-form"
        className="scroll-mt-28 bg-white py-16 md:py-24"
      >
        <div className="container-max">
          <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-red">
                Start an enquiry
              </p>
              <h2 className="font-display text-4xl font-black leading-tight text-navy-900 md:text-5xl">
                Tell us what
                <br />
                you’re looking for.
              </h2>
              <p className="mt-6 leading-7 text-gray-600">
                Share your product requirements, part numbers, quantities and
                destination country. Our team can review your enquiry and
                respond through the contact details you provide.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-900">
                      Business contact details
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Include accurate contact information so ORADO can follow
                      up on your request.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-red text-white">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-900">
                      Clear product requirements
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Add the part number, vehicle model, quantity and
                      destination details wherever available.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-yellow text-navy-900">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-900">
                      Direct follow-up
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Your submitted details are sent to ORADO through the
                      existing enquiry email workflow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-l-4 border-brand-yellow bg-[#f5f7fa] p-5">
                <p className="text-sm leading-6 text-gray-700">
                  <strong className="text-navy-900">Please note:</strong>{' '}
                  Complete the form and select Send Enquiry. Your message will
                  not be sent until you submit it.
                </p>
              </div>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-green-700 transition hover:text-green-800"
              >
                <MessageCircle className="h-5 w-5" />
                Prefer WhatsApp? Message ORADO
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Form panel */}
            <div className="border border-gray-200 bg-[#f8f9fb] shadow-[0_20px_55px_rgba(10,25,55,0.08)]">
              <div className="border-b border-gray-200 bg-navy-900 px-6 py-7 text-white sm:px-9">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow">
                      ORADO business enquiry
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      Send a product enquiry
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      Fields marked * are required.
                    </p>
                  </div>
                  <div className="hidden h-14 w-14 items-center justify-center border border-white/20 bg-white/5 sm:flex">
                    <Send className="h-6 w-6 text-brand-yellow" />
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-5 gap-y-5 p-6 sm:grid-cols-2 sm:p-9"
              >
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className={labelClass}>
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    autoComplete="organization"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Business Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="+91 ..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="e.g. India"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className={labelClass}>
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className={labelClass}>
                    Product Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(event) => handleCategoryChange(event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a category</option>
                    {productCategoryGroups.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Other Products">Other Products</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className={labelClass}>
                    Estimated Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="e.g. 500 pieces"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message / Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us the part number, vehicle model, quantity, destination country or other requirements..."
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-3 bg-brand-red px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-md transition hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <p
                      role="status"
                      className="mt-4 flex items-start gap-2 border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      Thank you! Your enquiry has been sent successfully to
                      ORADO.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p
                      role="alert"
                      className="mt-4 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                    >
                      Sorry, your enquiry could not be sent. Please try again
                      or contact ORADO through WhatsApp.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business enquiry types */}
      <section className="bg-[#f5f7fa] py-16 md:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-red">
              How we can help
            </p>
            <h2 className="font-display text-3xl font-black text-navy-900 md:text-4xl">
              Business enquiries
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Contact ORADO to discuss your automotive electrical spare-parts
              requirements, wholesale orders and export enquiries.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {businessEnquiries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-navy-900 text-white transition group-hover:bg-brand-red">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-gray-300">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-black text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-5 border-t border-gray-100 pt-5">
                    <a
                      href={companyInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-green-700 hover:text-green-800"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-red hover:underline"
                    >
                      Enquire <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and company details */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-max grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center border border-gray-200 p-7 md:p-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-red">
              Find ORADO
            </p>
            <h2 className="font-display text-3xl font-black text-navy-900 md:text-4xl">
              Visit our location
            </h2>
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy-900 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-navy-900">
                  Business Address
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {companyInfo.address}
                </p>
                <a
                  href={companyInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand-red hover:underline"
                >
                  Open location <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-navy-950 p-7 text-white md:p-10">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-navy-900">
                <Building2 className="h-6 w-6" />
              </div>
              <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow">
                Business information
              </p>
              <h3 className="mt-2 text-3xl font-black">ORADO</h3>
              <p className="mt-3 max-w-md leading-7 text-white/65">
                {companyInfo.tagline}. Established {companyInfo.established}.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                <a
                  href={`tel:${companyInfo.whatsappNumber.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm font-semibold text-white transition hover:text-brand-yellow"
                >
                  <Phone className="h-4 w-4 text-brand-yellow" />
                  {companyInfo.whatsappNumber}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 break-all text-sm font-semibold text-white transition hover:text-brand-yellow"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final contact strip */}
      <section className="bg-brand-yellow py-10 md:py-12">
        <div className="container-max flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-900/60">
              ORADO · Established 1994
            </p>
            <h2 className="mt-2 font-display text-2xl font-black text-navy-950 md:text-3xl">
              Have a product requirement? Let’s discuss it.
            </h2>
          </div>
          <a
            href="#contact-form"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-navy-900 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-brand-red"
          >
            Send an enquiry <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
