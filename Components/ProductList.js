// ProductList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startLoading, stopLoading } from './loadingSlice';

const ProductList = ({ startLoading, stopLoading }) => {
  useEffect(() => {
    // Simulate fetching data
    startLoading();

    // Replace setTimeout with your actual data fetching logic
    setTimeout(() => {
      // Data fetched, stop loading
      stopLoading();
    }, 2000);
  }, []);

  return (
    <div>
      {/* Render your product list here */}
    </div>
  );
};

export default connect(null, { startLoading, stopLoading })(ProductList);
