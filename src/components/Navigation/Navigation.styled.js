import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;

  display: flex;
  gap: 20px;
  &.active {
    color: red;
  }
`;
export const NavList = styled(NavLink)`
  list-style: none;
  display: flex;
  gap: 20px;
`;
