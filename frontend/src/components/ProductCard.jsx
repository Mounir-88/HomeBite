import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className={styles.button}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
