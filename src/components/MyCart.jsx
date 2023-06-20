import { motion } from "framer-motion";
import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import CounterItems from "./CounterItems";
import Checkout from "./Checkout";
import { Storage } from "@aws-amplify/storage";
import { useEffect, useState, useRef } from "react";

const MyCart = () => {
  const {
    cartItems,
    addToCart,
    removeCartItem,
    getTotalPrice,
    isCartOpen,
    toggleCart,
  } = useCartContext();

  console.log(getTotalPrice());
  return (
    <motion.div
      className={`fixed z-50 top-12 right-0 flex flex-col bg-white p-2 rounded shadow`}
      initial={{ x: "100%" }}
      animate={{ x: cartItems.length >= 1 && isCartOpen ? 0 : "200%" }}
      transition={{ duration: 0.5 }}
    >
      <div class="flex items-start justify-between">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Mi Carrito
        </h2>
        <div class="ml-3 flex h-7 items-center">
          <button
            onClick={() => toggleCart()}
            type="button"
            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Close panel</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-1">
        {cartItems?.map((item) => (
          <CartItem2 key={item?.id} item={item} />
        ))}
      </div>
      {/* <CartItem2 /> */}
      <div className="flex flex-col items-center justify-between pt-3 m-3">
        <div className="font-semibold w-full justify-between">
          <p className="">TOTAL:</p>
          <p>{"MXN " + getTotalPrice()}</p>
        </div>
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
        <div className="flex flex-col">
          <CounterItems item={item} />
        </div>
      </div>
    </motion.div>
  );
};

const CartItem2 = ({ item }) => {
  const [image, setImage] = useState("");
  const { cartItems, addToCart, removeCartItem, getTotalPrice, isCartOpen } =
    useCartContext();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const file = await Storage.get(item?.images.cover, {
          level: "public",
        });
        setImage(file);
      } catch (error) {
        console.log("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [item]);

  return (
    <div className="flex flex-row">
      <div class="ml-1 flex py-6">
        <div class="flex-shrink-0 overflow-hidden rounded-md border border-gray-200 scale-100 transition hover:scale-110 w-24 h-24">
          <Image
            src={image}
            alt="image product in"
            className="h-full w-full object-cover object-center"
            width={130}
            height={130}
          />
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{item?.name}</a>
              </h3>
              <p class="ml-4">MXN {item?.price}</p>
            </div>
            <p class="mt-1 text-sm text-gray-500">{item?.short}</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <p class="text-gray-500">Qty 1</p>

            <div class="flex">
              <button
                onClick={() => removeCartItem(item)}
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500 text-xs transition hover:scale-125 "
              >
                Quitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
