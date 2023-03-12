import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../context/StateCart"

const ComponentA = () => {
  const [ cart, setCart ] = useContext(CartContext);
  console.log(cart)
  return (
    <div>ComponentA</div>
  )
}

export default ComponentA