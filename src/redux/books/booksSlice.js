import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { title: '1000 Spatans', author: 'Romans', id: 1 },
    { title: '2000 Spatans', author: 'Romans', id: 2 },
    { title: '3000 Spatans', author: 'Romans', id: 3 }],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksAdded: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    booksRemoved: (state, action) => {
      const itemId = action.payload;
      state.books = [...state.books, state.books.filter((item) => item.id !== itemId)];
    },
  },
});
export default booksSlice.reducer;
export const { booksAdded, booksRemoved } = booksSlice.actions;
