import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

//-----------------------------------------------------------------------------------//
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };
// const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: mainReducer,
  // devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// let persistor = persistStore(store);
export { store };
