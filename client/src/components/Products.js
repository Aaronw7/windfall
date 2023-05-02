import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Products(props) {
  const theme = useTheme();

  return (
    <Box align='center' sx={{ marginTop: 3, maxWidth: '900px' }}>
      <Grid container spacing={2} justifyContent='center' sx={{ marginTop: 3, maxWidth: '900px' }}>
        {props.currentProducts && props.currentProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper key={item.id} elevation={3} sx={{ padding: 1 }}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                {props.userProducts.includes(item.id) ? (
                  <Button style={{ color: theme.palette.secondary.alt }} disabled>
                    OWNED
                  </Button>
                ) : (
                  <Button style={{ color: theme.palette.secondary.main }}>
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
