export interface BatteryWireProduct {
  partNumber: string;
  name: string;
  vehicle: string;
  description: string;
  image: string;
}

// Image paths match the short filenames inside public/battery-wire.
export const batteryWireProducts: BatteryWireProduct[] = [
  {
    partNumber: 'RP379',
    name: 'Battery Wire - Negative OE',
    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    description: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    image: '/battery-wire/RP379-negative.png',
  },
  {
    partNumber: 'RP379',
    name: 'Battery Wire - Positive OE Type',
    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    description: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    image: '/battery-wire/RP379-positive.png',
  },
  {
    partNumber: 'RP379F',
    name: 'Battery Wire - To Relay Positive',
    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3 / UG4',
    description: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3 / UG4',
    image: '/battery-wire/RP379F-relay.png',
  },
  {
    partNumber: 'RP379S',
    name: 'Battery Wire - Digital Meter Negative OE Type',
    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    description: 'Bajaj Pulsar 150 / 180 DTS-i ES UG3',
    image: '/battery-wire/RP379S-negative.png',
  },
  {
    partNumber: 'RP381',
    name: 'Battery Wire - To Relay',
    vehicle: 'Bajaj Pulsar 150 / 180 DTS-i LS / 135cc ES',
    description: 'Bajaj Pulsar 150 / 180 DTS-i LS / 135cc ES',
    image: '/battery-wire/RP381-relay.png',
  },
  {
    partNumber: 'RP382D',
    name: 'Battery Wire - Negative',
    vehicle: 'Bajaj Discover DTS-i ES 150cc',
    description: 'Bajaj Discover DTS-i ES 150cc',
    image: '/battery-wire/RP382D-negative.png',
  },
  {
    partNumber: 'RP383',
    name: 'Battery Wire - Positive',
    vehicle: 'Bajaj Discover DTS-i 135cc ES Disc Brake',
    description: 'Bajaj Discover DTS-i 135cc ES Disc Brake',
    image: '/battery-wire/RP383-discover.png',
  },
  {
    partNumber: 'RP383',
    name: 'Battery Wire - Positive',
    vehicle: 'Honda Shine 125cc ES / Unicorn',
    description: 'Honda Shine 125cc ES / Unicorn',
    image: '/battery-wire/RP383-shine.png',
  },
  {
    partNumber: 'RP383A',
    name: 'Battery Wire - To Relay Positive',
    vehicle: 'Bajaj Discover DTS-i ES 125cc / 135cc Disc Brake',
    description: 'Bajaj Discover DTS-i ES 125cc / 135cc Disc Brake',
    image: '/battery-wire/RP383A-relay.png',
  },
  {
    partNumber: 'RP383MT',
    name: 'Battery Wire - Negative & Positive Pair',
    vehicle: 'Honda Activa New Model',
    description: 'Honda Activa New Model',
    image: '/battery-wire/RP383MT-activa.png',
  },
  {
    partNumber: 'RP383RL',
    name: 'Battery Wire - To Relay Positive',
    vehicle: 'Hero Honda Glamour ES / Super Splendor ES',
    description: 'Hero Honda Glamour ES / Super Splendor ES',
    image: '/battery-wire/RP383RL-relay.png',
  },
  {
    partNumber: 'RP383ZM',
    name: 'Battery Wire - To Relay Positive',
    vehicle: 'Hero Honda Hunk 150 ES / CBZ Xtreme 150 ES',
    description: 'Hero Honda Hunk 150 ES / CBZ Xtreme 150 ES',
    image: '/battery-wire/RP383ZM-relay.png',
  },
];
