import React, { useState } from "react";
import "./post.css";
export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    gender: "",
    categories: "",
    sizes: "",
    description: "",
    category: "",
    brand: "",
    color: "",
    discount_percentage: "",
    off_price: "",
    images: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
    },
    rating: "",
    count: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e, imageName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: {
        ...prevFormData.images,
        [imageName]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the payload
    const payload = {
      title: formData.title,
      price: formData.price,
      gender: formData.gender,
      categories: formData.categories,
      sizes: formData.sizes,
      description: formData.description,
      category: formData.category,
      brand: formData.brand,
      color: formData.color,
      discount_percentage: formData.discount_percentage,
      off_price: formData.off_price,
      images: {
        image1: formData.images.image1,
        image2: formData.images.image2,
        image3: formData.images.image3,
        image4: formData.images.image4,
      },
      rating: formData.rating,
      count: formData.count,
    };

    // Perform the POST request
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        // Reset the form
        setFormData({
          title: '',
          price: '',
          gender: '',
          categories: '',
          sizes: '',
          description: '',
          category: '',
          brand: '',
          color: '',
          discount_percentage: '',
          off_price: '',
          images: {
            image1: '',
            image2: '',
            image3: '',
            image4: '',
          },
          rating: '',
          count: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Categories:</label>
        <input
          type="text"
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Sizes:</label>
        <input
          type="text"
          name="sizes"
          value={formData.sizes}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
        ></textarea>

        <label className="form-label">Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Color:</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Discount Percentage:</label>
        <input
          type="number"
          name="discount_percentage"
          value={formData.discount_percentage}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Off Price:</label>
        <input
          type="number"
          name="off_price"
          value={formData.off_price}
          onChange={handleChange}
          className="form-input"
        />

<label className="form-label">Image 1:</label>
        <input
          type="text"
          name="image1"
          value={formData.images.image1}
          onChange={(e) => handleImageChange(e, 'image1')}
          className="form-input"
        />

        <label className="form-label">Image 2:</label>
        <input
          type="text"
          name="image2"
          value={formData.images.image2}
          onChange={(e) => handleImageChange(e, 'image2')}
          className="form-input"
        />

        <label className="form-label">Image 3:</label>
        <input
          type="text"
          name="image3"
          value={formData.images.image3}
          onChange={(e) => handleImageChange(e, 'image3')}
          className="form-input"
        />

        <label className="form-label">Image 4:</label>
        <input
          type="text"
          name="image4"
          value={formData.images.image4}
          onChange={(e) => handleImageChange(e, 'image4')}
          className="form-input"
        />

        <label className="form-label">Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Count:</label>
        <input
          type="number"
          name="count"
          value={formData.count}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="form-button">
          Add Product
        </button>
      </form>
    </div>
  );
}
