import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksAdded } from '../redux/books/booksSlice';

export default function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(booksAdded({ item_id: Math.random(), title: name, author }));
    setName('');
    setAuthor('');
  };

  return (
    <form className="newbook-form">
      <input type="text" id="inputText" placeholder="Book Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className="author-input" placeholder="Author Name" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="button" className="add-book" onClick={handleclick}>Add Book</button>
    </form>
  );
}
