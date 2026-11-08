import { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Button, Stack, Box } from '@mui/material';

const INITIAL_PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999, isAvailable: true },
  { id: 2, name: 'Phone', price: 699, isAvailable: false },
  { id: 3, name: 'Tablet', price: 499, isAvailable: true },
];

function App() {
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const displayedProducts = products.filter((product) => {
    if (filter === 'available') return product.isAvailable;
    if (filter === 'unavailable') return !product.isAvailable;
    return true;
  });

  const removeProduct = (productId) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId),
    );
  };

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

      <ProductList products={displayedProducts} onRemove={removeProduct} />
    </Container>
  );
}

export default App;