import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ name, price, isAvailable }) {
  const cardClassName = `${styles.card} ${!isAvailable ? styles.outOfStockCard : ''}`;

  return (
    <div className={cardClassName}>
      <h3>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <>
        {isAvailable ? (
          <span className={styles.statusInStock}>In Stock</span>
        ) : (
          <span className={styles.statusOutOfStock}>Out of Stock</span>
        )}
      </>
    </div>
  );
}

export default ProductCard;
