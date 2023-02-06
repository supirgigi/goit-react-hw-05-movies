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
        const result = await getMovieCast(id);
        setCast(result.cast);
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
      {cast.length > 0 && <Cast cast={cast} />}
      {loading && <Loader />}
      {error && <ErrorMsg />}
    </>
  );
};

export default MovieCastPage;
