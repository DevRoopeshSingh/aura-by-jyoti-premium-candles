import type { StaticImageData } from "next/image";
import diwaliCandle from "@/assets/diwali-candle.jpg";
import wellnessCandle from "@/assets/wellness-candle.jpg";
import heritageCandle from "@/assets/heritage-candle.jpg";
import giftCandle from "@/assets/gift-candle.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  description: string;
  features: string[];
  scent: string;
  burnTime: string;
  size: string;
}

export const products: Product[] = [
  {
    id: "diwali-lotus-1",
    name: "Lotus Diya Candle",
    price: 350,
    category: "diwali",
    image: diwaliCandle,
    description: "Celebrate the festival of lights with our handcrafted lotus-shaped candle. Infused with traditional Indian fragrances.",
    features: ["100% Natural Soy Wax", "Eco-Friendly", "Long-lasting", "Hand-poured"],
    scent: "Jasmine & Sandalwood",
    burnTime: "25-30 hours",
    size: "200g",
  },
  {
    id: "diwali-rangoli-2",
    name: "Rangoli Collection Set",
    price: 400,
    category: "diwali",
    image: diwaliCandle,
    description: "A beautiful set of colorful candles inspired by traditional rangoli patterns. Perfect for festive decorations.",
    features: ["Set of 5 candles", "Natural wax", "Vibrant colors", "Gift-ready packaging"],
    scent: "Mogra & Saffron",
    burnTime: "20 hours each",
    size: "5x100g",
  },
  {
    id: "wellness-lavender-1",
    name: "Serenity Lavender",
    price: 300,
    category: "wellness",
    image: wellnessCandle,
    description: "Relax and unwind with our calming lavender aromatherapy candle. Perfect for meditation and stress relief.",
    features: ["Aromatherapy grade", "Soy wax blend", "Cotton wick", "Reusable container"],
    scent: "Lavender & Chamomile",
    burnTime: "30-35 hours",
    size: "220g",
  },
  {
    id: "wellness-eucalyptus-2",
    name: "Breathe Easy Eucalyptus",
    price: 320,
    category: "wellness",
    image: wellnessCandle,
    description: "Refresh your space with invigorating eucalyptus. Ideal for creating a spa-like atmosphere at home.",
    features: ["Pure essential oils", "Natural ingredients", "Handcrafted", "Eco-friendly"],
    scent: "Eucalyptus & Peppermint",
    burnTime: "28-32 hours",
    size: "220g",
  },
  {
    id: "heritage-gateway-1",
    name: "Gateway of Mumbai",
    price: 380,
    category: "heritage",
    image: heritageCandle,
    description: "A tribute to Mumbai's iconic Gateway of India. Rich, warm fragrance reminiscent of the colonial era.",
    features: ["Heritage collection", "Premium wax", "Vintage design", "Limited edition"],
    scent: "Tobacco & Amber",
    burnTime: "32-35 hours",
    size: "250g",
  },
  {
    id: "heritage-marine-2",
    name: "Marine Drive Sunset",
    price: 360,
    category: "heritage",
    image: heritageCandle,
    description: "Capture the essence of Mumbai's famous Marine Drive at sunset with this oceanic fragrance.",
    features: ["Inspired by Mumbai", "Sea salt notes", "Artisan crafted", "Unique blend"],
    scent: "Sea Salt & Bergamot",
    burnTime: "30 hours",
    size: "230g",
  },
  {
    id: "gifts-custom-1",
    name: "Personalized Gift Box",
    price: 400,
    category: "gifts",
    image: giftCandle,
    description: "Create lasting memories with our customizable gift box. Perfect for weddings, birthdays, and special occasions.",
    features: ["Custom message card", "Elegant packaging", "Choice of scents", "Gift-ready"],
    scent: "Your Choice",
    burnTime: "25-30 hours",
    size: "200g",
  },
  {
    id: "gifts-duo-2",
    name: "Wellness Duo Gift Set",
    price: 550,
    category: "gifts",
    image: giftCandle,
    description: "Two premium wellness candles beautifully packaged. The perfect gift for someone special.",
    features: ["2 premium candles", "Luxury packaging", "Gift message included", "Ready to gift"],
    scent: "Lavender & Eucalyptus",
    burnTime: "60 hours total",
    size: "2x220g",
  },
  {
    id: "diwali-deepak-3",
    name: "Golden Deepak",
    price: 280,
    category: "diwali",
    image: diwaliCandle,
    description: "Traditional Indian deepak candle with a modern twist. Brings auspicious vibes to your home.",
    features: ["Traditional design", "Eco-friendly wax", "Golden finish", "Festive fragrance"],
    scent: "Kesar & Rose",
    burnTime: "22-25 hours",
    size: "180g",
  },
  {
    id: "wellness-yoga-3",
    name: "Yoga Flow",
    price: 290,
    category: "wellness",
    image: wellnessCandle,
    description: "Enhance your yoga practice with this specially blended aromatherapy candle.",
    features: ["Meditation blend", "Natural wax", "Calming scent", "Eco-conscious"],
    scent: "Sandalwood & Patchouli",
    burnTime: "28 hours",
    size: "210g",
  },
  {
    id: "heritage-colaba-3",
    name: "Colaba Causeway",
    price: 340,
    category: "heritage",
    image: heritageCandle,
    description: "Experience the vibrant energy of Colaba Causeway with this eclectic fragrance blend.",
    features: ["Mumbai heritage", "Unique scent profile", "Artisan quality", "Limited batch"],
    scent: "Spice Market & Woods",
    burnTime: "30 hours",
    size: "220g",
  },
  {
    id: "gifts-thank-you-3",
    name: "Thank You Token",
    price: 250,
    category: "gifts",
    image: giftCandle,
    description: "A thoughtful way to say thank you. Small but meaningful gesture in a beautiful package.",
    features: ["Compact size", "Gift wrap included", "Sweet fragrance", "Affordable gifting"],
    scent: "Vanilla & Honey",
    burnTime: "18-20 hours",
    size: "150g",
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "diwali", name: "Diwali Collection" },
  { id: "wellness", name: "Wellness Candles" },
  { id: "heritage", name: "Mumbai Heritage" },
  { id: "gifts", name: "Custom Gifts" },
];
