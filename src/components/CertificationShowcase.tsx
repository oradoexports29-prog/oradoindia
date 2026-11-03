
import { ShieldCheck, Award, FileCheck } from 'lucide-react';

interface Certificate {
  id: 'iso' | 'msme' | 'zed';
  label: string;
  description: string;
  icon: typeof ShieldCheck;
}

interface CertificationShowcaseProps {
  mobile?: boolean;
}

const certificates: Certificate[] = [
  {
    id: 'iso',
    label: 'ISO Certification',
    description: 'International Standard Organization',
    icon: ShieldCheck,
  },
  {
    id: 'msme',
    label: 'MSME Registration',
    description: 'Udyam Registration',
    icon: FileCheck,
  },
  {
    id: 'zed',
    label: 'ZED Certification',
    description: 'Zero Defect Zero Effect',
    icon: Award,
  },
];

export default function CertificationShowcase({
  mobile = false,
}: CertificationShowcaseProps) {
  return (
    <div
      aria-label="ORADO certifications"
      className={
        mobile
          ? 'grid w-full min-w-0 grid-cols-3 items-stretch gap-1.5'
          : 'flex items-center justify-center gap-3'
      }
    >
      {certificates.map((cert) => {
        const Icon = cert.icon;

        return (
          <a
            key={cert.id}
            href={`#certificates/${cert.id}`}
            aria-label={`View ${cert.label} on the Certificates page`}
            title={`View ${cert.label}`}
            className={`group flex min-w-0 items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 transition-colors hover:border-brand-red/40 hover:bg-brand-red/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
              mobile
                ? 'flex-col justify-center gap-1 px-1 py-2 text-center'
                : ''
            }`}
          >
            <span
              className={`flex shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-700 transition-colors group-hover:bg-brand-red/10 group-hover:text-brand-red ${
                mobile ? 'h-6 w-6' : 'h-8 w-8'
              }`}
            >
              <Icon
                className={mobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}
                aria-hidden="true"
              />
            </span>

            <span
              className={
                mobile
                  ? 'w-full min-w-0 text-center'
                  : 'whitespace-nowrap text-left'
              }
            >
              <span
                className={`block font-bold uppercase text-navy-900 ${
                  mobile
                    ? 'break-words text-[8px] leading-tight tracking-tight'
                    : 'whitespace-nowrap text-[11px] tracking-wide'
                }`}
              >
                {cert.label}
              </span>

              <span
                className={`mt-0.5 block font-medium text-gray-500 ${
                  mobile ? 'text-[7px] leading-tight' : 'text-[9px]'
                }`}
              >
                {cert.description}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
