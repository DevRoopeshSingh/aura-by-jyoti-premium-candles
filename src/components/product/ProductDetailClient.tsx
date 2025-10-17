"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Star,
  Leaf,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely love this candle! The scent is divine and lasts for hours. Worth every rupee!",
  },
  {
    id: 2,
    name: "Rahul M.",
    rating: 5,
    date: "1 month ago",
    comment:
      "Beautiful packaging and the quality is top-notch. Makes my home smell amazing.",
  },
  {
    id: 3,
    name: "Anita K.",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great candle, burns evenly. Would love to see more scents in this collection.",
  },
];

const ProductDetailClient = ({ product, relatedProducts }: ProductDetailClientProps) => {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-smooth hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="transition-smooth hover:text-primary">
            Shop
          </Link>
          <span>/</span>
          <span className="font-medium text-foreground">{product.name}</span>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <div className="animate-fade-in">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-elegant">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div>
              <div className="mb-3 text-sm font-inter font-medium uppercase tracking-wider text-primary">
                {product.category}
              </div>
              <h1 className="font-playfair text-4xl font-bold md:text-5xl">{product.name}</h1>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < Math.round(averageRating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-1 font-playfair font-bold text-primary">
                <span className="text-2xl">₹</span>
                <span className="text-4xl">{product.price}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1.5 text-xs text-secondary">
                  <Leaf className="h-3.5 w-3.5" />
                  Eco-Friendly
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary">
                  <Heart className="h-3.5 w-3.5" />
                  Handcrafted
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  Premium Quality
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-lg font-semibold">Features</h3>
                <ul className="mt-3 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Scent</p>
                  <p className="font-medium">{product.scent}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Burn Time</p>
                  <p className="font-medium">{product.burnTime}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Size</p>
                  <p className="font-medium">{product.size}</p>
                </div>
              </div>
            </div>

            <AddToCartButton
              product={product}
              size="lg"
              label="Add to Cart"
              className="w-full justify-center gap-2 text-lg shadow-elegant hover:shadow-glow"
            />

            <div className="rounded-lg bg-muted/30 p-6 space-y-2">
              <p className="text-sm font-medium">✨ Handcrafted in Mumbai by Jyoti</p>
              <p className="text-sm font-medium">🌿 100% Eco-friendly materials</p>
              <p className="text-sm font-medium">🚚 Free delivery in Mumbai/Thane</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-playfair text-3xl font-bold text-center md:text-4xl">
            Customer Reviews
          </h2>
          <div className="mt-8 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-lg bg-card p-6 shadow-soft">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              Have you tried this candle? Share your experience!
            </p>
            <Button variant="outline" size="lg">
              Write a Review
            </Button>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-muted/20 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center md:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related, index) => (
                <div
                  key={related.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={related} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetailClient;
