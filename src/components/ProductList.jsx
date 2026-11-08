import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        <p>No products are currently available matching this filter.</p>
      </div>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard
            name={product.name}
            price={product.price}
            isAvailable={product.isAvailable}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;