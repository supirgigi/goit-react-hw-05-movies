import PropTypes from 'prop-types';

import { imageUrl } from 'shared/api/movies';
import placeholderImg from 'shared/placeholder/placeholder.jpg';

import styles from './movie-details.module.css';

const MovieDetails = ({ movie }) => {
  const { genres, vote_average, poster_path, title, overview } = movie;

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const userScore = `${(vote_average * 10).toFixed(0)}%`;
  const imgSrc = poster_path ? `${imageUrl}/${poster_path}` : placeholderImg;

  return (
    <div className={styles.wrapper}>
      <img src={imgSrc} alt={title} className={styles.img} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p>User Score: {userScore}</p>
        <p className={styles.subtitle}>Overview</p>
        <p>{overview}</p>
        <p className={styles.subtitle}>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
  }),
};

export default MovieDetails;
