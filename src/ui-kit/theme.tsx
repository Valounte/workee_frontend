import { createTheme } from '@mui/material/styles';

import type {} from '@mui/x-data-grid/themeAugmentation';

export const theme = createTheme({
  spacing: 8, // 8px
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#bf360c',
      light: '#f9683a',
      dark: '#870000',
      contrastText: 'white',
    },
    secondary: {
      main: '#ff7f27',
      light: '#ffb058',
      dark: '#c55000',
      contrastText: 'white',
    },
    text: {
      primary: '#3f1d01',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#47d24d',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Rubik', 'sans-serif'].join(', '),
    h1: {
      fontWeight: 500,
      fontSize: '5.5rem',
      lineHeight: '1',
    },
    h2: {
      fontWeight: 400,
      fontSize: '4.2rem',
      lineHeight: '1.15',
    },
    h3: {
      fontWeight: 400,
      fontSize: '3.2rem',
      lineHeight: '1.15',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '1.5',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '1.35',
    },
    body2: {
      fontWeight: 300,
      fontSize: '1.6rem',
      lineHeight: '1.35',
      paddingTop: 0,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1536,
      xl: 1700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          background: '#ff7c27',
          color: 'white',
          padding: '16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
        },
      },
    },
  },
});

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.up('xs')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.6rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.8rem',
  },
};
