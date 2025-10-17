import type { BlogPost as PrismaBlogPost, Category as PrismaCategory, Product as PrismaProduct } from "@prisma/client";
import diwaliCandle from "@/assets/diwali-candle.jpg";
import wellnessCandle from "@/assets/wellness-candle.jpg";
import heritageCandle from "@/assets/heritage-candle.jpg";
import giftCandle from "@/assets/gift-candle.jpg";
import heroImage from "@/assets/hero-candles.jpg";
import type {
  ProductRecord,
  Product,
  BlogPostRecord,
  BlogPost,
} from "@/types/content";

const productImageMap: Record<string, typeof diwaliCandle> = {
  "diwali-candle": diwaliCandle,
  "wellness-candle": wellnessCandle,
  "heritage-candle": heritageCandle,
  "gift-candle": giftCandle,
};

const blogImageMap: Record<string, typeof heroImage> = {
  "hero-candles": heroImage,
};

const fallbackImage = heroImage;

export const mapProductRecord = (record: ProductRecord): Product => ({
  ...record,
  image: productImageMap[record.image] ?? fallbackImage,
});

export const mapBlogPostRecord = (record: BlogPostRecord): BlogPost => ({
  ...record,
  image: blogImageMap[record.image] ?? fallbackImage,
});

type ProductWithCategory = PrismaProduct & { category: PrismaCategory };

export const productDbRecordToProductRecord = (product: ProductWithCategory): ProductRecord => ({
  id: product.id,
  name: product.name,
  price: product.price,
  description: product.description,
  scent: product.scent,
  burnTime: product.burnTime,
  size: product.size,
  image: product.image,
  features: JSON.parse(product.features) as string[],
  category: {
    id: product.category.id,
    name: product.category.name,
  },
});

export const blogDbRecordToBlogPostRecord = (post: PrismaBlogPost): BlogPostRecord => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  slug: post.slug,
  image: post.image,
  readingTime: post.readingTime,
  sections: JSON.parse(post.sections) as BlogPostRecord["sections"],
  takeaways: JSON.parse(post.takeaways) as string[],
  publishedAt: post.publishedAt.toISOString(),
});
