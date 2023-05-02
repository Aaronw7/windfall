import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function UserInfo(props) {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const items = [];
  for (let i = 0; i < props.currentProducts.length; i++) {
    if (props.userProducts.includes(props.currentProducts[i].id)) {
      items.push(props.currentProducts[i].name)
    }
  }

  return (
    <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', height: '200px', maxWidth: '760px' }}>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 3 }}>
        <Typography variant='h5' sx={{ fontSize: isScreenSmall ? '1rem' : '1.75rem', color: theme.palette.primary.main }}>
          Welcome
        </Typography>
        <Typography variant='h4' fontWeight='bold' sx={{ fontSize: isScreenSmall ? '1.5rem' : '2.5rem', color: theme.palette.secondary.main }} >
          {props.selectedUser.name}
        </Typography>
      </Box>
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant='h6' sx={{ color: theme.palette.primary.main }}>
            Products associated with this account:
          </Typography>
          <List sx={{ overflow: 'auto', width: '75%', minWidth: '150px', height: '160px', border: '1px solid black', borderRadius: 1 }}>
            {items.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} sx={{ color: theme.palette.primary.main }}/>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Stack>
  );
}

export default UserInfo;
