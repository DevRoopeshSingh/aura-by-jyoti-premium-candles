import { Link } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-elegant transition-elegant cursor-pointer h-full flex flex-col">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
          
          {/* Trust Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full shadow-soft">
            <Leaf className="h-3 w-3" />
            <span className="font-medium">Eco</span>
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <div className="text-xs font-inter font-medium text-primary uppercase tracking-wider mb-2">
            {product.category}
          </div>
          <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {product.description}
          </p>
          <p className="text-xs text-muted-foreground">
            {product.scent} • {product.burnTime}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-baseline gap-1 font-playfair font-bold text-foreground">
            <span className="text-lg">₹</span>
            <span className="text-2xl">{product.price}</span>
          </div>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="gap-2 shadow-soft hover:shadow-glow"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
