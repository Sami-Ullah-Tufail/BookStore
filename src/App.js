import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route,
} from 'react-router-dom';
import Books from './components/pages/books';
import Categories from './components/pages/categories';
import Nav from './components/pages/nav';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Nav />}>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Route>,

    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
