
import { useEffect, useRef, useState } from 'react';
import {
  navConfig,
  NavItem,
  NavSubItem,
  productMenuGroups,
  companyInfo,
} from '@/data/navigation';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';
import CertificationShowcase from './CertificationShowcase';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set()
  );

  // Add Catalogue after Products if it is not already configured.
  const displayNavConfig: NavItem[] = navConfig.some(
    (item) => item.label.toLowerCase() === 'catalogue'
  )
    ? navConfig
    : navConfig.flatMap((item) =>
        item.label.toLowerCase() === 'products'
          ? [
              item,
              {
                label: 'Catalogue',
                href: '#catalogue',
                hasDropdown: false,
              } as NavItem,
            ]
          : [item]
      );

  const toggleItem = (path: string) => {
    setExpandedItems((current) => {
      const next = new Set(current);

      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }

      return next;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItems(new Set());
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const renderSubItems = (
    items: NavSubItem[],
    parentPath: string,
    level = 0
  ) => (
    <ul
      className={`border-t border-gray-100 bg-gray-50 animate-slide-down ${
        level > 0 ? 'bg-white' : ''
      }`}
    >
      {items.map((item) => {
        const path = `${parentPath}/${item.label}`;
        const hasChildren = Boolean(item.children?.length);
        const isExpanded = expandedItems.has(path);

        return (
          <li
            key={path}
            className="border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-center">
              <a
                href={item.href}
                onClick={(event) => {
                  if (hasChildren) {
                    event.preventDefault();
                    toggleItem(path);
                  } else {
                    closeMenu();
                  }
                }}
                className={`flex-1 py-3 text-[13px] text-navy-700 transition-colors hover:text-brand-red ${
                  level === 0 ? 'pl-8 pr-2' : 'pl-12 pr-2'
                }`}
              >
                {item.label}
              </a>

              {hasChildren && (
                <button
                  type="button"
                  onClick={() => toggleItem(path)}
                  className="p-3 text-navy-600 transition-colors hover:text-brand-red"
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={isExpanded}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              )}
            </div>

            {hasChildren &&
              isExpanded &&
              renderSubItems(item.children!, path, level + 1)}
          </li>
        );
      })}
    </ul>
  );

  const renderProductGroups = () => (
    <div className="border-t border-gray-100 bg-gray-50 animate-slide-down">
      {productMenuGroups.map((group) => (
        <section
          key={group.title}
          className="border-b border-gray-200 last:border-b-0"
        >
          <div className="px-4 py-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wide text-navy-900">
              {group.title}
            </h3>

            <div className="mt-2 grid grid-cols-2 gap-x-2">
              {group.categories.map((item) => (
                <a
                  key={item.label}
                  href={group.viewAllHref}
                  onClick={closeMenu}
                  className="flex items-start gap-1.5 px-1 py-2 text-[12px] font-medium leading-snug text-navy-800 hover:text-brand-red"
                >
                  <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-gray-300" />
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={group.viewAllHref}
              onClick={closeMenu}
              className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wide text-brand-red"
            >
              View All {group.title}
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile logo, action buttons and compact certificates */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="ORADO Home"
          >
            <img
              src="/logo.png"
              alt="ORADO"
              className="h-10 w-auto max-w-[170px] object-contain"
            />
          </a>

          <div className="flex items-center gap-2">
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-green-600"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-navy-900"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-white px-2 py-2">
          <CertificationShowcase mobile />
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-navy-900/60 animate-fade-in lg:hidden"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <div
            className="fixed inset-y-0 right-0 z-[70] h-dvh w-[85vw] max-w-sm animate-slide-in-right overflow-y-auto overscroll-contain bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-gray-200 bg-navy-900 p-4">
              <img
                src="/logo.png"
                alt="ORADO"
                className="h-10 w-auto max-w-[170px] rounded bg-white px-2 object-contain"
              />

              <button
                type="button"
                onClick={closeMenu}
                className="p-1.5 text-white transition-colors hover:text-brand-yellow"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Company information */}
            <div className="space-y-2 border-b border-gray-200 bg-navy-50 px-4 py-3">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-navy-800"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                {companyInfo.whatsappNumber}
              </a>

              <p className="flex items-center gap-2 text-xs text-gray-500">
                <Phone className="h-3.5 w-3.5 text-brand-yellow" />
                Established {companyInfo.established} · {companyInfo.tagline}
              </p>
            </div>

            {/* Navigation links */}
            <nav aria-label="Mobile navigation">
              <ul className="py-2">
                {displayNavConfig.map((item) => {
                  const path = item.label;
                  
                  // Respect hasDropdown=false, even if subItems
                  // still exist in the navigation configuration.
                  const isCertificates =
                    item.label.trim().toLowerCase() === 'certificates';

                  const hasChildren =
                    !isCertificates &&
                    item.hasDropdown !== false &&
                    Boolean(item.subItems?.length);

                  const isExpanded = expandedItems.has(path);

                  return (
                    <li
                      key={item.label}
                      className="border-b border-gray-100"
                    >
                      <div className="flex items-center">
                        <a
                          href={item.href}
                          onClick={(event) => {
                            if (hasChildren) {
                              event.preventDefault();
                              toggleItem(path);
                            } else {
                              closeMenu();
                            }
                          }}
                          className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wide text-navy-800 transition-colors hover:text-brand-red"
                        >
                          {item.label}
                        </a>

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleItem(path)}
                            className="p-3 text-navy-600 transition-colors hover:text-brand-red"
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isExpanded}
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasChildren &&
                        isExpanded &&
                        item.dropdownType !== 'mega' &&
                        renderSubItems(item.subItems!, path)}

                      {hasChildren &&
                        item.dropdownType === 'mega' &&
                        isExpanded &&
                        renderProductGroups()}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact buttons */}
            <div className="space-y-3 p-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
              </a>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
