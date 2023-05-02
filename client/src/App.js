import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Products from './components/Products';

function App() {

  return (
    <Container align='center'>
      <Header />
      <Products />
    </Container>
  );
}

export default App;
