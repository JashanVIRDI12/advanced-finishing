import { Location } from '@/types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'XPERT Insulation Supply - Toronto',
    address: '123 Maple Street',
    city: 'Toronto',
    state: 'ON',
    zipCode: 'M5V 2T6',
    phone: '(416) 555-0101',
    email: 'toronto@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/toronto',
    coordinates: {
      lat: 43.6532,
      lng: -79.3832
    },
    services: ['Residential Insulation', 'Commercial Insulation', 'Delivery Service', 'Technical Support']
  },
  {
    id: '2',
    name: 'XPERT Insulation Supply - Vancouver',
    address: '456 Pacific Blvd',
    city: 'Vancouver',
    state: 'BC',
    zipCode: 'V6B 5E7',
    phone: '(604) 555-0202',
    email: 'vancouver@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/vancouver',
    coordinates: {
      lat: 49.2827,
      lng: -123.1207
    },
    services: ['Commercial Insulation', 'Industrial Solutions', 'Bulk Orders', 'Installation Services']
  },
  {
    id: '3',
    name: 'XPERT Insulation Supply - Montreal',
    address: '789 Rue Sainte-Catherine',
    city: 'Montreal',
    state: 'QC',
    zipCode: 'H3B 1A2',
    phone: '(514) 555-0303',
    email: 'montreal@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/montreal',
    coordinates: {
      lat: 45.5017,
      lng: -73.5673
    },
    services: ['Residential Insulation', 'Radiant Barriers', 'Energy Audits', 'DIY Support']
  },
  {
    id: '4',
    name: 'XPERT Insulation Supply - Calgary',
    address: '101 9th Ave SW',
    city: 'Calgary',
    state: 'AB',
    zipCode: 'T2P 1K3',
    phone: '(403) 555-0404',
    email: 'calgary@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/calgary',
    coordinates: {
      lat: 51.0447,
      lng: -114.0719
    },
    services: ['Commercial Insulation', 'Green Building Solutions', 'Code Compliance', 'Project Consulting']
  },
  {
    id: '5',
    name: 'XPERT Insulation Supply - Ottawa',
    address: '202 Wellington St',
    city: 'Ottawa',
    state: 'ON',
    zipCode: 'K1P 5A4',
    phone: '(613) 555-0505',
    email: 'ottawa@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/ottawa',
    coordinates: {
      lat: 45.4215,
      lng: -75.6972
    },
    services: ['Residential Insulation', 'Winterization', 'Weatherization', 'Energy Efficiency']
  },
  {
    id: '6',
    name: 'XPERT Insulation Supply - Halifax',
    address: '303 Spring Garden Rd',
    city: 'Halifax',
    state: 'NS',
    zipCode: 'B3J 3G6',
    phone: '(902) 555-0606',
    email: 'halifax@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/halifax',
    coordinates: {
      lat: 44.6488,
      lng: -63.5752
    },
    services: ['Coastal Solutions', 'Moisture Control', 'Commercial Insulation']
  },
  {
    id: '7',
    name: 'XPERT Insulation Supply - Edmonton',
    address: '404 Jasper Ave',
    city: 'Edmonton',
    state: 'AB',
    zipCode: 'T5J 1W8',
    phone: '(780) 555-0707',
    email: 'edmonton@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/edmonton',
    coordinates: {
      lat: 53.5444,
      lng: -113.4909
    },
    services: ['Cold Climate Solutions', 'Residential Insulation', 'Commercial Insulation', 'Technical Support']
  },
  {
    id: '8',
    name: 'XPERT Insulation Supply - Winnipeg',
    address: '505 Portage Ave',
    city: 'Winnipeg',
    state: 'MB',
    zipCode: 'R3B 2E9',
    phone: '(204) 555-0808',
    email: 'winnipeg@xpertinsulation.ca',
    website: 'www.xpertinsulation.ca/winnipeg',
    coordinates: {
      lat: 49.8951,
      lng: -97.1384
    },
    services: ['Residential Insulation', 'Commercial Insulation', 'Humidity Control', 'Energy Audits']
  }
];

export const states = [
  { code: 'ON', name: 'Ontario' },
  { code: 'BC', name: 'British Columbia' },
  { code: 'QC', name: 'Quebec' },
  { code: 'AB', name: 'Alberta' },
  { code: 'NS', name: 'Nova Scotia' },
  { code: 'MB', name: 'Manitoba' }
];
