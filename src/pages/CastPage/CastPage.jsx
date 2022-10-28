import { Loader } from '../../components/Loader/Loader';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from '../../services/MoviesApi';
import { UpdateLoader } from '../../components/Loader/loader.styled';
import { CastList } from '../../components/Cast/Cast';

const CastPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieCast(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading && (
        <UpdateLoader>
          <Loader />
        </UpdateLoader>
      )}
      {error && <p>We have no more details</p>}
      {movieInfo && <CastList movieInfo={movieInfo} />}
    </>
  );
};

export default CastPage;
