import React, { useContext, useState } from 'react'
import { CartContext } from '../context/StateCart';

 
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const { cart, setCart } = useContext(CartContext);
  const { agregarACarrito } = useContext(CartContext);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  /* const agregarACarrito = ()=> {
    setCart((itemsActuales) => {
      const itemsAAgregar = itemsActuales.find((item) => item.id === id);
      if (itemsActuales) {
        return itemsActuales.map((item) => {
          if (item.id === id ) {
            return { ...item, quantity: item.quantity + count};
          } else {
            return item;
          }
        });
      } else {
        return [...itemsActuales, { id, quantity: count, price}];
      }
    });
  }; */
  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={restar}>
          -
        </button>
        <span className="btn ">{count}</span>
        <button className="btn btn-dark" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-dark"
        disabled={count === 0 || stock === 0}
        onClick={() => {
          onAdd(count);
          agregarACarrito(id, count, price);
        }}
      >
        Comprar
      </button>
    </>
  );
};

export default ItemCount