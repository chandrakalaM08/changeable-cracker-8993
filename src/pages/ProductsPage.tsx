import React from 'react'
import ProductList from "../components/ProductList"
import Sidebar from "../components/Sidebar"
import SliderShow from '../components/SliderShow'

const ProductsPage = () => {
  return <div>
     <SliderShow/>
    <div style={{ display: "flex" }}>
     
    <div className="sidebar"  style={{  width: "15%", marginTop:"20px"}}>
     <Sidebar/>
    </div>
   
    <div className="product-list" style={{  width: "85%"}}>
    <ProductList/> 
    </div>
  </div>
  </div>
  
}

export default ProductsPage
