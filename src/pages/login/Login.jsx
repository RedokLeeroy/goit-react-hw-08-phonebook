import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
// ------------------------------------------//

export const Login = () => {
  const [email, setMail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPass(value);
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const credentials = { email: email, password: pass };
    dispatch(logIn(credentials));
    setMail('');
    setPass('');
    navigate('/contacts');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Email<input name="email" value={email} onChange={handlerInput}></input>
      </label>
      <label>
        Password
        <input name="password" value={pass} onChange={handlerInput}></input>
      </label>
      <button>Submit</button>
    </form>
  );
};
