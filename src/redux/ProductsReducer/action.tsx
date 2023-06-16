import { Dispatch } from "react";
import {
  PRODUCT_FAILURE,
  PRODUCT_GET_SUCCESS,
  PRODUCT_POST_SUCCESS,
  PRODUCT_REQUEST,
} from "../actionTypes";

import axios from "axios";
import { AnyAction } from "redux";
import { any } from "prop-types";

// post request

export const postProduct = (newProduct :any) => (dispatch:any) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios({
    method: "post",
    url: "https://vast-red-fawn-cuff.cyclic.app/products",
    data: newProduct,
  })
    .then((res) => {
      dispatch({ type: PRODUCT_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

// get request
export const getProducts = (paramObj:any) => (dispatch: any) =>{
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get("https://vast-red-fawn-cuff.cyclic.app/products", paramObj)
    .then((res) => {
      dispatch({ type: PRODUCT_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

