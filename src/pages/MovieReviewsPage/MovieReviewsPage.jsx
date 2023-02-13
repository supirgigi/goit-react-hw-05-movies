import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import ErrorMsg from 'shared/components/ErrorMsg';
import { getMovieReviews } from 'shared/api/movies';

import Reviews from 'modules/Reviews';

const MovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const { results } = await getMovieReviews(id);
        if (results.length === 0) {
          throw new Error('No reviews available for this movie');
        }
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMsg error={error.message} />}
      {reviews.length > 0 && <Reviews reviews={reviews} />}
    </>
  );
};

export default MovieReviewsPage;
