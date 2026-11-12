export interface CdiUnitProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  image: string;
  thumbnail?: string;
}

const cdiUnitProductFiles: Array<Omit<CdiUnitProduct, 'image' | 'thumbnail'> & { fileName: string }> = [
  { partNumber: 'RP220', name: 'CDI Unit', vehicle: 'Bajaj Chetak 12V 5 Pin Scooter Two Wheeler Spare Parts', fileName: 'RP220 CDI Unit For Bajaj Chetak 12V 5 Pin Scooter Two Wheeler Spare Parts .png' },
  { partNumber: 'RP221', name: 'CDI Unit', vehicle: 'Bajaj Chetak 99 Bravo Classic sl', fileName: 'RP221 Cdi Unit For Bajaj Chetak 99 Bravo Classic sl .png' },
  { partNumber: 'RP222', name: 'CDI Unit', vehicle: 'Bajaj bravo self start Bajaj chetak sl', fileName: 'RP222 Cdi Unit For Bajaj bravo self start Bajaj chetak sl .png' },
  { partNumber: 'RP222F', name: 'CDI Unit', vehicle: 'Bajaj pulsar 150 180 dtsi with out digital meter', fileName: 'RP222F Cdi Unit For Bajaj pulsar 150 180 dtsi with out digital meter .png' },
  { partNumber: 'RP222FA', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 150 180 Dtsi Ug4', fileName: 'RP222FA Cdi Unit For Bajaj Pulsar 150 180 Dtsi Ug4 .png' },
  { partNumber: 'RP222FC', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 220 220s 220f with auto choke green', fileName: 'RP222FC Cdi Unit For Bajaj Pulsar 220 220s 220f with auto choke green .png' },
  { partNumber: 'RP222FM', name: 'CDI Unit', vehicle: 'Bajaj platina 125 dtsi ks es 2008 model', fileName: 'RP222FM Cdi Unit For Bajaj platina 125 dtsi ks es 2008 model .png' },
  { partNumber: 'RP222FO', name: 'CDI Unit', vehicle: 'Bajaj Pulsar 150 180 200 Ug3 Dtsi with digital meter', fileName: 'RP222FO Cdi Unit For Bajaj Pulsar 150 180 200 Ug3 Dtsi with digital meter .png' },
  { partNumber: 'RP222FR', name: 'CDI Unit', vehicle: 'Bajaj Pulsar Discover 125 150 180 DTS-i OM Digital Meter Parts', fileName: 'RP222FR CDI Unit For Bajaj Pulsar Discover 125 150 180 DTSI OM Digital Meter Parts .jpg' },
  { partNumber: 'RP223', name: 'CDI Unit', vehicle: 'Bajaj M80', fileName: 'RP223 Cdi Unit For Bajaj M80  .png' },
  { partNumber: 'RP226', name: 'CDI Unit', vehicle: 'Bajaj Wind 125', fileName: 'RP226 Cdi Unit For Bajaj Wind 125 .png' },
  { partNumber: 'RP226AQ', name: 'CDI Unit', vehicle: 'Bajaj discover 150 with auto choke', fileName: 'RP226AQ Cdi Unit For Bajaj discover 150 with auto choke .png' },
  { partNumber: 'RP226AZ', name: 'CDI Unit', vehicle: 'Bajaj discover 100cc with auto choke', fileName: 'RP226AZ Cdi Unit For Bajaj discover 100cc with auto choke .png' },
  { partNumber: 'RP226MT', name: 'CDI Unit', vehicle: 'Bajaj Discover 100m ac dc', fileName: 'RP226MT Cdi Unit For Bajaj Discover 100m ac dc .png' },
  { partNumber: 'RP226RM', name: 'CDI Unit', vehicle: 'Bajaj kb 4s caliber boxer ct pulsar 150 byk', fileName: 'RP226RM Cdi Unit For Bajaj kb 4s caliber boxer ct pulsar 150 byk .png' },
  { partNumber: 'RP226Z', name: 'CDI Unit', vehicle: 'Bajaj discover discover 100cc 4g', fileName: 'RP226Z Cdi Unit For Bajaj discover discover 100cc 4g .png' },
  { partNumber: 'RP227AE', name: 'CDI Unit', vehicle: 'Bajaj platina 100 es ac green', fileName: 'RP227AE Cdi Unit For Bajaj platina 100 es ac green .jpg' },
  { partNumber: 'RP227AG', name: 'CDI Unit', vehicle: 'Bajaj ct 100 platina 100cc caliber 115 discover 112', fileName: 'RP227AG Cdi Unit For Bajaj ct 100 platina 100cc caliber 115 discover 112 .png' },
  { partNumber: 'RP227AK', name: 'CDI Unit', vehicle: 'Bajaj Platina 100 Comfotec Dc Blue', fileName: 'RP227AK Cdi Unit For B ajaj Platina 100 Comfotec Dc Blue .jpg' },
  { partNumber: 'RP227AR', name: 'CDI Unit', vehicle: 'Bajaj xcd 135', fileName: 'RP227AR Cdi Unit For Bajaj xcd 135 .png' },
  { partNumber: 'RP227AZ', name: 'CDI Unit', vehicle: 'Bajaj Platina 125', fileName: 'RP227AZ Cdi Unit For Bajaj Platina 125 .png' },
  { partNumber: 'RP227JK', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Three Phase Black box', fileName: 'RP227JK Cdi Unit For Royal Enfield 350cc Three Phase Black box .png' },
  { partNumber: 'RP227PW', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Blue box', fileName: 'RP227PW Cdi Unit For Royal Enfield 350cc Blue box .png' },
  { partNumber: 'RP227PX', name: 'CDI Unit', vehicle: 'Royal Enf 350cc Thunder Bird Green box', fileName: 'RP227PX Cdi Unit For Royal Enf 350cc Thunder Bird Green box .png' },
  { partNumber: 'RP231', name: 'CDI Unit', vehicle: 'Lml vespa xe150cc o m grey 4 pins', fileName: 'RP231 Cdi Unit For Lml vespa xe150cc om grey 4 pins .png' },
  { partNumber: 'RP232', name: 'CDI Unit', vehicle: 'Lml V espa T5 Select es 4 pins', fileName: 'RP232 Cdi Unit For Lml Vespa T5 Select es 4 pins .png' },
  { partNumber: 'RP232DM', name: 'CDI Unit', vehicle: 'Lml Vespa 4s new model', fileName: 'RP232DM Cdi Unit For Lml Vespa 4s new model .png' },
  { partNumber: 'RP236', name: 'CDI Unit', vehicle: 'Tvs Suzuki 100 Shogun Samurai max 100', fileName: 'RP236 Cdi Unit For Tvs Suzuki 100 Shogun Samurai max 100 .png' },
  { partNumber: 'RP236AA', name: 'CDI Unit', vehicle: 'Tvs fiero dc', fileName: 'RP236AA Cdi Unit For Tvs fiero dc .png' },
  { partNumber: 'RP236AB', name: 'CDI Unit', vehicle: 'Tvs Fiero F2', fileName: 'RP236AB Cdi Unit For Tvs Fiero F2 .png' },
  { partNumber: 'RP236AD', name: 'CDI Unit', vehicle: 'Tvs Centra', fileName: 'RP236AD Cdi Unit For Tvs Centra .png' },
  { partNumber: 'RP236AG', name: 'CDI Unit', vehicle: 'Tvs Victor Glx', fileName: 'RP236AG Cdi Unit For Tvs Victor Glx .png' },
  { partNumber: 'RP236AM', name: 'CDI Unit', vehicle: 'Tvs Apache 150 Black 10 wire', fileName: 'RP236AM Cdi Unit For Tvs Apache 150 Black 10 wire .png' },
  { partNumber: 'RP236AR', name: 'CDI Unit', vehicle: 'Tvs Victor', fileName: 'RP236AR Cdi Unit For Tvs Victor .png' },
  { partNumber: 'RP236AS', name: 'CDI Unit', vehicle: 'Tvs Victor Gl with flasher', fileName: 'RP236AS Cdi Unit For Tvs Victor Gl with flasher .png' },
  { partNumber: 'RP236AV', name: 'CDI Unit', vehicle: 'Suzuki Access 125 4+2 pins', fileName: 'RP236AV Cdi Unit For Suzuki Access pins .png' },
  { partNumber: 'RP236LX', name: 'CDI Unit', vehicle: 'Suzuki Access 125 New Tci', fileName: 'RP236LX Cdi Unit For Suzuki Access 125 New Tci .png' },
  { partNumber: 'RP236OT', name: 'CDI Unit', vehicle: 'Tvs Victor nm Tci 14 pins', fileName: 'RP236OT Cdi Unit For Tvs Victor nm Tci 14 pins .jpg' },
  { partNumber: 'RP236Z', name: 'CDI Unit', vehicle: 'Tvs Jupiter ', fileName: 'RP236Z Cdi Unit For Tvs Jupiter .png' },
  { partNumber: 'RP236ZN', name: 'CDI Unit Fit', vehicle: 'TVS Scooty Pep Plus Streak 11 Wire Scooter Two Wheeler Parts', fileName: 'RP236ZN CDI Unit Fit for TVS Scooty Pep Plus Streak 11 Wire Scooter Two Wheeler Parts .png' },
  { partNumber: 'RP236ZR', name: 'CDI Unit', vehicle: 'Tvs Scooty pep plus 7 wire 3 socket', fileName: 'RP236ZR Cdi Unit For Tvs Scooty pep plus 7 wire 3 socket .png' },
  { partNumber: 'RP236ZZ', name: 'CDI Unit', vehicle: 'Tvs phoenix 125 12 wire', fileName: 'RP236ZZ Cdi Unit For Tvs phoenix 125 12 wire .jpg' },
  { partNumber: 'RP238', name: 'CDI Unit', vehicle: 'Hero Hnd Cd 100 ss Kinetic Challenger 5 pins', fileName: 'RP238 Cdi Unit For Hero Hnd Cd 100 ss Kinetic Challenger 5 pins .png' },
  { partNumber: 'RP238AA', name: 'CDI Unit', vehicle: 'Hero Honda ambition digital', fileName: 'RP238AA Cdi Unit For Hero Honda ambition digital .png' },
  { partNumber: 'RP238AI', name: 'CDI Unit', vehicle: 'Hero Hunk Honda Unicorn cbz x treme achiever cbf 150', fileName: 'RP238AI Cdi Unit For Hero Hunk Honda Unicorn cbz x treme achiever cbf 150 .png' },
  { partNumber: 'RP238DD', name: 'CDI Unit', vehicle: 'Hero Hero glamour hero super splendor 6 pin socket', fileName: 'RP238DD Cdi Unit For Hero Hero glamour hero super splendor 6 pin socket .png' },
  { partNumber: 'RP238EG', name: 'CDI Unit', vehicle: 'Hero splendor pro 2010 to 2012 model passion pro hf dawn', fileName: 'RP238EG Cdi Unit For Hero splendor pro 2010 to 2012 model passion pro hf dawn .png' },
  { partNumber: 'RP239', name: 'CDI Unit', vehicle: 'Hero Honda Splendor P17 passion ', fileName: 'RP239 Cdi Unit For Hero Honda Splendor p17 passion .png' },
  { partNumber: 'RP239BC', name: 'CDI Unit', vehicle: 'Hero cd dawn cd deluxe old model', fileName: 'RP239BC Cdi Unit For Hero cd dawn cd deluxe om .png' },
  { partNumber: 'RP239CZ', name: 'CDI Unit', vehicle: 'Hero cd deluxe new dc nxg eco deluxe 4 pins', fileName: 'RP239CZ Cdi Unit For Hero cd deluxe new dc nxg eco deluxe 4 pins .png' },
  { partNumber: 'RP239EC', name: 'CDI Unit', vehicle: 'Hero Passion x pro TCI', fileName: 'RP239EC Cdi Unit For Hero Passion x pro TCI .png' },
  { partNumber: 'RP239SW', name: 'CDI Unit', vehicle: 'Hero hf deluxe passion pro 13s 2017 ', fileName: 'RP239SW Cdi Unit For Hero hf deluxe passion pro 13s 2017 .png' },
  { partNumber: 'RP240', name: 'CDI Unit', vehicle: 'Hero Gizmo', fileName: 'RP240 Cdi Unit For Hero Gizmo .png' },
  { partNumber: 'RP241', name: 'CDI Unit', vehicle: 'Hero puch', fileName: 'RP241 Cdi Unit For Hero puch .png' },
  { partNumber: 'RP242', name: 'CDI Unit', vehicle: 'Honda Eterno', fileName: 'RP242 Cdi Unit For Honda Eterno .png' },
  { partNumber: 'RP242AH', name: 'CDI Unit Fit', vehicle: 'Honda Unicorn Digital ', fileName: 'RP242AH CDI Unit Fit for Honda Unicorn Digital .png' },
  { partNumber: 'RP242AS', name: 'CDI Unit', vehicle: 'Honda shine cb shine ', fileName: 'RP242AS Cdi Unit For Honda shine cb shine .png' },
  { partNumber: 'RP243', name: 'CDI Unit', vehicle: 'Honda Activa 10 pin nm', fileName: 'RP243 Cdi Unit For Honda Activa 10 pin nm .png' },
  { partNumber: 'RP244', name: 'CDI Unit', vehicle: 'Hnd Activa 9 pin om', fileName: 'RP244 Cdi Unit For Hnd Activa 9 pin om .png' },
  { partNumber: 'RP244DR', name: 'CDI Unit', vehicle: 'Honda Activa Het 3g 7 pin', fileName: 'RP244DR Cdi Unit For Honda Activa Het 3g 7 pin .png' },
  { partNumber: 'RP244MR', name: 'CDI Unit', vehicle: 'Honda Activa 110cc 10 pin Maestro o m dio het', fileName: 'RP244MR Cdi Unit For Honda Activa 110cc 10 pin Maestro o m dio het .png' },
  { partNumber: 'RP244MT', name: 'CDI Unit', vehicle: 'Honda Dream Neo Het Dream Yuga het ', fileName: 'RP244MT Cdi Unit For Honda Dream Neo Het Dream Yuga het .png' },
  { partNumber: 'RP244RW', name: 'CDI Unit', vehicle: 'Hnd Activa 10 pin het 110cc', fileName: 'RP244RW Cdi Unit For Hnd Activa 10 pin het 110cc .png' },
  { partNumber: 'RP244WL', name: 'CDI Unit', vehicle: 'Honda Activa 7 pin Het 5g Bs4 2018', fileName: 'RP244WL Cdi Unit For Honda Activa 7 pin Het 5g Bs4 2018 .png' },
  { partNumber: 'RP244Z', name: 'CDI Unit', vehicle: 'Honda Activa het 125 10 pin', fileName: 'RP244Z Cdi Unit For Honda Activa het 125 10 pin .png' },
  { partNumber: 'RP245', name: 'CDI Unit', vehicle: 'Yamaha Crux libero yd 110 6 pins', fileName: 'RP245 Cdi Unit For Yamaha Crux libero yd 110 6 pins .png' },
  { partNumber: 'RP245RM', name: 'CDI Unit', vehicle: 'Yamaha Ybx 7 wire', fileName: 'RP245RM Cdi Unit For Yamaha Ybx 7 wire .png' },
  { partNumber: 'RP245RZ', name: 'CDI Unit', vehicle: 'Yamaha Ybx 8 wire', fileName: 'RP245RZ Cdi Unit For Yamaha Ybx 8 wire .png' },
  { partNumber: 'RP245WM', name: 'CDI Unit', vehicle: 'Yamaha Szr with rpm meter', fileName: 'RP245WM Cdi Unit For Yamaha Szr with rpm meter .png' },
  { partNumber: 'RP245WO', name: 'CDI Unit', vehicle: 'Yamaha Fz 16 Fzs Fazer new model', fileName: 'RP245WO Cdi Unit For Yamaha Fz 16 Fzs Fazer n m .png' },
  { partNumber: 'RP245WW', name: 'CDI Unit', vehicle: 'Yamaha Crux R Enticer Self Start 6 Pin Two Wheeler Bike Spare Parts', fileName: 'RP245WW CDI Unit for Yamaha Crux R Enticer Self Start 6 Pin Two Wheeler Bike Spare Parts .png' },
  { partNumber: 'RP245XO', name: 'CDI Unit', vehicle: 'Yamaha Rx 100', fileName: 'RP245XO Cdi Unit For Yamaha Rx 100 .png' },
  { partNumber: 'RP245XP', name: 'CDI Unit', vehicle: 'Yamaha Rxg 12v', fileName: 'RP245XP Cdi Unit For Yamaha Rxg 12v .png' },
];

/**
 * Image paths below use the exact filenames and extensions in the latest
 * `cdi unit.zip` (73 image files). Keep the ZIP images in:
 * public/cdi unit/
 */
export const cdiUnitProducts: CdiUnitProduct[] = cdiUnitProductFiles.map(
  ({ fileName, ...product }) => {
    // Encode spaces and special characters while preserving the exact filename.
    const image = encodeURI(`/cdi unit/${fileName}`);

    return {
      ...product,
      image,
      thumbnail: image,
    };
  }
);
