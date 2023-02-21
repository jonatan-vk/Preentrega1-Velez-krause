import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {
    const { id } = useParams();
        //console.log(id);

        /* const [inmuebles, setInmuebles] = useState([]);

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
  }, []); */

    
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer