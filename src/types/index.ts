export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  installationSteps: string[];
  warranty: string;
  downloadablePDFs: {
    name: string;
    url: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  projectType: 'residential' | 'commercial' | 'industrial';
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
}

export interface Contractor {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  experience: string;
  license: string;
  insurance: string;
  projectTypes: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}
