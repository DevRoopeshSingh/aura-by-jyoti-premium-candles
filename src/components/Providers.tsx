"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <TooltipProvider>
      <CartProvider>
        {children}
        <Toaster />
        <Sonner />
      </CartProvider>
    </TooltipProvider>
  );
};

export default Providers;
