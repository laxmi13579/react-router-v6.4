import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import ProductsPage from "./pages/ProductsPage"
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
      {index: true, element: <HomePage/>},
      {path:"products", element: <ProductsPage/>},
      {path:"products/:productId", element: <ProductDetails/>},
    ]
  }
  
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
