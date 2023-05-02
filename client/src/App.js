import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import { Box } from '@mui/material';
import UserInfo from './components/UserInfo';
import Products from './components/Products';

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [currentProducts, setCurrentProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    fetch('/users').then(res => res.json()).then(data => {
      setCurrentUsers(data);
      setSelectedUser(data[0]);
    });

    fetch('/products').then(res => res.json()).then(data => {
      setCurrentProducts(data);
    });
  }, []);

  useEffect(() => {
    fetch('/purchases').then(res => res.json()).then(data => {
      let result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id === selectedUser.id) {
          result.push(data[i].product_id)
        }
      }
      setUserProducts(result);
    });
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  return (
    <Container disableGutters maxWidth='none' align='center' sx={{ overflow: 'auto' }}>
      <Header currentUsers={currentUsers} handleUserClick={handleUserClick}/>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 3 }}>
        <UserInfo selectedUser={selectedUser} currentProducts={currentProducts} userProducts={userProducts}/>
        <Products selectedUser={selectedUser} currentProducts={currentProducts} userProducts={userProducts} setUserProducts={setUserProducts}/>
      </Box>
    </Container>
  );
}

export default App;
