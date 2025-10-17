import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-candles.jpg";

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[600px] overflow-hidden md:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="A collection of Aura by Jyoti handcrafted candles glowing warmly"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>

        <div className="relative h-full">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl space-y-6 text-background animate-fade-in-up">
              <h1 className="font-playfair text-5xl font-bold md:text-7xl">
                Light Your Space,
                <br />
                Lift Your Spirit
              </h1>
              <p className="text-lg text-background/90 md:text-xl">
                Handcrafted eco-friendly candles from Mumbai. Each piece is lovingly created by artisan Jyoti, bringing warmth, wellness, and Indian heritage to your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button size="lg" className="gap-2 text-base shadow-elegant hover:shadow-glow">
                    Explore Collection
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-base border-background bg-background/10 text-background hover:bg-background hover:text-foreground"
                  >
                    Meet Jyoti
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3 text-center animate-fade-in">
              <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">100% Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Natural soy wax and sustainable materials for a cleaner burn
              </p>
            </div>

            <div className="space-y-3 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">Lovingly Handcrafted</h3>
              <p className="text-muted-foreground">
                Each candle hand-poured by artisan Jyoti in Mumbai
              </p>
            </div>

            <div className="space-y-3 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-playfair text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Luxury fragrances with 25-35 hour burn times
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-border/50 pt-12">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">🚚</span>
                </div>
                <span className="text-muted-foreground font-medium">
                  Free Delivery Mumbai/Thane
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-xl">✨</span>
                </div>
                <span className="text-muted-foreground font-medium">
                  Handmade with Love
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-xl">🌿</span>
                </div>
                <span className="text-muted-foreground font-medium">
                  100% Natural Ingredients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold md:text-5xl">
              Featured Collection
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover our most loved handcrafted candles, each with its own unique story and aroma
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop">
              <Button size="lg" variant="outline" className="gap-2">
                View All Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-warm py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold md:text-5xl">
                Meet Jyoti
              </h2>
              <p className="text-lg text-muted-foreground">
                A passionate artisan from Mumbai, Jyoti combines traditional Indian craftsmanship with modern eco-conscious practices to create candles that are not just products, but experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                Each Aura by Jyoti candle is hand-poured with love, infused with premium fragrances, and designed to bring warmth and positive energy to your space.
              </p>
              <Link href="/about">
                <Button size="lg" className="gap-2">
                  Read Jyoti&apos;s Story
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-elegant">
                <Image
                  src={heroImage}
                  alt="Jyoti creating candles"
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold md:text-4xl">
            Join Our Community
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Subscribe to receive exclusive offers, candle care tips, and updates on new collections
          </p>
          <form className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email address"
            />
            <Button type="submit" size="lg" className="shadow-elegant">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
