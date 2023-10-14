import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ErF3GluEp9ZnqOaca0a7/books');
  return response.data;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((x) => {
            books.push({ item_id: x, ...action.payload[x][0] });
          });

          state.books = books;
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.error = 'No result was found!';
        }
      });
  },
});

export default booksSlice.reducer;
export const { booksAdded, booksRemoved } = booksSlice.actions;
