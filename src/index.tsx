import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { theme } from './ui-kit/theme';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
