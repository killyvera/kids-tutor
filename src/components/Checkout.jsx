import { useCartContext } from "@/context/CartContext";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

const Checkout = async (cartItems) => {
  console.log(cartItems);
  const lineItems = await Promise.all(
    cartItems.map(async (item) => {
      const imageUrl = await Storage.get(item.images.cover, {
        level: "public",
      });
      return {
        price_data: {
          currency: "mxn",
          product_data: {
            name: item.name,
            description: item.short,
            images: [imageUrl],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    })
  );
  console.log(lineItems);

  // Call your backend API to create a Stripe Checkout Session
  const response = await fetch("/api/checkout_sessions", {
    method: "POST",
    body: JSON.stringify({ lineItems }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = await response.json();
  window.location.href = body.url;
};

const CheckoutButton = () => {
  const { cartItems, addToCart, removeCartItem, getTotalPrice } =
    useCartContext();
  return (
    <button
      className="primary-button rounded p-1 text-white transition hover:scale-110 text-sm w-full"
      onClick={() => Checkout(cartItems)}
    >
      Pagar
    </button>
  );
};

export default CheckoutButton;
