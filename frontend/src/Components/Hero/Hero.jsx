import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div>
            <div className='slogan'>
                <p>Unmatched Quality, Unbeatable Service</p>
            </div>
            </div>
            <h2>Since 1980 - ACME Corporation continues to be the leading</h2>
            <h2>wholesaler of industrial machines, equipment and tools for</h2>
            <h2>construction and manufacturing companies in Chennai.</h2>
            <div className='hero-latest-btn'>
                <div>Learn More</div>
                <img src={arrow_icon} alt=""></img>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} width={700} height={500} alt="" />
        </div>
    </div>
  )
}
