import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/types/content";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link href={`/product/${product.id}`} className="block h-full">
    <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-border transition-elegant hover:shadow-elegant">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-elegant group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-elegant group-hover:opacity-100" />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground shadow-soft">
          <Leaf className="h-3 w-3" />
          <span className="font-medium">Eco</span>
        </div>
      </div>

      <CardContent className="flex-grow p-4">
        <div className="mb-2 text-xs font-inter font-medium uppercase tracking-wider text-primary">
          {product.category.name}
        </div>
        <h3 className="font-playfair mb-2 text-lg font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="mb-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="text-xs text-muted-foreground">
          {product.scent} • {product.burnTime}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-baseline gap-1 font-playfair font-bold text-foreground">
          <span className="text-lg">₹</span>
          <span className="text-2xl">{product.price}</span>
        </div>
        <AddToCartButton
          product={product}
          size="sm"
          className="gap-2 shadow-soft hover:shadow-glow"
        />
      </CardFooter>
    </Card>
  </Link>
);

export default ProductCard;
