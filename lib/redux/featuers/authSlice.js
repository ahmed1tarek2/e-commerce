import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

// 🔹 Signup
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/signup", data);
      console.log(res)
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Signup failed"
      );
    }
  }
);

// 🔹 Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/login", data);
      console.log(res);
      
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Login failed"
      );
    }
  }
);

// 🔹 Logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await api.post("/auth/logout");
  return null;
});


export const userData = createAsyncThunk(
  "auth/user",
  async (data, thunkAPI) => {
    try {
      const res = await api.get("/auth/user", data);
      console.log(res);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "no user exist"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        // state.user=state.payload.user;  
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
       state.error = action.payload;
      })

      // user info
      .addCase(userData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; 
      })
      .addCase(userData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
