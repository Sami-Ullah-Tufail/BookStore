import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, fetchBooksAsync } from '../redux/books/booksSlice';

export default function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(addBookAsync({
      item_id: Math.random(), title: name, author, category: (''),
    }));
    setName('');
    setAuthor('');
    fetchBooksAsync();
  };

  return (
    <form className="newbook-form">
      <input type="text" id="inputText" placeholder="Book Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className="author-input" placeholder="Author Name" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="button" className="add-book" onClick={handleclick}>Add Book</button>
    </form>
  );
}
