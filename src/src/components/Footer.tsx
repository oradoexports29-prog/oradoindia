
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/navigation';
import Logo from '@/components/Logo';

const PHONE = '+91 9878319274';
const EMAIL = companyInfo.email || 'info@oradoindia.com';
const ADDRESS =
  '9-B, Bhai Himmat Singh Nagar, Dugri, Ludhiana, Punjab, India';

const GOOGLE_MAPS_URL = 'https://share.google/wJqadUdMONb3cgljY';

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=9-B%2C%20Bhai%20Himmat%20Singh%20Nagar%2C%20Dugri%2C%20Ludhiana%2C%20Punjab%2C%20India&output=embed';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-page' },
  { label: 'Products', href: '#products-page' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Certificates', href: '#certificates/iso' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071a36] text-white">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {/* Company information */}
          <div>
            <div className="mb-3 inline-block rounded-md bg-white p-2">
              <Logo />
            </div>

            <p className="max-w-xs text-sm leading-6 text-slate-300">
              Indian manufacturer and exporter of two-wheeler and
              three-wheeler electrical spare parts since 1994.
            </p>

            <p className="mt-2 text-sm font-semibold text-yellow-400">
              Quality Parts. Trusted Partnership.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-base font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-3 text-base font-bold">Contact ORADO</h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                <a
                  href="https://wa.me/919878319274"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-400"
                >
                  {PHONE}
                  <span className="mt-1 block text-xs text-slate-400">
                    WhatsApp enquiries
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all hover:text-yellow-400"
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                <span className="leading-5">{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Compact map */}
          <div>
            <h3 className="mb-3 text-base font-bold">Find Us</h3>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open ORADO location in Google Maps"
              className="block overflow-hidden rounded-lg border border-white/20"
            >
              <iframe
                title="ORADO location map"
                src={MAP_EMBED_URL}
                loading="lazy"
                className="pointer-events-none h-[140px] w-full border-0 sm:h-[155px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 hover:text-white"
            >
              View on Google Maps
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-5 py-3 text-center text-xs text-slate-400 sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <p>© {new Date().getFullYear()} ORADO. All rights reserved.</p>
          <p>Established 1994 · Automotive Electrical Spare Parts</p>
        </div>
      </div>
    </footer>
  );
}
