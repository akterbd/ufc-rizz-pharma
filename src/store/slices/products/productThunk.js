import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductByCategoryApi, getProductsApi } from "../../../helpers/api_helper";

export const getProducts = createAsyncThunk('products/getAll', async (_, { rejectWithValue }) => {
    try {
      return await getProductsApi();
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});
  
export const getProductByCategory = createAsyncThunk('products/getByCategory', async (category, { rejectWithValue }) => {
    try {
      return await getProductByCategoryApi(category);
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});