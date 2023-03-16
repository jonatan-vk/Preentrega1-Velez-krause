/* import React from 'react'

const TrabajoEnClase = () => {
  const noVocals = (e) => {
    //console.log(e); 
    if (
        e.key === "a" || "e" || "i" || "o" || "u"
    ){
        e.preventDefault();
    } else {
        console.log(e.key);
    }
  };

  return (
    <input type="text" onKeyDown={noVocals} />
  )
};

export default TrabajoEnClase */




import React from 'react'
import { useState , useEffect } from "react";

const trabajoenclase = () => {
  const [ loading, setLoading ] = useState(true);

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false)
    }, 10000);
  },[]);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>Loaded!</h2> }
    </div>
  )
}

export default trabajoenclase