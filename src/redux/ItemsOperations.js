import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getToken } from './auth/auth-selectors';
// import { useSelector } from 'react-redux';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addUsers = createAsyncThunk('contacts/addUser', async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk('contacts/deleteUsers', async id => {
  const response = await axios.delete(`contacts/${id}`);
  return response.data.id;
});
