import AuthNav from '../pages/AuthNav/AuthNav';
import UserNav from '../pages/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <UserNav /> : <AuthNav />;
};
