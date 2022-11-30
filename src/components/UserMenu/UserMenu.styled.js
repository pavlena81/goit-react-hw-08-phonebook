import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BtnUserMenu = styled.button`
    font-size: 16px;
    // padding: 10px 15px 10px 15px;
    // border-radius: 50px;
     border: none;
     background: transparent; 
    // color: 52, 73, 94;
    // cursor: pointer;
    outline: none;
    // box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover: {
    background-color: 214, 234, 248, 0.5;
    color: 52, 73, 94;
    }
`
export const IconLogOut = styled(FiLogOut)`
   margin-right:10px;
` 