import { Link } from './Navigation.styled';
import { NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/" end>
            Home
          </Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
      </NavList>
    </nav>
  );
};
