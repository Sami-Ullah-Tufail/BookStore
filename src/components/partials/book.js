import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <li>
        <p>{title}</p>
        <p>{author}</p>
      </li>
      <button type="button">delete</button>
    </div>
  );
};

Book.defaultProps = {
  title: 'title',
  author: 'author',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
