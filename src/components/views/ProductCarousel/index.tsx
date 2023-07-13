import React from 'react'

const ProductCarousel = ({productData}:any) => {
  return (
    <div>{productData[0].productName}</div>
  )
}

export default ProductCarousel