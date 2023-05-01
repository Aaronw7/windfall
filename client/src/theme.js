import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#515357',
     },
    secondary: {
      main: '#00a7c2',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});

export default theme;