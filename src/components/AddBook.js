import React from 'react';

const AddBook = () => (
  <form className="newbook-form">
    <input type="text" id="inputText" placeholder="Book Name" />
    <input type="text" className="author-input" placeholder="Author Name" name="author" id="author" />
    <button type="button" className="add-book">Add Book</button>
  </form>
);

export default AddBook;
