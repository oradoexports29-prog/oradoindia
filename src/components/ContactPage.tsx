
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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitStatus(null);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
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

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-2 focus:ring-red-100';

  const labelClass =
    'mb-2 block text-xs font-bold uppercase tracking-wide text-navy-900';

  const contactCards = [
    {
      title: 'Call ORADO',
      value: companyInfo.whatsappNumber,
      href: `tel:${companyInfo.whatsappNumber.replace(/\s/g, '')}`,
      icon: Phone,
      iconClass: 'bg-blue-50 text-blue-700',
      external: false,
    },
    {
      title: 'WhatsApp',
      value: 'Chat with our team',
      href: companyInfo.whatsappLink,
      icon: MessageCircle,
      iconClass: 'bg-green-50 text-green-700',
      external: true,
    },
    {
      title: 'Business Email',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      icon: Mail,
      iconClass: 'bg-red-50 text-red-700',
      external: false,
    },
    {
      title: 'Our Location',
      value: companyInfo.address,
      href: companyInfo.googleMapsLink,
      icon: MapPin,
      iconClass: 'bg-yellow-50 text-yellow-700',
      external: true,
    },
  ];

  const businessEnquiries = [
    {
      title: 'Domestic Wholesale',
      description:
        'Contact us about product availability, bulk requirements and wholesale quotations.',
      icon: Building2,
    },
    {
      title: 'International Export',
      description:
        'Send us your destination country, required products and export order details.',
      icon: Globe2,
    },
    {
      title: 'Bulk Product Orders',
      description:
        'Share product categories, part numbers and estimated quantities for your enquiry.',
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-14 text-white md:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />

        <div className="container-max relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-medium text-white/60"
          >
            <a href="#home" className="transition hover:text-brand-yellow">
              Home
            </a>
            <span>/</span>
            <span className="font-bold text-white">Contact Us</span>
          </nav>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Wholesale · Domestic Supply · Export Enquiries
          </p>

          <h1 className="mb-5 text-4xl font-extrabold md:text-6xl">
            Contact ORADO
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Contact our team for two-wheeler and three-wheeler electrical
            spare parts, product details, bulk orders and export enquiries.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-bold text-white shadow-lg transition hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ORADO
            </a>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="container-max py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600">
            Choose the contact method that works best for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-brand-red/50 hover:shadow-lg"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.iconClass} transition group-hover:scale-105`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  {card.title}
                </h3>

                <p className="break-words text-sm font-bold leading-6 text-navy-900">
                  {card.value}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-red">
                  Contact
                  <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="contact-form"
        className="scroll-mt-32 bg-gray-50 py-14 md:py-20"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-red">
                Business Enquiries
              </p>

              <h2 className="mb-5 text-3xl font-extrabold text-navy-900 md:text-4xl">
                Tell Us What You Need
              </h2>

              <p className="mb-8 leading-7 text-gray-600">
                Share your product requirements, part numbers, quantities
                and destination country. Our team can review the information
                in your enquiry and respond through the contact details you
                provide.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">
                      Business Contact Details
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Include accurate contact information so ORADO can
                      follow up on your request.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">
                      Clear Product Requirements
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Add the part number, vehicle model, quantity and
                      destination details wherever available.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
                  <p className="text-sm leading-6 text-gray-700">
                    <strong className="text-navy-900">Please note:</strong>{' '}
                    Submit your enquiry using the form below. Your details
                    will be sent directly to ORADO's business email.
                  </p>
                </div>

                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-green-700 transition hover:text-green-800"
                >
                  <MessageCircle className="h-5 w-5" />
                  Prefer WhatsApp? Message ORADO
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8">
              <h3 className="mb-2 text-2xl font-extrabold text-navy-900">
                Send a Product Enquiry
              </h3>
              <p className="mb-7 text-sm leading-6 text-gray-600">
                Fields marked * are required.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
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

                {/* Product Category */}
                <div>
                  <label htmlFor="category" className={labelClass}>
                    Product Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option value="">Select a category</option>

                    <optgroup label="Two-Wheeler Electrical Parts">
                      <option value="Charging Coil (Source)">Charging Coil (Source)</option>
                      <option value="L.T. Coils (Light)">L.T. Coils (Light)</option>
                      <option value="Pick Up Coil">Pick Up Coil</option>
                      <option value="C.D.I. Unit">C.D.I. Unit</option>
                      <option value="A.C. Regulator">A.C. Regulator</option>
                      <option value="Electronic Flasher">Electronic Flasher</option>
                      <option value="Regulator Rectifier">Regulator Rectifier</option>
                      <option value="Rectifier">Rectifier</option>
                      <option value="Coil Plate Assembly">Coil Plate Assembly</option>
                      <option value="H.T. Ignition Coil">H.T. Ignition Coil</option>
                      <option value="Igniters">Igniters</option>
                      <option value="Battery Wire">Battery Wire</option>
                      <option value="Ignition Switch">Ignition Switch</option>
                      <option value="Combination Switch">Combination Switch</option>
                      <option value="Starter Relay">Starter Relay</option>
                      <option value="Head Lamp Bulb">Head Lamp Bulb</option>
                      <option value="Indicator Bulb">Indicator Bulb</option>
                      <option value="Tail & Stop Light Bulb">Tail & Stop Light Bulb</option>
                      <option value="Indicator Festoon">Indicator Festoon</option>
                      <option value="Turn Pilot Indicator Bulb">Turn Pilot Indicator Bulb</option>
                      <option value="Speedo Meter Bulb">Speedo Meter Bulb</option>
                      <option value="Halogen Bulb M-5">Halogen Bulb M-5</option>
                      <option value="Halogen Bulb HS 1">Halogen Bulb HS 1</option>
                      <option value="Carbon Brush Holder Assembly">Carbon Brush Holder Assembly</option>
                      <option value="Carbon Brush for Starter">Carbon Brush for Starter</option>
                      <option value="Plug Cap">Plug Cap</option>
                      <option value="DC Horn">DC Horn</option>
                      <option value="Plug Wire Assembly">Plug Wire Assembly</option>
                      <option value="Front Stop Switch">Front Stop Switch</option>
                      <option value="Rear Stop Switch">Rear Stop Switch</option>
                      <option value="Fuse Wire">Fuse Wire</option>
                    </optgroup>

                    <optgroup label="Three-Wheeler Electrical Parts">
                      <option value="3W Charging Coil (Source)">Charging Coil (Source)</option>
                      <option value="3W Pick Up Coil">Pick Up Coil</option>
                      <option value="3W Light Coil">Light Coil</option>
                      <option value="3W C.D.I. Unit">C.D.I. Unit</option>
                      <option value="3W Electronic Flasher">Electronic Flasher</option>
                      <option value="3W Regulator Rectifier">Regulator Rectifier (RR Unit)</option>
                      <option value="3W Coil Plate Assembly">Coil Plate Assembly (Stator)</option>
                      <option value="3W HT Ignition Coil">HT Coil (Ignition Coil)</option>
                      <option value="3W DC Horn">Horn DC</option>
                      <option value="3W Starter Relay">Starter Relay</option>
                      <option value="Change Over Relay">Change Over Relay</option>
                      <option value="Head Lamp Relay">Head Lamp Relay</option>
                    </optgroup>

                    <optgroup label="Lubrication & Hand Tools">
                      <option value="Engine Lubricants">Engine Lubricants</option>
                      <option value="Gear & Transmission Lubricants">Gear & Transmission Lubricants</option>
                      <option value="Grease & Bearing Lubricants">Grease & Bearing Lubricants</option>
                      <option value="Chain Care & Maintenance">Chain Care & Maintenance</option>
                      <option value="Combination Spanners">Combination Spanners</option>
                      <option value="Socket & Ratchet Sets">Socket & Ratchet Sets</option>
                      <option value="Screwdrivers & Pliers">Screwdrivers & Pliers</option>
                      <option value="Workshop Hand Tool Sets">Workshop Hand Tool Sets</option>
                    </optgroup>

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
                    rows={5}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us the part number, vehicle model, quantity, destination country or other requirements..."
                    required
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3.5 font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <p
                      role="status"
                      className="mt-3 flex items-start gap-2 text-sm leading-6 text-green-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      Thank you! Your enquiry has been sent successfully to ORADO.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p
                      role="alert"
                      className="mt-3 text-sm leading-6 text-red-600"
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

      {/* Business enquiry cards */}
      <section className="container-max py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-red">
            How We Can Help
          </p>
          <h2 className="text-3xl font-extrabold text-navy-900">
            Business Enquiries
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Contact ORADO to discuss your automotive electrical spare-parts
            requirements, wholesale orders and export enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {businessEnquiries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-red/40 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-navy-900">
                  {item.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-green-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>

                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:underline"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="container-max grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-red">
              Find ORADO
            </p>
            <h2 className="mb-5 text-3xl font-extrabold text-navy-900">
              Our Location
            </h2>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                <MapPin className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-bold text-navy-900">
                  Business Address
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {companyInfo.address}
                </p>

                <a
                  href={companyInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-brand-red hover:underline"
                >
                  Open Location
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
              <Building2 className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-navy-900">ORADO</h3>

            <p className="mt-2 leading-7 text-gray-600">
              {companyInfo.tagline}. Established {companyInfo.established}.
            </p>

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
              <a
                href={`tel:${companyInfo.whatsappNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm font-medium text-navy-900 hover:text-brand-red"
              >
                <Phone className="h-4 w-4 text-brand-red" />
                {companyInfo.whatsappNumber}
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 break-all text-sm font-medium text-navy-900 hover:text-brand-red"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-red" />
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
