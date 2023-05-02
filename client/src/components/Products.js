import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Products(props) {
  const theme = useTheme();

  const handlePurchase = (productId) => {
    fetch('/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: props.selectedUser.id,
        product_id: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Purchase successful:', data);
      props.setUserProducts([...props.userProducts, productId]);
    })
    .catch(error => console.error('Error purchasing product:', error));
  };

  return (
    <Box align='center' sx={{ marginTop: 3, maxWidth: '900px' }}>
      <Grid container spacing={2} justifyContent='center' sx={{ marginTop: 3, maxWidth: '900px' }}>
        {props.currentProducts && props.currentProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper key={item.id} elevation={3} sx={{ padding: 1 }}>
                <Typography variant='h5' sx={{ color: theme.palette.primary.main, marginY: 2, fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography variant='body1' sx={{ color: theme.palette.primary.alt }}>{item.description}</Typography>
                <Typography variant='body1' sx={{ color: theme.palette.primary.main, marginY: 2 }}>{item.price}</Typography>
                {props.userProducts.includes(item.id) ? (
                  <Button sx={{ color: theme.palette.secondary.alt }} disabled>
                    OWNED
                  </Button>
                ) : (
                  <Button sx={{ color: theme.palette.secondary.main }} onClick={() => handlePurchase(item.id)}>
                    Purchase
                  </Button>
                )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
