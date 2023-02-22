import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


const ItemListContainer = () => {
  
  const [inmuebles, setInmuebles] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => setInmuebles(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(inmuebles)
  return (
    <>
     <ItemList inmuebles={inmuebles} />   
    </>
  )
}

export default ItemListContainer
