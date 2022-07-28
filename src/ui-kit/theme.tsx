import { createTheme } from '@mui/material/styles';

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
    body1: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '1.35',
    },
    body2: {
      fontWeight: 300,
      fontSize: '1.6rem',
      lineHeight: '1.35',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1536,
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
