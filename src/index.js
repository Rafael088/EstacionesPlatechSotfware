import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './app';
import { Provider } from 'react-redux';
import store from './redux/storage/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
      <Router />
  </Provider>
);

