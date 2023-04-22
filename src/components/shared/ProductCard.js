import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToLibrary } from '../../store/actions';
import './ProductCard.module.css';

const ProductCard = ({ card }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(card));
  };

  const handleAddToLibrary = () => {
    dispatch(addToLibrary(card));
  };

  return (
    <div className="product-card">
      <img src={card.images.small} alt={card.name} />
      <h4>{card.name}</h4>
      <p>{card.set.name}</p>
      <div className="actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToLibrary}>Add to My Library</button>
      </div>
    </div>
  );
};

export default ProductCard;
