import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isloged = useSelector(getLogin);
  return isloged ? children : <Navigate to="/login" />;
};
