import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    fetch('/products').then(res => res.json()).then(data => {
      setCurrentProducts(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Windfall Demo
        </h1>
        <ul>
          {currentProducts && currentProducts.map(product => (
            <li key={product.id}>{product.name}: {product.price}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
