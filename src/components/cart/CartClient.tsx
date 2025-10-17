"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const CartClient = () => {
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
      <section className="flex flex-1 items-center justify-center py-24">
        <div className="text-center animate-fade-in">
          <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-muted-foreground" />
          <h1 className="font-playfair text-3xl font-bold">Your Cart is Empty</h1>
          <p className="mt-4 text-muted-foreground">
            Start adding some beautiful candles to your cart!
          </p>
          <div className="mt-8">
            <Link href="/shop">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-warm py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/shop"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-smooth hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="font-playfair text-4xl font-bold md:text-5xl">Your Cart</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-lg bg-card p-4 shadow-soft animate-fade-in"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h3 className="font-playfair text-lg font-semibold">{item.name}</h3>
                    <div className="mt-2 flex items-baseline gap-0.5 font-semibold text-primary">
                      <span className="text-sm">₹</span>
                      <span>{item.price}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-md border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1 font-playfair font-bold">
                      <span className="text-base">₹</span>
                      <span className="text-xl">{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4 rounded-lg bg-card p-6 shadow-elegant">
                <h2 className="font-playfair text-2xl font-bold">Order Summary</h2>
                <div className="space-y-2 border-b pb-4">
                  <div className="flex items-baseline justify-between">
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

                <div className="flex items-baseline justify-between pt-2 text-lg">
                  <span className="font-playfair font-semibold">Total</span>
                  <div className="flex items-baseline gap-1 font-playfair font-bold text-primary">
                    <span className="text-xl">₹</span>
                    <span className="text-2xl">{totalPrice}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full gap-2 shadow-elegant hover:shadow-glow"
                  onClick={handleCheckout}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Checkout via WhatsApp
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  You&apos;ll be redirected to WhatsApp to complete your order
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartClient;

