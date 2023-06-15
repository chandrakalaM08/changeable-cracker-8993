import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import PaymentPage from "../pages/PaymentPage"
import SingleProductPage from '../pages/SingleProductPage'
import PageNotFound from "../pages/PageNotFound"
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route to="/" element={<HomePage />}></Route>
                <Route to="/login" element={<SimpleCard />}></Route>
                <Route to="/products" element={<ProductsPage />}></Route>
                <Route to="/cart" element={
                    <PrivateRoute>
                        <CartPage />
                    </PrivateRoute>
                }></Route>
                <Route to="/payment" element={
                    <PrivateRoute>
                        <PaymentPage />
                    </PrivateRoute>}></Route>
                <Route to="/products/:id" element={<SingleProductPage />}></Route>
                <Route to="*" element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes