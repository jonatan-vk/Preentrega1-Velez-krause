import React from 'react'

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

export default TrabajoEnClase