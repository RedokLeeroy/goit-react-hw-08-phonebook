import { useDispatch, useSelector } from 'react-redux';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { FindByName } from './FindByName/FindByName';
import { addItemSelector, filterItemSelector } from 'redux/items-selector';
import { filterAction } from 'redux/ItemsActions';
import { deleteUser, fetchUsers } from 'redux/ItemsOperations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(addItemSelector);
  const filteritem = useSelector(filterItemSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleChange = event => {
    const { value } = event.target;
    dispatch(filterAction(value));
  };

  const handleFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteritem.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Section title="phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <FindByName value={filteritem} onChange={handleChange} />
        <Contacts contact={handleFilters()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
