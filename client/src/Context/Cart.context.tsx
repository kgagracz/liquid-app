import { createContext, useState, ReactNode, useEffect } from "react";
import { ILiquid } from "../Models/Liquid.models";

export interface ICartContext {
  cart: ILiquid[];
  addToCart: (product: ILiquid) => void;
  removeFromCart: (productId: ILiquid["id"]) => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ILiquid[]>([]);

  useEffect(() => {
    const lsCart = localStorage.getItem("cart");
    lsCart && setCart(JSON.parse(lsCart));
  }, []);

  const isInCart = (productId: ILiquid["id"]) =>
    !!cart.find((p) => p.id === productId);

  const addToCart = (product: ILiquid) => {
    !isInCart(product.id) && setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: ILiquid["id"]) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  cart.length > 0 && localStorage.setItem("cart", JSON.stringify(cart));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
