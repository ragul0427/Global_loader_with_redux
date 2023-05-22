

// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    // other reducers...
  },
});

export default store;
