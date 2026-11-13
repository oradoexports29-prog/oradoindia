import { companyInfo } from '@/data/navigation';
import { Mail, Clock, MessageCircle } from 'lucide-react';

export default function TopInformationBar() {
  return (
    <div className="bg-navy-900 text-white text-xs hidden md:block">
      <div className="container-max flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white/90">
            <FactoryIcon className="h-3.5 w-3.5 text-brand-yellow" />
            {companyInfo.tagline}
          </span>
          <span className="flex items-center gap-1.5 text-white/90 border-l border-white/20 pl-5">
            <Clock className="h-3.5 w-3.5 text-brand-yellow" />
            Established {companyInfo.established}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-brand-yellow transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 text-brand-yellow" />
            WhatsApp: {companyInfo.whatsappNumber}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-white/90 hover:text-brand-yellow transition-colors border-l border-white/20 pl-5"
          >
            <Mail className="h-3.5 w-3.5 text-brand-yellow" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}
