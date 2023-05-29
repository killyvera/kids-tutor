import { useCartContext } from "@/context/CartContext";

const CounterItems = ({ item }) => {
  const { cartItems, addToCart, removeCartItem } = useCartContext();
  return (
    <div className="flex flex-row items-center p-3">
      <button className="bg-red-400 rounded text-white transition hover:scale-125 hover:bg-red-300 h-5 w-5 text-sm" onClick={() => addToCart(item)}>+</button>
      <p className="w-5 h-5 text-center justify-center text-sm">{item?.quantity}</p>
      <button className="bg-red-400 rounded text-white transition hover:scale-125 hover:bg-red-300 h-5 w-5 text-sm" onClick={() => removeCartItem(item)}>-</button>
      <p className="text-sm pl-3">{'MXN ' + item?.price * item?.quantity}</p>
    </div>
  );
};
export default CounterItems;
