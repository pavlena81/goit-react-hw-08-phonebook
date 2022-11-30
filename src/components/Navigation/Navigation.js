
import { useAuth } from 'hooks';
import { LinkNavigation, IconHome } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNavigation to="/">
        <IconHome/>
        Home
      </LinkNavigation>
      {isLoggedIn && (
        <LinkNavigation to="/contacts">
          Contacts
        </LinkNavigation>
      )}
    </nav>
  );
};