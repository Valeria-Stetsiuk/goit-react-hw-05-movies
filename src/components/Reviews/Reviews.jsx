import PropTypes from 'prop-types';
import { Subtitle, Text } from './Reviews.styled';
import { MainContainer } from '../../pages/ReviewsPage/ReviewsPage.styled';

export const ReviewList = ({ movieInfo: { results } }) => {
  console.log(results);
  return (
    <MainContainer>
      {results.length > 0 ? (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <Subtitle>Author: {author}</Subtitle>
              <Text>Character: {content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </MainContainer>
  );
};

ReviewList.propTypes = {
  info: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
