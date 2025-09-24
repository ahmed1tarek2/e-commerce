import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk لجلب المنتجات من API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data;
      // لو Array
    if (Array.isArray(data)) return data;

    // لو فيه data.products بس جواها object
    if (data.products && typeof data.products === "object") {
      return Object.values(data.products);
    }

    // لو data نفسه object فيه المنتجات
    if (typeof data === "object") {
      return Object.values(data);
    }

    return [];
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
