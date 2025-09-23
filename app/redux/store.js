import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    products: productsReducer,
  },
});
