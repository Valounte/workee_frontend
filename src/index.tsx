import React from 'react';

import { debounce } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as BrowserProvider } from 'react-router-dom';

import { saveStateToken, LocalStorageKey } from '@helpers/localStorage';
import { theme } from '@ui-kit';

import { App } from './App';
import { store } from './store/store';

import './index.css';

axios.defaults.baseURL = 'http://localhost:8000';

store.subscribe(
  debounce(() => {
    saveStateToken(store.getState().authentification.token, LocalStorageKey.token);
  }, 800)
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </BrowserProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
