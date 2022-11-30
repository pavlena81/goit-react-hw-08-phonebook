import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLogin, LabelLogin, InputLogin, BtnLogForm } from './LoginForm.styled';

import {ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget.elements;
    if (form.email.value === '' ||
     form.password.value === '') {
      return toast.warning('please fill an all fields')
      
    }

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    
   return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        Email
        <InputLogin type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        Password
        <InputLogin type="password" name="password" />
      </LabelLogin>
       <BtnLogForm type="submit">Log In</BtnLogForm>
       <ToastContainer />
    </FormLogin>
  );
}; 