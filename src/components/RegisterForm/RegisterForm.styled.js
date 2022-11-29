import styled from "styled-components";

export const FormRegister = styled.form`
    width: 320px;
    padding: 20px;
    border: 1px solid #7FB3D5;
`

export const LabelRegister = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const InputRegister = styled.input`
    font-size: 18px;
    padding: 10px 15px;
    margin: 10px;
    border: 2px solid #D4E6F1;
    border-radius: 2px;
      &:focus{
        outline:none;
        border-radius: 6px;
        box-shadow: 0 0 10px #93caff;
    }
`
export const BtnRegForm = styled.button`
    font-size: 16px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #BEE1E6;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    
    cursor: pointer;
    outline: none;
    
    &:hover: {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
`