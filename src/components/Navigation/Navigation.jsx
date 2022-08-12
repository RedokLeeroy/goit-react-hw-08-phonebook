import { Link } from './Navigation.styled';
import { ListUl } from './Navigation.styled';
import { getLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const islogin = useSelector(getLogin);
  return (
    <nav>
      <ListUl>
        <li>
          {!islogin && (
            <Link
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
        <li>
          {!islogin && (
            <Link
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Register
            </Link>
          )}
        </li>
        {islogin && (
          <li>
            <Link
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/contacts"
            >
              Contacts
            </Link>
          </li>
        )}
      </ListUl>
    </nav>
  );
};
