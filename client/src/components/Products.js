import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Products(props) {
  const theme = useTheme();

  return (
    <Box align='center' sx={{ marginTop: 3, maxWidth: '900px' }}>
      <Stack direction='row' spacing={2} sx={{ justifyContent: 'center' }}>
          {props.currentProducts && props.currentProducts.map((item) => (
            <Paper key={item.id} elevation={3} sx={{ paddingX: 1, paddingBottom: 1 }}>
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
                {/* <Button style={{ color: theme.palette.secondary.main }}>
                    Purchase
                </Button> */}
            </Paper>
          ))}
        </Stack>
    </Box>
  );
}

export default Products;
