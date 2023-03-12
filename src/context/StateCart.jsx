import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext(null);

const StateCartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default StateCartProvider