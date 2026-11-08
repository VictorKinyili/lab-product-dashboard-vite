import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Button, Stack, Box } from '@mui/material';

const INITIAL_PRODUCTS = [
  { id: 1, name: "Wireless Mechanical Keyboard", price: 89.99, isAvailable: true },
  { id: 2, name: "Ergonomic Wired Mouse", price: 45.00, isAvailable: false },
  { id: 3, name: "UltraWide Gaming Monitor 34\"", price: 349.99, isAvailable: true },
  { id: 4, name: "Noise Cancelling Headphones", price: 120.00, isAvailable: false },
  { id: 5, name: "USB-C Multi-port Hub Dock", price: 29.99, isAvailable: true },
];

function App() {
  const [filter, setFilter] = useState('all');

  const displayedProducts = INITIAL_PRODUCTS.filter((product) => {
    if (filter === 'available') return product.isAvailable;
    if (filter === 'unavailable') return !product.isAvailable;
    return true;
  });

  return (
    <Container maxWidth="lg" style={{ marginTop: '32px', marginBottom: '32px' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Product Dashboard
      </Typography>

      <Box display="flex" justifyContent="center" marginBottom="32px">
        <Stack direction="row" spacing={2}>
          <Button 
            variant={filter === 'all' ? 'contained' : 'outlined'} 
            onClick={() => setFilter('all')}
          >
            All Products
          </Button>
          <Button 
            variant={filter === 'available' ? 'contained' : 'outlined'} 
            onClick={() => setFilter('available')}
            color="success"
          >
            Available
          </Button>
          <Button 
            variant={filter === 'unavailable' ? 'contained' : 'outlined'} 
            onClick={() => setFilter('unavailable')}
            color="error"
          >
            Out of Stock
          </Button>
        </Stack>
      </Box>

      <ProductList products={displayedProducts} />
    </Container>
  );
}

export default App;