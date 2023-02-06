import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './additional-info.module.css';

const MovieAdditionalInfo = ({ id, from }) => {
  return (
    <div>
      <h3 className="title">Additional information</h3>
      <ul className={styles.list}>
        <li>
          <Link state={{ from }} to={`/movies/${id}/cast`}>
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to={`/movies/${id}/reviews`}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

MovieAdditionalInfo.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieAdditionalInfo;
