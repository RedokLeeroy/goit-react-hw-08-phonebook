import { useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <p>{username}</p>
      <button onClick={handlerLogout} type="button">
        LogOut
      </button>
    </>
  );
};
