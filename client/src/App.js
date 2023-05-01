import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    fetch('/products').then(res => res.json()).then(data => {
      setCurrentProducts(data);
    });
  }, []);

  return (
    <Container align='center' sx={{ backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '70px' }}>
        <img
        alt="Windfall logo"
        src="https://lever-client-logos.s3.amazonaws.com/8ef9b6bd-44cd-4308-a13b-182a5c0246a2-1577465231891.png"
        style={{ width: '87.5px', height: '35px', marginRight: '15px' }}
        />
      </Box>
      <Typography variant='h4' style={{ color: theme.palette.primary.main }}>
        Application Demo
      </Typography>
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'center' }}>
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
