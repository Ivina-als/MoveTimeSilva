import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    !isInCart(item.id) && setCartItems([...cartItems, item]);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clear = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, isInCart, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
