import { useState, useEffect } from 'react';

import Loader from 'shared/components/Loader';
import ErrorMsg from 'shared/components/ErrorMsg';
import { getTrending } from 'shared/api/movies';

import MovieList from 'modules/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const { results } = await getTrending();
        setMovies(prevMovies => [...prevMovies, ...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMsg error={error.message} />}
    </>
  );
};

export default Movies;
