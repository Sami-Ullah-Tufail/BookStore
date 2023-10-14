import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ErF3GluEp9ZnqOaca0a7/books';

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (bookData) => {
  await axios.post(API_BASE_URL, bookData);
  return bookData;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${API_BASE_URL}/${bookId}`);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
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
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
