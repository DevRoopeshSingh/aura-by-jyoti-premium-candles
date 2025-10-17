import type { StaticImageData } from "next/image";

export interface CategoryRecord {
  id: string;
  name: string;
}

export interface ProductRecord {
  id: string;
  name: string;
  price: number;
  description: string;
  scent: string;
  burnTime: string;
  size: string;
  image: string;
  features: string[];
  category: CategoryRecord;
}

export interface Product extends Omit<ProductRecord, "image"> {
  image: StaticImageData;
}

export interface BlogPostQuoteRecord {
  text: string;
  attribution?: string;
}

export interface BlogPostSectionRecord {
  heading?: string;
  paragraphs: string[];
  tips?: string[];
  quote?: BlogPostQuoteRecord;
}

export interface BlogPostRecord {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  readingTime: string;
  sections: BlogPostSectionRecord[];
  takeaways: string[];
  publishedAt: string;
}

export interface BlogPost extends Omit<BlogPostRecord, "image"> {
  image: StaticImageData;
}
