import { Link } from './Navigation.styled';
import { ListUl } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ListUl>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/register"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/contacts"
          >
            Contacts
          </Link>
        </li>
      </ListUl>
    </nav>
  );
};
