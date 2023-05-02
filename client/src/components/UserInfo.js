import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function UserInfo() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', height: '200px' }}>
      <Box sx={{ width: '30%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Typography variant='h4'>
          Welcome User!
        </Typography>
      </Box>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h6'>
          Products associated with this account:
        </Typography>
        <List sx={{ overflow: 'auto', width: '50%', maxHeight: 160, border: '1px solid black' }}>
          {items.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
}

export default UserInfo;
