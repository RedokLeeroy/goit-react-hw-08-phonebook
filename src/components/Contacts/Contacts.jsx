import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/ItemsOperations';
import s from './Contacts.module.css';

import { Item } from './Item';
export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const handlerdelete = id => {
    dispatch(deleteUser(id));
  };

  return (
    <ul className={s.list}>
      {contact.map(({ id, name, number }) => (
        <Item
          key={id}
          name={name}
          number={number}
          onDelete={handlerdelete}
          id={id}
        />
      ))}
    </ul>
  );
};
