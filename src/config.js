import heroImage from './assets/pharmacy/hero-pharmacy.png';
import pharmacistAssistanceImage from './assets/pharmacy/pharmacist-assistance.png';
import pharmacyBannerImage from './assets/pharmacy/pharmacy-banner.png';

// Business configuration
export const config = {
  // Business Information
  businessName: 'MEDIGENIX PHARMA',
  businessType: 'Chemist & Druggist',
  tagline: 'Professional pharmacy service in Hyderabad.',
  established: 'June 13, 2023',
  establishedShort: '2023',

  // Contact Information - EDIT THESE
  phone: '+91-63012-89943',
  email: 'support@medigenixpharma.in',
  whatsapp: '+91-63012-89943',
  
  // Business Hours - EDIT THESE
  hours: {
    mon_fri: '9:00 AM - 8:00 PM',
    sat: '9:00 AM - 6:00 PM',
    sun: 'Closed',
  },

  // Address
  address: {
    businessName: 'MEDIGENIX PHARMA',
    street: '18-13-9/78',
    area: 'Bandlaguda',
    circle: 'Chandrayangutta, Circle 1',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '',
    country: 'India',
  },

  // Registration Details
  registration: {
    number: 'SEA/HYD/ACL/A4/1309294/2026',
    registeredDate: '11 April 2026',
    businessType: 'Chemist & Druggist',
    act: 'Telangana Shops & Establishments Act, 1988',
  },

  // Maps Configuration
  maps: {
    placeName: 'MEDIGENIX PHARMA, Bandlaguda, Hyderabad',
    // Update with actual coordinates when available
    latitude: 17.3850,
    longitude: 78.5205,
  },

  // Local image assets - no external image service is required.
  images: {
    hero: heroImage,
    about: pharmacistAssistanceImage,
    services: pharmacistAssistanceImage,
    photoBanner: pharmacyBannerImage,
    prescription: pharmacistAssistanceImage,
    whyChoose: heroImage,
    contactCta: pharmacyBannerImage,
  },

  // Social Links (if needed)
  social: {
    whatsapp: 'https://wa.me/',
    facebook: '#',
    instagram: '#',
  },

  // SEO
  seo: {
    title: 'MEDIGENIX PHARMA | Trusted Pharmacy in Hyderabad',
    description: 'MEDIGENIX PHARMA is a chemist and druggist in Bandlaguda, Chandrayangutta, Hyderabad, providing professional pharmacy services and customer assistance.',
    keywords: 'pharmacy, chemist, druggist, Hyderabad, Bandlaguda, Chandrayangutta, prescription, medicine enquiry',
  },
};

// Service cards data
export const services = [
  {
    id: 1,
    icon: 'Pill',
    title: 'Medicine Enquiry',
    description: 'Need to check a medicine or make a pharmacy-related enquiry? Contact our team and share the details of your request.',
    cta: 'Make an Enquiry',
  },
  {
    id: 2,
    icon: 'ClipboardList',
    title: 'Prescription Enquiry',
    description: 'Submit your prescription through our enquiry form for pharmacy review.',
    cta: 'Submit Prescription',
  },
  {
    id: 3,
    icon: 'Heart',
    title: 'OTC Assistance',
    description: 'Get assistance with general over-the-counter product enquiries.',
    cta: 'Ask Us',
  },
  {
    id: 4,
    icon: 'Stethoscope',
    title: 'Healthcare Enquiries',
    description: 'Have a general pharmacy or healthcare product enquiry? We\'re here to help.',
    cta: 'Contact Us',
  },
  {
    id: 5,
    icon: 'Headphones',
    title: 'Customer Support',
    description: 'Reach out to our team for questions, requests, or assistance.',
    cta: 'Talk to Us',
  },
  {
    id: 6,
    icon: 'MessageCircle',
    title: 'General Pharmacy Assistance',
    description: 'Convenient communication for customers looking for pharmacy-related assistance.',
    cta: 'Get in Touch',
  },
];

// Why choose us features
export const whyChooseUs = [
  {
    icon: 'MapPin',
    title: 'Local & Accessible',
    description: 'Located in Bandlaguda, Chandrayangutta, Hyderabad.',
  },
  {
    icon: 'Calendar',
    title: 'Established',
    description: 'Serving customers since 2023.',
  },
  {
    icon: 'Users',
    title: 'Customer Focused',
    description: 'Designed around convenient and clear customer communication.',
  },
  {
    icon: 'CheckCircle',
    title: 'Professional Approach',
    description: 'A clean and professional pharmacy experience.',
  },
];

// Trust strip items
export const trustItems = [
  {
    number: '01',
    title: 'Serving Since 2023',
  },
  {
    number: '02',
    title: 'Local Hyderabad Pharmacy',
  },
  {
    number: '03',
    title: 'Customer-Focused Service',
  },
  {
    number: '04',
    title: 'Registered Establishment',
  },
];

// Approach cards
export const approachCards = [
  {
    icon: 'User',
    title: 'Customer First',
    description: 'Making pharmacy enquiries and communication simple, clear and convenient.',
  },
  {
    icon: 'Award',
    title: 'Professional Service',
    description: 'Providing a clean and professional environment for pharmacy-related assistance.',
  },
  {
    icon: 'Globe',
    title: 'Community Focused',
    description: 'Serving customers in and around Bandlaguda and Chandrayangutta, Hyderabad.',
  },
];
