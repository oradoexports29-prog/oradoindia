export interface LtCoilProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
  thumbnail?: string;
}

const ltCoilProductFiles: LtCoilProduct[] = [
  {
    partNumber: 'RP141',
    name: 'Ignition L.T. Coil Set of Two',
    vehicle: 'Bajaj 12V (Set Of Two)',
    image: '/lt coil/Orado rp141 Ignition Lt Coil For Bajaj 12v set of two (1).png',
  },
  {
    partNumber: 'RP142',
    name: 'Ignition L.T. Coil I (No Coil)',
    vehicle: 'Bajaj 12V I No. Coil',
    image: '/lt coil/Orado rp142 Ignition Lt Coil For Bajaj 12v I no coil (1).png',
  },
  {
    partNumber: 'RP143',
    name: 'Ignition L.T. Coil II (No Coil)',
    vehicle: 'Bajaj 12V II No. Coil',
    image: '/lt coil/Orado rp143 Ignition Lt Coil For Bajaj 12v II no coil (1).png',
  },
  {
    partNumber: 'RP144',
    name: 'Ignition L.T. Coil I (No Coil)',
    vehicle: 'Bajaj 6V I No. Coil',
    image: '/lt coil/Orado rp144 Ignition Lt Coil For Bajaj 6v I no coil (1).png',
  },
  {
    partNumber: 'RP145',
    name: 'Ignition L.T. Coil II (No Coil)',
    vehicle: 'Bajaj 6V II No. Coil',
    image: '/lt coil/Orado rp145 Ignition Lt Coil For Bajaj 6v II no coil (3).png',
  },
  {
    partNumber: 'RP146',
    name: 'Ignition L.T. Coil III (No Coil)',
    vehicle: 'Bajaj 6V III No. Coil',
    image: '/lt coil/Orado rp146 Ignition Lt Coil For Bajaj 6v III no coil (4).png',
  },
  {
    partNumber: 'RP152',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj KB-100',
    image: '/lt coil/Orado rp152 Ignition Lt Coil For Bajaj Kb 100 (1).png',
  },
  {
    partNumber: 'RP153',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj KB-4S',
    image: '/lt coil/Orado rp153 Ignition Lt Coil For Bajaj Kb 4s (1).png',
  },
  {
    partNumber: 'RP154',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj KB-4S New Model / Boxer AT / CT',
    image: '/lt coil/orado RP154 Ignition Lt Coil Fit for Bajaj Kb 4s New Model Boxer at Ct Two Wheeler Parts (8).png',
  },
  {
    partNumber: 'RP155',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj KB-4S Boxer',
    image: '/lt coil/Orado rp155 Ignition Lt Coil For Bajaj Kb 4s Boxer (2).jpg',
  },
  {
    partNumber: 'RP156',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj KB-4S Boxer AT',
    image: '/lt coil/orado RP156 Ignition Lt Coil Fit for Bajaj Kb 4s Boxer at Two Wheeler Spare Parts Bike Parts (1).jpg',
  },
  {
    partNumber: 'RP157',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj Caliber',
    image: '/lt coil/orado RP157 Ignition Lt Coil Fit for Bajaj Caliber Two Wheeler Spare Parts Bike Parts (6).png',
  },
  {
    partNumber: 'RP158',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj Caliber Croma (Four Hole)',
    image: '/lt coil/orado RP158 Ignition Lt Coil Fit for Bajaj Caliber Croma Four Hole Two Wheeler Spare Parts (10).png',
  },
  {
    partNumber: 'RP159',
    name: 'Ignition L.T. Coil',
    vehicle: 'Bajaj Caliber Upgrade',
    image: '/lt coil/orado RP159  Ignition LT Coil Fit for Bajaj Caliber Upgrade Motorcycle Two Wheeler Spare Part (10).png',
  },
    {
    partNumber: 'ORP.159JS',
    name: 'L.T. Coil',
    vehicle: 'Bajaj CT-100',
    image: '/lt coil/ORP.159JS Bajaj Ct 100.png',
  },
  {
    partNumber: 'RP161',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Honda',
    image: '/lt coil/Orado rp161 Ignition Lt Coil For Hero Honda (2).png',
  },
  {
    partNumber: 'RP162',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Hnd SS',
    image: '/lt coil/ORADO RP162 Lt Coil For Hero Hnd ss (2).png',
  },
  {
    partNumber: 'RP163',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Honda Splendor (Two Hole Fitting)',
    image: '/lt coil/Orado rp163 Ignition Lt Coil For Hero Honda Splendor two hole fitting (8).png',
  },
  {
    partNumber: 'RP164',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Honda Splendor / Passion (Four Hole Fitting)',
    image: '/lt coil/Orado rp164 Ignition Lt Coil For Hero Honda Splendor passion four hole fitting (10).png',
  },
  {
    partNumber: 'RP166',
    name: 'Ignition L.T. Coil',
    vehicle: 'Ind Suzuki 12V',
    image: '/lt coil/Orado rp166 Ignition Lt Coil For Ind suzuki 12v (2).png',
  },
  {
    partNumber: 'RP167',
    name: 'Ignition L.T. Coil',
    vehicle: 'Suzuki Samurai Max-100',
    image: '/lt coil/Orado rp167 Ignition Lt Coil For Suzuki samurai max 100 (2).jpg',
  },
  {
    partNumber: 'RP168',
    name: 'Ignition L.T. Coil',
    vehicle: 'Yamaha RX-100',
    image: '/lt coil/Orado rp168 Ignition Lt Coil For Yamaha Rx 100 (2).png',
  },
  {
    partNumber: 'RP169',
    name: 'Ignition L.T. Coil',
    vehicle: 'Kinetic Honda Boss Marvel',
    image: '/lt coil/RP169  Ignition LT Coil Fit for Kinetic Honda Boss Marvel Scooter Two Wheeler Parts (1).png',
  },

  {
    partNumber: 'ORP170',
    name: 'Ignition L.T. Coil No. 1',
    vehicle: 'LML Vespa',
    image: '/lt coil/ORP170  Ignition LT Coil No. 1 Fit for LML Vespa Scooter Two Wheeler Spare Parts (1).png',
  },
  {
    partNumber: 'RP171',
    name: 'Ignition L.T. Coil Nos. 2 & 4',
    vehicle: 'LML Vespa',
    image: '/lt coil/RP171 Ignition LT Coil No. 2 & 4 Fit for LML Vespa Scooter Two Wheeler Spare Parts (5).png',
  },
  {
    partNumber: 'ORP172',
    name: 'Ignition L.T. Coil No. 3',
    vehicle: 'LML Vespa',
    image: '/lt coil/Orp172  Ignition LT Coil No. 3 Fit for LML Vespa Scooter Two Wheeler Spare Parts (1).png',
  },
  {
    partNumber: 'ORP.173',
    name: 'L.T. Coil Set of 4',
    vehicle: 'LML Vespa',
    image: '/lt coil/ORP.173 lML Vespa Set of 4 (10).png',
  },
  {
    partNumber: 'RP175',
    name: 'Ignition L.T. Coil',
    vehicle: 'TVS Scooty Super XL Moped Scooter',
    image: '/lt coil/Rp175  Ignition LT Coil Fit for TVS Scooty Super XL Moped Scooter Two Wheeler Part (1).png',
  },
  {
    partNumber: 'RP176',
    name: 'Ignition L.T. Coil',
    vehicle: 'VIP 240 DX Moped',
    image: '/lt coil/Orado rp176 Ignition Lt Coil For Vip 240 Dx Moped (1).jpg',
  },
  {
    partNumber: 'RP177',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Gizmo Moped 12V',
    image: '/lt coil/RP177  Ignition L.T Coil Fit For Hero Gizmo Moped 12V Electrical Spare Part Two Wheeler (6).png',
  },
  {
    partNumber: 'RP178',
    name: 'Ignition L.T. Coil',
    vehicle: 'Hero Panther Moped',
    image: '/lt coil/RP178  Ignition L.T Coil Fit For Hero Panther Moped Two Wheeler Spare Parts (1).png',
  },
];

export const ltCoilProducts: LtCoilProduct[] = ltCoilProductFiles.map(
  (product) => ({
    ...product,
    image: `${product.image}.webp`,
    thumbnail: `${product.image}.thumb.webp`,
  })
);