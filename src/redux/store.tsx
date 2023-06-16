import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import {reducer as AuthReducer} from "../redux/AuthReducer/reducer"
import { reducer as ProductsReducer } from "../redux/ProductsReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, ProductsReducer });

export const store :any = legacy_createStore(rootReducer, applyMiddleware(thunk));
