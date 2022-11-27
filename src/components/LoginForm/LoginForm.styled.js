import styled from "styled-components";

export const FormLogin = styled.form`
    width: 320px;
    padding: 20px;
    border: 1px solid #7FB3D5;
`

export const LabelLogin = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const InputLogin = styled.input`
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