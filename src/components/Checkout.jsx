import { useCartContext } from "@/context/CartContext";

const Checkout = async (cartItems) => {
  {
    console.log(cartItems);
  }
  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "mxn",
      product_data: {
        name: item.name,
        description: item.short,
        // description: item.description,
        images: [item.images.cover],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));
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
  // Rest of the code remains the same
};

const CheckoutButton=()=>{
    const { cartItems, addToCart, removeCartItem, getTotalPrice } = useCartContext();
    return(
        <button className="primary-button rounded p-1 text-white transition hover:scale-110 text-sm w-full" onClick={()=>Checkout(cartItems)}>Pagar</button>
    )
}
export default CheckoutButton;
