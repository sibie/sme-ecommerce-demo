import React, { useContext } from 'react'
import './CSS/ProductCategory.css'
import { ProductContext } from '../Context/ProductContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ProductCategory = (props) => {
  const {all_product} = useContext(ProductContext)
  return (
    <div className='product-category'>
      <img className='product-category-banner' src={props.banner} alt=""/>
      <div className='product-category-index-sort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="product-category-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="product-category-products">
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} unit={item.unit}/>
          } else {
            return null;
          }
        })}
      </div>
      <div className="product-category-load-more">
        Explore More
      </div>
    </div>
  )
}
