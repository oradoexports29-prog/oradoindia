export interface AcRegulatorProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  description: string;
  image: string;
  thumbnail?: string;
}

export const acRegulatorProducts: AcRegulatorProduct[] = [
  {
    partNumber: 'RP246',
    name: 'A.C. Regulator',
    vehicle: 'LML Select NV / SPL / Express 5 Trendy',
    description: 'LML Select NV / SPL / Express 5 Trendy',
    image: '/ac%20regulator/rp246%20AC%20Regulator%20For%20Lml%20Select%20nv%20Spl%20express%205%20trendy%20%20(5).png',
  },
  {
    partNumber: 'RP247',
    name: 'A.C. Regulator',
    vehicle: 'Bajaj Sunny Super FE / Yezdi 12V Scooter',
    description: 'Bajaj Sunny Super FE / Yezdi 12V Scooter',
    image: '/ac%20regulator/RP247%20AC%20Regulator%20for%20Bajaj%20Sunny%20Super%20FE%20Yezdi%2012V%20Scooter%20Two%20Wheeler%20Spare%20Parts%20(2).png',
  },
  {
    partNumber: 'RP249SH',
    name: 'A.C. Regulator with Flasher',
    vehicle: 'TVS XL Super',
    description: 'TVS XL Super',
    image: '/ac%20regulator/RP249SH%20AC%20Regulator%20for%20TVS%20XL%20Super%20with%20Flasher%20Scooter%20Two%20Wheeler%20Parts%20(5).png',
  },
].map((product) => ({
  ...product,
  thumbnail: product.image,
}));