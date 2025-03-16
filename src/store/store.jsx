import { configureStore } from '@reduxjs/toolkit';
import apiStatusSlice from './actionReducer/apiStatusSlice';
import cartSlice from './actionReducer/cartSlice';
import sidebarSlice from './actionReducer/sidebarSlice';

// Middleware to save state to localStorage
const saveState = (state) => {
  try {
    const serializedCartState = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedCartState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const localStorageMiddleware = store => next => action => {
  let result = next(action);
  saveState(store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    apiStatus: apiStatusSlice,
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
