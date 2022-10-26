import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
text-decoration: none;
font-size: 16px;
color: blue;
&.active{
    color:red;
}
`