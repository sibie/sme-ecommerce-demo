import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useParams } from 'react-router-dom';

export const Product = () => {
    const {all_products} = useContext(ProductContext);
    const {productId} = useParams();
    const product = all_products.find((e) => e.id === Number(productId) )
    return (
        <div>Product</div>
    )
}
