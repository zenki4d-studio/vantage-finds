import { Product } from './types';

// Curated Pexels Images (Alternative High-Availability Source)
export const HERO_IMAGES = {
  // Spacious Minimalist Living Room
  main: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600", 
  // Aesthetic Chair Detail
  sideTop: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800", 
  // Cozy Decor/Interior
  sideBottom: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=800" 
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Celebrate your space with VANTAGE 01",
    subtitle: "Minimalist furniture for modern living",
    cta: "SHOP NOW",
    color: "text-white"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Tech for your Home",
    subtitle: "Upgrade your lifestyle with smart electronics",
    cta: "DISCOVER MORE",
    color: "text-white"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Kitchen Essentials",
    subtitle: "Cook with style and precision",
    cta: "BROWSE KITCHEN",
    color: "text-white"
  }
];

export const SIDEBAR_CATEGORIES = [
  {
    title: "Trending",
    items: ["Best Sellers", "New Releases", "Movers & Shakers"]
  },
  {
    title: "Shop By Department",
    items: ["Furniture", "Household", "Electronics", "Kitchen", "Decor", "Smart Home", "Arts & Crafts"]
  }
];

export const CATEGORIES = [
  "All",
  "Furniture",
  "Household",
  "Electronics",
  "Kitchen",
  "Decor"
];

export const PRODUCTS: Product[] = [
  // Furniture
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: "$491.15",
    originalPrice: "$691.15",
    description: "Grey fabric armchair with modern wooden legs",
    category: "Furniture",
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example1",
    rating: 4.9,
    soldCount: 15,
    isNew: true
  },
  {
    id: "2",
    name: "Minimalist Accent Chair",
    price: "$230.50",
    originalPrice: "$310.00",
    description: "Sleek design with comfortable cushioning",
    category: "Furniture",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example2",
    rating: 4.8,
    soldCount: 32,
    isNew: true
  },
  {
    id: "3",
    name: "Rattan Dining Chair",
    price: "$89.50",
    description: "Natural rattan weave with durable frame",
    category: "Furniture",
    image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example3",
    rating: 4.6,
    soldCount: 8,
  },
  {
    id: "4",
    name: "Nordic Coffee Table",
    price: "$129.00",
    originalPrice: "$150.00",
    description: "Simple wooden round table for living spaces",
    category: "Furniture",
    image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example4",
    rating: 4.9,
    soldCount: 45,
  },
  // Household
  {
    id: "5",
    name: "Smart Robot Vacuum",
    price: "$299.00",
    originalPrice: "$399.00",
    description: "Automatic cleaning with mapping technology",
    category: "Household",
    image: "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example5",
    rating: 4.7,
    soldCount: 120,
    isNew: true
  },
  {
    id: "6",
    name: "Air Purifier",
    price: "$149.99",
    description: "HEPA filter for clean and fresh air",
    category: "Household",
    image: "https://images.pexels.com/photos/3608981/pexels-photo-3608981.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3608981/pexels-photo-3608981.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example6",
    rating: 4.8,
    soldCount: 85,
  },
  // Electronics
  {
    id: "7",
    name: "Wireless Headphones",
    price: "$199.00",
    originalPrice: "$249.00",
    description: "Noise-cancelling over-ear headphones",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example7",
    rating: 4.9,
    soldCount: 200,
    isNew: true
  },
  {
    id: "8",
    name: "Smart Home Speaker",
    price: "$89.99",
    description: "Voice-controlled assistant for your home",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example8",
    rating: 4.5,
    soldCount: 150,
  },
  // Kitchen
  {
    id: "9",
    name: "Espresso Machine",
    price: "$450.00",
    originalPrice: "$599.00",
    description: "Professional grade coffee maker",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example9",
    rating: 4.9,
    soldCount: 60,
  },
  {
    id: "10",
    name: "Ceramic Cookware Set",
    price: "$129.99",
    description: "Non-stick pots and pans set",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4259141/pexels-photo-4259141.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4259142/pexels-photo-4259142.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example10",
    rating: 4.6,
    soldCount: 90,
  },
  // Decor
  {
    id: "11",
    name: "Minimalist Wall Clock",
    price: "$45.00",
    description: "Silent movement with modern design",
    category: "Decor",
    image: "https://images.pexels.com/photos/210558/pexels-photo-210558.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/210558/pexels-photo-210558.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example11",
    rating: 4.4,
    soldCount: 40,
  },
  {
    id: "12",
    name: "Table Lamp",
    price: "$65.00",
    description: "Warm light for cozy atmosphere",
    category: "Decor",
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amazonLink: "https://www.amazon.com/dp/example12",
    rating: 4.7,
    soldCount: 110,
  }
];

export const DISCLAIMER_TEXT = "VANTAGE FINDS is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.";