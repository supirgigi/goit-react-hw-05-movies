import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import ErrorMsg from 'shared/components/ErrorMsg';
import { getMovieDetails } from 'shared/api/movies';

import MovieDetails from 'modules/MovieDetails';
import AdditionalInfo from 'modules/AdditionalInfo';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <button type="button" onClick={goBack} className="btn">
        Go back
      </button>
      {loading && <Loader />}
      {error && <ErrorMsg error={error.message} />}
      {movie.title && (
        <>
          <MovieDetails movie={movie} />
          <AdditionalInfo from={from} id={movieId} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
