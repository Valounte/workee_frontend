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
      contrastText: '#f9e6d6',
    },
    secondary: {
      main: '#ff7f27',
      contrastText: '#3f1d01',
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
    fontFamily: ['Rubik', 'sans-serif'].join(', '),
    // fontWeightRegular: 500,
    // fontWeightBold: 700,
    // h1: {
    //   fontWeight: 700,
    //   fontSize: '2.15rem',
    //   lineHeight: '1.5',
    //   marginBottom: '0.5rem',
    // },
    // h2: {
    //   fontWeight: 700,
    //   fontSize: '2rem',
    //   lineHeight: '1.5',
    //   marginBottom: '0.25rem',
    // },
    // h3: {
    //   fontWeight: 700,
    //   fontSize: '1.5rem',
    //   lineHeight: '1.5',
    //   marginBottom: '0.05rem',
    // },
    // subtitle1: {
    //   fontWeight: 500,
    //   marginBottom: '1.5rem',
    // },
    // subtitle2: {
    //   fontWeight: 700,
    // },
    // body1: {
    //   fontWeight: 500,
    // },
    // body2: {
    //   fontWeight: 700,
    // },
    // button: {
    //   fontWeight: 500,
    // },
    // caption: {
    //   fontWeight: 500,
    // },
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
});
