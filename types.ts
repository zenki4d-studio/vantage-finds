export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  category: string;
  image: string; // Direct URL for high-quality images
  images?: string[]; // Array of additional images
  amazonLink?: string; // Affiliate link
  rating: number;
  soldCount: number;
  isNew?: boolean;
}

export interface LinkItem {
  label: string;
  href: string;
}