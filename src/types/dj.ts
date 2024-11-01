export interface DJ {
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    region: string;
  };
  specialties: string[];
  website: string;
  priceRange: string;
  yearsInBusiness: number;
  rating: number;
}