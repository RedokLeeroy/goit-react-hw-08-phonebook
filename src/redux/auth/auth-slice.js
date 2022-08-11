import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLogin = true;
    },
  },
});
