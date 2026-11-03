import { FileText, Mail, MessageCircle, Phone } from 'lucide-react';
import { companyInfo } from '@/data/navigation';

const emailHref = `mailto:${companyInfo.email}?subject=${encodeURIComponent('Product Inquiry — ORADO')}`;

const actions = [
  { label: 'Chat on WhatsApp', href: companyInfo.whatsappLink, icon: MessageCircle, className: 'bg-green-500 hover:bg-green-600' },
  { label: 'Email ORADO', href: emailHref, icon: Mail, className: 'bg-navy-800 hover:bg-navy-700' },
  { label: 'Call ORADO', href: 'tel:+919878319274', icon: Phone, className: 'bg-brand-yellow text-navy-900 hover:bg-brand-yellow/90' },
  { label: 'Request a Quote', href: '#contact', icon: FileText, className: 'bg-brand-red hover:bg-brand-red-dark' },
];

export default function FloatingContactToolbar() {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          #root {
            padding-bottom: calc(3.75rem + env(safe-area-inset-bottom));
          }

          html {
            scroll-padding-bottom: calc(3.75rem + env(safe-area-inset-bottom));
          }
        }
      `}</style>
      <nav
        aria-label="Contact shortcuts"
        className="fixed inset-x-0 bottom-0 z-40 flex flex-row justify-center gap-2 border-t border-gray-200 bg-white/95 px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)_+_0.5rem)] shadow-lg backdrop-blur sm:inset-x-auto sm:right-5 sm:bottom-5 sm:flex-col sm:gap-2.5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
      >
        {actions.map(({ label, href, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 sm:h-12 sm:w-12 ${className}`}
          >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-navy-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
              {label}
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-navy-900" />
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}
