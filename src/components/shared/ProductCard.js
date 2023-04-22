import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCard } from '../../reducers/library';
import styles from './ProductCard.module.css';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToLibrary = () => {
    dispatch(addCard(product));
  };

  return (
    <div className={styles['product-card']}>
      <img src={product.images.small} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Set: {product.set.name}</p>
      <div className={styles.buttons}>
        <button className={styles['add-to-cart']}>Add to Cart</button>
        <button className={styles['add-to-library']} onClick={addToLibrary}>
          Add to My Library
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;