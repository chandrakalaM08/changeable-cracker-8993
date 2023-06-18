import React, { useEffect, useReducer } from "react";
import axios from "axios";

// import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "Change_Input": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case "PREFELL_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error("Invalid Input type");
    }
  }
};


const initialState = {
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
}

export default function Edit() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        updatedData(id, state).then((res) => {
          navigate(`/admin/products`);
        });
      };

      

    const updatedData = (id, data) => {
        return axios({
          method: "put",
          url: `http://localhost:8080/products/${id}`,
          data: data,
        });
      };

      const handelChange = (e) => {
        let { name, value, type } = e.target;
    
        const payload = {
          name: name,
          value: type === "number" ? Number(value) : value,
        };
    
        dispatch({ type: "Change_Input", payload });
      };
    

    useEffect(() => {
        axios({
          method: "get",
          url: `http://localhost:8080/products/${id}`,
        }).then((res) => {
          console.log(res.data);
          dispatch({ type: "PREFELL_DATA", payload: res?.data });
        });
      }, [id]);

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title:</label>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Price:</label>
        <input
          type="number"
          name="price"
          value={state.price}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Gender:</label>
        <input
          type="text"
          name="gender"
          value={state.gender}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Categories:</label>
        <input
          type="text"
          name="categories"
          value={state.categories}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Sizes:</label>
        <input
          type="text"
          name="sizes"
          value={state.sizes}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Description:</label>
        <textarea
          name="description"
          value={state.description}
          onChange={handelChange}
          className="form-input"
        ></textarea>

        <label className="form-label">Category:</label>
        <input
          type="text"
          name="category"
          value={state.category}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Brand:</label>
        <input
          type="text"
          name="brand"
          value={state.brand}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Color:</label>
        <input
          type="text"
          name="color"
          value={state.color}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Discount Percentage:</label>
        <input
          type="number"
          name="discount_percentage"
          value={state.discount_percentage}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Off Price:</label>
        <input
          type="number"
          name="off_price"
          value={state.off_price}
          onChange={handelChange}
          className="form-input"
        />

<label className="form-label">Image 1:</label>
        <input
          type="text"
          name="image1"
          value={state.images.image1}
          onChange={ handelChange}
          className="form-input"
        />

        <label className="form-label">Image 2:</label>
        <input
          type="text"
          name="image2"
          value={state.images.image2}
          onChange={ handelChange}
          className="form-input"
        />

        <label className="form-label">Image 3:</label>
        <input
          type="text"
          name="image3"
          value={state.images.image3}
          onChange={ handelChange}
          className="form-input"
        />

        <label className="form-label">Image 4:</label>
        <input
          type="text"
          name="image4"
          value={state.images.image4}
          onChange={ handelChange}
          className="form-input"
        />

        <label className="form-label">Rating:</label>
        <input
          type="number"
          name="rating"
          value={state.rating}
          onChange={handelChange}
          className="form-input"
        />

        <label className="form-label">Count:</label>
        <input
          type="number"
          name="count"
        //   value={formData.count}
          onChange={handelChange}
          className="form-input"
        />

        <button type="submit" className="form-button">
          Add Product
        </button>
      </form>
    </div>
  )
}
