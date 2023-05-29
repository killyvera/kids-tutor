import { useCartContext } from "@/context/CartContext";

const AddToCart = ({ element }) => {
  const { addToCart, removeCartItem } = useCartContext();
  console.log(element);
  return (
    <>
      <button className="bg-red-400 rounded p-1 text-white transition hover:scale-125 hover:bg-red-300" onClick={() => addToCart(element)}>Add To Cart</button>
      {/* <button onClick={() => removeCartItem(element)}>Remove</button> */}
    </>
  );
};

export default AddToCart;
