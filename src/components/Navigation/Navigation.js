
import { useAuth } from 'hooks';
import { LinkNavigation, IconHome } from './Navigation.styled';
//import { FcMultipleSmartphones } from 'react-icons/fc';
//import { FcContacts } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNavigation to="/">
        <IconHome/>
        Home
      </LinkNavigation>
      {isLoggedIn && (
        <>
        <LinkNavigation to="/phonebook">
            {/* <FcContacts /> */}
            Phonebook
        </LinkNavigation>  
        <LinkNavigation to="/contacts">
          {/* <FcMultipleSmartphones/> */}
            Contacts
        </LinkNavigation>
        </>
      )}
    </nav>
  );
};