import { useEffect, useState } from "react";
import { Storage, Auth } from "aws-amplify";
import Image from "next/image";

const CheckoutButton = ({ product }) => {
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

  const handleCheckout = async () => {
    const lineItems = [
      {
        price_data: {
          currency: "mxn",
          product_data: {
            name: product?.name,
            description: product?.short,
            images: [product?.cover]
          },
          unit_amount: product?.price * 100,
        },
        quantity: 1,
      },
    ];

    const sub = subCognito;
    const purchase = [product?.id];

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

  return (
    <div onClick={handleCheckout} className=" cursor-pointer relative rounded transition scale-75 hover:scale-100" style={{ margin: "-0px" }}>
      <DiscountBadge />
      <Image
        width={90}
        height={90}
        src={`/kidstutor.webp`}
        alt={"some alt title"}
        className=""
      />
    </div>
  );
};

import React from 'react'

export const DiscountBadge = (discount) => {
  return (
    <div className="absolute w-10 right-2 bottom-15 transition hover:scale-125 " >
      <Image width={90} height={90} src={'/discountbadge.png'} alt="some text" />
      <p className="text-white absolute top-2 left-1 font-semibold text-sm" >-15%</p>
    </div>
  )
}


export default CheckoutButton;
