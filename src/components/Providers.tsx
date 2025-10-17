"use client";

import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <CartProvider>
          {children}
          <Toaster />
          <Sonner />
        </CartProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
