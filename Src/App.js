// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Loader from './Loader';
import ProductList from './ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Loader />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
