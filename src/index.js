import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found in the DOM.');
}

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
