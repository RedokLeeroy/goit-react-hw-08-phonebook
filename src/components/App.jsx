import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Phonebook } from '../pages/Phonebook/Phonebook';
import { RegisterForm } from '../pages/register/Register';
import { Login } from '../pages/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
