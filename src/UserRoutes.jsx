import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieSearchPage = lazy(() =>
  import('pages/MovieSearchPage/MovieSearchPage')
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCastPage = lazy(() => import('pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() =>
  import('pages/MovieReviewsPage/MovieReviewsPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCastPage />} />
          <Route path="reviews" element={<MovieReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
