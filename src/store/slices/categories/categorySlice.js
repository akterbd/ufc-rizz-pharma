import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./categoryThunk";
const predefinedItem = { 
    name: "All", 
    slug: "all", 
    url: "https://dummyjson.com/products/" 
};
const categorySlice = createSlice({
    name: 'categories',
    initialState: {
      items: [predefinedItem],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllCategories.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
          state.loading = false;
          state.items = [predefinedItem, ...action.payload];
        })
        .addCase(getAllCategories.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
export default categorySlice.reducer;