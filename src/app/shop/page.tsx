import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";
import { headers } from "next/headers";
import { mapProductRecord } from "@/lib/content-mappers";
import type { Product, CategoryRecord, ProductRecord } from "@/types/content";

const getBaseUrl = () => {
  const host = headers().get("host");
  const protocol = process.env.VERCEL ? "https" : "http";
  return `${protocol}://${host}`;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${getBaseUrl()}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = (await res.json()) as { products: ProductRecord[] };
  return data.products.map(mapProductRecord);
};

const fetchCategories = async (): Promise<CategoryRecord[]> => {
  const res = await fetch(`${getBaseUrl()}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = (await res.json()) as { categories: CategoryRecord[] };
  return data.categories;
};

export const metadata: Metadata = {
  title: "Shop Handcrafted Candles",
  description:
    "Browse Aura by Jyoti's handcrafted candle collections, from Diwali diyas to wellness aromatherapy and bespoke gifting sets.",
};

const ShopPage = async () => {
  const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);

  return (
    <div className="flex flex-col">
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading products…</div>}>
        <ShopClient products={products} categories={categories} />
      </Suspense>
    </div>
  );
};

export default ShopPage;
