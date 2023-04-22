// src/reducers/library.js
import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    removeCard: (state, action) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addCard, removeCard } = librarySlice.actions;
export default librarySlice.reducer;
