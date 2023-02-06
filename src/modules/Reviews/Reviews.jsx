import PropTypes from 'prop-types';

import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <p className={styles.author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.defaultProps = {
  reviews: [],
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
