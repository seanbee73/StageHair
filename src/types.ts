export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'color' | 'perm' | 'treatments' | 'styling' | 'extensions';
  price: string;
  priceMen?: string;
  priceWomen?: string;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  chineseRole?: string;
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
  instagram: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'color' | 'cuts' | 'styling' | 'studio' | 'treatments';
  image: string;
  stylist?: string;
  description?: string;
}

export interface SocialPost {
  id: string;
  image: string;
  caption: string;
  stylist: string;
  likes: number;
  comments: number;
  tags: string[];
  serviceName: string;
}

export interface ReviewItem {
  id: string;
  initial: string;
  author: string;
  service: string;
  rating: number;
  content: string;
  date: string;
}

export interface BookingState {
  serviceId: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isNewClient: boolean;
  notes: string;
}
