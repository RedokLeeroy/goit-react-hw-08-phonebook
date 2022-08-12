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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },

    [signIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },

    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [getRefresh.pending]: (state, { payload }) => {
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    },
    [getRefresh.rejected]: (state, { payload }) => {
      state.isLogin = false;
    },
  },
});

export const authSlicer = authSlice.reducer;
