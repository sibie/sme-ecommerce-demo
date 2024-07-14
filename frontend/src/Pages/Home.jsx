import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Bestsellers } from '../Components/Bestsellers/Bestsellers'
import { NewProducts } from '../Components/NewProducts/NewProducts'
import { Newsletter } from '../Components/Newsletter/Newsletter'

export const Home = () => {
  return (
    <div>
        <Hero />
        <Bestsellers />
        <NewProducts />
        <Newsletter />
    </div>
  )
}
