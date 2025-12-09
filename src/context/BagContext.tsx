import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { CoffeeItemProps } from "../components/CoffeeItem";

export interface CartContextInterface {
  cart: BagContextItem[];
  amountInCart: number;
  addToCart: (item: CoffeeItemProps, amount: number) => void;
  handleRemoveToCart: (id: number) => void;
}

interface BagContextItem {
  item: CoffeeItemProps;
  amount: number;
}

const CartContext = createContext<CartContextInterface | null>(null);

type CartContextProps = {
  children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<BagContextItem[]>([]);
  const [amountInCart, setAmountInCart] = useState(0);

  function handleAddToCart(item: CoffeeItemProps, amount: number) {
    setCart((prev) => {
      const itemExists = prev.find((i) => i.item.title === item.title);

      if (itemExists) {
        return prev.map((i) =>
          i.item.title === item.title ? { ...i, amount } : i
        );
      }

      return [...prev, { item, amount }];
    });
  }

  function handleRemoveToCart(id: number) {
    const cartFiltered = cart.filter(({ item }) => item.id !== id);

    return setCart(() => cartFiltered);
  }

  useEffect(() => {
    setAmountInCart(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        amountInCart,
        addToCart: handleAddToCart,
        handleRemoveToCart,
      }}
    >
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
