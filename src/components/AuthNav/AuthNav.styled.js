import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { FaRegRegistered } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export const LinkAuthNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
   &.active {
   color: #a38b9d;
}
`

export const IconRegForm = styled(FaRegRegistered)`
   margin-right:10px;
`

export const IconLogIn = styled(FiLogIn)`
   margin-right:10px;
`