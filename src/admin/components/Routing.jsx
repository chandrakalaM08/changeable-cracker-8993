import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Comment from '../pages/Comment'
import Analytics from "../pages/Analytics"
import Product from '../pages/Product'
import ProductList from '../pages/ProductList'
import Sidebar from './Sidebar'
export default function Routing() {
  return (
    <div>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        </Sidebar>
    </div>
  )
}
