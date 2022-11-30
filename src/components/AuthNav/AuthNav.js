
import { LinkAuthNav, IconRegForm, IconLogIn} from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <div>
      <LinkAuthNav to="/register">
        <IconRegForm/>
        Register
      </LinkAuthNav>
      <LinkAuthNav to="/login">
        <IconLogIn/>
        Log In
      </LinkAuthNav>
    </div>
  );
};
