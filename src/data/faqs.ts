import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the difference between reflective insulation and traditional insulation?',
    answer: 'Reflective insulation works by reflecting radiant heat rather than absorbing it, while traditional insulation (like fiberglass) slows down conductive and convective heat flow. Reflective insulation is particularly effective in hot climates and for blocking radiant heat transfer, while traditional insulation is better for preventing conductive heat loss. For optimal performance, both types can be used together in a comprehensive insulation system.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How much can I save on my energy bills with reflective insulation?',
    answer: 'Energy savings vary depending on your climate, building type, and installation quality. Most homeowners report savings of 10-30% on cooling costs and 5-15% on heating costs. In hot climates, savings can be even higher. The payback period is typically 2-5 years, making it a cost-effective investment in your home\'s energy efficiency.',
    category: 'Energy Savings'
  },
  {
    id: '3',
    question: 'Can I install reflective insulation myself?',
    answer: 'Yes, many of our products are designed for DIY installation. Basic installation requires common tools like a utility knife, staple gun, and measuring tape. However, for complex projects or if you\'re not comfortable working in attic spaces, we recommend professional installation. Always follow the installation guidelines and safety precautions provided with your product.',
    category: 'Installation'
  },
  {
    id: '4',
    question: 'Do I need to leave an air gap with reflective insulation?',
    answer: 'Yes, an air gap is essential for reflective insulation to work effectively. The reflective surface needs at least 3/4 inch of air space on one side to reflect radiant heat. Without this air gap, the reflective properties are significantly reduced. Always install according to the manufacturer\'s guidelines to ensure proper air spacing.',
    category: 'Installation'
  },
  {
    id: '5',
    question: 'Is reflective insulation fire-resistant?',
    answer: 'Our reflective insulation products are Class 1 fire rated according to ASTM E84 standards, which is the highest fire rating available for building materials. They have a low flame spread and smoke development rating. However, always check local building codes as requirements may vary by region and application type.',
    category: 'Safety'
  },
  {
    id: '6',
    question: 'Can reflective insulation cause moisture problems?',
    answer: 'When properly installed, reflective insulation does not cause moisture problems. In fact, many of our products are moisture-resistant and can help prevent condensation. Some products are perforated to allow vapor transmission. Always ensure proper ventilation in your attic or wall cavities and follow local building codes regarding vapor barriers.',
    category: 'Moisture'
  },
  {
    id: '7',
    question: 'What R-value does reflective insulation provide?',
    answer: 'The R-value of reflective insulation depends on the installation method and application. When installed with proper air gaps, our products typically provide R-3 to R-16. The actual performance is often better than the rated R-value suggests because reflective insulation primarily works by reflecting heat rather than just resisting heat flow.',
    category: 'Technical'
  },
  {
    id: '8',
    question: 'How long does reflective insulation last?',
    answer: 'Our reflective insulation products are designed for long-term performance. Most come with warranties ranging from 10 to 25 years. The materials are resistant to moisture, mildew, and UV degradation when properly installed. With proper installation and protection from physical damage, reflective insulation can last the lifetime of your building.',
    category: 'Durability'
  },
  {
    id: '9',
    question: 'Can reflective insulation be used in walls?',
    answer: 'Yes, reflective insulation can be used in walls, but installation requirements differ from attic applications. In walls, it\'s typically installed in stud cavities with proper air gaps. It\'s particularly effective in walls that face direct sun exposure. Always follow building codes and manufacturer guidelines for wall installations.',
    category: 'Applications'
  },
  {
    id: '10',
    question: 'Is reflective insulation environmentally friendly?',
    answer: 'Yes, reflective insulation is environmentally friendly. It reduces energy consumption, lowering your carbon footprint. Many products are made from recycled materials and are themselves recyclable. The long lifespan and energy savings contribute to overall environmental benefits compared to traditional insulation materials.',
    category: 'Environmental'
  },
  {
    id: '11',
    question: 'What tools do I need for installation?',
    answer: 'Basic installation requires: utility knife or heavy-duty scissors, measuring tape, staple gun (1/4" or longer staples), foil tape for sealing seams, safety glasses, gloves, and a ladder for attic work. For larger projects, you may also need a straight edge for cutting, and safety barriers for attic flooring.',
    category: 'Installation'
  },
  {
    id: '12',
    question: 'Can reflective insulation help with soundproofing?',
    answer: 'While reflective insulation is not primarily designed for soundproofing, it does provide some sound reduction benefits. The multi-layer construction can help reduce noise transmission, particularly when installed in walls or ceilings. For dedicated soundproofing needs, we recommend combining reflective insulation with specialized acoustic materials.',
    category: 'Applications'
  },
  {
    id: '13',
    question: 'Do you offer installation services?',
    answer: 'Yes, we work with a network of certified installers and contractors across the country. Contact your local supply center for recommendations of qualified installers in your area. Our partners are trained in proper installation techniques to ensure maximum performance and warranty compliance.',
    category: 'Services'
  },
  {
    id: '14',
    question: 'What is the difference between single-sided and double-sided reflective insulation?',
    answer: 'Single-sided reflective insulation has one reflective surface and is typically used where only one side needs to reflect heat. Double-sided products have reflective surfaces on both sides and are ideal for applications where heat reflection is needed on both sides, such as in attics or walls. Double-sided products generally provide better overall performance but cost more.',
    category: 'Products'
  },
  {
    id: '15',
    question: 'Can reflective insulation be used in crawl spaces?',
    answer: 'Yes, reflective insulation is excellent for crawl space applications. It helps prevent moisture issues, reduces heat loss through the floor, and can make upper floors more comfortable. In crawl spaces, it\'s typically installed to the underside of floor joists with proper air gaps and moisture protection.',
    category: 'Applications'
  }
];

export const faqCategories = [
  { id: 'general', name: 'General', count: 1 },
  { id: 'energy-savings', name: 'Energy Savings', count: 1 },
  { id: 'installation', name: 'Installation', count: 3 },
  { id: 'safety', name: 'Safety', count: 1 },
  { id: 'moisture', name: 'Moisture', count: 1 },
  { id: 'technical', name: 'Technical', count: 1 },
  { id: 'durability', name: 'Durability', count: 1 },
  { id: 'applications', name: 'Applications', count: 3 },
  { id: 'environmental', name: 'Environmental', count: 1 },
  { id: 'services', name: 'Services', count: 1 },
  { id: 'products', name: 'Products', count: 1 }
];
