import React from 'react'
import ProductList from "../components/ProductList"
import Sidebar from "../components/Sidebar"

const ProductsPage = () => {
  return <div style={{display: "flex"}}>
    <div className="sidebar"  style={{  width: "15%"}}>
     <Sidebar/>
    </div>
   
    <div className="product-list" style={{  width: "85%"}}>
    <ProductList/> 
    </div>
  </div>
}

export default ProductsPage
