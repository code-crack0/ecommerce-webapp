import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import dataReducer from './features/data/dataSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    data: dataReducer
  },
})