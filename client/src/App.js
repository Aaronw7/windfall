import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { Box } from '@mui/material';
import UserInfo from './components/UserInfo';
import Products from './components/Products';

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    fetch('/users').then(res => res.json()).then(data => {
      console.log('sample data: ', data[0])
      setCurrentUsers(data);
      setSelectedUser(data[0]);
    });
  }, []);

  return (
    <Container disableGutters align='center'>
      <Header currentUsers={currentUsers}/>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 3 }}>
        <UserInfo selectedUser={selectedUser}/>
        <Products />
      </Box>
    </Container>
  );
}

export default App;
