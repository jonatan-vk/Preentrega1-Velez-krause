import React from 'react'
import Item from './Item'

function ItemList({inmuebles}) {
  return (
    <div>
        {inmuebles.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList