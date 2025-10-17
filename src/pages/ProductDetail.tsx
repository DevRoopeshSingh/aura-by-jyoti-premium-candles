import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Check, Star, Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  
  // Sample reviews data
  const reviews = [
    { id: 1, name: "Priya S.", rating: 5, date: "2 weeks ago", comment: "Absolutely love this candle! The scent is divine and lasts for hours. Worth every rupee!" },
    { id: 2, name: "Rahul M.", rating: 5, date: "1 month ago", comment: "Beautiful packaging and the quality is top-notch. Makes my home smell amazing." },
    { id: 3, name: "Anita K.", rating: 4, date: "1 month ago", comment: "Great candle, burns evenly. Would love to see more scents in this collection." },
  ];
  
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary transition-smooth">Shop</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="animate-fade-in">
                <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div>
                  <div className="text-sm font-inter font-medium text-primary uppercase tracking-wider mb-3">
                    {product.category}
                  </div>
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                    {product.name}
                  </h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.round(averageRating)
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
                  
                  <div className="flex items-baseline gap-1 font-playfair font-bold text-primary mb-6">
                    <span className="text-2xl">₹</span>
                    <span className="text-4xl">{product.price}</span>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-1.5 text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full">
                      <Leaf className="h-3.5 w-3.5" />
                      <span className="font-medium">Eco-Friendly</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      <Heart className="h-3.5 w-3.5" />
                      <span className="font-medium">Handcrafted</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-accent/10 text-accent-foreground px-3 py-1.5 rounded-full">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="font-medium">Premium Quality</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Scent</p>
                      <p className="font-medium">{product.scent}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Burn Time</p>
                      <p className="font-medium">{product.burnTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Size</p>
                      <p className="font-medium">{product.size}</p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="w-full gap-2 text-lg shadow-elegant hover:shadow-glow"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>

                <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                  <p className="text-sm font-medium">✨ Handcrafted in Mumbai by Jyoti</p>
                  <p className="text-sm font-medium">🌿 100% Eco-friendly materials</p>
                  <p className="text-sm font-medium">🚚 Free delivery in Mumbai/Thane</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
              Customer Reviews
            </h2>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card rounded-lg p-6 shadow-soft">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
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
              <p className="text-muted-foreground mb-4">
                Have you tried this candle? Share your experience!
              </p>
              <Button variant="outline" size="lg">Write a Review</Button>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
