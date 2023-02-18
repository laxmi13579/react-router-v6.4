import React from "react"
import { useParams,Link } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams();

  return (
    <>
        <h1>product details page</h1>
        <p>{params.productId}</p>
        <Link to=".." relative="path" >Back</Link>
    </>
  )
}

export default ProductDetails