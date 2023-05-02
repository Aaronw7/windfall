import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, ButtonGroup, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Header(props) {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box maxWidth='760px' marginBottom='15px'>
      <Box
        sx={{
          height: '70px',
          width: isScreenSmall ? '85%' : '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
          }}>
        <img
        alt="Windfall logo"
        src="https://lever-client-logos.s3.amazonaws.com/8ef9b6bd-44cd-4308-a13b-182a5c0246a2-1577465231891.png"
        style={{ width: '87.5px', height: '35px' }}
        />
      </Box>
      <Typography
        variant='h3'
        sx={{
          color: theme.palette.primary.main,
          height: '70px',
          fontSize: isScreenSmall ? '2rem' : '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
        Application Demo
      </Typography>
      <Box>
        <Typography sx={{ color: theme.palette.primary.alt }}>Choose User: </Typography>
        {props.currentUsers.map((user, index) => (
          <ButtonGroup
            key={user.id}
            size='small'
            color='secondary'
            aria-label='small button group'
            sx={{ marginX: '2px' }}
            >
            <Button onClick={() => props.handleUserClick(user)}>{index+1}</Button>
          </ButtonGroup>
        ))}
      </Box>
    </Box>
  );
}

export default Header;
