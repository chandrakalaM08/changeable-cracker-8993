import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Products from "../../Pages/Products";
import Orders from "../../Pages/Orders";
import AddProduct from "../../Pages/AddProduct"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
    </Routes>
  );
}
export default AppRoutes;
