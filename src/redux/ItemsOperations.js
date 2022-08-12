import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addUsers = createAsyncThunk('contacts/addUser', async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {}
});

export const deleteUser = createAsyncThunk('contacts/deleteUsers', async id => {
  await axios.delete(`contacts/${id}`);
  return id;
});
