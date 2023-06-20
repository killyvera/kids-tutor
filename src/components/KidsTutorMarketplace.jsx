import { useCartContext } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { Storage, Auth } from "aws-amplify";
import Image from "next/image";

const CheckoutButton = () => {
  const { cartItems, addToCart, removeCartItem, getTotalPrice } =
    useCartContext();
  const [subCognito, setSubCognito] = useState(null);

  useEffect(() => {
    const getUserSub = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setSubCognito(user?.attributes.sub);
      } catch (error) {
        console.log("Error al obtener el sub del usuario:", error);
        setSubCognito("invited user");
      }
    };

    getUserSub();
  }, []);

  return (
    <div
      onClick={() => Checkout(cartItems, subCognito)}
      className=""
      style={{ margin: "-0px" }}
    >
      <Image
        width={90}
        height={90}
        src={`/kidstutor.webp`}
        alt={"some alt title"}
        className="rounded transition scale-75 hover:scale-100"
      />
    </div>
  );
};

const Checkout = async (cartItems, subCognito) => {
  // console.log(cartItems);
  const lineItems = await Promise.all(
    cartItems.map(async (item) => {
      const imageUrl = await Storage.get(item?.images.cover, {
        level: "public",
      });
      return {
        price_data: {
          currency: "mxn",
          product_data: {
            name: item?.name,
            description: item?.short,
            // images: [imageUrl],
          },
          unit_amount: item?.price * 100,
        },
        quantity: item?.quantity,
      };
    })
  );
  const sub = subCognito;
  const purchase = await cartItems.map((item) => item?.id);
  console.log(lineItems, sub, purchase);
  const response = await fetch("/api/checkout_sessions", {
    method: "POST",
    body: JSON.stringify({ lineItems, purchase, sub }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = await response.json();
  window.location.href = body.url;
};

export default CheckoutButton;
