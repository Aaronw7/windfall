import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box maxWidth='900px'>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '70px' }}>
        <img
        alt="Windfall logo"
        src="https://lever-client-logos.s3.amazonaws.com/8ef9b6bd-44cd-4308-a13b-182a5c0246a2-1577465231891.png"
        style={{ width: '87.5px', height: '35px', marginLeft: '15px' }}
        />
      </Box>
      <Typography
        variant='h3'
        style={{
          color: theme.palette.primary.main,
          height: '70px',
          fontSize: isScreenSmall ? '2rem' : '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>
        Application Demo
      </Typography>
    </Box>
  );
}

export default Header;
