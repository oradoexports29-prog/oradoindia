
export interface RegulatorRectifierProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
}

const productFiles = [
  ['RP256', 'LML Vespa Select / Self Start / Select II 5 Pin', 'RP256 Lml Vespa Select Self Start Select II 5 Pin (6).png'],
  ['RP256AX', 'LML Freedom', 'RP256AX Regulator Rectifier for LML Freedom Two Wheeler Bike Spare Parts (1).png'],
  ['RP257', 'Hero Honda CD 100 / CD Dawn / Kinetic', 'RP257 Regulator Rectifier for Hero Honda Cd 100 Cd Dawn Kinetic Two Wheeler Spare Part (1).png'],
  ['RP258', 'Hero Honda Splendor / Passion / CBZ / CD', 'RP258 Regulator Rectifier for Hero Honda Splendor Passion CBZ CD Two Wheeler Parts (15).png'],
  ['RP258DD', 'Hero Honda Super Splendor / Glamour', 'RP258DD Regulator Rectifier for Hero Honda Super Splendor Glamour Two Wheelers Parts  (2).png'],
  ['RP259', 'Honda Activa 100', 'RP259  Regulator Rectifier for Honda Activa 100 Om Two Wheelers Scooter Spare Parts (1).png'],
  ['RP259HH', 'Honda Activa HET 110 / Aviator 125 / 3G', 'RP259HH  Regulator Rectifier for Honda Activa Het 110 Aviator 125 3g Two Wheelers Parts (3).png'],
  ['RP259P', 'Hero Pleasure', 'RP259P Regulator Rectifier for Hero Pleasure Two Wheelers Bike Spare Parts (1).png'],
  ['RP260', 'Bajaj KB 4S', 'RP260 Regulator rectifier for Bajaj kb 4s Two wheelers Bike Spare parts (5).png'],
  ['RP260AD', 'Bajaj Boxer AT', 'RP260AD Bajaj Boxer at (4).png'],
  ['RP260AS', 'Bajaj Caliber 115cc (4 + 1 Wire)', 'RP260AS.png'],
  ['RP260KK', 'Bajaj Discover 100 / Platina 100 / Boxer BM 100 / CT 100', 'rp260kk Bajaj Discover 100 4 Gear Platina 100 Es Boxer Bm 100 Ct 100 (6).png'],
  ['RP261', 'Bajaj Pulsar 180 ES / Pulsar 150 ES', 'RP261 Regulator Rectifier for Bajaj Pulsar 180es Pulsar 150 Es Two Wheelers Parts (1).png'],
  ['RP263', 'Bajaj CT 100 / Discover 112 / Platina BS4', 'RP263 Regulator Rectifier for Bajaj Ct 100 Discover 112 Platina Bs4 Two Wheelers Parts (1).png'],
  ['RP263GD', 'Bajaj Platina 125 / Discover 100 / 150', 'RP263GD Regulator Rectifier for Bajaj Platina 125 Discover 100cc 150 Two Wheelers Parts (8).png'],
  ['RP264', 'Bajaj XCD 125 / Pulsar 135 / Discover 110', 'rp264 orado Regulator Rectifier for Bajaj Xcd 125 Pulsar 135 Discover 110 Two Wheelers Parts (1).jpg'],
  ['RP265', 'Bajaj Discover DTS-i 125 / Discover 135', 'RP265  Regulator Rectifier for Bajaj Discover Dts I 125 Discover 135 Two Wheelers Parts (1).png'],
  ['RP266', 'Bajaj Pulsar 180 / 150 DTS-i Green', 'RP266 Regulator Rectifier for Bajaj Pulsar 180 150 Dtsi Green Two Wheelers Parts (1).png'],
  ['RP269', 'Bajaj Pulsar 150 / 180 UG4 / 220', 'RP269 Bajaj Pulsar 150 180  Ug4 220  (7).png'],
  ['RP269C', 'Bajaj Discover 100M 2014 Model', 'rp269c orado Regulator Rectifier for Bajaj Discover 100m 2014 Model Two Wheelers Bike Parts (3).jpg'],
  ['RP269TT', 'Bajaj Discover 125 ST 2012 Model', 'RP269TT Regulator Rectifier for Bajaj Discover 125 St 2012 Model Two Wheelers Parts (3).png'],
  ['RP270', 'Bajaj Wind 125cc', 'RP270 Regulator Rectifier for Bajaj Wind 125cc Two Wheelers Bike Spare Parts (1).png'],
  ['RP272', 'TVS Apache RTR / Star City ES', 'RP272 Regulator Rectifier for Tvs Apache Rtr Star City Es Two Wheelers Parts (6).png'],
  ['RP273', 'TVS Suzuki Samurai 5 Pin', 'RP273 Regulator Rectifier for Tvs Suzuki Samurai 5 Pin Two Wheelers Bike Spare Parts (1).png'],
  ['RP274', 'TVS Victor GL / GX / Fiero Sports', 'RP274  Regulator Rectifier for TVS Victor GL GX Fiero Sports Two Wheeler Spare Parts (3).png'],
  ['RP275', 'TVS Victor / Star City 4 Wire', 'RP275  Regulator Rectifier for Tvs Victor Star City 4 Wire Two Wheelers Bike Parts (3).png'],
  ['RP275MH', 'Suzuki Access 125', 'RP275MH Regulator Rectifier for Suzuki Access 125 Two Wheelers Scooter Spare Parts (3).png'],
  ['RP276', 'Yamaha Crux / RXG / YBX', 'RP276  Regulator Rectifier for Yamaha Crux RXG YBX Two Wheeler Bike Spare Parts (7).png'],
  ['RP276AN', 'Yamaha RX100 12.8V', 'RP276AN Regulator Rectifier for Yamaha RX100 12.8V Bike Two Wheeler Spare Parts (3).png'],
  ['RP276GM', 'Yamaha FZ 5 Pin Coupler', 'rp276gm orado Two wheelers parts Regulator rectifier for Yamaha fz 5 pin coupler (6).jpg'],
  ['RP276MO', 'Yamaha RX100 6.4V', 'RP276MO Regulator Rectifier for Yamaha Rx100 6.4V Two Wheelers Bike Spare Parts (7).png'],
  ['RP276OP', 'Yamaha RXG 12.8V', 'RP276OP Regulator Rectifier for Yamaha Rxg 12.8V Two Wheelers Bike Spare Parts (3).png'],
  ['RP276VS', 'Yamaha SZ-R 4 Pin Coupler', 'RP276VS  Regulator Rectifier for Yamaha Sz R 4 Pin Coupler Two Wheelers Parts (2).jpg'],
] as const;

export const regulatorRectifierProducts: RegulatorRectifierProduct[] =
  productFiles.map(([partNumber, vehicle, filename]) => ({
    partNumber,
    name: 'Regulator Rectifier',
    vehicle,
    // Keep the original filename unencoded here.
    // The component will encode the URL when displaying it.
    image: `/regulator rectifier/${filename}`,
  }));
