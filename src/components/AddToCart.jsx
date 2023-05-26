import { useCartContext } from "@/context/cartContext"

const AddToCart = (item) => {
    console.log(item)
    const{addToCart} = useCartContext()
  return (

    <button onClick={()=>(addToCart(item))} >Add To Cart</button>
  )
}

export default AddToCart