import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Phonebook } from '../pages/Phonebook/Phonebook';
import { RegisterForm } from '../pages/register/Register';
import { Login } from '../pages/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/publicRoute';
import { GoHomePage } from './GoHomePage/GoHomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/contacts">
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts">
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<GoHomePage />} />
      </Route>
    </Routes>
  );
};
