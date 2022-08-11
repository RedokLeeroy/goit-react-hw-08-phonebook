import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const islogin = useSelector(getLogin);
  return (
    <>
      <Navigation />
      {islogin && <UserMenu />}
      <Outlet />
    </>
  );
};
