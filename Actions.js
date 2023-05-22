// src/redux/actions.js

import { showLoader, hideLoader } from './loaderSlice';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());

      // Perform your data fetching or async operations

      dispatch(hideLoader());
    } catch (error) {
      // Handle errors
      dispatch(hideLoader());
    }
  };
};
