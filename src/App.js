import React, { useEffect } from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import './styles.css';
import { useDispatch } from 'react-redux';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import { fetchBooksAsync } from './redux/books/booksSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
