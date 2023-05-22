
// src/components/Loader.js

import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);

  if (!isLoading) {
    return null; // Render nothing if not loading
  }

  return (
    <div className="loader">
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
