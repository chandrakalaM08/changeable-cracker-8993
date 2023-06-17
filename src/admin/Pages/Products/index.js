import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products`);
      setProducts(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);


  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/products/${productId}`);
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images?.image1}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">
              {product.description}
            </p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.categories}</p>
            <p className="product-gender">Gender: {product.gender}</p>
            {/* <p className="product-sizes">Sizes: {product.sizes?.join(", ")}</p> */}
            <p className="product-sizes">Sizes: {Array.isArray(product.sizes) ? product.sizes.join(", ") : product.sizes}</p>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-color">Color: {product.color}</p>
            <p className="product-discount">
              Discount: {product.discount_percentage}% off
            </p>
            <p className="product-off-price">
              Discounted Price: ${product.off_price}
            </p>
            <p className="product-rating">Rating: {product.ratings}</p>
            <p className="product-count">Count: {product.count}</p>

            <div className="product-actions">
              <button className="edit-button">
                <EditOutlined />
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(product.id)}
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
