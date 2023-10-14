import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksAdded: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    booksRemoved: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});
export default booksSlice.reducer;
export const { booksAdded, booksRemoved } = booksSlice.actions;
