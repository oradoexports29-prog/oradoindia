import { useState } from 'react';
import type { NavSubItem } from '@/data/navigation';

interface DropdownMenuProps {
  subItems: NavSubItem[];
  onClose: () => void;
}

export default function DropdownMenu({
  subItems,
  onClose,
}: DropdownMenuProps) {
  const [openChild, setOpenChild] = useState<string | null>(null);

  const qualityLabels = [
    'Quality Assurance',
    'Manufacturing Capabilities',
    'Inspection & Testing',
  ];

  const isQualityMenu = subItems.some((item) =>
    qualityLabels.includes(item.label)
  );

  const visibleItems = isQualityMenu
    ? subItems.filter(
        (item) =>
          item.label === 'Quality Assurance' ||
          item.label === 'Manufacturing Capabilities'
      )
    : subItems;

  return (
    <div className="absolute left-0 top-full z-50 min-w-[300px] rounded-lg border border-gray-200 border-t-2 border-t-brand-red bg-white py-2 shadow-2xl">
      {visibleItems.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openChild === item.label;

        return (
          <div key={item.label} className="relative">
            <div className="flex items-start gap-2 px-4 py-3 hover:bg-gray-50">
              <a
                href={item.href}
                className="min-w-0 flex-1"
                onClick={(event) => {
                  if (hasChildren) {
                    event.preventDefault();
                    setOpenChild(isOpen ? null : item.label);
                  } else {
                    onClose();
                  }
                }}
              >
                <span className="block text-sm font-semibold text-navy-900">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs text-gray-500">
                    {item.description}
                  </span>
                )}
              </a>

              {hasChildren && (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={'Toggle ' + item.label}
                  onClick={() => setOpenChild(isOpen ? null : item.label)}
                  className="px-2 text-gray-500"
                >
                  {isOpen ? '−' : '+'}
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <div className="border-t border-gray-100 bg-gray-50 py-1">
                {item.children?.map((child) => {
                  const familySlug = item.label.toLowerCase().replace(/ /g, '-');
                  const catSlug = child.label
                    .toLowerCase()
                    .replace(/[^a-z0-9 ]/g, '')
                    .replace(/\s+/g, '-');

                  return (
                    <a
                      key={child.label}
                      href={'#category/' + familySlug + '-' + catSlug}
                      onClick={onClose}
                      className="block px-5 py-2 text-sm text-navy-800 hover:bg-gray-100 hover:text-brand-red"
                    >
                      {child.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}