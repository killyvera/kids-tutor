import { createContext, useContext, useState } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import { Users } from "@/models";
import { Storage } from "aws-amplify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [asset, setAsset] = useState(['hi'])

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const addAsset=(StripeObject)=>{
    setAsset(StripeObject)
  }

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

  //------------

  const loadAvatar = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username, attributes } = currentUser;
      let avatarURL = attributes.picture;
  
      const avatarList = await Storage.list(`avatars/${username}`);
      console.log(avatarList);
      if (avatarList.results.length > 0) {
        avatarURL = await Storage.get(`avatars/${username}`);
      }
  
      return avatarURL;
    } catch (error) {
      console.log("Error al cargar el avatar:", error);
      return attributes.picture;
    }
  };

  const getGlobalUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username, attributes } = currentUser;
  
      const existingUser = await DataStore.query(Users, (u) =>
        u.sub_cognito.eq(username)
      );
  
      if (existingUser.length > 0) {
        const { name, email } = existingUser[0];
        const picture = (await loadAvatar()) || "";
  
        return { name, email, picture };
      } else {
        const userData = {
          name: attributes?.name || "",
          email: attributes?.email || "",
          picture: (await loadAvatar()) || "",
        };
  
        return userData;
      }
    } catch (error) {
      console.log("Error al obtener el perfil del usuario:", error);
      return "not procc reached vr345-fghtyu67-hjghj";
    }
  };

  //-------------

  const cartContextValue = {
    cartItems,
    toggleCart,
    isCartOpen,
    addToCart,
    removeCartItem,
    getTotalPrice,
    asset,
    addAsset,
    getGlobalUser
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);



