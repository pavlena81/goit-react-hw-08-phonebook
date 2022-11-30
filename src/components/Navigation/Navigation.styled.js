import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import { ImHome } from "react-icons/im";

export const LinkNavigation = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
    &.active {
   color: #a38b9d;
}
`

export const IconHome = styled(ImHome)`
margin-right:10px;
`

