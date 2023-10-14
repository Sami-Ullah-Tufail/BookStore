import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import catReducer from './catagories/catagoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    catagories: catReducer,
  },
});

export const love = [];
