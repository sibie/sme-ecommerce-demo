import React from 'react'
import './NewProducts.css'
import new_products from '../Assets/new_products'
import { Item } from '../Item/Item'

export const NewProducts = () => {
  return (
    <div className='new-products'>
        <h1>LATEST PRODUCTS</h1>
        <hr />
        <div className='product-item'>
          {new_products.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} unit={item.unit}/>
          })}
        </div>
    </div>
  )
}
