import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6374c6d448dfab73a4e87e2d.mockapi.io/contacts';
console.log(axios.defaults.baseURL);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
          const response = await axios.get('/contacts');
          console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data);
      return response.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);