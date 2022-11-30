import styled from "styled-components";

export const FormRegister = styled.form`
    width: 320px;
    margin: 0 auto;
    margin-top: 150px;
    padding: 20px;
    border: 0px solid #7FB3D5;
    box-shadow: 6px 2px 10px -5px rgba(127, 179, 213, 1);
    box-shadow: 6px 2px 10px -1px rgba(127, 179, 213, 1);
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