import axios from "axios";

export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};


export const getProducts = ()=>{
  return fetch ("http://localhost:8080/products").then((res)=>res.json())

  
  
}

const API_URL = "http://localhost:8080/products";

// export const addProduct = async () => {
//   const res = await axios.post(`${API_URL}`)
//   return res.data
// };



export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`http://localhost:8080/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};