import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
// ------------------------------------------//

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPass(value);
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const credentials = { name: name, email: email, password: pass };
    dispatch(signIn(credentials));
    setMail('');
    setName('');
    setPass('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Name<input name="name" value={name} onChange={handlerInput}></input>
      </label>
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
