export type ListingType = 'stay' | 'car' | 'boat';

export interface BaseListing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: ListingType;
  category: string; // e.g., "Luxury", "SUV", "Yacht"
  amenities: string[];
  recentReview?: string;
}

export interface StayListing extends BaseListing {
  type: 'stay';
  guests: number;
  bedrooms: number;
  bathrooms: number;
}

export interface CarListing extends BaseListing {
  type: 'car';
  passengers: number;
  transmission: 'Automatic' | 'Manual';
  driverIncluded: boolean;
}

export interface BoatListing extends BaseListing {
  type: 'boat';
  capacity: number;
  lengthFt: number;
  crewIncluded: boolean;
}

export type ListingItem = StayListing | CarListing | BoatListing;

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
