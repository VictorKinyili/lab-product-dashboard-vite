import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

function ProductList({ products, onRemove }) {
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
            onRemove={() => onRemove(product.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isAvailable: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductList;