import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Data from '/public/data/data.json'


  /* const ItemListContainer = () => {
  
    const [inmuebles, setInmuebles] = useState([]);
  
    useEffect(() => {
      fetch('/data/data.json')
        .then((res) => res.json())
        .then((data) => {
          const filteredData = data.filter(item => item.category === 'Casa');
          /* setInmuebles(data))
        .catch((err) => console.log(err));
    }, []); */
    //setInmuebles(filteredData);
//  })
  //.catch((err) => console.log(err));
//}, []);
  //  console.log(inmuebles)
 // return (
//<>
//  <ItemList inmuebles={inmuebles} />   
  //  </>
  //)
 //}
 const ItemListContainer = () => {
  
  const [inmuebles, setInmuebles] = useState([]);
  const { category } = useParams();
  //console.log(category);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(item => item.categoryId === category);
        setInmuebles(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(inmuebles)
return (
  <>
   
   {category ? <ItemList inmuebles={filteredData} /> : <ItemList inmuebles={Data} />}   
  </>
)
}


export default ItemListContainer

//import Data from "./public/data/data.json"; 


  /*const ItemListContainer = () => {
  const { categoryid } = useParams();
  // console.log(category);

  const [inmueble, setInmueble] = useState([]);

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setInmueble(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);  */

  //const catFilter = Data.filter((inmueble) => inmueble.categoryid === categoryid);
