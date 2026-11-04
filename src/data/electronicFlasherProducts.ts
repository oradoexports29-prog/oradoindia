
export interface ElectronicFlasherProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
  thumbnail?: string;
}

export const electronicFlasherProducts: ElectronicFlasherProduct[] = [
  {
    partNumber: 'RP255SD',
    name: 'Electronic Flasher',
    vehicle: 'Honda Activa 12V DC OE Type',
    image: '/electronic%20flasher/RP%20255SD%20%20Electronic%20Flasher%20for%20Honda%20Activa%2012v%20Dc%20Oe%20Type%20Two%20Wheelers%20S%20Cooter%20Parts%20%20(5).png',
  },
  {
    partNumber: 'RP253GH',
    name: 'Electronic Flasher',
    vehicle: 'Universal 12V DC with Buzzer Pin 2 Pin',
    image: '/electronic%20flasher/RP.253GH%20%20Electronic%20Flasher%20for%20Universal%2012v%20Dc%20with%20Buzzer%20Pin%202%20Pin%20Two%20Wheelers%20Parts%20(1).png',
  },
  {
    partNumber: 'RP255DK',
    name: 'Electronic Flasher',
    vehicle: 'Bajaj Pulsar 150 / 180 / Discover DTSi',
    image: '/electronic%20flasher/RP.255dk%20%20Electronic%20Flasher%20for%20Bajaj%20Pulsar%20150%20180%20Discover%20DTSi%20%20Bike%20Spare%20Parts%20(1).png',
  },
  {
    partNumber: 'RP250',
    name: 'Electronic Flasher',
    vehicle: 'Bajaj 12V AC Scooter',
    image: '/electronic%20flasher/RP250%20Electronic%20Flasher%20for%20Bajaj%2012V%20AC%20Scooter%20Two%20Wheeler%20Spare%20Parts%20(1).png',
  },
  {
    partNumber: 'RP251',
    name: 'Electronic Flasher',
    vehicle: 'Bajaj Chetak 99 / Bravo / Boxer AT',
    image: '/electronic%20flasher/RP251%20%20Electronic%20Flasher%20for%20Bajaj%20Chetak%2099%20Bravo%20Boxer%20AT%20Scooter%20Parts%20(1).png',
  },
  {
    partNumber: 'RP253GI',
    name: 'Electronic Flasher',
    vehicle: 'Universal 12V DC with Flasher',
    image: '/electronic%20flasher/RP253gi%20Universal%2012v%20Dc%20with%20Flasher%20(5).png',
  },
  {
    partNumber: 'RP254',
    name: 'Electronic Flasher',
    vehicle: 'Hero Honda DC Universal',
    image: '/electronic%20flasher/RP254%20Hero%20Honda%20Dc%20Universal%20(4).png',
  },
].map((product) => ({
  ...product,
  // Original PNG is used for both main image and thumbnail.
  // No WebP files or separate thumbnail files are available.
  thumbnail: product.image,
}));
