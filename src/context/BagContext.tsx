import { createContext, useContext, useState, type ReactNode } from "react";

import type { CoffeeItemProps } from "../components/CoffeeItem";

export interface CartContextInterface {
  cart: BagContextItem[];
  addToCart: (item: CoffeeItemProps, amount: number) => void;
}

interface BagContextItem {
  name: string;
  amount: number;
}

const CartContext = createContext<CartContextInterface | null>(null);

type CartContextProps = {
  children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<BagContextItem[]>([]);

  function handleAddToCart(item: CoffeeItemProps, amount: number) {
    setCart((prev) => {
      const itemExists = prev.find((i) => i.name === item.title);

      if (itemExists) {
        return prev.map((i) => (i.name === item.title ? { ...i, amount } : i));
      }

      return [...prev, { name: item.title, amount }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart: handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext deve ser usado dentro do CartContextProvider"
    );
  }

  return context;
}
