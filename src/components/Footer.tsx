import Link from "next/link";
import { Flame, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-primary" />
              <span className="font-playfair text-2xl font-bold">
                Aura by Jyoti
              </span>
            </div>
            <p className="text-sm opacity-90">
              Handcrafted eco-friendly candles from Mumbai, bringing warmth and wellness to your space.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  About Jyoti
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=diwali" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Diwali Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?category=wellness" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Wellness Candles
                </Link>
              </li>
              <li>
                <Link href="/shop?category=heritage" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Mumbai Heritage
                </Link>
              </li>
              <li>
                <Link href="/shop?category=gifts" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-smooth">
                  Custom Gifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai/Thane, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-smooth">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hello@aurabyjyoti.com" className="hover:text-primary transition-smooth">
                  hello@aurabyjyoti.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Aura by Jyoti. All rights reserved. Handcrafted with love in Mumbai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
