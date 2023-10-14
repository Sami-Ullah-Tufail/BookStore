import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';

export default function Book() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);
  const handleclick = (id) => {
    dispatch(removeBookAsync(id));
  };
  return (
    <>
      {books.map((book) => (
        <div className="book" key={book.id}>
          <div className="book-info">
            <div className="book-name">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="action-btns-container">
              <button type="button" className="action-btn comment">Comments</button>
              <div className="vertical-divider" />
              <button onClick={() => handleclick(book.item_id)} type="button" className="action-btn remove">Remove</button>
              <div className="vertical-divider" />
              <button type="button" className="action-btn edit">Edit</button>
            </div>
          </div>
          <div className="progress-info">
            <div className="progress-amount">
              <div className="progress-bar" />
              <div className="progress-percent">
                <div className="amount">64%</div>
                <div className="completion">Completed</div>
              </div>
            </div>
            <div className="progress-divider" />
            <div className="chapter-info">
              <div className="heading">CURRENT CHAPTER</div>
              <div className="current-chapter">Chapter 17</div>
              <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
    </>

  );
}
