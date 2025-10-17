import type { Metadata } from "next";
import CartClient from "@/components/cart/CartClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description:
    "Review your selected Aura by Jyoti candles and complete your order via WhatsApp with free delivery across Mumbai and Thane.",
};

const CartPage = () => (
  <div className="flex flex-col">
    <CartClient />
  </div>
);

export default CartPage;

