import React from 'react'

import { Link } from 'react-router-dom'

function Item({item}) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <Link to={"/item/${item.id}"}> <button>Ver mas</button></Link>
    </div>
  )
}

export default Item