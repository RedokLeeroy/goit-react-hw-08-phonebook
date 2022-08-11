import s from './Contacts.module.css';

import { Item } from './Item';
export const Contacts = ({ contact, onDelete }) => {
  return (
    <ul className={s.list}>
      {contact.map(({ id, name, number }) => (
        <Item
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};
