import { createSlice } from "@reduxjs/toolkit";
import { getProductByCategory, getProducts } from "./productThunk";

const productSlice = createSlice({
    name: 'products',
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getProductByCategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(getProductByCategory.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(getProductByCategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default productSlice.reducer;