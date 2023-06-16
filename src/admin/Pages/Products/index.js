import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios"
import './index.css';
function Products() {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProducts(response.data);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);



  return (
    <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.images.image1} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
          <p className="product-category">Category: {product.categories}</p>
          <p className="product-gender">Gender: {product.gender}</p>
          <p className="product-sizes">Sizes: {product.sizes.join(", ")}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-color">Color: {product.color}</p>
          <p className="product-discount">Discount: {product.discount_percentage}% off</p>
          <p className="product-off-price">Discounted Price: ${product.off_price}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-count">Count: {product.count}</p>
        </div>
      ))}
    </div>
  );
}
export default Products;

