
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRoute'; 
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks'; 
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));
const NotFound = lazy(() => import('pages/NotFound'));


export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  

  useEffect(() => {
    dispatch(refreshUser());
   console.log(dispatch(refreshUser())); 
  }, [dispatch]);


  return isRefreshing ? (
     <Loader/>)
   : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
          />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />  
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
          />
        <Route path="*" element={<NotFound/>}/>  
      </Route>
    </Routes>
  );
  
 }
