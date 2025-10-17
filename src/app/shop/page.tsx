import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Handcrafted Candles",
  description:
    "Browse Aura by Jyoti's handcrafted candle collections, from Diwali diyas to wellness aromatherapy and bespoke gifting sets.",
};

const ShopPage = () => (
  <div className="flex flex-col">
    <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading products…</div>}>
      <ShopClient products={products} categories={categories} />
    </Suspense>
  </div>
);

export default ShopPage;
