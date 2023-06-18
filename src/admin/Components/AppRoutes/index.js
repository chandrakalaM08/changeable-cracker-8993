import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Products from "../../Pages/Products";
import Orders from "../../Pages/Orders";
import AddProduct from "../../Pages/AddProduct"
import Edit from "../../Pages/Products/Edit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
}
export default AppRoutes;
