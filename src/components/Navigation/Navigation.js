
import { useAuth } from 'hooks';
import { LinkNavigation } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNavigation to="/">
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