import React from 'react';

import { debounce } from '@mui/material';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { saveStateToken, LocalStorageKey } from '@helpers/localStorage';

import { App } from './App';
import { store } from './store/store';

import './index.css';

axios.defaults.baseURL = 'https://workee-back.brangers.eu';

store.subscribe(
  debounce(() => {
    saveStateToken(store.getState().user.token, LocalStorageKey.token);
  }, 800)
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
