import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Phonebook } from '../pages/Phonebook/Phonebook';
import { Register } from '../pages/register/Register';
import { Login } from '../pages/login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route
            path="/RedokLeeroy-goit-react-hw-07-phonebook/register"
            element={<Register />}
          />
          <Route
            path="/RedokLeeroy-goit-react-hw-07-phonebook/login"
            element={<Login />}
          /> */}
        <Route path="/contacts" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
