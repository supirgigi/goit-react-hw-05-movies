import axios from 'axios';

export const imageUrl = 'https://image.tmdb.org/t/p/w300';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd69968ee858c93c3dbc043339ed72979',
    page: 1,
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
