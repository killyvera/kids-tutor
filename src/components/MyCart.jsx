import React from "react";
import { motion } from "framer-motion";
import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import CounterItems from "./CounterItems";
import Checkout from "./Checkout";

const MyCart = ({ visible }) => {
  const { cartItems, addToCart, removeCartItem, getTotalPrice } =
    useCartContext();

  console.log(getTotalPrice());
  return (
    <motion.div
      className={`fixed z-50 top-12 right-0 flex flex-col bg-white`}
      initial={{ x: "100%" }}
      animate={{ x: visible ? 0 : "200%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col p-1">
        <h1 className="text-sm">My Cart</h1>
      </div>
      <div className="space-y-1">
        {cartItems?.map((item) => (
          <CartItem key={item?.id} item={item} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between pt-3 m-3">
        <p>{"MXN " + getTotalPrice()}</p>
        <Checkout />
      </div>
    </motion.div>
  );
};

export default MyCart;

const CartItem = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm flex flex-row items-center space-x-1 rounded"
      key={item?.id}
    >
      <Image
        className="pl-1"
        src={item?.cover}
        width={45}
        height={45}
        alt="Product Cover Image"
      />
      <div>
        <p className="text-xs">{item?.name}</p>
        <div className="flex flex-col" >
          <CounterItems item={item} />
        </div>
      </div>
    </motion.div>
  );
};
