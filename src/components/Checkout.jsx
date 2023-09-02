import { useCartContext } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { Storage, Auth } from "aws-amplify";

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

  console.log(cartItems, "items from checkout");
  console.log("------------------------------------------");

  const handleCheckoutClick = async () => {
    try {
      await Checkout(cartItems, subCognito);
    } catch (error) {
      console.log("Error durante el proceso de pago:", error);
      // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <button
      className="primary-button rounded p-1 text-white transition hover:scale-110 text-sm w-[95%]"
      onClick={handleCheckoutClick}
    >
      Pagar
    </button>
  );
};

const Checkout = async (cartItems, subCognito) => {
  try {
    const lineItems = await Promise.all(
      cartItems.map(async (item) => {
        const imageUrl = await Storage.get(item?.images.cover,{
          level: "public",
        });
        console.log(item, "cart items from checkout");
        return {
          price_data: {
            currency: "mxn",
            product_data: {
              name: item?.name,
              description: item?.short,
              images: [item?.cover],
            },
            unit_amount: item?.price,
          },
          quantity: item?.quantity,
        };
      })
    );

    const sub = subCognito;
    const purchase = cartItems.map((item) => item?.id);

    console.log(lineItems, "line items");

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify({ lineItems, purchase, sub }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json();
    window.location.href = body.url;
  } catch (error) {
    throw new Error("Error durante el proceso de pago: " + error.message);
  }
};

export default CheckoutButton;
