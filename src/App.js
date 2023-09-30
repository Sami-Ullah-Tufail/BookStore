import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import './styles.css';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
