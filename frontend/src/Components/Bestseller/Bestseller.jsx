import React from 'react'
import './Bestseller.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const Bestseller = () => {
  return (
    <div className='bestseller'>
        <h1>OUR BESTSELLERS</h1>
        <hr />
        <div className='bestseller-item'>
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} unit={item.unit}/>
        })}
        </div>
    </div>
  )
}
