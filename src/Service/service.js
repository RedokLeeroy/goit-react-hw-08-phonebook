import axios from 'axios';

export const getContacts = () => {
  return axios.get('/contacts');
};

export const createContact = contact => {
  return axios.post('/contacts', contact);
};

export const deleteContact = id => {
  return axios.delete(`contacts/${id}`);
};
