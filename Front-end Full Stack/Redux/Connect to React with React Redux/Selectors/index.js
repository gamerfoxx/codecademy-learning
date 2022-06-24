import React from 'react';
import ReactDOM from 'react-dom';
// Import Provider component below.
import { Provider } from 'react-redux';

import { App } from './app/App.js';
import { store } from './app/store.js';

ReactDOM.render(
  // Wrap root application with Provider component below.
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root')
);


















































