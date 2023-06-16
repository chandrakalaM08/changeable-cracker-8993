// export const GET_PRODUCTS = "GET_PRODUCTS"

import { Action } from "redux";

type Product = {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
};

// Action types
const ADD_ITEM = "ADD_ITEM";
const DEL_ITEM = "DEL_ITEM";

// Action interfaces
interface AddItemAction extends Action<typeof ADD_ITEM> {
  payload: Product;
}

interface DelItemAction extends Action<typeof DEL_ITEM> {
  payload: Product;
}

// Action creators
export const addCart = (product: Product): AddItemAction => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

export const delCart = (product: Product): DelItemAction => {
  return {
    type: DEL_ITEM,
    payload: product,
  };
};
