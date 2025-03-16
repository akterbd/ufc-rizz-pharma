import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const apiStatusSlice = createSlice({
  name: 'apiStatus',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    setSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    resetStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const { setLoading, setSuccess, setError, resetStatus } = apiStatusSlice.actions;
export default apiStatusSlice.reducer;
