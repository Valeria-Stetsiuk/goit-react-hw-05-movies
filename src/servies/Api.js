import axios from 'axios';
const KEY = 'aaa1d6367cdda8ac8cbbbe618a1aa87a';

export const MoviesAPI = {
  async fetchMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    );
    return await response.data.results;
  },
  async fetchMovieById(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return await response.data;
  },
  async fetchMovieBySearch(searchTitle) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchTitle}&page=1&include_adult=false`
    );
    return await response.data.results;
  },
  async fetchMovieCast(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return await response.data;
  },
  async fetchMovieReviews(movieId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return await response.data;
  },
};
