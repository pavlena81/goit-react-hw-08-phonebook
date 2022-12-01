import { fetchContacts } from 'redux/operations'; 
import { FormLabel } from 'components/Form/Form'; 
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Container, Box,  Title} from 'components/App.styled';
import { FcContacts } from 'react-icons/fc';

export default function Phonebook() {
    const dispatch = useDispatch();
  
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
          
      </Container>
    </Box> 
   );
}