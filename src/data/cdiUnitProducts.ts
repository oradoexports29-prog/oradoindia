
export interface CdiUnitProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
  thumbnail?: string;
}

interface CdiUnitProductFile extends Omit<CdiUnitProduct, 'image'> {
  fileName: string;
}

const cdiUnitProductFiles: CdiUnitProductFile[] = [
  { partNumber: 'RP220', name: 'CDI Unit', vehicle: 'Bajaj Chetak 12V 5 Pin Scooter Two Wheeler Spare Parts', fileName: 'ORP220  CDI Unit For   Bajaj Chetak 12V 5 Pin Scooter Two Wheeler Spare Parts (2).png' },
  { partNumber: 'RP221', name: 'CDI Unit', vehicle: 'Bajaj Chetak 99 Bravo Classic sl', fileName: 'Orado rp221 Cdi Unit For Bajaj Chetak 99 Bravo Classic sl (1).png' },
  { partNumber: 'RP222', name: 'CDI Unit', vehicle: 'Bajaj bravo self start Bajaj chetak sl', fileName: 'Orado rp222 Cdi Unit For Bajaj bravo self start Bajaj chetak sl (1).png' },
  { partNumber: 'RP222F', name: 'CDI Unit', vehicle: 'Bajaj pulsar 150 180 dtsi with out digital meter', fileName: 'Orado rp222f Cdi Unit For B ajaj pulsar 150 180 dtsi with out digital meter (10).png' },
  { partNumber: 'RP222FA', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 150 180 Dtsi Ug4', fileName: 'ORADO RP222FA Cdi Unit For B ajaj Pulsar 150 180 Dtsi Ug4.png' },
  { partNumber: 'RP222FC', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 220 220s 220f with auto choke green', fileName: 'Orado rp222fc Cdi Unit For B ajaj Pulsar 220 220s 220f with auto choke green (6).png' },
  { partNumber: 'RP222FM', name: 'CDI Unit', vehicle: 'Bajaj platina 125 dtsi ks es 2008 model', fileName: 'Orado rp222fm Cdi Unit For B ajaj platina 125 dtsi ks es 2008 model (2).png' },
  { partNumber: 'RP222FO', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 150 180 200 Ug3 Dtsi with digital meter', fileName: 'Orado rp222fo Cdi Unit For B ajaj Pulsar 150 180 200 Ug3 Dtsi with digital meter (4).png' },
  { partNumber: 'RP222FR', name: 'CDI Unit', vehicle: 'Bajaj Pulsar Discover 125 150 180 DTS-i OM Digital Meter Parts', fileName: 'orado rp222fr  CDI Unit For Bajaj Pulsar Discover 125 150 180 DTS-i OM Digital Meter Parts (2).png' },
  { partNumber: 'RP223', name: 'CDI Unit', vehicle: 'Bajaj M80', fileName: 'Orado rp223 Cdi Unit For Bajaj M80  (7).png' },
  { partNumber: 'RP226', name: 'CDI Unit', vehicle: 'Bajaj Wind 125', fileName: 'Orado rp226 Cdi Unit For B ajaj Wind 125 (14).png' },
  { partNumber: 'RP226AQ', name: 'CDI Unit', vehicle: 'Bajaj discover 150 with auto choke', fileName: 'Orado rp226aq Cdi Unit For B ajaj discover 150 with auto choke (1).png' },
  { partNumber: 'RP226AZ', name: 'CDI Unit', vehicle: 'Bajaj discover 100cc with auto choke', fileName: 'Orado rp226az Cdi Unit For B ajaj discover 100cc with auto choke (6).png' },
  { partNumber: 'RP226MT', name: 'CDI Unit', vehicle: 'Bajaj Discover 100m ac dc', fileName: 'Orado rp226mt Cdi Unit For Bajaj Discover 100m ac dc (1).png' },
  { partNumber: 'RP226RM', name: 'CDI Unit', vehicle: 'Bajaj kb 4s caliber boxer ct pulsar 150 byk', fileName: 'Orado rp226rm Cdi Unit For B ajaj kb 4s caliber boxer ct pulsar 150 byk (2).png' },
  { partNumber: 'RP226Z', name: 'CDI Unit', vehicle: 'Bajaj discover discover 100cc 4g', fileName: 'Orado rp226z Cdi Unit For B ajaj discover discover 100cc 4g (2).png' },
  { partNumber: 'RP227AE', name: 'CDI Unit', vehicle: 'Bajaj platina 100 es ac green', fileName: 'Orado rp227ae Cdi Unit For Bajaj platina 100 es ac green (3).jpg' },
  { partNumber: 'RP227AG', name: 'CDI Unit', vehicle: 'Bajaj ct 100 platina 100cc caliber 115 discover 112', fileName: 'Orado rp227ag Cdi Unit For Bajaj ct 100 platina 100cc caliber 115 discover 112 (11).png' },
  { partNumber: 'RP227AK', name: 'CDI Unit', vehicle: 'Bajaj Platina 100 Comfotec Dc Blue', fileName: 'Orado rp227ak Cdi Unit For B ajaj Platina 100 Comfotec Dc Blue (1).png' },
  { partNumber: 'RP227AR', name: 'CDI Unit', vehicle: 'Bajaj xcd 135', fileName: 'Orado rp227ar Cdi Unit For Bajaj xcd 135 (2).png' },
  { partNumber: 'RP227AZ', name: 'CDI Unit', vehicle: 'Bajaj Platina 125', fileName: 'Orado rp227az Cdi Unit For Bajaj Platina 125 (6).png' },
  { partNumber: 'RP227JK', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Three Phase Black box', fileName: 'Orado rp227jk Cdi Unit For Royal Enf 350cc Three Phase Black box (1).png' },
  { partNumber: 'RP227PW', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Blue box', fileName: 'Orado rp227pw Cdi Unit For Royal Enf 350cc Blue box (5).png' },
  { partNumber: 'RP227PX', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Thunder Bird Green box', fileName: 'Orado rp227px Cdi Unit For Royal Enf 350cc Thunder Bird Green box (3).png' },
  { partNumber: 'RP231', name: 'CDI Unit', vehicle: 'Lml vespa xe150cc o m grey 4 pins', fileName: 'Orado rp231 Cdi Unit For Lml vespa xe150cc o m grey 4 pins (3).png' },
  { partNumber: 'RP232', name: 'CDI Unit', vehicle: 'Lml V espa T5 Select es 4 pins', fileName: 'Orado rp232 Cdi Unit For Lml V espa T5 Select es 4 pins (8).png' },
  { partNumber: 'RP232DM', name: 'CDI Unit', vehicle: 'Lml Vespa 4s new model', fileName: 'Orado rp232dm Cdi Unit For Lml Vespa 4s new model (2).png' },
  { partNumber: 'RP236', name: 'CDI Unit', vehicle: 'Tvs Suzuki 100 Shogun Samurai max 100', fileName: 'Orado rp236 Cdi Unit For Tvs Suzuki 100 Shogun Samurai max 100 (5).png' },
  { partNumber: 'RP236AA', name: 'CDI Unit', vehicle: 'Tvs fiero dc', fileName: 'Orado rp236aa Cdi Unit For Tvs fiero dc (5).png' },
  { partNumber: 'RP236AB', name: 'CDI Unit', vehicle: 'Tvs Fiero F2', fileName: 'Orado rp236ab Cdi Unit For Tvs Fiero F2 (6).png' },
  { partNumber: 'RP236AD', name: 'CDI Unit', vehicle: 'Tvs Centra', fileName: 'Orado rp236ad Cdi Unit For Tvs Centra (5).png' },
  { partNumber: 'RP236AG', name: 'CDI Unit', vehicle: 'Tvs Victor Glx', fileName: 'Orado rp236ag Cdi Unit For Tvs Victor Glx (8).png' },
  { partNumber: 'RP236AM', name: 'CDI Unit', vehicle: 'Tvs Apache 150 Black 10 wire', fileName: 'Orado rp236am Cdi Unit For Tvs Apache 150 Black 10 wire (6).png' },
  { partNumber: 'RP236AR', name: 'CDI Unit', vehicle: 'Tvs Victor', fileName: 'Orado rp236ar Cdi Unit For Tvs Victor (1).png' },
  { partNumber: 'RP236AS', name: 'CDI Unit', vehicle: 'Tvs Victor Gl with flasher', fileName: 'Orado rp236as Cdi Unit For Tvs Victor Gl with flasher (11).png' },
  { partNumber: 'RP236AV', name: 'CDI Unit', vehicle: 'Suzuki Access 125 4+2 pins', fileName: 'Orado rp236av Cdi Unit For Suzuki Access 125 4+2 pins (4).png' },
  { partNumber: 'RP236LX', name: 'CDI Unit', vehicle: 'Suzuki Access 125 New Tci', fileName: 'Orado rp236lx Cdi Unit For Suzuki Access 125 New Tci (2).png' },
  { partNumber: 'RP236OT', name: 'CDI Unit', vehicle: 'Tvs Victor nm Tci 14 pins', fileName: 'Orado rp236ot Cdi Unit For Tvs Victor nm Tci 14 pins (1).png' },
  { partNumber: 'RP236Z', name: 'CDI Unit', vehicle: 'Tvs Jupiter 2+4+2 pins', fileName: 'Orado rp236z Cdi Unit For Tvs Jupiter 2+4+2 pins (3).png' },
  { partNumber: 'RP236ZN', name: 'CDI Unit Fit', vehicle: 'TVS Scooty Pep Plus Streak 11 Wire Scooter Two Wheeler Parts', fileName: 'Orado rp236zn CDI Unit Fit for TVS Scooty Pep Plus Streak 11 Wire Scooter Two Wheeler Parts (4).png' },
  { partNumber: 'RP236ZR', name: 'CDI Unit', vehicle: 'Tvs Scooty pep plus 7 wire 3 socket', fileName: 'Orado rp236zr Cdi Unit For Tvs Scooty pep plus 7 wire 3 socket (2).png' },
  { partNumber: 'RP236ZZ', name: 'CDI Unit', vehicle: 'Tvs phoenix 125 12 wire', fileName: 'Orado rp236zz Cdi Unit For Tvs phoenix 125 12 wire (3).jpg' },
  { partNumber: 'RP238', name: 'CDI Unit', vehicle: 'Hero Hnd Cd 100 ss Kinetic Challenger 5 pins', fileName: 'Orado rp238 Cdi Unit For Hero Hnd Cd 100 ss Kinetic Challenger 5 pins (5).png' },
  { partNumber: 'RP238AA', name: 'CDI Unit', vehicle: 'Hero Honda ambition digital', fileName: 'Orado rp238aa Cdi Unit For Hero Honda ambition digital (1).png' },
  { partNumber: 'RP238AI', name: 'CDI Unit', vehicle: 'Hero Hunk Honda Unicorn cbz x treme achiever cbf 150', fileName: 'Orado rp238ai Cdi Unit For Hero Hunk Honda Unicorn cbz x treme achiever cbf 150 (1).png' },
  { partNumber: 'RP238DD', name: 'CDI Unit', vehicle: 'Hero Hero glamour hero super splendor 6 pin socket', fileName: 'Orado rp238dd Cdi Unit For Hero Hero glamour hero super splendor 6 pin socket (3).png' },
  { partNumber: 'RP238EG', name: 'CDI Unit', vehicle: 'Hero splendor pro 2010 to 2012 model passion pro hf dawn', fileName: 'Orado rp238eg Cdi Unit For Hero splendor pro 2010 to 2012 model passion pro hf dawn (9).png' },
  { partNumber: 'RP239', name: 'CDI Unit', vehicle: 'Hero Honda Splendor p17 passion 4+2 pins', fileName: 'Orado rp239 Cdi Unit For Hero Honda Splendor p17 passion 4+2 pins (3).png' },
  { partNumber: 'RP239BC', name: 'CDI Unit', vehicle: 'Hero cd dawn cd deluxe o m 4+2 pins', fileName: 'Orado rp239bc Cdi Unit For Hero cd dawn cd deluxe o m 4+2 pins (3).png' },
  { partNumber: 'RP239CZ', name: 'CDI Unit', vehicle: 'Hero cd deluxe new dc nxg eco deluxe 4 pins', fileName: 'Orado rp239cz Cdi Unit For Hero cd deluxe new dc nxg eco deluxe 4 pins (6).png' },
  { partNumber: 'RP239EC', name: 'CDI Unit', vehicle: 'Hero Passion x pro tci 4+2 pins', fileName: 'Orado rp239ec Cdi Unit For Hero Passion x pro tci 4+2 pins (1).png' },
  { partNumber: 'RP239SW', name: 'CDI Unit', vehicle: 'Hero hf deluxe passion pro 13s 2017 4+2 pins', fileName: 'Orado rp239sw Cdi Unit For Hero hf deluxe passion pro 13s 2017 4+2 pins (8).png' },
  { partNumber: 'RP240', name: 'CDI Unit', vehicle: 'Hero Gizmo', fileName: 'Orado rp240 Cdi Unit For Hero Gizmo (9).png' },
  { partNumber: 'RP241', name: 'CDI Unit', vehicle: 'Hero puch', fileName: 'Orado rp241 Cdi Unit For Hero puch (1).png' },
  { partNumber: 'RP242', name: 'CDI Unit', vehicle: 'Honda Eterno', fileName: 'Orado rp242 Cdi Unit For Honda Eterno (2).png' },
  { partNumber: 'RP242AH', name: 'CDI Unit Fit', vehicle: 'Honda Unicorn Digital 4+2 Pin Bike Two Wheelers Spare Part', fileName: 'RP242AH CDI Unit Fit for Honda Unicorn Digital 4+2 Pin Bike Two Wheelers Spare Part (1).png' },
  { partNumber: 'RP242AS', name: 'CDI Unit', vehicle: 'Honda shine cb shine 4+2 pins', fileName: 'Orado rp242as Cdi Unit For Honda shine cb shine 4+2 pins (9).png' },
  { partNumber: 'RP243', name: 'CDI Unit', vehicle: 'Honda Activa 10 pin nm', fileName: 'Orado rp243 Cdi Unit For Honda Activa 10 pin nm (3).png' },
  { partNumber: 'RP244', name: 'CDI Unit', vehicle: 'Hnd Activa 9 pin om', fileName: 'Orado rp244 Cdi Unit For Hnd Activa 9 pin om (3).png' },
  { partNumber: 'RP244DR', name: 'CDI Unit', vehicle: 'Honda Activa Het 3g 7 pin', fileName: 'Orado rp244dr Cdi Unit For Honda Activa Het 3g 7 pin (3).png' },
  { partNumber: 'RP244MR', name: 'CDI Unit', vehicle: 'Honda Activa 110cc 10 pin Maestro o m dio het', fileName: 'Orado rp244mr Cdi Unit For Honda Activa 110cc 10 pin Maestro o m dio het (3).png' },
  { partNumber: 'RP244MT', name: 'CDI Unit', vehicle: 'Honda Dream Neo Het Dream Yuga het 3+2 pins', fileName: 'Orado rp244mt Cdi Unit For Honda Dream Neo Het Dream Yuga het 3+2 pins (2).png' },
  { partNumber: 'RP244RW', name: 'CDI Unit', vehicle: 'Hnd Activa 10 pin het 110cc', fileName: 'Orado rp244rw Cdi Unit For Hnd Activa 10 pin het 110cc (5).png' },
  { partNumber: 'RP244WL', name: 'CDI Unit', vehicle: 'Honda Activa 7 pin Het 5g Bs4 2018', fileName: 'Orado rp244wl Cdi Unit For Honda Activa 7 pin Het 5g Bs4 2018 (1).png' },
  { partNumber: 'RP244Z', name: 'CDI Unit', vehicle: 'Honda Activa het 125 10 pin', fileName: 'Oradp rp244z Cdi Unit For Honda Activa het 125 10 pin (3).png' },
  { partNumber: 'RP245', name: 'CDI Unit', vehicle: 'Yamaha Crux libero yd 110 6 pins', fileName: 'Orado rp245 Cdi Unit For Yamaha Crux libero yd 110 6 pins (2).png' },
  { partNumber: 'RP245RM', name: 'CDI Unit', vehicle: 'Yamaha Ybx 7 wire', fileName: 'Orado rp245rm Cdi Unit For Yamaha Ybx 7 wire (4).png' },
  { partNumber: 'RP245RZ', name: 'CDI Unit', vehicle: 'Yamaha Ybx 8 wire', fileName: 'Orado rp245rz Cdi Unit For Yamaha Ybx 8 wire (6).png' },
  { partNumber: 'RP245WM', name: 'CDI Unit', vehicle: 'Yamaha Szr with rpm meter', fileName: 'Orado rp245wm Cdi Unit For Yamaha Szr with rpm meter (5).png' },
  { partNumber: 'RP245WO', name: 'CDI Unit', vehicle: 'Yamaha Fz 16 Fzs Fazer n m 8+4 pin', fileName: 'Orado rp245wo Cdi Unit For Yamaha Fz 16 Fzs Fazer n m 8+4 pin (1).png' },
  { partNumber: 'RP245WW', name: 'CDI Unit', vehicle: 'Yamaha Crux R Enticer Self Start 6 Pin Two Wheeler Bike Spare Parts', fileName: 'RP245WW CDI Unit for Yamaha Crux R Enticer Self Start 6 Pin Two Wheeler Bike Spare Parts (1).png' },
  { partNumber: 'RP245XO', name: 'CDI Unit', vehicle: 'Yamaha Rx 100', fileName: 'Orado rp245xo Cdi Unit For Yamaha Rx 100 (6).png' },
  { partNumber: 'RP245XP', name: 'CDI Unit', vehicle: 'Yamaha Rxg 12v', fileName: 'Orado rp245xp Cdi Unit For Yamaha Rxg 12v (8).png' },
];

export const cdiUnitProducts: CdiUnitProduct[] = cdiUnitProductFiles.map(
  ({ fileName, ...product }) => ({
    ...product,
    image: `/cdi unit/${fileName}.webp`,
    thumbnail: `/cdi unit/${fileName}.thumb.webp`,
  })
);
