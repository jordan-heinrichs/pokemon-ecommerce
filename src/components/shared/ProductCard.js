import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/actions';
import './ProductCard.module.css';

const ProductCard = ({ card }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCard(card));
  };

  const handleAddToLibrary = () => {
    dispatch(addCard(card));
  };

  return (
    <div className="product-card">
      {/* Safely accessing card properties */}
      <img
        src={card?.images?.small || 'default-image-url.jpg'} // Fallback image URL
        alt={card?.name || 'Unnamed Product'}
      />
      <h4>{card?.name || 'Unnamed Product'}</h4>
      <p>{card?.set?.name || 'Unknown Set'}</p>
      <div className="actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToLibrary}>Add to My Library</button>
      </div>
    </div>
  );
};

export default ProductCard;
