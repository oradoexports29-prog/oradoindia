
export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  children?: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownType?: 'simple' | 'mega';
  subItems?: NavSubItem[];
}

// Generate category URLs that match categoryRegistry.ts
const slugify = (text: string) =>
  text.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');

const categoryLink = (category: string, family: string) =>
  `#category/${slugify(family)}-${slugify(category)}`;

export const twoWheelerProductCategories: NavSubItem[] = [
  { label: 'Charging Coil (Source)', href: categoryLink('Charging Coil (Source)', '2 Wheeler Parts') },
  { label: 'L.T. Coils (Light)', href: categoryLink('L.T. Coils (Light)', '2 Wheeler Parts') },
  { label: 'Pick Up Coil (Pulsar)', href: categoryLink('Pick Up Coil (Pulsar)', '2 Wheeler Parts') },
  { label: 'C.D.I. Unit', href: categoryLink('C.D.I. Unit', '2 Wheeler Parts') },
  { label: 'A.C. Regulator', href: categoryLink('A.C. Regulator', '2 Wheeler Parts') },
  { label: 'Electronic Flasher', href: categoryLink('Electronic Flasher', '2 Wheeler Parts') },
  { label: 'Regulator Rectifier', href: categoryLink('Regulator Rectifier', '2 Wheeler Parts') },
  { label: 'Rectifier', href: categoryLink('Rectifier', '2 Wheeler Parts') },
  { label: 'Coil Plate Assembly', href: categoryLink('Coil Plate Assembly', '2 Wheeler Parts') },
  { label: 'H.T. Coils', href: categoryLink('H.T. Coils', '2 Wheeler Parts') },
  { label: 'Igniters', href: categoryLink('Igniters', '2 Wheeler Parts') },
  { label: 'Battery Wire', href: categoryLink('Battery Wire', '2 Wheeler Parts') },
  { label: 'Ignition Switch Cum Steering Lock / Ignition Switch', href: categoryLink('Ignition Switch Cum Steering Lock / Ignition Switch', '2 Wheeler Parts') },
  { label: 'Combination Switch (LH Only)', href: categoryLink('Combination Switch (LH Only)', '2 Wheeler Parts') },
  { label: 'Self Relay', href: categoryLink('Self Relay', '2 Wheeler Parts') },
  { label: 'Head Lamp Bulb', href: categoryLink('Head Lamp Bulb', '2 Wheeler Parts') },
  { label: 'Indicator Bulb', href: categoryLink('Indicator Bulb', '2 Wheeler Parts') },
  { label: 'Tail & Stop Light Bulb', href: categoryLink('Tail & Stop Light Bulb', '2 Wheeler Parts') },
  { label: 'Indicator Festoon', href: categoryLink('Indicator Festoon', '2 Wheeler Parts') },
  { label: 'Turn Pilot Indicator Bulb', href: categoryLink('Turn Pilot Indicator Bulb', '2 Wheeler Parts') },
  { label: 'Speedo Meter Bulb', href: categoryLink('Speedo Meter Bulb', '2 Wheeler Parts') },
  { label: 'Halogen Bulb M-5', href: categoryLink('Halogen Bulb M-5', '2 Wheeler Parts') },
  { label: 'Halogen Bulb HS 1', href: categoryLink('Halogen Bulb HS 1', '2 Wheeler Parts') },
  { label: 'Carbon Brush Holder Assly. for Starter', href: categoryLink('Carbon Brush Holder Assly. for Starter', '2 Wheeler Parts') },
  { label: 'Carbon Brush for Starter', href: categoryLink('Carbon Brush for Starter', '2 Wheeler Parts') },
  { label: 'Plug Cap', href: categoryLink('Plug Cap', '2 Wheeler Parts') },
  { label: 'DC Horn', href: categoryLink('DC Horn', '2 Wheeler Parts') },
  { label: 'Plug Wire Assembly', href: categoryLink('Plug Wire Assembly', '2 Wheeler Parts') },
  { label: 'Front Stop Switch', href: categoryLink('Front Stop Switch', '2 Wheeler Parts') },
  { label: 'Rear Stop Switch', href: categoryLink('Rear Stop Switch', '2 Wheeler Parts') },
  { label: 'Fuse Wire', href: categoryLink('Fuse Wire', '2 Wheeler Parts') },
];

export const threeWheelerProductCategories: NavSubItem[] = [
  { label: 'Charging Coil (Source)', href: categoryLink('Charging Coil (Source)', '3 Wheeler Parts') },
  { label: 'Pick Up Coil (Pulsar)', href: categoryLink('Pick Up Coil (Pulsar)', '3 Wheeler Parts') },
  { label: 'Light Coil', href: categoryLink('Light Coil', '3 Wheeler Parts') },
  { label: 'C.D.I. Unit', href: categoryLink('C.D.I. Unit', '3 Wheeler Parts') },
  { label: 'Electronic Flasher', href: categoryLink('Electronic Flasher', '3 Wheeler Parts') },
  { label: 'Regulator Rectifier (RR Unit)', href: categoryLink('Regulator Rectifier (RR Unit)', '3 Wheeler Parts') },
  { label: 'Coil Plate Assembly (Stator)', href: categoryLink('Coil Plate Assembly (Stator)', '3 Wheeler Parts') },
  { label: 'HT Coil (Ignition Coil)', href: categoryLink('HT Coil (Ignition Coil)', '3 Wheeler Parts') },
  { label: 'Horn DC', href: categoryLink('Horn DC', '3 Wheeler Parts') },
  { label: 'Starter Relay', href: categoryLink('Starter Relay', '3 Wheeler Parts') },
  { label: 'Change Over Relay', href: categoryLink('Change Over Relay', '3 Wheeler Parts') },
  { label: 'Head Lamp Relay', href: categoryLink('Head Lamp Relay', '3 Wheeler Parts') },
];

