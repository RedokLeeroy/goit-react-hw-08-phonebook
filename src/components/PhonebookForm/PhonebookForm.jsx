import { useState } from 'react';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';
import { useDispatch, useSelector } from 'react-redux';
import { addItemSelector } from 'redux/items-selector';
import { addUsers } from 'redux/ItemsOperations';

//---------------------------------------------------------------------------------//

export const PhonebookForm = () => {
  const [nameEl, setNameEl] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(addItemSelector);
  console.log(contacts);

  const handSubmit = event => {
    event.preventDefault();
    const isHere = contacts.some(({ name }) => nameEl === name);
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    } else {
      const contact = { name: nameEl, phone };
      dispatch(addUsers(contact));
      setNameEl('');
      setPhone('');
    }
  };

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setNameEl(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handSubmit}>
      <NameInput value={nameEl} name="name" func={handlerInput}></NameInput>
      <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
      <FormSubmit title="Add contact"></FormSubmit>
    </form>
  );
};
