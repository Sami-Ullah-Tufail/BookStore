import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import AddBook from './AddBook';
import { booksRemoved } from '../redux/books/booksSlice';

export default function Book() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const handleclick = (id) => {
    dispatch(booksRemoved(id));
  };
  return (
    <>
      <h1 className="title">Book Lists</h1>
      <div className="books">
        {books.map((book) => (
          <ul className="booklists" key={book.title}>
            <li className="lists">{book.title}</li>
            <li className="lists">{book.author}</li>
            <button type="button" className="remove-btn" onClick={handleclick()}>Delete</button>
          </ul>
        ))}
      </div>
      <div className="book-form">
        <AddBook />
      </div>
    </>
  );
}
