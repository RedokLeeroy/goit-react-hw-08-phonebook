import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isloged = useSelector(getLogin);

  return isloged ? <Navigate to="/contacts" /> : children;
};
