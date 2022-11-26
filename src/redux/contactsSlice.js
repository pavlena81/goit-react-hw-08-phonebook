import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContacts, deleteContacts } from "./operations";

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//const contactsInitialState = [];

const contactsInitialState = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: contactsInitialState,
    isLoading: false,
    error: null,
  },
   
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContacts.rejected]: handleRejected,
  },
});


    export const contactsReducer = contactsSlice.reducer;


   /////////////////////////
//   reducers: {
//     addContacts(state, action) {
//       state.contacts.push(action.payload)
//     },
//     deleteContacts(state, action) {
//       state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
     
//     },

//     // findContacts(state, action) {
//     //   for (const contact of state) {
//     //     if (contact.id === action.payload) {
//     //       contact.completed = !contact.completed;
//     //       break;
//     //     }
//     //   }
//     // },
//   },
//  });

 
// const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

// export const { addContacts, deleteContacts, findContacts } = contactsSlice.actions;
