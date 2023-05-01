import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Paper, Button } from '@mui/material'

function App() {
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    fetch('/products').then(res => res.json()).then(data => {
      setCurrentProducts(data);
    });
  }, []);

  return (
    <Container color="text.primary" align="center">
      <Typography variant="h3" color="text.secondary">
        Windfall Demo
      </Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          {currentProducts && currentProducts.map((item) => (
            <Paper elevation={3}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <Button>
                    Purchase
                </Button>
            </Paper>
          ))}
        </Stack>
    </Container>
  );
}

export default App;
