import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from 'shared/components/Loader';
import ErrorMsg from 'shared/components/ErrorMsg';
import { searchMovies } from 'shared/api/movies';

import MovieList from 'modules/MovieList';
import SearchForm from 'modules/SearchForm';

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      setMovies([]);

      try {
        const { results, total_results } = await searchMovies(query);
        if (total_results === 0) {
          return toast.error(`No movies with title "${query}" found`);
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const changeQuery = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSubmit={changeQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMsg error={error.message} />}
    </>
  );
};

export default MovieSearchPage;
