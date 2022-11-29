import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from "./filterSlice";
import { authReducer } from "./auth/slice";
import storage from 'redux-persist/lib/storage'

//import { persistContactsReducer } from "./contactsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
  
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

  // Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
   // persistContactsReducer,
  auth: persistReducer(authPersistConfig, authReducer), 
  contacts: contactsReducer,
  filter: filtersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

console.log(store);
export const persistor = persistStore(store);
console.log(persistStore(store))