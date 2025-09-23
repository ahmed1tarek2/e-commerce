import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk لجلب المنتجات من API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products
      console.log("API Data:", data);
    return data; // ← هنا بيجي Array من المنتجات
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ← تخزين المنتجات في items
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
