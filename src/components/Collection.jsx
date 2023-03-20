import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const Collection = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(()=> {
    const db = getFirestore();

    const itemsFireBs = collection(db, "Inmubles");
    getDocs(itemsFireBs).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);
  return (
    <div>
        <h2>Colection</h2>      
        {products.map((product, index)=> (
        <div key={`{${product.id}-${index}`}>
          <h3>Producto: {product.category}</h3>
          <h3>Precio : {product.price}</h3>
    </div>     
      ))}
    </div>
  )
}

export default Collection