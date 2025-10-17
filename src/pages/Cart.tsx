import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleCheckout = () => {
    const message = `Hello! I'd like to order:\n${items
      .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join("\n")}\n\nTotal: ₹${totalPrice}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-playfair text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Start adding some beautiful candles to your cart!
            </p>
            <Link to="/shop">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold">
              Your Cart
            </h1>
          </div>
        </section>

        {/* Cart Items */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-lg p-4 shadow-soft flex gap-4 animate-fade-in"
                  >
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-playfair text-lg font-semibold mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-baseline gap-0.5 text-primary font-semibold mb-3">
                        <span className="text-sm">₹</span>
                        <span>{item.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-baseline gap-1 font-playfair font-bold justify-end">
                        <span className="text-base">₹</span>
                        <span className="text-xl">{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg p-6 shadow-elegant sticky top-24 space-y-4">
                  <h2 className="font-playfair text-2xl font-bold mb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-2 pb-4 border-b">
                    <div className="flex justify-between items-baseline">
                      <span className="text-muted-foreground">Subtotal</span>
                      <div className="flex items-baseline gap-0.5 font-semibold">
                        <span className="text-sm">₹</span>
                        <span>{totalPrice}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-semibold text-secondary">Free</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-baseline text-lg pt-2">
                    <span className="font-playfair font-semibold">Total</span>
                    <div className="flex items-baseline gap-1 font-playfair font-bold text-primary">
                      <span className="text-xl">₹</span>
                      <span className="text-2xl">{totalPrice}</span>
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    onClick={handleCheckout}
                    className="w-full gap-2 shadow-elegant hover:shadow-glow"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Checkout via WhatsApp
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    You'll be redirected to WhatsApp to complete your order
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

export default Cart;
