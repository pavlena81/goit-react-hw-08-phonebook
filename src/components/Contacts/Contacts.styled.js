import styled from "styled-components";

export const ListContacts = styled.ul`
display:flex;
flex-direction:column;

`

export const ItemContacts = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 5px;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 10px 15px 10px 15px;
    border-radius: 50px;
    border: none;
    background:#BEE1E6; 
    color: 52, 73, 94;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover: {
    background-color: 214, 234, 248, 0.5;
    color: 52, 73, 94;
    }
`