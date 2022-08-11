import axios from 'axios';
axios.defaults.baseURL = 'https://62f25c7218493ca21f321051.mockapi.io';

export const getContacts = () => {
  return axios.get('/contacts');
};

export const createContact = contact => {
  return axios.post('/contacts', contact);
};

export const deleteContact = id => {
  return axios.delete(`contacts/${id}`);
};
