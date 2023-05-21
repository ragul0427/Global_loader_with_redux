// store.js
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    // other reducers for your app
  },
});

export default store;
