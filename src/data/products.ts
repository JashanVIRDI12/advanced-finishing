import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'reflective-shield-elite',
    name: 'Reflective Shield Elite',
    category: 'reflective-insulation',
    description: 'Premium multi-layer reflective insulation system designed for maximum thermal performance in residential and commercial applications.',
    shortDescription: 'Advanced reflective insulation with 99% radiant barrier efficiency.',
    images: [
      '/images/products/reflective-shield-elite-1.jpg',
      '/images/products/reflective-shield-elite-2.jpg',
      '/images/products/reflective-shield-elite-3.jpg'
    ],
    features: [
      '99% radiant barrier efficiency',
      'Multi-layer construction',
      'Class 1 fire rated',
      'Moisture resistant',
      'Easy installation',
      '25-year warranty'
    ],
    specifications: {
      'R-Value': 'R-15.67 (vertical)',
      'Thickness': '5/16 inch',
      'Width': '48 inches',
      'Length': '125 feet',
      'Weight': '72 lbs per roll',
      'Material': 'Aluminum foil + polyethylene bubbles',
      'Fire Rating': 'Class 1 / ASTM E84',
      'Perforation': 'Micro-perforated for breathability'
    },
    applications: [
      'Attic insulation',
      'Wall systems',
      'Metal buildings',
      'Crawl spaces',
      'Garages',
      'Basements'
    ],
    installationSteps: [
      'Measure installation area',
      'Cut material to size',
      'Install with foil side facing air space',
      'Staple or tape seams',
      'Ensure proper ventilation',
      'Inspect for gaps or tears'
    ],
    warranty: '25-year limited warranty against material defects and degradation',
    downloadablePDFs: [
      {
        name: 'Technical Data Sheet',
        url: '/docs/reflective-shield-elite-tds.pdf'
      },
      {
        name: 'Installation Guide',
        url: '/docs/reflective-shield-elite-install.pdf'
      },
      {
        name: 'Warranty Information',
        url: '/docs/reflective-shield-elite-warranty.pdf'
      }
    ],
    seo: {
      title: 'Reflective Shield Elite - Premium Reflective Insulation',
      description: 'Discover Reflective Shield Elite, our premium multi-layer reflective insulation with 99% radiant barrier efficiency for residential and commercial applications.',
      keywords: ['reflective insulation', 'radiant barrier', 'attic insulation', 'thermal insulation']
    }
  },
  {
    id: 'thermal-guard-pro',
    name: 'Thermal Guard Pro',
    category: 'bubble-insulation',
    description: 'Professional-grade bubble insulation ideal for metal buildings, warehouses, and agricultural structures.',
    shortDescription: 'Heavy-duty bubble insulation for commercial and agricultural applications.',
    images: [
      '/images/products/thermal-guard-pro-1.jpg',
      '/images/products/thermal-guard-pro-2.jpg'
    ],
    features: [
      'Double bubble construction',
      'Heavy-duty durability',
      'Superior tear resistance',
      'UV protection',
      'Cost-effective solution',
      '15-year warranty'
    ],
    specifications: {
      'R-Value': 'R-4.2 (vertical)',
      'Thickness': '3/8 inch',
      'Width': '48 inches',
      'Length': '125 feet',
      'Weight': '85 lbs per roll',
      'Material': 'Polyethylene bubbles + aluminum foil',
      'Fire Rating': 'Class 1 / ASTM E84',
      'UV Protection': 'UV stabilized outer layer'
    },
    applications: [
      'Metal buildings',
      'Warehouses',
      'Agricultural buildings',
      'Post frame construction',
      'Sheds',
      'Outbuildings'
    ],
    installationSteps: [
      'Prepare surface area',
      'Roll out insulation',
      'Secure with fasteners',
      'Overlap seams 2-3 inches',
      'Tape all seams',
      'Install finish materials'
    ],
    warranty: '15-year limited warranty against material defects',
    downloadablePDFs: [
      {
        name: 'Technical Data Sheet',
        url: '/docs/thermal-guard-pro-tds.pdf'
      },
      {
        name: 'Installation Guide',
        url: '/docs/thermal-guard-pro-install.pdf'
      }
    ],
    seo: {
      title: 'Thermal Guard Pro - Commercial Bubble Insulation',
      description: 'Thermal Guard Pro offers heavy-duty bubble insulation perfect for metal buildings, warehouses, and agricultural structures.',
      keywords: ['bubble insulation', 'commercial insulation', 'metal building insulation']
    }
  },
  {
    id: 'eco-shield-basics',
    name: 'Eco Shield Basics',
    category: 'reflective-insulation',
    description: 'Affordable single-sided reflective insulation for budget-conscious projects without compromising quality.',
    shortDescription: 'Budget-friendly reflective insulation with reliable performance.',
    images: [
      '/images/products/eco-shield-basics-1.jpg'
    ],
    features: [
      'Single-sided foil',
      'Economical solution',
      'Easy to handle',
      'Lightweight design',
      'Basic protection',
      '10-year warranty'
    ],
    specifications: {
      'R-Value': 'R-3.5 (vertical)',
      'Thickness': '1/4 inch',
      'Width': '48 inches',
      'Length': '125 feet',
      'Weight': '45 lbs per roll',
      'Material': 'Single-sided aluminum foil + polyethylene',
      'Fire Rating': 'Class 1 / ASTM E84',
      'Design': 'Single-sided reflective'
    },
    applications: [
      'DIY projects',
      'Small sheds',
      'Garage workshops',
      'Attic retrofit',
      'Budget renovations',
      'Temporary insulation'
    ],
    installationSteps: [
      'Clean installation area',
      'Measure and cut material',
      'Install with foil side facing heat source',
      'Secure with staples or tape',
      'Check for complete coverage'
    ],
    warranty: '10-year limited warranty against material defects',
    downloadablePDFs: [
      {
        name: 'Installation Guide',
        url: '/docs/eco-shield-basics-install.pdf'
      }
    ],
    seo: {
      title: 'Eco Shield Basics - Affordable Reflective Insulation',
      description: 'Eco Shield Basics provides budget-friendly reflective insulation for DIY projects and renovations.',
      keywords: ['affordable insulation', 'DIY insulation', 'budget reflective insulation']
    }
  }
];

export const productCategories = [
  {
    id: 'reflective-insulation',
    name: 'Reflective Insulation',
    description: 'Multi-layer reflective barriers for maximum thermal performance'
  },
  {
    id: 'bubble-insulation',
    name: 'Bubble Insulation',
    description: 'Durable bubble insulation for commercial and agricultural applications'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Installation accessories and complementary products'
  }
];
