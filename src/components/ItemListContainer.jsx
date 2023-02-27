import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Data from '/public/data/data.json'


 const ItemListContainer = () => {
  
  const [inmuebles, setInmuebles] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        if (category=== undefined){
          setInmuebles(data)
        } else {
          console.log(data)
        const filteredData = data.filter(item => item.category === category);
        setInmuebles(filteredData);
      }
      })
      .catch((err) => console.log(err));
  }, [category]);
  console.log(inmuebles)
return (
  <>
      <ItemList inmuebles={inmuebles} />
  </>
)
}


export default ItemListContainer

