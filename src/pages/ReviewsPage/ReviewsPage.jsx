import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { UpdateLoader } from '../../components/Loader/loader.styled';
import { ReviewList } from '../../components/Reviews/Reviews';
import { MoviesAPI } from '../../services/MoviesApi';
import { SubTitle } from './ReviewsPage.styled';

const ReviewsPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieReviews(movieId);
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
      {error && <SubTitle>We don't have any reviews for this movie</SubTitle>}
      {movieInfo && <ReviewList movieInfo={movieInfo} />}
    </>
  );
};

export default ReviewsPage;
