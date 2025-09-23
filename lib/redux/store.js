import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./featuers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
