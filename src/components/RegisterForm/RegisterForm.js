import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { FormRegister, LabelRegister, InputRegister, BtnRegForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget.elements;

    if (form.name.value ==='' ||
      form.email.value === '' ||
     form.password.value === '') {
      return toast.warning('please fill an all fields')
      
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister>
        Username
        <InputRegister type="text" name="name" />
      </LabelRegister>
      <LabelRegister>
        Email
        <InputRegister  type="email" name="email" />
      </LabelRegister>
      <LabelRegister>
        Password
        <InputRegister  type="password" name="password" />
      </LabelRegister>
        <BtnRegForm type="submit">Register</BtnRegForm>
        <ToastContainer />
      </FormRegister>
      
  );
};