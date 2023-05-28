import { useCartContext } from "@/context/CartContext"

const AddToCart = ({element}) => {
    const{addToCart} = useCartContext()
    console.log(element)
  return (

    <button onClick={()=>(addToCart(element))} >Add To Cart</button>
  )
}

export default AddToCart