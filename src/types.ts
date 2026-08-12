export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'nails' | 'waxing' | 'makeup';
  description: string;
  startingPrice: string;
  popular?: boolean;
  image: string;
  duration?: string;
  includes?: string[];
}

export interface HairDealLengthOption {
  length: string;
  thinPrice: string;
  thickPrice: string;
}

export interface DealItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'facial' | 'waxing';
  tagline?: string;
  price?: string;
  originalPrice?: string;
  features: string[];
  options?: HairDealLengthOption[];
  badge?: string;
  popular?: boolean;
  image?: string;
}

export interface FacialPackage {
  id: string;
  title: string;
  price: string;
  badge: string;
  features: string[];
  description: string;
  popular?: boolean;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'nailbar' | 'hair' | 'spa' | 'makeup';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  serviceMentioned?: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
