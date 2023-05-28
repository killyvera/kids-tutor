import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeCartItem = (cartItem) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItem.id));
  };

  const cartContextValue = {
    cartItems,
    toggleCart,
    isCartOpen,
    addToCart,
    removeCartItem,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
