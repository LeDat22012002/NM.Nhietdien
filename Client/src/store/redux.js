import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './user/userSlice';
import loadingSlice from './loading/loadingSlice';
import navReducer from './currentNav/navSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const commonConfig = {
  storage,
};

const userConfig = {
  ...commonConfig,
  key: 'NMCD/user',
  whitelist: ['isLoggedIn', 'token', 'current', 'refreshtoken'],
};

const navConfig = {
  ...commonConfig,
  key: 'NMCD/nav',
  whitelist: ['currentNav'],
};

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    user: persistReducer(userConfig, userSlice),
    nav: persistReducer(navConfig, navReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
