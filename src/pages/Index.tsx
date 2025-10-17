import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-candles.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-background animate-fade-in-up">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
                Light Your Space,<br />Lift Your Spirit
              </h1>
              <p className="text-lg md:text-xl mb-8 text-background/90">
                Handcrafted eco-friendly candles from Mumbai. Each piece is lovingly created by artisan Jyoti, bringing warmth, wellness, and Indian heritage to your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button size="lg" className="gap-2 text-base shadow-elegant hover:shadow-glow">
                    Explore Collection
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-base bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground"
                  >
                    Meet Jyoti
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-2">
                  <Leaf className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">100% Eco-Friendly</h3>
                <p className="text-muted-foreground">
                  Natural soy wax and sustainable materials for a cleaner burn
                </p>
              </div>
              
              <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Lovingly Handcrafted</h3>
                <p className="text-muted-foreground">
                  Each candle hand-poured by artisan Jyoti in Mumbai
                </p>
              </div>
              
              <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-2">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Luxury fragrances with 25-35 hour burn times
                </p>
              </div>
            </div>
            
            {/* Trust Badges Row */}
            <div className="mt-12 pt-12 border-t border-border/50">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🚚</span>
                  </div>
                  <span className="text-muted-foreground font-medium">Free Delivery Mumbai/Thane</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <span className="text-muted-foreground font-medium">Handmade with Love</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xl">🌿</span>
                  </div>
                  <span className="text-muted-foreground font-medium">100% Natural Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Featured Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most loved handcrafted candles, each with its own unique story and aroma
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <Link to="/shop">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                  Meet Jyoti
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A passionate artisan from Mumbai, Jyoti combines traditional Indian craftsmanship with modern eco-conscious practices to create candles that are not just products, but experiences.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Each Aura by Jyoti candle is hand-poured with love, infused with premium fragrances, and designed to bring warmth and positive energy to your space.
                </p>
                <Link to="/about">
                  <Button size="lg" className="gap-2">
                    Read Jyoti's Story
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={heroImage}
                    alt="Jyoti creating candles"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to receive exclusive offers, candle care tips, and updates on new collections
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="lg" className="shadow-elegant">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
