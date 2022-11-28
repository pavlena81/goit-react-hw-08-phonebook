import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, BtnUserMenu } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
    const { user } = useAuth();
    
return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <BtnUserMenu type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnUserMenu>
    </Wrapper>
  );
};    