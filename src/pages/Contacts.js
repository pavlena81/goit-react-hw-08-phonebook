import { fetchContacts } from 'redux/operations'; 
import { FormLabel } from 'components/Form/Form'; 
import { Filter } from 'components/Filter/Filter'; 
import { FormContacts } from 'components/Contacts/Contacts';  
//import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container, Box, Title, SubTitle} from 'components/App.styled';
import { FcContacts } from 'react-icons/fc';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader'; 

export default function Contacts() {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
     
    
    return (
    <Box>
      <Container >
          
          <Title><FcContacts />
            Phonebook          
          </Title> 
          <FormLabel/>
          
          <SubTitle><FcMultipleSmartphones/>
            Contacts
          </SubTitle>
          <Filter />
          
         <FormContacts/>  
         {isLoading && !error && <Loader/>} 
      </Container>
    </Box> 
   );
}