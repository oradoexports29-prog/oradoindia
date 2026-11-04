
import {
  twoWheelerImages,
  threeWheelerImages,
  lubricationHandToolImages,
} from '@/data/productImages';

export interface CategoryData {
  slug: string;
  title: string;
  family: '2 Wheeler Parts' | '3 Wheeler Parts' | 'Lubrication & Hand Tools';
  description: string;
  image: string;
}

// Use the same slug format for both family names and category names.
const slugify = (text: string) =>
  text.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');

const normalizeLegacySlug = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');

const legacyCategoryAliases: Record<string, string> = {
  'charging-coil': '2-wheeler-parts-charging-coil-source',
  'charging-coil-source': '2-wheeler-parts-charging-coil-source',
  'lt-coil': '2-wheeler-parts-lt-coils-light',
  'lt-coils': '2-wheeler-parts-lt-coils-light',
  'lt-coils-light': '2-wheeler-parts-lt-coils-light',
  'pickup-coil': '2-wheeler-parts-pick-up-coil-pulsar',
  'pick-up-coil': '2-wheeler-parts-pick-up-coil-pulsar',
  'pick-up-coil-pulsar': '2-wheeler-parts-pick-up-coil-pulsar',
  'cdi-unit': '2-wheeler-parts-cdi-unit',
  cdi: '2-wheeler-parts-cdi-unit',
};

export const categoryRegistry: Record<string, CategoryData> = {};

const buildRegistry = () => {
  const families = [
    {
      name: '2 Wheeler Parts' as const,
      categories: [
        'Charging Coil (Source)', 'L.T. Coils (Light)', 'Pick Up Coil (Pulsar)', 'C.D.I. Unit',
        'A.C. Regulator', 'Electronic Flasher', 'Regulator Rectifier', 'Rectifier',
        'Coil Plate Assembly', 'H.T. Coils', 'Igniters', 'Battery Wire',
        'Ignition Switch Cum Steering Lock / Ignition Switch', 'Combination Switch (LH Only)',
        'Self Relay', 'Head Lamp Bulb', 'Indicator Bulb', 'Tail & Stop Light Bulb',
        'Indicator Festoon', 'Turn Pilot Indicator Bulb', 'Speedo Meter Bulb',
        'Halogen Bulb M-5', 'Halogen Bulb HS 1', 'Carbon Brush Holder Assly. for Starter',
        'Carbon Brush for Starter', 'Plug Cap', 'DC Horn', 'Plug Wire Assembly',
        'Front Stop Switch', 'Rear Stop Switch', 'Fuse Wire',
      ],
      imageSource: twoWheelerImages,
    },
    {
      name: '3 Wheeler Parts' as const,
      categories: [
        'Charging Coil (Source)', 'Pick Up Coil (Pulsar)', 'Light Coil', 'C.D.I. Unit',
        'Electronic Flasher', 'Regulator Rectifier (RR Unit)', 'Coil Plate Assembly (Stator)',
        'HT Coil (Ignition Coil)', 'Horn DC', 'Starter Relay', 'Change Over Relay', 'Head Lamp Relay',
      ],
      imageSource: threeWheelerImages,
    },
    {
      name: 'Lubrication & Hand Tools' as const,
      categories: [
        'Engine Lubricants', 'Gear & Transmission Lubricants', 'Grease & Bearing Lubricants',
        'Chain Care & Maintenance', 'Combination Spanners', 'Socket & Ratchet Sets',
        'Screwdrivers & Pliers', 'Workshop Hand Tool Sets',
      ],
      imageSource: lubricationHandToolImages,
    },
  ];

  families.forEach((family) => {
    family.categories.forEach((cat, idx) => {
      // Family and category now use the exact same slug format as navigation.ts
      const familySlug = slugify(family.name);
      const categorySlug = slugify(cat);
      const slug = `${familySlug}-${categorySlug}`;

      categoryRegistry[slug] = {
        slug,
        title: cat,
        family: family.name,
        description: `High-quality ${cat} for ${family.name}, designed for reliability and peak performance. ORADO ensures every part meets rigorous automotive standards for durability and precision.`,
        image: family.imageSource[idx] || '',
      };
    });
  });
};

buildRegistry();

export const getCategoryBySlug = (slug: string) => {
  const sanitized = typeof slug === 'string' ? slug.trim() : '';

  if (!sanitized) return undefined;

  if (categoryRegistry[sanitized]) {
    return categoryRegistry[sanitized];
  }

  const normalized = normalizeLegacySlug(sanitized);
  const directFallback = categoryRegistry[normalized];

  if (directFallback) {
    return directFallback;
  }

  const aliasSlug = legacyCategoryAliases[normalized];
  return aliasSlug ? categoryRegistry[aliasSlug] : undefined;
};

export const getAllCategories = () =>
  Object.values(categoryRegistry);