export const lubricationAndHandToolProductCategories: NavSubItem[] = [
  { label: 'Engine Lubricants', href: categoryLink('Engine Lubricants', 'Lubrication & Hand Tools') },
  { label: 'Gear & Transmission Lubricants', href: categoryLink('Gear & Transmission Lubricants', 'Lubrication & Hand Tools') },
  { label: 'Grease & Bearing Lubricants', href: categoryLink('Grease & Bearing Lubricants', 'Lubrication & Hand Tools') },
  { label: 'Chain Care & Maintenance', href: categoryLink('Chain Care & Maintenance', 'Lubrication & Hand Tools') },
  { label: 'Combination Spanners', href: categoryLink('Combination Spanners', 'Lubrication & Hand Tools') },
  { label: 'Socket & Ratchet Sets', href: categoryLink('Socket & Ratchet Sets', 'Lubrication & Hand Tools') },
  { label: 'Screwdrivers & Pliers', href: categoryLink('Screwdrivers & Pliers', 'Lubrication & Hand Tools') },
  { label: 'Workshop Hand Tool Sets', href: categoryLink('Workshop Hand Tool Sets', 'Lubrication & Hand Tools') },
];

export const productMenuGroups = [
  {
    title: '2 Wheeler Parts',
    categories: twoWheelerProductCategories.slice(0, 4),
    viewAllHref: '#products-page-2-wheeler',
  },
  {
    title: '3 Wheeler Parts',
    categories: threeWheelerProductCategories.slice(0, 4),
    viewAllHref: '#products-page-3-wheeler',
  },
  {
    title: 'Lubrication & Hand Tools',
    categories: lubricationAndHandToolProductCategories.slice(0, 4),
    viewAllHref: '#products-page-lubrication',
  },
];

// Keep duplicate category names when they belong to different families.
// Their URLs distinguish the correct product family.
const productMenuCategories = [
  ...twoWheelerProductCategories,
  ...threeWheelerProductCategories,
  ...lubricationAndHandToolProductCategories,
];

export const navConfig: NavItem[] = [
  { label: 'HOME', href: '#home' },
  {
    label: 'ABOUT US',
    href: '#about-page',
    hasDropdown: true,
    dropdownType: 'simple',
    subItems: [
      {
        label: 'Company Overview',
        href: '#about-page',
        description: 'Learn about ORADO and our mission',
      },
      {
        label: 'Our History',
        href: '#about-history',
        description: 'Three decades of manufacturing excellence',
      },
      {
        label: 'Manufacturing Capabilities',
        href: '#about-quality',
        description: 'Focused on dependable components',
      },
      {
        label: 'Quality Assurance',
        href: '#about-quality',
        description: 'Commitment to reliability and service',
      },
    ],
  },
  {
    label: 'PRODUCTS',
    href: '#products-page',
    hasDropdown: true,
    dropdownType: 'mega',
    subItems: productMenuCategories,
  },
  {
    label: 'CATALOGUE',
    href: '#catalogue',
  },
  {
    label: 'CERTIFICATES',
    href: '#certificates',
    hasDropdown: false,
    subItems: [
      {
        label: 'ISO Certification',
        href: '#certificates/iso',
        description: 'International Standard Organization',
      },
      {
        label: 'MSME Registration',
        href: '#certificates/msme',
        description: 'Udyam Registration',
      },
      {
        label: 'ZED Certification',
        href: '#certificates/zed',
        description: 'Zero Defect Zero Effect',
      },
    ],
  },
  {
    label: 'QUALITY & MANUFACTURING',
    href: '#quality',
    hasDropdown: true,
    dropdownType: 'simple',
    subItems: [
      {
        label: 'Quality Assurance',
        href: '#quality-assurance',
        description: 'Our quality control processes',
      },
      {
        label: 'Manufacturing Capabilities',
        href: '#quality',
        description: 'Production facilities and equipment',
      },
    ],
  },
  { label: 'CONTACT US', href: '#contact' },
];

export const companyInfo = {
  name: 'ORADO',
  tagline: 'Manufacturer & Exporter of Automotive Electrical Parts',
  established: '1994',
  whatsappNumber: '+91 9878319274',
  whatsappLink:
    'https://wa.me/919878319274?text=Hello%20ORADO%2C%20I%20am%20interested%20in%20your%20automotive%20electrical%20spare%20parts.%20Please%20share%20product%20details%20and%20quotation%20information.',
  email: 'indiaorado@gmail.com',
  website: 'www.oradoindia.com',
  address:
    '9-B, Orado Exports, Street Number 7, Bhai Himmat Singh Nagar, Dugri, Ludhiana, Punjab 141001, India',
  googleMapsLink: 'https://share.google/Nh5qKo5I5Wqtk5SrW',
};
