import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { MoviesAPI } from '../../servies/MoviesApi';
import { Loader } from '../../components/Loader/Loader';
import { UpdateLoader } from '../../components/Loader/loader.styled';
import { Link } from '../../components/Navigation/Navigation.styled';
import {
  Poster,
  Image,
  MainContainer,
  Btn,
  SecondTitle,
  ListAdditionalInfo,
} from '../MoviesDetailsPage/MoviesDetailsPage.styled';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieById(movieId);
        console.log(movieDetails);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };
  console.log(movieInfo);

  return (
    <>
      {isLoading && (
        <UpdateLoader>
          <Loader />
        </UpdateLoader>
      )}
      {movieInfo && (
        <>
          <Btn type="button" onClick={onBtnClick}>
            Go back
          </Btn>
          <MainContainer>
            <Poster>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={
                  movieInfo.title ?? movieInfo.original_name ?? movieInfo.name
                }
                width="250"
              />
            </Poster>
            <div>
              <h2>
                {movieInfo.title ?? movieInfo.original_name ?? movieInfo.name} (
                {new Date(movieInfo.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movieInfo.vote_average * 10)} %</p>
              <h3>Genres</h3>
              <p>{movieInfo.genres?.map(({ name }) => name).join(', ')}</p>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
            </div>
          </MainContainer>
          <SecondTitle>Additional information</SecondTitle>
          <ListAdditionalInfo>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ListAdditionalInfo>
        </>
      )}
      {error && <p>Ooops!</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
