import React from 'react'

interface Props {
    title:string
    product: Product
}

const ProductCard = ({title, product}:Props) => {
  return (
    <>
        <h2>{title}</h2>
        <ul>
            <li>id: {product.id}</li>
            <li>name: {product.name}</li>
            <li>price: {product.price}</li>
            <li>category: {product.category}</li>
            l{product.description && <li>description: {product.description}</li>}
        </ul>
    </>
  )
}
//stopped in here
export default ProductCard