
export interface IgniterProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
  thumbnail?: string;
}

interface IgniterProductFile {
  partNumber: string;
  name: string;
  vehicle: string;
  fileName: string;
}

const igniterProductFiles: IgniterProductFile[] = [
  {
    partNumber: 'RP358',
    name: 'Ignition Coil Igniter',
    vehicle: 'LML Vespa 12V',
    fileName: 'rp358 Ignition coil Igniters For Lml  V espa 12V  (4).png',
  },
  {
    partNumber: 'RP359',
    name: 'Ignition Coil Igniter',
    vehicle: 'Hero Panther / VIP / Gizmo',
    fileName: 'rp359 Hero Panther Vip Gizmo  (1).png',
  },
  {
    partNumber: 'RP360',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS / Suzuki Max 100 / Samurai',
    fileName: 'RP360 Tvs Suzuki Max 100 Samurai (1).png',
  },
  {
    partNumber: 'RP361',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Scooty Pep',
    fileName: 'RP361 Tvs Scooty Pep (1).png',
  },
  {
    partNumber: 'RP362',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Star City DLX 6 Wire',
    fileName: 'RP362  Tvs Star City Dlx 6 wire (7).png',
  },
  {
    partNumber: 'RP363ZK',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Star City KS / ES / Star Sport 7 Wire',
    fileName: 'RP363ZK Tvs Star City ks es Star sport 7 wire (1).png',
  },
  {
    partNumber: 'RP365',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS / Suzuki Max 100 / Samurai with Clamp',
    fileName: 'RP365 Tvs Suzuki Max 100 Samurai with clamp (2).png',
  },
  {
    partNumber: 'RP365CB',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Jupiter / TVS Wego Combined IDI, After April 2017 BS4',
    fileName: 'RP365CB  Tvs Jupiter Tvs wego combined idi ignition coil after apr 2017 bs4 (6).jpg',
  },
  {
    partNumber: 'RP365CZ',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Jupiter / TVS Wego',
    fileName: 'RP365cz Ignition coil Igniters For Tvs Jupiter Tvs Wego (5).jpg',
  },
  {
    partNumber: 'RP365DM',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Super XL HD',
    fileName: 'RP365D M Tvs Super xl hd (1).png',
  },
  {
    partNumber: 'RP365K',
    name: 'Ignition Coil Igniter',
    vehicle: 'TVS Super XL 100 BS3 / BS4',
    fileName: 'RP365K Tvs Super xl 100 bs3 bs4 (2).png',
  },
];

export const igniterProducts: IgniterProduct[] =
  igniterProductFiles.map(({ fileName, ...product }) => ({
    ...product,
    image: `/igniters/${fileName}`,
  }));
