import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Pages/Slice/productSlice";
import cartSlice from "./Pages/Slice/cartSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});
const persitedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persitedReducer,
});

export default store;
