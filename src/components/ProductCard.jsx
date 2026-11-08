import PropTypes from 'prop-types';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ name, price, isAvailable, onRemove }) {
  const cardClassName = [
    styles.card,
    !isAvailable && styles.outOfStockCard,
    !isAvailable && 'outOfStockClass',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClassName}>
      <h3>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>
      {isAvailable ? (
        <span className={styles.statusInStock}>In Stock</span>
      ) : (
        <span className={styles.statusOutOfStock}>Out of Stock</span>
      )}
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductCard;
