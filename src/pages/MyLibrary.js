// src/pages/MyLibrary.js
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MyLibrary.module.css';

const MyLibrary = () => {
  const library = useSelector((state) => state.library);

  return (
    <div className={styles.grid}>
      {library.length === 0 ? (
        <p>No cards in your library</p>
      ) : (
        library.map((card, index) => (
          <div key={index} className="library-card">
            <img
              src={card?.images?.small || 'default-image-url.jpg'}
              alt={card?.name || 'Unnamed Product'}
            />
            <h4>{card?.name || 'Unnamed Product'}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLibrary;
