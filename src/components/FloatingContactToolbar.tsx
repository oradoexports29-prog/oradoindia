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
    <nav aria-label="Contact shortcuts" className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-2.5">
      {actions.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 sm:h-12 sm:w-12 ${className}`}
        >
          <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-navy-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {label}
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-navy-900" />
          </span>
        </a>
      ))}
    </nav>
  );
}
