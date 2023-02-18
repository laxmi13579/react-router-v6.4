import React from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams();

  return (
    <>
        <h1>product details page</h1>
        <p>{params.productId}</p>
    </>
  )
}

export default ProductDetails