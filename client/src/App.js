import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { Box } from '@mui/material';
import UserInfo from './components/UserInfo';
import Products from './components/Products';

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetch('/users').then(res => res.json()).then(data => {
      setCurrentUsers(data);
      setSelectedUser(data[0]);
    });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  return (
    <Container disableGutters maxWidth='none' align='center' sx={{ overflow: 'auto' }}>
      <Header currentUsers={currentUsers} handleUserClick={handleUserClick}/>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 3 }}>
        <UserInfo selectedUser={selectedUser}/>
        <Products />
      </Box>
    </Container>
  );
}

export default App;
