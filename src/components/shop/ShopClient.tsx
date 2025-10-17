"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface Category {
  id: string;
  name: string;
}

interface ShopClientProps {
  products: Product[];
  categories: Category[];
}

const ShopClient = ({ products, categories }: ShopClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState("featured");
  const [, startTransition] = useTransition();

  const selectedCategory = searchParams.get("category") ?? "all";
  const searchParam = searchParams.get("search") ?? "";

  const filteredProducts = useMemo(() => {
    let results =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    if (searchParam) {
      const lowered = searchParam.toLowerCase();
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(lowered) ||
          product.description.toLowerCase().includes(lowered) ||
          product.scent.toLowerCase().includes(lowered),
      );
    }

    return results;
  }, [products, searchParam, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const updateSearchParams = (callback: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    callback(params);
    const query = params.toString();
    const url = query ? `/shop?${query}` : "/shop";
    startTransition(() => {
      router.push(url, { scroll: false });
    });
  };

  const handleCategoryChange = (categoryId: string) => {
    updateSearchParams((params) => {
      if (categoryId === "all") {
        params.delete("category");
      } else {
        params.set("category", categoryId);
      }
    });
  };

  const clearSearch = () => {
    updateSearchParams((params) => {
      params.delete("search");
    });
  };

  return (
    <>
      <section className="bg-gradient-warm py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl font-bold md:text-6xl">Our Collection</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our handcrafted eco-friendly candles, each thoughtfully created to bring warmth and wellness to your space
          </p>
        </div>
      </section>

      <section className="border-b bg-muted/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className="transition-smooth"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {searchParam && (
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Showing results for{" "}
                <span className="font-semibold text-foreground">"{searchParam}"</span>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="py-16 text-center">
              <p className="mb-4 text-lg text-muted-foreground">
                {searchParam
                  ? `No products found for "${searchParam}"`
                  : "No products found in this category."}
              </p>
              {searchParam && (
                <Button variant="outline" onClick={clearSearch}>
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopClient;
