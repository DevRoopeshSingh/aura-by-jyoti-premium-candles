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
