import React from "react"
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
        <nav>
            <li><NavLink to="" style={({ isActive}) => ({color : isActive ? "red" : "black"})}>Home</NavLink></li>
            <li><NavLink to="products" style={({ isActive}) => ({color : isActive ? "red" : "black" })}>Products</NavLink></li>
        </nav>
    </header>
  )
}

export default MainNavigation;
