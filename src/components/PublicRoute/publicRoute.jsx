import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isloged = useSelector(getToken);

  return isloged ? <Navigate to="/contacts" /> : children;
};
