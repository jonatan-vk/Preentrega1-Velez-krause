import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  const {id} = useParams();

  const [inmueble, setInmueble] = useState({});

  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await fetch('/src/data.json');
        const data = await response.json();
        setInmueble(data.find((Item)=> Item.id === parseInt(id)));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);
    console.log(inmueble)
    
  return (
    <>
      <ItemDetail inmueble={inmueble} />
    </>
  )
}
//ItemDetailContainer({inmueble});

export default ItemDetailContainer