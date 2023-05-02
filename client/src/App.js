import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { Box } from '@mui/material';
import UserInfo from './components/UserInfo';
import Products from './components/Products';

function App() {

  return (
    <Container align='center'>
      <Header />
      <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 3 }}>
        <UserInfo />
        <Products />
      </Box>
    </Container>
  );
}

export default App;
