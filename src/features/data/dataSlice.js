// dataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  searchResults: [], // New state to store search results
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    searchData: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.data.filter(item =>
        item.title?.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setData, searchData } = dataSlice.actions;

export default dataSlice.reducer;
