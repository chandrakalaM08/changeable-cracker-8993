
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";
import SingleProductPage from "../pages/SingleProductPage";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";

import AppRoutes from "../admin/Components/AppRoutes";
import Checkout from "../components/checkout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route
          path="/cart"
          element={
            // <PrivateRoute>
            <CartPage />
            // </PrivateRoute>
          }
        ></Route>

        <Route path="/payment" element={
          <PaymentPage />
        }>
        </Route>

        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
 <Route path="/checkout" element={<Checkout/>}/><Route/>

        {/* <Route path="/approutes" element={<AppRoutes/>}></Route> */}
      </Routes>
    </div>
  );
};


export default AllRoutes;
