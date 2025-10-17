"use client";

import type { StaticImageData } from "next/image";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface AddToCartButtonProps extends Omit<ButtonProps, "onClick"> {
  product: {
    id: string;
    name: string;
    price: number;
    image: string | StaticImageData;
  };
  label?: string;
}

const AddToCartButton = ({
  product,
  label = "Add",
  className,
  ...buttonProps
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToCart(product);
  };

  const iconSize =
    buttonProps.size === "lg" || buttonProps.size === "default" ? "h-5 w-5" : "h-4 w-4";

  return (
    <Button
      {...buttonProps}
      className={className}
      onClick={handleAddToCart}
      aria-label={`Add ${product.name} to cart`}
    >
      <ShoppingCart className={iconSize} />
      {label}
    </Button>
  );
};

export default AddToCartButton;
