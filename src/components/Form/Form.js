import React from 'react';
//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Formik, Form, Field } from 'formik';

import styled from 'styled-components';

import { Label, Btn, } from './Form.styled';


const initialValues = {
    name: '',
    number: ''
};

const Input = styled(Field)`
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
const Forma = styled(Form)`
padding: 20px;
border: 1px solid #7FB3D5;
`
export const FormLabel = () => {

    const dispatch = useDispatch();
  
    const contacts = useSelector(selectContacts);
    
    console.log(contacts);
    
    const handleSubmit = ( values, { resetForm }) => {
    console.log(values);
    
        values.id = nanoid();
        contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase())
       ? Notify.info('Contacts is already in list-contacts')
       
       : dispatch(addContacts( values )) && resetForm();
        //dispatch(addContacts( values ));
        
        
  };


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Forma autoComplete='off'>
                <Label htmlFor="Name">
                    Name
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                
                <Label htmlFor="Number">
                    Number
                    <Input
                    type="text"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"

                    required
                />
                </Label>
                <Btn type="submit">Add contact</Btn>
            </Forma>
        </Formik>
    )
}

// FormLabel.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
    
// }
