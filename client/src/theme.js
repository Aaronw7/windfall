import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#515357',
      alt: '#808080'
     },
    secondary: {
      main: '#00a7c2',
      alt: '#46c200'
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