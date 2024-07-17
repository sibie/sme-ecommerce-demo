import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=""></img>
        <p>{props.name}</p>
        <div className='item-cost'>
            <div className='item-price'><span class="WebRupee">&#x20B9;</span> {props.price}</div>
            <div className='cost-divider'>/</div>
            <div className='item-unit'>{props.unit}</div>
        </div>
    </div>
  )
}
