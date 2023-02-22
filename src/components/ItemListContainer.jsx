import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import Data from "../data.json"
import ItemList from './ItemList'


const ItemListContainer = () => {
  
  const [inmuebles, setInmuebles] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
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


  /* const {id}= useParams();  
    console.log(id);
    

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setInmuebles(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const categoriaFilter = Data.filter((inmuebles) => inmuebles.id === id);
 */