import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id:1,
title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
price:109.95,
description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
category:"men's clothing",
image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }

];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;