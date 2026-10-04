export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  features?: string[];
}

export interface BeforeAfterTreatment {
  id: string;
  name: string;
  badge: string;
  description: string;
  thumbnail: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  details: string;
}

export interface BlogItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    category: 'Restorative',
    features: ['Titanium root fusion', 'Natural chewing power', 'Lifetime durability']
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your natural smile',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    category: 'Aesthetics',
    features: ['Porcelain veneers', 'Laser contouring', 'Color matching']
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten teeth for a beautiful smile',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    category: 'Alignment',
    features: ['Invisible aligners', 'Digital 3D simulation', 'Gentle shifting']
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle care for healthy smiles',
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=800&q=80',
    category: 'Preventative',
    features: ['Pain-free checkups', 'Fluoride shielding', 'Kid-friendly comfort']
  }
];

export const BEFORE_AFTER_TREATMENTS: BeforeAfterTreatment[] = [
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    badge: 'Laser Whitening',
    description: 'Professional in-clinic zoom laser whitening lifting deep stubborn enamel stains by up to 8 shades in just 45 minutes.',
    thumbnail: '/images/treatments/whitening-after.jpg',
    beforeImage: '/images/treatments/whitening-before.jpg',
    afterImage: '/images/treatments/whitening-after.jpg',
    beforeLabel: 'Before: Stained Enamel (Shade A3.5)',
    afterLabel: 'After: Laser Whitened (Shade B1)',
    details: 'Custom gentle hydrogen peroxide gel activated with cold LED light to preserve enamel sensitivity.'
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    badge: 'Tooth Replacement',
    description: 'Seamless titanium-post tooth replacement with biocompatible custom porcelain crown that matches surrounding dentition.',
    thumbnail: '/images/treatments/implant-after.jpg',
    beforeImage: '/images/treatments/implant-before.jpg',
    afterImage: '/images/treatments/implant-after.jpg',
    beforeLabel: 'Before: Missing Tooth Gap',
    afterLabel: 'After: Permanent Implant Crown',
    details: 'Guided surgical navigation ensures 99.4% long-term integration with zero bone deterioration.'
  },
  {
    id: 'aligners',
    name: 'Clear Aligners',
    badge: 'Orthodontics',
    description: 'Discreet, custom-molded medical polyurethane aligners that gently guide teeth into optimal aesthetic alignment.',
    thumbnail: '/images/treatments/aligners-after.jpg',
    beforeImage: '/images/treatments/aligners-before.jpg',
    afterImage: '/images/treatments/aligners-after.jpg',
    beforeLabel: 'Before: Crowded Malocclusion',
    afterLabel: 'After: Aligned Harmonic Arch',
    details: 'Average transformation completed within 6 to 9 months with zero metal brackets or discomfort.'
  },
  {
    id: 'veneers',
    name: 'Porcelain Veneers',
    badge: 'Smile Design',
    description: 'Ultra-thin, handcrafted porcelain veneers designed to correct chips, irregular gaps, and deep enamel disfigurations.',
    thumbnail: '/images/treatments/veneers-after.jpg',
    beforeImage: '/images/treatments/veneers-before.jpg',
    afterImage: '/images/treatments/veneers-after.jpg',
    beforeLabel: 'Before: Chipped Edges & Gap',
    afterLabel: 'After: Custom Porcelain Veneers',
    details: 'Preserves 95% of healthy natural tooth structure while creating a balanced Hollywood smile.'
  }
];

export const SAFETY_ITEMS = [
  {
    id: 'sterilization',
    title: 'Sterilization Protocols',
    subtitle: 'Class-B Autoclave',
    description: 'Medical-grade multi-stage vacuum sterilization for all dental instruments.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck'
  },
  {
    id: 'technology',
    title: 'Advanced Technology',
    subtitle: '3D CBCT Imaging',
    description: 'Ultra-low radiation 3D cone-beam computed tomography and AI scanning.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    iconName: 'Cpu'
  },
  {
    id: 'environment',
    title: 'Clean & Safe Environment',
    subtitle: 'HEPA 14 Filtration',
    description: 'Continuously filtered negative-pressure surgical operatories.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles'
  },
  {
    id: 'comfort',
    title: 'Patient Comfort',
    subtitle: 'Ergonomic Suites',
    description: 'Memory foam heated dental chairs with ambient noise reduction.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile'
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: '1',
    date: 'Aug 12, 2024',
    category: 'Dental Health',
    title: '5 Tips for Healthier Teeth Everyday',
    summary: 'Discover daily preventive habits that prevent enamel erosion, plaque buildup, and maintain fresh breath all day.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: '2',
    date: 'Aug 05, 2024',
    category: 'Orthodontics',
    title: 'Are Clear Aligners Right for You?',
    summary: 'An honest clinical comparison between invisible aligners and traditional orthodontics for modern lifestyle compatibility.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: '3',
    date: 'Jul 28, 2024',
    category: 'Oral Care',
    title: 'How to Choose the Right Toothbrush',
    summary: 'Electric sonic brushes versus manual ultra-soft bristle designs: what dentist science actually recommends.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'Is the treatment painful?',
    answer: 'Most procedures are comfortable and virtually painless. We utilize computer-guided micro-anesthesia, gentle topical numbing gels, and modern minimally invasive techniques to guarantee complete patient comfort throughout your visit.'
  },
  {
    id: '2',
    question: 'How long does a dental implant take?',
    answer: 'A standard implant procedure takes 45 to 60 minutes. After initial bone integration (typically 8 to 12 weeks), your permanent custom porcelain crown is placed. Same-day immediate load options are also available for eligible candidates.'
  },
  {
    id: '3',
    question: 'Do you offer payment plans?',
    answer: 'Yes! We believe quality oral healthcare should be accessible to everyone. We offer 0% interest flexible EMI financing plans over 3, 6, or 12 months, and accept all major insurance providers with direct cashless claims assistance.'
  },
  {
    id: '4',
    question: 'How often should I visit the dentist?',
    answer: 'We recommend routine preventive cleaning and diagnostic evaluations every 6 months. Regular maintenance detects potential enamel demineralization, micro-cavities, and gum concerns long before they cause discomfort.'
  },
  {
    id: '5',
    question: 'Is teeth whitening safe?',
    answer: 'Yes, clinical laser and custom-tray whitening administered by certified dentists are completely safe for enamel. Our pH-balanced formulas protect your dentin tubules to ensure zero lasting tooth sensitivity.'
  }
];
