import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Aura by Jyoti — Premium Handcrafted Candles",
    template: "%s | Aura by Jyoti",
  },
  description:
    "Discover handcrafted eco-friendly candles from Mumbai artisan Jyoti. Explore premium collections inspired by Indian heritage, wellness rituals, and custom gifting.",
  metadataBase: new URL("https://aurabyjyoti.com"),
  openGraph: {
    title: "Aura by Jyoti — Premium Handcrafted Candles",
    description:
      "Handcrafted candles inspired by Indian heritage. Shop eco-friendly collections for Diwali, wellness, and custom gifting.",
    url: "https://aurabyjyoti.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura by Jyoti",
    description:
      "Premium handcrafted candles created by Mumbai artisan Jyoti. Light your space, lift your spirit.",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-background font-inter text-foreground antialiased`}
    >
      <Providers>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
