import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [asset, setAsset] = useState([])

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity = 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeCartItem = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedItems = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedItems);
      } else {
        const updatedItems = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCartItems(updatedItems);
      }
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartContextValue = {
    cartItems,
    toggleCart,
    isCartOpen,
    addToCart,
    removeCartItem,
    getTotalPrice,
    asset,
    setAsset
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
