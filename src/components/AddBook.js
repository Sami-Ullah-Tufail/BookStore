import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';

export default function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    dispatch(addBookAsync({
      item_id: Math.random(),
      title: name,
      author,
      category: (''),
    }));
    setName('');
    setAuthor('');
  };

  return (
    <section className="add-book-container">
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-book-form">
        <input type="text" className="title-input" placeholder="Book title" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" className="author-input" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={handleclick} type="submit" className="add-book-btn">Add book</button>
      </form>
    </section>
  );
}
