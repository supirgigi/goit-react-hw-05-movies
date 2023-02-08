import PropTypes from 'prop-types';

import { imageUrl } from 'shared/api/movies';
import placeholderImg from 'shared/placeholder/placeholder.jpg';

import styles from './cast.module.css';

const Cast = ({ cast }) => {
  return (
    <ul className={styles.list}>
      {cast.map(({ name, character, id, profile_path }) => (
        <li key={id} className={styles.item}>
          <img
            src={profile_path ? imageUrl + profile_path : placeholderImg}
            alt={name + ' photo'}
            className={styles.img}
          />
          <p>{name}</p>
          <p>Role: {character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.defaultProps = {
  cast: [],
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
