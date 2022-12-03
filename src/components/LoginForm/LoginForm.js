import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLogin, LabelLogin, InputLogin, BtnLogForm } from './LoginForm.styled';

import {ToastContainer, toast } from "react-toastify";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (
      form.elements.email.value === '' ||
     form.elements.password.value === '') {
      return toast.warning('please fill an all fields')      
    }
   
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };
    
   return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        Email
        <InputLogin type="email" name="email" placeholder='..email'/>
      </LabelLogin>
      <LabelLogin>
        Password
        <InputLogin type="password" name="password" placeholder='..password' />
      </LabelLogin>
       <BtnLogForm type="submit">Log In</BtnLogForm>
      <ToastContainer/> 
    </FormLogin>
  );
}; 