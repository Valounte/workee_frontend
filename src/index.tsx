import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { App } from './App';
import { store } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
