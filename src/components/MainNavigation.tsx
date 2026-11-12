
import { useState, useRef, useEffect } from 'react';
import { navConfig } from '@/data/navigation';
import type { NavItem } from '@/data/navigation';
import { ChevronDown, FileText } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import ProductsMegaMenu from './ProductsMegaMenu';
import Logo from './Logo';
import CertificationShowcase from './CertificationShowcase';

export default function MainNavigation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  // Add Catalogue after Products if it is not already configured.
  // Make About Us and Quality & Manufacturing direct links.
  const displayNavConfig: NavItem[] = (
    navConfig.some(
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
        )
  ).map((item) => {
    const label = item.label.trim().toLowerCase();

    if (
      label === 'about us' ||
      label === 'quality & manufacturing'
    ) {
      return { ...item, hasDropdown: false };
    }

    return item;
  });

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleEnter = (index: number) => {
    clearTimer();

    if (displayNavConfig[index].hasDropdown) {
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };

  const handleLeave = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpenIndex(null), 200);
  };

  const handleClick = (
    e: React.MouseEvent,
    index: number,
    item: NavItem
  ) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenIndex(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const activeItem =
    openIndex !== null ? displayNavConfig[openIndex] : null;

  const isMegaOpen = activeItem?.dropdownType === 'mega';

  return (
    <div
      ref={navRef}
      className="bg-white border-b-2 border-navy-900 z-40 shadow-md"
    >
      {/* Top row: Logo, certification showcase and quote button */}
      <div className="container-max">
        <div className="flex items-center justify-between h-[80px] gap-4">
          <div className="shrink-0">
            <Logo />
          </div>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <CertificationShowcase />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide px-5 py-2.5 rounded-md hover:bg-brand-red-dark transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <FileText className="h-4 w-4" />
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main navy navigation bar */}
      <div className="bg-navy-900 relative">
        <div className="container-max">
          <nav
            className="hidden lg:flex items-stretch"
            aria-label="Main navigation"
          >
            <ul className="flex items-stretch">
              {displayNavConfig.map((item, index) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={handleLeave}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, index, item)}
                    onKeyDown={(e) => {
                      if (
                        item.hasDropdown &&
                        (e.key === 'Enter' || e.key === ' ')
                      ) {
                        e.preventDefault();
                        setOpenIndex(
                          openIndex === index ? null : index
                        );
                      }
                    }}
                    className={`flex items-center gap-1.5 px-5 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors relative ${
                      openIndex === index
                        ? 'text-brand-yellow'
                        : 'text-white hover:text-brand-yellow'
                    }`}
                    aria-expanded={
                      item.hasDropdown
                        ? openIndex === index
                        : undefined
                    }
                    aria-haspopup={
                      item.hasDropdown ? 'true' : undefined
                    }
                    role={item.hasDropdown ? 'button' : undefined}
                    tabIndex={0}
                  >
                    {item.label}

                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}

                    <span
                      className={`absolute bottom-0 left-5 right-5 h-0.5 bg-brand-yellow rounded-full transition-opacity duration-200 ${
                        openIndex === index
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                  </a>

                  {item.hasDropdown &&
                    item.dropdownType !== 'mega' &&
                    openIndex === index && (
                      <DropdownMenu
                        subItems={item.subItems!}
                        onClose={() => setOpenIndex(null)}
                      />
                    )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Products mega menu */}
        {isMegaOpen && activeItem && (
          <div
            ref={megaRef}
            onMouseEnter={clearTimer}
            onMouseLeave={handleLeave}
          >
            <ProductsMegaMenu
              subItems={activeItem.subItems!}
              onClose={() => setOpenIndex(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
