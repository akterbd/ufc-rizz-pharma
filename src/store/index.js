import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import sidebarSlice from './slices/sidebarSlice';
import categorySlice from './slices/categories/categorySlice';
import productSlice from './slices/products/productSlice';

// Middleware to save state to localStorage
const saveState = (state) => {
  try {
    const serializedCartState = JSON.stringify(state.cart);
    localStorage.setItem('cartItems', serializedCartState);
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
    cart: cartSlice,
    sidebar: sidebarSlice,
    categories: categorySlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
