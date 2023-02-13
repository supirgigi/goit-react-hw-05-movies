import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import ErrorMsg from 'shared/components/ErrorMsg';
import { getMovieCast } from 'shared/api/movies';

import Cast from 'modules/Cast';

const MovieCastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setLoading(true);
      setError(null);

      try {
        const { cast } = await getMovieCast(id);
        if (cast.length === 0) {
          throw new Error('No cast info available for this movie');
        }
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMsg error={error.message} />}
      {cast.length > 0 && <Cast cast={cast} />}
    </>
  );
};

export default MovieCastPage;
