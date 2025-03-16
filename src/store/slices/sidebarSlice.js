import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: JSON.parse(localStorage.getItem('sidebarShow')) || false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.show = true;
      localStorage.setItem('sidebarShow', true);
    },
    hideSidebar: (state) => {
      state.show = false;
      localStorage.setItem('sidebarShow', false);
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
