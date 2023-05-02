import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function UserInfo(props) {
  const theme = useTheme();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', height: '200px', maxWidth: '900px' }}>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 3 }}>
        <Typography variant='h5'>
          Welcome
        </Typography>
        <Typography variant='h4' fontWeight='bold' style={{ color: theme.palette.secondary.main }}>
          {props.selectedUser.name}
        </Typography>
      </Box>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant='h6'>
            Products associated with this account:
          </Typography>
          <List sx={{ overflow: 'auto', width: '75%', minWidth: '150px', maxHeight: 160, border: '1px solid black', borderRadius: 1 }}>
            {items.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Stack>
  );
}

export default UserInfo;
