import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = [...existingCart, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
