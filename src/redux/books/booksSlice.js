import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksAdded: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    booksRemoved: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});
export default booksSlice.reducer;
export const { booksAdded, booksRemoved } = booksSlice.actions;
