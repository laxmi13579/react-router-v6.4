import React from "react"
import { useNavigate, Link } from "react-router-dom";

const PRODUCTS = [
    {id: "1", title: "product 1"},
    {id: "2", title: "product 2"},
    {id: "3", title: "product 3"},
    {id: "4", title: "product 4"},
]

const ProductsPage = () => {
    const navigate = useNavigate();

    function navigateHandler(){
        navigate("/");
    }
  return (
    <>
        <p>Products List</p>
        {PRODUCTS.map((product) => <li key={product.id}><Link to={product.id}>{product.title}</Link></li>)}
        <button onClick={navigateHandler}>BACK TO HOME</button>
    </>
  )
}

export default ProductsPage;
