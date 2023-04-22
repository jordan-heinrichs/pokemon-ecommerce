// src/pages/MyLibrary.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/shared/ProductCard';
import styles from './MyLibrary.module.css';

const MyLibrary = () => {
  const library = useSelector((state) => state.library);

  return (
    <div>
      <h1>My Library</h1>
      <div className={styles.container}>
        {library.map((card) => (
          <ProductCard key={card.id} product={card} />
        ))}
      </div>
      {library.length === 0 && (
        <div>
          <h2>Your library is empty.</h2>
          <p>Use the "Add to My Library" button on the Shop page to add Pokémon cards to your library.</p>
        </div>
      )}
    </div>
  );
};

export default MyLibrary;
