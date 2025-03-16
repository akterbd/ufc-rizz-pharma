import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategoriesApi } from "../../../helpers/api_helper";

export const getAllCategories = createAsyncThunk('categories/getAll', async (_, { rejectWithValue }) => {
    try {
        return await getAllCategoriesApi();
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
});