export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  typicalTime: string;
  startingPrice: number;
  unit: string;
  features: string[];
  recommendedFrequency: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'patio' | 'driveway' | 'decking' | 'lichen' | 'walls';
  location: string;
  surface: string;
  image: string;
  beforeDesc: string;
  afterDesc: string;
  areaSize: string;
  turnaround: string;
  technique: string;
}

export interface BookingFormData {
  serviceId: string;
  propertyType: 'detached' | 'semi-detached' | 'terraced' | 'bungalow' | 'commercial';
  areaSizeSqm: number;
  surfaceType: string;
  addons: string[];
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'anytime';
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  postcode: string;
  addressLine: string;
  notes: string;
  hasOutdoorTap: 'yes' | 'no' | 'unsure';
}

export interface BookingConfirmation {
  referenceCode: string;
  timestamp: string;
  data: BookingFormData;
  estimatedTotal: number;
}
