import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Products() {
  const theme = useTheme();
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    fetch('/products').then(res => res.json()).then(data => {
      setCurrentProducts(data);
    });
  }, []);

  return (
    <Box align='center' sx={{ backgroundColor: '#f5f5f5', paddingY: 2 }}>
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'center' }}>
          {currentProducts && currentProducts.map((item) => (
            <Paper elevation={3} sx={{ paddingX: 1 }}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <Button style={{ color: theme.palette.secondary.main }}>
                    Purchase
                </Button>
            </Paper>
          ))}
        </Stack>
    </Box>
  );
}

export default Products;
