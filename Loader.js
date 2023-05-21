// Loader.js
import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null; // Render nothing if not loading
  }

  return (
    <div className="loader">
      {/* Render your loader animation or spinner here */}
      Loading...
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});

export default connect(mapStateToProps)(Loader);
