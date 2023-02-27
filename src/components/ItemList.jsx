import React from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item'

/* function ItemList({inmuebles}) {
  return (
    <div>
        {inmuebles.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
} */
/* function ItemList({inmuebles}) {
  const filteredInmuebles = inmuebles.filter(item => item.category === 'Casa');
  return (
    <div>
        {filteredInmuebles.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
} */
function ItemList({inmuebles}) {
  const { category } = useParams();
  const filteredInmuebles = inmuebles.filter(item => item.categoryId === category);
  return (
    <div>
        {filteredInmuebles.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList