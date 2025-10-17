import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";
import prisma from "@/lib/prisma";
import { mapProductRecord, productDbRecordToProductRecord } from "@/lib/content-mappers";
import type { CategoryRecord } from "@/types/content";

export const metadata: Metadata = {
  title: "Shop Handcrafted Candles",
  description:
    "Browse Aura by Jyoti's handcrafted candle collections, from Diwali diyas to wellness aromatherapy and bespoke gifting sets.",
};

const ShopPage = async () => {
  const [productRows, categoryRows] = await Promise.all([
    prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.category.findMany({
      orderBy: { name: "asc" },
    }),
  ]);

  const products = productRows.map(productDbRecordToProductRecord).map(mapProductRecord);
  const categories: CategoryRecord[] = [
    { id: "all", name: "All Products" },
    ...categoryRows.map((category) => ({
      id: category.id,
      name: category.name,
    })),
  ];

  return (
    <div className="flex flex-col">
      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading products…</div>}>
        <ShopClient products={products} categories={categories} />
      </Suspense>
    </div>
  );
};

export default ShopPage;
