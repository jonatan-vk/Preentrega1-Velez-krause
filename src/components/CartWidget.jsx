import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/StateCart';


const CartWidget = () => {
  const [ cart, setCart ] = useContext(CartContext
  )
  return (
    <div>
      <span className="material-symbols-outlined"><span className="CampoCarrito">2</span>
shopping_cart
</span>
      
    </div>
  )
}

export default CartWidget