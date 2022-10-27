import PropTypes from 'prop-types';
import { Cast, CastItem, Avatar } from './CastStyle.styled';

export const CastList = ({ movieInfo: { cast } }) => {
  return (
    <div>
      {cast.length > 0 ? (
        <Cast>
          {cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <Avatar
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'
                }
                alt={name}
                width="50"
                height="75"
              />
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </CastItem>
          ))}
        </Cast>
      ) : (
        <p>We have no more details</p>
      )}
    </div>
  );
};

CastList.propTypes = {
  info: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
