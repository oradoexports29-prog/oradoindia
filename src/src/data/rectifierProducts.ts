export interface RectifierProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  description: string;
  image: string;
  thumbnail: string;
}

export const rectifierProducts: RectifierProduct[] = [
  {
    partNumber: 'RP277',
    name: 'Rectifier',
    vehicle: 'Hero Honda CD 100 / Dawn / Kinetic Honda',
    description: 'Hero Honda CD 100 / Dawn / Kinetic Honda',
    image:
      '/rectifier/RP277 Regulator Rectifier For Hero Honda Cd 100 Dawn Kinetic Honda (3).png',
    thumbnail:
      '/rectifier/RP277 Regulator Rectifier For Hero Honda Cd 100 Dawn Kinetic Honda (3).png',
  },
  {
    partNumber: 'RP278',
    name: 'Rectifier',
    vehicle: 'Hero Honda Splendor / Passion',
    description: 'Hero Honda Splendor / Passion',
    image: '/rectifier/RP278.jpg',
    thumbnail: '/rectifier/RP278.jpg',
  },
];