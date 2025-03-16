import { createSlice } from '@reduxjs/toolkit';
import { calculateTotalPrice } from '../../utils/calculateTotalPrice';
const initialState = {
  items: [],
  totalPrice: 0
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState(),
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
