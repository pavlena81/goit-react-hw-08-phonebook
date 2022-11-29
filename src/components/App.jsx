// import { fetchContacts } from 'redux/operations';
// import { FormLabel } from './Form/Form'; 
// import { Filter } from './Filter/Filter';
// import { FormContacts } from './Contacts/Contacts'; 
// //import { nanoid } from "nanoid";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import { Container, Box, Title, SubTitle} from 'components/App.styled';
// import { FcContacts } from 'react-icons/fc';
// import { FcMultipleSmartphones } from 'react-icons/fc';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { Loader } from './Loader/Loader';
//====================================================

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRoute'; 
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks'; 

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));




export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  

  useEffect(() => {
    dispatch(refreshUser());
   console.log(dispatch(refreshUser())); 
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // },[dispatch])
     
  
  
  // return (
  //   <Box>
  //     <Container >
          
  //         <Title><FcContacts />
  //           Phonebook          
  //         </Title> 
  //         <FormLabel/>
          
  //         <SubTitle><FcMultipleSmartphones/>
  //           Contacts
  //         </SubTitle>
  //         <Filter />
          
  //        <FormContacts/>  
  //        {isLoading && !error && <Loader/>} 
  //     </Container>
  //   </Box> 
  //  );
 }







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
