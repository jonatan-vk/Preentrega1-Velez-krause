import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/StateCart';
import Item from './Item';



const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    
  return (
    <div>
        Cart
        {cart.map((item) =>{
          console.log(cart)
            return (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                  <p>Price parcial: {item.price}</p>
                  <button onClick={() => {
                    const updatedCart = cart.filter(el => el.id !== item.id);
                    setCart(updatedCart);
                  }}>
                    Eliminar
                  </button>
                </div>
            )

        })}
    </div>
  )
}

export default Cart