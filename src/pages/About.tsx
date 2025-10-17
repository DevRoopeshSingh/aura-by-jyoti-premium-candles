import { Heart, Leaf, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jyotiPortrait from "@/assets/jyoti-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Meet Jyoti
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The heart and soul behind Aura by Jyoti
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={jyotiPortrait}
                    alt="Jyoti, founder of Aura by Jyoti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                  A Journey of Light & Love
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Born and raised in Mumbai, I've always been fascinated by the power of light and fragrance to transform spaces and moods. What started as a hobby during Diwali preparations has blossomed into Aura by Jyoti – a brand that represents my passion for creating beautiful, eco-friendly candles.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Each candle I create is more than just a product; it's a piece of my heart. I hand-pour every candle in my Mumbai workshop, using only natural, sustainable materials. My inspiration comes from India's rich heritage, the vibrant culture of Mumbai, and the ancient wisdom of aromatherapy.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  I believe in the power of small businesses to make a big difference. That's why I'm committed to eco-friendly practices, supporting local suppliers, and creating products that bring joy without harming our planet.
                </p>
                
                <div className="pt-4">
                  <p className="font-playfair text-xl italic text-primary">
                    "Light your space, lift your spirit" isn't just a tagline – it's my promise to you.
                  </p>
                  <p className="mt-2 text-muted-foreground">— Jyoti</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 shadow-soft text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
                  <Leaf className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  We use 100% natural soy wax, eco-friendly packaging, and sustainable practices in every aspect of our business. Mother Earth deserves our respect.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-soft text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  Craftsmanship
                </h3>
                <p className="text-muted-foreground">
                  Each candle is lovingly hand-poured with attention to detail. We believe in quality over quantity, creating products that truly make a difference.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-8 shadow-soft text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  Wellness
                </h3>
                <p className="text-muted-foreground">
                  Our candles are designed to enhance your wellbeing through aromatherapy. We use premium fragrances that calm, energize, and inspire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Our Process
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6 animate-fade-in">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Sourcing Natural Materials
                  </h3>
                  <p className="text-muted-foreground">
                    We carefully select 100% natural soy wax, premium essential oils, and sustainable materials from trusted local suppliers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Hand-Pouring with Love
                  </h3>
                  <p className="text-muted-foreground">
                    Each candle is hand-poured in small batches in my Mumbai workshop, ensuring quality and attention to detail in every piece.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Quality Testing
                  </h3>
                  <p className="text-muted-foreground">
                    Every candle is tested for burn time, fragrance throw, and quality before it reaches you. Only the best makes it to your home.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Eco-Friendly Packaging
                  </h3>
                  <p className="text-muted-foreground">
                    We package each candle in recyclable, sustainable materials with beautiful presentation that's gift-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
